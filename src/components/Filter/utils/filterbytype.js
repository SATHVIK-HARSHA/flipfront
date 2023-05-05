export const getItemsByType = (items, types) => items.filter(item => types.length > 0 ? types.includes(item.type) : items);
