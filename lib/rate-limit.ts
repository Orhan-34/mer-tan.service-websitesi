const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

type Entry = { count: number; resetAt: number };

/**
 * Basit bellek içi rate limit — tek sunucu örneği için yeterlidir.
 *
 * ⚠️ Birden fazla örnekle (serverless / yatay ölçek) çalışacaksa bu, paylaşımlı
 * bir sayaçla (Upstash Redis, Vercel KV vb.) değiştirilmelidir.
 */
const buckets = new Map<string, Entry>();

export function rateLimit(key: string) {
  const now = Date.now();
  const entry = buckets.get(key);

  if (!entry || entry.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) return false;

  entry.count += 1;
  return true;
}
