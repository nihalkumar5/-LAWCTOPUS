with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'r') as f:
    content = f.read()

questions_section = """
        {/* QUESTIONS */}
        <section className="w-full py-24 bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px] relative z-10 text-center">
            <h2 className="font-sans font-light text-3xl md:text-4xl text-white mb-6 tracking-tight">Questions?</h2>
            <p className="text-white/60 text-lg font-light max-w-2xl mx-auto mb-8">
              If you have any queries regarding the course, please reach out to us. We will get back to you within 24 hours!
            </p>
            <a href="mailto:courses@lawctopus.com" className="inline-flex items-center gap-3 py-4 px-8 rounded-full bg-white text-black font-medium tracking-wide hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              courses@lawctopus.com
            </a>
          </div>
        </section>
"""

content = content.replace('        {/* SECTION 6: THE CURRICULUM EXPERIENCE */}', questions_section + '\n        {/* SECTION 6: THE CURRICULUM EXPERIENCE */}')

with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'w') as f:
    f.write(content)
