import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { NavBar } from "../_components/navbar";
export default function Settings() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <h2>Settings</h2>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
