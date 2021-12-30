const removeFromArray = function(...args)
{
    array = args[0];
    for (let i = 1; i < args.length; ++i)
    {
        const index = array.indexOf(args[i]);
        if (index > -1)
            array.splice(index, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
