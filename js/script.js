function loadPictures() {
    const container = document.getElementById("container");

    for (let index = 1; index <= 21; index++) {
        const picture = document.createElement("img");
        picture.src = "img/" + index + "-low.jpg";
        container.appendChild(picture);                
    }
}
