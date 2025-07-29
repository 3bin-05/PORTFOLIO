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
        "data:image/jpeg;base64,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",
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
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
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
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
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
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
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
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <img
                src="cbcdb98b2d499f10af251671d9237d05.jpg"
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
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-gray-400" size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
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
                ThinkerHub, where I actively contribute, collaborate, and grow
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
                      Bachelor of Computer Science and Engineering
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
      <section id="projects" className="py-20 bg-slate-50">
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
