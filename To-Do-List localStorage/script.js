const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('inputData');

// Fungsi
const buatLi = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
};

// Event Listener
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Input Array
    itemArray.push(input.value);
    localStorage.setItem('item', JSON.stringify(itemArray));

    buatLi(input.value);
    input.value = '';
});

// Deklarasi Constant
let itemArray = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];

localStorage.setItem('item', JSON.stringify(itemArray));
const data = JSON.parse(localStorage.getItem('item'));

// Loop
data.forEach((item) => {
    buatLi(item);
});

// Hapus Semua
button.addEventListener('click', function () {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
});