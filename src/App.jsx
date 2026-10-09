
function App() {
  const projects = [
    {
      title: "Calculator",
      description:
        "A simple calculator application designed to perform basic mathematical operations with an easy-to-use interface.",
      technology: "HTML · CSS · JavaScript",
      number: "01",
      link: "https://reginecalculator-ou0oyuvoj-dcit-31.vercel.app/",
    },
    {
      title: "To-Do List",
      description:
        "A task management application that helps users organize daily activities, track tasks, and stay productive.",
      technology: "React · JavaScript · CSS",
      number: "02",
      link: "https://reginetodo-list.vercel.app/",
    },
  ];

  const resume = `REGINE CARLA SUMAGAYSAY
Information Technology Student

PROFILE
An Information Technology student at Cavite State University - Tanza Campus, interested in web development, programming, and database management.

EDUCATION
Bachelor of Science in Information Technology
Cavite State University - Tanza Campus

TECHNICAL SKILLS
Canva Editing, Java, CSS, Encoding

PROJECTS
Calculator - A basic application for mathematical operations.
To-Do List - An application for organizing and tracking daily tasks.

CAREER OBJECTIVE
To improve my skills for the future career involving advancement of technology, and to be able to learn more about technology in the future.

CONTACT
Email: sumagaysayreginecarla21@gmail.com
Location: Phase 1 Carissa Bagtas,Tanza, Cavite, Philippines
`;

  function downloadResume() {
    const file = new Blob([resume], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(file);
    const link = document.createElement("a");

    link.href = url;
    link.download = "Regine Sumagaysay_Resume.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-[#faf6f6] text-[#30252a]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#ead5dc] bg-white shadow-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-2xl font-extrabold text-[#b76e79]"
          >
            MyPortfolio
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-[#b76e79]">Home</a>
            <a href="#about" className="hover:text-[#b76e79]">About</a>
            <a href="#projects" className="hover:text-[#b76e79]">Projects</a>
            <a href="#resume" className="hover:text-[#b76e79]">Resume</a>
            <a href="#skills" className="hover:text-[#b76e79]">Skills</a>
            <a href="#contact" className="hover:text-[#b76e79]">Contact</a>
          </div>
        </nav>
      </header>

      {/* Home */}
      <section
        id="home"
        className="flex min-h-[85vh] scroll-mt-20 items-center justify-center px-6 text-center"
      >
        <div className="max-w-5xl">
          <p className="mb-5 font-semibold uppercase tracking-widest text-[#b76e79]">
            Welcome to My Portfolio
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Hi, I'm{" "}
            <span className="text-[#b76e79]">Regine Sumagaysay</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#75666d] md:text-lg">
            I am an Information Technology student passionate about
            editing and things related to computer.
            Welcome to my personal portfolio!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-[#b76e79] px-6 py-4 font-bold text-white hover:bg-[#9f5966]"
            >
              View Projects
            </a>

            <a
              href="#resume"
              className="rounded-lg border border-[#b76e79] px-6 py-4 font-bold text-[#a75e6b] hover:bg-[#b76e79] hover:text-white"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-20 bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-widest text-[#b76e79]">
            Get to know me
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            About Me
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#75666d]">
            I am an Information Technology student at Cavite State
            University - Tanza Campus. Our program is hard to begin with,
            but still I have learned so many things in editing and programming language
            which I can apply for my career in the future.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-20 px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-center font-semibold uppercase tracking-widest text-[#b76e79]">
            My work
          </p>

          <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
            My Projects
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="rounded-2xl border border-[#ead5dc] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f3e1e5] text-xl font-extrabold text-[#a75e6b]">
                  {project.number}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-[#75666d]">
                  {project.description}
                </p>

                <p className="mt-6 border-t border-[#ead5dc] pt-4 text-sm font-semibold text-[#a75e6b]">
                  {project.technology}
                </p>

                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-lg bg-[#b76e79] px-6 py-3 font-bold text-white hover:bg-[#9f5966]"
                >
                  View Project ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resume */}
      <section
        id="resume"
        className="scroll-mt-20 bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-semibold uppercase tracking-widest text-[#b76e79]">
            My background
          </p>

          <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
            My Resume
          </h2>

          <div className="mt-10 rounded-2xl border border-[#ead5dc] bg-[#faf6f6] p-8 md:p-10">
            <h3 className="text-2xl font-extrabold text-[#b76e79]">
              Regine Sumagaysay
            </h3>

            <p className="mt-2 text-[#75666d]">
              Bachelor of Science in Information Technology
            </p>

            <hr className="my-6 border-[#ead5dc]" />

            <h4 className="font-bold">Education</h4>
            <p className="mt-2 leading-7 text-[#75666d]">
              Cavite State University - Tanza Campus
              <br />
              Bachelor of Science in Information Technology
            </p>

            <h4 className="mt-6 font-bold">Technical Skills</h4>
            <p className="mt-2 leading-7 text-[#75666d]">
              HTML, CSS, JavaScript, React, Python, and MySQL
            </p>

            <h4 className="mt-6 font-bold">Projects</h4>
            <ul className="mt-2 list-inside list-disc space-y-2 text-[#75666d]">
              <li>Calculator Application</li>
              <li>To-Do List Application</li>
            </ul>

            <h4 className="mt-6 font-bold">Career Objective</h4>
            <p className="mt-2 leading-7 text-[#75666d]">
              To develop my technical knowledge, gain practical
              experience, and contribute to useful software projects
              as I pursue a career in Information Technology.
            </p>

            <button
              onClick={downloadResume}
              className="mt-8 rounded-lg bg-[#b76e79] px-6 py-3 font-bold text-white hover:bg-[#9f5966]"
            >
              Download Resume ↓
            </button>

            <p className="mt-3 text-xs text-[#75666d]">
              Downloads an editable plain-text resume. Update the
              details before submitting it for an application.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-20 px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            My Skills
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["HTML", "CSS", "JavaScript", "React", "Python", "MySQL"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-[#ead5dc] bg-white px-6 py-4 font-semibold shadow-sm"
                >
                  <span className="mr-2 text-[#b76e79]">✦</span>
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-20 bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-widest text-[#b76e79]">
            Let's connect
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Contact Me
          </h2>

          <p className="mt-5 leading-7 text-[#75666d]">
            Feel free to contact me about projects, collaborations,
            or learning opportunities.
          </p>

          <a
            href="mailto:sumagaysayreginecarla21@gmail.com"
            className="mt-7 inline-block rounded-lg bg-[#b76e79] px-7 py-4 font-bold text-white hover:bg-[#9f5966]"
          >
            Send Me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ead5dc] bg-white px-6 py-6 text-center text-sm text-[#75666d]">
        © 2026 Regine Sumagaysay. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;