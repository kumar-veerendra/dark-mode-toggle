# 🌙 Dark Mode Toggle with LocalStorage

A lightweight, responsive dark mode toggle built using HTML, CSS, and JavaScript. The selected theme is saved using `localStorage` and persists even after a page refresh.

🔗 **Live Demo**: [https://dark-mode-toggle-veerendra.netlify.app](https://dark-mode-toggle-veerendra.netlify.app)

## 🖼️ Screenshot

![Dark Mode Toggle Screenshot](./screenshot.png)

> 📸 Save a screenshot of your live site and name it `screenshot.png` in your project root.

## 💡 Features

- Simple and clean UI toggle  
- Persists mode with LocalStorage  
- Responsive and lightweight  
- No external libraries required  

## 🚀 Tech Stack

- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- LocalStorage API  

## 📁 Project Structure

```
dark-mode-toggle/
├── index.html
├── style.css
├── script.js
└── screenshot.png
```

## 🧠 How It Works

- A checkbox input acts as the toggle.  
- On change, a `dark-mode` class is added to `<body>`.  
- The selected mode (`dark` or `light`) is stored in `localStorage`.  
- When the page loads, JavaScript checks `localStorage` and sets the correct theme.

## 👨‍💻 Author

Made with ❤️ by **Veerendra Kumar**  
🔗 [My Portfolio](https://veerendrakumar-portfolio.netlify.app)

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
