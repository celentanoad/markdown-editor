const converter = new showdown.Converter();
const textBox = document.getElementById("text-box");
const markdown = document.getElementById("output");
const submitButton = document.getElementById("submit");

function convertToMarkdown() {
    let text = textBox.value;
    let html = converter.makeHtml(text);
    markdown.innerHTML = html;
}

textBox.addEventListener("input", convertToMarkdown);

convertToMarkdown();