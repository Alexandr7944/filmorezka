import { default as qs } from "qs";

export const objectToQueryString = (obj: object, options: object = {}) => {
    return qs.stringify(obj, { ...options, skipNulls: true });
};