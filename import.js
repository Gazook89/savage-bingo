export function importJSON(evt) {
    let jsonFile = evt.target.files[0];
    let reader = new FileReader();
    reader.readAsText(jsonFile);
    reader.onload = function() {
        const arr = JSON.parse(reader.result).rules;
        const obj = {

        }
        localStorage.setItem('full-set', JSON.stringify(arr));
        localStorage.setItem('imported-file-name', jsonFile.name);
    };
    reader.onerror = function() {
        console.log((reader.error));
    };
};

//  newCard creates from full-set, which is an object, with each property key being equal to a file name, and the matching property value being an array of squares.
//  the defaultSquares should also act just like an imported file, which appears in the file list and can be removed (and show no squares if no files involved), or added to with imports.

