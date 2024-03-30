import {
  CurrentUser,
  supabaseUserToCurrentUser,
} from "@/lib/supabase/currentUser";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const useCurrentUserServer = async (): Promise<
  CurrentUser | undefined
> => {
  const supabase = await createSupabaseServerClient();
  const user = await supabase.auth.getUser();
  const currentUser = supabaseUserToCurrentUser(user);
  return currentUser;
};
