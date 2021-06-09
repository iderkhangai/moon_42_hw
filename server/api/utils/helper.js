module.exports = {
    helper: function(req) {
        // console.log("---helper class is called---");
        let input = req;
        let result = [];
        input = split(input);
        input.shift(); //removing first element from array
        if (req.startsWith("first")) {
            // case 1
            input.forEach(function(item) {
                item = item.slice(0, -1);
                result.push(item);
            });
            result = filter(result);
            return sortAsc(result);
        } else if (req.startsWith("second")) {
            //case 2
            input.forEach(function(item) {
                item = appendWithA(item);
                // console.log(item);
                result.push(item);
            });
            return sortDesc(result);
        } else {
            return [];
        }
    },
    isValid: function(req, res) {
        if ((req && req.startsWith("first")) || req.startsWith("second")) {
            return true;
        } else {
            return false;
        }
    },
};

//removing empty values from array
function filter(input, output) {
    output = input.filter((item) => item);
    return output;
}

//spliting whitespace with comma
function split(input, output) {
    output = input.split(/[ ,]+/);
    return output;
}
//concating string with letter 'A'
function appendWithA(input, output) {
    output = input += "A";
    return output;
}

//sorting in ascending order
function sortAsc(input, output) {
    output = input.sort();
    return output;
}

//sorting in descending order
function sortDesc(input, output) {
    output = input.sort((a, b) => b.localeCompare(a));
    return output;
}