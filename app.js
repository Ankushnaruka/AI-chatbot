const express = require('express');
const dotenv = require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(express.static(__dirname + '/frontend'));
app.use(express.json());

// API key hardcoded as requested
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Select the model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generation_config = {
    maxOutputTokens: 100,
    temperature: 0.7
};

app.get('/', (req, res) => {
    const filePath = __dirname + '/frontend/index.html';
    res.sendFile(filePath);
});

app.post('/bot', async (req, res) => {
    try {
        const prompt = `You are a helpful assistant. Answer the following question: ${req.body.message}`;
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        res.send({ response: text });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});