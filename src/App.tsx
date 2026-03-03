import { useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Home, Folder, Code2, Wrench } from 'lucide-react';
import profileImg from './assets/profileImg.jpeg';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <div className="floating-nav">
        <nav className="floating-nav__pill">
          <a href="#home" className="nav-icon-btn">
            <Home />
            <span className="nav-tooltip">Home</span>
          </a>
          <span className="nav-dot" />
          <a href="#projects" className="nav-icon-btn">
            <Folder />
            <span className="nav-tooltip">Projects</span>
          </a>
          <span className="nav-dot" />
          <a href="#coding-profiles" className="nav-icon-btn">
            <Code2 />
            <span className="nav-tooltip">Coding Profiles</span>
          </a>
          <span className="nav-dot" />
          <a href="#tools" className="nav-icon-btn">
            <Wrench />
            <span className="nav-tooltip">Tools</span>
          </a>
          <span className="nav-dot" />
          <a href="#contact" className="nav-icon-btn">
            <Mail />
            <span className="nav-tooltip">Contact</span>
          </a>
        </nav>
      </div>

      {/* ── Content Wrapper (sidebar + main) ── */}
      <div className="flex max-w-7xl mx-auto pt-10 ml-20">
        {/* Profile Card — sticky sidebar */}
        <aside className="profile-sidebar">
          <div className="bg-white rounded-3xl p-6 text-black w-full max-w-[20rem] relative overflow-hidden shadow-2xl">
            {/* Decorative gradient blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-amber-300/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-tr from-orange-300/20 to-transparent rounded-full blur-xl"></div>



            <div className="relative z-10">
              {/* Photo with decorative ring */}
              <div className="relative mb-5">
                <div className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] border-[2.5px] border-dashed border-orange-400/50 rounded-[1.75rem] rotate-[8deg]"></div>
                <div className="p-2 bg-gradient-to-br from-orange-200 to-orange-100 rounded-[1.25rem]">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-auto rounded-[1rem] bg-gray-200 object-cover aspect-[3/4]"
                  />
                </div>
              </div>

              {/* Name + availability badge */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <h2 className="text-[1.75rem] font-extrabold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>Sanvi Kumari</h2>
              </div>
              <p className="text-center text-gray-600 font-medium mb-6 text-sm leading-relaxed px-1">
                Full-Stack Developer | DSA<br />
                Enthusiast | Code that Performs
              </p>

              {/* Social icons with backgrounds */}
              <div className="flex justify-center gap-5 pb-1">
                <a href="https://github.com/sanviii19" className="text-orange-500 hover:text-orange-600 hover:scale-110 transition-all">
                  <Github className="w-5 h-5 stroke-[1.5]" />
                </a>
                <a href="https://www.linkedin.com/in/sanvi-kumari/" className="text-orange-500 hover:text-orange-600 hover:scale-110 transition-all">
                  <Linkedin className="w-5 h-5 stroke-[1.5]" />
                </a>
                <a href="mailto:sanvikumari19@gmail.com" className="text-orange-500 hover:text-orange-600 hover:scale-110 transition-all">
                  <Mail className="w-5 h-5 stroke-[1.5]" />
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Scrollable Content */}
        <main className="flex-1 min-w-0 main-entrance">

          {/* Hero */}
          <section id="home" className="pt-6 pb-20 px-6 lg:px-12">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[0.95]">
              SOFTWARE<br />
              <span className="text-gray-700">DEVELOPER</span>
            </h1>
            <p className="text-gray-400 text-base lg:text-lg mb-12 max-w-xl leading-relaxed">
              Passionate about creating intuitive and engaging user experiences.
              Specialize in transforming ideas into beautifully crafted products.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12 max-w-xl">
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  10<span className="text-orange-500">+</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  15<span className="text-orange-500">+</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Active Repositories</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  250<span className="text-orange-500">+</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Coding Questions</div>
              </div>
            </div>

            {/* Resume Card */}
            <a
              href="https://drive.google.com/file/d/1BCxUTnNzga9-9mNhS06Z0vzn7uVWWRuo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group block max-w-xl"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 p-[1px] hover:scale-[1.02] transition-transform duration-300">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-8 py-7">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]" style={{ transition: 'transform 0.8s ease, opacity 0.3s ease' }}></div>

                  {/* Decorative waves */}
                  <div className="absolute inset-0 opacity-[0.06]">
                    <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                      <path d="M 0 60 Q 100 20 200 60 T 400 60" stroke="currentColor" fill="none" strokeWidth="1.5" className="text-orange-400" />
                      <path d="M 0 80 Q 100 40 200 80 T 400 80" stroke="currentColor" fill="none" strokeWidth="1.5" className="text-orange-400" />
                      <path d="M 0 100 Q 100 60 200 100 T 400 100" stroke="currentColor" fill="none" strokeWidth="1.5" className="text-orange-400" />
                    </svg>
                  </div>

                  <div className="relative flex items-center justify-between gap-6">
                    <div>
                      <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-2">View My Resume</p>
                      <h3 className="text-2xl font-bold text-white mb-1">Explore My Journey</h3>
                      <p className="text-gray-400 text-sm">Skills, experience & achievements — all in one place</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/30 transition-colors">
                      <ExternalLink className="w-5 h-5 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </section>

          {/* Recent Projects */}
          <section id="projects" className="reveal py-20 px-6 lg:px-12">
            <h2 className="text-5xl lg:text-6xl font-bold mb-12">
              RECENT<br />
              <span className="text-gray-700">PROJECTS</span>
            </h2>
            <div className="space-y-5 max-w-2xl">
              <a href="#" className="group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-5">
                  <div className="w-28 h-20 bg-gray-800 rounded-xl shrink-0 overflow-hidden">
                    <img src="https://via.placeholder.com/120x80" alt="WanderLust" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1">WanderLust</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">web platform that offers seamless accommodation services.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 mt-1" />
                </div>
              </a>
              <a href="#" className="group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-5">
                  <div className="w-28 h-20 bg-gray-800 rounded-xl shrink-0 overflow-hidden">
                    <img src="https://via.placeholder.com/120x80" alt="Ultimate Success Institute" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1">Ultimate Success Institute</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Platform that offers students premium study hub access, enables admins to manage them.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 mt-1" />
                </div>
              </a>
              <a href="#" className="group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-5">
                  <div className="w-28 h-20 bg-gray-800 rounded-xl shrink-0 overflow-hidden">
                    <img src="https://via.placeholder.com/120x80" alt="Lawease" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1">Lawease</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Designing an AI-powered legal assistant to answer law-related queries across multiple languages</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 mt-1" />
                </div>
              </a>
            </div>
          </section>

          {/* Coding Profiles */}
          <section id="coding-profiles" className="reveal py-20 px-6 lg:px-12">
            <h2 className="text-5xl lg:text-6xl font-bold mb-12">
              CODING<br />
              <span className="text-gray-700">PROFILES</span>
            </h2>
            <div className="space-y-5 max-w-2xl">
              <a href="#" className="group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-1">LeetCode</h3>
                    <p className="text-gray-400 text-sm">Solved 300+ Data Structure and Algorithms problems on Leetcode.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 ml-4" />
                </div>
              </a>
              <a href="#" className="group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-1">Geeks for Geeks</h3>
                    <p className="text-gray-400 text-sm">Solved over 100+ quality ques on Geeks for Geeks</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 ml-4" />
                </div>
              </a>
              <a href="#" className="group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-1">TUF Sheet</h3>
                    <p className="text-gray-400 text-sm">Successfully completed the Striver Sheet (TUF).</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 ml-4" />
                </div>
              </a>
            </div>
          </section>

          {/* Premium Tools */}
          <section id="tools" className="reveal py-20 px-6 lg:px-12">
            <h2 className="text-5xl lg:text-6xl font-bold mb-12">
              PREMIUM<br />
              <span className="text-gray-700">TOOLS</span>
            </h2>
            <div className="grid grid-cols-2 gap-4 max-w-2xl">
              <div className="flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-blue-500/15 rounded-xl flex items-center justify-center text-xl shrink-0">⚛️</div>
                <div>
                  <h3 className="text-base font-bold">React</h3>
                  <p className="text-gray-500 text-xs">React.js</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-green-600/15 rounded-xl flex items-center justify-center text-xl shrink-0">📗</div>
                <div>
                  <h3 className="text-base font-bold">Node js</h3>
                  <p className="text-gray-500 text-xs">Backend</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-green-500/15 rounded-xl flex items-center justify-center text-xl shrink-0">🍃</div>
                <div>
                  <h3 className="text-base font-bold">MongoDb</h3>
                  <p className="text-gray-500 text-xs">Database</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-gray-700/40 rounded-xl flex items-center justify-center text-xl shrink-0">▲</div>
                <div>
                  <h3 className="text-base font-bold">Nextjs</h3>
                  <p className="text-gray-500 text-xs">React framework</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-gray-700/40 rounded-xl flex items-center justify-center text-xl shrink-0">🎨</div>
                <div>
                  <h3 className="text-base font-bold">Framer</h3>
                  <p className="text-gray-500 text-xs">Website Builder</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-purple-500/15 rounded-xl flex items-center justify-center text-xl shrink-0">🎨</div>
                <div>
                  <h3 className="text-base font-bold">Figma</h3>
                  <p className="text-gray-500 text-xs">Design Tool</p>
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Approach */}
          <section className="reveal py-20 px-6 lg:px-12">
            <h2 className="text-5xl lg:text-6xl font-bold mb-12">
              MY STRATEGIC<br />
              <span className="text-gray-700">APPROACH</span>
            </h2>
            <div className="space-y-5 max-w-2xl">
              <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Planning & Strategy</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Together, we'll bring the message to life by carefully identifying the
                      target audience and crafting the essential features. This phase
                      focuses on decisions of the site, structure, navigation, and content
                      needs to ensure a clear, goal-driven foundation.
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 ml-4 mt-1" />
                </div>
              </div>
              <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Development & Progress Updates</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      After finalizing the plan, development kicks off — from wireframes to
                      fully functional code. You'll receive regular progress updates to stay
                      informed and involved throughout the entire build process.
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 ml-4 mt-1" />
                </div>
              </div>
              <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Deployment & Launch</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      This is where everything comes together. Based on the approved design,
                      the site is developed into a fully functional product — carefully built
                      from the ground up and prepared for a smooth, successful launch.
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 ml-4 mt-1" />
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="reveal py-20 px-6 lg:px-12">
            <h2 className="text-5xl lg:text-6xl font-bold mb-12">
              LET'S WORK<br />
              <span className="text-gray-700">TOGETHER</span>
            </h2>
            <form className="max-w-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Your@email.com"
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="Message"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition"
              >
                Submit
              </button>
            </form>
          </section>
        </main>
      </div>

      {/* Footer — full width line */}
      <footer className="mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-gray-800"></div>
          <div className="py-12 text-center">
            <p className="text-gray-400 text-sm">Copyright © 2026 <span className="text-orange-500">Sanvi Kumari</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
