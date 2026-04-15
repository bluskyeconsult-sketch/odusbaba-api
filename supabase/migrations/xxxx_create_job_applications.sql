create table job_applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  job_id uuid not null,
  job_title text not null,
  status text not null default 'submitted',
  created_at timestamptz default now()
);
