'use client'
import style from '@/css/components.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const Container = ({children}) => {
    return(
        <>
            <div className={style.cont}>
                {children}
            </div>
        </>
    )
}

export const Header = ({logo, children}) => {
    return(
        <>
            
                <div className={style.header}>
                    <div className={style.header_cont}>
                        <div className={style.header_logo}>
                            <Link href={'/'}>{logo}</Link>
                        </div>
                        <div className={style.header_navs}>
                            {children}
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export const DropDown_Signedin = () => {
    const [swith, setSwitch] = useState('none')
    const [icon, setIcon] = useState('◀')
    return(
        <>
            <div className={style.dropdown_signedin}>
                <div className={style.dp_img}>
                    <Image
                        src={'/assets/images/prisoner3.jpg'}
                        width={50}
                        height={50}
                        alt='Test'
                    />
                </div>
                <div className={style.arrow}>
                    <div onClick={()=>{
                        if(swith == 'none'){
                            setSwitch('flex')
                            setIcon('▽')                          
                        }else{
                            setSwitch('none')                            
                            setIcon('◀')
                        }
                    }}>{icon}</div>                    
                </div>
                <div style={{
                    maxWidth: '3000px',
                    maxHeight: '3000px',
                    minWidth: '400px',
                    minHeight: '0px',
                    display: `${swith}`,
                    position: 'fixed',
                    flexFlow: 'column wrap',
                    justifyContent: 'start',
                    alignItems: 'center',
                    width: '10vw',
                    height: '100vh',                    
                    backgroundColor: '#21375b',
                    color: 'white',
                    top: '8vh',
                    right: '0',
                    transition: '0.5s',
                    padding: '8px',
                    borderRadius: '5px 0px'
                }}>
                    <LinkCont href={'/'}>Testing</LinkCont>
                    <LinkCont href={'/'}>Testing</LinkCont>
                    <LinkCont href={'/'}>Testing</LinkCont>
                    <LinkCont href={'/'}>Testing</LinkCont>
                </div>
            </div>
        </>
    )
}

const LinkCont = ({children, href}) => {
    return(
        <>
            <div className={style.sideNav_items}>
                <Link href={href}>
                    {children}
                </Link>
            </div>
        </>
    )
}

export const Body = ({children}) => {
    return(
        <>
            <div className={style.body}>
                {children}
            </div>
        </>
    )
}