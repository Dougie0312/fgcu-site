import { Course, Facility, Program } from './types';

export const courses: Record<string, Course> = {
  // Prerequisites
  ENT2000: {
    code: 'ENT 2000',
    name: 'Intro to Entrepreneurship',
    credits: 3,
    level: 'lower',
    description: 'Includes individual components of entrepreneurship and its implications for society. Special emphasis on decision-making and problem solving.',
    prerequisites: [],
    attributes: ['COBC', 'CRIT', 'GESO'],
    role: 'prerequisite',
    isCapstone: false,
  },

  // Required Major Courses (10)
  ENT3004: {
    code: 'ENT 3004',
    name: 'Entrepreneurship & Creativity',
    credits: 3,
    level: 'upper',
    description: 'Focus on the skill of creativity and broadening curiosity. Students learn opportunity recognition and gain confidence in exploring unfamiliar courses of action.',
    prerequisites: ['ENT 2000', 'MAN 3025'],
    attributes: [],
    role: 'required',
  },
  ENT3114: {
    code: 'ENT 3114',
    name: 'New Venture Laboratory (Capstone)',
    credits: 3,
    level: 'upper',
    description: 'Guide students through identifying real-world problems, validating ideas through customer discovery, and refining solutions. Develop growth strategies, pricing models, and feasibility reports.',
    prerequisites: ['ENT 3004'],
    attributes: ['CLWS'],
    role: 'required',
    isCapstone: true,
    isCLWS: true,
  },
  ENT3121: {
    code: 'ENT 3121',
    name: 'Entrepreneurial Mindset',
    credits: 3,
    level: 'upper',
    description: 'Examine a wide range of individual differences associated with an entrepreneurial mindset. Topics include passion, confidence, and professionalism in career development.',
    prerequisites: ['ENT 2000'],
    attributes: [],
    role: 'required',
  },
  ENT3204: {
    code: 'ENT 3204',
    name: 'Scaling Ventures',
    credits: 3,
    level: 'upper',
    description: 'Examine the strategic, operational, and financial issues confronting ventures as they grow and gain traction.',
    prerequisites: ['ENT 3114'],
    attributes: ['CLWS'],
    role: 'required',
    isCLWS: true,
  },
  ENT3273: {
    code: 'ENT 3273',
    name: 'Foundational Startup Skills',
    credits: 3,
    level: 'upper',
    description: 'Teach students how to correctly establish a new venture and leverage data to make informed decisions through organizational structure and administrative tasks.',
    prerequisites: ['ENT 2000'],
    attributes: [],
    role: 'required',
  },
  ENT3414: {
    code: 'ENT 3414',
    name: 'Innovative Decision Making',
    credits: 3,
    level: 'upper',
    description: 'Learn to improve decision-making skills through gathering, interpreting, and manipulating data in uncertain, ambiguous environments.',
    prerequisites: ['ENT 3114'],
    attributes: [],
    role: 'required',
  },
  ENT3422: {
    code: 'ENT 3422',
    name: 'Venture Funding',
    credits: 3,
    level: 'upper',
    description: 'Develop knowledge of capital management in early-stage ventures, with focus on financial capital: equity and debt. Examine investor motives and contractual relationships.',
    prerequisites: ['ENT 3004'],
    attributes: [],
    role: 'required',
  },
  ENT3607: {
    code: 'ENT 3607',
    name: 'Innovation by Design',
    credits: 3,
    level: 'upper',
    description: 'Use design thinking principles to develop physical, digital, and service innovations. Learn to communicate confidently with engineers and stakeholders.',
    prerequisites: ['ENT 2000'],
    attributes: [],
    role: 'required',
  },
  ENT3618: {
    code: 'ENT 3618',
    name: 'Digital Technologies',
    credits: 3,
    level: 'upper',
    description: 'Develop students\' technology skills and examine the role of digital technologies in society. Accessible for everyone with opportunities for advanced growth.',
    prerequisites: ['ENT 3004'],
    attributes: [],
    role: 'required',
  },
  SPC2023: {
    code: 'SPC 2023',
    name: 'Public Speaking',
    credits: 3,
    level: 'upper',
    description: 'Public speaking course required for the entrepreneurship major.',
    prerequisites: [],
    attributes: [],
    role: 'required',
  },

  // Restricted Electives (9 credits required)
  ENT3243: {
    code: 'ENT 3243',
    name: 'Promoting New Ventures',
    credits: 3,
    level: 'upper',
    description: 'Provide context for understanding the entrepreneurial process through improvisation, storytelling, and organization skills for pitching.',
    prerequisites: ['ENT 2000', 'SPC 2023'],
    attributes: [],
    role: 'restricted-elective',
  },
  ENT3402: {
    code: 'ENT 3402',
    name: 'Blockchain Applications',
    credits: 3,
    level: 'upper',
    description: 'Explore the foundations of cryptocurrencies, NFTs, and Blockchain technology with focus on entrepreneurial opportunities in web3.',
    prerequisites: ['ENC 1102'],
    attributes: [],
    role: 'restricted-elective',
  },
  ENT3503: {
    code: 'ENT 3503',
    name: 'Social Entrepreneurship',
    credits: 3,
    level: 'upper',
    description: 'Overview of applying entrepreneurship to drive social change and create sustainable solutions to societal challenges.',
    prerequisites: [],
    attributes: ['SCGR'],
    role: 'restricted-elective',
    isSCGR: true,
  },
  ENT3603: {
    code: 'ENT 3603',
    name: 'Visual Software Development',
    credits: 3,
    level: 'upper',
    description: 'Build software visually with no coding experience using low-code tools for mobile and desktop applications.',
    prerequisites: ['ENT 3004'],
    attributes: [],
    role: 'restricted-elective',
  },
  ENT4205: {
    code: 'ENT 4205',
    name: 'Founder\'s Dilemmas',
    credits: 3,
    level: 'upper',
    description: 'Delve into consequential early choices entrepreneurs make that shape their ventures\' trajectories and develop practical frameworks.',
    prerequisites: ['ENT 3004'],
    attributes: [],
    role: 'restricted-elective',
  },
  ENT4305: {
    code: 'ENT 4305',
    name: 'Legal Strategies in Startups',
    credits: 3,
    level: 'upper',
    description: 'Cover legal environment for entrepreneurs including IP protection, contract development, dispute resolution, and ethical frameworks.',
    prerequisites: ['ENT 2000'],
    attributes: [],
    role: 'restricted-elective',
  },
  ENT4901: {
    code: 'ENT 4901',
    name: 'Independent Study',
    credits: 3,
    level: 'upper',
    description: 'Individual study and research with faculty direction and supervision.',
    prerequisites: ['ENT 3004'],
    attributes: [],
    role: 'restricted-elective',
  },
  ENT4902: {
    code: 'ENT 4902',
    name: 'Runway Program Seminar',
    credits: 3,
    level: 'upper',
    description: 'Self-directed course requiring students to create a launch plan with small group instruction and mentorship from Runway Program.',
    prerequisites: [],
    attributes: [],
    role: 'restricted-elective',
  },
  ENT4934: {
    code: 'ENT 4934',
    name: 'Special Topics',
    credits: 3,
    level: 'upper',
    description: 'Courses centering around topics of current interest or of special interest to students. Content varies by semester.',
    prerequisites: ['ENT 2000'],
    attributes: [],
    role: 'restricted-elective',
  },
  ENT4943: {
    code: 'ENT 4943',
    name: 'Internship',
    credits: 3,
    level: 'upper',
    description: 'Work in professional settings relevant to entrepreneurship, connecting academic training with professional practice.',
    prerequisites: ['ENT 3004'],
    attributes: [],
    role: 'restricted-elective',
  },
};

