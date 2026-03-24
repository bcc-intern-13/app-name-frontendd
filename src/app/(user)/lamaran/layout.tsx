import Footer from "@/shared/components/Footer";
import Navbar from "@/shared/components/Navbar";
import NavLogin from "@/shared/components/NavLogin";

export default function LamaranLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavLogin />
      {children}
    </>
  );
}
