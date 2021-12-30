const sumAll = function (a, b)
{

    if (typeof(a) != "number" || typeof(b) != "number")
        return "ERROR"
    else if (a < 0 || b < 0)
        return "ERROR";
    
    // swap a and b
    if (a > b)
        [a, b] = [b, a];
    let sum = a;
    do
    {
        sum += ++a;
    } while (a != b);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
