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
    // Fetch the counter value in the save data
    counter.textContent = saveData.score;

    // Increment the counter on click
    document.getElementById("logo").addEventListener("click", () => {
        saveData.score++;
        counter.textContent = saveData.score;
    });

    // ------------------------------- MULTIPLIERS ------------------------------ \\


    // ------------------------------ AUTO-CLICKER ------------------------------ \\

    // price = basicPrice * (1.15 ** quantity)
    const calculatePrice = language => gameData.languages[language].basicPrice * Math.pow(1.15, saveData.languages[language].quantity);
    console.log(calculatePrice("rust"))

    // Here's the div where we'll display the 'auto-clickers'
    const autoClickArea = document.getElementById("auto-click");

    // Dynamically create a list of 'auto-clickers' based on the game data
    for (const language in gameData.languages) {
        
        // Create the button to buy new auto-clickers
        const button = document.createElement("div");
        button.className = "language";
        const img = document.createElement("img");
        img.setAttribute("src", `assets/img/${language}.png`);
        button.appendChild(img);
        const div = document.createElement("div");
        const ACName = document.createElement("p"); // AC stands for 'auto-clicker'
        ACName.textContent = gameData.languages[language].name;
        const ACPrice = document.createElement("p");
        ACPrice.textContent = calculatePrice(language);
        div.appendChild(ACName);
        div.appendChild(ACPrice);
        button.appendChild(div);
        const ACQuantity = document.createElement("p");
        ACQuantity.className = "quantity";
        ACQuantity.textContent = saveData.languages[language].quantity;
        button.appendChild(ACQuantity)
        button.addEventListener("click", () => {
            console.log(button);
        });

        // Add our new auto-clicker to the div :=)
        autoClickArea.appendChild(button);
    }

    // -------------------------------- BONUS -------------------------------- \\

    // ----- Lock of buttons if conditions no matched -----
}();