export const facilities: Facility[] = [
  {
    name: 'FineMark National Bank Incubator Space',
    location: '1st Floor, Lucas Hall',
    description: 'Home to the Runway Program — a free business incubator open to students and alumni.',
    features: [
      'Expansive modern training space',
      'Mentorship rooms',
      'Large conference room',
      'Lounge area',
      'Administrative offices',
      'Lean Startup methodology focus',
      'Equity-free seed funding pitches',
    ],
  },
  {
    name: 'Rist Family Foundation Makerspace',
    location: 'Room 203, 2nd Floor',
    description: 'State-of-the-art prototyping and production facility.',
    features: [
      '3D printers',
      'Laser cutter (wood/acrylic)',
      'Desktop CNC machines',
      'Embroidery machine',
      'VR development kits',
      'Custom packaging/label production',
      'Large-format poster printer',
    ],
  },
  {
    name: 'Lucas Hall Media Lab',
    location: 'Room 308, 3rd Floor',
    description: 'Professional creative space for content creation.',
    features: [
      'Sound-treated podcasting area',
      'Professional microphones',
      'Adjustable backdrops and studio lighting',
      'Cinema-quality AV capabilities',
      'Display screens',
      'Professional camera and audio equipment',
    ],
  },
  {
    name: 'Advanced Computing Lab',
    location: '3rd Floor',
    description: 'High-performance workstations for large-scale projects.',
    features: [
      'High-performance workstations',
      'Best campus view',
      'Support for large-scale creative projects',
      'Technical workstations',
    ],
  },
  {
    name: '"THE NEST" Innovation Learning Hub',
    location: 'Lucas Hall',
    description: 'Collaborative space for student entrepreneurs at every stage.',
    features: [
      'Concept refinement support',
      'Prototype development guidance',
      'Pre-launch mentorship',
      'Guidance and additional support',
    ],
  },
];

