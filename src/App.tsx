/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import Lenis from 'lenis';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Zap, 
  ChevronRight,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-apex-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display font-bold text-2xl tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-apex-yellow flex items-center justify-center text-black rotate-12">
            <span className="font-black -rotate-12">A</span>
          </div>
          <span>APEX<span className="text-apex-yellow">.</span>DEV</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="font-display text-sm uppercase tracking-widest hover:text-apex-yellow transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-apex-yellow text-black font-display font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-apex-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-xl uppercase tracking-tighter hover:text-apex-yellow"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-apex-yellow/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="font-mono text-apex-yellow text-sm tracking-[0.3em] uppercase">
            Full Stack Software Engineer
          </span>
        </motion.div>

        <motion.h1
          style={{ y: y1 }}
          className="text-[12vw] md:text-[10vw] leading-[0.85] font-black mb-6"
        >
          <motion.span 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            ALEX
          </motion.span>
          <motion.span 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block text-stroke-yellow"
          >
            RACING
          </motion.span>
          <motion.span 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block"
          >
            CODE
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10"
        >
          Building high-performance digital experiences with precision, speed, and cutting-edge technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="px-8 py-4 bg-white text-black font-display font-bold uppercase tracking-widest hover:bg-apex-yellow transition-all flex items-center gap-2 group">
            View Projects <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border border-white/20 font-display font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
            My Story
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white" />
      </motion.div>
    </section>
  );
};

const Marquee = () => {
  const skills = ["React", "TypeScript", "Node.js", "Next.js", "Tailwind", "PostgreSQL", "Docker", "AWS", "Python", "Go", "Rust", "GraphQL"];
  
  return (
    <div className="py-10 bg-apex-yellow overflow-hidden whitespace-nowrap border-y-4 border-black">
      <div className="flex animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {skills.map((skill) => (
              <span key={skill} className="text-black font-display font-black text-4xl md:text-6xl uppercase mx-8 flex items-center gap-4">
                {skill} <Zap size={32} fill="black" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, category, image, delay }: { title: string, category: string, image: string, delay: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02, 
        y: -10,
        boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.5)"
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.215, 0.61, 0.355, 1],
        scale: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className="group relative aspect-[4/5] overflow-hidden bg-apex-gray cursor-pointer z-0 hover:z-10"
    >
      <motion.img 
        src={image} 
        alt={title}
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      
      <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
        <span className="font-mono text-apex-yellow text-xs uppercase tracking-widest mb-2 block">
          {category}
        </span>
        <h3 className="text-3xl font-black leading-none mb-4">{title}</h3>
        <div className="flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
          <span className="text-sm font-display uppercase tracking-widest">Explore Project</span>
          <ChevronRight size={16} />
        </div>
      </div>

      <div className="absolute top-6 right-6 w-12 h-12 glass flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink size={20} />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    { title: "Velocity Engine", category: "Backend / Systems", image: "https://picsum.photos/seed/velocity/800/1000" },
    { title: "Cyber Grid UI", category: "Frontend / Design", image: "https://picsum.photos/seed/cyber/800/1000" },
    { title: "Apex Analytics", category: "Data / Visualization", image: "https://picsum.photos/seed/data/800/1000" },
    { title: "Quantum Cloud", category: "Infrastructure", image: "https://picsum.photos/seed/cloud/800/1000" },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-6">Selected<br/><span className="text-stroke">Works</span></h2>
          <p className="text-gray-400 text-lg">A collection of high-performance applications built with modern stacks and a focus on user experience.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex gap-4"
        >
          <div className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
            <ChevronRight className="rotate-180" />
          </div>
          <div className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
            <ChevronRight />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Years Exp", value: "08", icon: <Zap className="text-apex-yellow" /> },
    { label: "Projects", value: "42", icon: <Code2 className="text-apex-yellow" /> },
    { label: "Commits", value: "12K", icon: <Cpu className="text-apex-yellow" /> },
    { label: "Uptime", value: "99.9", icon: <Globe className="text-apex-yellow" /> },
  ];

  return (
    <section id="about" className="py-24 bg-apex-gray border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-4">{stat.icon}</div>
            <span className="text-5xl md:text-7xl font-black mb-2 font-display">{stat.value}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-apex-yellow to-transparent opacity-20" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-black mb-12 leading-none"
        >
          READY TO<br/><span className="text-apex-yellow">ACCELERATE?</span>
        </motion.h2>
        
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
          Currently accepting new projects and collaborations. If you have a vision that needs high-performance execution, let's talk.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:hello@apex.dev"
            className="w-full md:w-auto px-12 py-6 bg-apex-yellow text-black font-display font-black text-xl uppercase tracking-widest hover:bg-white transition-all"
          >
            Start a Conversation
          </a>
          <div className="flex gap-4">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a 
                key={i}
                href="#" 
                className="w-16 h-16 glass flex items-center justify-center hover:bg-apex-yellow hover:text-black transition-all"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-apex-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 font-display font-bold text-xl">
          <div className="w-6 h-6 bg-apex-yellow flex items-center justify-center text-black rotate-12">
            <span className="font-black -rotate-12 text-xs">A</span>
          </div>
          <span>APEX<span className="text-apex-yellow">.</span>DEV</span>
        </div>
        
        <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <span>© 2026 APEX ENGINEERING</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">System Status: Optimal</span>
        </div>
      </div>
    </footer>
  );
};

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('.cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-apex-yellow rounded-full pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: mousePos.x - 16,
        y: mousePos.y - 16,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? 'rgba(240, 255, 0, 0.2)' : 'rgba(240, 255, 0, 0)',
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
    />
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-apex-yellow selection:text-black cursor-none">
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-apex-yellow z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
