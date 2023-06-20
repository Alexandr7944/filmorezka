import { fireEvent, render } from "@testing-library/react";
import SearchModal from "../../../components/Search/SearchModal";
import { useRouter } from "next/router";
import { Provider } from 'react-redux';
import store from '@/store';
jest.mock("next/router", () => ({
    useRouter: jest.fn(),
  }));
it("search modal is not initially active", () => {
  const setActive = jest.fn();
  const { getByTestId } = render(<Provider store={store}><SearchModal active={false} setActive={setActive} /> </Provider>);
  const searchModal = getByTestId("search-modal");
  expect(searchModal).not.toHaveClass("active");
});
it("search modal is active when 'active' prop is true", () => {
    const setActive = jest.fn();
    const { getByTestId } = render(<Provider store={store}><SearchModal active={false} setActive={setActive} /> </Provider>);
    const searchModal = getByTestId("search-modal");
    expect(searchModal).toHaveClass("modal");
  });
  it("clicking on the search modal block does not close the modal", () => {
    const setActive = jest.fn();
    const { getByTestId } = render(<Provider store={store}><SearchModal active={false} setActive={setActive} /> </Provider>);
    const modalBlock = getByTestId("modal-block");
    fireEvent.click(modalBlock);
    expect(setActive).not.toHaveBeenCalled();
  });
  it("clicking on the close button closes the search modal", () => {
    const setActive = jest.fn();
    const { getByTestId } = render(<Provider store={store}><SearchModal active={false} setActive={setActive} /> </Provider>);
    const closeButton = getByTestId("close-button");
    closeButton.click();
  expect(setActive).toHaveBeenCalledWith(false);
  
  });