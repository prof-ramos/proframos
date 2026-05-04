create extension if not exists "pgcrypto";

create type complexity_level as enum ('Iniciante', 'Intermediário', 'Avançado');

create table categories (
  id   uuid primary key default gen_random_uuid(),
  name text not null unique,
  icon text not null
);

create table prompts (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  description text not null,
  content     text not null,
  category_id uuid references categories(id) on delete set null,
  complexity  complexity_level not null,
  is_new      boolean not null default false,
  created_at  timestamptz not null default now()
);

create table prompt_tags (
  prompt_id uuid references prompts(id) on delete cascade,
  tag       text not null,
  primary key (prompt_id, tag)
);
