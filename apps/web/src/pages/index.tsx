import { Flex, Text, TextMultiColor } from "@robust/nextjs";

export default function Home() {
  return (
    <Flex backgroundColor="gunMetal" height="100vh">
      <TextMultiColor
        alignSelf="flexStart"
        fontWeight="500"
        fontSize="2rem"
        selectorMultiColors="*"
        // colors={["white", "frenchMauve", "blue"]}
        // colorsRandom={false}
      >
        Nahuel is a * Full Stack web Developer * with a passion for * building
        products
      </TextMultiColor>
    </Flex>
  );
}
