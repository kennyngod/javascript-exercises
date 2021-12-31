const caesar = function (string, num)
{
    while (num < 0)
        num += 26;
    while (num > 26)
        num -= 26;

    let str = "";
    for (let i = 0; i < string.length; ++i)
    {
        let char = string.charAt(i);
        if (!char.match(/[A-Za-z]/i))
        {
            str += char;
            continue;
        }
        
        char = string.charCodeAt(i);
        char += num;
        if (char - num >= 65 && char - num < 65 + 26)
            if (char < 65 || char > 65 + 26 - 1)
                char -= 26;
        if (char - num >= 97 && char - num < 97 + 26)
            if (char < 97 || char > 97 + 26 - 1)
                char -= 26;

        char = String.fromCharCode(char);
        
        str += char;
    }
    return str;
};

// Do not edit below this line
module.exports = caesar;
