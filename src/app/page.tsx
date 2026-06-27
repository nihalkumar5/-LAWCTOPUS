"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Shield, Check, X, ChevronDown, ChevronUp, Star, ArrowRight, 
  Clock, BookOpen, Award, TrendingUp, Calendar, DollarSign, 
  Globe, Users, Briefcase, FileText, Sparkles, Laptop, Play,
  MessageCircle, ArrowDownToLine, InfinityIcon, Target,
  Phone, Mail, MapPin
} from "lucide-react";

function TypewriterWord({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2000); // Wait 2s before deleting
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 100); // Delete faster than typing

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="inline-flex items-center min-h-[1.2em]">
      <span className="text-white relative">
        {currentText}
        <span className="absolute -right-[12px] top-[10%] h-[80%] w-[3px] bg-white animate-pulse"></span>
      </span>
    </span>
  );
}

const careerCell = [
  {
    name: "Saloni Sahu",
    role: "Manager, Career Advancement Cell",
    education: "BBA LLB (Prestige Institute), LLM (Oriental University)",
    experience: "Content Manager at Deadly Law, Community Manager at LedX, Outreach at Lawctopus.",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/03/saloni-sahu.jpg"
  },
  {
    name: "Anup Menon V",
    role: "Top-Rated UpWork Freelancer",
    education: "LL.M. in Corporate Laws. Rank holder from Karnataka State Law University.",
    experience: "Senior Legal Counsel at C. Mohanram & Associates. Specializes in Corporate & Tech sectors.",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/10/Anup-Menon.png"
  },
  {
    name: "Tanuj Kalia",
    role: "Founding CEO, Lawctopus",
    education: "Law graduate from NUJS Kolkata (2013), MA from AUD Delhi (2019).",
    experience: "Ex VP Marketing at Vakilsearch, Author ‘Law as a Career’ (LexisNexis).",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/11/Tanuj-Kalia.png"
  }
];

const facultyMembers = [
  {
    name: "Shashank Sardesai",
    role: "Independent Litigator & Company Secretary",
    desc: "Co-founder of EverTrust Legal. Former associate at Wadia Ghandy & Co. and HSA Advocates. Specializes in partnership deeds, lease agreements, and corporate compliance.",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/08/Shashank-Sardesai.png"
  },
  {
    name: "Akanksha Mishra",
    role: "Head of Lawctopus Law School",
    desc: "Taught contract drafting to 1500+ learners. Independent litigator at Bombay High Court. Corporate counsel for start-ups and PSUs. LLM Gold Medalist.",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/08/Akanksha-Mishra.png"
  },
  {
    name: "Pranjal Doshi",
    role: "Associate at Walker Morris LLP, UK",
    desc: "Postgraduate from University of Cambridge. Former associate at Trilegal and Khaitan & Co. Specializes in M&A, private equity, and investment documents.",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/08/Pranjal-Doshi.png"
  },
  {
    name: "Arunima Jha",
    role: "Head Legal Counsel, Omnicom Media Group",
    desc: "Former Legal Counsel at BookMyShow. Expert in media law, privacy regulations, and managing investment portfolios and exit strategies.",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/08/Arunima-Jha.png"
  },
  {
    name: "Adv. Jaibatruka Mohanta",
    role: "Research Associate, CEERA (NLSIU)",
    desc: "Advises the Government of India on Criminal Law reforms. Teaches Advanced Contracts and Public Policy at NLSIU.",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/08/Jai.png"
  },
  {
    name: "H. B Keshava",
    role: "Managing Attorney, Baskaran and Associates",
    desc: "Heads an IPR advisory firm in Pune. Guest faculty at New Law College and Career Launcher.",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/08/H.-B-Keshava.jpg"
  },
  {
    name: "Gourav Mohanty",
    role: "Advocate, Bombay High Court",
    desc: "Gold medalist from Symbiosis Law School. Former Senior Associate at Shardul Amarchand Mangaldas. Linklaters Drafting Competition winner.",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/08/Gourav-1.png"
  },
  {
    name: "Anup Menon V",
    role: "Senior Legal Counsel",
    desc: "Extensive experience advising clients internationally. Specializes in Corporate, Banking, and Tech sector commercial contracts.",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/10/Anup-Menon.png"
  },
  {
    name: "Tanuj Kalia",
    role: "Founding CEO of Lawctopus",
    desc: "Author of 'Law as a Career'. Winner of Business World Legal 40 under 40 award. TEDx speaker and MSME business owner.",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/11/Tanuj-Kalia.png"
  },
  {
    name: "Bhumesh Verma",
    role: "Managing Partner, Corp Comm Legal",
    desc: "25+ years experience as a corporate lawyer. Former partner at Khaitan & Co. Author of 'Practical Guide to Drafting Commercial Contracts'.",
    image: "https://www.lawctopus.com/wp-content/uploads/2023/01/Bhumesh-Varma_Faculty_0017_Group-4.png"
  },
  {
    name: "Shayonee Dasgupta",
    role: "Lead Researcher",
    desc: "Former Senior Associate at Shardul Amarchand Mangaldas. Consultant at IDIA and freelance legal educator.",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/02/Shayonee-Dasgupta_Faculty_0012_Group-9.png"
  },
  {
    name: "Debanshu Khettry",
    role: "Module Developer",
    desc: "Founder of SILC and Angel Investor. Leads Leslie and Khettry, a renowned law firm established in 1944. LLM from UCL.",
    image: "https://www.lawctopus.com/wp-content/uploads/2024/02/Debanshu-Khettry-Faculty_0015_Group-6.png"
  }
];

const curriculumMonths = [
  {
    month: 1,
    title: "Drafting Fundamentals & The Sale Deed",
    description: "Learn the absolute fundamentals of drafting contracts and get hands-on experience by identifying contracts, reviewing, and redrafting a sale deed entirely by yourself.",
    deliverables: ["Sale Deed Draft", "Contract Structure Checklist"],
    assignments: ["Identify missing clauses in a sample agreement", "Redraft a flawed Sale Deed"],
    liveSessions: 8,
    readingHours: 12
  },
  {
    month: 2,
    title: "IPR & Licensing Agreements",
    description: "Master intellectual property contracts. Draft Software Licensing Agreements and Trademark Licensing Agreements with airtight IP protection clauses.",
    deliverables: ["Software Licensing Agreement", "Trademark Licensing Agreement"],
    assignments: ["Draft a SaaS licensing clause", "Negotiate an IP assignment termsheet"],
    liveSessions: 8,
    readingHours: 15
  },
  {
    month: 3,
    title: "General Corporate & Business Agreements",
    description: "Dive deep into corporate mechanics. Draft Non-Disclosure Agreements, Power of Attorney, and complex Shareholders Agreements.",
    deliverables: ["NDA", "Power of Attorney", "Shareholders Agreement"],
    assignments: ["Draft a founder's NDA", "Structure a minority shareholder protection clause"],
    liveSessions: 7,
    readingHours: 14
  },
  {
    month: 4,
    title: "Commercial & Joint Venture Contracts",
    description: "Handle high-stakes business deals. Master the Joint Venture Agreement and Franchisee Agreement.",
    deliverables: ["Franchisee Agreement", "Joint Venture Agreement"],
    assignments: ["Draft royalty structures for a franchise", "Negotiate a JV exit clause"],
    liveSessions: 8,
    readingHours: 15
  },
  {
    month: 5,
    title: "E-Contracts & Digital Agreements",
    description: "Navigate the digital world. Learn the nuances of drafting terms and conditions for websites and Return & Refund policies.",
    deliverables: ["Website Terms & Conditions", "Return & Refund Policy"],
    assignments: ["Draft an e-commerce privacy policy", "Structure a GDPR compliant data clause"],
    liveSessions: 7,
    readingHours: 12
  },
  {
    month: 6,
    title: "Freelancing & Global Opportunities",
    description: "Build an online profile on platforms like Upwork and earn money. Monthly networking sessions to build your career ecosystem.",
    deliverables: ["Upwork Profile", "Winning Proposal Templates"],
    assignments: ["Pitch for a real Upwork gig", "Draft a retainer agreement for a foreign client"],
    liveSessions: 8,
    readingHours: 10
  }
];

