
// main program
function searchLeftSide(searchBar: HTMLInputElement) {
    

    searchBar.addEventListener('input', () => {
        const searchValues = document.querySelectorAll('#changeCurrency1 li') as NodeListOf<HTMLLIElement>

        if (searchBar.value == '') {
            reset(searchValues)
        } else {
            searchForElements(searchValues, searchBar.value)
        }
    })
}

function searchRightSide(searchBar: HTMLInputElement) {
    

    searchBar.addEventListener('input', () => {
        const searchValues = document.querySelectorAll('#changeCurrency2 li') as NodeListOf<HTMLLIElement>

        if (searchBar.value == '') {
            reset(searchValues)
        } else {
            searchForElements(searchValues, searchBar.value)
        }
    })
}




// segéd functionok
function reset(searchValues: NodeListOf<HTMLLIElement>) {
    searchValues.forEach(option => {
        option.classList.remove('hidden')
    });
    
}

function searchForElements(searchValues: NodeListOf<HTMLLIElement>, inputValue: string) {
    searchValues.forEach(option => {
        if ((!option.innerText.toLowerCase().includes(inputValue.toLowerCase()))
             && option.classList[1] !== 'search') {

            hideElements(option)
        }

        if ((option.innerText.toLowerCase().includes(inputValue.toLowerCase()))
            && option.classList[1] !== 'search') {
            
            showElements(option)
        }
    });
}


function hideElements(option: HTMLLIElement): void {
    option.classList.add('hidden')
}

function showElements(option: HTMLLIElement): void {
    option.classList.remove('hidden')
}


export { searchLeftSide, searchRightSide }