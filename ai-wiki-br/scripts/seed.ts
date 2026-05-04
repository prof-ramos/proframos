import { createClient } from '@supabase/supabase-js';
import { PROMPTS, CATEGORY_ICONS } from '../constants';
import { Category } from '../types';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const CATEGORY_NAMES: Record<Category, string> = {
  [Category.ALL]: 'Todos',
  [Category.EXAM_PREP]: 'Concursos Públicos',
  [Category.LEGAL_DRAFTING]: 'Redação Jurídica',
  [Category.ANALYSIS]: 'Análise de Documentos',
  [Category.ADMINISTRATIVE]: 'Administrativo',
  [Category.CLIENT_COMMS]: 'Atendimento ao Cliente',
};

async function seed() {
  const categoryRows = Object.entries(CATEGORY_NAMES).map(([key, name]) => ({
    name,
    icon: key,
  }));
  const { data: cats, error: catErr } = await supabase
    .from('categories')
    .upsert(categoryRows, { onConflict: 'name' })
    .select();
  if (catErr) throw catErr;

  const catMap = Object.fromEntries((cats ?? []).map((c: any) => [c.name, c.id]));

  for (const p of PROMPTS) {
    const categoryName = CATEGORY_NAMES[p.category];
    const { data: inserted, error: pErr } = await supabase
      .from('prompts')
      .upsert({
        title: p.title,
        description: p.description,
        content: p.content,
        category_id: catMap[categoryName],
        complexity: p.complexity,
        is_new: p.isNew ?? false,
      }, { onConflict: 'title' })
      .select()
      .single();
    if (pErr) throw pErr;

    if (p.tags.length > 0) {
      const tagRows = p.tags.map((tag) => ({ prompt_id: inserted.id, tag }));
      const { error: tErr } = await supabase.from('prompt_tags').upsert(tagRows, { onConflict: 'prompt_id,tag' });
      if (tErr) throw tErr;
    }
  }

  console.log(`Seeded ${PROMPTS.length} prompts.`);
}

seed().catch((e) => { console.error(e); process.exit(1); });
