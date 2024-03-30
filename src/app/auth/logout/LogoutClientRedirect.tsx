"use client";

import { useComponentDidMount } from "@/hooks/useComponentDidMount";
import { createSupabaseWebClient } from "@/lib/supabase/client";

export const LogoutClientRedirect = () => {
  useComponentDidMount(async () => {
    const supabase = createSupabaseWebClient();
    await supabase.auth.signOut();
    window.location.href = "/";
  });

  return null;
};
