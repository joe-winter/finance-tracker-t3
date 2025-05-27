import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export const NavBar = () => {
  return (
    <div className="flex w-full items-center gap-4">
      <Link href={"/dashboard"}>
        <Button>Dashboard</Button>
      </Link>
      <Link href={"/finances"}>
        <Button>Finances</Button>
      </Link>
      <Link href={"/settings"}>
        <Button>Settings</Button>
      </Link>
      <ThemeToggle />
    </div>
  );
};
