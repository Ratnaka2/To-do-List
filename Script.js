// script.js

document.getElementById('wordForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const word = document.getElementById('word').value;
    const pronunciation = document.getElementById('pronunciation').value;
    const meaning = document.getElementById('meaning').value;
    const source = document.getElementById('source').value;

    if (word && pronunciation && meaning) {
        addWord(word, pronunciation, meaning, source);
    }

    document.getElementById('wordForm').reset();
});

function addWord(word, pronunciation, meaning, source) {
    const wordData = { word, pronunciation, meaning, source };
    saveToLocalStorage(wordData);

    displayWord(wordData);
}

function saveToLocalStorage(wordData) {
    let words = JSON.parse(localStorage.getItem('words')) || [];
    words.push(wordData);
    localStorage.setItem('words', JSON.stringify(words));
}

function loadWords() {
    let words = JSON.parse(localStorage.getItem('words')) || [];
    words.forEach(wordData => {
        displayWord(wordData);
    });
}

function displayWord(wordData) {
    const wordList = document.getElementById('wordList');
    const wordItem = document.createElement('div');
    wordItem.classList.add('wordItem');

    wordItem.innerHTML = `
        <div>
            <h3>${wordData.word} <small>(${wordData.pronunciation})</small></h3>
            <p><strong>Meaning:</strong> ${wordData.meaning}</p>
            ${wordData.source ? `<p><strong>Found in:</strong> ${wordData.source}</p>` : ''}
        </div>
        <button class="delete-btn">Delete</button>
    `;

    wordItem.querySelector('.delete-btn').addEventListener('click', function() {
        removeWord(wordData);
        wordItem.remove();
    });

    wordList.appendChild(wordItem);
}

function removeWord(wordData) {
    let words = JSON.parse(localStorage.getItem('words')) || [];
    words = words.filter(w => w.word !== wordData.word || w.pronunciation !== wordData.pronunciation);
    localStorage.setItem('words', JSON.stringify(words));
}

// Load words from localStorage when the page loads
window.onload = function() {
    loadWords();
};
// script.js
document.getElementById('wordForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const word = document.getElementById('word').value;
    const pronunciation = document.getElementById('pronunciation').value;
    const meaning = document.getElementById('meaning').value;
    const source = document.getElementById('source').value;

    if (word && pronunciation && meaning) {
        addWord(word, pronunciation, meaning, source);
    }

    document.getElementById('wordForm').reset();
});

function addWord(word, pronunciation, meaning, source) {
    const wordList = document.getElementById('wordList');
    const wordItem = document.createElement('div');
    wordItem.classList.add('wordItem');

    wordItem.innerHTML = `
        <h3>${word} <small>(${pronunciation})</small></h3>
        <p><strong>Meaning:</strong> ${meaning}</p>
        ${source ? `<p><strong>Found in:</strong> ${source}</p>` : ''}
    `;

    wordList.appendChild(wordItem);
}
