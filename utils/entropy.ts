const rearrangeArray = (arr: any[]) => {
    if (arr.length === 0) return arr;

    arr.reverse();

    const length = arr.length - 1;
    let randomIndex = length < 0 ? 0 : getRandomNumber(length);
    let element = arr.splice(randomIndex, 1)[0];
    arr.push(element);

    randomIndex = length < 0 ? 0 : getRandomNumber(length);
    element = arr.splice(randomIndex, 1)[0];
    arr.push(element);

    return arr;
};

const getRandomNumber = (max: number) => Math.floor(Math.random() * max);


export default rearrangeArray