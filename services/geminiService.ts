import { GoogleGenAI, Type } from "@google/genai";
import { Motorcycle, AIAnalysisResult } from "../types";

const apiKey = process.env.API_KEY || '';

// Fallback mock analysis if API key is missing or fails, for demo robustness
const MOCK_ANALYSIS: AIAnalysisResult = {
  summary: "This vehicle demonstrates exceptional engineering capabilities suitable for high-performance track usage and spirited street riding. The aerodynamic package is top-tier.",
  pros: ["Class-leading power-to-weight ratio", "Advanced electronic suspension", "Premium build quality"],
  cons: ["Aggressive ergonomics may fatigue on long rides", "High maintenance cost", "Significant heat generation"],
  riderProfile: "Experienced riders seeking track-focused performance."
};

export const analyzeMotorcycle = async (motorcycle: Motorcycle): Promise<AIAnalysisResult> => {
  if (!apiKey) {
    console.warn("Gemini API Key missing. Returning mock analysis.");
    return new Promise(resolve => setTimeout(() => resolve(MOCK_ANALYSIS), 2000));
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    Analyze the following motorcycle as a premium motorcycle intelligence expert.
    
    Vehicle: ${motorcycle.make} ${motorcycle.model} (${motorcycle.year})
    Category: ${motorcycle.category}
    Specs: ${JSON.stringify(motorcycle.specs)}
    
    Provide a JSON response with:
    1. A sophisticated summary (max 50 words).
    2. 3 key pros (technical focus).
    3. 3 key cons (practical focus).
    4. Ideal rider profile.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            pros: { type: Type.ARRAY, items: { type: Type.STRING } },
            cons: { type: Type.ARRAY, items: { type: Type.STRING } },
            riderProfile: { type: Type.STRING }
          },
          required: ["summary", "pros", "cons", "riderProfile"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text) as AIAnalysisResult;

  } catch (error) {
    console.error("AI Analysis failed:", error);
    return MOCK_ANALYSIS;
  }
};
