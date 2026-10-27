create table if not exists likes (
  id bigint generated always as identity primary key,
  post_slug text unique not null,
  count integer not null default 0
);
create table if not exists comments (
  id bigint generated always as identity primary key,
  post_slug text not null,
  author_name text not null,
  content text not null,
  created_at timestamptz not null default now()
);
alter table likes enable row level security;
alter table comments enable row level security;
create policy "read likes" on likes for select using (true);
create policy "insert likes" on likes for insert with check (true);
create policy "update likes" on likes for update using (true);
create policy "read comments" on comments for select using (true);
create policy "insert comments" on comments for insert with check (true);
