
document.addEventListener("DOMContentLoaded", function() {
    displayProducts();
});

function displayProducts() {
    const productList = document.getElementById("productList");
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    let products = [];
    reviews.forEach(review => {
        if (!products.includes(review.product)) {
            products.push(review.product);
            const listItem = document.createElement("li");
            listItem.textContent = review.product;
            listItem.onclick = function() {
                displayReviews(review.product);
            };
            productList.appendChild(listItem);
        }
    });
}
function displayReviews(productName) {
    const reviewsContainer = document.getElementById("reviewsContainer");
    reviewsContainer.innerHTML = "";
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.forEach(review => {
        if (review.product === productName) {
            const reviewElement = document.createElement("div");
            reviewElement.className = "review";
            reviewElement.innerHTML = `<p><strong>${review.product}</strong></p>
                                        <p>${review.review}</p>
                                        <button class="delete-btn" onclick="deleteReview('${productName}', '${review.review}')">Удалить</button>`;
            reviewsContainer.appendChild(reviewElement);
        }
    });
}

function deleteReview(productName, reviewText) {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews = reviews.filter(review => !(review.product === productName && review.review === reviewText));
    localStorage.setItem("reviews", JSON.stringify(reviews));
    displayReviews(productName);
    alert("Отзыв успешно удален!");
}
