"use client"
import React, { FC, useState } from "react";
import dynamic from "next/dynamic";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`flex w-full items-center text-tertiary-500 px-0 md:px-[12vw]`}>
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between max-sm:px-5">

                    {/* LOGO */}

                    <div className="w-60 max-w-full px-4">
                        <a href="/#" className="block w-full py-5">
                            <img
                                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                                alt="logo"
                            />
                        </a>
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
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg px-6 py-5 shadow  lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${!open && "hidden"
                                    } `}
                            >
                                <ul className="block lg:flex">
                                    <ListItem NavLink="/#">Home</ListItem>
                                    <ListItem NavLink="/#">Payment</ListItem>
                                    <ListItem NavLink="/#">About</ListItem>
                                    <ListItem NavLink="/#">Blog</ListItem>
                                </ul>
                            </nav>
                        </div>

                        {/* Side Buttons */}
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <a
                                href="/#"
                                className="px-7 py-3 text-base font-medium hover:text-primary-500 "
                            >
                                Sign in
                            </a>

                            <a
                                href="/#"
                                className="rounded-md bg-primary px-7 py-3 text-base font-medium bg-primary-500 text-white hover:bg-primary-500/70 transition-colors"
                            >
                                Sign Up
                            </a>
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
                <a
                    href={NavLink}
                    className="flex py-2 text-base font-medium  hover:text-primary-500 lg:ml-12 lg:inline-flex transition-colors"
                >
                    {children}
                </a>
            </li>
        </>
    );
};
