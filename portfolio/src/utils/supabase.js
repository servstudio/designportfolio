import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
  process.env.NEXT_PROJECT_SUPA_URL,
  process.env.NEXT_PROJECT_SUPA_KEY
)
