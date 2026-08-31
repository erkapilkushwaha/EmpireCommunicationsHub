// Signature visual: signals travel from the client's business into a central
// hub, then fan back out to the channel our team handles them through. This
// is the literal logo (a navy hub with radiating spokes) brought to life —
// and it doubles as an explanation of how the service actually works.
const leftNodes = [
  { x: 60, y: 80 },
  { x: 60, y: 200 },
  { x: 60, y: 320 },
];

const rightNodes = [
  { x: 740, y: 60, label: "Customer Support" },
  { x: 740, y: 160, label: "Sales" },
  { x: 740, y: 240, label: "Back-Office" },
  { x: 740, y: 340, label: "Communications" },
];

const hub = { x: 400, y: 200 };

function inPath(x: number, y: number) {
  const midX = (x + hub.x) / 2;
  return `M${x},${y} Q${midX},${y} ${hub.x},${hub.y}`;
}

function outPath(x: number, y: number) {
  const midX = (hub.x + x) / 2;
  return `M${hub.x},${hub.y} Q${midX},${y} ${x},${y}`;
}

export function RoutingDiagram() {
  return (
    <svg
      viewBox="0 0 800 400"
      className="h-auto w-full max-w-3xl"
      role="img"
      aria-label="Diagram showing client communications routing through Empire Communications Hub to Customer Support, Sales, Back-Office and Communications teams"
    >
      {/* static connective lines, drawn in once on load */}
      {leftNodes.map((n, i) => (
        <path
          key={`in-${i}`}
          d={inPath(n.x, n.y)}
          fill="none"
          stroke="#6FC3E0"
          strokeWidth={1.5}
          strokeDasharray={300}
          className="animate-draw-line"
          style={{ animationDelay: `${i * 120}ms` }}
        />
      ))}
      {rightNodes.map((n, i) => (
        <path
          key={`out-${i}`}
          d={outPath(n.x, n.y)}
          fill="none"
          stroke="#1C7ED6"
          strokeWidth={1.5}
          strokeDasharray={400}
          className="animate-draw-line"
          style={{ animationDelay: `${400 + i * 120}ms` }}
        />
      ))}

      {/* traveling signal dots — hidden entirely when reduced motion is set */}
      <g className="motion-reduce:hidden">
        {leftNodes.map((n, i) => (
          <circle key={`din-${i}`} r={4} fill="#6FC3E0">
            <animateMotion
              dur="3s"
              begin={`${i * 0.6}s`}
              repeatCount="indefinite"
              path={inPath(n.x, n.y)}
            />
          </circle>
        ))}
        {rightNodes.map((n, i) => (
          <circle key={`dout-${i}`} r={4} fill="#1C7ED6">
            <animateMotion
              dur="2.6s"
              begin={`${1.4 + i * 0.5}s`}
              repeatCount="indefinite"
              path={outPath(n.x, n.y)}
            />
          </circle>
        ))}
      </g>

      {/* left origin markers */}
      {leftNodes.map((n, i) => (
        <circle key={`ln-${i}`} cx={n.x} cy={n.y} r={6} fill="#0E2A3A" />
      ))}
      <text x={60} y={44} textAnchor="middle" className="fill-navy font-mono text-[11px] tracking-widest">
        YOUR BUSINESS
      </text>

      {/* hub */}
      <circle cx={hub.x} cy={hub.y} r={34} fill="none" stroke="#0E2A3A" strokeWidth={1.5} />
      <circle cx={hub.x} cy={hub.y} r={14} fill="#0E2A3A" />
      <circle cx={hub.x} cy={hub.y} r={6} fill="#1C7ED6" />

      {/* right destination markers + labels */}
      {rightNodes.map((n, i) => (
        <g key={`rn-${i}`}>
          <circle cx={n.x} cy={n.y} r={6} fill="#0E2A3A" />
          <text
            x={n.x - 14}
            y={n.y - 14}
            textAnchor="end"
            className="fill-navy font-mono text-[11px] tracking-wide"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
