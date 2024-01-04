'use client'
import { 
    Header,
    Container,
    Body,
    DropDown_Signedin
} from "@/components/components";
import Link from "next/link";
import { Inter } from 'next/font/google'
import '../globals.css'
import Image from "next/image";
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })


const Signedout = () => {
    return(
        <>            
            <Link href={'/signin'}>Sign in</Link>
            <Link href={'/signup'}>Sign up</Link>            
        </>
    )
}

const Signedin = () => {
    return(
        <>            
            <DropDown_Signedin />    
        </>
    )
}

export default function RootLayout({children}){    
    const [status, setStatus] = useState(true)
    return(
        <>
            <html lang="en">
                <body className={inter.className}>
                    <Container>
                        <Header logo={'Exorex'}>                            
                            <Link href={'/virtualPlace'}>Virtual Place</Link>
                            <Link href={'/market'}>Market</Link>
                            <Link href={'/profile'}>Profile</Link>                              
                            {status ? (<Signedout />) : (<Signedin />)}                         
                        </Header>
                        <Body>                            
                            { children }
                        </Body>
                    </Container>
                </body>
            </html>
        </>
    )
}
