// Function to create menu cards dynamically
function createCards(dataArray, containerId) {
    const container = document.getElementById(containerId);
    const template = document.getElementById("card-template");

    // Clear previous cards
    container.innerHTML = "";

    // Loop through each item in dataArray to create a card
    dataArray.forEach((data, index) => {
        const card = template.cloneNode(true);
        card.removeAttribute("id")

        //Set image, dish name and price
        card.querySelector("img").src = "assets/products/" + data.imagePath;
        card.querySelector("h5").textContent = data.name;
        card.querySelector("h6").textContent = `${data.price} Ft`;

        // Make card visible
        card.style.display = "block";

        // Append card to container
        container.appendChild(card);
    });
}

// Initialize cards when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    createCards(sessionalOffers, "sessional-offers-container");
    createCards(appetizers, "appetizers-container");
    createCards(poultryDishes, "poultry-dishes-container");
    createCards(porkDishes, "pork-dishes-container");
    createCards(beefDishes, "beef-dishes-container");
    createCards(desserts, "desserts-container");
});

// Arrays of menu items

// Seasonal offers
const sessionalOffers = [
    {
        imagePath: "teli-minestrone.jpg",
        name: "Téli minestrone",
        price: 1990
    },
    {
        imagePath: "sutotokos-rizotto-roze-kacsamellel.jpg",
        name: "Sütőtökös rizottó rozé kacsamellel",
        price: 4890
    },
    {
        imagePath: "sutotokos-pite.jpg",
        name: "Sütőtökös pite",
        price: 1500
    },
    {
        imagePath: "fahejas-csiga.jpg",
        name: "Fahéjas csiga",
        price: 1200
    }
];

// Appetizers
const appetizers = [
    {
        imagePath: "laksa-leves.jpg",
        name: "Maláj laksa leves",
        price: 2800
    },
    {
        imagePath: "aszaltszilva-leves.jpg",
        name: "Rumos aszaltszilva-krémleves",
        price: 2100
    },
    {
        imagePath: "teli-minestrone.jpg",
        name: "Téli minestrone",
        price: 1990
    },
    {
        imagePath: "ricottakremes-koktelparadicsomos-bruschetta.jpg",
        name: "Ricottakrémes-koktélparadicsomos bruschetta",
        price: 1950
    }
];

// Poultry dishes
const poultryDishes = [
    {
        imagePath: "csirkes-fajitas.jpg",
        name: "Csirkés fajitas",
        price: 4500
    },
    {
        imagePath: "grillezett-csirkeszarny-barackos-coleslaw-val.jpg",
        name: "Csirkeszárnyak barackos káposztasalátával",
        price: 4250
    },
    {
        imagePath: "pesztos-csirkes-fussili.jpg",
        name: "Pesztós-csirkés fusilli",
        price: 3250
    },
    {
        imagePath: "csirkes-tesztasalata.jpg",
        name: "Csirkés tésztasaláta",
        price: 3500
    },
    {
        imagePath: "sutotokos-rizotto-roze-kacsamellel.jpg",
        name: "Sütőtökös rizottó rozé kacsamellel",
        price: 4890
    },
    {
        imagePath: "spenotos-pulykatekercs-tokmagos-nudlival.jpg",
        name: "Spenótos pulykatekercs tökmagos nudlival",
        price: 4350
    }
];

// Pork dishes
const porkDishes = [
    {
        imagePath: "pulled-pork-tortilla.jpg",
        name: "Pulled pork tortilla",
        price: 4200
    },
    {
        imagePath: "mediterran-lecso-sertesszuzzel.jpg",
        name: "Mediterrán lecsó sertésszűzzel",
        price: 4550
    },
    {
        imagePath: "bbq-oldalas-steakburgonyaval-es-coleslaw-val.jpg",
        name: "BBQ oldalas steakburgonyával coleslaw-val",
        price: 4720
    },
    {
        imagePath: "sertesporkolt-krumpligomboccal.jpg",
        name: "Sertéspörkölt krumpligombóccal",
        price: 4100
    },
    {
        imagePath: "aszaltszilvaval-toltott-sertesszuz.jpg",
        name: "Aszaltszilvával töltött sertésszűz",
        price: 4390
    },
    {
        imagePath: "sorben-pacolt-tarja-salataval.jpg",
        name: "Sörben pácolt tarja salátával",
        price: 3890
    }
];

// Beef dishes
const beefDishes = [
    {
        imagePath: "burrito-hazi-pico-de-gallo-salsaval.jpg",
        name: "Burrito házi pico de gallo-val",
        price: 5150
    },
    {
        imagePath: "napolyi-marha-sult-hagymaval.jpg",
        name: "Nápolyi marha sült hagymával szalmakrumplival",
        price: 5690
    },
    {
        imagePath: "burgundi-marharagu.jpg",
        name: "Burgundi marharagu",
        price: 5720
    },
    {
        imagePath: "rostelyos-whiskey-s-fuszervajjal-hazi-ketchuppal.jpg",
        name: "Rostélyos whiskey-s fűszervajjal",
        price: 6990
    },
    {
        imagePath: "feherpecsenye-hazi-pesztoval.jpg",
        name: "Fehérpecsenye házi pesztóval",
        price: 6990
    }
];

// Desserts
const desserts = [
    {
        imagePath: "soskaramellas-panna-cotta.jpg",
        name: "Sóskaramellás panna cotta",
        price: 1800
    },
    {
        imagePath: "fehercsokis-profiterol.jpg",
        name: "Fehércsokis profiterol",
        price: 1720
    },
    {
        imagePath: "lavasuti.jpg",
        name: "Lávasüti",
        price: 1810
    },
    {
        imagePath: "matcha-lime-curd-tart.jpg",
        name: "Matcha lime curd tart",
        price: 1720
    },
    {
        imagePath: "sutotokos-pite.jpg",
        name: "Sütőtökös pite",
        price: 1500
    },
    {
        imagePath: "fahejas-csiga.jpg",
        name: "Fahéjas csiga",
        price: 1200
    }
];
