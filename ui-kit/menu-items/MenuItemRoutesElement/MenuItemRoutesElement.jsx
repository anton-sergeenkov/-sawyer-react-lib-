"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { MenuButtonElement } from "@/sawyer-react-lib/ui-kit"

// import styles from "./MenuItemRoutesElement.module.css"

// [UiKit]
// import { MenuItemRoutesElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  theme: {
    mode: ["light-violet"],
  },
  item: {
    title: "",
    path: "",
  },
  isAccent: true,
  isTextLeft: true,
}

const MenuItemRoutesElement = (props) => {
  const { theme, item, isAccent, isTextLeft } = props

  const pathname = usePathname()

  return (
    <Link href={item.path}>
      <MenuButtonElement
        theme={theme}
        isAccent={isAccent}
        isActive={pathname === item.path}
        isTextLeft={isTextLeft}
      >
        {item.title}
      </MenuButtonElement>
    </Link>
  )
}

export default MenuItemRoutesElement
