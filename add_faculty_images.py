with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'r') as f:
    content = f.read()

import re

# Update the facultyMembers array
old_array = """const facultyMembers = [
  {
    name: "Shashank Sardesai",
    role: "Independent Litigator & Company Secretary",
    desc: "Co-founder of EverTrust Legal. Former associate at Wadia Ghandy & Co. and HSA Advocates. Specializes in partnership deeds, lease agreements, and corporate compliance."
  },
  {
    name: "Akanksha Mishra",
    role: "Head of Lawctopus Law School",
    desc: "Taught contract drafting to 1500+ learners. Independent litigator at Bombay High Court. Corporate counsel for start-ups and PSUs. LLM Gold Medalist."
  },
  {
    name: "Pranjal Doshi",
    role: "Associate at Walker Morris LLP, UK",
    desc: "Postgraduate from University of Cambridge. Former associate at Trilegal and Khaitan & Co. Specializes in M&A, private equity, and investment documents."
  },
  {
    name: "Arunima Jha",
    role: "Head Legal Counsel, Omnicom Media Group",
    desc: "Former Legal Counsel at BookMyShow. Expert in media law, privacy regulations, and managing investment portfolios and exit strategies."
  },
  {
    name: "Adv. Jaibatruka Mohanta",
    role: "Research Associate, CEERA (NLSIU)",
    desc: "Advises the Government of India on Criminal Law reforms. Teaches Advanced Contracts and Public Policy at NLSIU."
  },
  {
    name: "H. B Keshava",
    role: "Managing Attorney, Baskaran and Associates",
    desc: "Heads an IPR advisory firm in Pune. Guest faculty at New Law College and Career Launcher."
  },
  {
    name: "Gourav Mohanty",
    role: "Advocate, Bombay High Court",
    desc: "Gold medalist from Symbiosis Law School. Former Senior Associate at Shardul Amarchand Mangaldas. Linklaters Drafting Competition winner."
  },
  {
    name: "Anup Menon V",
    role: "Senior Legal Counsel",
    desc: "Extensive experience advising clients internationally. Specializes in Corporate, Banking, and Tech sector commercial contracts."
  },
  {
    name: "Tanuj Kalia",
    role: "Founding CEO of Lawctopus",
    desc: "Author of 'Law as a Career'. Winner of Business World Legal 40 under 40 award. TEDx speaker and MSME business owner."
  },
  {
    name: "Bhumesh Verma",
    role: "Managing Partner, Corp Comm Legal",
    desc: "25+ years experience as a corporate lawyer. Former partner at Khaitan & Co. Author of 'Practical Guide to Drafting Commercial Contracts'."
  },
  {
    name: "Shayonee Dasgupta",
    role: "Lead Researcher",
    desc: "Former Senior Associate at Shardul Amarchand Mangaldas. Consultant at IDIA and freelance legal educator."
  },
  {
    name: "Debanshu Khettry",
    role: "Module Developer",
    desc: "Founder of SILC and Angel Investor. Leads Leslie and Khettry, a renowned law firm established in 1944. LLM from UCL."
  }
];"""

new_array = """const facultyMembers = [
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
];"""

content = content.replace(old_array, new_array)

# Update the rendering
old_render = """              {facultyMembers.map((faculty, i) => (
                <div key={i} className="group border-t border-white/10 pt-8 hover:border-white/40 transition-colors duration-500">
                  <h3 className="text-2xl text-white font-medium mb-1 tracking-tight">{faculty.name}</h3>
                  <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-4">{faculty.role}</p>
                  <p className="text-white/60 font-light text-[14.5px] leading-relaxed">{faculty.desc}</p>
                </div>
              ))}"""

new_render = """              {facultyMembers.map((faculty, i) => (
                <div key={i} className="group border-t border-white/10 pt-8 hover:border-white/40 transition-colors duration-500">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-[#164336]/40 group-hover:border-[#164336] transition-colors duration-500">
                    <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="text-2xl text-white font-medium mb-1 tracking-tight">{faculty.name}</h3>
                  <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-4">{faculty.role}</p>
                  <p className="text-white/60 font-light text-[14.5px] leading-relaxed">{faculty.desc}</p>
                </div>
              ))}"""

content = content.replace(old_render, new_render)

with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'w') as f:
    f.write(content)
