let subtraction = (a, b) => {
    if(isNaN(parseInt(a))
        || isNaN(parseInt(b)
            || a === ''
            || b === '')){
        return null;
    }
    return a - b;
};


module.exports = {subtraction}