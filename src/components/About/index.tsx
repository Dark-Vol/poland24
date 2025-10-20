import Image from "next/image";
import { useTranslation } from "next-i18next";
import HTMLReactParser from "html-react-parser";

import * as Styled from "./About.styled";

const About: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <>
      <Styled.Image>
        <Image
          alt="About Company"
          src="/images/icons/about-company.svg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </Styled.Image>
      <Styled.Content>
        <Styled.BlockTitle title={t("topic")} />
        <div>
          {new Array(9).fill(null).map((_, index) => (
            <Styled.Paragraph key={index}>
              {HTMLReactParser(t(`paragraph${index + 1}`))}
            </Styled.Paragraph>
          ))}
        </div>
      </Styled.Content>
    </>
  );
};

export default About;
