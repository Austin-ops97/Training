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

export function CircuitSymbols() {
  return (
    <>
    <div className="desktop-only">
    <Frame title="Circuit symbols used in this lesson. The long thin plate is positive." label="symbols-title">
      <text x="16" y="28" style={{ fill: "#3d4b5c", fontSize: 14 }}>
        A line is a conductor. On a cell, the long thin plate is +.
      </text>
      <g>
        <line x1="48" y1="78" x2="70" y2="78" stroke="#1f4d45" strokeWidth="2" />
        <line x1="70" y1="66" x2="70" y2="90" stroke="#1f4d45" strokeWidth="2" />
        <line x1="82" y1="70" x2="82" y2="86" stroke="#1f4d45" strokeWidth="4" />
        <line x1="82" y1="78" x2="104" y2="78" stroke="#1f4d45" strokeWidth="2" />
        <text x="64" y="60" style={{ fill: "#1b2430", fontSize: 13 }}>+</text>
        <text x="112" y="82" style={{ fill: "#1b2430", fontSize: 14 }}>Cell</text>
      </g>
      <g>
        <line x1="210" y1="78" x2="228" y2="78" stroke="#1f4d45" strokeWidth="2" />
        <line x1="228" y1="66" x2="228" y2="90" stroke="#1f4d45" strokeWidth="2" />
        <line x1="236" y1="70" x2="236" y2="86" stroke="#1f4d45" strokeWidth="4" />
        <line x1="244" y1="66" x2="244" y2="90" stroke="#1f4d45" strokeWidth="2" />
        <line x1="252" y1="70" x2="252" y2="86" stroke="#1f4d45" strokeWidth="4" />
        <line x1="252" y1="78" x2="270" y2="78" stroke="#1f4d45" strokeWidth="2" />
        <text x="222" y="60" style={{ fill: "#1b2430", fontSize: 13 }}>+</text>
        <text x="278" y="82" style={{ fill: "#1b2430", fontSize: 14 }}>Battery</text>
      </g>
      <g>
        <line x1="400" y1="78" x2="424" y2="78" stroke="#1f4d45" strokeWidth="2" />
        <circle cx="424" cy="78" r="2.5" fill="#1f4d45" />
        <line x1="424" y1="78" x2="452" y2="58" stroke="#1f4d45" strokeWidth="2" />
        <circle cx="460" cy="78" r="2.5" fill="#1f4d45" />
        <line x1="460" y1="78" x2="484" y2="78" stroke="#1f4d45" strokeWidth="2" />
        <text x="492" y="82" style={{ fill: "#1b2430", fontSize: 14 }}>Switch</text>
      </g>
      <g>
        <line x1="580" y1="78" x2="598" y2="78" stroke="#1f4d45" strokeWidth="2" />
        <circle cx="616" cy="78" r="16" fill="none" stroke="#1f4d45" strokeWidth="2" />
        <line x1="605" y1="67" x2="627" y2="89" stroke="#1f4d45" strokeWidth="2" />
        <line x1="627" y1="67" x2="605" y2="89" stroke="#1f4d45" strokeWidth="2" />
        <line x1="634" y1="78" x2="652" y2="78" stroke="#1f4d45" strokeWidth="2" />
        <text x="660" y="82" style={{ fill: "#1b2430", fontSize: 14 }}>Lamp</text>
      </g>
      <g>
        <line x1="36" y1="176" x2="52" y2="176" stroke="#1f4d45" strokeWidth="2" />
        <polyline points="52,176 60,164 68,188 76,164 84,188 92,164 100,176" fill="none" stroke="#1f4d45" strokeWidth="2" />
        <line x1="100" y1="176" x2="116" y2="176" stroke="#1f4d45" strokeWidth="2" />
        <text x="124" y="180" style={{ fill: "#1b2430", fontSize: 14 }}>Resistor</text>
      </g>
      <g>
        <line x1="214" y1="176" x2="232" y2="176" stroke="#1f4d45" strokeWidth="2" />
        <rect x="232" y="166" width="36" height="20" fill="none" stroke="#1f4d45" strokeWidth="2" />
        <line x1="238" y1="176" x2="262" y2="176" stroke="#1f4d45" strokeWidth="2" />
        <line x1="268" y1="176" x2="286" y2="176" stroke="#1f4d45" strokeWidth="2" />
        <text x="294" y="180" style={{ fill: "#1b2430", fontSize: 14 }}>Fuse</text>
      </g>
      <g>
        <line x1="392" y1="176" x2="408" y2="176" stroke="#1f4d45" strokeWidth="2" />
        <circle cx="426" cy="176" r="16" fill="none" stroke="#1f4d45" strokeWidth="2" />
        <text x="420" y="181" style={{ fill: "#1b2430", fontSize: 14 }}>A</text>
        <line x1="442" y1="176" x2="458" y2="176" stroke="#1f4d45" strokeWidth="2" />
        <text x="466" y="180" style={{ fill: "#1b2430", fontSize: 14 }}>Ammeter</text>
      </g>
      <g>
        <line x1="572" y1="176" x2="588" y2="176" stroke="#1f4d45" strokeWidth="2" />
        <circle cx="606" cy="176" r="16" fill="none" stroke="#1f4d45" strokeWidth="2" />
        <text x="600" y="181" style={{ fill: "#1b2430", fontSize: 14 }}>V</text>
        <line x1="622" y1="176" x2="638" y2="176" stroke="#1f4d45" strokeWidth="2" />
        <text x="646" y="180" style={{ fill: "#1b2430", fontSize: 14 }}>Voltmeter</text>
      </g>
    </Frame>
    </div>
    <div className="phone-only">
      <figure className="diagram symbols-phone">
        <svg viewBox="0 0 400 980" role="img" aria-labelledby="symbols-title-phone">
          <title id="symbols-title-phone">Circuit symbols. The long thin plate is positive.</title>
          <text x="16" y="36" style={{ fill: "#1b2430", fontSize: 22 }}>Cell, long thin plate is +</text>
          <text x="36" y="70" style={{ fill: "#1b2430", fontSize: 22 }}>+</text>
          <line x1="16" y1="90" x2="70" y2="90" stroke="#1f4d45" strokeWidth="3" />
          <line x1="70" y1="60" x2="70" y2="120" stroke="#1f4d45" strokeWidth="3" />
          <line x1="96" y1="70" x2="96" y2="110" stroke="#1f4d45" strokeWidth="8" />
          <line x1="96" y1="90" x2="150" y2="90" stroke="#1f4d45" strokeWidth="3" />
          <text x="16" y="160" style={{ fill: "#1b2430", fontSize: 22 }}>Battery, long thin plates are +</text>
          <line x1="16" y1="210" x2="50" y2="210" stroke="#1f4d45" strokeWidth="3" />
          <line x1="50" y1="180" x2="50" y2="240" stroke="#1f4d45" strokeWidth="3" />
          <line x1="72" y1="190" x2="72" y2="230" stroke="#1f4d45" strokeWidth="8" />
          <line x1="94" y1="180" x2="94" y2="240" stroke="#1f4d45" strokeWidth="3" />
          <line x1="116" y1="190" x2="116" y2="230" stroke="#1f4d45" strokeWidth="8" />
          <line x1="116" y1="210" x2="160" y2="210" stroke="#1f4d45" strokeWidth="3" />
          <text x="16" y="300" style={{ fill: "#1b2430", fontSize: 22 }}>Switch, open path</text>
          <line x1="16" y1="350" x2="70" y2="350" stroke="#1f4d45" strokeWidth="3" />
          <circle cx="70" cy="350" r="5" fill="#1f4d45" />
          <line x1="70" y1="350" x2="130" y2="300" stroke="#1f4d45" strokeWidth="3" />
          <circle cx="150" cy="350" r="5" fill="#1f4d45" />
          <line x1="150" y1="350" x2="210" y2="350" stroke="#1f4d45" strokeWidth="3" />
          <text x="16" y="420" style={{ fill: "#1b2430", fontSize: 22 }}>Lamp</text>
          <line x1="16" y1="470" x2="70" y2="470" stroke="#1f4d45" strokeWidth="3" />
          <circle cx="110" cy="470" r="32" fill="none" stroke="#1f4d45" strokeWidth="3" />
          <line x1="88" y1="448" x2="132" y2="492" stroke="#1f4d45" strokeWidth="3" />
          <line x1="132" y1="448" x2="88" y2="492" stroke="#1f4d45" strokeWidth="3" />
          <line x1="142" y1="470" x2="190" y2="470" stroke="#1f4d45" strokeWidth="3" />
          <text x="16" y="560" style={{ fill: "#1b2430", fontSize: 22 }}>Resistor</text>
          <line x1="16" y1="610" x2="50" y2="610" stroke="#1f4d45" strokeWidth="3" />
          <polyline points="50,610 70,580 90,640 110,580 130,640 150,580 170,610" fill="none" stroke="#1f4d45" strokeWidth="3" />
          <line x1="170" y1="610" x2="210" y2="610" stroke="#1f4d45" strokeWidth="3" />
          <text x="16" y="690" style={{ fill: "#1b2430", fontSize: 22 }}>Fuse</text>
          <line x1="16" y1="740" x2="50" y2="740" stroke="#1f4d45" strokeWidth="3" />
          <rect x="50" y="716" width="80" height="48" fill="none" stroke="#1f4d45" strokeWidth="3" />
          <line x1="62" y1="740" x2="118" y2="740" stroke="#1f4d45" strokeWidth="3" />
          <line x1="130" y1="740" x2="180" y2="740" stroke="#1f4d45" strokeWidth="3" />
          <text x="16" y="820" style={{ fill: "#1b2430", fontSize: 22 }}>Ammeter, in series</text>
          <line x1="16" y1="870" x2="60" y2="870" stroke="#1f4d45" strokeWidth="3" />
          <circle cx="100" cy="870" r="32" fill="none" stroke="#1f4d45" strokeWidth="3" />
          <text x="88" y="878" style={{ fill: "#1b2430", fontSize: 22 }}>A</text>
          <line x1="132" y1="870" x2="180" y2="870" stroke="#1f4d45" strokeWidth="3" />
          <text x="200" y="820" style={{ fill: "#1b2430", fontSize: 22 }}>Voltmeter</text>
          <line x1="200" y1="870" x2="244" y2="870" stroke="#1f4d45" strokeWidth="3" />
          <circle cx="284" cy="870" r="32" fill="none" stroke="#1f4d45" strokeWidth="3" />
          <text x="272" y="878" style={{ fill: "#1b2430", fontSize: 22 }}>V</text>
          <line x1="316" y1="870" x2="360" y2="870" stroke="#1f4d45" strokeWidth="3" />
        </svg>
        <figcaption className="meta">Circuit symbols used in this lesson. The long thin plate is positive.</figcaption>
      </figure>
    </div>
    </>
  );
}

