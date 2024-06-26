import { Fragment } from "react"
import cn from "classnames"

import styles from "./ChipsElement.module.css"

// TODO:
// import { ChipsElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  className: "",
  theme: {
    mode: ["light", "dark"],
  },
  items: ["Item-1", "Item-2", "Item-3"],
  isUserSelect: true,
}

const ChipsElement = (props) => {
  const { className, theme, items, isUserSelect = false } = props

  const itemMode = theme?.mode
    ? styles["item--" + theme.mode]
    : styles["item--light"]

  return (
    <>
      {items.map((element, index) => (
        <Fragment key={index}>
          <span
            className={cn(styles.item, itemMode, className)}
            style={{ userSelect: isUserSelect ? "auto" : "none" }}
          >
            {element}
          </span>
        </Fragment>
      ))}
    </>
  )
}

export default ChipsElement
