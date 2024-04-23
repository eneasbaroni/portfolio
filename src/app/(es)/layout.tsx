import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";

const anek_latin = Anek_Latin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ENEAS BARONI Developer",
  description: "Eneas Baroni, Full Stack developer, apasionado por el arte y el diseño."  
};

export default function RootLayout({children
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  
  return (
    <html lang="es">
      <body className={anek_latin.className} id="app">
        <Header/>         
            {children}          
        <Footer/>
      </body>
    </html>
  );
}
