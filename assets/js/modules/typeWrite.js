export default function typeWrite(text, speed, htmlElement, callback) {
    let counter = 0;

    function writeText() {
        if (counter < text.length) {
            if (htmlElement) {
                htmlElement.textContent += text.charAt(counter);
            }
            counter++;
            setTimeout(writeText, speed);
        }
    }

    writeText();
    setTimeout(() => {
        callback();
    }, text.length * speed);
}