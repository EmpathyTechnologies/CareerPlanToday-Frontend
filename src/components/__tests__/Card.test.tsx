import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  const cardProps = {
    img: "path/to/image.jpg",
    alt: "Image alt text",
    title: "Card Title",
    text: "Card text content",
  };

  test("renders the card component with correct props", () => {
    const { getByAltText, getByText } = render(<Card {...cardProps} />);

    const imageElement = getByAltText(cardProps.alt) as HTMLImageElement;
    expect(imageElement.src).toContain(cardProps.img);

    const titleElement = getByText(cardProps.title);
    expect(titleElement).toBeInTheDocument();

    const textElement = getByText(cardProps.text);
    expect(textElement).toBeInTheDocument();
  });
});
