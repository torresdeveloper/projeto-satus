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
    const user = await supabase.auth.getUser();
    const currentUser = supabaseUserToCurrentUser(user);
    setUser(currentUser);
  });

  return user;
};
