import { GoogleGenAI } from "npm:@google/genai";

const ai = new GoogleGenAI({ apiKey: Deno.env.get("GEMINI_API_KEY")! });

Deno.serve(async (req) => {
  const { model, prompt } = await req.json();
  const response = await ai.models.generateContent({
    model: model ?? "gemini-2.0-flash",
    contents: prompt,
  });
  return new Response(response.text, {
    headers: { "Content-Type": "text/plain" },
  });
});
