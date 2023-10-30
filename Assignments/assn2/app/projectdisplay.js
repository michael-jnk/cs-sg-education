"use client";

export default function ProjectDisplay() {
    
    function displayClick(projectName) {
        console.log("literally anything")
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
                <div class="projects-item" onClick={() => displayClick("java")}>
                    <h3 id="project-java">Java Games</h3>
                </div><div class="projects-item" onClick={() => displayClick("gamejam")}>
                    <h3 id="project-gamejam">Game Jam '23</h3>
                </div><div class="projects-item" onClick={() => displayClick("hacknc")}>
                    <h3 id="project-hacknc">HackNC '23</h3>
                </div><div class="projects-item" onClick={() => displayClick("site")}>
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
                        My first game jam, on October 14th - 22nd. My team of 4 submitted
                        our project, and are awaiting results to be released!
                    </p>
                    <p class="project-desc">
                        We used Godot and gdscript to create our game.
                    </p>
                </div>
                    <div class="project-hacknc">
                    <h3 class="project-name">HackNC 2023</h3>
                    <p class="project-desc">
                        My first hackathon, where my team of 4 made the project "Pocket
                        Garden", and won the "Best Farming Simulator" track!
                    </p>
                    <p class="project-desc">
                        We used Godot and gdscript to create our app.
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