import React from "react";
import { render } from "@testing-library/react";
import ActorsMovieList from "../../../components/ActorPage/ActorsMovieList";
import { useRouter } from "next/router";

const movieItem = {
  movieItem: {
    id: 1,
    name: "Попкульт",
    nameEn: "Popcult",
    type: "movie",
    image: "https://st.kp.yandex.net/images/film_iphone/iphone360_5260016.jpg",
    ratingVoteCount: 6285,
    rating: 9.443,
    filmLength: "90",
    year: 2022,
    filmDescription:
      "«Попкульт» — это проект на стыке ностальгии и любви к массовой культуре. В шоу, которое выходит на YouTube-канале «sndk», авторы разбирают прошлое на атомы через призму игр, анимации, кино, комиксов и технологий, чтобы понять, как формировалась современная индустрия развлечений. Каждый выпуск посвящён одному году и его релизам, которые повлияли на развитие поп-культуры.",
    filmSpId: 5260016,
    countries: [],
    genre: [],
    director: "Дмитрий Сыендук",
    scenario: "Дмитрий Сыендук, Анна Устюжанинова, Антон Паули",
    producer: "Анна Устюжанинова, Егор Лоскутов, Владислав Ловейко",
    installation: "Григорий Гефальшт, Роман Бутербродер, Максим Аксёнов",
  },
};

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
describe("ActorsMovieList", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      locale: "ru",
    });
  });
  it("renders movie details correctly", () => {
    const { getByText} = render(
      <ActorsMovieList {...movieItem} />
    );

    expect(getByText("Попкульт", { selector: ".title2" })).toBeInTheDocument();
    expect(getByText("Popcult")).toBeInTheDocument();
    expect(getByText("2022")).toBeInTheDocument();

    
  });
});
