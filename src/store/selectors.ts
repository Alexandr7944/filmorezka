/* eslint-disable react-hooks/rules-of-hooks */
import { useAppSelector } from "@/hooks/hook";
import { RootState } from ".";

export const selectUser = () => useAppSelector((state: RootState) => state.user);