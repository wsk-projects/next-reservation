export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div id="main" className="h-full flex flex-col justify-center items-center p-4">
      {children}
    </div>
  );
}
