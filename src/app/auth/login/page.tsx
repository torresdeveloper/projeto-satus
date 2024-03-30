import { BasePage } from "@/components/base/BasePage";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { useComponentDidMount } from "@/hooks/useComponentDidMount";
import { login, signup } from "./actions";
import { useCurrentUserServer } from "@/hooks/useCurrentUserServer";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const user = await useCurrentUserServer();
  if (user) {
    redirect("/");
  }

  //async function checkLogin() {
  //  "use server";
  //
  //  if (user.error || !user.data.user.id) {
  //    return {
  //      status: 302, // 301=perm, 302=temp, 307=temp?
  //      headers: {
  //        location: "/",
  //      },
  //    };
  //  }
  //}

  return (
    <BasePage menu="">
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </BasePage>
  );
}
