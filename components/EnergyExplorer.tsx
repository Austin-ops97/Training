"use client";
import {useState} from "react";
import Link from "next/link";
const stages=[
  {name:"Fuel and air",energy:"Chemical energy",slug:"complete-gas-turbine",detail:"Natural gas carries chemical energy. Filtered air supplies oxygen and becomes the main mass flowing through the machine. The compressor first adds shaft work to raise air pressure."},
  {name:"Combustion",energy:"Hot flowing gas",slug:"compressor-combustion",detail:"Controlled combustion adds energy to compressed air. Cooling and dilution air help deliver the required temperature distribution to the turbine."},
  {name:"Turbine",energy:"Mechanical work",slug:"turbine-shaft-machine",detail:"Expansion through stationary and rotating passages produces shaft torque. Much of that work drives the compressor; the remainder supports the generator and mechanical losses."},
  {name:"Generator",energy:"Electrical energy",slug:"magnetism-generators",detail:"A rotating magnetic field induces AC voltage in the stator. Shaft torque supplies real power; excitation establishes the magnetic field and influences voltage/reactive output."},
  {name:"Grid and customer",energy:"Useful work, light, heat",slug:"plant-to-customer",detail:"Transformers change voltage levels; the switchyard connects and protects the plant. The network delivers energy to loads, while generation, storage, and demand are continuously balanced."},
];
export function EnergyExplorer() {
  const [selected,setSelected]=useState(0);
  return <section className="energy-explorer" aria-label="Explore the energy conversion process"><div className="energy-tabs" role="group" aria-label="Energy conversion stages">{stages.map((s,i)=><button type="button" key={s.name} aria-pressed={selected===i} onClick={()=>setSelected(i)}><span>{String(i+1).padStart(2,"0")}</span><strong>{s.name}</strong><small>{s.energy}</small></button>)}</div><div className="energy-detail" aria-live="polite"><p>{stages[selected].detail}</p><Link href={"/learn/"+stages[selected].slug}>Study this part of the process <span aria-hidden="true">→</span></Link></div><p className="energy-caption">Energy changes form at each stage. Exhaust heat, equipment losses, and auxiliary use reduce useful export.</p></section>;
}
