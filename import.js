import defaultSquares from "./squares.js";

export function importJSON(evt) {
    if(evt.target.id == 'add-defaults'){
        const fullSet = {defaultSquares: defaultSquares};
        localStorage.setItem('sb-full-set', JSON.stringify(fullSet));
        return;
    }
    let jsonFile = evt.target.files[0];
    let reader = new FileReader();
    reader.readAsText(jsonFile);
    reader.onload = function() {
        const arr = JSON.parse(reader.result).squares;  //  get the array from the imported JSON
        const fullSet = localStorage.getItem('sb-full-set') ? JSON.parse(localStorage.getItem('sb-full-set')) : null;  // if a sb-full-set already exists, open it up...if not, create empty object
        fullSet[jsonFile.name.slice(0,-5)] = arr;  //  with the existing or new sb-full-set object, set/create a "key" = the file name, and "value" to the imported array.
        localStorage.setItem('sb-full-set', JSON.stringify(fullSet));  //  Then dump the adjusted/new object into localStorage again, as an OBJECT containing a list of key/values of imported arrays.
    };
    reader.onerror = function() {
        console.log((reader.error));
    };
};

//  newCard creates from sb-full-set, which is an object, with each property key being equal to a file name, and the matching property value being an array of squares.
//  the defaultSquares should also act just like an imported file, which appears in the file list and can be removed (and show no squares if no files involved), or added to with imports.

