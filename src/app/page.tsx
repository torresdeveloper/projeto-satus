import { BasePage } from "@/components/base/BasePage";
import { useServerPageProps } from "@/hooks/useServerPageProps";
import Link from "next/link";

export default async function Home() {
  const pageProps = await useServerPageProps();

  return (
    <BasePage menu="Início" pageProps={pageProps} fullWidth>
      <main className="flex flex-col items-center justify-center pt-8 lg:p-16 lg:pt-32">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-[#F9E6BB] after:via-[#F9E6BB] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#e3ae5d] before:dark:opacity-10 after:dark:from-[#bc6407] after:dark:via-[#bc6407] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="text-3xl lg:text-5xl font-bold relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:text-white">
            Projeto Satus
          </h1>
        </div>

        <div className="lg:mt-56 mt-14 mb-16 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          {/* <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-semibold`}>
              Newsletter{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Receba dicas semanalmente sobre tecnologia e carreira.
            </p>
          </a> */}
          <Link
            href="/equipe"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-xl font-semibold`}>
              Time Satus{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Informações sobre membros da equipe e suas habilidades.
            </p>
          </Link>

          <Link
            href="/inteligencia-artificial"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-semibold`}>
              Artigos Interativos{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Cada leitura é uma experiência única e interativa.
            </p>
          </Link>
        </div>
      </main>
    </BasePage>
  );
}
