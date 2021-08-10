/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function getStoryStyles(color) {
  return css`
    width: 70%;
    padding: 10rem 2rem;
    background-color: ${color};
  `;
}

export { getStoryStyles };
