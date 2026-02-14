
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBeautyAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are Janki Khatroja, the owner of "GlamGirlByJanki" luxury salon in Ottawa. 
      A client asks: "${userPrompt}". 
      Respond with professional, high-end, and personalized beauty advice. 
      Mention specific premium services from our menu like Silk Manicures, 24K Gold Facials, or Precision Threading. 
      Be elegant and sophisticated.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I would be honored to provide a custom consultation for you. Let's discuss your beauty goals in person at GlamGirlByJanki.";
  }
};

export const getBookingConfirmationMessage = async (clientName: string, serviceName: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are Janki Khatroja, owner of GlamGirlByJanki luxury salon. Write a very short, elegant, and warm message to ${clientName} who just booked a ${serviceName}. 
      Make them feel excited and pampered. Mention that you can't wait to see them in our Ottawa studio. Maximum 3 sentences.`,
      config: {
        temperature: 0.8,
        maxOutputTokens: 100,
      }
    });
    return response.text;
  } catch (error) {
    return `Hello ${clientName}, I am so looking forward to seeing you for your ${serviceName} at GlamGirlByJanki. We will make it a truly luxurious experience!`;
  }
};
