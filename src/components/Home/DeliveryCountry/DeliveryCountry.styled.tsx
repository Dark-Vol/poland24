import styled from "styled-components";
import MapImage from "public/images/icons/map.svg";
import theme from "@theme/index";

export const DeliveryCountryWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100vw;

  ${theme.breakpoints.down("md")} {
    padding: 32px 16px;
    padding-bottom: 0;
  }
`;

export const Counties = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1290px;
  margin: auto;
  width: 100%;
  gap: 94px;

  ${theme.breakpoints.down("md")} {
    gap: 30px;
  }
`;

export const CountiesList = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 24px 64px;
`;

export const MapWrapper = styled.div`
  z-index: -1;
  right: 0;
  top: -50px;
  display: inline-block;
  position: absolute;
`;

export const Map = styled(MapImage)<{ $selectedCountry: "string" }>`
  display: inline-block;

  .map_svg__${({ $selectedCountry }) => $selectedCountry} {
    transition: 0.3s;
    fill: #ea0c0c;
  }
`;

export const Country = styled.button<{ $isSelectedCountry: boolean }>`
  height: fit-content;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  gap: 16px;
  align-items: center;
  ${({ $isSelectedCountry }) => $isSelectedCountry && "color: #EA0C0C;"}

  ${theme.breakpoints.down("md")} {
    font-size: 14px;
  }
`;
