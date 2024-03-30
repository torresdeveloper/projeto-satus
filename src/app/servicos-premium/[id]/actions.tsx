"use server";

export async function MdxDoServicoPremium(servicoId: string) {
  // o arquivo está no mesmo diretório
  try {
    const arquivoMd = await import(`./${servicoId}.mdx`);
    return arquivoMd.default;
  } catch (e) {
    return null;
  }
}
