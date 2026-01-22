import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { RESUME_DATA } from '../constants';

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
Eres un asistente virtual profesional que representa a ${RESUME_DATA.name}.
Tu objetivo es responder preguntas de reclutadores o visitantes sobre la experiencia, habilidades y proyectos de ${RESUME_DATA.name}.

Utiliza EXCLUSIVAMENTE la siguiente información para responder:
${JSON.stringify(RESUME_DATA, null, 2)}

Reglas:
1. Sé profesional, cortés y conciso.
2. Si te preguntan algo que no está en la información proporcionada, di amablemente que no tienes esa información, pero que pueden contactar a ${RESUME_DATA.name} directamente al email ${RESUME_DATA.email}.
3. Habla siempre en primera persona del singular (como si fueras el asistente de Juan) o tercera persona neutral, pero promocionando sus capacidades.
4. Si preguntan por contacto, proporciona el email o LinkedIn.
5. El idioma principal es Español.
`;

export const initializeChat = async () => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key missing");
    return;
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  } catch (error) {
    console.error("Error initializing chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
    if (!chatSession) {
      return "Lo siento, el servicio de chat no está disponible en este momento. Por favor verifica la configuración de la API Key.";
    }
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "No pude generar una respuesta.";
  } catch (error) {
    console.error("Error sending message:", error);
    return "Hubo un error al procesar tu mensaje. Por favor intenta de nuevo.";
  }
};