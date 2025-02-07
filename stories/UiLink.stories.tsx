import type { Meta, StoryObj } from "@storybook/react"

import { robotoRegular } from "@/sawyer-react-lib/app/fonts"
import "@/sawyer-react-lib/app/globals.css"

import UiLink, { options } from "@/sawyer-react-lib/ui-kit/basic/UiLink"

// TODO: code
// import UiLink from "@/sawyer-react-lib/ui-kit/basic/UiLink"
// import type { TTheme } from "@/sawyer-react-lib/ui-kit/basic/UiLink"

const meta: Meta<typeof UiLink> = {
  title: "Basic/UiLink",
  component: UiLink,
  argTypes: {
    theme: {
      options: options.theme,
      control: { type: "radio" },
    },
  },
  args: {
    href: "https://fonts.google.com/",
    children: "Link",
    theme: "blue-underlined-thin",
  },
  decorators: [
    (Story) => (
      <div
        className={robotoRegular.className}
        style={{ backgroundColor: "#fff", padding: "10px" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiLink>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
