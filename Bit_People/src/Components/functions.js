const emailShortage = (email) => {
    const firstLetters = email.slice(0, 3);
    const index = email.indexOf("@");
    const lastLetters = email.slice((index - 3));
    return `${firstLetters}...${lastLetters}`
}

const dateTransform = (date) => {
    const fullDate = new Date(date);
    const day = fullDate.getDate();
    const month = fullDate.getMonth();
    const year = fullDate.getFullYear();
    return `${day}.${month}.${year}.`
}


export { emailShortage, dateTransform }