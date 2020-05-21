/**
 * a function to reduce the String to a specified size
 * 
 * @param {String} string the String that will be truncated
 * @param {Number} newSize the size of the final string truncated
 * @returns {String} returns the String received truncated 
 */
export default function(string, newSize) {
    let newString = [];
    string = string.split('');
    for (let i = 0; i < newSize; i++) {
        newString.push(string[i]);
    }
    return newString.join('');
}