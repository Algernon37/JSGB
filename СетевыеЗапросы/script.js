const UNSPLASH_API_KEY = 'TrZOxYH-AbfSiNuBNwpmSmYFRpKJVg9BmQfsihtjSWc';
const UNSPLASH_API_URL = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}`;
const imageElement = document.getElementById('random-image');
const photographerInfoElement = document.querySelector('.photographer-info');
const likeButton = document.querySelector('.button__like');
const likeCountElement = document.querySelector('.like-count');
const historyContainer = document.getElementById('history-images');

let likeCount = 0;

async function fetchRandomImage() {
    try {
        const response = await fetch(UNSPLASH_API_URL);
        if (!response.ok) {
            throw new Error('Ошибка при получении изображения с Unsplash');
        }
        const data = await response.json();
        const imageData = {
            url: data.urls.regular,
            description: data.alt_description || 'Random Unsplash Image',
            photographer: data.user.name,
            photographerLink: data.user.links.html
        };
        imageElement.src = imageData.url;
        imageElement.alt = imageData.description;
        photographerInfoElement.innerHTML = `
            Photo by <a href="${imageData.photographerLink}" target="_blank" rel="noopener noreferrer">${imageData.photographer}</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
        `;
        saveHistory(imageData);
        loadHistory();
        document.body.classList.add('loaded');
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

function updateLikeCount() {
    likeCountElement.textContent = likeCount;
}

likeButton.addEventListener('click', () => {
    likeCount++;
    updateLikeCount();
});

function loadHistory() {
    const storedHistory = localStorage.getItem('imageHistory');
    if (storedHistory) {
        const history = JSON.parse(storedHistory);
        displayHistory(history);
    }
}

function displayHistory(history) {
    historyContainer.innerHTML = '';
    history.forEach(imageData => {
        const imgElement = document.createElement('img');
        imgElement.src = imageData.url;
        imgElement.alt = imageData.description || 'Historical Image';
        imgElement.title = `Photo by ${imageData.photographer}`;
        historyContainer.appendChild(imgElement);
    });
}

function saveHistory(imageData) {
    let history = JSON.parse(localStorage.getItem('imageHistory')) || [];
    if (history.length >= 5) {
        history.shift();
    }
    history.push(imageData);
    localStorage.setItem('imageHistory', JSON.stringify(history));
}

window.onload = fetchRandomImage();