import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Home, Folder, Code2, Wrench, Award } from 'lucide-react';
import profileImg from './assets/profileImg.jpeg';
import linklyImg from './assets/projectImg/linkly.png';
import rapidstoreImg from './assets/projectImg/RapidStore.png';
import konvoImg from './assets/projectImg/konvo.png';
import clinicCareImg from './assets/projectImg/ClinicCare.png';
import disasterMgmtImg from './assets/projectImg/disaster-manangement.png';
import timeFliesImg from './assets/projectImg/timeFlies.png';

import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: false
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [isStatusVisible, setIsStatusVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setIsStatusVisible(true);
    setStatusMessage('Sending your message...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '8cbd1bf6-e076-446f-baa4-c318ec055a0b',
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setStatusMessage("Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '', botcheck: false });

        // Smooth fade out after 3 seconds
        setTimeout(() => {
          setIsStatusVisible(false);
          // Complete cleanup after transition finishes
          setTimeout(() => {
            setStatus('idle');
            setStatusMessage('');
          }, 500);
        }, 3000);
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Something went wrong. Please try again.');

        // Smooth fade out after 3 seconds
        setTimeout(() => {
          setIsStatusVisible(false);
          setTimeout(() => {
            setStatus('idle');
            setStatusMessage('');
          }, 500);
        }, 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setStatusMessage('Oops! There was a network error. Please check your connection.');
    }
  };

  useEffect(() => {
    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
      document.querySelectorAll('.scroll-reveal-child').forEach(el => el.classList.add('revealed'));
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');

          // Stagger children animations
          const children = entry.target.querySelectorAll('.scroll-reveal-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('revealed');
            }, index * 180);
          });
        }
      });
    }, observerOptions);

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
            <span className="nav-tooltip">Skills</span>
          </a>
          <span className="nav-dot" />
          <a href="#certifications" className="nav-icon-btn">
            <Award />
            <span className="nav-tooltip">Certifications</span>
          </a>
          <span className="nav-dot" />
          <a href="#contact" className="nav-icon-btn">
            <Mail />
            <span className="nav-tooltip">Contact</span>
          </a>
        </nav>
      </div>

      {/* ── Content Wrapper (sidebar + main) ── */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto pt-6 lg:ml-20">
        {/* Profile Card — sticky sidebar */}
        <aside className="profile-sidebar">
          <div className="bg-white rounded-3xl p-6 text-black w-full max-w-[20rem] relative overflow-hidden shadow-2xl">
            {/* Decorative gradient blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-amber-300/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-tr from-orange-300/20 to-transparent rounded-full blur-xl"></div>



            <div className="relative z-10">
              {/* Photo with decorative ring */}
              <div className="relative mb-5 z-10">
                <div className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] border-[2.5px] border-solid border-orange-300/50 rounded-[1.75rem] rotate-[8deg]"></div>
                <div className="absolute -top-3 -left-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] border-[2px] border-dashed border-orange-200/50 rounded-[1.5rem] rotate-[-8deg]"></div>
                <div className="p-2 bg-gradient-to-br from-orange-200 to-orange-100 rounded-[1.25rem] relative z-10">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-auto rounded-[1rem] bg-gray-200 object-cover aspect-[3/4]"
                  />
                </div>
              </div>

              {/* Name + availability badge */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <h2 className="text-[1.75rem] text-gray-700 font-extrabold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>Sanvi Kumari</h2>
              </div>
              <p className="text-center text-gray-600 font-medium mb-6 text-sm leading-relaxed px-1">
                Full-Stack Developer | DSA<br />
                Enthusiast | Code that Performs
              </p>

              {/* Social icons with backgrounds */}
              <div className="flex justify-center gap-5 pb-1">
                <a href="https://github.com/sanviii19" target='_blank' className="text-orange-500 hover:text-orange-600 hover:scale-110 transition-all">
                  <Github className="w-5 h-5 stroke-[1.5]" />
                </a>
                <a href="https://www.linkedin.com/in/sanvi-kumari/" target='_blank' className="text-orange-500 hover:text-orange-600 hover:scale-110 transition-all">
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
          <section id="home" className="pt-6 pb-20 px-6 lg:px-12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-[0.95]">
              SOFTWARE<br />
              <span className="text-gray-700">DEVELOPER</span>
            </h1>
            <p className="text-gray-400 text-base lg:text-lg mb-12 max-w-xl leading-relaxed">
              Architecting scalable, user-centric web applications.
              Dedicated to transforming complex challenges into elegant, high-performance software.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12 max-w-xl w-full text-sm sm:text-base">
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
                  300<span className="text-orange-500">+</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Coding Questions</div>
              </div>
            </div>

            {/* Resume Card */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full max-w-xl relative"
            >
              {/* Static glow orbs */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-500 rounded-full blur-[100px] pointer-events-none group-hover:bg-orange-400 transition-colors duration-500 opacity-60"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-400 rounded-full blur-[80px] pointer-events-none group-hover:bg-amber-300 transition-colors duration-500 opacity-60"></div>

              <div className="contact-card-wrapper w-full">
                {/* Decorative Tilted Frames (Borders) */}
                <div className="contact-frame frame-tilt-1 group-hover:-translate-x-1 group-hover:-translate-y-0.5 group-hover:rotate-[-4deg] !transition-all !duration-[1200ms] ease-out"></div>
                <div className="contact-frame frame-tilt-2 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:rotate-[3deg] !transition-all !duration-[1200ms] ease-out"></div>
                <div className="contact-frame frame-tilt-3 group-hover:translate-y-1 group-hover:rotate-[-6deg] !transition-all !duration-[1200ms] ease-out"></div>

                <div className="relative bg-gray-950/95 backdrop-blur-2xl rounded-3xl p-6 lg:p-8 overflow-hidden shadow-2xl border border-white/5 group-hover:border-orange-500/20 transition-colors duration-500">
                  {/* Decorative subtle rings */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-orange-500/20 rounded-full pointer-events-none group-hover:border-orange-500/40 group-hover:scale-110 transition-all duration-700 ease-out"></div>
                  <div className="absolute -top-5 -right-5 w-20 h-20 border-2 border-dashed border-orange-500/30 rounded-full pointer-events-none group-hover:border-orange-500/50 group-hover:rotate-[15deg] transition-all duration-700 ease-out"></div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-tr-full pointer-events-none group-hover:from-orange-500/20 transition-colors duration-500"></div>

                  <div className="relative z-10">
                    <p className="flex items-center gap-1.5 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-2 group-hover:text-orange-300 transition-colors">
                      View My Resume
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-amber-100 transition-colors tracking-tight">Explore My Journey</h3>
                    <p className="text-gray-400 text-sm">Skills, projects & achievements — all in one place</p>
                  </div>
                </div>
              </div>
            </a>
          </section>

          {/* Recent Projects */}
          <section id="projects" className="reveal py-20 px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-center lg:text-left">
              RECENT<br />
              <span className="text-gray-700">PROJECTS</span>
            </h2>
            <div className="space-y-5 max-w-2xl">
              <a href="https://github.com/sanviii19/Linkly" target="_blank" className="scroll-reveal-child group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                  <div className="w-full sm:w-28 h-40 sm:h-20 bg-gray-800 rounded-xl shrink-0 overflow-hidden">
                    <img src={linklyImg} alt="Linkly" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1">Linkly</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">A web platform that transforms long URLs into secure, customizable short links with built-in analytics.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 mt-1" />
                </div>
              </a>
              <a href="https://github.com/sanviii19/RapidStore" target="_blank" className="scroll-reveal-child group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                  <div className="w-full sm:w-28 h-40 sm:h-20 bg-gray-800 rounded-xl shrink-0 overflow-hidden">
                    <img src={rapidstoreImg} alt="RapidS  tore" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1">RapidStore</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">An e-commerce platform for seamless online shopping with secure real-time payments and an admin dashboard.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 mt-1" />
                </div>
              </a>
              <a href="https://github.com/sanviii19/DiscussionPlatform-Konvo" target="_blank" className="scroll-reveal-child group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                  <div className="w-full sm:w-28 h-40 sm:h-20 bg-gray-800 rounded-xl shrink-0 overflow-hidden">
                    <img src={konvoImg} alt="Konvo" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1">Konvo</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">An online discussion platform designed for seamless group conversations, knowledge sharing, and community building.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 mt-1" />
                </div>
              </a>
              <a href="https://github.com/sanviii19/ClinicCare" target="_blank" className="scroll-reveal-child group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                  <div className="w-full sm:w-28 h-40 sm:h-20 bg-gray-800 rounded-xl shrink-0 overflow-hidden">
                    <img src={clinicCareImg} alt="ClinicCare" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1">ClinicCare</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">A healthcare management platform for booking appointments, managing patient records, and streamlining clinic operations.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 mt-1" />
                </div>
              </a>
              <a href="https://github.com/sanviii19/Disaster-managment-hackathon-" target="_blank" className="scroll-reveal-child group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                  <div className="w-full sm:w-28 h-40 sm:h-20 bg-gray-800 rounded-xl shrink-0 overflow-hidden">
                    <img src={disasterMgmtImg} alt="Disaster Management" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1">Disaster Management System</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">A real-time disaster response platform for tracking, reporting, and coordinating relief efforts during emergencies.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 mt-1" />
                </div>
              </a>
              <a href="https://time-flies-gray.vercel.app/" target="_blank" className="scroll-reveal-child group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                  <div className="w-full sm:w-28 h-40 sm:h-20 bg-gray-800 rounded-xl shrink-0 overflow-hidden">
                    <img src={timeFliesImg} alt="TimeFlies" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1">Time Flies</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">A sleek stopwatch app with basic controls, featuring a dark and light theme toggle for a comfortable experience.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 mt-1" />
                </div>
              </a>
            </div>
          </section>

          {/* Coding Profiles */}
          <section id="coding-profiles" className="reveal py-20 px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-center lg:text-left">
              CODING<br />
              <span className="text-gray-700">PROFILES</span>
            </h2>
            <div className="space-y-5 max-w-2xl">
              <a href="https://leetcode.com/u/sanviii19/" target="_blank" className="scroll-reveal-child group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                  <div>
                    <h3 className="text-lg font-bold mb-1">LeetCode</h3>
                    <p className="text-gray-400 text-sm">Solved 250+ Data Structure and Algorithms problems on Leetcode.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 ml-4" />
                </div>
              </a>
              <a href="https://www.hackerrank.com/profile/sanvikumari19" target="_blank" className="scroll-reveal-child group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                  <div>
                    <h3 className="text-lg font-bold mb-1">HackerRank</h3>
                    <p className="text-gray-400 text-sm">Achieved 5-star Gold Badge in C++ and Python on HackerRank.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transition-colors shrink-0 ml-4" />
                </div>
              </a>
            </div>
          </section>

          {/* Technical Skills */}
          <section id="tools" className="reveal py-20 px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-center lg:text-left">
              TECHNICAL<br />
              <span className="text-gray-700">SKILLS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <div className="scroll-reveal-child flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-blue-600/15 rounded-xl flex items-center justify-center shrink-0">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base font-bold">C++</h3>
                  <p className="text-gray-500 text-xs">Programming Language</p>
                </div>
              </div>
              <div className="scroll-reveal-child flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-yellow-500/15 rounded-xl flex items-center justify-center shrink-0">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base font-bold">JavaScript</h3>
                  <p className="text-gray-500 text-xs">Web Development</p>
                </div>
              </div>
              <div className="scroll-reveal-child flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-green-600/15 rounded-xl flex items-center justify-center shrink-0">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base font-bold">Node.js</h3>
                  <p className="text-gray-500 text-xs">Backend Runtime</p>
                </div>
              </div>
              <div className="scroll-reveal-child flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-gray-700/40 rounded-xl flex items-center justify-center shrink-0">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-7 h-7 invert" />
                </div>
                <div>
                  <h3 className="text-base font-bold">Express.js</h3>
                  <p className="text-gray-500 text-xs">Backend Framework</p>
                </div>
              </div>
              <div className="scroll-reveal-child flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-blue-500/15 rounded-xl flex items-center justify-center shrink-0">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base font-bold">React</h3>
                  <p className="text-gray-500 text-xs">Frontend Library</p>
                </div>
              </div>
              <div className="scroll-reveal-child flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-cyan-500/15 rounded-xl flex items-center justify-center shrink-0">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base font-bold">Tailwind CSS</h3>
                  <p className="text-gray-500 text-xs">CSS Framework</p>
                </div>
              </div>
              <div className="scroll-reveal-child flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-green-500/15 rounded-xl flex items-center justify-center shrink-0">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base font-bold">MongoDB</h3>
                  <p className="text-gray-500 text-xs">Database</p>
                </div>
              </div>
              <div className="scroll-reveal-child flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 hover:border-gray-700 transition cursor-pointer">
                <div className="w-11 h-11 bg-orange-500/15 rounded-xl flex items-center justify-center shrink-0">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base font-bold">Git</h3>
                  <p className="text-gray-500 text-xs">Version Control</p>
                </div>
              </div>
            </div>
          </section>

          {/* Licenses & Certifications */}
          <section id="certifications" className="reveal py-20 px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-center lg:text-left">
              LICENSES &<br />
              <span className="text-gray-700">CERTIFICATIONS</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
              {/* Card 1 - Oracle Certification*/}
              <a href="/certifications/OracleGenAICertificate.pdf" target="_blank" rel="noopener noreferrer" className="scroll-reveal-child bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[160px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                      {/* Oracle Logo */}
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" alt="Oracle" className="w-7 h-7" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Oracle Cloud Infrastructure Certified Generative AI Professional</h3>
                  <p className="text-gray-400 text-sm">Oracle University</p>
                </div>
              </a>
              {/* Card 2 IBM Certification*/}
              <a href="/certifications/IBM-softwareEnginner.pdf" target="_blank" rel="noopener noreferrer" className="scroll-reveal-child bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[160px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0">
                      {/* IBM Logo */}
                      <img src="https://www.google.com/s2/favicons?domain=ibm.com&sz=128" alt="IBM" className="w-7 h-7 rounded-sm" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Introduction to Software Engineering</h3>
                  <p className="text-gray-400 text-sm">IBM (Coursera)</p>
                </div>
              </a>
              {/* Card 3 Programming Pathshala Certification*/}
              <a href="/certifications/Certificate_programingPathshala.pdf" target="_blank" rel="noopener noreferrer" className="scroll-reveal-child bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[160px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                      {/* Programming Pathshala Logo */}
                      <img src="https://www.google.com/s2/favicons?domain=programmingpathshala.com&sz=128" alt="Programming Pathshala" className="w-7 h-7 rounded-sm bg-white" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Full Stack with AI</h3>
                  <p className="text-gray-400 text-sm">Programming Pathshala</p>
                </div>
              </a>
              {/* Card 4 NPTEL Certification*/}
              <a href="/certifications/CloudComputing-NPTEL.pdf" target="_blank" rel="noopener noreferrer" className="scroll-reveal-child bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[160px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0">
                      {/* NPTEL Logo */}
                      <img src="https://www.google.com/s2/favicons?domain=nptel.ac.in&sz=128" alt="NPTEL" className="w-7 h-7 rounded-sm" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Cloud Computing Certification</h3>
                  <p className="text-gray-400 text-sm">NPTEL (IIT Kharagpur)</p>
                </div>
              </a>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="reveal py-20 px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-center lg:text-left">
              LET'S WORK<br />
              <span className="text-gray-700">TOGETHER</span>
            </h2>

            <div className="relative max-w-xl">
              {/* Floating particles */}
              <div className="contact-particle"></div>
              <div className="contact-particle"></div>
              <div className="contact-particle"></div>
              <div className="contact-particle"></div>
              <div className="contact-particle"></div>

              {/* Pulsing glow orbs - now static */}
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-orange-500 rounded-full blur-[200px] pointer-events-none"></div>
              <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-amber-400 rounded-full blur-[100px] pointer-events-none"></div>

              {/* Animated gradient border card */}
              <div className="contact-card-wrapper">
                {/* Decorative Tilted Frames */}
                <div className="contact-frame frame-tilt-1"></div>
                <div className="contact-frame frame-tilt-2"></div>
                <div className="contact-frame frame-tilt-3"></div>

                <div className="relative bg-gray-950/95 backdrop-blur-2xl rounded-3xl p-6 lg:p-8 overflow-hidden">
                  {/* Static decorative rings */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-orange-500/20 rounded-full pointer-events-none"></div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-dashed border-orange-500/30 rounded-full pointer-events-none"></div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/15 to-transparent rounded-tr-full pointer-events-none"></div>

                  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm placeholder-orange-500/80 focus:outline-none focus:border-orange-500/50 focus:bg-orange-500/[0.03] focus:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all duration-500"
                        />
                      </div>
                      <div className="group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Your Email"
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm placeholder-orange-500/80 focus:outline-none focus:border-orange-500/50 focus:bg-orange-500/[0.03] focus:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all duration-500"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Subject"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm placeholder-orange-500/80 focus:outline-none focus:border-orange-500/50 focus:bg-orange-500/[0.03] focus:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all duration-500"
                      />
                    </div>
                    <div className="group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Message..."
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm placeholder-orange-500/80 focus:outline-none focus:border-orange-500/50 focus:bg-orange-500/[0.03] focus:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all duration-500 resize-none"
                      ></textarea>
                    </div>

                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: 'none' }}
                      checked={formData.botcheck}
                      onChange={handleChange}
                    />

                    {status !== 'idle' && (
                      <div className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-500 transform ${isStatusVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                        } ${status === 'error' ? 'bg-red-500/10 text-red-400' :
                          status === 'success' ? 'bg-yellow-600/10 text-yellow-500' :
                            'bg-orange-500/10 text-orange-400'
                        }`}>
                        {statusMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group relative w-full overflow-hidden bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-all duration-300 hover:bg-orange-500 hover:shadow-[0_8px_30px_rgba(249,115,22,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide uppercase text-xs">
                        Send Message
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer — full width line */}
      <footer className="mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-gray-800"></div>
          <div className="py-12 text-center">
            <p className="text-gray-400 text-sm">Copyright © {new Date().getFullYear()} <span className="text-orange-500">Sanvi Kumari</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
