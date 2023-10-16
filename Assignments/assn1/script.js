// just adding project clicking & changing description

function projectDisplay(projectName) {
    // console.log("project-"+projectName)
    // console.log(document.getElementById("project-example"))
    for (element of document.getElementById("project-example").children) {
        // console.log(element)
        // console.log(element.className)
        element.style.display = (element.className.includes("project-"+projectName)) ? "block" : "none";
        // console.log(element.className.includes("project-"+projectName))
    }
}