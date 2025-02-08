export interface ITheme<T> {
  mode: T // "light" | "dark"
  filled?: boolean
  outlined?: boolean
  notUnderlined?: boolean
}

// import image from "./image.svg"
export interface IStaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
  blurWidth?: number
  blurHeight?: number
}

export interface IMenuItem {
  title: string
  path: string
  disabled?: string
}

export interface IMenuGroupItems {
  title: string
  items: IMenuItem[]
}

export type TOnClick = (event: React.SyntheticEvent) => void | null

export interface IListCommon {
  title: string
  items: string[]
}
