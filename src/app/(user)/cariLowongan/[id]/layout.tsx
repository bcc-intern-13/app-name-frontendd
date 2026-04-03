import Footer from "@/shared/components/Footer";
import Navbar from "@/shared/components/Navbar";
import NavbarDetailLowongan from "@/shared/components/NavbarDetailLowongan";
import NavLogin from "@/shared/components/NavLogin";

export default function DetailLowonganLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarDetailLowongan />
      {children}
    </>
  );
}
