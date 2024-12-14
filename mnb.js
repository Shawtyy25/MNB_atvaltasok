// main JS
import { currencySymbols } from "./dist/currencies.js" 
import { searchLeftSide, searchRightSide } from "./dist/search.js"

document.addEventListener('DOMContentLoaded', () => {
    const search1 = document.querySelector('#search1')
    const search2 = document.querySelector('#search2')
    currencySymbols()
    
    searchLeftSide(search1)
    searchRightSide(search2)
})