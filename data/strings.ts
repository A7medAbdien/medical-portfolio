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
    cards: HomeCards

}

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
    HomePageContent
}