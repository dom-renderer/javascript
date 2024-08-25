```javascript
function customDateFormat(formatString) {
    const currentDate = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const formatOptions = {
        "d": String(currentDate.getDate()).padStart(2, '0'),
        "D": currentDate.toLocaleDateString('en-US', { weekday: 'short' }),
        "j": currentDate.getDate(),
        "l": currentDate.toLocaleDateString('en-US', { weekday: 'long' }),
        "N": currentDate.getDay() === 0 ? 7 : currentDate.getDay(),
        "S": ["st", "nd", "rd"][((currentDate.getDate() + 10) % 20 - 1) % 10] || "th",
        "w": currentDate.getDay(),
        "z": Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 1)) / 86400000),
        "F": months[currentDate.getMonth()],
        "m": String(currentDate.getMonth() + 1).padStart(2, '0'),
        "M": currentDate.toLocaleDateString('en-US', { month: 'short' }),
        "n": currentDate.getMonth() + 1,
        "Y": currentDate.getFullYear(),
        "y": String(currentDate.getFullYear()).substr(-2),
        "a": currentDate.getHours() >= 12 ? 'pm' : 'am',
        "A": currentDate.getHours() >= 12 ? 'PM' : 'AM',
        "g": currentDate.getHours() % 12 || 12,
        "G": currentDate.getHours(),
        "h": String(currentDate.getHours() % 12 || 12).padStart(2, '0'),
        "H": String(currentDate.getHours()).padStart(2, '0'),
        "i": String(currentDate.getMinutes()).padStart(2, '0'),
        "s": String(currentDate.getSeconds()).padStart(2, '0'),
        "U": Math.floor(currentDate.getTime() / 1000)
    };
    
    return formatString.replace(/(\\?)(.)/g, function (_, escaped, char) {
        return escaped === "" ? formatOptions[char] || char : char;
    });
}
```

In this function, `formatString` is a string containing the format characters similar to those used in the PHP `date()` function. The function replaces the format characters with the corresponding values based on the current date and time.

For example, you can use the function like this:

```javascript
console.log(customDateFormat("Y-m-d")); // Output: "2023-10-11"
console.log(customDateFormat("l, F jS Y")); // Output: "Wednesday, October 11th 2023"
console.log(customDateFormat("h:i:s a")); // Output: "02:30:45 pm"
```
