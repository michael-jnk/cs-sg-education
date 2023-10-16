// just adding project clicking & changing description
// ...and changing some colors too

let style = getComputedStyle(document.body)

function projectDisplay(projectName) {
    // console.log("project-"+projectName)
    // console.log(document.getElementById("project-example"))
    for (element of document.getElementById("project-example").children) {
        // console.log(element)
        // console.log(element.className)
        element.style.display = (element.className.includes("project-"+projectName)) ? "block" : "none";
        // console.log(element.className.includes("project-"+projectName))
    }

    for (element of document.getElementById("projects-flex").children) {
        element.style.backgroundColor = (element.children.item(0).id === ("project-"+projectName))
        ? style.getPropertyValue("--big-text-color") : style.getPropertyValue("--bg-color");
    }
}