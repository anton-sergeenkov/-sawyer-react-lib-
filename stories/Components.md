# Components

## Рефакторинг

- Изменить название компонентов с "element" на "ui". Проверить поиском все "element"

## Ui-Kit

- Добавить все компоненты в ui-kit
- Вынести код для подключения компонента в "stories\name.stories.tsx"

## ThemeMode

> ui-kit\layout\UiLayoutCards\UiLayoutCards.tsx

- Темы перечислять в виде типа: "light" | "dark"
- checkThemeMode -> checkTheme
- Удалить "constants\theme.ts" из портфолио

## Структура

```
📂 basic
    📑 ModalElement
    📑 TypographyElement 💎
    📑 TypographyGradientElement 💎
📂 layout
    📑 LayoutSectionContainerElement
    📑 LayoutSectionElement 💎
📂 menu-items
    📑 MenuItemGroupLinksElement
    📑 MenuItemGroupRoutesElement
    📑 MenuItemHashElement
    📑 MenuItemRoutesElement
📂 menu-navigation
    📑 MenuButtonElement 💎
    📑 MenuToggleElement
📂 surfaces
    📑 OptionsElement
    📑 SocialLinksElement
```

- Объединить категори "menu-items" и "menu-navigation"
