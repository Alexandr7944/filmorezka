import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import ActorModal from "../../../components/ActorPage/Modal/ActorModal";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      locale: "ru",
    });
  });
const movieItem = {
    id: 1,
    image: "https://st.kp.yandex.net/images/film_iphone/iphone360_420923.jpg",
    name: "Шерлок Холмс",
    nameEn: "Sherlock Holmes",
    year: 2009,
    actors: ["Эдди Марсан", "Роберт Дауни мл.", "Джуд Лоу"],
    director: "Гай Ричи",
  };
describe("ActorModal", () => {
  it("call router.push with the correct path", () => {
    const setActive = jest.fn();
    const pushMock = jest.fn();
     //@ts-ignore
    useRouter.mockReturnValue({ push: pushMock });
    const { container } = render(
         //@ts-ignore
      <ActorModal active={true} setActive={setActive} movieItem={movieItem} />
    );
    const modalContent = container.querySelector(".modal__content");
     //@ts-ignore
    fireEvent.click(modalContent);
    expect(pushMock).toHaveBeenCalledWith(`/watch/${movieItem.id}`);
  });
  it("display a button with the correct title", () => {
    const setActive = jest.fn();
    const { getByText } = render(
         //@ts-ignore
      <ActorModal active={true} setActive={setActive} movieItem={movieItem} />
    );
    const button = getByText("Подробнее");
    expect(button).toBeInTheDocument();
  });
  it("display modal content", () => {
    const setActive = jest.fn();
    const { getByText } = render(
        //@ts-ignore
      <ActorModal active={true} setActive={setActive} movieItem={movieItem} />
    );
    const movieName = getByText("Шерлок Холмс");
    const director = getByText("Гай Ричи");
    expect(movieName).toBeInTheDocument();
    expect(director).toBeInTheDocument();
  });
});
