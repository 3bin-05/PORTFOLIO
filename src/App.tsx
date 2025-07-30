import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  Briefcase,
  Mail,
  Home,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "ETHICAL HACKING",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4s5Hm26rOXbL7qo7p1OLcTMe026AeR4NRnQ&s",
      description:
        "Click Jack is a security demo project I built to showcase how attackers exploit hidden UI elements using iframe overlays, emphasizing the need for proper clickjacking protection.",
      link: "https://medium.com/@ebin05reji/detecting-clickjacking-my-internship-project-feef788ee330", // <--- REPLACE THIS WITH THE ACTUAL LINK
    },
    {
      title: "UX FAULT ANALYSIS",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*TtLk_JHBi9djjedKctw-7Q.jpeg",
      description:
        "I conducted a UX fault case study to analyze design flaws in a real-world application. The study focused on identifying usability issues and proposing user-centered improvements.",
      link: "https://www.figma.com/design/Q0ktgbwA2LrveTp4WiS3Va/UX--fault?node-id=0-1&t=41PNEO4S5mHM8x9U-1", // <--- REPLACE THIS WITH THE ACTUAL LINK
    },
    {
      title: "CERTIFICATIONS",
      image:
        "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2021/08/google_drive_hero_1200_675.png?q=70&fit=contain&w=1200&h=628&dpr=1",
      description:
        "The Certificates obtained by me during my venture for knowledge are given in the following drive link",
      link: "https://drive.google.com/drive/folders/1HUM5zgWz5jslxVi4ibblgBO9V8wSesnh?usp=sharing", // <--- REPLACE THIS WITH THE ACTUAL LINK
    },
    // If you add more projects or certificates, just follow this pattern:
    // {
    //   title: "My Awesome Certificate",
    //   image: "https://link-to-my-certificate-image.jpg",
    //   description: "This certificate shows my skills in X, Y, and Z.",
    //   link: "https://link-to-verify-certificate.com", // Or a direct link to the full image
    // },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-100/50 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end md:justify-center items-center h-16 relative">
            {" "}
            {/* Added 'relative' for mobile button positioning */}
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home", icon: Home },
                { id: "about", label: "About", icon: User },
                { id: "projects", label: "Projects", icon: Briefcase },
                { id: "contact", label: "Contact", icon: Mail },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
            {/* Mobile menu button - positioned absolutely to the right on small screens */}
            <div className="md:hidden absolute right-4">
              {" "}
              {/* Added absolute positioning for mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-100/90 border-b border-gray-100 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {[
                { id: "home", label: "Home", icon: Home },
                { id: "about", label: "About", icon: User },
                { id: "projects", label: "Projects", icon: Briefcase },
                { id: "contact", label: "Contact", icon: Mail },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 relative"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1414633014/vector/dark-blue-abstract-background-geometry-shine-and-layer-element-vector-for-presentation.jpg?s=612x612&w=0&k=20&c=qbicVb5AiuVy4ZiPhBGTjTh2lrIWj0eYYIobq-xUhx0=')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay to re-introduce the light blue gradient on top of the image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 to-blue-50/70"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-8">
              <img
                src="src/pfp.jpg" // Ensure 'src' is the correct relative path from your public directory or adjust import
                alt="Ebin's Profile"
                className="w-44 h-44 rounded-full mx-auto shadow-xl border-4 border-blue-500 object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Hi, I'm <span className="text-blue-600">Ebin Reji</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Acting Proffesional, Ethical Hacker & UI/UX Designer passionate
              about creating beautiful, functional and safe online experiences
              to make the world a better place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
          {/* Moved ChevronDown outside this div for correct absolute positioning relative to the section */}
        </div>

        {/* ChevronDown arrow positioned correctly relative to the section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown className="text-white" size={30} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {" "}
            {/* Main two-column grid */}
            {/* Left Column: Paragraphs */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate UI/UX designer with a strong interest in
                full-stack development. I love creating intuitive and meaningful
                user experiences backed by clean, functional code. My journey
                began with a fascination for how design and technology come
                together to solve real-world problems. I'm always exploring new
                tools and eager to learn new programming languages to expand my
                skill set and bring ideas to life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I’m deeply involved in tech communities like MuLearn, IEEE, and
                TinkerHub, where I actively contribute, collaborate, and grow
                alongside passionate innovators. My interests lie in UI/UX
                design, front-end development, and building user-focused digital
                experiences. I enjoy exploring the intersection of design and
                technology, always staying curious about new trends and tools.
                Whether it’s organizing community events, learning through
                collaboration, or sharing knowledge, I thrive in environments
                that encourage creativity and growth.
              </p>
            </div>
            {/* Right Column: Education and Skills stacked */}
            <div className="space-y-12">
              {" "}
              {/* This div stacks education and skills vertically */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Education
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-slate-700">
                      Btech in Computer Science and Engineering
                    </h4>
                    <p className="text-gray-600">
                      APJ Abdul Kalam Technology University 2023 - on going
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700">
                      Higher Secondary
                    </h4>
                    <p className="text-gray-600">CBSE - 2023</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-slate-800 mb-6">
                  Skills & Expertise
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Python", "Figma", "UI/UX Design", "Web Development"].map(
                    (skill, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-lg shadow-sm text-center text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects and Certificates that showcase
              my skills in Ethical hacking, UI/UX design and many more....
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    {/* Make the entire image overlay clickable */}
                    {/* It will show the ExternalLink icon when hovered */}
                    <a
                      href={project.link} // This uses the 'link' property from your projects array
                      target="_blank" // Opens the link in a new tab
                      rel="noopener noreferrer" // Essential for security when using target="_blank"
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4" // Added padding to increase clickable area
                      aria-label={`View ${project.title} project`} // Improves accessibility for screen readers
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    {/* Make the "View Project" text and icon clickable */}
                    {/* Changed from <button> to <a> for semantic correctness */}
                    <a
                      href={project.link} // This also uses the 'link' property
                      target="_blank" // Opens the link in a new tab
                      rel="noopener noreferrer" // Essential for security
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            YOU WANNA GET IN CONTACT?
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and design.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:ebin05reji@gmail.com"
              className="bg-slate-700 hover:bg-slate-600 p-8 rounded-2xl transition-all duration-200 transform hover:scale-105 group"
            >
              <Mail
                className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">ebin05reji@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/ebin-reji?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 p-8 rounded-2xl transition-all duration-200 transform hover:scale-105 group"
            >
              <Linkedin
                className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">Connect with me</p>
            </a>

            <a
              href="https://github.com/3bin-05"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 p-8 rounded-2xl transition-all duration-200 transform hover:scale-105 group"
            >
              <Github
                className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">View my code</p>
            </a>
          </div>
          {/* Social media card with the new link */}
          <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Social media</h3>
            <p className="text-gray-300 mb-6">
              Linktree contains all the contact details and my social media
              handles.
            </p>
            <a
              href="https://linktr.ee/ebin_reji"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Good practice for external links
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Other Contact options
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Ebin. Designed and built using React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;