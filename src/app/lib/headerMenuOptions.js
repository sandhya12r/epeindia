
export const getMenuOptions = () => {

    const menuOptions = [
        {
            title: "home",
            href: "/"
        },
        {
            title: "about us",
            href: "/about-us"
        },
        {
            title: "our products",
            href: "/our-products",
            options: [
                {
                    title: "bbps",
                    href: "/our-products/bbps"
                },
                {
                    title: "consultation",
                    href: "/our-products/consultation"
                },
                {
                    title: "real estate inverstment",
                    href: "/our-products/real-estate-inverstment"
                },
                {
                    title: "real estate",
                    href: "/our-products/real-estate"
                }
            ]
        },
        {
            title: "career",
            href: "/career"
        },
        {
            title: "contact us",
            href: "/contact-us"
        },
        {
            title: "enquiry now",
            href: "/enquiry-now"
        }
    ]
    return menuOptions
}

