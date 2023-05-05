export const getItemsByGender = (items, gender) => items.filter(item => gender !== "all" ? item.gender === gender : items);
