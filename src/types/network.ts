export interface Socials {
  id: string
  name: string
  url: string
  label: string
  image: {
    logo: any
    width: number
    height: number
  }
}

export type SocialIcon = Record<string, string | any>