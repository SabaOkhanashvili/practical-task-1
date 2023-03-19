
const inputString = document.getElementById('input-string');
const inputReplace = document.getElementById('input-replace');
const inputReplaceWith = document.getElementById('input-replace-with');
const outputString = document.getElementById('output-string');
const replaceButton = document.getElementById('replace-button');

replaceButton.addEventListener('click', () => {
    // get input values
    const str = inputString.value;
    const replace = inputReplace.value;
    const replaceWith = inputReplaceWith.value;

    // replace value using custom function
    const newStr = replaceString(str, replace, replaceWith);

    // update output
    outputString.value = newStr;
});

// custom function to replace string
function replaceString(str, replace, replaceWith) {
    const arr = str.split(replace); // split string into array using replace value
    let newStr = '';
    for (let i = 0; i < arr.length; i++) {
        newStr += arr[i]; // add array element to new string
        if (i < arr.length - 1) {
            newStr += replaceWith; // add replace with value after each array element (except last one)
        }
    }
    return newStr;
}
