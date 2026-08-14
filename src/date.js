export function checkOverdue(dateISO) {
    let today = new Date();
    today = today.toISOString();
    today = today.slice(0,10)
    return  today > dateISO;
}

export function compareDatesAscending(date1, date2) {
    if (date1 === null && date2 === null) return 0;
    if (date1 === null) return 1;
    if (date2 === null) return -1;
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
}