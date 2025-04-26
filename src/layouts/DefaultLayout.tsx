import Main from "./main/Main";
import Nav from "./nav/Nav";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="default-layout" className="h-screen flex flex-col">
      <Nav />
      <Main>{children}</Main>
    </div>
  );
}
