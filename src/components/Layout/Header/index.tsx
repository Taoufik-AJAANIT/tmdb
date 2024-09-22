"use client"

import Image from 'next/image';
import Logo from '@/../public/pictures/logo.svg';
import { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlHeader = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY == 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlHeader);
            return () => {
                window.removeEventListener("scroll", controlHeader);
            };
        }
    }, [lastScrollY]);
    return (
        <div
            className={`navbar bg-primary py-5 px-10 fixed top-0 left-0 w-full text-white transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <Link href={'/'}>
                <Image src={Logo} alt="The Movie Database (TMDB)" width={154} height={20}/>
            </Link>
        </div>
    );
}

export default Header;
