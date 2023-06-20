import { fireEvent, render } from "@testing-library/react";
import Search from "../../../components/Search/Search";
import { useRouter } from "next/router";
import { selectLangs } from "@/store/selectors";
import { Provider } from 'react-redux';
import store from '@/store';
jest.mock("next/router", () => ({
    useRouter: jest.fn(),
  }));
it("renders Search component without errors", () => {
  render(<Provider store={store}>
    <Search />
  </Provider>);
});
it("clicking on the search component activates the search modal", () => {
    const { getByText, getByTestId } = render(<Provider store={store}>
      <Search />
    </Provider>);
    const component = getByTestId("search"); 
    fireEvent.click(component);
    const searchModal = getByTestId("search-modal");
    expect(searchModal).toHaveClass("active");
  });