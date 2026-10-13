import Link from "next/link";
import {LoginForm} from "@/components/LoginForm";
export const metadata={title:"Log in · Power Plant Foundations"};
export default function LoginPage() {return <div className="book-resource login-page"><Link href="/">← Course contents</Link><p className="eyebrow">Your learning space</p><h1>Pick up where you left off.</h1><p>Choose Austin or Alex. Each profile keeps separate chapter completion, written responses, quiz answers, and review results. Work saves automatically on this device; the save indicator confirms when online sync is available.</p><LoginForm/><p>You can also <Link href="/">read the course as a guest</Link>.</p></div>;}
