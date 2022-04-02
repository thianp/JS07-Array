let word = "background-color";

function convertToCamel(str) {
    str = str.split("-");
    let result = [];
    str.forEach((item, index) => {
        result.push( index > 0 ? item.charAt(0).toUpperCase() + item.slice(1) : item )
    })
    return result.join("");
}

console.log(convertToCamel(word));