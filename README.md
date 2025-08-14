# 🤖 Ollama TypeScript Client

A fun little TypeScript client that chats with your local Ollama AI models! 🚀

## ✨ What This Does

This simple client demonstrates:
- 📡 Making HTTP requests to Ollama's REST API
- 🎯 Type-safe interfaces for requests and responses
- 🤔 Asking AI questions and getting smart answers
- 📊 Inspecting the full response (including context tokens)

## 🛠️ Quick Start

### 1. Make Sure Ollama is Running 🏃‍♂️
```bash
# From the parent directory
cd ../ollama-docker
docker compose up -d

# Pull a model if you haven't already
docker exec -it ollama ollama pull llama3.2:1b
```

### 2. Install Dependencies 📦
```bash
npm install
```

### 3. Run the Magic! ✨
```bash
npm run dev
```

## 🎪 What You'll See

The client will ask the AI: *"Explain machine learning in one sentence"* and show you:

- 💬 **The AI's response** - A smart, concise explanation
- 🔍 **Full response object** - Including metadata and context tokens
- ⚡ **Performance stats** - How long it took to generate

## 🔧 Available Scripts

- `npm run dev` - Run with hot reload using tsx
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled version

## 🎨 Customize It!

Want to try different things? Edit `src/index.ts`:

```typescript
const payload: OllamaRequest = {
    model: "llama3.2:1b",           // Try different models!
    prompt: "Your question here",    // Ask anything!
    stream: false                    // Set to true for streaming
};
```

## 🚀 Fun Experiments

- Try different models: `llama3.2:3b`, `codellama:7b`
- Ask coding questions, creative writing prompts, or trivia
- Enable streaming with `stream: true`
- Use the context array for conversation continuity

## 🤓 Tech Stack

- **TypeScript** - For type safety and better DX
- **tsx** - For fast development with hot reload
- **Native fetch** - No extra HTTP libraries needed!

---

Happy AI chatting! 🎉 Ask your local models anything! 💭
