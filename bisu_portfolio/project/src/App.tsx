import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Github, Linkedin, Mail, MapPin, Phone, Share2 } from 'lucide-react';

function App() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Coder", "Developer", "AI Enthusiast"],
      loop: true,
      typeSpeed: 65,
      backSpeed: 65
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <header id="header" className="header-tops">
        <div className="container">
          <h1><a href="#home">Biswa Prakash Rout</a></h1>
          <h2>I'm <span ref={typedRef}></span></h2>
          
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li><a href="#header" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="https://drive.google.com/file/d/1gh0PeLEJFMI8xp4zSpun7ciYyTjHXCn1/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Resume</a></li>
              <li><a href="#contacts">Contact</a></li>
            </ul>
          </nav>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/biswa-rout-4aaa69235/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://www.github.com/bisuuuuu" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80" alt="Profile" className="img-fluid rounded" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0">
                <p>
                  Focused and enthusiastic developer with a keen interest in software development and machine learning. 
                  By comprehensive exposure to the underlying concepts and applying them vividly to various projects, 
                  my love for these domains came into being. I am a passionate individual who thrives to build and 
                  apply algorithms to solve real-world industry problems.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>Birthday: 18 October 2004</li>
                      <li>Phone: +91 6371745763</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>City: ODISHA, BBSR</li>
                      <li>Email: biswaprakash1836@gmail.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="education">
          <div className="container">
            <div className="section-title">
              <h2>Education</h2>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="education-item">
                  <h4>ITER, SOA UNIVERSITY</h4>
                  <h5>January 2022 - Present</h5>
                  <p>B.Tech in Computer Science</p>
                  <ul>
                    <li>Programming</li>
                    <li>Different Languages, Networking</li>
                    <li>Foundation of Operating Systems</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="education-item">
                  <h4>Demonstration Multipurpose School, RIE BBSR</h4>
                  <h5>July 2010 - May 2020</h5>
                  <p>Basic Learning</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience">
          <div className="container">
            <div className="section-title">
              <h2>Experience</h2>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="experience-item">
                  <h4>Google Cloud Arcade</h4>
                  <h5>January 2024 - Present</h5>
                  <p>Software Engineer</p>
                  <ul>
                    <li>Managed large-scale deployment in arcade labs</li>
                    <li>Configured, troubleshot, and administered server-side web applications</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="experience-item">
                  <h4>Robotics</h4>
                  <h5>August 2022 - November 2023</h5>
                  <p>Hands on robots and developments</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="skill-category">
                  <h4>Languages and Databases</h4>
                  <div className="skill-icons">
                    <img src="https://www.vectorlogo.zone/logos/python/python-horizontal.svg" alt="Python" />
                    <img src="https://www.vectorlogo.zone/logos/java/java-horizontal.svg" alt="Java" />
                    <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" alt="HTML5" />
                    <img src="https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg" alt="MySQL" />
                  </div>
                </div>

                <div className="skill-category">
                  <h4>Frameworks</h4>
                  <div className="skill-icons">
                    <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" alt="Node.js" />
                    <img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" alt="Bootstrap" />
                    <img src="https://www.vectorlogo.zone/logos/opencv/opencv-ar21.svg" alt="OpenCV" />
                  </div>
                </div>

                <div className="skill-category">
                  <h4>Tools</h4>
                  <div className="skill-icons">
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" alt="Git" />
                    <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg" alt="Google Cloud" />
                    <img src="https://www.vectorlogo.zone/logos/jupyter/jupyter-ar21.svg" alt="Jupyter" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="contacts">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="contact-info">
                  <MapPin className="icon" />
                  <h3>Address</h3>
                  <p>Odisha, BBSR</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-info">
                  <Share2 className="icon" />
                  <h3>Social Profiles</h3>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/biswa-rout-4aaa69235/" target="_blank" rel="noopener noreferrer">
                      <Linkedin />
                    </a>
                    <a href="https://www.github.com/bisuuuuu" target="_blank" rel="noopener noreferrer">
                      <Github />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-info">
                  <Mail className="icon" />
                  <h3>Email</h3>
                  <p>biswaprakash1836@gmail.com</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-info">
                  <Phone className="icon" />
                  <h3>Phone</h3>
                  <p>+91 6371745763</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;