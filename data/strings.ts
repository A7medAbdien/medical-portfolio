import { NumberCardProps } from "@/Components/Cards/NumberCard"
import React from "react"
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"

const Pages = [
    { text: "Home", link: "./" },
    { text: "Case Studies", link: "./Case" },
    { text: "About", link: "./About" },
    { text: "Blog", link: "./Blog" },
]

const BookingSectionContent = {
    mutedText: "appointment",
    title: "Book it now!",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
    button: { text: 'Learn more...', link: "./#" }
}

const BlogCards = [
    {
        title: "Lorem ipsum dolor sit amet.",
        date: { day: 18, month: "Jan" },
        img: "/img/temp.png",
        category: "cats"
    },
    {
        title: "Lorem ipsum dolor sit amet.",
        date: { day: 18, month: "Jan" },
        img: "/img/temp.png",
        category: "cats"
    },
    {
        title: "Lorem ipsum dolor sit amet.",
        date: { day: 18, month: "Jan" },
        img: "/img/temp.png",
        category: "cats"
    },
]

const BlogSectionContent = {
    mutedText: "Some Nice SHit",
    title: "Case Studies",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
    cards: BlogCards,

}

const CaseSectionCards = [
    {
        title: "Case Studies",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
        button: { text: 'Learn more...', link: "./#" },
        img: "/img/tree.jpg",
        category: "cats"
    },
    {
        title: "Case Studies",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
        button: { text: 'Learn more...', link: "./#" },
        img: "/img/tree.jpg",
        category: "cats"
    },
    {
        title: "Case Studies",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
        button: { text: 'Learn more...', link: "./#" },
        img: "/img/tree.jpg",
        category: "cats"
    },
]

const CaseSectionContent = {
    mutedText: "Some Nice SHit",
    title: "Case Studies",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
    cards: CaseSectionCards,

}

const ToolSectionContent = {
    title: "Check Our Tools",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
    button: { text: 'Learn more...', link: "./#" }
}

const NumberCardContent: NumberCardProps[] = [
    { title: "Happy Customer", number: 100, numberUnit: "K" },
    { title: "Happy Customer", number: 100, numberUnit: "K" },
    { title: "Happy Customer", number: 100, numberUnit: "K" },
    { title: "Happy Customer", number: 100, numberUnit: "K" },
]

const IntroCards = [
    {
        title: "Home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
        img: "/img/tree.jpg"
    },
    {
        title: "Home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
        img: "/img/tree.jpg"
    },
    {
        title: "Home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
        img: "/img/tree.jpg"
    },
]

const HomePageContent = {
    mutedText: "Join Us",
    title: "Lorem ipsum dolor sit amet ",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
    primaryButton: { text: "Hi", link: "./#" },
    secondaryButton: { text: "Hi", link: "./#" },
    img: "/img/tree.jpg",
    cards: IntroCards,
    NumberCardContent,
    ToolSectionContent,
    CaseSectionContent,
    BlogSectionContent,
    BookingSectionContent
}

const SocialMedia = [
    { icon: React.createElement(FaInstagram), link: "https://www.instagram.com/" },
    { icon: React.createElement(FaFacebook), link: "https://www.instagram.com/" },
    { icon: React.createElement(FaWhatsapp), link: "https://www.instagram.com/" },
]

const FooterContacts = [
    { link: "", Icon: React.createElement(FaPhone), text: "+973 3366 3366" },
    { link: "", Icon: React.createElement(FaLocationDot), text: `4517 Washington Ave. Manchester, Kentucky 39495` },
    { link: "", Icon: React.createElement(IoIosMail), text: "test@gmail.com" },
]

const FooterContent = {
    copyRights: "Lorem ipsum dolor sit amet © consectetur adipisicing.",
    Pages,
    FooterContacts,
    SocialMedia
}

const NavbarStrings = {
    Logo: "https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg",
    links: Pages
}

export {
    Pages,
    SocialMedia,
    NavbarStrings,
    HomePageContent,
    FooterContent
}