export default function Home() {
  const [activeMonth, setActiveMonth] = useState(1);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const staggerFast = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const cardReveal = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const lineGrow = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };


  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#111] font-sans selection:bg-[#164336]/30">
      <main>
      {/* SUPER ENGAGING HERO SECTION - Full Image Background */}
      <div className="w-full min-h-[100vh] lg:h-[100vh] relative flex flex-col text-white overflow-hidden">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/judge-with-gavel-courtroom.jpg" alt="Law Books and Gavel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        
        {/* Modern Glassmorphism Navbar */}
        <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="fixed top-0 w-full flex justify-center px-6 lg:px-12 pt-5 z-50">
          <header className="w-full max-w-[1100px] flex items-center justify-between bg-[#111111]/40 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all">
            <div className="font-serif font-black tracking-tighter flex items-center gap-3">
              <span className="text-white text-[20px] font-sans font-light tracking-tight">Lawctopus<span className="font-bold">Elite</span></span>
            </div>
            
            <nav className="hidden lg:flex gap-10 items-center">
              <a href="#program" className="text-[13px] font-medium text-white/80 hover:text-white transition-colors">Program</a>
              <a href="#curriculum" className="text-[13px] font-medium text-white/80 hover:text-white transition-colors">Curriculum</a>
              <a href="#investment" className="text-[13px] font-medium text-white/80 hover:text-white transition-colors">Investment</a>
              <a href="mailto:courses@lawctopus.com" className="text-[13px] font-medium text-white/80 hover:text-white transition-colors">Contact Us</a>
            </nav>
            
            <div className="flex gap-6 items-center">
              <button onClick={() => setIsApplyModalOpen(true)} className="hidden sm:block text-[13px] font-medium text-white/80 hover:text-white transition-colors">Log In</button>
              <motion.button onClick={() => setIsApplyModalOpen(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-black text-[13px] font-medium px-7 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl shadow-white/5">
                Enrol Now
              </motion.button>
            </div>
          </header>
        </motion.div>

        {/* Main Hero Content - Split Layout */}
        <div className="flex-1 w-full mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between relative z-10 pt-28 lg:pt-20 pb-12 lg:pb-0 gap-8 lg:gap-12">
          
          {/* Left Side - Typography & Value Prop */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full lg:w-[55%] flex flex-col justify-center items-start relative z-20">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-white text-[11px] font-semibold tracking-wider uppercase">Batch 4 Enrollment Open</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-[60px] font-sans font-light text-white leading-[1.05] tracking-tight mb-6">
              Master contract drafting.<br/>
              <span className="font-semibold text-white/60">Build a </span>
              <span className="font-semibold text-white">
                <TypewriterWord words={["dream career.", "strong CV.", "top law firm.", "global profile."]} />
              </span>
            </motion.h1>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl">
              <p className="text-[15px] text-white/80 leading-relaxed font-light">
                <span className="font-medium text-white">Save 4 years</span> of your career. Learn in 6 months what takes 4-5 years of practice.
              </p>
              <p className="text-[15px] text-white/80 leading-relaxed font-light">
                Join the <span className="font-medium text-white">elite top 1%</span> of legal professionals globally.
              </p>
            </div>

            <div className="flex items-center gap-8 mb-8">
              <div className="flex flex-col">
                <div className="text-white font-light text-[32px] leading-none mb-1">24+</div>
                <div className="text-white/60 text-[10px] uppercase tracking-wider font-medium">Contracts</div>
              </div>
              <div className="flex flex-col">
                <div className="text-white font-light text-[32px] leading-none mb-1">54</div>
                <div className="text-white/60 text-[10px] uppercase tracking-wider font-medium">Sessions</div>
              </div>
              <div className="flex flex-col">
                <div className="text-white font-light text-[32px] leading-none mb-1">1k+</div>
                <div className="text-white/60 text-[10px] uppercase tracking-wider font-medium">Alumni</div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="https://docs.google.com/document/d/1WDeHa90-mEcnmjQui3dI4WGDaHvpiXlazvsYgGmI-n4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/30 text-white font-medium text-[13px] rounded-full hover:bg-white/10 transition-colors flex items-center gap-3 backdrop-blur-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download Brochure
              </a>
            </div>
          </motion.div>

          {/* Right Side - Floating Glass Card */}
          <motion.div initial={{ opacity: 0, x: 80, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }} className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center relative z-20">
            <div className="w-full max-w-[400px] bg-[#111111]/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/20 transition-all duration-500 mt-4 lg:mt-0">
              {/* Subtle top gradient glow inside the card */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Bestseller Ribbon touching the left edge */}
              <div className="absolute top-8 left-0 bg-white text-black px-3 py-1 rounded-r-md text-[9px] font-medium uppercase tracking-widest shadow-[4px_4px_15px_rgba(255,255,255,0.15)] flex items-center gap-1 z-10">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                6-Month Course
              </div>
              
              <div className="pt-10">
                <div className="text-[#c8a96b] font-bold tracking-[0.2em] uppercase text-[9px] mb-2">
                  Lawctopus' 6-Month Long Course on
                </div>
                <h3 className="text-white font-medium text-[22px] leading-tight mb-2">
                  Mastering Contract Drafting & Freelancing
                </h3>
                <p className="text-white/50 text-[13px] mb-8 font-light">Join the elite 1% of freelance professionals.</p>
                
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[14.5px] text-white/90 font-light">54 Live Expert Sessions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[14.5px] text-white/90 font-light">Draft 24+ Complex Contracts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[14.5px] text-white/90 font-light">Freelance on Upwork & LinkedIn</span>
                  </div>
                </div>
                
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
                
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <div className="text-[40px] font-light text-white leading-none flex items-center gap-3">
                      ₹24,999
                    </div>
                  </div>
                  <div className="text-right pb-1">
                    <div className="text-[15px] text-white/40 font-medium line-through mb-1">₹35,000</div>
                    <div className="text-[11px] text-green-400 font-bold uppercase tracking-wider bg-green-500/10 px-2 py-0.5 rounded-sm">Save 28%</div>
                  </div>
                </div>

                <button onClick={() => setIsApplyModalOpen(true)} className="w-full bg-white text-black py-4 rounded-xl text-center font-bold text-[15px] uppercase tracking-[0.1em] hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] flex justify-center items-center gap-2 group/btn">
                  ENROL NOW
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-1.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Setup By / Logos Section - Premium Marquee */}
      <section className="w-full bg-[#FAFAFA] relative z-20 py-16 border-t border-b border-gray-200 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center gap-10">
          <h2 className="text-[#1a2b4b]/60 font-medium text-[13px] tracking-[0.2em] uppercase text-center">Program Designed & Set Up By Industry Leaders</h2>
          
          <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex flex-shrink-0 w-max animate-marquee gap-24 pr-24 items-center">
              <div className="text-2xl font-bold font-serif italic text-[#1a2b4b] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 whitespace-nowrap">Khaitan & Co</div>
              <div className="text-2xl font-bold font-serif italic text-[#1a2b4b] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 whitespace-nowrap">Cyril Amarchand</div>
              <div className="text-2xl font-bold font-sans tracking-tighter text-[#1a2b4b] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 whitespace-nowrap">Trilegal</div>
              <div className="text-2xl font-bold font-serif italic text-[#1a2b4b] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 whitespace-nowrap">AZB & Partners</div>
              <div className="text-2xl font-bold font-sans tracking-tighter text-[#1a2b4b] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 whitespace-nowrap">Luthra and Luthra</div>
            </div>
            
            <div className="flex flex-shrink-0 w-max animate-marquee gap-24 pr-24 items-center" aria-hidden="true">
              <div className="text-2xl font-bold font-serif italic text-[#1a2b4b] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 whitespace-nowrap">Khaitan & Co</div>
              <div className="text-2xl font-bold font-serif italic text-[#1a2b4b] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 whitespace-nowrap">Cyril Amarchand</div>
              <div className="text-2xl font-bold font-sans tracking-tighter text-[#1a2b4b] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 whitespace-nowrap">Trilegal</div>
              <div className="text-2xl font-bold font-serif italic text-[#1a2b4b] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 whitespace-nowrap">AZB & Partners</div>
              <div className="text-2xl font-bold font-sans tracking-tighter text-[#1a2b4b] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 whitespace-nowrap">Luthra and Luthra</div>
            </div>
          </div>
        </div>
      </section>

        {/* ABOUT COURSE SECTION - Ultra Minimalist Layout */}
        <section className="w-full py-[100px] bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] border-b border-black/5">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20 relative">
              <span className="text-black/40 text-[10px] font-bold tracking-[0.25em] uppercase mb-4 block">Why Choose Us</span>
              <h2 className="font-sans font-light text-4xl md:text-5xl text-black leading-tight tracking-tight">
                About the Course
              </h2>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Minimal Card 1 - Premium Inverse Hover */}
              <motion.div variants={cardReveal} className="group bg-transparent border border-black/10 p-10 hover:bg-[#111] hover:border-[#111] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <Target className="h-6 w-6 text-black/80 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-6 stroke-[1.5]" />
                <h3 className="font-sans font-medium text-[18px] text-black group-hover:text-white transition-colors duration-500 tracking-tight mb-3">Fundamentals First</h3>
                <p className="text-[14px] text-black/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed font-light">
                  In the first two months, learn the absolute fundamentals of drafting contracts and get hands-on experience by reviewing and redrafting a sale deed all by yourself.
                </p>
              </motion.div>

              {/* Minimal Card 2 - Premium Inverse Hover */}
              <motion.div variants={cardReveal} className="group bg-transparent border border-black/10 p-10 hover:bg-[#111] hover:border-[#111] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <Briefcase className="h-6 w-6 text-black/80 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-6 stroke-[1.5]" />
                <h3 className="font-sans font-medium text-[18px] text-black group-hover:text-white transition-colors duration-500 tracking-tight mb-3">Specific Contract Focus</h3>
                <p className="text-[14px] text-black/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed font-light">
                  The next four months focus on real estate, IP, and business agreements (NDAs, MSAs, JV Agreements) with 7-8 LIVE sessions per month.
                </p>
              </motion.div>

              {/* Minimal Card 3 - Premium Inverse Hover */}
              <motion.div variants={cardReveal} className="group bg-transparent border border-black/10 p-10 hover:bg-[#111] hover:border-[#111] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <Globe className="h-6 w-6 text-black/80 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-6 stroke-[1.5]" />
                <h3 className="font-sans font-medium text-[18px] text-black group-hover:text-white transition-colors duration-500 tracking-tight mb-3">Freelancing Mastery</h3>
                <p className="text-[14px] text-black/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed font-light">
                  Includes monthly sessions on freelancing to help you build a profitable online profile on platforms like Upwork and earn money globally.
                </p>
              </motion.div>

              {/* Minimal Card 4 - Premium Inverse Hover */}
              <motion.div variants={cardReveal} className="group bg-transparent border border-black/10 p-10 hover:bg-[#111] hover:border-[#111] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <Award className="h-6 w-6 text-black/80 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-6 stroke-[1.5]" />
                <h3 className="font-sans font-medium text-[18px] text-black group-hover:text-white transition-colors duration-500 tracking-tight mb-3">Placement & Career Support</h3>
                <p className="text-[14px] text-black/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed font-light">
                  We train you to draft excellent CVs and cover letters, discover Upwork opportunities, and support you completely to apply and land roles confidently.
                </p>
              </motion.div>
            </motion.div>
            
            <div className="text-center max-w-3xl mx-auto mt-16 relative">
              <p className="text-[16px] text-black/70 leading-relaxed font-light mb-2">
                It’s a complete package for those who are serious about advancing their contract drafting skills and earning money through that.
              </p>
              <p className="text-[16px] text-black/70 leading-relaxed font-light">
                For a detailed course schedule (draft), please <a href="https://docs.google.com/document/d/1WDeHa90-mEcnmjQui3dI4WGDaHvpiXlazvsYgGmI-n4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="text-black font-medium border-b border-black/30 hover:border-black transition-colors pb-0.5">click here</a>.
              </p>
            </div>
          </div>
        </section>

        {/* WHY JOIN SECTION */}
        <section className="w-full py-[120px] bg-[#0a0a0a] relative overflow-hidden bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] border-t border-white/5 border-b border-black/5">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase mb-4 block">The Lawctopus Elite Advantage</span>
              <h2 className="font-sans font-medium text-3xl md:text-5xl text-white leading-tight tracking-tight">
                Why You Should Join This Course
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1: White Default -> Hovers to Black */}
              <motion.div variants={cardReveal} className="group bg-white border border-white/10 p-10 hover:bg-[#111] hover:border-[#111] transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1">
                <FileText className="h-6 w-6 text-black/80 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-6 stroke-[1.5]" />
                <h3 className="font-sans font-medium text-[18px] text-black group-hover:text-white transition-colors duration-500 tracking-tight mb-3">24 Essential Agreements</h3>
                <p className="text-[14px] text-black/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed font-light">
                  Learn to draft 24 essential, high-demand agreements with hands-on guidance through 54 live training sessions led by industry experts.
                </p>
              </motion.div>

              {/* Card 2: Black Default -> Hovers to White */}
              <motion.div variants={cardReveal} className="group bg-transparent border border-white/10 p-10 hover:bg-white hover:border-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:-translate-y-1">
                <Briefcase className="h-6 w-6 text-white/80 group-hover:text-black group-hover:scale-110 transition-all duration-500 mb-6 stroke-[1.5]" />
                <h3 className="font-sans font-medium text-[18px] text-white group-hover:text-black transition-colors duration-500 tracking-tight mb-3">Expertise in Key Areas</h3>
                <p className="text-[14px] text-white/60 group-hover:text-black/80 transition-colors duration-500 leading-relaxed font-light">
                  Develop drafting expertise in practice areas like: Real Estate, IPR, General Corporate, and International Contracts.
                </p>
              </motion.div>

              {/* Card 3: White Default -> Hovers to Black */}
              <motion.div variants={cardReveal} className="group bg-white border border-white/10 p-10 hover:bg-[#111] hover:border-[#111] transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1">
                <Globe className="h-6 w-6 text-black/80 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-6 stroke-[1.5]" />
                <h3 className="font-sans font-medium text-[18px] text-black group-hover:text-white transition-colors duration-500 tracking-tight mb-3">Freelancing Mastery</h3>
                <p className="text-[14px] text-black/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed font-light">
                  Get freelancing training from a top-rated Upwork expert, receive direct opportunities, and handle your first client confidently!
                </p>
              </motion.div>

              {/* Card 4: Black Default -> Hovers to White */}
              <motion.div variants={cardReveal} className="group bg-transparent border border-white/10 p-10 hover:bg-white hover:border-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:-translate-y-1">
                <MessageCircle className="h-6 w-6 text-white/80 group-hover:text-black group-hover:scale-110 transition-all duration-500 mb-6 stroke-[1.5]" />
                <h3 className="font-sans font-medium text-[18px] text-white group-hover:text-black transition-colors duration-500 tracking-tight mb-3">Personalised Feedback</h3>
                <p className="text-[14px] text-white/60 group-hover:text-black/80 transition-colors duration-500 leading-relaxed font-light">
                  Assignments: Draft 10 contracts and get personalised feedback on each. Use these 10 fine-tuned contracts in your UpWork portfolio!
                </p>
              </motion.div>

              {/* Card 5: White Default -> Hovers to Black */}
              <motion.div variants={cardReveal} className="group bg-white border border-white/10 p-10 hover:bg-[#111] hover:border-[#111] transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1">
                <TrendingUp className="h-6 w-6 text-black/80 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-6 stroke-[1.5]" />
                <h3 className="font-sans font-medium text-[18px] text-black group-hover:text-white transition-colors duration-500 tracking-tight mb-3">Accelerate Your Career</h3>
                <p className="text-[14px] text-black/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed font-light">
                  Save 4 years of your legal career! Learn in 6 months exactly what a typical lawyer learns in 4-5 years of practice.
                </p>
              </motion.div>

              {/* Card 6: Black Default -> Hovers to White */}
              <motion.div variants={cardReveal} className="group bg-transparent border border-white/10 p-10 hover:bg-white hover:border-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:-translate-y-1">
                <InfinityIcon className="h-6 w-6 text-white/80 group-hover:text-black group-hover:scale-110 transition-all duration-500 mb-6 stroke-[1.5]" />
                <h3 className="font-sans font-medium text-[18px] text-white group-hover:text-black transition-colors duration-500 tracking-tight mb-3">Lifetime Access</h3>
                <p className="text-[14px] text-white/60 group-hover:text-black/80 transition-colors duration-500 leading-relaxed font-light">
                  Get lifetime access to all the course materials including recorded lectures, reading resources, drafts, and live session recordings.
                </p>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* SECTION 4: THE TRANSFORMATION SECTION */}
        <section className="w-full py-[140px] bg-white relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] border-b border-black/5">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-black/40 text-[10px] font-bold tracking-[0.25em] uppercase mb-4 block">Career Catalyst</span>
              <h2 className="font-sans font-medium text-3xl md:text-5xl text-black mt-3 leading-tight tracking-tight">Where You&apos;ll Be After 6 Months</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Before Card */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeInLeft} className="bg-transparent border border-black/10 p-10 relative overflow-hidden transition-all duration-300">
                <div className="flex items-center gap-3 mb-10">
                  <div className="h-8 w-8 rounded-none border border-black/20 text-black/60 flex items-center justify-center font-bold text-sm">✕</div>
                  <h3 className="font-sans text-[22px] font-medium text-black tracking-tight">The Before</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Confused about drafting real-world commercial contracts",
                    "Zero international freelancing income",
                    "Weak or nonexistent LinkedIn professional profile",
                    "No professional portfolio to show recruiters or clients",
                    "Lack of confidence in negotiating terms with counterparties"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="text-black/30 font-bold mt-0.5 flex-shrink-0">✕</span>
                      <span className="text-black/60 text-[15px] font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* After Card */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeInRight} className="bg-[#111] border border-[#111] p-10 relative overflow-hidden transition-all duration-300 shadow-2xl hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-10">
                  <div className="h-8 w-8 rounded-none bg-white text-black flex items-center justify-center font-bold text-sm">✓</div>
                  <h3 className="font-sans text-[22px] font-medium text-white tracking-tight">The After (Transformative Future)</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Draft 24+ complex commercial agreements with absolute confidence",
                    "Establish a recurring, global freelance income stream on Upwork",
                    "Launch a highly polished, lead-generating LinkedIn brand",
                    "Possess an impressive, vetted drafting portfolio of 24+ documents",
                    "Master advanced negotiation strategies under corporate partner mentors"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="text-white/80 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-white/90 text-[15px] font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* COURSES AND COSTS SECTION */}
        <section id="investment" className="w-full py-[140px] bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px]">
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase mb-4 block">Investment</span>
              <h2 className="font-sans font-light text-3xl md:text-5xl text-white leading-tight tracking-tight">
                Courses and Costs
              </h2>
              <p className="text-white/60 mt-4 text-[16px] font-light">Lawctopus Law School currently offers 2 courses in the field of Contract Drafting and Negotiation.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Premium 6-Month Course Card */}
              <div className="bg-[#111] p-10 border border-white/20 relative overflow-hidden flex flex-col justify-between transform md:-translate-y-4 shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-6 transition-transform duration-500">
                <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2 z-10">
                  Most Popular
                </div>
                
                <div>
                  <h3 className="font-sans font-medium text-2xl text-white mb-2 pr-12 tracking-tight">6-Month Course on Mastering Contract Drafting & Freelancing</h3>
                  <div className="mt-8 flex items-baseline gap-4">
                    <span className="text-5xl font-sans font-medium text-white tracking-tight">₹24,999</span>
                    <span className="text-lg text-white/30 line-through font-light">₹60,000</span>
                  </div>
                  <p className="text-white/80 text-[14px] font-medium mt-3 uppercase tracking-wider">Save over 58% today!</p>
                </div>
                
                <div className="mt-12">
                  <button onClick={() => setIsApplyModalOpen(true)} className="w-full bg-white hover:bg-white/90 text-black text-[15px] font-semibold px-8 py-5 transition-all duration-300 flex items-center justify-center gap-3">
                    Enroll Now <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Standard 2-Month Course Card */}
              <div className="bg-transparent p-10 border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-500">
                <div>
                  <h3 className="font-sans font-medium text-2xl text-white mb-2 tracking-tight">2-Month Online Certificate Course on Contract Drafting & Negotiation</h3>
                  <div className="mt-8">
                    <span className="text-4xl font-sans font-medium text-white tracking-tight">₹7,999</span>
                  </div>
                </div>
                
                <div className="mt-12">
                  <button onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-transparent border border-white/20 hover:border-white hover:bg-white hover:text-black text-white text-[15px] font-medium px-8 py-5 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT LAWCTOPUS LAW SCHOOL */}
        <section className="w-full py-[140px] bg-white border-b border-black/5 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInLeft}>
                <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl text-black mb-8 leading-[1.1] tracking-tight">
                  About Lawctopus <br/> <span className="font-medium">Law School</span>
                </h2>
                <p className="text-black/70 text-[17px] leading-relaxed font-light max-w-xl mb-10">
                  Lawctopus Law School has taught a wide range of practical skills to over <strong className="font-medium text-black">20,000+</strong> law students, young lawyers, professionals, academicians, and business people.
                </p>
                <div className="pl-6 border-l-[3px] border-black">
                  <p className="text-black text-xl md:text-2xl font-light italic leading-snug">
                    "Our online courses are 'warm' learning experiences!"
                  </p>
                </div>
              </motion.div>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeInRight} className="flex flex-col sm:flex-row gap-6">
                <div className="group bg-transparent border border-black/10 hover:border-black/30 p-10 flex-1 flex flex-col justify-center items-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <div className="text-5xl lg:text-6xl font-sans font-medium text-black mb-3 tracking-tighter">20k+</div>
                  <div className="text-black/40 text-[11px] font-bold uppercase tracking-[0.2em]">Learners Taught</div>
                </div>
                <div className="group bg-transparent border border-black/10 hover:border-black/30 p-10 flex-1 flex flex-col justify-center items-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <div className="text-5xl lg:text-6xl font-sans font-medium text-black mb-3 tracking-tighter flex items-baseline justify-center">93<span className="text-2xl lg:text-3xl font-light text-black/50 ml-1">/100</span></div>
                  <div className="text-black/40 text-[11px] font-bold uppercase tracking-[0.2em]">Avg Rating (1k+ Reviews)</div>
                </div>
              </motion.div>
            </div>
            
            {/* 9 UNIQUE ELEMENTS (Integrated into this white section) */}
            <div className="mt-[160px] pt-[80px] border-t border-black/10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-20 relative">
                <span className="text-black/40 text-[10px] font-bold tracking-[0.25em] uppercase mb-4 block">Features</span>
                <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl text-black leading-tight tracking-tight">
                  9 Unique Elements of the Online Course
                </h2>
              </motion.div>
              
              <div className="max-w-[1200px] mx-auto border-t border-black/10 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-7">
                  {[
                  { title: "Well-researched, practical & detailed reading resources" },
                  { title: "Weekly Live Sessions for the first 2 months" },
                  { title: "7-8 Live Sessions per month for the next 4 months" },
                  { title: "Learn drafting clauses and agreements first-hand with our Faculty" },
                  { title: "Recorded lectures by Industry Experts" },
                  { title: "Understanding International Contracts & Agreements" },
                  { title: "Monthly Freelancing & Networking Sessions" },
                  { 
                    title: "Practical Assignments on real-life scenarios", 
                    desc: "Draft and Get Feedback on 9 Types Agreements: Sale Deed, Software Licensing Agreement, Non-Disclosure Agreement, Return & Refund Policy, Trademark Licensing Agreement, Franchisee Agreement, Power of Attorney, Shareholders Agreement, Joint Venture Agreement" 
                  },
                  { 
                    title: "Get detailed and individualized feedback on each of your drafts", 
                    desc: "click_here_special" 
                  }
                ].map((item, index) => (
                  <div key={index} className="group border-b border-black/10 py-8 md:py-10 flex flex-col md:flex-row md:items-start gap-6 hover:bg-black/[0.02] transition-colors px-6 md:px-10">
                    <div className="text-2xl font-sans font-medium text-black/30 w-16 flex-shrink-0 group-hover:text-black transition-colors pt-1 tracking-tighter">
                      {`0${index + 1}`}
                    </div>
                    <div>
                      <h3 className="font-sans font-medium text-2xl text-black tracking-tight group-hover:text-[#164336] transition-colors">{item.title}</h3>
                      {item.desc === "click_here_special" ? (
                        <p className="text-black/60 font-light leading-relaxed text-[15.5px] mt-3 max-w-4xl">
                          You will draft 9 types of agreements as part of this course, with each assignment thoroughly evaluated by the faculty. Personalized feedback will be provided to every learner. Details in the Weekly structure.{" "}
                          <a href="https://docs.google.com/document/d/1WDeHa90-mEcnmjQui3dI4WGDaHvpiXlazvsYgGmI-n4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="text-[#164336] font-medium border-b border-[#164336]/30 hover:border-[#164336] transition-colors pb-0.5">Click here</a>.
                        </p>
                      ) : item.desc && <p className="text-black/60 font-light leading-relaxed text-[15.5px] mt-3 max-w-4xl">{item.desc}</p>}
                    </div>
                  </div>
                ))}
                </div>
                <div className="lg:col-span-5 hidden lg:flex flex-col justify-center sticky top-24 max-h-[80vh]">
                  <Image src="/3.png" alt="Student Reading" width={800} height={800} className="w-full max-w-none object-contain ml-auto mr-[-2rem] mix-blend-multiply opacity-95 drop-shadow-xl scale-[1.7] transform translate-x-12 origin-center" />
                </div>
              </div>

              <div className="max-w-5xl mx-auto mt-12 px-6 md:px-10">
                <div className="bg-[#164336]/5 border border-[#164336]/10 p-8 md:p-10">
                  <p className="text-black/70 text-[16px] leading-relaxed font-light">
                    You will draft <span className="font-medium text-black">9 types of agreements</span> as part of this course, with each assignment thoroughly evaluated by the faculty. <span className="font-medium text-black">Personalized feedback</span> will be provided to every learner. Details in the Weekly structure.{" "}
                    <a href="https://docs.google.com/document/d/1WDeHa90-mEcnmjQui3dI4WGDaHvpiXlazvsYgGmI-n4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="text-[#164336] font-medium border-b border-[#164336]/30 hover:border-[#164336] transition-colors pb-0.5">Click here</a>.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* HOW WILL THIS COURSE HELP YOU */}
        <section className="w-full py-[140px] bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20 relative">
              <span className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase mb-4 block">Outcomes</span>
              <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
                How Will This Course Help You?
              </h2>
            </motion.div>

            <div className="w-full flex justify-center mb-24 opacity-80 mix-blend-screen">
              <Image src="/4.png" alt="Learning Experience" width={800} height={500} className="w-full max-w-[700px] object-contain filter invert" />
            </div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={staggerFast} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Law students will be able to ace Law Firm internships and get freelance opportunities",
                "Lawyers (with 0-4 years of experience) will be able to earn additional income through contract drafting skills",
                "Learn to network better and generate income",
                "Become familiar in using freelancing platforms",
                "Learn to negotiate well in your daily life, during apartment hunting, job interviews, salary negotiations, M&A transactions, etc.",
                "It will save 3-4 years of your legal career! What a lawyer learns after 3-4 years of practice, you’d have learned in 6 months.",
                "Learn about international agreements, including arbitration rules and governing laws, thus enhancing the scope of your freelancing.",
                "Learn the nuances of drafting terms and conditions for websites and offer your services to the increasingly digital world.",
                "The live sessions will make you an expert of 24+ most in-demand agreements in India.",
                "Build strong profiles on platforms like Upwork, Fiverr, and LinkedIn.",
                "Get expert mentorship to navigate freelancing with confidence.",
                "Learn to write winning proposals that help you land projects.",
                "Create standout CVs and cover letters for internships and jobs.",
                "Master networking to build valuable professional connections.",
                "Learn practical negotiation skills for salaries and career growth."
              ].map((point, index) => (
                <motion.div variants={cardReveal} key={index} className="group relative bg-transparent border border-white/10 p-8 hover:bg-white transition-all duration-500 overflow-hidden">
                  <div className="absolute -bottom-6 -right-2 text-[100px] font-bold text-white/[0.03] group-hover:text-black/[0.05] transition-colors duration-500 font-sans tracking-tighter select-none">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="relative z-10 flex flex-col h-full justify-center">
                    <div className="w-8 h-[1px] bg-white/30 group-hover:bg-black/30 mb-6 transition-colors duration-500"></div>
                    <p className="text-white/70 group-hover:text-black text-[15px] leading-relaxed font-light transition-colors duration-500">
                      {point}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* WHO CAN ENROLL */}
        <section className="w-full py-24 bg-white border-y border-black/5 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]">
          {/* Subtle animated background glow */}
          <div className="absolute top-1/2 right-0 w-[600px] h-[300px] bg-[#164336] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
          
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center justify-between">
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInLeft} className="md:w-1/3 flex flex-col justify-between">
                <div>
                  <span className="text-[#164336] text-[10px] font-bold tracking-[0.25em] uppercase block mb-4">Target Audience</span>
                  <h2 className="font-sans font-light text-4xl lg:text-5xl text-charcoal leading-tight tracking-tight">Who can enroll<br/>for this course?</h2>
                </div>
                <div className="hidden md:block mt-12 mix-blend-multiply opacity-95">
                  <Image src="/6.png" alt="Professional" width={500} height={500} className="w-full object-contain scale-[1.35] transform origin-top" />
                </div>
              </motion.div>

              <div className="md:w-2/3 border-t border-black/10">
                {[
                  { text: "Law Students", icon: <Users className="h-5 w-5" /> },
                  { text: "Young lawyers wanting to start earning through contract drafting", icon: <Briefcase className="h-5 w-5" /> },
                  { text: "Academicians", icon: <Award className="h-5 w-5" /> },
                  { text: "Freelancing Enthusiasts", icon: <Laptop className="h-5 w-5" /> }
                ].map((item, i) => (
                  <div key={i} className="py-8 border-b border-black/10 flex gap-8 items-center group hover:bg-black/5 transition-colors px-6 cursor-default">
                    <div className="h-12 w-12 rounded-full border border-black/10 group-hover:border-[#164336] group-hover:bg-[#164336] group-hover:text-white transition-all flex items-center justify-center flex-shrink-0 text-black/40 duration-300">
                      {item.icon}
                    </div>
                    <div className="text-2xl font-light text-black transition-colors duration-300 leading-snug">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MEET YOUR FACULTY */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="w-full py-[140px] bg-[#0a0a0a] border-t border-white/10 relative">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px]">
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase block mb-4">Course Developers</span>
              <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">Meet Your Faculty</h2>
              <p className="text-white/50 text-lg mt-6 font-light">Learn drafting clauses and agreements first-hand from industry experts, leading practitioners, and firm partners.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {facultyMembers.map((faculty, i) => (
                <motion.div variants={fadeInUp} key={i} className="group border-t border-white/10 pt-8 hover:border-white/40 transition-colors duration-500">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-[#164336]/40 group-hover:border-[#164336] transition-colors duration-500">
                    <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="text-2xl text-white font-medium mb-1 tracking-tight">{faculty.name}</h3>
                  <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-4">{faculty.role}</p>
                  <p className="text-white/60 font-light text-[14.5px] leading-relaxed">{faculty.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-32 pt-20 border-t border-white/10">
              <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase block mb-4">Placement Support</span>
                <h2 className="font-sans font-light text-3xl md:text-4xl text-white leading-tight tracking-tight">Career Advancement Cell</h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {careerCell.map((person, i) => (
                  <motion.div variants={fadeInUp} key={i} className="group p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#164336]/40 group-hover:border-[#164336] transition-colors duration-500">
                      <img src={person.image} alt={person.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h3 className="text-xl text-white font-medium mb-1 tracking-tight">{person.name}</h3>
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-6">{person.role}</p>
                    <div className="space-y-4">
                      <div>
                        <span className="text-white/30 text-[10px] uppercase tracking-widest block mb-1">Education</span>
                        <p className="text-white/60 font-light text-sm">{person.education}</p>
                      </div>
                      <div>
                        <span className="text-white/30 text-[10px] uppercase tracking-widest block mb-1">Experience</span>
                        <p className="text-white/60 font-light text-sm">{person.experience}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>



        {/* CAREER AND PLACEMENT SUPPORT */}
        <section className="w-full py-[140px] bg-white border-b border-black/5 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-20 relative">
              <span className="text-black/40 text-[10px] font-bold tracking-[0.25em] uppercase mb-4 block">Placement</span>
              <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl text-black leading-tight tracking-tight">
                Career and Placement Support
              </h2>
              <p className="text-black/60 text-[16px] mt-6 font-light">Provided to Students of &apos;Mastering Contract Drafting and Freelancing&apos;</p>
            </motion.div>
            
            {/* Big Skill Building Block */}
            <div className="w-full bg-transparent border border-black/10 p-10 md:p-16 mb-8 hover:border-black/30 transition-all duration-500 hover:shadow-2xl">
              <div className="mb-12 border-b border-black/10 pb-8">
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/40 mb-3">01.</div>
                <h3 className="font-sans font-medium text-3xl md:text-4xl text-black tracking-tight">Skill Building: 22 Live Sessions on Career Skills</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                <div>
                  <h4 className="font-sans font-medium text-xl text-black mb-4">CV Drafting and LinkedIn Profile</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start text-black/70 font-light text-[15px]"><span className="text-black font-medium mt-0.5">✓</span> Drafting CVs & get personalised feedback</li>
                    <li className="flex gap-3 items-start text-black/70 font-light text-[15px]"><span className="text-black font-medium mt-0.5">✓</span> Build an excellent LinkedIn Profile with live feedback</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-xl text-black mb-4">Cover Letter Drafting</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start text-black/70 font-light text-[15px]"><span className="text-black font-medium mt-0.5">✓</span> Learn drafting Cover Letters to secure jobs</li>
                    <li className="flex gap-3 items-start text-black/70 font-light text-[15px]"><span className="text-black font-medium mt-0.5">✓</span> Draft for your dream job & get personal feedback</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-xl text-black mb-4">Networking and Negotiation</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start text-black/70 font-light text-[15px]"><span className="text-black font-medium mt-0.5">✓</span> Learn nuances of networking effectively</li>
                    <li className="flex gap-3 items-start text-black/70 font-light text-[15px]"><span className="text-black font-medium mt-0.5">✓</span> Negotiation skills for salary & career</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-xl text-black mb-4">UpWork and Fiverr Freelancing</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start text-black/70 font-light text-[15px]"><span className="text-black font-medium mt-0.5">✓</span> Advanced tips & techniques for UpWork</li>
                    <li className="flex gap-3 items-start text-black/70 font-light text-[15px]"><span className="text-black font-medium mt-0.5">✓</span> How to use Fiverr successfully</li>
                  </ul>
                </div>
                <div className="md:col-span-2 border-t border-black/10 pt-8 mt-4">
                  <h4 className="font-sans font-medium text-xl text-black mb-4">Subject Specific Freelancing Skills</h4>
                  <ul className="space-y-3 grid md:grid-cols-2 gap-4">
                    <li className="flex gap-3 items-start text-black/70 font-light text-[15px]"><span className="text-black font-medium mt-0.5">✓</span> Legal research, drafting & writing projects</li>
                    <li className="flex gap-3 items-start text-black/70 font-light text-[15px]"><span className="text-black font-medium mt-0.5">✓</span> Trademark, copyright, data protection, tech contracts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Grid for points 2, 3, 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-transparent border border-black/10 p-10 hover:border-black/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/40 mb-3">02.</div>
                <h4 className="font-sans font-medium text-2xl text-black mb-4 tracking-tight">Opportunities Sharing</h4>
                <p className="text-black/70 font-light leading-relaxed">Exclusive WhatsApp Groups for Internships, Jobs, and Freelancing Opportunities.</p>
              </div>
              <div className="bg-transparent border border-black/10 p-10 hover:border-black/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/40 mb-3">03.</div>
                <h4 className="font-sans font-medium text-2xl text-black mb-4 tracking-tight">Dedicated Support</h4>
                <p className="text-black/70 font-light leading-relaxed">Sharing your profiles directly with partner organisations for internships and CV reviews.</p>
              </div>
              <div className="bg-transparent border border-black/10 p-10 hover:border-black/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/40 mb-3">04.</div>
                <h4 className="font-sans font-medium text-2xl text-black mb-4 tracking-tight">One-on-One Coaching</h4>
                <p className="text-black/70 font-light leading-relaxed">Bi-monthly, one-to-one, 30-45 minutes long career coaching session with LLS’ founders and faculty.</p>
              </div>
            </div>
          </div>
        </section>
        {/* FEES AND BENEFITS */}
        <section className="w-full py-[140px] bg-[#0a0a0a] border-y border-white/10 relative overflow-hidden bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              
              {/* Course Fees Column */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInLeft}>
                <span className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase block mb-4">Investment</span>
                <h2 className="font-sans font-light text-4xl md:text-5xl text-white leading-tight tracking-tight mb-6">Course Fees</h2>
                <p className="text-white/70 text-lg font-light mb-10 max-w-md leading-relaxed">
                  Lawctopus Law School has 2 different courses to learn Contract Drafting and Negotiation.
                </p>

                <div className="space-y-6">
                  {/* 6 Months Course */}
                  <div className="p-8 md:p-10 border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-500 shadow-xl hover:shadow-2xl relative overflow-hidden group flex flex-col justify-between">
                    <div>
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#164336] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                      <span className="inline-block py-1.5 px-3 bg-white/5 text-white/80 text-[10px] font-bold tracking-widest uppercase mb-6">6 Months LIVE Expert-Level</span>
                      <div className="flex items-end gap-4 mb-8">
                        <span className="text-4xl md:text-5xl font-light text-white tracking-tight">Rs. 24,999/-</span>
                        <span className="text-xl text-white/30 line-through mb-1.5">Rs. 60,000</span>
                      </div>
                    </div>
                    <button className="w-full bg-white text-black py-4 rounded-full font-medium text-[13px] tracking-wide hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group-hover:shadow-lg">
                      Enroll Now <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* 2 Months Course */}
                  <div className="p-8 md:p-10 border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-500 shadow-sm hover:shadow-md relative overflow-hidden group flex flex-col justify-between">
                    <div>
                      <div className="absolute top-0 left-0 w-1 h-full bg-white/20 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                      <span className="inline-block py-1.5 px-3 bg-white/5 text-white/60 text-[10px] font-bold tracking-widest uppercase mb-6">2 Months LIVE Course</span>
                      <div className="flex items-end gap-3 mb-8">
                        <span className="text-4xl font-light text-white tracking-tight">Rs. 7,999/-</span>
                      </div>
                    </div>
                    <button className="w-full bg-transparent border border-white/20 text-white py-4 rounded-full font-medium text-[13px] tracking-wide hover:bg-white hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:border-black">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Add-on Benefits Column */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInRight}>
                <span className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase block mb-4">Extras</span>
                <h2 className="font-sans font-light text-4xl md:text-5xl text-white leading-tight tracking-tight mb-12">Add-on Benefits</h2>
                
                <div className="space-y-10">
                  <div className="flex gap-6 items-start group">
                    <div className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#164336]/5 group-hover:border-[#164336]/20 transition-colors duration-500">
                      <Award className="h-6 w-6 text-white/40 group-hover:text-white/40 transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2 tracking-tight">Completion Certificates</h4>
                      <p className="text-white/60 font-light leading-relaxed text-[15.5px]">Issued by Lawctopus Law School after completing the course.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#164336]/5 group-hover:border-[#164336]/20 transition-colors duration-500">
                      <Star className="h-6 w-6 text-white/40 group-hover:text-white/40 transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2 tracking-tight">Merit Certificates</h4>
                      <p className="text-white/60 font-light leading-relaxed text-[15.5px]">Awarded to best-performing learners.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#164336]/5 group-hover:border-[#164336]/20 transition-colors duration-500">
                      <Play className="h-6 w-6 text-white/40 group-hover:text-white/40 transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2 tracking-tight">Free Webinars</h4>
                      <p className="text-white/60 font-light leading-relaxed text-[15.5px]">Access to webinars on contract drafting, contract lifecycle management, etc., are given for free.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#164336]/5 group-hover:border-[#164336]/20 transition-colors duration-500">
                      <Users className="h-6 w-6 text-white/40 group-hover:text-white/40 transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2 tracking-tight">LLS Alumni Groups</h4>
                      <p className="text-white/60 font-light leading-relaxed text-[15.5px]">Available for exclusive internship/job notifications and discounts on courses/workshops.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* AI-READY LEGAL CAREERS */}
        <section className="w-full py-[140px] bg-white border-y border-black/5 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-20">
              <span className="text-[#164336] text-[10px] font-bold tracking-[0.25em] uppercase block mb-4">Future Proof</span>
              <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight tracking-tight mb-8">Building AI-Ready Legal Careers</h2>
              <p className="text-charcoal/70 text-lg leading-relaxed font-light mb-6">
                Lawctopus Law School (LLS) believes that AI is no longer optional for lawyers; it is fast becoming a core professional skill. At the same time, we strongly believe that AI must be used responsibly and ethically.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed font-light">
                Over the last 6 months, the LLS team has actively trained itself in the latest applications of AI across legal research, drafting, litigation support, and career development.
              </p>
            </motion.div>

            <h3 className="text-3xl font-light text-center text-charcoal mb-16 tracking-tight">How We Teach AI at Lawctopus Law School</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
              
              {/* Point 1 */}
              <div className="relative group">
                <span className="absolute -top-10 -left-6 text-[120px] font-bold text-black/[0.03] leading-none z-0 transition-colors duration-500 group-hover:text-[#164336]/10">01</span>
                <div className="relative z-10">
                  <h4 className="text-2xl text-charcoal font-medium mb-4 tracking-tight">LIVE AI Sessions with Leading Legal-Tech Organisations</h4>
                  <p className="text-charcoal/70 font-light mb-6">We have tied up with two of India’s most credible AI-driven legal platforms: <strong>Indian Kanoon (Prism)</strong> and <strong>Jurisphere</strong>. Each will conduct regular LIVE sessions (60–90 mins) for LLS learners, typically once every month or two.</p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start text-charcoal/70 font-light text-[15px]"><span className="text-[#164336] mt-0.5">✓</span> Practical demonstrations of AI tools in Indian legal work</li>
                    <li className="flex gap-3 items-start text-charcoal/70 font-light text-[15px]"><span className="text-[#164336] mt-0.5">✓</span> Real use cases in research, drafting, litigation, and analysis</li>
                    <li className="flex gap-3 items-start text-charcoal/70 font-light text-[15px]"><span className="text-[#164336] mt-0.5">✓</span> Understanding where AI can and cannot be used</li>
                  </ul>
                </div>
              </div>

              {/* Point 2 */}
              <div className="relative group">
                <span className="absolute -top-10 -left-6 text-[120px] font-bold text-black/[0.03] leading-none z-0 transition-colors duration-500 group-hover:text-[#164336]/10">02</span>
                <div className="relative z-10">
                  <h4 className="text-2xl text-charcoal font-medium mb-4 tracking-tight">4-Hour Recorded Workshop: AI for Lawyers</h4>
                  <p className="text-charcoal/70 font-light mb-6">All LLS learners receive access to a 4-hour recorded workshop (4 sessions) recorded by Himansh Wadhwa and Shruti Kaushik, Legal Product Developers at Indian Kanoon, ensuring technical depth and legal accuracy.</p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start text-charcoal/70 font-light text-[15px]"><span className="text-[#164336] mt-0.5">✓</span> Using AI for Legal Research & Argumentation</li>
                    <li className="flex gap-3 items-start text-charcoal/70 font-light text-[15px]"><span className="text-[#164336] mt-0.5">✓</span> Using AI for Legal & Contract Drafting</li>
                    <li className="flex gap-3 items-start text-charcoal/70 font-light text-[15px]"><span className="text-[#164336] mt-0.5">✓</span> Technology & Ethics Behind AI in Law</li>
                  </ul>
                </div>
              </div>

              {/* Point 3 */}
              <div className="relative group">
                <span className="absolute -top-10 -left-6 text-[120px] font-bold text-black/[0.03] leading-none z-0 transition-colors duration-500 group-hover:text-[#164336]/10">03</span>
                <div className="relative z-10">
                  <h4 className="text-2xl text-charcoal font-medium mb-4 tracking-tight">Complimentary Access to Prism (Indian Kanoon)</h4>
                  <p className="text-charcoal/70 font-light mb-6">Every learner receives 1-month complimentary access to Indian Kanoon’s AI tool, Prism, enabling our learners to practice hands-on.</p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-start text-charcoal/70 font-light text-[15px]"><span className="text-[#164336] mt-0.5">✓</span> Faster and smarter legal research</li>
                    <li className="flex gap-3 items-start text-charcoal/70 font-light text-[15px]"><span className="text-[#164336] mt-0.5">✓</span> Drafting and refining legal documents and contracts</li>
                    <li className="flex gap-3 items-start text-charcoal/70 font-light text-[15px]"><span className="text-[#164336] mt-0.5">✓</span> Exploring real-world use cases on India’s largest caselaw repository</li>
                  </ul>
                </div>
              </div>

              {/* Point 4 */}
              <div className="relative group">
                <span className="absolute -top-10 -left-6 text-[120px] font-bold text-black/[0.03] leading-none z-0 transition-colors duration-500 group-hover:text-[#164336]/10">04</span>
                <div className="relative z-10">
                  <h4 className="text-2xl text-charcoal font-medium mb-4 tracking-tight">AI Guidance from Faculty & Mentors</h4>
                  <p className="text-charcoal/70 font-light">Beyond tools and workshops, AI is actively discussed inside select live classes. Our Faculty and Course Mentors regularly explain how AI can be used to improve performance in corporate law, contract drafting, and build stronger CVs and portfolios. We focus on how AI enhances, not replaces, sound legal thinking.</p>
                </div>
              </div>

              {/* Point 5 */}
              <div className="relative group md:col-span-2">
                <span className="absolute -top-10 -left-6 text-[120px] font-bold text-black/[0.03] leading-none z-0 transition-colors duration-500 group-hover:text-[#164336]/10">05</span>
                <div className="relative z-10">
                  <h4 className="text-2xl text-charcoal font-medium mb-4 tracking-tight">Access to a 31-page eBook on AI Prompts</h4>
                  <p className="text-charcoal/70 font-light mb-6 max-w-4xl">Developed exclusively with Himansh Wadhwa, this AI Prompts Library is a curated collection of ready-to-use prompts bridging the gap between knowing AI exists and knowing what to ask it.</p>
                  <div className="flex flex-wrap gap-3">
                    {["Contract Drafting", "Legal Research & Mooting", "Litigation", "Corporate Law", "IPR", "Legal Careers"].map((tag, i) => (
                      <span key={i} className="py-2 px-4 bg-black/5 text-charcoal/70 text-[12px] uppercase tracking-widest font-bold rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* COMPARISON OF THE 2 COURSES */}
        <section id="comparison" className="w-full py-[140px] bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-20">
              <span className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase block mb-4">Find Your Fit</span>
              <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-8">Comparison of the 2 Courses</h2>
            </motion.div>
            
            <div className="overflow-x-auto pb-8">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr>
                    <th className="p-6 text-left border-b border-white/10 w-1/3"></th>
                    <th className="p-6 text-left border-b border-white/10 border-l border-white/10 w-1/3">
                      <h4 className="text-xl text-white font-medium">Course A</h4>
                      <p className="text-white/50 text-[13px] font-light mt-2">2-Month Long Online Certificate Course on Contract Drafting</p>
                    </th>
                    <th className="p-6 text-left border-b border-white/10 border-l border-white/10 bg-white/[0.02] w-1/3">
                      <div className="inline-block py-1 px-3 bg-[#164336] text-white text-[9px] font-bold uppercase tracking-widest mb-3">Expert Level</div>
                      <h4 className="text-xl text-white font-medium">Course B</h4>
                      <p className="text-white/50 text-[13px] font-light mt-2">6-Month Long Course on Contract Drafting and Freelancing</p>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[14.5px]">
                  {[
                    ["GOAL", "Begin to master contract drafting", "Become an expert contract drafting + start earning money as a freelancer"],
                    ["TYPE", "LIVE", "LIVE"],
                    ["TOTAL NUMBER OF LIVE CLASSES", "8", "44"],
                    ["PRICE", "Rs. 7999", "Rs. 24,999/-"],
                    ["DURATION", "2 Months", "6 Months"],
                    ["LIVE LECTURES", "Weekly live lectures", "Weekly for first 2 months, then 7-8 sessions per month for next 4 months"],
                    ["ELIGIBILITY", "Those wanting to learn fundamentals of contract drafting", "Those wanting to learn everything from scratch to expert-level"],
                    ["IDEAL CANDIDATES", "Young law students, experienced lawyers, business professionals, CAs", "Young law students, lawyers, business professionals, negotiators, CAs"],
                    ["TIME COMMITMENT REQUIRED", "4-5 hours/week for professionals; 5-6 hours/week for students", "5-6 hours/week for professionals; 6-7 hours/week for students"],
                    ["COMPULSORY ASSIGNMENTS", "2 assignments", "10 assignments"],
                    ["NO. OF PAGES IN READING MODULES", "202 pages of practical reading modules", "800 pages total"],
                    ["DURATION OF RECORD LECTURES", "8 hours 38 minutes", "32 hours 3 minutes"],
                    ["DURATION OF LIVE LECTURES", "13 hours", "63 hours"],
                    ["NEGOTIATION MODULE", "Fundamentals", "Expert-level"],
                    ["CAREER SESSIONS TO BECOME FREELANCER", "NO", "YES"],
                    ["NETWORKING SESSIONS", "NO", "YES"],
                    ["MONEY-BACK GUARANTEE", "YES", "YES"],
                  ].map((row, i) => (
                    <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                      <td className="p-6 border-b border-white/10 text-white/40 text-[11px] font-bold tracking-[0.1em] uppercase">{row[0]}</td>
                      <td className="p-6 border-b border-white/10 border-l border-white/10 text-white/70 font-light">{row[1]}</td>
                      <td className="p-6 border-b border-white/10 border-l border-white/10 bg-white/[0.01] group-hover:bg-white/[0.03] text-white font-light transition-colors">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>


        {/* MONEY BACK GUARANTEE */}
        <section className="w-full py-[140px] bg-white border-y border-black/5 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn} className="max-w-[1100px] mx-auto mb-20 flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#164336]/10 text-[#164336] mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h2 className="font-sans text-charcoal leading-[1.05] tracking-tight mb-8">
                  <span className="block text-6xl md:text-7xl lg:text-8xl font-light mb-2 text-[#164336]">100%</span>
                  <span className="block text-4xl md:text-5xl lg:text-6xl font-medium">Money-Back</span>
                  <span className="block text-4xl md:text-5xl lg:text-6xl font-light">Guarantee</span>
                </h2>
                <p className="text-charcoal/70 text-lg leading-relaxed font-light mb-6">
                  We truly believe our courses will enhance your legal skills, confidence, and career prospects.
                </p>
                <p className="text-charcoal/70 text-lg leading-relaxed font-light font-medium text-charcoal">
                  If you complete any of our courses &quot;sincerely&quot; and still feel it didn&apos;t add value to your career, we&apos;ll refund 100% of your fee; no questions asked.
                </p>
              </div>
              <div className="md:w-1/2 hidden md:flex justify-center mix-blend-multiply opacity-90">
                <Image src="/7.png" alt="Guarantee" width={500} height={500} className="w-full max-w-[450px] object-contain" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto border-t border-black/10 pt-16">
              <div>
                <h3 className="text-2xl text-charcoal font-medium mb-8 tracking-tight">Course Completion Requirements</h3>
                <p className="text-charcoal/70 font-light mb-6 text-[15px]">To qualify for the money-back guarantee, you must "sincerely" complete the course, which means:</p>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black/5 text-black flex items-center justify-center text-[10px] font-bold">1</span>
                    <span className="text-charcoal/70 font-light text-[15px]">Attend at least 66% of the live classes (with your video turned ON).</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black/5 text-black flex items-center justify-center text-[10px] font-bold">2</span>
                    <span className="text-charcoal/70 font-light text-[15px]">Submit all assignments and receive a passing grade in each. (If you don't pass on the first attempt, one additional attempt will be provided per assignment).</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black/5 text-black flex items-center justify-center text-[10px] font-bold">3</span>
                    <span className="text-charcoal/70 font-light text-[15px]">Email us at support@lawctopus.com within 10 days after completion of your batch's closing session with the subject line 'Request for Refund'.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl text-charcoal font-medium mb-8 tracking-tight">How to Claim Your Refund</h3>
                <div className="p-8 border border-black/10 bg-black/5 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#164336] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <ul className="space-y-6 relative z-10">
                    <li className="flex gap-3 items-center text-charcoal/80 font-light text-[15px]">
                      <svg className="w-5 h-5 text-[#164336] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      Send an email to support@lawctopus.com within 10 days after the course ends.
                    </li>
                    <li className="flex gap-3 items-center text-charcoal/80 font-light text-[15px]">
                      <svg className="w-5 h-5 text-[#164336] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                      We'll review your request and reply within 5 days.
                    </li>
                    <li className="flex gap-3 items-center text-charcoal/80 font-light text-[15px]">
                      <svg className="w-5 h-5 text-[#164336] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      If eligible, your refund will be processed within 10 working days.
                    </li>
                  </ul>
                  <p className="mt-8 text-[14px] text-charcoal/60 font-light italic">Our money back guarantee is straightforward. If you put in the effort, we promise you'll see real results. And if not; we'll return your money.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 6: THE CURRICULUM EXPERIENCE */}
        <section id="curriculum" className="w-full py-[140px] bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <div className="relative w-full max-w-[700px] h-[700px]">
              <Image src="/2.png" alt="Curriculum Background" fill className="object-contain opacity-100" />
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase block mb-4">Curriculum Roadmap</span>
            <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">Structure of this Course</h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-white/70 text-lg leading-relaxed mb-6 font-light">
              The course begins with a live &apos;Orientation Session,&apos; which explains how to fully benefit from it. This course will also teach you to build a strong profile, write winning proposals, and master networking and negotiation for career success.
            </p>
            <p className="text-white/40 font-bold mb-8 text-[11px] uppercase tracking-[0.2em]">Note: We have also added the structure at the end of this post.</p>
            <button onClick={() => setIsDownloadModalOpen(true)} className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-black transition-colors px-8 py-4 rounded-full text-[13px] font-medium flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl">
              <ArrowDownToLine className="h-4 w-4" /> Click here to access the detailed monthly structure
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Timeline Menu Selector (Left Column) */}
            <div className="lg:col-span-4 flex flex-col border-t border-white/10">
              {curriculumMonths.map((m) => (
                <button
                  key={m.month}
                  onClick={() => setActiveMonth(m.month)}
                  className={`w-full text-left py-7 px-6 transition-all duration-500 flex items-center justify-between border-b border-white/10 group ${
                    activeMonth === m.month
                      ? "bg-white/[0.03]"
                      : "bg-transparent hover:bg-white/[0.01]"
                  }`}
                >
                  <div className="flex gap-6 items-center">
                    <div className="flex-shrink-0 w-16 text-center">
                      <span className={`block text-[9px] uppercase tracking-[0.2em] font-bold transition-colors duration-500 mb-1 ${
                        activeMonth === m.month ? "text-[#164336]" : "text-white/20 group-hover:text-white/40"
                      }`}>Month</span>
                      <span className={`text-3xl font-light transition-colors duration-500 ${
                        activeMonth === m.month ? "text-white" : "text-white/20 group-hover:text-white/40"
                      }`}>
                        0{m.month}
                      </span>
                    </div>
                    <div>
                      <span className={`block text-[15px] transition-colors duration-500 ${
                        activeMonth === m.month ? "font-medium text-white" : "font-light text-white/50 group-hover:text-white/70"
                      }`}>{m.title}</span>
                    </div>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-all duration-500 ${
                    activeMonth === m.month ? "text-white -rotate-90 opacity-100" : "text-white/20 -rotate-90 opacity-0 group-hover:opacity-100"
                  }`} />
                </button>
              ))}
            </div>

            {/* Timeline Detail Card (Right Column) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {curriculumMonths.map((m) => (
                  activeMonth === m.month && (
                    <motion.div
                      key={m.month}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col justify-between h-full pt-4 md:px-8"
                    >
                      <div>
                        {/* Detail Header */}
                        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 mb-10">
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 block">Month {m.month} Immersive</span>
                          <h3 className="font-sans text-4xl md:text-5xl font-light text-white tracking-tight leading-tight max-w-2xl">{m.title}</h3>
                          
                          <div className="flex flex-wrap gap-4 mt-2">
                            <div className="flex items-center gap-2 py-2 px-5 rounded-full border border-white/20 text-[10px] font-bold text-white/70 uppercase tracking-widest">
                              <Calendar className="h-3 w-3 text-white/50" /> {m.liveSessions} Live Classes
                            </div>
                            <div className="flex items-center gap-2 py-2 px-5 rounded-full border border-white/20 text-[10px] font-bold text-white/70 uppercase tracking-widest">
                              <BookOpen className="h-3 w-3 text-white/50" /> {m.readingHours}h Reading
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/60 text-[16px] leading-relaxed mb-12 font-light max-w-3xl">
                          {m.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          {/* Deliverables */}
                          <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-6 flex items-center gap-2">
                              Draft Deliverables
                            </h4>
                            <ul className="space-y-5 border-l border-white/10 pl-6">
                              {m.deliverables.map((del, i) => (
                                <li key={i} className="text-[15px] text-white/80 font-light leading-relaxed">
                                  {del}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Assignments */}
                          <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-6 flex items-center gap-2">
                              Assignment Projects
                            </h4>
                            <ul className="space-y-5 border-l border-white/10 pl-6">
                              {m.assignments.map((ass, i) => (
                                <li key={i} className="text-[15px] text-white/80 font-light leading-relaxed">
                                  {ass}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>

          </div>
          </div>
        </section>

        {/* ENROL NOW CTA BANNER */}
        <section className="w-full py-[100px] bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#164336] rounded-full blur-[200px] opacity-15 pointer-events-none"></div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn} className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
            <span className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase block mb-6">Limited Seats Available</span>
            <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6">
              Ready to Master<br/><span className="font-medium">Contract Drafting?</span>
            </h2>
            <p className="text-white/60 text-lg font-light mb-4 max-w-xl mx-auto">Join 1000+ successful alumni. Start your journey to becoming a top contract drafting professional.</p>
            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="text-4xl md:text-5xl font-light text-white">₹24,999</span>
              <span className="text-lg text-white/30 line-through font-light">₹60,000</span>
              <span className="text-[11px] text-green-400 font-bold uppercase tracking-wider bg-green-500/10 px-2 py-1 rounded-sm">Save 58%</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={() => setIsApplyModalOpen(true)} className="bg-white text-black px-10 py-5 rounded-full font-bold text-[15px] uppercase tracking-[0.1em] hover:bg-gray-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] hover:scale-105 flex items-center gap-3">
                ENROL NOW
                <ArrowRight className="h-5 w-5" />
              </button>
              <a href="https://docs.google.com/document/d/1WDeHa90-mEcnmjQui3dI4WGDaHvpiXlazvsYgGmI-n4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-[14px] font-light transition-colors border-b border-white/20 hover:border-white/60 pb-0.5">
                Download Brochure →
              </a>
            </div>
          </motion.div>
        </section>

        {/* QUESTIONS */}
        <section className="w-full py-24 bg-white border-t border-black/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn} className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10 text-center">
            <h2 className="font-sans font-light text-3xl md:text-4xl text-charcoal mb-6 tracking-tight">Questions?</h2>
            <p className="text-charcoal/70 text-lg font-light max-w-2xl mx-auto mb-8">
              If you have any queries regarding the course, please reach out to us. We will get back to you within 24 hours!
            </p>
            <a href="mailto:courses@lawctopus.com" className="inline-flex items-center gap-3 py-4 px-8 rounded-full bg-black text-white font-medium tracking-wide hover:bg-charcoal hover:scale-105 transition-all duration-300 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              courses@lawctopus.com
            </a>
          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#0a0a0a] pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#164336] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src="/footer_illustration.png" alt="Footer Background" fill className="object-cover opacity-[28%] mix-blend-screen" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8 mb-20">
            
            {/* Column 1: Brand & Contact (Takes up more space) */}
            <div className="md:col-span-5">
              <div className="mb-10">
                <span className="text-white text-3xl font-light tracking-tight">Lawctopus<span className="font-semibold">Elite</span></span>
                <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mt-2">The Home of Legal Careers</p>
              </div>

              <div className="space-y-10">
                {/* Contact Block 1 */}
                <div>
                  <h4 className="text-white font-medium mb-6 tracking-wide text-[15px]">For Administrative & Logistical queries regarding existing courses</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-white/60 font-light hover:text-white transition-colors cursor-pointer group">
                      <Phone className="h-4 w-4 text-white/40 group-hover:text-[#164336] transition-colors" /> +91 87258 94100
                    </li>
                    <li className="flex items-center gap-4 text-white/60 font-light hover:text-white transition-colors cursor-pointer group">
                      <Mail className="h-4 w-4 text-white/40 group-hover:text-[#164336] transition-colors" /> support@lawctopus.com
                    </li>
                  </ul>
                </div>

                <div className="w-16 h-px bg-white/10"></div>

                {/* Contact Block 2 */}
                <div>
                  <h4 className="text-white font-medium mb-6 tracking-wide text-[15px]">For buying a new course or for career counselling</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-white/60 font-light hover:text-white transition-colors cursor-pointer group">
                      <Phone className="h-4 w-4 text-white/40 group-hover:text-[#164336] transition-colors" /> +91 93596 84056
                    </li>
                    <li className="flex items-center gap-4 text-white/60 font-light hover:text-white transition-colors cursor-pointer group">
                      <Mail className="h-4 w-4 text-white/40 group-hover:text-[#164336] transition-colors" /> courses@lawctopus.com
                    </li>
                    <li className="flex items-start gap-4 text-white/60 font-light pt-2">
                      <MapPin className="h-4 w-4 text-white/40 flex-shrink-0 mt-1" /> 
                      <span className="leading-relaxed">Lawctopus, 2nd Floor, Seat No. 17, Sector 35B, S.C.O 339-340, Chandigarh (U.T.) - 160022, India</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 2: Links */}
            <div className="md:col-span-3 lg:col-span-3">
              <h3 className="text-white text-[13px] font-bold tracking-[0.2em] uppercase mb-8">Useful Links</h3>
              <ul className="space-y-4">
                {["Comprehensive Courses", "Live Courses", "Test-prep Courses", "Self-paced Courses", "Moot Suite"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-white/60 font-light hover:text-white transition-colors text-[15px]">{item}</a>
                  </li>
                ))}
              </ul>
              <div className="w-full border-t border-dashed border-white/20 my-8"></div>
              <a href="#" className="text-[#164336] font-semibold hover:text-[#164336]/80 transition-colors">We are Hiring</a>
            </div>

            {/* Column 3: Newsletter & Social */}
            <div className="md:col-span-4 lg:col-span-4">
              <h3 className="text-white text-[13px] font-bold tracking-[0.2em] uppercase mb-8">Keep In Touch</h3>
              
              <div className="flex gap-2 mb-10">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/[0.03] border border-white/10 text-white px-4 py-3 outline-none focus:border-[#164336] transition-colors w-full placeholder:text-white/30 font-light"
                />
                <button className="bg-white text-black px-6 font-medium hover:bg-white/90 transition-colors flex-shrink-0">
                  Subscribe
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                  { icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg> },
                  { icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
                  { icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> }
                ].map((social, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#164336] hover:text-white transition-colors duration-300">
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="text-white/40 text-[13px] font-light leading-relaxed flex flex-wrap gap-x-4 gap-y-2">
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Money Back Guarantee terms</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Webinar/Workshop Policy</a>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm font-light">© 2026 Lawctopus Law School. All Rights Reserved.</p>
            <p className="text-white/30 text-sm font-light">Designed for Excellence.</p>
          </div>
        </div>
      </footer>

      {/* STICKY WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919359684056?text=Hi%2C%20I%20am%20interested%20in%20the%206-Month%20Contract%20Drafting%20Course."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

    </div>
  );
}
