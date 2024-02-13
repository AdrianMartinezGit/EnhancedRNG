const saveToLocalStorage = (name) => {
    let rnglist = getLocalStorage();

    if (!rnglist.includes(name)) {
        rnglist.push(name);
    }

    localStorage.setItem("RNGList", JSON.stringify(rnglist));
}

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("RNGList");

    if (localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);

}

const removeFromLocalStorage = (name) => {
    let rnglist = getLocalStorage();

    let namedIndex = rnglist.indexOf(name);

    rnglist.splice(namedIndex, 1);

    localStorage.setItem("RNGList", JSON.stringify(rnglist))
}

// Export Functions
export { saveToLocalStorage, getLocalStorage, removeFromLocalStorage };