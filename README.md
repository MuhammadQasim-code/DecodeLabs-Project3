# Portfolio Website — Project 3
DecodeLabs Industrial Training | Batch 2026 | Frontend Development

 Overview

A personal portfolio website built with pure HTML, CSS, and JavaScript as part of the DecodeLabs Frontend Development internship. This project demonstrates DOM manipulation, event handling, and dynamic UI updates without any frameworks or libraries.


## Features

- **Dark / Light Mode Toggle** — theme switch with `localStorage` persistence so preference survives page reloads
- **Accordion Info Panels** — About, Education, and Contact sections reveal content on button click via `classList.toggle()`
- **Smooth Scroll Navigation** — hero buttons and navbar links scroll to their target sections
- **Responsive Design** — layout adapts across desktop and mobile breakpoints
- **Glassmorphism UI** — frosted glass cards using `backdrop-filter` and `rgba` backgrounds

---

## Tech Stack

| Technology | Usage |
| HTML5 | Semantic page structure |
| CSS3 | Layout, animations, dark mode, responsive design |
| JavaScript (ES6+) | DOM manipulation, event listeners, localStorage |

---

## Project Structure

```
DecodeLabs-Project-3/
├── index.html
├── style.css
├── app.js
└── assets/
    └── Picture.jpeg
```

## JavaScript Concepts Demonstrated

- `querySelector` / `querySelectorAll` for DOM selection
- `addEventListener` for click and change events
- `classList.toggle()` for dynamic class management
- `localStorage.getItem` / `setItem` for state persistence
- `scrollIntoView` for smooth navigation
- CSS transition driven by JS class toggling (decoupled logic)

---

## Live Interactions

| Interaction | Behaviour |
| Theme toggle (navbar) | Switches dark/light mode, saves to localStorage |
| About Me button (card) | Reveals bio text with slide-down animation |
| Education button (card) | Reveals education details with slide-down animation |
| Contact button (card) | Reveals contact links with slide-down animation |
| About Me button (hero) | Smooth scrolls to About section |
| View Projects button (hero) | Smooth scrolls to Projects section |

---

## Author

**Muhammad Qasim**
BS Software Engineering — Sir Syed University of Engineering and Technology
Frontend Development Intern — DecodeLabs

- GitHub: [MuhammadQasim-code](https://github.com/MuhammadQasim-code)
- LinkedIn: [muhammad-qasim-2939a5332](https://linkedin.com/in/muhammad-qasim-2939a5332)
- Email: shaikhqasim166@gmail.com

---

*Built as part of DecodeLabs Project 3 — Interactive Web Elements milestone.*
