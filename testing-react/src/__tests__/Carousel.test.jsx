import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Carousel from "../Carousel";

test("lets users click on thumbnail to make them the hero", async () => {
  const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
  render(<Carousel images={images} />);

  const hero = await screen.findByTestId("hero");
  expect(hero.src).toContain(images[0])
});
