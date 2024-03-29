import { Header } from "@/components/components";
import Link from "next/link";
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}){
    return(
        <>
            <html lang="en">
                <body className={inter.className}>
                    <Header logo={'Sample'}>
                        <Link href={'/dashboard'}>Home</Link>
                        <Link href={'/market'}>Market</Link>
                        <Link href={'/profile'}>Profile</Link>
                        <Link href={'/signin'}>Sign in</Link>
                        <Link href={'/signup'}>Sign up</Link>
                        <Link href={'/virtualplace'}>Virtual Place</Link>
                    </Header>
                    {children}
                </body>
            </html>        
        </>
    )
}
