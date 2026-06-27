with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'r') as f:
    content = f.read()

comparison_section = """
        {/* COMPARISON OF THE 2 COURSES */}
        <section className="w-full py-[140px] bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <span className="text-white/40 text-[10px] font-bold tracking-[0.25em] uppercase block mb-4">Find Your Fit</span>
              <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-8">Comparison of the 2 Courses</h2>
            </div>
            
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
"""

content = content.replace('        {/* SECTION 6: THE CURRICULUM EXPERIENCE */}', comparison_section + '\n        {/* SECTION 6: THE CURRICULUM EXPERIENCE */}')

with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'w') as f:
    f.write(content)
