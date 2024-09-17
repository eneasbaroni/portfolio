import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";
import Providers from "../_components/providers/providers";

const anek_latin = Anek_Latin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ENEAS BARONI Developer",
  //description: "Eneas Baroni, Full Stack developer, apasionado por el arte y el diseño."  
  description: "Eneas Baroni, Full Stack developer, pasionate about art and design.",  
};

export default function RootLayout({children
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={anek_latin.className} id="app">
        <Header/>  
            <Providers>
              {children}          
            </Providers>       
        <Footer/>
      </body>
    </html>
  );
}
