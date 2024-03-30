import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { NewsletterForm } from "./NewsletterForm";
import { useServerPageProps } from "@/hooks/useServerPageProps";

export default async function Newsletter() {
  const pageProps = await useServerPageProps();

  return (
    <BasePage menu="Newsletter" pageProps={pageProps}>
      <PageTitle title="Dicas para conseguir emprego na área de Tecnologia" />

      <div className="prose">
        <h2>Newsletter</h2>

        <p>
          O futuro chegou e <strong>as coisas estão mudando</strong>, saiba das
          mudanças em primeira mão na <strong>Terça da Tecnologia!</strong>{" "}
          Receba um e-mail com os melhores conteúdos focados no mercado de
          desenvolvimento de software e inteligência artificial.
        </p>

        <NewsletterForm />

        <h2>Nossa Comunidade</h2>

        <p>
          Junte-se a nós e participe das discussões sobre carreira, tecnologia,
          salários e muito mais. Esteja preparado para{" "}
          <strong>quando o seu momento chegar.</strong>
        </p>

        <div className="flex gap-2 items-center no-access">
          <a href="#/portal/signin/" className="btn btn-orange">
            Faça Login
          </a>
          <span>ou</span>
          <div className="total-members-container">
            <a
              href="#/portal/signup/"
              className="btn btn-orange total-members no-access"
            >
              Cadastre-se
            </a>
            <span data-tolta="">5+</span>
          </div>
        </div>

        <p>
          <strong>Dicas de carreira valiosas </strong>
          que vão te ajudar a conseguir o emprego que você realmente quer.
        </p>
      </div>
    </BasePage>
  );
}
