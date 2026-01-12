import LinkedIn from "@/assets/social/linkedin.svg"
import GitHub from "@/assets/social/github.svg"
import Instagram from "@/assets/social/instagram.svg"

import { type Socials } from "@/types/network"

export const SOCIAL: Socials[] = [
    {
        id: "github",
        name: "GitHub",
        url: "https://github.com/KalZambrano",
        label: "Visit profile on github",
        image: {
            logo: GitHub,
            width: 200,
            height: 200
        }
    },
    {
        id: "linkedin",
        name: "Linkedin",
        url: "https://www.linkedin.com/in/kaleb-zambrano-berlanga/",
        label: "Visit profile on Linkedin",
        image: {
            logo: LinkedIn,
            width: 200,
            height: 200
        }
    },
    {
        id: "instagram",
        name: "Instagram",
        url: "https://www.instagram.com/kal.zambrano/",
        label: "Visit profile on Instagram",
        image: {
            logo: Instagram,
            width: 200,
            height: 200
        }
    }
] as const