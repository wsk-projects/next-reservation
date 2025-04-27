import { FloatingLayout } from "@/components/layout/FloatingLayout";
import Link from "next/link";
import { Book, Home, User } from "lucide-react";
import Stack from "@/components/common/Stack";
import CircleLayout from "@/components/layout/CircleLayout";

const navLinks = [
  { href: "/", label: "홈", element: <Home className="w-6 h-6" /> },
  { href: "/study", label: "스터디", element: <Book className="w-6 h-6" /> },
  { href: "/mypage", label: "마이페이지", element: <User className="w-6 h-6" /> },
];

export default function Nav() {
  return (
    <FloatingLayout
      id="navbar"
      className="bottom-0 left-0 right-0 h-16 border-t border-my-muted-3 flex justify-between items-center px-6 gap-4 bg-my-menu"
    >
      {navLinks.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} element={link.element} />
      ))}
    </FloatingLayout>
  );
}

function NavLink({ href, label, element }: { href: string; label: string; element: React.ReactNode }) {
  return (
    <Link href={href} className="w-16 h-full rounded-full flex justify-center items-center">
      <Stack.V justify="center" align="center" defaultStyle={false}>
        <div className="px-2 py-1 hover:underline text-my-text-dark">{element}</div>
        <div className="text-xs text-my-text-dark">{label}</div>
      </Stack.V>
    </Link>
  );
}
