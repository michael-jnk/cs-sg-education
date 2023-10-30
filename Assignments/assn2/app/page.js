
export default function Home() { 
  return (
  // <head>
  //     <meta charset="UTF-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  //     <link href="styles.css" rel="stylesheet"/>
  //     <script async src="script.js"/>
  //     <title>Michael's Site</title>
  //     <link rel="preconnect" href="https://fonts.googleapis.com"/>
  //     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  //     <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;600;800&display=swap" rel="stylesheet"/>
  // </head>
  <body>
      <div id="header">
          <a href="#"><h1 id="title">MJ</h1></a>
          <ul id="nav">
              <li><a href="#about-me">About Me</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#footer">Contact Me</a></li>
          </ul>
      </div>
      <div id="main">
          <div id="intro">
              <div>
                  <h2 class="intro-hello"><span>Hello!</span></h2>
                  <div>
                      <h3 class="intro-me">My name is<br /><span class="name">Michael Jenkins</span>.</h3>
                      <p class="intro-desc">
                          I am a first year Computer Science<br />
                          student and Chancellor's Science<br />
                          Scholar at UNC Chapel Hill. 
                      </p>
                  </div>
              </div>
          </div>
          <div id="about-me">
              <h2 class="section-title">About Me</h2>
              <p>
                  Hello there! I am <span class="name">Michael Jenkins</span>, a student at UNC Chapel Hill. I am a
                  Computer Science major, and a member of the Chancellor's Science Scholar's
                  cohort 11. I enjoy programming, reading, going on hikes, and playing video games.
                  I've been interested in computers since a young age, and have dabbled in a few
                  different areas of computer science and engineering; like soldering, 3d printing,
                  game development, and more.
              </p>
              <p>
                  Currently, I'm learning basic web development, both on my own and as a part of
                  UNC's Computer Science + Social Good Education Team. I am learning basic HTML, CSS,
                  and JavaScript, and in the near future I'll be learning React. I also have some
                  personal projects I am working on, to be published sometime in the future!
              </p>
          </div>
          <div id="education">
              <h2 class="section-title">Education</h2>
              <div class="ed-school">
                  <div>
                      <h3>UNC Chapel Hill</h3>
                      <p class="ed-time">2023-2027</p>
                      <ul>
                          <li>Computer Science, B.S.</li>
                          <li>Relevant Courses: <i>Data Structures</i></li>
                          <li>Activities: <i>CS+SG, Game Development Club, Quantum Computing Club,
                              Helping Hands Project
                          </i></li>
                      </ul>
                  </div>
                  <img src="/images/UNC.jpg" alt="UNC photo" /> {/* https://www.unc.edu/wp-content/uploads/2022/04/hero-011921_CampusScenes1753-1200x675.jpg */}
              </div>
              {/* <div class="ed-school">
                  <h3>CMU AI4ALL program</h3>
                  <p class="ed-time">2022</p>
                  <ul>
                      <li>Completed AI4ALL summer program</li>
                  </ul>
              </div> */}
              <div class="ed-school">
                  <img src="/images/AET.jpg" alt="Academies of Engineering and Technology" /> {/*https://www.stantec.com/content/dam/stantec/images/projects/0031/academies-of-loudoun-2.jpg*/}
                  <div>
                      <h3>Academy of Engineering and Technology</h3>
                      <p class="ed-time">2021-2023</p>
                      <ul>
                          <li>Advanced AET Diploma</li>
                          <li>Activities: <i>Computer Science Honor Society</i></li>
                      </ul>
                  </div>
              </div>
              <div class="ed-school">
                  <div>
                      <h3>Freedom High School</h3>
                      <p class="ed-time">2019-2023</p>
                      <ul>
                          <li>Advanced Diploma</li>
                          <li>Activities: <i>Bass Drum Captain, Math Honor Society Tutor</i></li>
                      </ul>
                  </div>
                  <img src="/images/FHS.png" alt="UNC photo"/> {/*https://www.lcps.org/cms/lib/VA01000195/Centricity/Domain/1803/FHS.png*/}
              </div>
          </div>
          <div id="projects">
              <h2 class="section-title">Projects</h2>
                  {/* TODO: add in JS the text for each of the projects, so that 
                  whenever one of the flexitem projects is clicked, the text on
                  the <h3> & <p> tags change to the text of the project */}
              <div class="projects-box">
                  <div id="projects-flex">
                      <div class="projects-item" onclick='projectDisplay("java")'>
                          <h3 id="project-java">Java Games</h3>
                      </div><div class="projects-item" onclick='projectDisplay("gamejam")'>
                          <h3 id="project-gamejam">Game Jam '23</h3>
                      </div><div class="projects-item" onclick='projectDisplay("site")'>
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
          </div>
          <div id="skills">
              <h3 class="section-title">Skills</h3>
              <div id="skills-flexbox">
                  <Skill title="Java" status="Intermediate" image="java-original.svg"/>
                  <Skill title="Python" status="Beginner" image="python-original.svg"/>
                  <Skill title="C#" status="Beginner" image="csharp-original.svg"/>
                  <Skill title="HTML" status="Learning" image="html5-original.svg"/>
                  <Skill title="CSS" status="Learning" image="css3-original.svg"/>
                  <Skill title="Javascript" status="Learning" image="javascript-plain.svg"/>
              </div>
          </div>
      </div>
      <div id="footer">
          <h3>Contact Me!</h3>
          <div>
              <a href="mailto:140859932+michael-jnk@users.noreply.github.com"><img src="/icons/free-mail-icon-142-thumb.png" alt="email icon"/></a> {/*https://www.iconpacks.net/free-icon/mail-142.html*/}
              <a href="https://github.com/michael-jnk"><img src="/icons/github-original.svg" alt="github logo"/></a>
              <a href="https://www.linkedin.com/in/majenkins116/"><img src="/icons/linkedin-original.svg" alt="linkedin logo"/></a>
          </div>
      </div>
  </body>
    );
}

function Skill({title, status, image}) {
  return (
    <div class={"skills-item"}>
      <img src={`/icons/${image}`} alt={title} class={`skills-${status.toLowerCase()}`}/>
      <div class="skills-overlay">
          <p>{title}</p>
          <p>{status}</p>
      </div>
    </div>
  );
}
