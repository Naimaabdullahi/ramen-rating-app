// ramen-rating-app/index.js

document.addEventListener("DOMContentLoaded", main);

document.getElementById("ramen-rater-heading").style.textAlign = "left";

const ramens = [
   { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 5, comment: "Delicious!" },
   { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 4, comment: "Very flavorful!" },
   { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://moringa.instructure.com/courses/967/files/517799/preview", rating: 3, comment: "Rich broth!" },
   { id: 4, name: "Shio Ramen", restaurant: "Ippudo", image: "https://moringa.instructure.com/courses/967/files/517798/preview", rating: 5, comment: "Light and tasty!" },
   { id: 5, name: "Spicy Ramen", restaurant: "Tatsunoya", image: "https://moringa.instructure.com/courses/967/files/517797/preview", rating: 4, comment: "Great spice level!" }
];

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = "";
    ramenMenu.style.display = "grid";
    ramenMenu.style.gridTemplateColumns = "repeat(3, 1fr)";
    ramenMenu.style.gap = "5px";

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.style.width = "80px";
        img.style.cursor = "pointer";
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    const detailContainer = document.getElementById("ramen-detail");
    const detailImage = document.getElementById("ramen-detail-image");
    const detailName = document.getElementById("ramen-detail-name");
    const detailRestaurant = document.getElementById("ramen-detail-restaurant");
    const detailRating = document.getElementById("ramen-rating");
    const detailComment = document.getElementById("ramen-comment");
    
    detailImage.src = "";
    detailName.textContent = "";
    detailRestaurant.textContent = "";
    detailRating.textContent = "";
    detailComment.textContent = "";
}

function addSubmitListener() {
    const form = document.getElementById("new-ramen");
    form.style.display = "block";
    form.style.textAlign = "right";
    
    form.addEventListener("click", (event) => {
        event.preventDefault();
        const newRamen = {
            id: ramens.length + 1,
            name: event.target.name.value,
            restaurant: event.target.restaurant.value,
            image: event.target.image.value,
            rating: event.target.rating.value,
            comment: event.target.comment.value
        };
        ramens.push(newRamen);
        displayRamens();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}
