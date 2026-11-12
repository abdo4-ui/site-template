type GalleryProps = {
  images: string[];
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <section>
      <h2>Gallery</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {images.map((src) => (
          <img key={src} src={src} alt="Gallery image" width={200} height={200} />
        ))}
      </div>
    </section>
  );
}