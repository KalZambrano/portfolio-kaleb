import type { ImageMetadata } from "astro";

/**
 * Los JSON de datos referencian las imagenes por nombre de archivo, asi que no
 * podemos importarlas una a una. import.meta.glob las resuelve en build y deja
 * que astro:assets las optimice igual que un import normal.
 */
type ImageModule = { default: ImageMetadata };

const projectImages = import.meta.glob<ImageModule>(
  "/src/assets/projects/*.webp",
  { eager: true },
);

const logoImages = import.meta.glob<ImageModule>("/src/assets/logos/*.webp", {
  eager: true,
});

function resolve(
  images: Record<string, ImageModule>,
  folder: string,
  file: string,
): ImageMetadata {
  const image = images[`/src/assets/${folder}/${file}`];

  if (!image) {
    throw new Error(
      `No se encontro src/assets/${folder}/${file}. Revisa el nombre en los datos JSON.`,
    );
  }

  return image.default;
}

export const getProjectImage = (file: string) =>
  resolve(projectImages, "projects", file);

export const getLogoImage = (file: string) => resolve(logoImages, "logos", file);
