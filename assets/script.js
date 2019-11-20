"use strict";

// Encapsulating the game data using an IIFE
void function () {

    // ------------------------------ LOAD THE GAME ------------------------------ \\

    // Here's the data of the game
    const gameData = Object.freeze({
        "languages": {
            "markdown": {
                "name": "Markdown",
                "description": "default",
                "basicPrice": 15,
                "lps": 0.1,
                "multipliers": [
                    {
                        "name": "README.md",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "GIFs animés",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    }
                ]
            },
            "html": {
                "name": "HTML",
                "description": "default",
                "basicPrice": 100,
                "lps": 1,
                "multipliers": [
                    {
                        "name": "HTML 5",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "Validateur W3C",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    }
                ]
            },
            "css": {
                "name": "CSS",
                "description": "default",
                "basicPrice": 1024,
                "lps": 8,
                "multipliers": [
                    {
                        "name": "Flexbox Froggy",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "Bootstrap",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "SASS",
                        "description": "Syntactically Awesome Style Sheets",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "Automate 110",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    }
                ]
            },
            "javascript": {
                "name": "JavaScript",
                "description": "default",
                "basicPrice": 12000,
                "lps": 50,
                "multipliers": [
                    {
                        "name": "node.js",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "jQuery",
                        "description": "default",
                        "price": 0,
                        "value": -3
                    },
                    {
                        "name": "React",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "JSFuck",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    }
                ]
            },
            "csharp": {
                "name": "C#",
                "description": "default",
                "basicPrice": 130000,
                "lps": 250,
                "multipliers": [
                    {
                        "name": "Visual Studio",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "ASP.NET",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "LINQ",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    }
                ]
            },
            "rust": {
                "name": "Rust",
                "description": "default",
                "basicPrice": 1400000,
                "lps": 1500,
                "multipliers": [
                    {
                        "name": "Ownership",
                        "description": "Lénine le déteste !!",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "Borrowing",
                        "description": "Rien à voir avec Morrowind",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "Lifetime",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    }
                ]
            },
            "emojicode": {
                "name": "Emojicode",
                "description": "default",
                "basicPrice": 20000000,
                "lps": 8000,
                "multipliers": [
                    {
                        "name": "Perfection",
                        "description": "default",
                        "price": 0,
                        "value": 0
                    }
                ]
            }
        },
        "upgrades": {}
    });
    
    // Load or create a save
    const saveData = localStorage.save ? JSON.parse(localStorage.save) : {
        "score": 0,
        "languages": {
            "markdown": {
                "quantity": 0,
                "multipliers": 0
            },
            "html": {
                "quantity": 0,
                "multipliers": 0
            },
            "css": {
                "quantity": 0,
                "multipliers": 0
            },
            "javascript": {
                "quantity": 0,
                "multipliers": 0
            },
            "csharp": {
                "quantity": 0,
                "multipliers": 0
            },
            "rust": {
                "quantity": 0,
                "multipliers": 0
            },
            "emojicode": {
                "quantity": 0,
                "multipliers": 0
            }
        },
        "upgrades": {}
    };

    // ------------------------------- AUTO SAVE -------------------------------- \\

    // Automatically save the game every two minutes

    const updateLocalStorage = () => localStorage.setItem("save", JSON.stringify(saveData));
    setInterval(updateLocalStorage, 2 * 60 * 1000 /* min × sec × ms */);


    // --------------------------------- COUNTER --------------------------------- \\

    const counter = document.getElementById("counter");
    displayScore();
    
    const logo = document.getElementById("logo");
    // Increment the counter on click
    logo.addEventListener("click", () => {
        saveData.score++;
        displayScore();
        lock();
    });

    logo.addEventListener("mousedown", () => {
        logo.style = "transform:scale(0.9)";
    });
        
    logo.addEventListener("mouseup", () => {
        logo.style = "transform:scale(1)";
    });

    // ------------------------------- MULTIPLIERS ------------------------------ \\


    // ------------------------------ AUTO-CLICKER ------------------------------ \\

    // price = basicPrice * (1.15 ** quantity)
    const calculatePrice = language => (gameData.languages[language].basicPrice * Math.pow(1.15, saveData.languages[language].quantity))|0;
    console.log(calculatePrice("rust"))

    // Here's the div where we'll display the 'auto-clickers'
    const autoClickArea = document.getElementById("auto-clickers");

    // Dynamically create a list of 'auto-clickers' based on the game data
    // NB: AC stands for 'auto-clicker'
    for (const language in gameData.languages) {
        
        // Create the container for the auto-clicker
        const newAC = document.createElement("div");
        newAC.className = "language";
        newAC.id = language;

        // Create a random container for the display necessities
        const container = document.createElement("div");

        // Fetch the logo of the language
        const img = document.createElement("img");
        img.src = `assets/img/${language}.png`;
        
        // Fetch name and price of the language
        const div = document.createElement("div");
        const ACName = document.createElement("p"); 
        ACName.textContent = gameData.languages[language].name;
        const ACPrice = document.createElement("p");
        ACPrice.textContent = calculatePrice(language);
        ACPrice.className = "price";
        div.appendChild(ACName);
        div.appendChild(ACPrice);

        container.appendChild(img);
        container.appendChild(div);
        newAC.appendChild(container);

        // Fetch the quantity
        const ACQuantity = document.createElement("p");
        ACQuantity.className = "quantity";
        ACQuantity.textContent = saveData.languages[language].quantity;
        newAC.appendChild(ACQuantity)

        newAC.addEventListener("click", () => {
            const key = language;
            const autoclicker = newAC;
            if (!autoclicker.className.includes("locked")) {
                const price = calculatePrice(key);
                saveData.languages[key].quantity++;
                saveData.score -= price;
                displayScore();
                autoclicker.querySelector(".quantity").textContent = saveData.languages[key].quantity;
                autoclicker.querySelector(".price").textContent = calculatePrice(key);
                lock();
            }
        });

        // Add our new auto-clicker to the div :=)
        autoClickArea.appendChild(newAC);
    }

    let lps = 0;

    function updateLps() {
        let newLps = 0;
        for (const language in saveData.languages) {
            newLps += gameData.languages[language].lps * saveData.languages[language].quantity;
        }
        lps = newLps;
    }
    updateLps();

    function updateData() {
        updateLps();
        saveData.score += lps;
        displayScore();
    }

    function displayScore() {
        counter.textContent = saveData.score|0;
        lock();
    }

    setInterval(updateData, 1000);

    // -------------------------------- BONUS -------------------------------- \\

    // ----- Lock of buttons if conditions no matched -----

    function lock() {
        [...document.querySelectorAll(".language")].forEach(element => {
            // Check that 
            if (calculatePrice(element.id) > saveData.score) {
                element.className = "language locked";
            } else element.className = "language";
        });
    }

    lock();

}();

