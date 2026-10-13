import { getImageProps } from "next/image";

export function NeuroWordmark({large=false}:{large?:boolean}) {
  const id = large ? "neuro-login" : "neuro-header";
  const { props } = getImageProps({src:"/neuro-wordmark.png",alt:"",width:1024,height:341,quality:90});

  // Preserve the supplied lettering. Convert its inverse luminance to alpha,
  // clearing the pale background before applying the theme's foreground colour.
  return <svg className={"neuro-wordmark"+(large?" neuro-wordmark-large":"")} viewBox="350 255 1350 161" role="img" aria-label="NEURO" focusable="false">
    <defs>
      <filter id={`${id}-alpha`} x="0" y="0" width="2048" height="682" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  -0.2126 -0.7152 -0.0722 0 1"/>
        <feComponentTransfer><feFuncA type="linear" slope="1.25" intercept="-0.15"/></feComponentTransfer>
      </filter>
      <mask id={`${id}-mask`} x="0" y="0" width="2048" height="682" maskUnits="userSpaceOnUse" style={{maskType:"alpha"}}>
        <image href={props.src} width="2048" height="682" filter={`url(#${id}-alpha)`}/>
      </mask>
    </defs>
    <rect x="350" y="255" width="1350" height="161" fill="currentColor" mask={`url(#${id}-mask)`}/>
  </svg>;
}
