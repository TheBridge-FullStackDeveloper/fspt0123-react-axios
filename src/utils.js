export const getRandomItem = (list) => {
  const randomIndex = ~~(Math.random() * list.length);
  return list[randomIndex];
};
