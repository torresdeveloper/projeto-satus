import { BasePage } from "@/components/base/BasePage";
import { ExampleBody } from "@/components/base/ExampleBody";
import { useServerPageProps } from "@/hooks/useServerPageProps";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const pageProps = await useServerPageProps();

  return (
    <BasePage menu="" pageProps={pageProps}>
      <div>Not found</div>
    </BasePage>
  );
}
