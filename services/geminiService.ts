
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development if the API_KEY is not set.
  // In a real production environment, this should be handled more gracefully.
  console.warn("Gemini API key not found. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const explainCode = async (code: string): Promise<string> => {
  if (!API_KEY) {
    return Promise.reject("API Key not configured.");
  }

  try {
    const prompt = `
      Please explain the following C code snippet for a beginner programmer. 
      Break down the logic step-by-step.
      Use simple terms and provide context where necessary.
      Format the output as clean HTML using tags like <p>, <strong>, <ul>, <li>, and <code> for inline code. Do not include a markdown block for the whole response.
      
      C Code:
      \`\`\`c
      ${code}
      \`\`\`
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
};
