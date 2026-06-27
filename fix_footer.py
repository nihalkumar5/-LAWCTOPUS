with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'r') as f:
    content = f.read()

import re

# Find Footer section
match = re.search(r'(\s*\{\/\* FOOTER \*\/\}.*?)(?=\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/body>|<\/div>\s*<\/body>|export default)', content, re.DOTALL)
if match:
    section_text = match.group(1)
    
    # Let's target specific classes to reduce height and increase width
    new_text = section_text.replace('pt-24 pb-12', 'pt-16 pb-8')
    new_text = new_text.replace('max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-[120px]', 'w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20')
    new_text = new_text.replace('gap-16 lg:gap-8 mb-20', 'gap-12 lg:gap-8 mb-12')
    new_text = new_text.replace('mb-10', 'mb-6')
    new_text = new_text.replace('space-y-10', 'space-y-8')
    new_text = new_text.replace('space-y-4', 'space-y-3')
    new_text = new_text.replace('mb-8', 'mb-6')
    new_text = new_text.replace('pt-8', 'pt-6')
    new_text = new_text.replace('my-8', 'my-6')
    
    content = content.replace(section_text, new_text)

    with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'w') as f:
        f.write(content)
