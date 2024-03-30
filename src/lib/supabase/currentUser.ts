import { UserResponse } from "@supabase/supabase-js";

export interface CurrentUser {
  id: string;
  email: string;
  displayName: string;
}

export const supabaseUserToCurrentUser = (
  user: UserResponse
): CurrentUser | undefined => {
  if (!user || user.error?.message) {
    // const errorMessage = user?.error?.message || "No user found";
    // throw new Error(errorMessage);
    return undefined;
  }

  if (!user.data.user?.id) {
    // throw new Error("No user ID found");
    return undefined;
  }

  const currentUser: CurrentUser = {
    id: user.data.user.id,
    email: user.data.user.email!,
    // displayName: user.data.user.user_metadata.full_name,
    displayName: user.data.user.email!.split("@").shift() || "Desconhecido",
  };

  console.log("currentUser: ", user.data.user);

  return currentUser;
};
