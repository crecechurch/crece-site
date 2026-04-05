// Import all images in src/assets eagerly and type them as strings
const images: Record<string, string> = import.meta.glob("/src/assets/*", {
  eager: true,
  import: "default",
});

interface LogoProps {
  file: string;        // e.g. "src/assets/crece.png"
  className?: string;
}

export default function Logo({ file, className }: LogoProps) {
  // Normalize key: Vite glob keys always start with "/"
  const normalized = file.startsWith("/") ? file : `/${file}`;

  const src = images[normalized];

  // IMPORTANT: Never return null inside a clickable <a> wrapper
  if (!src) {
    console.warn(`Logo file not found: ${file}`);
    return <img src="" alt="" className={className} />;
  }

  return (
    <img
      src={src}
      alt="Iglesia Crece logo"
      className={className}
      loading="eager"
      decoding="sync"
    />
  );
}