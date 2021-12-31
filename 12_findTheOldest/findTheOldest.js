const findTheOldest = function (people)
{
    let maxidx = 0;
    let maxAge = 0;
    for (let i = 0; i < people.length; ++i)
    {
        let person = people[i];
        let stats = Object.values(person);
        if (stats.length == 2)
        {
            day = new Date();
            stats.push(day.getFullYear());
        }

        let age = stats[2] - stats[1];
        if (age > maxAge)
        {
            maxidx = i;
            maxAge = age;
        }
    }

    return people[maxidx];
};

// Do not edit below this line
module.exports = findTheOldest;
