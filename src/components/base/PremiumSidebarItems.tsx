import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const PremiumSidebarItems = ({
  menu,
  isPremium,
}: {
  menu: string;
  isPremium: boolean;
}) => {
  if (!isPremium) {
    // return <div>not premium</div>;
    return null;
  }
  return (
    <>
      <h3 id="premium">Área Premium</h3>
      <div
        className={twMerge(
          "kg-card kg-product-card",
          menu === "Serviços Premium" && "active"
        )}
      >
        <Link href="/servicos-premium" className="kg-product-card-container">
          <img
            src="https://www.jeffsu.org/content/images/2024/03/Frame-3--1-.svg"
            width="20"
            height="16"
            className="kg-product-card-image"
            loading="lazy"
          />
          <div className="kg-product-card-title-container">
            <h4 className="kg-product-card-title">
              <span style={{ whiteSpace: "pre-wrap" }}>Serviços Premium</span>
            </h4>
          </div>

          <div className="kg-product-card-description"></div>
        </Link>
      </div>
    </>
  );
};
