import Image from "next/image";
export function NeuroWordmark({large=false}:{large?:boolean}) {
  return <span className={"neuro-wordmark"+(large?" neuro-wordmark-large":"")}><Image src="/neuro-wordmark.png" alt="NEURO" width={2048} height={682} sizes={large?"420px":"(max-width: 540px) 220px, 300px"} priority/></span>;
}
