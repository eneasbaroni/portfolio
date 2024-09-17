import "./globals.css";
import './(es)/(index)/Home.css'
import './(es)/about/About.css'
import './(es)/works/Works.css'
import './(es)/contact/Contact.css'
import './_skeletons/work.skeletons.css'
import './_components/header/Header.css'
import './_components/footer/Footer.css'

export default function RootLayout({children
}: Readonly<{
  children: React.ReactNode; 
}>) {  
  return (
    <html>
        {children}
    </html>
  )
}
