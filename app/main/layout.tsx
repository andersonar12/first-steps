import Navbar from "@/components/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center ">
      <h1>Main Layout</h1>
      {children}
    </div>
  );
}
