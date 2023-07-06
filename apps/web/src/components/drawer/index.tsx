import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Text,
  Link,
  Menu,
  Icon,
  useLanguage,
} from "@robust/nextjs";
import React from "react";

export function SideMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [language, setLanguage] = useLanguage();
  return (
    <Drawer
      // passClose
      open={open}
      placement="right"
      onClose={() => setOpen(!open)}
    >
      <DrawerHeader justifyContent="left" fontSize="1.5rem">
        Nahuel
      </DrawerHeader>
      <DrawerBody>
        <Link href="/">
          <Text fontSize="3rem" color="frenchMauve">
            #
          </Text>
          <Text
            multiLanguage={{
              en: "Home",
              es: "Inicio",
            }}
            fontSize="2rem"
          />
        </Link>
        <Link href="/aboutMe">
          <Text fontSize="3rem" color="frenchMauve">
            #
          </Text>
          <Text
            fontSize="2rem"
            multiLanguage={{
              en: "About-Me",
              es: "Sobre-Mi",
            }}
          />
        </Link>
        <Link href="/projects">
          <Text fontSize="3rem" color="frenchMauve">
            #
          </Text>
          <Text
            fontSize="2rem"
            multiLanguage={{
              en: "Projects",
              es: "Proyectos",
            }}
          />
        </Link>
        <Link href="/contact">
          <Text fontSize="3rem" color="frenchMauve">
            #
          </Text>
          <Text
            fontSize="2rem"
            multiLanguage={{ en: "Contact", es: "Contacto" }}
          />
        </Link>
        <Menu
          title={language.toUpperCase()}
          fontWeight="500"
          icon={<Icon type="expandMore" size="2rem" pl={0} />}
        >
          <Text
            fontWeight={language === "en" ? "bold" : "normal"}
            p={0}
            fontSize="2rem"
            onClick={() => setLanguage("en")}
          >
            EN
          </Text>
          <Text
            fontWeight={language === "es" ? "bold" : "normal"}
            p={0}
            fontSize="2rem"
            onClick={() => setLanguage("es")}
          >
            ES
          </Text>
        </Menu>
      </DrawerBody>
      <DrawerFooter>
        <Link href="https://github.com/nahuelRosas" justifyContent="center">
          <Icon type="githubFill" size="4rem" />
        </Link>
      </DrawerFooter>
    </Drawer>
  );
}
