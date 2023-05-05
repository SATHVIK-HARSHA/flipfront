export const getItemsByBrand = (items, brands) => items.filter(items => brands.length > 0 ? brands.includes(items.brand) : items);
