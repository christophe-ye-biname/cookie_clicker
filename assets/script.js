"use strict";

// Encapsulating the game data using an IIFE
void function () {

    // ------------------------------ LOAD THE GAME ------------------------------ \\

    // Here's the data of the game
    const gameData = Object.freeze({
        "languages": {
            "markdown": {
                "name": "Markdown",
                "description": "c'est comme le poker: 15 minutes pour le comprendre, toute une vie pour le maitiser",
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
                "description": "de quoi baliser le terrain",
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
                "description": "le css c'est comme les bugs, c'est quand il y en a pas que c'est louche",
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
                "description": "'11' + 1 = '111' mais '11'-1 = '10'",
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
                        "description": "comme disent les greyjoy: ce qui est mort ne saurait mourrir",
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
                "description": "étonnement, on n'unity lise pas ce langage uniquement pour le gamedev",
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
                "description": "rust c'est le must",
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
                        "description": "à peut près le temps qu'il faut pour commencer à comprendre ce que tu fais avec",
                        "price": 0,
                        "value": 0
                    }
                ]
            },
            "emoji": {
                "name": "Emojicode",
                "description": "Qui n'a jamais rêvé d'initialiser une variable avec :lapin::panda::raisin: ?",
                "basicPrice": 20000000,
                "lps": 8000,
                "multipliers": [
                    {
                        "name": "Perfection",
                        "description": "le langage des dieux",
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

    // Here's the div where we'll display the 'auto-clickers'
    const autoClickArea = document.getElementById("auto-click");

    // Dynamically create a list of 'auto-clickers' based on the game data
    for (const language in gameData.languages) {
        
        // Create the button
        const button = document.createElement("button");
        button.setAttribute("id", language);
        button.textContent = gameData.languages[language].name;
        button.addEventListener("click", () => {
            console.log(button);
        });

        // Add our new auto-clicker to the div :=)
        autoClickArea.appendChild(button);
    }

    // -------------------------------- BONUS -------------------------------- \\

    // ----- Lock of buttons if conditions no matched -----
}();