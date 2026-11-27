import { createClient } from "@supabase/supabase-js";

const env = import.meta.env;
const url = env.VITE_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey =
  env.VITE_SUPABASE_ANON_KEY ||
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase = isSupabaseConfigured
  ? createClient(url, anonKey, {
      auth: {
        flowType: "pkce",
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;

export const PHOTO_BUCKET = "item-photos";

/** Destination for e-mail links (confirmation and password reset). */
export const authRedirectUrl = () =>
  env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/auth/callback`;

const NEXT_KEY = "auth:next";
export const rememberNextPath = (path) => {
  try {
    localStorage.setItem(NEXT_KEY, path);
  } catch {
    /* storage unavailable */
  }
};
export const takeNextPath = () => {
  try {
    const path = localStorage.getItem(NEXT_KEY);
    localStorage.removeItem(NEXT_KEY);
    return path && path.startsWith("/") && !path.startsWith("//") ? path : null;
  } catch {
    return null;
  }
};
