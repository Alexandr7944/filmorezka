import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import Switcher from "../../../components/UI/LanguageSwitcher/Switcher";

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
  }));
  
  describe("Switcher", () => {
    const mockPush = jest.fn();
    const mockUseRouter = {
      push: mockPush,
      locale: "en",
    };
  
    beforeEach(() => {
      useRouter.mockReturnValue(mockUseRouter);
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it("changes the locale when selecting a different language", () => {
      const { getByTestId } = render(<Switcher />);
      const selectElement = getByTestId("language-select");
  
      fireEvent.change(selectElement, { target: { value: "ru" } });
  
      expect(mockPush).toHaveBeenCalledWith(mockUseRouter.pathname, mockUseRouter.asPath, { locale: "ru" });
    });
  });
 
  
  
  
  
  
  
  
  
  