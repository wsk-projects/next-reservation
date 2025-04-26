import Link from "next/link";

const navLinks = [{ href: "/", label: "Home" }];

export default function Nav() {
  return (
    <nav id="navbar" className="flex justify-center items-center py-2 gap-4">
      {navLinks.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-md">
      <div className="px-2 py-1 hover:underline">{children}</div>
    </Link>
  );
}
