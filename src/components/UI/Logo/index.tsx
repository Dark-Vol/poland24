import Link from "@components/Link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { logoConfig } from "@common/configs/logo";

type LogoProps = {
  size?: "small" | "medium" | "large";
  variant?: "light" | "dark";
  style?: React.CSSProperties;
};

const Logo: React.FC<LogoProps> = ({
  size = "large",
  variant = "light",
  ...props
}) => {
  const { t } = useTranslation("common");

  const isSmallSize = size === "small";

  return (
    <Link
      href="/"
      style={{ display: "flex", gap: "6px", alignItems: "center" }}
      {...props}
    >
      <Image
        alt="logo"
        src={logoConfig.variant[variant].logo}
        width={isSmallSize ? 32 : 46}
        height={isSmallSize ? 32 : 46}
      />
      <div
        style={{
          fontSize: logoConfig.size[size].title,
          display: "flex",
          flexDirection: "column",
          letterSpacing: isSmallSize ? 1.5 : 0,
          gap: 0,
          lineHeight: 1,
        }}
      >
        <span style={{ fontWeight: isSmallSize ? 800 : 700 }}>
          <span style={{ color: "red" }}>PO</span>LAND24.COM.UA
        </span>
        <span
          style={{
            fontSize: logoConfig.size[size].subtitle,
            letterSpacing: logoConfig.size[size].spacing,
            opacity: 0.6
          }}
        >
          {t("logo")}
        </span>
      </div>
    </Link>
  );
};

export default Logo;
