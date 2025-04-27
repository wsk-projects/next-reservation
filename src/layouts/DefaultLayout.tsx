import Header from "./header/Header";
import Main from "./main/Main";
import Nav from "./nav/Nav";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="default-layout" className="min-h-screen flex flex-col">
      <Header />
      <Main>{children}</Main>
      <Nav />
    </div>
  );
}
