import type { ReactNode } from "react";

function Frame({
  title,
  children,
  label,
}: {
  title: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 720 220" role="img" aria-labelledby={label}>
        <title id={label}>{title}</title>
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#9a4e24" />
          </marker>
        </defs>
        {children}
      </svg>
      <figcaption className="meta">{title}</figcaption>
    </figure>
  );
}

function Node({ x, y, w, h, text }: { x: number; y: number; w: number; h: number; text: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" style={{ fill: "#fffdf8", stroke: "#1f4d45", strokeWidth: 1.5 }} />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" style={{ fill: "#1b2430", fontSize: 13, fontFamily: "inherit" }}>
        {text}
      </text>
    </g>
  );
}

export function GridPath() {
  const y = 80;
  const nodes = [
    [16, "Generator"],
    [136, "Step-up"],
    [256, "Transmission"],
    [390, "Substation"],
    [520, "Distribution"],
    [630, "Customer"],
  ] as const;
  return (
    <Frame title="From the generator to the customer" label="grid-path-title">
      {nodes.map(([x, text], index) => (
        <g key={text}>
          <Node x={x} y={y} w={index === 2 || index === 4 ? 110 : 100} h={44} text={text} />
          {index < nodes.length - 1 && <line x1={x + 104} y1={y + 22} x2={nodes[index + 1][0] - 6} y2={y + 22} style={{ stroke: "#9a4e24", strokeWidth: 1.6 }} markerEnd="url(#arrow)" />}
        </g>
      ))}
    </Frame>
  );
}

export function RankineLoop() {
  return (
    <Frame title="Rankine loop: heat in, work out, heat thrown away" label="rankine-title">
      <Node x={40} y={30} w={140} h={44} text="Boiler or reactor" />
      <Node x={290} y={30} w={150} h={44} text="Steam turbine" />
      <Node x={520} y={30} w={140} h={44} text="Generator" />
      <Node x={290} y={140} w={150} h={44} text="Condenser" />
      <Node x={40} y={140} w={140} h={44} text="Pump" />
      <line x1={180} y1={52} x2={284} y2={52} style={{ stroke: "#9a4e24", strokeWidth: 1.6 }} markerEnd="url(#arrow)" />
      <line x1={440} y1={52} x2={514} y2={52} style={{ stroke: "#9a4e24", strokeWidth: 1.6 }} markerEnd="url(#arrow)" />
      <line x1={365} y1={74} x2={365} y2={134} style={{ stroke: "#9a4e24", strokeWidth: 1.6 }} markerEnd="url(#arrow)" />
      <line x1={290} y1={162} x2={186} y2={162} style={{ stroke: "#9a4e24", strokeWidth: 1.6 }} markerEnd="url(#arrow)" />
      <line x1={110} y1={140} x2={110} y2={80} style={{ stroke: "#9a4e24", strokeWidth: 1.6 }} markerEnd="url(#arrow)" />
      <text x={470} y={130} style={{ fill: "#3d4b5c", fontSize: 12 }}>Heat leaves here</text>
    </Frame>
  );
}

export function BraytonDiagram() {
  return (
    <Frame title="Simple cycle, and the heat-recovery path beside it" label="brayton-title">
      <Node x={20} y={36} w={120} h={40} text="Compressor" />
      <Node x={180} y={36} w={120} h={40} text="Combustor" />
      <Node x={340} y={36} w={110} h={40} text="Turbine" />
      <Node x={490} y={36} w={120} h={40} text="Generator" />
      <line x1={140} y1={56} x2={174} y2={56} style={{ stroke: "#9a4e24", strokeWidth: 1.6 }} markerEnd="url(#arrow)" />
      <line x1={300} y1={56} x2={334} y2={56} style={{ stroke: "#9a4e24", strokeWidth: 1.6 }} markerEnd="url(#arrow)" />
      <line x1={450} y1={56} x2={484} y2={56} style={{ stroke: "#9a4e24", strokeWidth: 1.6 }} markerEnd="url(#arrow)" />
      <Node x={180} y={140} w={200} h={40} text="Exhaust to the stack" />
      <line x1={395} y1={76} x2={280} y2={140} style={{ stroke: "#9a4e24", strokeWidth: 1.6 }} markerEnd="url(#arrow)" />
      <Node x={430} y={140} w={250} h={40} text="Or an HRSG and steam turbine" />
      <text x={20} y={200} style={{ fill: "#3d4b5c", fontSize: 12 }}>Simple cycle throws the exhaust away. Combined cycle turns it into more electricity.</text>
    </Frame>
  );
}

export function ViperDiagram() {
  return (
    <Frame title="Viper Power, as this week describes it" label="viper-title">
      <Node x={16} y={80} w={110} h={48} text="Gas fuel" />
      <Node x={150} y={70} w={150} h={64} text="Six simple-cycle turbines" />
      <Node x={324} y={80} w={120} h={48} text="13.8 kV" />
      <Node x={468} y={70} w={150} h={64} text="Three step-up transformers" />
      <line x1={126} y1={104} x2={144} y2={104} style={{ stroke: "#9a4e24", strokeWidth: 1.6 }} markerEnd="url(#arrow)" />
      <line x1={300} y1={104} x2={318} y2={104} style={{ stroke: "#9a4e24", strokeWidth: 1.6 }} markerEnd="url(#arrow)" />
      <line x1={444} y1={104} x2={462} y2={104} style={{ stroke: "#9a4e24", strokeWidth: 1.6 }} markerEnd="url(#arrow)" />
      <text x={16} y={40} style={{ fill: "#3d4b5c", fontSize: 13 }}>138 kV switchyard, then the transmission provider. The QSE speaks to ERCOT. No heat-recovery boiler on this page.</text>
    </Frame>
  );
}

export function LessonDiagram({ diagram }: { diagram: "grid" | "rankine" | "brayton" | "viper" }) {
  if (diagram === "grid") return <GridPath />;
  if (diagram === "rankine") return <RankineLoop />;
  if (diagram === "brayton") return <BraytonDiagram />;
  return <ViperDiagram />;
}
