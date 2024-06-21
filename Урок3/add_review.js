function addReview() {
    const productName = document.getElementById("productName").value.trim();
    const reviewText = document.getElementById("reviewText").value.trim();
    if (!productName || !reviewText) {
        alert("Пожалуйста, введите название продукта и отзыв.");
        return;
    }

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    
    reviews.push({ product: productName, review: reviewText });
    localStorage.setItem("reviews", JSON.stringify(reviews));
    alert("Отзыв успешно добавлен!");
    document.getElementById("productName").value = "";
    document.getElementById("reviewText").value = "";
}
