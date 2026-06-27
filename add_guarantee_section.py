with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'r') as f:
    content = f.read()

guarantee_section = """
        {/* MONEY BACK GUARANTEE */}
        <section className="w-full py-[140px] bg-white border-y border-black/5 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#164336]/10 text-[#164336] mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h2 className="font-sans font-light text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight tracking-tight mb-6">100% Money-Back Guarantee</h2>
              <p className="text-charcoal/70 text-lg leading-relaxed font-light mb-6">
                We truly believe our courses will enhance your legal skills, confidence, and career prospects.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed font-light font-medium text-charcoal">
                If you complete any of our courses "sincerely" and still feel it didn't add value to your career, we'll refund 100% of your fee; no questions asked.
              </p>
            </div>

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
"""

content = content.replace('        {/* SECTION 6: THE CURRICULUM EXPERIENCE */}', guarantee_section + '\n        {/* SECTION 6: THE CURRICULUM EXPERIENCE */}')

with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'w') as f:
    f.write(content)
