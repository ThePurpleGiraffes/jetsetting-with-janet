export const navigationItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Podcast",
        href: "/podcast",
        description: "Travel and hospitality conversations.",
        links: [
            {
                label: "Latest Episode",
                href: "/podcast",
                icon: "mdi:play-circle",
            },
            {
                label: "Featured Guests",
                href: "/podcast#guests",
                icon: "mdi:account-group",
            },
        ],
    },
    {
        title: "Blog",
        href: "/blog",
        description: "Stories, travel guides and insights.",
        links: [
            {
                label: "Travel",
                href: "/blog?category=travel",
                icon: "mdi:airplane",
            },
            {
                label: "Hospitality",
                href: "/blog?category=hospitality",
                icon: "mdi:silverware-fork-knife",
            },
        ],
    },
    {
        title: "Partners",
        href: "/partners",
        description: "Industry partnerships.",
        links: [
            {
                label: "Our Partners",
                href: "/partners",
                icon: "mdi:handshake",
            },
            {
                label: "Become a Partner",
                href: "/partners",
                icon: "mdi:handshake",
            },
        ],
    },
    {
        title: "Contact",
        href: "/contact",
    },
];