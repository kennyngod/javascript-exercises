const add = function (a, b)
{
    return a + b;
};

const subtract = function (a, b)
{
    return a - b;
};

const sum = function (array)
{
    if (array.length == 0)
        return 0;
    let sum = 0;
    for (let i = 0; i < array.length; ++i)
        sum += array[i];
    return sum;
};

const multiply = function (array)
{
    let prod = 1;
    for (let i = 0; i < array.length; ++i)
        prod *= array[i];
    return prod;
};

const power = function (a, b)
{
    return Math.pow(a, b);
};

const factorial = function (a)
{
    if (a <= 1)
        return 1;
    let prod = 1;
    while (a != 1)
        prod *= a--;
    return prod;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
