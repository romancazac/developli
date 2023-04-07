export const setFilter = (state, title) => {

   const findIndex = state.find((item) => item === title);
   if (!findIndex) {
      return state = [...state, title];
   } else {
      return state = state.filter((obj) => obj !== title);
   }
}