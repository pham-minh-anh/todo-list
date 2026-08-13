
export function saveData(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error("Failed to save data.")
    }
}

export function loadData(key) {
    try {
    return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
    return [];
    }
}