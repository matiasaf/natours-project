/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY_LIGHT,
  COLOR_SECONDARY_DARK,
  COLOR_SECONDARY_LIGHT,
  COLOR_TERTIARY_DARK,
  COLOR_TERTIARY_LIGHT,
} from "../../../../utils/variables";

function getStyles(order, img_url) {
  return css`
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    background-image: linear-gradient(
        to right bottom,
        ${order === "first"
          ? COLOR_PRIMARY_LIGHT
          : order === "second"
          ? COLOR_SECONDARY_LIGHT
          : order === "third"
          ? COLOR_TERTIARY_LIGHT
          : ""},
        ${order === "first"
          ? COLOR_PRIMARY_DARK
          : order === "second"
          ? COLOR_SECONDARY_DARK
          : order === "third"
          ? COLOR_TERTIARY_DARK
          : ""}
      ),
      url(${img_url});
  `;
}

function CardPicture({ order, img_url }) {
  return <div css={getStyles(order, img_url)}></div>;
}

export default CardPicture;
