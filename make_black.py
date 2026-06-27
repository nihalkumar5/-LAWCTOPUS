with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'r') as f:
    content = f.read()

import re

# Find FEES AND BENEFITS section
match = re.search(r'(\s*\{\/\* FEES AND BENEFITS \*\/\}.*?)(?=\s*\{\/\* SECTION 6: THE CURRICULUM EXPERIENCE \*\/\})', content, re.DOTALL)
if match:
    section_text = match.group(1)
    
    # Replace colors
    new_text = section_text.replace('bg-white', 'bg-[#0a0a0a]')
    new_text = new_text.replace('bg-[#0a0a0a] hover:border-black/30', 'bg-white/[0.02] hover:border-white/30') # Fix the card bg
    new_text = new_text.replace('border-black/5', 'border-white/10')
    new_text = new_text.replace('border-black/10', 'border-white/10')
    new_text = new_text.replace('border-black/20', 'border-white/20')
    new_text = new_text.replace('#8080800a', '#ffffff05')
    new_text = new_text.replace('text-[#164336]', 'text-white/40')
    new_text = new_text.replace('text-charcoal/70', 'text-white/70')
    new_text = new_text.replace('text-charcoal/60', 'text-white/60')
    new_text = new_text.replace('text-charcoal/40', 'text-white/40')
    new_text = new_text.replace('text-charcoal/30', 'text-white/30')
    new_text = new_text.replace('text-charcoal', 'text-white')
    new_text = new_text.replace('bg-black/5', 'bg-white/5')
    new_text = new_text.replace('bg-charcoal/20', 'bg-white/20')
    new_text = new_text.replace('bg-black', 'bg-white')
    new_text = new_text.replace('text-white text-[10px]', 'text-black text-[10px]') # 6 months badge text
    new_text = new_text.replace('bg-white text-white', 'bg-white text-black') # 6 months button text
    new_text = new_text.replace('hover:bg-charcoal', 'hover:bg-white/90')
    new_text = new_text.replace('hover:bg-black hover:text-white', 'hover:bg-white hover:text-black')
    
    # Fixing the 6 months card specifically since I turned its bg to #0a0a0a which is wrong.
    # The cards originally had bg-white. Let's fix that.
    new_text = new_text.replace('p-8 md:p-10 border border-white/10 bg-[#0a0a0a]', 'p-8 md:p-10 border border-white/10 bg-white/[0.02]')
    
    # fix the hover border
    new_text = new_text.replace('hover:border-black/30', 'hover:border-white/30')

    # fix the black side border on hover for cards
    new_text = new_text.replace('w-1.5 h-full bg-white transform', 'w-1.5 h-full bg-[#164336] transform')
    
    content = content.replace(section_text, new_text)

    with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'w') as f:
        f.write(content)
