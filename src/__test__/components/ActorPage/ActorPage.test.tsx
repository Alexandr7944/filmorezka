import React from "react";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import ActorPages from "../../../components/ActorPage/ActorPage";
import Fetching from "../../../API/Fetching";
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
// jest.mock('../../../API/Fetching');

describe("ActorPages", () => {
  const actorID = "123";
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      locale: "ru",
    });
  });
  it("renders without errors", () => {
    render(<ActorPages actorID="1245312" />);
  });
  it("displays the correct text", () => {
    const { getByText } = render(<ActorPages actorID={undefined} />);
    expect(getByText("Назад")).toBeInTheDocument();
  });
  it("displays actor name with correct locale", async () => {
    const actorData = {
        "personId": 6750,
        "webUrl": "https://www.kinopoisk.ru/name/6750/",
        "name": "Морган Фриман",
        "nameEn": "Morgan Freeman",
        "sex": "MALE",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/6750.jpg",
        "growth": 188,
        "birthday": "1937-06-01",
        "death": null,
        "age": 84,
        "birthplace": "Мемфис, Теннесси, США",
        "spouses": [
            {
                "personId": 1483691,
                "name": "Джанетт Эдэйр Брэдшоу",
                "divorced": true,
                "divorcedReason": "(развод)",
                "sex": "UNKNOWN",
                "children": 2,
                "webUrl": "",
                "relation": "супруга"
            },
            {
                "personId": 3010731,
                "name": "Мирна Колли-Ли",
                "divorced": true,
                "divorcedReason": "(развод)",
                "sex": "FEMALE",
                "children": 1,
                "webUrl": "https://www.kinopoisk.ru/name/3010731/",
                "relation": "супруга"
            }
        ],
        "hasAwards": 1,
        "profession": "Актер, Продюсер, Режиссер",
        "facts": [
            "Пять лет Фриман провел в Военно-воздушных силах, прежде чем начать посещать школу актеров в Лос-Анджелесе.",
            "Полное имя - Морган Портерфилд Фриман мл. (Morgan Porterfield Freeman Jr.).",
            "Морган Фриман - левша.",
            "Работал в театре Pasadena Playhouse, в 1968 году дебютировал на Бродвее в необычном варианте мюзикла «Хэлло, Долли!» - все роли исполняли чернокожие артисты.",
            "4 августа 2008 попал в аварию в штате Миссисипи. 7 августа 2008 был выписан из госпиталя, где ему была сделана операция на сломанной в двух местах руке.",
            "Его родители: Мейми Эдна (урожденная Ревер), уборщица, и Морган Портфилд Фриман, парикмахер, умерший в 1961 году от цирроза печени."
        ],
        "films": [
            {
                "filmId": 586,
                "nameRu": "И пришел паук",
                "nameEn": "Along Came a Spider",
                "rating": "6.9",
                "general": false,
                "description": "Alex Cross",
                "professionKey": "ACTOR"
            },
            {
                "filmId": 586,
                "nameRu": "И пришел паук",
                "nameEn": "Along Came a Spider",
                "rating": "6.9",
                "general": false,
                "description": "исполнительный продюсер",
                "professionKey": "PRODUCER"
            },
        ]
    };

    const getNewAllMock = jest.fn().mockResolvedValue(actorData);
    Fetching.getNewAll = getNewAllMock;

    render(<ActorPages actorID={actorID} />);

    const localizedActorName = await screen.findByText("Морган Фриман"); 

    expect(localizedActorName).toBeInTheDocument();
  });
});
