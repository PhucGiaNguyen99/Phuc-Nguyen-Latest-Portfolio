A personal portfolio showcasing my projects, experience, and skills in software engineering, web and mobile development, and data analysis. Built with React.

Deployment: 
phuc-nguyen-latest-portfolio-mpyrzibqr.vercel.app

**Header:
1. Responsive Flex Layout:
Built a flexible header layout using display: flex with flex-wrap: nowrap to align all sections (profile, nav, CTA) on a single horizontal line.

2. Profile Section Expansion:
Adjusted .profile-section with min-width, max-width, and flex-grow to ensure it has enough horizontal space for proper line breaks and layout balance.

3. Preserved Custom Line Breaks in Subtitle:
Used <br /> tags inside JSX and ensured text wrapping behavior respects exact line drops for role highlights (Software Engineer, Android Developer, Full-stack Developer).

4. Role Highlights Styling:
Styled key roles using a .highlight-role class for visual emphasis with bold font weight and a professional green color.

5. Image and Text Alignment:
Aligned the profile image with the name and subtitle using align-items: flex-start and object-fit: cover to maintain visual consistency.

6. Navigation & CTA Integration:
Positioned navigation links and the resume download button inline with the profile section, maintaining left alignment and appropriate spacing across all elements.

7. Mobile-Friendly Base:
Set up clean structure and CSS that can be extended with media queries for responsive behavior on smaller screens.