import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Pet from "../Pet";

test("displays a default thumbnail", async () => {
  render(<Pet />);

  const petThumbnail = await screen.findByTestId("thumbnail");

  screen.debug()
});
