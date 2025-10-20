import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Button from "@components/UI/buttons";
import BlockTitle from "@components/BlockTitle";

import * as Styled from "./AboutUs.styled";

const AboutUs: React.FC = () => {
  const [isPlayVideo, setPlayVideo] = useState(false);
  const { t } = useTranslation("home");
  const router = useRouter();

  return (
    <Styled.Container>
      <div>
        <BlockTitle title={t("aboutTitle")} subtitle={t("aboutSubtitle")} />
        <Styled.Description>{t("aboutDescription")}</Styled.Description>
        <Styled.Button
          variant="subtle"
          size="medium"
          onClick={() => router.push("/about")}
        >
          {t("aboutDetail")}
        </Styled.Button>
      </div>
      <Styled.Video>
        {isPlayVideo ? (
          <iframe
            style={{
              border: "none",
              position: "absolute",
            }}
            width={"100%"}
            height={"100%"}
            allow="autoplay"
            src="https://www.youtube.com/embed/DtBTBkoJBpA?rel=0&amp;showinfo=0&amp;autoplay=1"
          />
        ) : (
          <Styled.VideoBackdrop onClick={() => setPlayVideo(true)}>
            <Button style={{ margin: "auto" }} form="circle">
              <Image
                width={40}
                height={40}
                alt="play"
                src="/images/icons/play-one.svg"
              />
            </Button>
          </Styled.VideoBackdrop>
        )}
      </Styled.Video>
    </Styled.Container>
  );
};

export default AboutUs;
