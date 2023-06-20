import { render, screen, fireEvent } from "@testing-library/react";
import FooterMobile from "../../../components/Footer/FooterMobile";
import { useRouter } from "next/router";
import { Provider } from 'react-redux';
import store from '@/store';
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
it("render catalog link", () => {
  render(<Provider store={store}><FooterMobile /></Provider>);
  const catalogLink = screen.getByText("Каталог");
  expect(catalogLink).toBeInTheDocument();
});
it("clicks on Catalog link", () => {
  render(<Provider store={store}><FooterMobile /></Provider>);
  const catalogLink = screen.getByText("Каталог");
  fireEvent.click(catalogLink);
  expect(catalogLink).toHaveClass("tabBar__itemCaption");
});

  it("displays correct number of navigation items", () => {
    render(<Provider store={store}><FooterMobile /></Provider>);
    const navigationItems = screen.getAllByTestId("catalog-navigation-item");
    expect(navigationItems.length).toBe(5);
  });
