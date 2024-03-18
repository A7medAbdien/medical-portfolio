import { FaHeartbeat } from "react-icons/fa"

const Pages = [
    { title: "Home", link: "./" },
    { title: "Payment", link: "./Payment" },
    { title: "About", link: "./About" },
    { title: "Blog", link: "./Blog" },
]

const HomeCards = [
    {
        title: "Home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
        icon: FaHeartbeat
    },
    {
        title: "Home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
        icon: FaHeartbeat
    },
    {
        title: "Home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur possimus iste, ad consectetur",
        icon: FaHeartbeat
    },
]

const SocialMedia = [
    { icon: "", link: "" },
    { icon: "", link: "" },
    { icon: "", link: "" },
]

const NavbarStrings = {
    Logo: "https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg",
    links: Pages
}

export {
    NavbarStrings,
    HomeCards
}