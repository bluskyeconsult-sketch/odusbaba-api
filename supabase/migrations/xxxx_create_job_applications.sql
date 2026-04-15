create table job_applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null,
  user_id uuid not null,
  status text default 'submitted',
  created_at timestamp with time zone default now()
);