export function OhmGraph() {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 720 230" role="img" aria-labelledby="ohm-title">
        <title id="ohm-title">Voltage against current for one ohmic resistor</title>
        <line x1="80" y1="28" x2="80" y2="180" stroke="#1f4d45" strokeWidth="2" />
        <line x1="80" y1="180" x2="680" y2="180" stroke="#1f4d45" strokeWidth="2" />
        <line x1="80" y1="180" x2="620" y2="48" stroke="#9a4e24" strokeWidth="3" />
        <line x1="74" y1="180" x2="86" y2="180" stroke="#1f4d45" strokeWidth="2" />
        <line x1="74" y1="147" x2="86" y2="147" stroke="#1f4d45" strokeWidth="2" />
        <line x1="74" y1="114" x2="86" y2="114" stroke="#1f4d45" strokeWidth="2" />
        <line x1="74" y1="81" x2="86" y2="81" stroke="#1f4d45" strokeWidth="2" />
        <line x1="80" y1="174" x2="80" y2="186" stroke="#1f4d45" strokeWidth="2" />
        <line x1="200" y1="174" x2="200" y2="186" stroke="#1f4d45" strokeWidth="2" />
        <line x1="320" y1="174" x2="320" y2="186" stroke="#1f4d45" strokeWidth="2" />
        <line x1="440" y1="174" x2="440" y2="186" stroke="#1f4d45" strokeWidth="2" />
        <line x1="560" y1="174" x2="560" y2="186" stroke="#1f4d45" strokeWidth="2" />
        <text x="92" y="24" style={{ fill: "#1b2430", fontSize: 16 }}>V (volts)</text>
        <text x="560" y="214" style={{ fill: "#1b2430", fontSize: 16 }}>I (amperes)</text>
        <text x="250" y="100" style={{ fill: "#1b2430", fontSize: 16 }}>slope = R</text>
      </svg>
      <figcaption className="meta">
        A straight line through the origin means V and I stay in proportion. That is Ohm&apos;s law at one temperature.
      </figcaption>
    </figure>
  );
}

