with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'r') as f:
    content = f.read()

import re

career_match = re.search(r'(\s*\{\/\* CAREER AND PLACEMENT SUPPORT \*\/\}.*?)(?=\s*\{\/\* WHO CAN ENROLL \*\/\})', content, re.DOTALL)
career_text = career_match.group(1)

content = content.replace(career_text, '')
content = content.replace('        {/* FEES AND BENEFITS */}', career_text + '\n        {/* FEES AND BENEFITS */}')

with open('/Users/nihalkumar/course_landing Page/src/app/page.tsx', 'w') as f:
    f.write(content)
