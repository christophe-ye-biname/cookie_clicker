"use strict";

// Load or create a save
const saveData = localStorage.save ? JSON.parse(localStorage.save) : {
    "score": 0,
    "languages": {
        "markdown": {
            "quantity": 0,
            "multipliers": []
        },
        "html": {
            "quantity": 0,
            "multipliers": []
        },
        "css": {
            "quantity": 0,
            "multipliers": []
        },
        "javascript": {
            "quantity": 0,
            "multipliers": []
        },
        "csharp": {
            "quantity": 0,
            "multipliers": []
        },
        "rust": {
            "quantity": 0,
            "multipliers": []
        },
        "emojicode": {
            "quantity": 0,
            "multipliers": []
        }
    },
    "upgrades": {}
};

// -------- AUTO SAVE --------

const updateLocalStorage = (name, value) => localStorage.setItem(name, value);
setInterval(updateLocalStorage, 2 * 60 * 1000 /* min × sec × ms */, "save", JSON.stringify(saveData));

// ------- GAME DATA ---------

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
            "basicPrice": 1000,
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
        "emoji": {
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