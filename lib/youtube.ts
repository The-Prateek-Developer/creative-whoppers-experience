export function youtubeIdFromUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id || null;
    }

    if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
      const fromQuery = parsed.searchParams.get("v");
      if (fromQuery) return fromQuery;

      const parts = parsed.pathname.split("/").filter(Boolean);
      if (parts[0] === "embed" || parts[0] === "shorts" || parts[0] === "live") {
        return parts[1] || null;
      }
    }

    return null;
  } catch {
    return null;
  }
}

export function youtubeEmbedSrc(url: string, autoplay = false): string | null {
  const id = youtubeIdFromUrl(url);
  if (!id) return null;
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  if (autoplay) params.set("autoplay", "1");
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export function embeddableVideos(videos: string[] | undefined): string[] {
  if (!videos?.length) return [];
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const url of videos) {
    const id = youtubeIdFromUrl(url);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    unique.push(url);
  }
  return unique;
}
