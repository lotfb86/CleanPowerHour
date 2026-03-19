interface AudioPlayerProps {
  episodeId: string;
  title?: string;
}

export function AudioPlayer({ episodeId, title = "Podcast episode player" }: AudioPlayerProps) {
  return (
    <iframe
      src={`https://www.buzzsprout.com/1765472/${episodeId}?client_source=small_player&iframe=true`}
      loading="lazy"
      width="100%"
      height="200"
      frameBorder="0"
      scrolling="no"
      title={title}
      className="rounded-xl"
      allow="autoplay"
    />
  );
}
