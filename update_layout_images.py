import re

with open("src/app/page.tsx", "r") as f:
    content = f.read()

# Make sure Image is imported
if 'import Image from "next/image"' not in content:
    content = content.replace('from "framer-motion";', 'from "framer-motion";\nimport Image from "next/image";')

# 1. 9 Unique Elements (3.png - person on books)
# We wrap the map in a grid.
# Find: <div className="max-w-5xl mx-auto border-t border-black/10">
# Replace with: <div className="max-w-7xl mx-auto border-t border-black/10 grid grid-cols-1 lg:grid-cols-12 gap-8"><div className="lg:col-span-7">
content = content.replace(
    '<div className="max-w-5xl mx-auto border-t border-black/10">\n                {[',
    '<div className="max-w-[1200px] mx-auto border-t border-black/10 grid grid-cols-1 lg:grid-cols-12 gap-12">\n                <div className="lg:col-span-7">\n                {['
)
# We need to close this div and add the image right after the map ends.
# Find: </div>\n              </div>\n            </div>\n\n            {/* HOW WILL THIS COURSE HELP YOU */}
content = content.replace(
    '                  </div>\n                ))}\n              </div>\n            </div>\n\n            {/* HOW WILL THIS COURSE HELP YOU */}',
    '                  </div>\n                ))}\n                </div>\n                <div className="lg:col-span-5 hidden lg:flex flex-col justify-center sticky top-24 max-h-[80vh]">\n                  <Image src="/3.png" alt="Student Reading" width={600} height={600} className="w-full max-w-[500px] object-contain mx-auto mix-blend-multiply opacity-90 drop-shadow-xl" />\n                </div>\n              </div>\n            </div>\n\n            {/* HOW WILL THIS COURSE HELP YOU */}'
)

# 2. Who can enroll (6.png - businessman)
content = content.replace(
    'className="md:w-1/3">\n                <span className="text-[#164336]',
    'className="md:w-1/3 flex flex-col justify-between">\n                <div>\n                  <span className="text-[#164336]'
)
content = content.replace(
    'for this course?</h2>\n              </motion.div>',
    'for this course?</h2>\n                </div>\n                <div className="hidden md:block mt-auto pt-16 mix-blend-multiply opacity-95 -ml-8">\n                  <Image src="/6.png" alt="Professional" width={500} height={500} className="w-full max-w-[450px] object-contain" />\n                </div>\n              </motion.div>'
)

# 3. Money-Back Guarantee (7.png - dive into box)
# Turn it into a 2-column layout.
# Find: <div className="max-w-4xl mx-auto text-center mb-16">
# Change to flex, text left.
content = content.replace(
    '<motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn} className="max-w-4xl mx-auto text-center mb-16">',
    '<motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn} className="max-w-[1200px] mx-auto mb-20 flex flex-col lg:flex-row items-center gap-16">\n              <div className="lg:w-1/2">\n'
)
# Close the div and add image.
content = content.replace(
    'no questions asked.\n              </p>\n            </motion.div>\n\n            <div className="grid grid-cols-1 md:grid-cols-2',
    'no questions asked.\n              </p>\n              </div>\n              <div className="lg:w-1/2 hidden lg:flex justify-center mix-blend-multiply opacity-90">\n                <Image src="/7.png" alt="Guarantee" width={600} height={600} className="w-full max-w-[550px] object-contain" />\n              </div>\n            </motion.div>\n\n            <div className="grid grid-cols-1 md:grid-cols-2'
)
# Remove the centering from Money Back header
content = content.replace(
    '<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#164336]/10 text-[#164336] mb-8">',
    '<div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#164336]/10 text-[#164336] mb-8">'
)
content = content.replace(
    'text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight tracking-tight mb-6">100% Money-Back',
    'text-4xl md:text-5xl lg:text-7xl text-charcoal leading-[1.1] tracking-tight mb-8">100% Money-Back'
)

# 4. Structure of this Course (2.png - blocks)
# Put it under the Timeline menu on the left side
content = content.replace(
    '                  </div>\n                </button>\n              ))}\n            </div>',
    '                  </div>\n                </button>\n              ))}\n              <div className="hidden lg:block mt-16 opacity-70 mix-blend-screen px-4">\n                <Image src="/2.png" alt="Building Blocks" width={400} height={400} className="w-full object-contain filter invert" />\n              </div>\n            </div>'
)

# 5. How Will This Course Help You? (4.png - girl reading flying books)
# Add a massive hero-like image above the grid
content = content.replace(
    '</motion.div>\n            \n            <motion.div initial="hidden"',
    '</motion.div>\n            \n            <div className="w-full flex justify-center mb-24 opacity-80 mix-blend-screen">\n              <Image src="/4.png" alt="Learning Experience" width={800} height={500} className="w-full max-w-[700px] object-contain filter invert" />\n            </div>\n            \n            <motion.div initial="hidden"'
)

with open("src/app/page.tsx", "w") as f:
    f.write(content)

print("Images properly integrated!")
