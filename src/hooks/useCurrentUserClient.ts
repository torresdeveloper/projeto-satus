"use client";

import { createSupabaseWebClient } from "@/lib/supabase/client";
import { useState } from "react";
import { useComponentDidMount } from "./useComponentDidMount";
import {
  CurrentUser,
  supabaseUserToCurrentUser,
} from "@/lib/supabase/currentUser";

export const useCurrentUserClient = (): CurrentUser | undefined => {
  const supabase = createSupabaseWebClient();
  const [user, setUser] = useState<CurrentUser | undefined>(undefined);

  useComponentDidMount(async () => {
    const supabaseUser = await supabase.auth.getUser();
    const currentUser = supabaseUserToCurrentUser(supabaseUser);
    setUser(currentUser);

    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user && !user) {
        // setUser(supabaseUserToCurrentUser(session.user));
      } else if (event === "SIGNED_OUT" && user) {
        setUser(undefined);
        window.location.reload();
      }
    });
  });

  return user;
};
