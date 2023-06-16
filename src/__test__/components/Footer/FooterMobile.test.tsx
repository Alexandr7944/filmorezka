import { render, screen, fireEvent } from "@testing-library/react";
import FooterMobile from "../../../components/Footer/FooterMobile";
import { useRouter } from "next/router";
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
beforeEach(() => {
  (useRouter as jest.Mock).mockReturnValue({
    locale: "en",
  });
});
it("render catalog link", () => {
  render(<FooterMobile />);
  const catalogLink = screen.getByText("Catalog");
  expect(catalogLink).toBeInTheDocument();
});
it("clicks on Catalog link", () => {
  render(<FooterMobile />);
  const catalogLink = screen.getByText("Catalog");
  fireEvent.click(catalogLink);
  expect(catalogLink).toHaveClass("tabBar__itemCaption");
});

  it("displays correct number of navigation items", () => {
    render(<FooterMobile />);
    const navigationItems = screen.getAllByTestId("catalog-navigation-item");
    expect(navigationItems.length).toBe(5);
  });
