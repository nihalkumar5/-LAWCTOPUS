with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'r') as f:
    content = f.read()

ai_section = """
        {/* AI-READY LEGAL CAREERS */}
        <section className="w-full py-[140px] bg-white border-y border-black/5 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <span className="text-[#164336] text-[10px] font-bold tracking-[0.25em] uppercase block mb-4">Future Proof</span>
              <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight tracking-tight mb-8">Building AI-Ready Legal Careers</h2>
              <p className="text-charcoal/70 text-lg leading-relaxed font-light mb-6">
                Lawctopus Law School (LLS) believes that AI is no longer optional for lawyers; it is fast becoming a core professional skill. At the same time, we strongly believe that AI must be used responsibly and ethically.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed font-light">
                Over the last 6 months, the LLS team has actively trained itself in the latest applications of AI across legal research, drafting, litigation support, and career development.
              </p>
            </div>

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
"""

content = content.replace('        {/* SECTION 6: THE CURRICULUM EXPERIENCE */}', ai_section + '\n        {/* SECTION 6: THE CURRICULUM EXPERIENCE */}')

with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'w') as f:
    f.write(content)
