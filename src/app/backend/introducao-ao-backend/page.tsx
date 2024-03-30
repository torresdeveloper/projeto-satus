"use server";

import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { useServerPageProps } from "@/hooks/useServerPageProps";
import { BackendEnum, BackendItems, BackendTitle } from "@/types/Backend";

export default async function Backend() {
  const pageProps = await useServerPageProps();

  return (
    <BasePage
      menu="Back-end"
      pageProps={pageProps}
      secondaryItems={BackendItems(BackendEnum.IntroducaoAoBackend)}
      secondaryTitle={BackendTitle()}
    >
      <PageTitle
        title="Introdução ao Backend"
        headline={
          <>
            <time dateTime="2024-03-28">28 Mar 2024</time>
          </>
        }
      />

      <div className="prose">
        <p>
          O backend faz tudo que o usuário não vê na tela, por exemplo, ele
          salva suas informações, faz login, envia e-mails, etc. Geralmente ele
          é mais complexo de iniciar, porém se você já tem uma base de
          programação, pode ser mais fácil que o frontend.
        </p>

        <p>
          Caso você não tenha uma base de programação, você pode{" "}
          <a href="/frontend/introducao-ao-frontend">começar pelo frontend</a>{" "}
          ou aprender a criar APIs usando a linguagem mais abundante em empregos
          com bons salários: NodeJS.
        </p>

        <YoutubeVideo videoId="zaWFnHagbrM" />

        <h2>Linguagens de Programação:</h2>
        <p>
          O ideal é você escolher uma linguagem de programação e começar com
          ela. Caso você esteja procurando um emprego bom como programador no
          Brasil, você pode começar seguramente com Node.js. Mas se quiser
          conhecer a fundo as linguagens de programação, você deveria testar
          algumas linguagens antes de escolher, como Node.js, Go e/ou Python
          (todas estas opções são boas para conseguir um emprego de backend).
        </p>

        <h2>APIs:</h2>
        <p>
          A maioria dos backends trabalham com desenvolvimento de APIs. APIs são
          a parte invisível dos sites e aplicativos.
        </p>
        <h3>API Endpoints:</h3>
        <p>
          É importante saber o que são endpoints (GET, POST, PUT, DELETE) pois
          eles são a base de uma API.
        </p>

        <h2>Desenvolvimento de Jogos:</h2>
        <p>
          Infelizmente se você está querendo iniciar como programador,
          especialmente backend, você não deve começar com desenvolvimento de
          jogos. Desenvolvimento de jogos é uma área com escassez de empregos,
          além de ser muito complexo. Você provavelmente precisa de experiência
          para começar a trabalhar com desenvolvimento de jogos (junior), pode
          ser bom aproveitar o estágio da faculdade. Se você realmente gosta e
          está disposto a se dedicar então tudo bem, vá em frente e tenha a
          chance de acordar feliz todos os dias trabalhando com algo que você
          ama! Mas se busca dinheiro e emprego estável rápido, é melhor focar em
          APIs ou frontend.
        </p>

        <h2>Banco de Dados:</h2>
        <p>
          Como foi dito antes, o backend é a parte invisível dos sites e
          aplicativos. Quando o backend precisa salvar alguma informação, ele
          salva em um Banco de Dados. Existem vários tipos de Banco de Dados,
          atualmente para conseguir emprego, indico PostgreSQL e MongoDB.
        </p>

        <h2>Portifólio:</h2>
        <p>
          Uma das formas de se destacar no mercado de trabalho é criar um
          Portifólio com os seus projetos. Sendo backend você não precisa de um
          portifólio tão bonito quanto um frontend, mas ter uma página falando
          sobre você e seus projetos é uma ótima forma de se destacar e aumentar
          suas chances de conseguir um emprego na área.
        </p>

        <h2>Github:</h2>
        <p>
          Em qualquer lugar que você for trabalhar, precisará usar controle de
          versão GIT. É uma técnica usada por todos os programadores do planeta
          para salvar seus códigos e projetos. Todas as vagas de emprego exigem
          que você use GIT, é um requisito obrigatório antes de você começar a
          fazer entrevistas.
        </p>
      </div>
    </BasePage>
  );
}

const YoutubeVideo = ({ videoId }: { videoId: string }) => {
  return (
    <div>
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
      >
        <img
          src="/icons/youtube-play.svg"
          alt="Play"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-20 w-16 h-16"
        />
        <img
          // width={1280}
          // height={720}
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Imagem de um laptop com código HTML, CSS e JavaScript"
        />
      </a>
    </div>
  );
};
