"use client";

export default function ProjectDisplay() {
    const projNames = ["default", "java", "gamejam", "site"];
    
    function displayClick(pNumb) {
        console.log("literally anything")
        const projectName = projNames[pNumb];
        console.log(document.getElementById("project-example").children)
        for (let element of document.getElementById("project-example").children) {
            console.log(element)
            console.log(element.className)
            element.style.display = (element.className.includes("project-"+projectName)) ? "block" : "none";
            // console.log(element.className.includes("project-"+projectName))
        }
        let style = window.getComputedStyle(document.body)
        for (let element of document.getElementById("projects-flex").children) {
            element.style.backgroundColor = (element.children.item(0).id === ("project-"+projectName))
            ? style.getPropertyValue("--big-text-color") : style.getPropertyValue("--bg-color");
        }
    }

    return(
        <div class="projects-box">
            <div id="projects-flex">
                <div class="projects-item" onClick={() => displayClick(1)}>
                    <h3 id="project-java">Java Games</h3>
                </div><div class="projects-item" onClick={() => displayClick(2)}>
                    <h3 id="project-gamejam">Game Jam '23</h3>
                </div><div class="projects-item" onClick={() => displayClick(3)}>
                    <h3 id="project-site">This Site</h3>
                </div>
            </div>
            <div id="project-example">
                <div class="project-default">
                    <h3 class="project-name">Click on a project!</h3>
                    <p class="project-desc">...</p>
                </div>
                <div class="project-java">
                <h3 class="project-name">Java Swing Projects</h3>
                <ul class="project-desc">
                    <li>Various games made in Java's Swing and Graphics libraries</li>
                    <li>Applying intermediate Java skills and object-oriented concepts like
                        Inheritance, Polymorphism, and Abstraction</li>
                    <li>Includes a demake of Wii Play's "Tanks", a replication of one of
                        the "Worms" games, and a test 3D-wireframe space game</li>
                </ul>
                </div>
                <div class="project-gamejam">
                <h3 class="project-name">2023 North Carolina Collegiate Game Jam</h3>
                <p class="project-desc">
                    My first game jam, on October 14th - 22nd. This is in-progress,
                    with my 4 teammates and I still hard at work for the rest of the
                    week!
                </p>
                <p class="project-desc">
                    We are currently using Godot and gdscript to create our game.
                </p>
                </div>
                <div class="project-site">
                <h3 class="project-name">This Website!</h3>
                <p class="project-desc">
                    As a member of UNC's CS + Social Good Education Team, this
                    website is a practice project to show my knowledge of HTML & CSS
                    after a few classes and self-study.
                </p>
                </div>
                
            </div>
        </div>
    );
}