export const programs: Program[] = [
  {
    name: 'Runway Program',
    description: 'Free semester-long business incubator with mentorship and seed funding pitches.',
    details: 'Participants work in Lean Startup methodology and can pitch for equity-free seed funding at end of semester.',
  },
  {
    name: 'CEO Club at FGCU',
    description: 'Student organization hosting workshops and speaker events.',
    details: 'Regular meetings and networking opportunities for entrepreneurship-focused students.',
  },
  {
    name: 'Azul\'s Innovation Challenge',
    description: 'Entrepreneurship competition.',
    details: 'Opportunity to pitch ideas and compete for recognition and prizes.',
  },
  {
    name: 'Sustainable Futures Challenge',
    description: 'Competition for sustainable ventures.',
    details: 'Over $20,000 in prizes with Shark Tank-style final pitch event.',
  },
  {
    name: 'Veterans Florida Entrepreneurship Program',
    description: 'Support for veteran entrepreneurs.',
    details: 'Specialized support and mentoring for veterans starting ventures.',
  },
  {
    name: 'Changemaker Speaker Series',
    description: '"Voices of Impact" - Regular speaker events with entrepreneurs.',
    details: 'Learn from successful entrepreneurs and industry leaders at Lucas Hall.',
  },
];

export const graduationRequirements = {
  majorCredits: 30,
  electiveCredits: 9,
  serviceLearningHours: 80,
  writingCredits: 12,
  totalCredits: 120,
  minorCredits: 15,
  genEdCredits: 36,
  sustainabilityCredits: 3,
};

export const knowledgeBaseSummary = `
EaglePreneurs - FGCU School of Entrepreneurship

The Daveler & Kauanui School of Entrepreneurship (DKSOE) offers:
- Bachelor of Science in Entrepreneurship (120 credits)
- Entrepreneurship Minor (15 credits)
- Master of Science in Entrepreneurship
- Bachelor of Arts in Digital Media Design

Key Facts:
- Average class size: 24 students
- 6th largest major at FGCU
- Located in Lucas Hall, Fort Myers, Florida
- Curriculum grounded in Lean Startup methodologies
- Project-based, experiential learning approach

BS Degree Requirements:
- Total: 120 credits
- Major: 30 credits (10 required + 9 elective)
- General Education: ~36 credits
- Service-Learning: 80 hours
- Writing: 12 credits
- Sustainability: 3 credits

Top Programs:
- Runway Program (free business incubator)
- Makerspace with 3D printers and laser cutters
- Media Lab for content creation
- CEO Club and student competitions
`;

export function getCoursesByRole(role: string): Course[] {
  return Object.values(courses).filter(course => course.role === role);
}

export function searchCourses(query: string): Course[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(courses).filter(
    course =>
      course.code.toLowerCase().includes(lowerQuery) ||
      course.name.toLowerCase().includes(lowerQuery) ||
      course.description.toLowerCase().includes(lowerQuery)
  );
}

export function getCourseByCode(code: string): Course | undefined {
  const key = code.replace(/\s+/g, '');
  return Object.values(courses).find(c => c.code.replace(/\s+/g, '') === key);
}
