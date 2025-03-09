const STYLES = ["color", "backgroundColor", "fontSize", "fontWeight"];

/**
 * Called whenever the "Update Styling!" button is pressed.
 * Should prompt the user which style of STYLES they wish to update,
 * then ask for a new value and apply it.
 */
function changeStyling() {
    let htmlElement = document.getElementById("my-text");
    let selectedStyle = prompt(`Which of the following styles would you like to change? ${STYLES.join(", ")}`)
    if (STYLES.includes(selectedStyle)) {
        let htmlStyle = htmlElement.style;
        let newValue = prompt("What would you like to change it to?")
        if (newValue) {
            htmlStyle[selectedStyle] = newValue;
            alert("Updated styling!");
        } else {
            alert("Operation cancelled!");
        }
    } else {
        alert("You cannot change that style!");
    }
}
