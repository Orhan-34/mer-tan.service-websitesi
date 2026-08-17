import { MapPin, Phone } from "lucide-react";
import { MapEmbed } from "@/components/shared/map-embed";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/site-config";

export function ClosingCta({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-ink py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-h2 text-white">{dict.closing.title}</h2>

            <p className="text-body mt-4 max-w-[480px] text-fg-dark-muted">
              {dict.closing.text}
            </p>

            <div className="mt-8">
              {/* Tek CTA kaldı: buton, eskiden iki butonun kapladığı genişliği alır. */}
              <Button
                asChild
                variant="outline-light"
                size="lg"
                className="w-full max-w-[360px]"
              >
                <a href={`tel:${siteConfig.contact.phone}`}>
                  <Phone className="size-4" strokeWidth={1.5} aria-hidden="true" />
                  {dict.common.callNow}
                </a>
              </Button>
            </div>
          </div>

          <div>
            <MapEmbed
              dict={dict}
              embedUrl={
                process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ??
                siteConfig.address.mapEmbedUrl
              }
            />

            {/* İletişim sayfasındaki yol tarifi butonuyla aynı görünüm. */}
            <Button asChild variant="outline-light" size="md" className="mt-4">
              <a
                href={siteConfig.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="size-4" strokeWidth={1.5} aria-hidden="true" />
                {dict.common.getDirectionsLong}
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
