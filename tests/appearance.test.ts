import {afterEach,describe,expect,it,vi} from "vitest";
import {runInNewContext} from "node:vm";
import {APPEARANCE_KEY,DEFAULT_APPEARANCE,appearanceBootstrap,parseAppearance} from "@/lib/appearance";
afterEach(()=>vi.unstubAllGlobals());
describe("Reading display preferences",()=>{
  it("recovers malformed settings and bounds unsafe or extreme preferences",()=>{
    expect(parseAppearance("broken")).toEqual(DEFAULT_APPEARANCE);
    expect(parseAppearance(JSON.stringify({theme:"unknown",font:"url(unsafe)",size:200,reading:"yes"}))).toEqual({...DEFAULT_APPEARANCE,size:28});
    expect(parseAppearance(JSON.stringify({theme:"dark",font:"sans",size:4,reading:true}))).toEqual({theme:"dark",font:"sans",size:16,reading:true});
  });
  it("restores a dark reading page before hydration without altering learning saves",()=>{
    const dataset:Record<string,string>={},css:Record<string,string>={};
    const preferences={theme:"dark",font:"classic",size:24,reading:true};
    const getItem=vi.fn((key:string)=>{expect(key).toBe(APPEARANCE_KEY);return JSON.stringify(preferences);});
    runInNewContext(appearanceBootstrap,{localStorage:{getItem},document:{documentElement:{dataset,style:{setProperty:(k:string,v:string)=>css[k]=v}}}});
    expect(dataset).toEqual({theme:"dark",font:"classic",reading:"true"});expect(css["--reader-size"]).toBe("24px");
  });
  it("persists selections only in the appearance key and applies them immediately",async()=>{
    vi.resetModules();const dataset={},setProperty=vi.fn(),dispatchEvent=vi.fn();let raw:string|null=null;
    const setItem=vi.fn((key:string,value:string)=>{expect(key).toBe(APPEARANCE_KEY);raw=value;});
    vi.stubGlobal("window",{localStorage:{getItem:()=>raw,setItem},dispatchEvent});vi.stubGlobal("document",{documentElement:{dataset,style:{setProperty}}});
    const {saveAppearance,readAppearance}=await import("@/lib/appearance");
    expect(saveAppearance(p=>({...p,theme:"dark",font:"mono",size:23,reading:true}))).toBe(true);
    expect(readAppearance()).toEqual({theme:"dark",font:"mono",size:23,reading:true});expect(dataset).toMatchObject({theme:"dark",font:"mono",reading:"true"});expect(dispatchEvent).toHaveBeenCalledOnce();
  });
  it("keeps settings usable for the session when device storage is unavailable",async()=>{
    vi.resetModules();vi.stubGlobal("window",{localStorage:{getItem:()=>null,setItem:()=>{throw Error("quota");}},dispatchEvent:vi.fn()});vi.stubGlobal("document",{documentElement:{dataset:{},style:{setProperty:vi.fn()}}});
    const {saveAppearance,readAppearance}=await import("@/lib/appearance");
    expect(saveAppearance(p=>({...p,theme:"dark"}))).toBe(false);expect(readAppearance().theme).toBe("dark");
    saveAppearance(p=>({...p,size:22}));expect(readAppearance()).toMatchObject({theme:"dark",size:22});
  });
});
