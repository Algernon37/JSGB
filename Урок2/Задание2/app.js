const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            { id: "1", text: "Отличный телефон! Батарея держится долго." },
            { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            { id: "3", text: "Интересный дизайн, но дорогой." },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            { id: "4", text: "Люблю играть на PS5, графика на высоте." },
        ],
    },
];
function initializeReviews() {
    const reviewContainer = document.getElementById("reviewContainer");
    initialData.forEach(product => {
        product.reviews.forEach(review => {
            const reviewElement = createReviewElement(review.text);
            reviewContainer.appendChild(reviewElement);
        });
    });
}

function createReviewElement(text) {
    const reviewElement = document.createElement("div");
    reviewElement.className = "review";
    reviewElement.textContent = text;
    return reviewElement;
}

function addReview() {
    const reviewInput = document.getElementById("reviewInput");
    const productSelect = document.getElementById("productSelect");
    const reviewContainer = document.getElementById("reviewContainer");
    const errorMessage = document.getElementById("errorMessage");
    const reviewText = reviewInput.value.trim();
    if (reviewText.length < 50 || reviewText.length > 500) {
        errorMessage.textContent = "Отзыв должен содержать от 50 до 500 символов.";
        return;
    } else {
        errorMessage.textContent = "";
    }
    const newReview = createReviewElement(reviewText);
    reviewContainer.appendChild(newReview);
    reviewInput.value = "";
    const product = initialData.find(p => p.product === productSelect.value);
    if (product) {
        product.reviews.push({ id: (product.reviews.length + 1).toString(), text: reviewText });
    }
}

// Инициализация отзывов при загрузке страницы
window.onload = initializeReviews;
