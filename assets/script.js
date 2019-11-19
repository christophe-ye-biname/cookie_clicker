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

// AUTO SAVE
const updateLocalStorage = () => localStorage.setItem("save", JSON.stringify(saveData));
setInterval(updateLocalStorage, 2 * 60 * 1000 /* min × sec × ms */);

const gameData = Object.freeze({
    "languages": {
        "markdown": {
            "name": "Markdown",
            "description": "default",
            "basicPrice": 0,
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
            "basicPrice": 0,
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
            "basicPrice": 0,
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
            "basicPrice": 0,
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
            "basicPrice": 0,
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
            "basicPrice": 0,
            "multipliers": [
                {
                    "name": "Ownership",
                    "description": "Lénine le déteste !!",
                    "price": 0,
                    "value": 0
                },
                {
                    "name": "Borrowing",
                    "description": "default",
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
            "basicPrice": 0,
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
    "upgrades": {},
});