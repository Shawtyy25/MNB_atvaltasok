// main program
function searchLeftSide(searchBar) {
    searchBar.addEventListener('input', () => {
        const searchValues = document.querySelectorAll('#changeCurrency1 li');
        if (searchBar.value == '') {
            reset(searchValues);
        }
        else {
            searchForElements(searchValues, searchBar.value);
        }
    });
}
function searchRightSide(searchBar) {
    searchBar.addEventListener('input', () => {
        const searchValues = document.querySelectorAll('#changeCurrency2 li');
        if (searchBar.value == '') {
            reset(searchValues);
        }
        else {
            searchForElements(searchValues, searchBar.value);
        }
    });
}
// segéd functionok
function reset(searchValues) {
    searchValues.forEach(option => {
        option.classList.remove('hidden');
    });
}
function searchForElements(searchValues, inputValue) {
    searchValues.forEach(option => {
        if ((!option.innerText.toLowerCase().includes(inputValue.toLowerCase()))
            && option.classList[1] !== 'search') {
            hideElements(option);
        }
        if ((option.innerText.toLowerCase().includes(inputValue.toLowerCase()))
            && option.classList[1] !== 'search') {
            showElements(option);
        }
    });
}
function hideElements(option) {
    option.classList.add('hidden');
}
function showElements(option) {
    option.classList.remove('hidden');
}
export { searchLeftSide, searchRightSide };
