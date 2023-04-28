
export const calcCountAside = (asideData,updatedAsideData) => {
   return asideData?.map((item) => {
      const countArr = item.items.map((i) => {
       
         return updatedAsideData.filter((job) => job[item.label] === i.title).length;

      });
      const count = countArr.reduce((a, b) => a + b, 0);

      if (count === 0 && item.items.some((i) => i.title !== "")) {
         const items = item.items.map((i, idx) => ({ ...i, count: countArr[idx] }));
         return { ...item, items };
      } else {
         const items = item.items.map((i, idx) => ({ ...i, count: countArr[idx] }));
         return { ...item, items };
      }
   });

} 