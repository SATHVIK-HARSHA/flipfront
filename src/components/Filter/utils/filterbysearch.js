

export const getItemsBySearch = (items, searches) => {
    const searchedItems = [...items].filter(item => searches.length > 0 ? (searches.includes(item.brand) || searches.includes(item.name) ||  searches.includes(item.gender)): items);

    return searchedItems
}