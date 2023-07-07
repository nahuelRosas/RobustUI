import { Flex, Text, TextMultiColor } from "@robust/nextjs";

export default function Contact() {
  return (
    <Flex backgroundColor="gunMetal" height="100vh" flexDirection="column">
      <TextMultiColor
        alignSelf="flexStart"
        fontWeight="500"
        fontSize="2rem"
        selectorMultiColors="*"
        colors={["white", "frenchMauve"]}
        colorsRandom={true}>
        otherText
      </TextMultiColor>
      <Text fontSize="1.1rem">
        He crafts responsive websites where technologies meet creativity
      </Text>
    </Flex>
  );
}
