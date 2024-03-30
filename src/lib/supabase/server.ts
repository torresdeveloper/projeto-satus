// https://supabase.com/docs/guides/auth/server-side/nextjs

import { DbServicoPremium } from "@/types/SupabaseDatabase";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createSupabaseServerClient() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}

export async function isUsuarioPremium() {
  const supabase = createSupabaseServerClient();
  const supabaseUser = await supabase.auth.getUser();
  const userId = supabaseUser?.data.user?.id;
  if (!userId) {
    return false;
  }
  // https://supabase.com/docs/reference/javascript/using-filters
  const perfil = await supabase
    .from("perfil")
    .select("isPremium")
    .eq("userId", userId)
    .limit(1)
    .maybeSingle();
  const isPremium = perfil.data?.isPremium || false;
  return isPremium;
}

export async function listarServicosPremium(): Promise<DbServicoPremium[]> {
  const supabase = createSupabaseServerClient();
  const servicos = await supabase
    .from("servicosPremium")
    .select("*")
    .order("id", { ascending: false })
    .limit(10);
  return servicos.data || [];
}

export async function detalhesServicoPremium(
  id: string
): Promise<DbServicoPremium> {
  const supabase = createSupabaseServerClient();
  const servico = await supabase
    .from("servicosPremium")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();
  return servico.data!;
}
