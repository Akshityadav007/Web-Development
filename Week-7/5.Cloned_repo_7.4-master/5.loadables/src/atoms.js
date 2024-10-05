import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      await new Promise(r => setTimeout(r, 5000));          // this is to hang up the system for 5 seconds
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?id=${id}`);
      return res.data[0];
    },
  })
});