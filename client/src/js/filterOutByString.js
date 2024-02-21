const filterOutByString = (array, string) => {
    return [...array].filter(item => !item.alergens.includes(string));
}

export { filterOutByString };