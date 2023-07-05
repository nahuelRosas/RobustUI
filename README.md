# Robust

Robust is a system for generating React components with real-time CSS injection. It is programmed in TypeScript, providing type safety and enhanced developer experience.

## Installation

You can install Robust by downloading it from the [GitHub repository](https://github.com/nahuelRosas/Robust.git). After downloading, use [pnpm](https://pnpm.io/) to install the dependencies. The `prepare` script defined in the `package.json` file will automatically build all the files within the `packages` folder.

## Usage

To use Robust, you need to make use of the `Provider` component from the `@robust/nextjs` repository. Note that the functionality has only been tested with Next.js and may not work in other React environments.

Here's an example of how to use Robust in a Next.js application:

```tsx
import type { AppProps } from "next/app";
import { Provider, Header, Text, Icon, Flex } from "@robust/nextjs";
import React from "react";
import { SideMenu } from "@/components/drawer";

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Provider color="white" fontFamily="Fira Code">
      <Header backgroundColor="gunMetal">
        <Flex>
          <Text fontWeight="700" fontSize="1.5rem">
            Nahuel
          </Text>
        </Flex>
        <Icon type="menu" onClick={() => setOpen(!open)} />
      </Header>
      <SideMenu open={open} setOpen={setOpen} />
      <Component {...pageProps} />
    </Provider>
  );
}
```

In the above example, we import the necessary components from Robust and use them to create a basic application structure. The `Provider` component sets the color and font family for the components. The `Header` component represents the application header, including a title and a menu icon that toggles the `open` state. The `SideMenu` component displays a side drawer with links and language options. Finally, we render the `Component` with the `pageProps`.

Please note that this usage example is specific to Next.js, and the functionality may not be tested or supported in other React environments. Make sure to customize the components and their properties based on your specific requirements.

## Available Components

The following components are available in Robust as of July 5th:

```
├── drawer
│   ├── complements
│   │   ├── DrawerBody
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── DrawerCloseButton
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── DrawerFooter
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── DrawerHeader
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── index.tsx
│   ├── options
│   │   ├── placement.ts
│   │   └── size.ts
│   └── types.ts
├── header
│   ├── index.tsx
│   └── types.ts
├── icon
│   ├── circle
│   │   ├── index.tsx
│   │   └── types.ts
│   ├── g
│   │   ├── index.tsx
│   │   └──

 types.ts
│   ├── icons
│   │   ├── close
│   │   │   └── index.tsx
│   │   ├── dotsSixVertical
│   │   │   └── index.tsx
│   │   ├── expandMore
│   │   │   └── index.tsx
│   │   ├── fallbackIcon
│   │   │   └── index.tsx
│   │   ├── githubFill
│   │   │   └── index.tsx
│   │   ├── index.ts
│   │   └── menu
│   │       └── index.tsx
│   ├── index.tsx
│   ├── path
│   │   ├── index.tsx
│   │   └── types.ts
│   └── types.ts
├── index.ts
├── layout
│   ├── flex
│   │   ├── index.tsx
│   │   └── types.ts
│   └── index.tsx
├── link
│   ├── index.tsx
│   └── types.ts
├── menu
│   ├── index.tsx
│   └── types.ts
├── types.ts
└── typography
    ├── index.ts
    ├── span
    │   ├── index.tsx
    │   └── types.ts
    └── text
        ├── index.tsx
        └── types.ts
```
## Features

Robust includes the following features:

* Automatic responsiveness: The components are designed to adapt to different screen sizes and orientations.
* Quick language switching: Easily switch between different languages using the language options provided.
* Dark mode: The system supports a dark mode theme that can be enabled or disabled.
* Global states: Robust provides mechanisms for managing global states and sharing data between components.

## Contributing

Contributions to Robust are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

Robust is released under the [MIT License](https://opensource.org/licenses/MIT).

---

