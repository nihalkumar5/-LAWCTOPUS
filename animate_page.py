import re

with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'r') as f:
    content = f.read()

# 1. Add variants inside the Home component
variants_code = """  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
"""
content = re.sub(r'(export default function Home\(\) \{[\s\S]*?const \[isDownloadModalOpen, setIsDownloadModalOpen\] = useState\(false\);)', r'\1\n\n' + variants_code, content)


# 2. Hero Section
# Navbar
content = content.replace('<div className="fixed top-0 w-full flex justify-center px-6 lg:px-12 pt-5 z-50">', 
                          '<motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="fixed top-0 w-full flex justify-center px-6 lg:px-12 pt-5 z-50">')
content = content.replace('          </header>\n        </div>\n\n        {/* Main Hero', 
                          '          </header>\n        </motion.div>\n\n        {/* Main Hero')

# Hero Typography - Left Side
content = content.replace('<div className="w-full lg:w-[55%] flex flex-col justify-center items-start relative z-20">', 
                          '<motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full lg:w-[55%] flex flex-col justify-center items-start relative z-20">')
content = content.replace('            <div className="inline-flex items-center gap-2 mb-6', 
                          '            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6')
content = content.replace('</span>\n            </div>\n            \n            <h1', 
                          '</span>\n            </motion.div>\n            \n            <motion.h1 variants={fadeInUp}')
content = content.replace('Contract Drafting<br />& Freelancing\n            </h1>\n            \n            <p', 
                          'Contract Drafting<br />& Freelancing\n            </motion.h1>\n            \n            <motion.p variants={fadeInUp}')
content = content.replace('experts.\n            </p>\n            \n            <div className="flex flex-wrap gap-4 mb-12">', 
                          'experts.\n            </motion.p>\n            \n            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">')
content = content.replace('</button>\n            </div>\n\n            {/* Stats/Badges */}', 
                          '</button>\n            </motion.div>\n\n            {/* Stats/Badges */}')
content = content.replace('<div className="flex flex-wrap gap-x-8 gap-y-4">', 
                          '<motion.div variants={fadeInUp} className="flex flex-wrap gap-x-8 gap-y-4">')
content = content.replace('                </div>\n              </div>\n            </div>\n          </div>', 
                          '                </div>\n              </div>\n            </motion.div>\n          </motion.div>')

# Hero Image - Right Side
content = content.replace('<div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative z-20 hidden lg:flex">', 
                          '<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="w-full lg:w-[45%] flex justify-center lg:justify-end relative z-20 hidden lg:flex">')
content = content.replace('/>\n            </div>\n          </div>\n        </div>', 
                          '/>\n            </div>\n          </motion.div>\n        </div>')

# 3. Quick Stats Ribbon
content = content.replace('<section className="w-full bg-white border-b border-black/10">', 
                          '<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="w-full bg-white border-b border-black/10">')
content = content.replace('          <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">', 
                          '          <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">')
content = content.replace('              <div className="px-6 py-12 flex flex-col items-center justify-center text-center hover:bg-black/5 transition-colors">', 
                          '              <motion.div variants={fadeInUp} className="px-6 py-12 flex flex-col items-center justify-center text-center hover:bg-black/5 transition-colors">')
content = content.replace('              <div className="px-6 py-12 flex flex-col items-center justify-center text-center hover:bg-black/5 transition-colors">', 
                          '              <motion.div variants={fadeInUp} className="px-6 py-12 flex flex-col items-center justify-center text-center hover:bg-black/5 transition-colors">') # Just replacing the tag for all
content = re.sub(r'(<div className="px-6 py-12 flex flex-col items-center justify-center text-center hover:bg-black/5 transition-colors">)', r'<motion.div variants={fadeInUp} className="px-6 py-12 flex flex-col items-center justify-center text-center hover:bg-black/5 transition-colors">', content)
content = re.sub(r'(<span className="text-\[11px\] font-bold tracking-\[0.15em\] text-black/40 uppercase mt-2">.*</span>\n              </div>)', lambda m: m.group(1).replace('</div>', '</motion.div>'), content)


# 4. Helper function to apply stagger to generic sections
def animate_section(section_name, content, tag="section", is_grid=False):
    # This is a bit complex for a simple script, let's just do targeted replacements
    pass

# We will apply scroll animations to major wrappers manually by replacing their classNames
content = content.replace('<section id="program" className="w-full py-32 bg-[#111111] relative">', 
                          '<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} id="program" className="w-full py-32 bg-[#111111] relative">')
content = content.replace('<div className="max-w-3xl mx-auto text-center mb-24 px-6 relative z-10">', 
                          '<motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center mb-24 px-6 relative z-10">')
content = content.replace('              <p className="text-white/50 text-[16px] leading-relaxed font-light mt-6">\n                Everything you need to master contract drafting.\n              </p>\n            </div>', 
                          '              <p className="text-white/50 text-[16px] leading-relaxed font-light mt-6">\n                Everything you need to master contract drafting.\n              </p>\n            </motion.div>')
