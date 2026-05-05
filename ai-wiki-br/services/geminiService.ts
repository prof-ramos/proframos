export const generateCompletion = async (
  modelName: string,
  promptText: string
): Promise<string> => {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: modelName, prompt: promptText }),
  });
  if (!response.ok) throw new Error('Falha ao comunicar com a IA.');
  return response.text();
};
