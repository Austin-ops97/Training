import Link from "next/link";
import {LoginForm} from "@/components/LoginForm";
import {NeuroWordmark} from "@/components/NeuroWordmark";
export const metadata={title:"Log in · NEURO"};
export default function LoginPage() {
  return <div className="neuro-login"><section className="login-introduction"><NeuroWordmark large/><p className="eyebrow">Your learning space</p><h1>Your next chapter<br/>starts here.</h1><p>Build understanding at your own pace. Return to your lessons, keep your notes together, and see how far you have come.</p><div className="login-course"><span className="login-course-line" aria-hidden="true"/><div><strong>Power Plant Foundations</strong><span>From first principles to the complete process.</span></div></div></section><section className="login-card" aria-labelledby="login-heading"><p className="eyebrow">Welcome to NEURO</p><h2 id="login-heading">Pick up where you left off.</h2><p>Choose your profile to continue learning.</p><LoginForm/><p className="login-storage-note">Each profile keeps separate progress and answers. Work saves on this device; the save indicator confirms when online sync is available.</p><p className="login-guest">Prefer to explore first? <Link href="/">Continue as a guest →</Link></p></section></div>;
}
