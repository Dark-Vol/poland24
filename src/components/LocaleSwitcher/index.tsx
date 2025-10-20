import Image from "next/image";
import { setCookie } from "cookies-next";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";

import { localeConfig } from "@common/configs/locale";
import ArrowDown from "public/images/icons/arrow_drop_down.svg";

import * as Styled from "./LocaleSwitcher.styled";

const LocaleSwitcher: React.FC = () => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const prevOpen = useRef(open);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      {/* @ts-ignore */}
      <Styled.LocaleSwitcher ref={anchorRef} onClick={handleToggle}>
        <>
          <Image
            alt={i18n.language}
            width={24}
            height={17}
            src={localeConfig[i18n.language].icon}
          />
          {localeConfig[i18n.language].label}
        </>
        <ArrowDown />
      </Styled.LocaleSwitcher>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ zIndex: 10 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onKeyDown={handleListKeyDown}>
                  {Object.keys(localeConfig)
                    .filter((el) => el !== i18n.language)
                    .map((locale) => (
                      <MenuItem
                        sx={{ gap: "8px", alignItems: "center" }}
                        key={locale}
                        onClick={(e) => {
                          handleClose(e);
                          i18n.changeLanguage(locale);
                          setCookie("NEXT_LOCALE", locale);
                        }}
                      >
                        <Image
                          alt={locale}
                          width={24}
                          height={17}
                          src={localeConfig[locale].icon}
                        />{" "}
                        {localeConfig[locale].label}
                      </MenuItem>
                    ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default LocaleSwitcher;