content = content.replace('<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">', 
                          '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">')
content = re.sub(r'(<div key=\{idx\} className="group p-8 md:p-10 border border-white/10 bg-white/\[0.02\] hover:bg-white/\[0.05\] transition-colors duration-500 relative flex flex-col h-full overflow-hidden">)', r'<motion.div variants={fadeInUp} key={idx} className="group p-8 md:p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500 relative flex flex-col h-full overflow-hidden">', content)
content = content.replace('                  </p>\n                </div>\n              ))}', 
                          '                  </p>\n                </motion.div>\n              ))}')


# 5. Course Fees Section
content = content.replace('<section id="investment" className="w-full py-[140px] bg-[#0a0a0a] border-t border-white/10 relative">', 
                          '<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} id="investment" className="w-full py-[140px] bg-[#0a0a0a] border-t border-white/10 relative">')
content = content.replace('<div className="text-center max-w-3xl mx-auto mb-20 relative z-10">', 
                          '<motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20 relative z-10">')
content = content.replace('course fees.\n              </p>\n            </div>', 
                          'course fees.\n              </p>\n            </motion.div>')

content = content.replace('<div className="max-w-[1000px] mx-auto bg-white/[0.03] border border-white/10 p-10 md:p-16 relative overflow-hidden backdrop-blur-sm group hover:border-white/20 transition-all duration-500">', 
                          '<motion.div variants={fadeInUp} className="max-w-[1000px] mx-auto bg-white/[0.03] border border-white/10 p-10 md:p-16 relative overflow-hidden backdrop-blur-sm group hover:border-white/20 transition-all duration-500">')
content = content.replace('</ul>\n                  </div>\n                </div>\n              </div>\n            </div>', 
                          '</ul>\n                  </div>\n                </div>\n              </div>\n            </motion.div>')

# 6. Faculty Section
content = content.replace('<section className="w-full py-[140px] bg-[#0a0a0a] border-t border-white/10 relative">', 
                          '<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="w-full py-[140px] bg-[#0a0a0a] border-t border-white/10 relative">')
content = content.replace('<div className="text-center max-w-3xl mx-auto mb-20">', 
                          '<motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20">')
content = content.replace('partners.</p>\n            </div>', 
                          'partners.</p>\n            </motion.div>')

content = content.replace('<div key={i} className="group border-t border-white/10 pt-8 hover:border-white/40 transition-colors duration-500">', 
                          '<motion.div variants={fadeInUp} key={i} className="group border-t border-white/10 pt-8 hover:border-white/40 transition-colors duration-500">')
content = content.replace('                  <p className="text-white/60 font-light text-[14.5px] leading-relaxed">{faculty.desc}</p>\n                </div>\n              ))}', 
                          '                  <p className="text-white/60 font-light text-[14.5px] leading-relaxed">{faculty.desc}</p>\n                </motion.div>\n              ))}')

# Career Cell
content = content.replace('<div className="text-center max-w-3xl mx-auto mb-16">', 
                          '<motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">')
content = content.replace('Cell</h2>\n              </div>', 
                          'Cell</h2>\n              </motion.div>')
content = content.replace('<div key={i} className="group p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500">', 
                          '<motion.div variants={fadeInUp} key={i} className="group p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500">')
content = content.replace('</p>\n                      </div>\n                    </div>\n                  </div>\n                ))}', 
                          '</p>\n                      </div>\n                    </div>\n                  </motion.div>\n                ))}')

# Curriculum Section
content = content.replace('<section id="curriculum" className="w-full py-[140px] bg-[#0a0a0a] border-t border-white/10 relative">', 
                          '<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} id="curriculum" className="w-full py-[140px] bg-[#0a0a0a] border-t border-white/10 relative">')
content = content.replace('<div className="text-center max-w-4xl mx-auto mb-20 relative z-10">', 
                          '<motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-20 relative z-10">')
content = content.replace('months.\n              </p>\n            </div>', 
                          'months.\n              </p>\n            </motion.div>')

content = content.replace('<div key={month.month} className="relative group">', 
                          '<motion.div variants={fadeInUp} key={month.month} className="relative group">')
content = content.replace('                  </div>\n                </div>\n              </div>\n            ))}', 
                          '                  </div>\n                </div>\n              </motion.div>\n            ))}')


# Buttons Interactivity 
content = content.replace('className="bg-white text-black text-[13px] font-medium px-7 py-2.5 rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl shadow-white/5"', 
                          'whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-black text-[13px] font-medium px-7 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl shadow-white/5"')
content = content.replace('className="bg-white text-black text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-none hover:bg-gray-200 transition-colors"', 
                          'whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-black text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-none transition-colors"')


with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'w') as f:
    f.write(content)
