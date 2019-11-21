"use strict";
// localStorage.clear(); // dé-commenter pour reset

// Display incredible message in the console
console.log("%c STOP TRICHER HELP (╯°□°）╯︵ ┻━┻", `color: red; background-color:black; font-size: 30px; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;`);

// Encapsulating the game data using an IIFE
void function () {

    // ------------------------------ LOAD THE GAME ------------------------------ \\

    // Here's the data of the game
    const gameData = Object.freeze({
        "languages": {
            "markdown": {
                "name": "Markdown",
                "description": "C’est comme le poker : 15 minutes pour le comprendre, toute une vie pour le maîtriser",
                "basicPrice": 15,
                "lps": 0.1,
                "multipliers": [
                    {
                        "name": "README.md",
                        "description": "Même si tu ne comprends pas trop ce que fais ton code, faut l'expliquer aux autres",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "GIFs animés",
                        "description": "les readme c'est comme les livres: ca parrait moins long quand il y a des image",
                        "price": 0,
                        "value": 0
                    }
                ]
            },
            "html": {
                "name": "HTML",
                "description": "De quoi baliser le terrain",
                "basicPrice": 100,
                "lps": 1,
                "multipliers": [
                    {
                        "name": "HTML 5",
                        "description": "pas de br !",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "Validateur W3C",
                        "description": "Les roses sont rouge, le ciel est bleu, ton site n'a qu'un score de 22",
                        "price": 0,
                        "value": 0
                    }
                ]
            },
            "css": {
                "name": "CSS",
                "description": "Le CSS c'est comme les bugs, c'est quand il y en a pas que c’est louche",
                "basicPrice": 1024,
                "lps": 8,
                "multipliers": [
                    {
                        "name": "Flexbox Froggy",
                        "description": "dés que tu le maitrise, le front c'est dans la boite",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "Bootstrap",
                        "description": "pour faire des sites originaux ... quoi que ...",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "SASS",
                        "description": "c'est du css mais sass-imbrique, c'est géniale !",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "Automate 110",
                        "description": "contrairement à la soupe, ca ne se mange pas",
                        "price": 0,
                        "value": 0
                    }
                ]
            },
            "javascript": {
                "name": "JavaScript",
                "description": `"11" + 1 = "111" mais "11" - 1 = 10`,
                "basicPrice": 12000,
                "lps": 50,
                "multipliers": [
                    {
                        "name": "node.js",
                        "description": "ne t'inquiette pas, il faut juste télécharger deux-trois fichiers ...",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "jQuery",
                        "description": "comme disent les greyjoy: ce qui est mort ne saurait mourir",
                        "price": 0,
                        "value": -3
                    },
                    {
                        "name": "React",
                        "description": "pour faire des interfaces React-ives",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "JSFuck",
                        "description": "(![]+[])[!+[]+!+[]] (({})+({}))[+!+[]] (![]+[])[!+[]+!+[]]",
                        "price": 0,
                        "value": 0
                    }
                ]
            },
            "csharp": {
                "name": "C#",
                "description": "The C#-est tool in the shed",
                "basicPrice": 130000,
                "lps": 250,
                "multipliers": [
                    {
                        "name": "Visual Studio",
                        "description": "cet ide atom-ise la concurrence",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "ASP.NET",
                        "description": "la preuve que microsoft sait faire des choses bien",
                        "price": 0,
                        "value": 0
                    },
                    {
                        "name": "LINQ",
                        "description": "aucun rapport avec Linked-in ou tout autre zelda",
                        "price": 0,
                        "value": 0
                    }
                ]
            },
            "rust": {
                "name": "Rust",
                "description": "J'espère que vous êtes vacciné contre le tétanos",
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
                        "description": "À peu près le temps qu’il faut pour commencer à comprendre ce que tu fais avec",
                        "price": 0,
                        "value": 0
                    }
                ]
            },
            "emojicode": {
                "name": "Emojicode",
                "description": "😂😂👌🔥",
                "basicPrice": 20000000,
                "lps": 8000,
                "multipliers": [
                    {
                        "name": "Perfection",
                        "description": "Le langage des dieux",
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
                "currentPrice": gameData.languages.markdown.basicPrice,
                "multipliers": 0
            },
            "html": {
                "quantity": 0,
                "currentPrice": gameData.languages.html.basicPrice,
                "multipliers": 0
            },
            "css": {
                "quantity": 0,
                "currentPrice": gameData.languages.css.basicPrice,
                "multipliers": 0
            },
            "javascript": {
                "quantity": 0,
                "currentPrice": gameData.languages.javascript.basicPrice,
                "multipliers": 0
            },
            "csharp": {
                "quantity": 0,
                "currentPrice": gameData.languages.csharp.basicPrice,
                "multipliers": 0
            },
            "rust": {
                "quantity": 0,
                "currentPrice": gameData.languages.rust.basicPrice,
                "multipliers": 0
            },
            "emojicode": {
                "quantity": 0,
                "currentPrice": gameData.languages.emojicode.basicPrice,
                "multipliers": 0
            }
        },
        "upgrades": {}
    };

    const lpsCounter = document.getElementById("lps");
    let lps = 0;

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
        checkLock();
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
    const updatePrice = language => saveData.languages[language].currentPrice = (gameData.languages[language].basicPrice * Math.pow(1.15, saveData.languages[language].quantity))|0;

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
        ACPrice.textContent = saveData.languages[language].currentPrice;
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
                const price = saveData.languages[key].currentPrice;
                saveData.languages[key].quantity++;
                updatePrice(key);
                saveData.score -= price;
                updateLps();
                displayScore();
                autoclicker.querySelector(".quantity").textContent = saveData.languages[key].quantity;
                autoclicker.querySelector(".price").textContent = saveData.languages[key].currentPrice;
                checkLock();
            }
        });

        // Add our new auto-clicker to the div :=)
        autoClickArea.appendChild(newAC);
    }

    function updateLps() {
        let newLps = 0;
        for (const language in saveData.languages) {
            newLps += gameData.languages[language].lps * saveData.languages[language].quantity;
        }
        lps = newLps;
    }

    function updateData() {
        updateLps();
        saveData.score += lps/10;
        displayScore();
    }
    updateData();

    function displayScore() {
        counter.textContent = saveData.score.toFixed(2);
        lpsCounter.textContent = lps.toFixed(2).replace(/\.?0+$/, "");
        checkLock();
    }

    setInterval(updateData, 100);

    // -------------------------------- BONUS -------------------------------- \\

    // ----- Lock of buttons if conditions no matched -----

    function checkLock() {
        document.querySelectorAll(".language").forEach(element => {
            if (saveData.languages[element.id].currentPrice > saveData.score) element.className = "language locked";
            else element.className = "language";
        });
    }

    checkLock();

}();

