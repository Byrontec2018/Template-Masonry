function loadPictures() {
    const container = document.getElementById("container");

    for (let index = 1; index <= 21; index++) {
        const picture = document.createElement("img");
        picture.src = "img/" + index + ".jpg";
        container.appendChild(picture);                
    }
}
