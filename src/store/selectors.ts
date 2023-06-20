/* eslint-disable react-hooks/rules-of-hooks */
import { useAppSelector } from "@/hooks/hook";
import { RootState } from ".";

export const selectUser = () => useAppSelector((state: RootState) => state.user);
export const selectGenres = () => useAppSelector((state: RootState) => state.genres);
export const selectLangs = () => useAppSelector((state: RootState) => state.langs.language);