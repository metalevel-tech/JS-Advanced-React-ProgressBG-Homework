/*
    Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
    Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
    - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s = "") {
    // Write your code here
    let [hh, mm, ss, partOfTheDay] = s.replace(/(AM|PM)$/, ':$1').split(':');
    hh = Number(hh);
    
    if (partOfTheDay.toLowerCase() === 'pm') hh = (hh !== 12) ? hh + 12 : hh;    
    if (partOfTheDay.toLowerCase() === 'am') hh = (hh !== 12) ? hh : 0;

    hh = hh.toString().length === 1 ? `0${hh}` : hh;
    
    return `${hh}:${mm}:${ss}`;
}

const t1 = '07:05:45PM';
console.log(timeConversion(t1));

const t2 = '07:05:43AM';
console.log(timeConversion(t2));