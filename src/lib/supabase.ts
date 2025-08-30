import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Provide a safe fallback when env vars are missing so the app can run in dev
let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // lightweight stub that mimics the auth surface we use elsewhere
  // so calls won't crash if Supabase isn't configured yet
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const authStub: any = {
    signUp: async () => ({ data: null, error: new Error('Supabase not configured') }),
    signInWithPassword: async () => ({ data: null, error: new Error('Supabase not configured') }),
    signOut: async () => ({ error: null }),
    getUser: async () => ({ data: { user: null } }),
    onAuthStateChange: (_handler: any) => ({ data: { subscription: { unsubscribe: () => {} } } }),
  };

  // minimal supabase-like object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase = ({ auth: authStub } as any) as SupabaseClient;
  // warn once
  // eslint-disable-next-line no-console
  console.warn('Supabase environment variables missing — supabase client running in stub mode');
}

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export { supabase };

// Auth helpers (use safe stubs when supabase isn't configured)
export const signUp = async (email: string, password: string, fullName: string) => {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  } as any);
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  if (!supabase) return { data: null, error: new Error('Supabase not configured') };
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  } as any);
  return { data, error };
};

export const signOut = async () => {
  if (!supabase) return { error: null };
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  if (!supabase) return null;
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};