export function DutyDiagram() {
  return (
    <>
      <div className="desktop-only">
        <Frame title="A sample day: baseload stays on, solar rises at noon, and a peaker or a battery covers the evening" label="duty-title">
      <text x="24" y="28" style={{ fill: "#3d4b5c", fontSize: 12 }}>
        Morning
      </text>
      <text x="330" y="28" style={{ fill: "#3d4b5c", fontSize: 12 }}>
        Noon
      </text>
      <text x="620" y="28" style={{ fill: "#3d4b5c", fontSize: 12 }}>
        Evening
      </text>
      <rect x="24" y="48" width="672" height="28" rx="6" style={{ fill: "#e7efe9", stroke: "#1f4d45" }} />
      <text x="36" y="67" style={{ fill: "#1b2430", fontSize: 13 }}>
        Baseload: on most hours
      </text>
      <rect x="250" y="92" width="220" height="28" rx="6" style={{ fill: "#f3e6c8", stroke: "#9a4e24" }} />
      <text x="262" y="111" style={{ fill: "#1b2430", fontSize: 13 }}>
        Solar: midday, none at night
      </text>
      <rect x="500" y="136" width="180" height="28" rx="6" style={{ fill: "#f6ddd2", stroke: "#9a4e24" }} />
      <text x="512" y="155" style={{ fill: "#1b2430", fontSize: 13 }}>
        Peaker: scarce hours
      </text>
      <rect x="250" y="176" width="160" height="28" rx="6" style={{ fill: "#e4eaf3", stroke: "#1f4d45" }} />
      <text x="258" y="195" style={{ fill: "#1b2430", fontSize: 12 }}>
        Battery charges
      </text>
      <rect x="500" y="176" width="180" height="28" rx="6" style={{ fill: "#e4eaf3", stroke: "#1f4d45" }} />
      <text x="512" y="195" style={{ fill: "#1b2430", fontSize: 12 }}>
        Battery discharges
      </text>
        </Frame>
      </div>
      <div className="phone-only">
        <figure className="diagram duty-phone">
          <svg viewBox="0 0 400 520" role="img" aria-labelledby="duty-title-phone">
            <title id="duty-title-phone">A sample day: baseload, solar, a peaker, and a battery</title>
            <text x="16" y="36" style={{ fill: "#1b2430", fontSize: 22 }}>
              Baseload: on most hours
            </text>
            <rect x="16" y="48" width="368" height="70" rx="8" style={{ fill: "#e7efe9", stroke: "#1f4d45" }} />
            <text x="28" y="90" style={{ fill: "#1b2430", fontSize: 22 }}>
              Stays on
            </text>
            <text x="16" y="156" style={{ fill: "#1b2430", fontSize: 22 }}>
              Solar: midday only
            </text>
            <rect x="16" y="168" width="368" height="70" rx="8" style={{ fill: "#f3e6c8", stroke: "#9a4e24" }} />
            <text x="28" y="210" style={{ fill: "#1b2430", fontSize: 22 }}>
              None at night
            </text>
            <text x="16" y="276" style={{ fill: "#1b2430", fontSize: 22 }}>
              Peaker: scarce hours
            </text>
            <rect x="16" y="288" width="368" height="70" rx="8" style={{ fill: "#f6ddd2", stroke: "#9a4e24" }} />
            <text x="28" y="330" style={{ fill: "#1b2430", fontSize: 22 }}>
              Short peaks
            </text>
            <text x="16" y="396" style={{ fill: "#1b2430", fontSize: 22 }}>
              Battery: charge, then use
            </text>
            <rect x="16" y="408" width="176" height="70" rx="8" style={{ fill: "#e4eaf3", stroke: "#1f4d45" }} />
            <text x="28" y="450" style={{ fill: "#1b2430", fontSize: 22 }}>
              Charges
            </text>
            <rect x="208" y="408" width="176" height="70" rx="8" style={{ fill: "#e4eaf3", stroke: "#1f4d45" }} />
            <text x="220" y="450" style={{ fill: "#1b2430", fontSize: 22 }}>
              Discharges
            </text>
          </svg>
          <figcaption className="meta">
            A sample day: baseload stays on, solar rises at noon, and a peaker or a battery covers the evening.
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export function LessonDiagram({
  diagram,
}: {
  diagram: "grid" | "rankine" | "brayton" | "viper" | "duty" | "symbols" | "ohm";
}) {
  if (diagram === "grid") return <GridPath />;
  if (diagram === "rankine") return <RankineLoop />;
  if (diagram === "brayton") return <BraytonDiagram />;
  if (diagram === "duty") return <DutyDiagram />;
  if (diagram === "symbols") return <CircuitSymbols />;
  if (diagram === "ohm") return <OhmGraph />;
  return <ViperDiagram />;
}
