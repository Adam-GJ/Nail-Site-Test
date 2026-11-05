
async function loadGallery() {
    const gallery = document.getElementById("gallerycontent");

    try {
        const response = await fetch("data/gallery.json");

        if (!response.ok) {
            throw new Error("Failed to load gallery JSON");
        }

        const images = await response.json();

        gallery.innerHTML = "";

        console.log(images);
        
        images.forEach(item => {
            // Create gallery item
            console.log(item);
            
            const container = document.createElement("div");
            container.classList.add("gallery-item");

            // Create image
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.title || "";

            // Create title
            const title = document.createElement("h3");
            title.textContent = item.title;

            // Create description
            const description = document.createElement("p");
            description.textContent = item.description || "";

            // Assemble gallery item
            container.appendChild(img);
            container.appendChild(title);
            container.appendChild(description);

            gallery.appendChild(container);
        });

    } catch (error) {
        console.error("Gallery error:", error);
        gallery.textContent = "Unable to load gallery.";
    }
}

// Load gallery when page is ready
document.addEventListener("DOMContentLoaded", loadGallery);
