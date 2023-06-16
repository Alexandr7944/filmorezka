import { fireEvent, render } from "@testing-library/react";
import SearchModal from "../../../components/Search/SearchModal";
import { useRouter } from "next/router";
jest.mock("next/router", () => ({
    useRouter: jest.fn(),
  }));

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      locale: "en",
    });
  });
it("search modal is not initially active", () => {
  const setActive = jest.fn();
  const { getByTestId } = render(<SearchModal active={false} setActive={setActive} />);
  const searchModal = getByTestId("search-modal");
  expect(searchModal).not.toHaveClass("active");
});
it("search modal is active when 'active' prop is true", () => {
    const setActive = jest.fn();
    const { getByTestId } = render(<SearchModal active={true} setActive={setActive} />);
    const searchModal = getByTestId("search-modal");
    expect(searchModal).toHaveClass("active");
  });
  it("clicking on the search modal block does not close the modal", () => {
    const setActive = jest.fn();
    const { getByTestId } = render(<SearchModal active={true} setActive={setActive} />);
    const modalBlock = getByTestId("modal-block");
    fireEvent.click(modalBlock);
    expect(setActive).not.toHaveBeenCalled();
  });
  it("clicking on the close button closes the search modal", () => {
    const setActive = jest.fn();
    const { getByTestId } = render(<SearchModal active={true} setActive={setActive} />);
    const closeButton = getByTestId("close-button");
    closeButton.click();
  expect(setActive).toHaveBeenCalledWith(false);
  
  });