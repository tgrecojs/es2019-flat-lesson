const createRange = (start, end) => {
    return Array(end - start + 1).fill().map((item, index) => start + index);
  };
const log = label => val => { 
    console.log(`${label} :::`, val);
    return val;
}
export {
    log,
    createRange
}