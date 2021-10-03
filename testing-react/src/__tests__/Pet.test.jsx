import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { StaticRouter } from "react-router";
import Pet from "../Pet";

test("displays a default thumbnail", async () => {
  render(
    <StaticRouter>
      <Pet />
    </StaticRouter>
  );

  const petThumbnail = await screen.findByTestId("thumbnail");

  expect(petThumbnail.src).toContain("none.jpg");

  screen.debug();
});
