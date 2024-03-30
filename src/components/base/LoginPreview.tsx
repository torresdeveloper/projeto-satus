import { useCurrentUserClient } from "@/hooks/useCurrentUserClient";
import Link from "next/link";

export const LoginPreview = () => {
  const currentUser = useCurrentUserClient();

  let content;

  if (!currentUser) {
    content = (
      <div className="prose text-sm">
        <Link href="/auth/login">Login</Link>
      </div>
    );
  } else {
    content = (
      <div className="prose text-sm">
        <p>Olá, {currentUser.displayName}!</p>
        <Link href="/auth/logout">Logout</Link>
      </div>
    );
  }

  return (
    <div className="absolute bottom-20 left-6 right-6 text-center">
      {content}
    </div>
  );
};
