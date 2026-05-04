import { supabase } from './supabase';

export const generateCompletion = async (
  modelName: string,
  promptText: string
): Promise<string> => {
  const { data, error } = await supabase.functions.invoke('generate', {
    body: { model: modelName, prompt: promptText },
  });
  if (error) throw new Error('Falha ao comunicar com a IA.');
  return data as string;
};
