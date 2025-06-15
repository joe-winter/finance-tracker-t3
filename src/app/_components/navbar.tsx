import {
  ChartNoAxesCombinedIcon,
  LandmarkIcon,
  Settings2Icon,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
export const NavBar = async () => {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <Link href={"/dashboard"} className="flex flex-col items-center gap-1">
        <ChartNoAxesCombinedIcon className="size-8" />
        <span>Dashboard</span>
      </Link>
      <Link href={"/finances"} className="flex flex-col items-center gap-1">
        <LandmarkIcon className="size-8" />
        <span>Spending</span>
      </Link>
      <Link href={"/settings"} className="flex flex-col items-center gap-1">
        <Settings2Icon className="size-8" />
        <span>Settings</span>
      </Link>
      <ThemeToggle />
    </div>
  );
};
