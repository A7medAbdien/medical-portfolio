"use client"
import React, { FC, useState } from "react";
import dynamic from "next/dynamic";
import SocialMedea from "./SocialMedea";
import Image from "next/image";
import Link from "next/link";
import { NavbarStrings } from "@/data/strings";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`px-0 md:px-[12vw] bg-primary-50 flex w-full items-center text-tertiary-500`}>
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between max-sm:px-5">

                    {/* LOGO */}
                    <div className="w-60 max-w-full px-4">
                        <Link href="/#" className="block w-full py-5">
                            <Image
                                width={200} height={200}
                                src={NavbarStrings.Logo}
                                alt="logo"
                            />
                        </Link>
                    </div>

                    {/* Menu */}
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={` ${open && "navbarTogglerActive"
                                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-primary-500"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-primary-500"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-primary-500"></span>
                            </button>
                            <nav
                                // :className="!navbarOpen && 'hidden' "
                                id="navbarCollapse"
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg px-6 py-5 shadow  lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${!open && "hidden"}`}
                            >
                                <ul className="block lg:flex">
                                    {NavbarStrings.links.map(({ link, text }, i) =>
                                        <ListItem key={i} NavLink={link}>{text}</ListItem>
                                    )}
                                </ul>
                            </nav>
                        </div>

                        {/* Side Buttons */}
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <SocialMedea />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })

interface ListItemProps {
    children: any,
    NavLink: string
}

const ListItem: FC<ListItemProps> = ({ children, NavLink }) => {
    return (
        <>
            <li>
                <Link
                    href={NavLink}
                    className="flex py-2 text-base font-medium  hover:text-primary-500 lg:ml-12 lg:inline-flex transition-colors"
                >
                    {children}
                </Link>
            </li>
        </>
    );
};
