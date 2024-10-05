import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?id=${id}`);
      // console.log(res.data[0]);
      return res.data[0];
    },
  })
});