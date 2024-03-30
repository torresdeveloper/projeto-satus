"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const LoginForm = ({
  login,
  signup,
}: {
  login: (data: FormData) => Promise<void>;
  signup: (data: FormData) => Promise<void>;
}) => {
  const [tab, setTab] = useState<"login" | "signup">("login");

  return (
    <div className="max-w-4xl m-auto">
      <div className="flex sm:hidden">
        <div className="flex-1 mb-8">
          <button
            className={twMerge(
              "p-2 text-sm text-gray-500 border-gray-500 w-full",
              tab === "login" &&
                "bg-orange-100 text-gray-800 dark:bg-yellow-600 dark:text-white"
            )}
            onClick={() => setTab("login")}
          >
            Entrar
          </button>
        </div>
        <div className="flex-1">
          <button
            className={twMerge(
              "p-2 text-sm text-gray-500 border-gray-500 w-full",
              tab === "signup" &&
                "bg-orange-100 text-gray-800 dark:bg-yellow-600 dark:text-white"
            )}
            onClick={() => setTab("signup")}
          >
            Criar Conta
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-10">
        <div
          className={twMerge(
            "flex-1 max-w-96 m-auto sm:m-0",
            tab === "signup" && "hidden sm:block"
          )}
        >
          <form className="flex flex-col gap-6">
            <h2 className="text-base font-bold text-yellow-500">Login</h2>
            <div>
              <label htmlFor="email-login">Email:</label>
              <input
                className="w-full"
                id="email-login"
                name="email"
                type="email"
                required
              />
            </div>
            <div>
              <label htmlFor="password-login">Senha:</label>
              <input
                className="w-full"
                id="password-login"
                name="password"
                type="password"
                required
              />
            </div>
            <div className="text-right">
              <button formAction={login}>Log in</button>
            </div>
          </form>
        </div>
        <div
          className={twMerge(
            "flex-1 max-w-96 m-auto sm:m-0",
            tab === "login" && "hidden sm:block"
          )}
        >
          <form className="flex flex-col gap-6">
            <h2 className="text-base font-bold text-yellow-500">Criar Conta</h2>
            <div>
              <label htmlFor="email-cadastro">Email:</label>
              <input
                className="w-full"
                id="email-cadastro"
                name="email"
                type="email"
                required
              />
            </div>
            <div>
              <label htmlFor="password-cadastro">Senha:</label>
              <input
                className="w-full"
                id="password-cadastro"
                name="password"
                type="password"
                required
              />
            </div>
            <div>
              <label htmlFor="password-cadastro">Confirme sua Senha:</label>
              <input
                className="w-full"
                id="password-2-cadastro"
                name="password-2"
                type="password"
                required
              />
            </div>
            <div className="text-right">
              <button formAction={signup}>Criar Conta</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
