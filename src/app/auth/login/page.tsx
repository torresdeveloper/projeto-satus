import { BasePage } from "@/components/base/BasePage";
import { login, signup } from "./actions";
import { useCurrentUserServer } from "@/hooks/useCurrentUserServer";
import { redirect } from "next/navigation";
import { LoginForm } from "./LoginForm";

export default async function LoginPage() {
  const user = await useCurrentUserServer();
  if (user) {
    redirect("/");
  }

  return (
    <BasePage menu="" fullWidth>
      <LoginForm login={login} signup={signup} />
    </BasePage>
  );
}
