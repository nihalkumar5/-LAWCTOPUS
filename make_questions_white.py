with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'r') as f:
    content = f.read()

import re

# Find Questions section
match = re.search(r'(\s*\{\/\* QUESTIONS \*\/\}.*?)(?=\s*\{\/\* FOOTER \*\/\})', content, re.DOTALL)
if match:
    section_text = match.group(1)
    
    # Replace colors
    new_text = section_text.replace('bg-[#0a0a0a]', 'bg-white')
    new_text = new_text.replace('border-white/10', 'border-black/5')
    new_text = new_text.replace('#ffffff05', '#8080800a')
    new_text = new_text.replace('text-white mb-6', 'text-charcoal mb-6')
    new_text = new_text.replace('text-white/60', 'text-charcoal/70')
    new_text = new_text.replace('bg-white text-black', 'bg-black text-white')
    new_text = new_text.replace('hover:bg-white/90', 'hover:bg-charcoal')
    
    content = content.replace(section_text, new_text)

    with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'w') as f:
        f.write(content)
