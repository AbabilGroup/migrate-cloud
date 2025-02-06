import Header from "@/components/shared/Header";
import "../globals.css";
import Footer from "@/components/shared/Footer";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
