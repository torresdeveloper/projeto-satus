import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { ItemPreviewRow } from "@/components/items/ItemPreviewRow";
import {
  InteligenciaArtificialEnum,
  InteligenciaArtificialItems,
  InteligenciaArtificialTitle,
} from "@/types/InteligenciaArtificial";

export default function InteligenciaArtificial() {
  return (
    <BasePage
      menu="Inteligência Artificial"
      secondaryItems={InteligenciaArtificialItems(
        InteligenciaArtificialEnum.FerramentasIAGratis
      )}
      secondaryTitle={InteligenciaArtificialTitle()}
    >
      <PageTitle
        title="Lista com as ferramentas de IA Grátis mais interessantes"
        headline={
          <>
            <time dateTime="2024-03-28">28 Mar 2024</time>
          </>
        }
      />

      <div className="prose">
        <p>
          Primeiramente você precisa saber que todas as ferramentas grátis
          possuem algum tipo de "plano premium".
        </p>

        <p>
          Isso não é necessariamente ruim, pois as empresas gastam muito
          dinheiro para proporcionar que nós tenhamos acesso à essas
          ferramentas. Mesmo assim ainda conseguimos fazer algumas coisas bem
          legais com as versões free sem precisar pagar nada.
        </p>

        <h2>Pesquisa de Conhecimento</h2>

        <h3 className="lg:!mt-0">
          Quando você quer aprender alguma coisa nova, onde você deveria ir?
        </h3>

        <ItemPreviewRow
          title="Perplexity.ai"
          imageSrc="https://th.bing.com/th?id=OSK.HEROzTh-UIznbcbNs2tLgGhuWR2y-TLdisOcyHvmvViIaTo&w=472&h=280&c=13&rs=2&o=6&pid=SANGAM"
        >
          Além de ser gratuita, tem acesso à internet e é muito rápida. Vale a
          pena.{" "}
          <a href="https://www.perplexity.ai/" target="_blank">
            Abrir Perplexity.ai
          </a>
        </ItemPreviewRow>
        <ItemPreviewRow
          title="Gemini"
          imageSrc="https://digitiz.fr/wp-content/uploads/2023/08/Google-Gemini.png"
        >
          É gratuita, possui acesso à internet e até executa códigos python se
          você pedir (apesar de não ser muito boa em programar).{" "}
          <a href="https://gemini.google.com/" target="_blank">
            Abrir Gemini
          </a>
        </ItemPreviewRow>
        <ItemPreviewRow
          title="Copilot"
          imageSrc="https://th.bing.com/th/id/OIP.dA9Rw1RILEWaFTP8NlTiJQAAAA?rs=1&pid=ImgDetMain"
        >
          É gratuita, possui acesso à internet. Criado pela Microsoft.{" "}
          <a
            href="https://www.bing.com/chat?q=Bing+AI&FORM=hpcodx"
            target="_blank"
          >
            Abrir Copilot
          </a>
        </ItemPreviewRow>

        <h2>Geração de Imagem</h2>

        <h3 className="lg:!mt-0">
          Transforme sua imaginação em realidade com essas ferramentas de
          geração de imagem.
        </h3>

        <ItemPreviewRow
          title="Leonardo AI"
          imageSrc="https://www.future-pedia.com/de/wp-content/uploads/2023/07/Leonardo-ai.jpg"
        >
          Consegue gerar imagens muito boas e agora estão iniciando com vídeos
          também, apesar dos vídeos não serem o ponto forte, as imagens são.{" "}
          <a href="https://leonardo.ai/" target="_blank">
            Abrir Leonardo AI
          </a>
        </ItemPreviewRow>
        <ItemPreviewRow
          title="SeaArt"
          imageSrc="https://i.ytimg.com/vi/ArUioHtvJ70/maxresdefault.jpg"
        >
          É gratuito, possui recursos básicos, mas consegue gerar músicas até em
          funk e trap em português.{" "}
          <a href="https://www.seaart.ai/pt" target="_blank">
            Abrir Suno AI
          </a>
        </ItemPreviewRow>
        <ItemPreviewRow
          title="Civit AI"
          imageSrc="https://techcrunch.com/wp-content/uploads/2023/11/civitai.jpg"
        >
          Um poderoso gerador de imagens onde você pode escolher dentre diversos
          modelos do Stable Diffusion onde cada modelo gera um tipo específico
          de imagens, dá pra encontrar modelos de tudo que é tipo, inclusive
          NSFW.{" "}
          <a href="https://civitai.com/" target="_blank">
            Abrir CivitAI
          </a>
        </ItemPreviewRow>

        <h2>Geração de Vídeos</h2>

        <h3 className="lg:!mt-0">
          A geração de Vídeos está em ritmo acelerado!
        </h3>

        <ul>
          <li>
            <a href="https://invideo.io/" target="_blank">
              Invideo AI:
            </a>{" "}
            Generating videos from text prompts
          </li>
          <li>
            <a href="https://www.descript.com/" target="_blank">
              Descript:
            </a>{" "}
            Script-based video editing
          </li>
          <li>
            <a href="https://runwayml.com/" target="_blank">
              Runway:
            </a>{" "}
            Exploring generative AI for text-based video creation
          </li>
          <li>
            <a href="https://fliki.ai/" target="_blank">
              Fliki:
            </a>{" "}
            Making videos tailored specifically for social media
          </li>
          <li>
            <a href="https://www.visla.us/" target="_blank">
              Visla:
            </a>{" "}
            Making scripts into videos
          </li>
          <li>
            <a href="https://www.opus.pro/" target="_blank">
              Opus Clip:
            </a>{" "}
            Turning long-form videos into short-form content
          </li>
          <li>
            <a href="https://www.colossyan.com/" target="_blank">
              Colossyan:
            </a>{" "}
            Creating videos for workplace learning
          </li>
          <li>
            <a href="https://www.deepbrain.io/" target="_blank">
              DeepBrain AI:
            </a>{" "}
            Turning text into videos
          </li>
          <li>
            <a href="https://hourone.ai/" target="_blank">
              Hour One:
            </a>{" "}
            Creating medium to short-form videos
          </li>
          <li>
            <a href="https://www.synthesia.io/" target="_blank">
              Synthesia:
            </a>{" "}
            Mixing in digital avatars
          </li>
        </ul>

        <p>
          A lista foi extraída do seguinte link, no artigo original você vai
          encontrar os prós e contras de cada um:{" "}
          <a
            href="https://invideo.io/blog/best-ai-video-generators/"
            target="_blank"
          >
            https://invideo.io/blog/best-ai-video-generators/
          </a>
          .
        </p>

        <h2>Geração de Músicas</h2>

        <h3 className="lg:!mt-0">
          Músicas ainda não tiveram seu momento de hype, mas não ficam para
          trás!
        </h3>

        <ItemPreviewRow
          title="Suno AI"
          imageSrc="https://i.ytimg.com/vi/XMCzZKnOcv4/maxresdefault.jpg"
        >
          É gratuito, possui recursos básicos, mas consegue gerar músicas até em
          funk e trap em português.{" "}
          <a href="https://www.suno.ai/" target="_blank">
            Abrir Suno AI
          </a>
        </ItemPreviewRow>
        <ItemPreviewRow
          title="Aiva AI"
          imageSrc="https://intelarter.com/wp-content/uploads/2023/07/aiva-ai-logo.webp"
        >
          É gratuita, possui recursos avançados de produção. Porém você não pode
          monetizar uma música que gerou na versão grátis.{" "}
          <a href="https://www.aiva.ai/" target="_blank">
            Abrir Aiva AI
          </a>
        </ItemPreviewRow>
      </div>
    </BasePage>
  );
}
