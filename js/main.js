
const numbers = [1,2,3,4,5,6,7,8,9];

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        setBackground();
    }
}

let setBackground = () => {
    let elements = document.querySelectorAll('.item');
    for(let i=0; i<elements.length; i++){
        if(elements[i].innerText == 1 || elements[i].innerText == 8){
            elements[i].style.backgroundColor = '#6F98A8'; 
        } else if(elements[i].innerText == 2 || elements[i].innerText == 4){
            elements[i].style.backgroundColor = '#2B8EAD';
        } else if(elements[i].innerText == 3 || elements[i].innerText == 5 || elements[i].innerText == 9){
            elements[i].style.backgroundColor = '#2F454E';
        } else if(elements[i].innerText == 6 || elements[i].innerText == 7){
            elements[i].style.backgroundColor = '#bfbfbf';
        }
    }
}

let updateShuffledOrSortedNumbers = () => {
    let elements = document.querySelectorAll('span');
    for(let i=0; i<numbers.length; i++) {
        elements[i].innerText = numbers[i];
    }
}

let shuffle = () => {
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    updateShuffledOrSortedNumbers();
    setBackground();
}

let sort = () => {
    numbers.sort();
    updateShuffledOrSortedNumbers();
    setBackground();
}


  