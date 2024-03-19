import { NumberCardProps } from "@/Components/Cards/NumberCard"

const Pages = [
    { title: "Home", link: "./" },
    { title: "Case Studies", link: "./Case" },
    { title: "About", link: "./About" },
    { title: "Blog", link: "./Blog" },
]


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
    BlogSectionContent
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