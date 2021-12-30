const palindromes = function (string)
{
    string = string.toLowerCase();
    const array = string.split('');
    let left = 0;
    let right = string.length - 1;

    while (left < right)
    {
        while (!array[left].match(/[a-z]/i))
            ++left;
        while (!(array[right].match(/[a-z]/i)))
            --right;
        if (left >= right)
            break;
        if (array[left] != array[right])
            return false;
        ++left;
        --right;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
