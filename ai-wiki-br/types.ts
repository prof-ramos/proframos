export enum Category {
  ALL = 'Todos',
  EXAM_PREP = 'Concursos Públicos',
  LEGAL_DRAFTING = 'Redação Jurídica',
  ANALYSIS = 'Análise de Documentos',
  ADMINISTRATIVE = 'Administrativo',
  CLIENT_COMMS = 'Atendimento ao Cliente',
}

export enum Complexity {
  Iniciante = 'Iniciante',
  Intermediário = 'Intermediário',
  Avançado = 'Avançado',
}

export interface Category_ {
  id: string;
  name: string;
  icon: string;
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: Category;
  tags: string[];
  complexity: Complexity;
  isNew?: boolean;
}

export interface PromptTag {
  prompt_id: string;
  tag: string;
}

export interface FilterState {
  search: string;
  category: Category;
  viewMode: 'grid' | 'list';
}

export type ToastType = 'success' | 'error' | 'info';

export interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}
