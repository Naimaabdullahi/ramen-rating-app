document.addEventListener("DOMContentLoaded", main);

const ramen = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://moringa.instructure.com/courses/967/files/517799/preview", rating: 3, comment: "Rich broth!" },
    { id: 4, name: "Shio Ramen", restaurant: "Ippudo", image: "https://moringa.instructure.com/courses/967/files/517798/preview", rating: 5, comment: "Light and tasty!" },
    { id: 5, name: "Spicy Ramen", restaurant: "Tatsunoya", image: "https://moringa.instructure.com/courses/967/files/517797/preview", rating: 4, comment: "Great spice level!" }
 ];

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; 

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.style.width = "100px";
        img.style.cursor = "pointer";

        img.addEventListener("click", () => showRamenDetails(ramen));

        ramenMenu.appendChild(img);
    });
}

function showRamenDetails(ramen) {
    document.getElementById("ramen-detail-image").src = ramen.image;
    document.getElementById("ramen-detail-name").textContent = ramen.name;
    document.getElementById("ramen-detail-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = `Rating: ${ramen.rating}`;
    document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;
}

function handleNewRamen(event) {
    event.preventDefault(); 

    const newRamen = {
        name: event.target.name.value,
        restaurant: event.target.restaurant.value,
        image: event.target.image.value || "https://via.placeholder.com/100",
        rating: Number(event.target.rating.value),
        comment: event.target}
    }
