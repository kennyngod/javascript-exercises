const fibonacci = function (n)
{
    if (n < 0)
        return "OOPS";

    if (n == 0 || n == 1)
        return 1;
    n -= 2;
    let f1 = 1;
    let f2 = 1;
    while (n--!= 0)
    {
        let temp = f2;
        f2 += f1;
        f1 = temp;
    }
    return f2;
};

// Do not edit below this line
module.exports = fibonacci;
