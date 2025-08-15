interface OllamaResponse {
    response: string;
    done: boolean;
    context?: number[];
}

interface OllamaRequest {
    model: string;
    prompt: string;
    stream: boolean;
}

const OLLAMA_URL = process.env.OLLAMA_URL ?? 'http://localhost:11434';

async function testOllama(): Promise<void> {
    
    const url = `${OLLAMA_URL}/api/generate`;

    const payload: OllamaRequest = {
        model: "llama3.2:1b",
        prompt: "Explain machine learning in one sentence.",
        stream: false
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const result: OllamaResponse = await response.json();
            console.log("Response:", result.response);
            console.dir(result);
        } else {
            console.error("Error:", response.status);
        }
    } catch (error) {
        console.error("Network error:", error);
    }
}

// Run the test
testOllama();
