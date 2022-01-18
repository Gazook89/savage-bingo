export function importJSON(evt) {
    let jsonFile = evt.target.files[0];
    let reader = new FileReader();
    reader.readAsText(jsonFile);
    reader.onload = function() {
        const arr = JSON.parse(reader.result).rules;
        localStorage.setItem('full-set', JSON.stringify(arr));
        localStorage.setItem('imported-file-name', jsonFile.name);
    };
    reader.onerror = function() {
        console.log((reader.error));
    };
};

