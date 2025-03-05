document.addEventListener("DOMContentLoaded", function () {
    loadGallery();
});

function loadGallery() {
    let galleryContainer = document.getElementById("gallery-container");
    let storedImages = JSON.parse(localStorage.getItem("galleryImages")) || [];

    galleryContainer.innerHTML = "";
    storedImages.forEach((src, index) => {
        let img = document.createElement("img");
        img.src = src;
        img.alt = `Gallery Image ${index + 1}`;
        galleryContainer.appendChild(img);
    });
}

function uploadImage() {
    let fileInput = document.getElementById("uploadImage");
    let file = fileInput.files[0];

    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let storedImages = JSON.parse(localStorage.getItem("galleryImages")) || [];
            storedImages.push(e.target.result);
            localStorage.setItem("galleryImages", JSON.stringify(storedImages));
            loadGallery();
        };
        reader.readAsDataURL(file);
    } else {
        alert("Pilih gambar terlebih dahulu.");
    }
}
