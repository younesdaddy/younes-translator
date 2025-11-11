import { createClient } from '@supabase/supabase-js';

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const supabase = createClient(URL, ANON); // safe for client
export const supabaseAdmin = SERVICE ? createClient(URL, SERVICE) : null; // server-only
