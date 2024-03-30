import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { FrontendEnum, FrontendItems, FrontendTitle } from "@/types/Frontend";
import Image from "next/image";

export default function Frontend() {
  return (
    <BasePage
      menu="Front-end"
      secondaryItems={FrontendItems(FrontendEnum.IntroducaoAoFrontend)}
      secondaryTitle={FrontendTitle()}
    >
      <PageTitle
        title="Introdução ao Frontend"
        headline={
          <>
            <time dateTime="2024-03-28">28 Mar 2024</time>
          </>
        }
      />

      <div className="prose">
        <p>
          Parabéns por dar o primeiro passo no emocionante mundo do
          desenvolvimento web! Este guia irá te apresentar os fundamentos de
          HTML, CSS e JavaScript, as três linguagens principais que você precisa
          dominar para criar websites interativos e dinâmicos.
        </p>

        <YoutubeVideo videoId="lg6uvLNv8zE" />

        <h2>HTML:</h2>
        <p>
          A HyperText Markup Language (HTML) é a base de todo website. Ela
          define a estrutura e o conteúdo da página, utilizando tags para
          identificar diferentes elementos, como títulos, parágrafos, imagens e
          links.
        </p>
        <h3>Dicas para começar com HTML:</h3>
        <p>
          Aprenda os elementos básicos do HTML, como tags de título, parágrafo,
          imagem e link. Pratique a criação de páginas HTML simples com um
          editor de texto como o VSCode. Utilize recursos online como o youtube
          para tutoriais e exemplos.
        </p>
        <h2>CSS:</h2>
        <p>
          Cascading Style Sheets (CSS) é a linguagem que dá vida ao seu website,
          permitindo que você defina cores, fontes, tamanhos, layouts e
          animações para os elementos HTML.
        </p>
        <h3>Dicas para começar com CSS:</h3>
        <p>
          Aprenda os seletores CSS para identificar quais elementos você deseja
          estilizar. Domine as propriedades CSS básicas como cor, tamanho de
          fonte, posicionamento e layout. Utilize ferramentas online como o CSS
          Diner:{" "}
          <a
            href="https://flukeout.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://flukeout.github.io/
          </a>
          para praticar suas habilidades em CSS.
        </p>
        <h2>JavaScript:</h2>
        <p>
          JavaScript é uma linguagem de programação que torna seu website
          interativo, permitindo que você adicione funcionalidades como menus
          suspensos, animações e validação de formulários.
        </p>
        <h3>Dicas para começar com JavaScript:</h3>
        <p>
          Aprenda os fundamentos da programação JavaScript, como variáveis,
          funções e estruturas de controle. Pratique a criação de scripts
          JavaScript simples para adicionar funcionalidades básicas ao seu
          website. Eu gosto de aprender pelo youtube, hoje em dia também tem
          opções de aprendizado para aprender JavaScript de forma{" "}
          <a
            href="https://pt.khanacademy.org/computing/computer-programming/programming"
            target="blank"
            rel="noopener noreferrer"
          >
            interativa
          </a>
          , isso é completamente opcional mas pode ajudar caso você não tenha um
          computador bom ou não gosta muito de ficar só na teoria.
        </p>
        <h2>React:</h2>
        <h3 className="!mt-0">React é importante!</h3>
        <p>
          Se você está buscando emprego de Front-end e não tem 2 ou 3 anos de
          tempo livre para estudar intensivamente, saiba que a maioria das
          empresas estão contratando desenvolvedores React, então aprenda React
          e vai ficar mais fácil conseguir seu primeiro emprego de Front-end
          React.
        </p>
        <h2>Dicas para o Sucesso:</h2>
        <p>
          Pratique com frequência: Crie pequenos projetos para aplicar o que
          você aprendeu e desenvolver suas habilidades. Utilize a comunidade:
          Participe de fóruns online e comunidades de desenvolvedores para tirar
          dúvidas e aprender com outros programadores. Não desista: Aprender a
          programar exige tempo e dedicação. Persistência é fundamental para
          alcançar seus objetivos. Conclusão:
        </p>
        <p>
          Dominar HTML, CSS e JavaScript é a chave para se tornar um
          desenvolvedor web completo. Este guia te deu os primeiros passos, mas
          a jornada continua. Continue aprendendo, praticando e se desafiando
          para construir websites incríveis e conquistar o seu lugar na
          indústria de desenvolvimento web!
        </p>
        <p>Lembre-se:</p>
        <p>
          Este guia é apenas um ponto de partida. A jornada para se tornar um
          desenvolvedor web é longa e exige dedicação. Mas com persistência e
          paixão, você pode alcançar seus objetivos e construir uma carreira
          gratificante nesta área em constante crescimento.
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
