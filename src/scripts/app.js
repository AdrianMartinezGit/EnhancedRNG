// Import Functions
import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from './localstorage.js' 

// Input Element Declarations
const addNameBtn = document.getElementById('addNameBtn');
const getGroupBtn = document.getElementById('getGroupBtn');

const nameInputField = document.getElementById('nameInputField');

const nameGroupContainer = document.getElementById('nameGroupContainer');

const totalNameCounter = document.getElementById('totalNameCounter');

const groupRangeSlider = document.getElementById('groupRangeSlider');

const groupSizeCounter = document.getElementById('groupSizeCounter');

const modalBodyDiv = document.getElementById('modalBodyDiv');

// Variable Initializations 
let totalNameNumber = 0;
let groupSizeNumber = 0;

// Function Initializations

const createNameElement = (name) => {
    let div = document.createElement('div');
    div.classList.add('w-full', 'mb-5');

    let hr = document.createElement('hr');
    div.append(hr);

    let div2 = document.createElement('div');
    div2.classList.add('flex', 'justify-center', 'items-center');
    div.append(div2);

    let div3 = document.createElement('div');
    div3.classList.add('grid', 'grid-cols-2', 'gap-4');
    div2.append(div3);

    let div4 = document.createElement('div');
    div4.classList.add('w-96', 'p-3');
    div3.append(div4);

    let h1 = document.createElement('h1');
    h1.classList.add('text-center', 'text-3xl');
    h1.id = `nameColumnText`;
    h1.textContent = name;
    div4.append(h1);

    let div5 = document.createElement('div');
    div5.classList.add('w-96', 'p-3');
    div3.append(div5);

    let input = document.createElement('input');
    input.classList.add('text-white', 'bg-red-700', 'hover:bg-red-800', 'focus:ring-4', 'focus:ring-red-300', 'font-medium', 'rounded-lg', 'text-sm', 'px-5', 'py-2.5', 'me-2', 'mb-2', 'focus:outline-none', 'w-48', 'h-full');
    input.type = 'button';
    input.value = 'Remove';
    div5.append(input);
    
    let hr2 = document.createElement('hr');
    div.append(hr2);

    nameGroupContainer.append(div);

    input.addEventListener('click', () => {
        removeFromLocalStorage(name);

        div.remove();
        totalNameNumber--;
        updateTotalNameCounter(totalNameNumber);
    });

    totalNameNumber++;
    updateTotalNameCounter(totalNameNumber);
}

const addNameToList = (name) => {
    if (name === '') {
        alert('Please Enter a Name');
        return;
    }

    let savedName = name; 
    nameInputField.value = '';

    createNameElement(savedName);
    saveToLocalStorage(savedName);
}

const updateTotalNameCounter = (number) => {
    totalNameCounter.textContent = `Total Names: ${number}`;
}

const onPageLoad = () => {
    updateTotalNameCounter(totalNameNumber);

    let rnglist = getLocalStorage();
    rnglist.map(name => {
        createNameElement(name);
    });
}

onPageLoad();

// Input Event Listeners

if (nameInputField !== null) {
    nameInputField.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            addNameToList(e.target.value);
        }
    })
}

if (addNameBtn !== null) {
    addNameBtn.addEventListener('click', () => {
        addNameToList(nameInputField.value);
    });
}

if (getGroupBtn !== null) {
    getGroupBtn.addEventListener('click', () => {
        
    });
}

if (groupRangeSlider !== null) {
    groupRangeSlider.addEventListener('input', (e) => {
        groupSizeNumber = Math.floor(e.target.value / 100);
        groupSizeCounter.innerText = `Group Size: ${groupSizeNumber}`;
    })
}