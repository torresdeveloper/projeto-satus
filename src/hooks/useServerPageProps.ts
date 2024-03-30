import { isUsuarioPremium } from "@/lib/supabase/server";
import { useCurrentUserServer } from "./useCurrentUserServer";
import { CurrentUser } from "@/lib/supabase/currentUser";

export interface PageProps {
  user: CurrentUser | undefined;
  isPremium: boolean;
}

export const useServerPageProps = async (): Promise<PageProps> => {
  const user = await useCurrentUserServer();
  const isPremium = await isUsuarioPremium();

  return {
    user,
    isPremium,
  };
};
