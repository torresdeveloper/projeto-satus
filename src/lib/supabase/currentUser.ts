import { User, UserResponse } from "@supabase/supabase-js";

export interface CurrentUser {
  id: string;
  email: string;
  displayName: string;
}

export const supabaseUserToCurrentUser = (
  user: UserResponse | User | undefined
): CurrentUser | undefined => {
  let userResponse: UserResponse | undefined;
  let userUser: User | undefined;

  if (!user) return undefined;

  if ("data" in user) {
    userResponse = user as UserResponse;
    userUser = userResponse.data.user || undefined;
  } else {
    userResponse = undefined;
    userUser = user as User;
  }

  if (userUser?.id) {
    const currentUser: CurrentUser = {
      id: userUser.id,
      email: userUser.email!,
      // displayName: userUser.user_metadata.full_name,
      displayName: userUser.email!.split("@").shift() || "Desconhecido",
    };

    console.log("currentUser: ", userUser);

    return currentUser;
  }

  return undefined;
};
