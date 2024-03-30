import { BasePage } from "@/components/base/BasePage";
import { login, signup } from "./actions";
import { useCurrentUserServer } from "@/hooks/useCurrentUserServer";
import { redirect } from "next/navigation";
import { LoginForm } from "./LoginForm";
import { useServerPageProps } from "@/hooks/useServerPageProps";

export default async function LoginPage() {
  const pageProps = await useServerPageProps();

  if (pageProps.user) {
    redirect("/");
  }

  return (
    <BasePage menu="" fullWidth pageProps={pageProps}>
      <LoginForm login={login} signup={signup} />
    </BasePage>
  );
}
