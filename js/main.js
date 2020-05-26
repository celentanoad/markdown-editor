const converter = new showdown.Converter();
const textBox = document.getElementById("text-box");
const markdown = document.getElementById("output");
const darkModeButton = document.getElementById("dark-mode-btn");
const body = document.getElementById("wrapper");
let darkMode = "off"

function convertToMarkdown() {
    let text = textBox.value;
    let html = converter.makeHtml(text);
    markdown.innerHTML = html;
}

function toggleDarkMode() {
    if (darkMode === "off") {
        darkModeButton.innerHTML = "Dark Mode: On"
        darkMode = "on"
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        textBox.classList.add("dark-mode-text-box");
        textBox.classList.remove("light-mode-text-box");
        darkModeButton.classList.add("dark-mode");
        darkModeButton.classList.remove("light-mode");
    } else {
        darkModeButton.innerHTML = "Dark Mode: Off";
        darkMode = "off";
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        textBox.classList.add("light-mode-text-box");
        textBox.classList.remove("dark-mode-text-box");
        darkModeButton.classList.add("light-mode");
        darkModeButton.classList.remove("dark-mode");
    }
}

textBox.addEventListener("input", convertToMarkdown);
darkModeButton.addEventListener("click", toggleDarkMode);

convertToMarkdown();
