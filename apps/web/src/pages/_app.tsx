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
