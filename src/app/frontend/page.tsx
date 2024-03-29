import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { FrontendItems, FrontendTitle } from "@/types/Frontend";

export default function Frontend() {
  return (
    <BasePage
      menu="Front-end"
      secondaryItems={FrontendItems()}
      secondaryTitle={FrontendTitle()}
    >
      <PageTitle title="Front-end" />
      <div className="prose">
        <p>Artigos para ajudar quem está começando no desenvolvimento web.</p>
      </div>
    </BasePage>
  );
}
