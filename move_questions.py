with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'r') as f:
    content = f.read()

import re

# Find Questions section
match = re.search(r'(\s*\{\/\* QUESTIONS \*\/\}.*?)(?=\s*\{\/\* SECTION 6: THE CURRICULUM EXPERIENCE \*\/\})', content, re.DOTALL)
if match:
    questions_text = match.group(1)
    
    # Remove from current position
    content = content.replace(questions_text, '')
    
    # Insert before FOOTER
    content = content.replace('      {/* FOOTER */}', questions_text.lstrip('\n') + '\n\n      {/* FOOTER */}')

    with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'w') as f:
        f.write(content)
