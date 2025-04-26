import { FloatingLayout } from "@/components/layout/wrapper/Floating";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/study", label: "Study" },
  { href: "/mypage", label: "MyPage" },
];

export default function Nav() {
  return (
    <FloatingLayout
      id="navbar"
      className="bottom-0 left-0 right-0 bg-stone-500 flex justify-center items-center py-2 gap-4"
    >
      {navLinks.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </FloatingLayout>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-md">
      <div className="px-2 py-1 hover:underline">{children}</div>
    </Link>
  );
}
