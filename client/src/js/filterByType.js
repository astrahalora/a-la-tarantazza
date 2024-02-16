const filterByType = (arr, type) => {
    return arr.filter((item) => item.type === type);
}

export { filterByType }