/**
 * Schema.org JSON-LD enjeksiyonu.
 * `JSON.stringify` çıktısı `<` karakteri içerdiğinde script erken kapanabilir;
 * bu yüzden kaçış yapılır.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
