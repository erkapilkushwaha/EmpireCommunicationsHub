const channels = ["Voice", "Chat", "Email", "Back-Office"];

export function ChannelStatusStrip() {
  return (
    <div className="border-y border-navy/10 bg-navy/[0.02]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-4">
        {channels.map((channel) => (
          <div key={channel} className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-hub" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-slate">{channel}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
