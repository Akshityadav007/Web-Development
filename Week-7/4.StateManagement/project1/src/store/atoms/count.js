import {atom, selector} from "recoil";m

export const countAtom = atom({
    key : "countAtom",          // unique for each atom
    default : 0
});


// define a selector
export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return (count & 1);
    }
});