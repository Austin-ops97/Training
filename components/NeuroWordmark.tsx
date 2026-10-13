import { getImageProps } from "next/image";

export function NeuroWordmark({large=false}:{large?:boolean}) {
  const {props}=getImageProps({src:"/neuro-mindsets.png",alt:"",width:1024,height:341,quality:90});
  // Crop only the display window. The supplied transparent asset stays unchanged.
  return <svg className={"neuro-wordmark"+(large?" neuro-wordmark-large":"")} viewBox="250 215 1565 280" role="img" aria-label="NEURO Mindsets" focusable="false">
    <image href={props.src} width="2048" height="682"/>
  </svg>;
}
