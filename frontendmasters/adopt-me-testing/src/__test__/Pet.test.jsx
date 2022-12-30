import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Pet from "../Pet";

test("displays a default thumbnail", async () => {
  const pet = render(<Pet />);

  const petThumbnail = await pet.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("none.jpg");
  pet.unmount();
});
