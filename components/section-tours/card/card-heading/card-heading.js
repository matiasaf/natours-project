/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY_LIGHT,
  COLOR_SECONDARY_DARK,
  COLOR_SECONDARY_LIGHT,
  COLOR_TERTIARY_DARK,
  COLOR_TERTIARY_LIGHT,
  COLOR_WHITE,
} from "../../../../utils/variables";

function cardHeadingStyle() {
  return css`
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: ${COLOR_WHITE};
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 75%;
  `;
}

function spanStyle(order) {
  return css`
    padding: 1rem 1.5rem;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to right bottom,
      ${order === "first"
        ? COLOR_PRIMARY_LIGHT + "D9"
        : order === "second"
        ? COLOR_SECONDARY_LIGHT + "D9"
        : order === "third"
        ? COLOR_TERTIARY_LIGHT + "D9"
        : ""},
      ${order === "first"
        ? COLOR_PRIMARY_DARK + "D9"
        : order === "second"
        ? COLOR_SECONDARY_DARK + "D9"
        : order === "third"
        ? COLOR_TERTIARY_DARK + "D9"
        : ""}
    );
  `;
}

function CardHeading({ order, children }) {
  return (
    <h4 css={cardHeadingStyle()}>
      <span css={spanStyle(order)}>{children}</span>
    </h4>
  );
}

export default CardHeading;
