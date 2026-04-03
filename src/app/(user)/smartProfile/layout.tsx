import SideBarSmartProfile from "@/feature/_user/smartProfile/container/SideBarSmartProfile";
import Footer from "@/shared/components/Footer";
import Navbar from "@/shared/components/Navbar";
import NavLogin from "@/shared/components/NavLogin";

export default function SmartProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavLogin />
      <SideBarSmartProfile/>
      {children}
    </>
  );
}
