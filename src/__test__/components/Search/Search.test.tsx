import { fireEvent, render } from "@testing-library/react";
import Search from "../../../components/Search/Search";
import { useRouter } from "next/router";
jest.mock("next/router", () => ({
    useRouter: jest.fn(),
  }));
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      locale: "en",
    });
  });
it("renders Search component without errors", () => {
  render(<Search />);
});
it("clicking on the search component activates the search modal", () => {
    const { getByText, getByTestId } = render(<Search />);
    const component = getByTestId("search"); 
    fireEvent.click(component);
    const searchModal = getByTestId("search-modal");
    expect(searchModal).toHaveClass("active");
  });