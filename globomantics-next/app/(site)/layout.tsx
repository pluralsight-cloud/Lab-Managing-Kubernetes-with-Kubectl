import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
