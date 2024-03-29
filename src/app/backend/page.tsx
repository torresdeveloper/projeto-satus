import { BasePage } from "@/components/base/BasePage";
import { PageTitle } from "@/components/base/PageTitle";
import { BackendItems, BackendTitle } from "@/types/Backend";

export default function Backend() {
  return (
    <BasePage
      menu="Back-end"
      secondaryItems={BackendItems()}
      secondaryTitle={BackendTitle()}
    >
      <PageTitle title="Back-end" />
      <div className="prose">
        <p>
          Artigos para ajudar quem está começando no desenvolvimento de APIs.
        </p>
      </div>
    </BasePage>
  );
}
