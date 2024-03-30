import { CurrentUser } from "@/lib/supabase/currentUser";
import Link from "next/link";

export const LoginPreview = ({
  currentUser,
}: {
  currentUser: CurrentUser | undefined;
}) => {
  let content;

  if (!currentUser) {
    content = (
      <div className="prose text-sm">
        <Link href="/auth/login">Entrar na minha conta</Link>
      </div>
    );
  } else {
    content = (
      <div className="prose text-sm">
        <p className="!mb-0 sm:!mb-2">Olá, {currentUser.displayName}!</p>
        <Link href="/auth/logout">Sair</Link>
      </div>
    );
  }

  return (
    <div className="mb-4 sm:absolute sm:bottom-20 sm:left-6 sm:right-6 text-center">
      {content}
    </div>
  );
};
