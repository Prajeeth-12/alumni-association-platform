export const alumni = [
  {
    id: 1,
    name: "John Smith",
    batch: "2018",
    department: "Computer Science",
    location: "San Francisco, CA",
    company: "Google",
    position: "Senior Software Engineer",
    email: "john.smith@email.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Passionate about building scalable web applications and mentoring junior developers.",
    skills: ["React", "Node.js", "Python", "AWS"]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    batch: "2019",
    department: "Business Administration",
    location: "New York, NY",
    company: "McKinsey & Company",
    position: "Senior Consultant",
    email: "sarah.johnson@email.com",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    bio: "Strategic business consultant with expertise in digital transformation.",
    skills: ["Strategy", "Digital Transformation", "Project Management"]
  },
  {
    id: 3,
    name: "Michael Chen",
    batch: "2017",
    department: "Electrical Engineering",
    location: "Seattle, WA",
    company: "Microsoft",
    position: "Principal Engineer",
    email: "michael.chen@email.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Hardware and software integration specialist with 8+ years experience.",
    skills: ["Hardware Design", "C++", "IoT", "Machine Learning"]
  },
  {
    id: 4,
    name: "Emily Davis",
    batch: "2020",
    department: "Marketing",
    location: "Los Angeles, CA",
    company: "Netflix",
    position: "Marketing Manager",
    email: "emily.davis@email.com",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    bio: "Creative marketing professional specializing in content strategy and brand development.",
    skills: ["Content Strategy", "Brand Development", "Digital Marketing", "Analytics"]
  },
  {
    id: 5,
    name: "David Wilson",
    batch: "2016",
    department: "Finance",
    location: "Chicago, IL",
    company: "Goldman Sachs",
    position: "VP Investment Banking",
    email: "david.wilson@email.com",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    bio: "Investment banking professional with expertise in M&A and corporate finance.",
    skills: ["Investment Banking", "Financial Modeling", "M&A", "Risk Management"]
  },
  {
    id: 6,
    name: "Lisa Rodriguez",
    batch: "2021",
    department: "Data Science",
    location: "Austin, TX",
    company: "Tesla",
    position: "Data Scientist",
    email: "lisa.rodriguez@email.com",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    bio: "Data scientist passionate about using AI to solve real-world problems.",
    skills: ["Python", "Machine Learning", "Deep Learning", "SQL", "Tableau"]
  }
];

export const events = [
  {
    id: 1,
    title: "Annual Alumni Gala 2025",
    date: "2025-09-15",
    time: "19:00",
    location: "Grand Ballroom, Downtown Hotel",
    description: "Join us for an evening of networking, celebration, and reconnecting with fellow alumni. Dinner and entertainment included.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop",
    category: "Social",
    attendees: 250,
    isUpcoming: true
  },
  {
    id: 2,
    title: "Tech Career Fair",
    date: "2025-08-20",
    time: "10:00",
    location: "University Campus, Main Hall",
    description: "Connect with leading tech companies and explore career opportunities. Open to all alumni and current students.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
    category: "Professional",
    attendees: 150,
    isUpcoming: true
  },
  {
    id: 3,
    title: "Entrepreneurship Workshop",
    date: "2025-08-05",
    time: "14:00",
    location: "Innovation Center, Room 301",
    description: "Learn from successful alumni entrepreneurs about starting and scaling your own business.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
    category: "Educational",
    attendees: 75,
    isUpcoming: true
  },
  {
    id: 4,
    title: "Alumni Basketball Tournament",
    date: "2025-07-10",
    time: "09:00",
    location: "University Sports Complex",
    description: "Annual basketball tournament featuring teams from different graduation years.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=250&fit=crop",
    category: "Sports",
    attendees: 120,
    isUpcoming: false
  },
  {
    id: 5,
    title: "Women in Leadership Panel",
    date: "2025-06-25",
    time: "18:00",
    location: "Virtual Event",
    description: "Inspiring panel discussion with successful female alumni leaders across various industries.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=250&fit=crop",
    category: "Professional",
    attendees: 200,
    isUpcoming: false
  }
];

export const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechStart Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    description: "We're looking for an experienced React developer to join our growing team. You'll work on cutting-edge web applications used by millions of users.",
    requirements: ["5+ years React experience", "TypeScript", "Node.js", "AWS"],
    postedBy: "John Smith",
    postedDate: "2025-06-20",
    applyLink: "https://techstart.com/careers/react-dev"
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateCorp",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110k - $140k",
    description: "Lead product strategy and development for our B2B SaaS platform. Work closely with engineering and design teams.",
    requirements: ["3+ years product management", "Agile methodology", "Data analysis", "B2B experience"],
    postedBy: "Sarah Johnson",
    postedDate: "2025-06-18",
    applyLink: "https://innovatecorp.com/jobs/pm"
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "AI Solutions Ltd.",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $130k",
    description: "Join our data science team to build machine learning models that drive business decisions.",
    requirements: ["Python", "Machine Learning", "SQL", "Statistics", "PhD preferred"],
    postedBy: "Lisa Rodriguez",
    postedDate: "2025-06-15",
    applyLink: "https://aisolutions.com/careers/data-scientist"
  },
  {
    id: 4,
    title: "Marketing Intern",
    company: "StartupXYZ",
    location: "Austin, TX",
    type: "Internship",
    salary: "$20/hour",
    description: "Summer internship opportunity to gain hands-on experience in digital marketing and content creation.",
    requirements: ["Marketing student", "Social media savvy", "Creative writing", "Adobe Creative Suite"],
    postedBy: "Emily Davis",
    postedDate: "2025-06-12",
    applyLink: "https://startupxyz.com/internships"
  },
  {
    id: 5,
    title: "Financial Analyst",
    company: "Investment Partners",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$85k - $105k",
    description: "Analyze financial data and create reports to support investment decisions. Great opportunity for recent graduates.",
    requirements: ["Finance degree", "Excel proficiency", "Financial modeling", "CFA Level 1 preferred"],
    postedBy: "David Wilson",
    postedDate: "2025-06-10",
    applyLink: "https://investmentpartners.com/careers"
  }
];

export const mentors = [
  {
    id: 1,
    name: "John Smith",
    position: "Senior Software Engineer at Google",
    expertise: ["Software Development", "Career Transition", "Technical Leadership"],
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Passionate about helping new developers navigate their career journey in tech.",
    availability: "Weekends",
    preferredMentees: "Recent graduates, Career changers"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Senior Consultant at McKinsey & Company",
    expertise: ["Business Strategy", "Consulting", "MBA Preparation"],
    experience: "6+ years",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    bio: "Helping professionals break into management consulting and develop strategic thinking.",
    availability: "Evenings",
    preferredMentees: "Business students, MBA candidates"
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Principal Engineer at Microsoft",
    expertise: ["Hardware Engineering", "IoT", "Team Management"],
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Experienced in both technical leadership and engineering management.",
    availability: "Flexible",
    preferredMentees: "Engineering students, Early career engineers"
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Marketing Manager at Netflix",
    expertise: ["Digital Marketing", "Content Strategy", "Brand Management"],
    experience: "5+ years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    bio: "Specializing in entertainment industry marketing and creative campaign development.",
    availability: "Weekdays",
    preferredMentees: "Marketing students, Creative professionals"
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    position: "Data Scientist at Tesla",
    expertise: ["Machine Learning", "Data Analysis", "AI Research"],
    experience: "4+ years",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    bio: "Passionate about applying AI to solve real-world problems and mentoring women in STEM.",
    availability: "Weekends",
    preferredMentees: "Data science students, Women in tech"
  }
];

export const campaigns = [
  {
    id: 1,
    title: "New Science Building Fund",
    description: "Help us build a state-of-the-art science facility to advance research and education for future students.",
    goalAmount: 2500000,
    raisedAmount: 1750000,
    endDate: "2025-12-31",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
    category: "Infrastructure"
  },
  {
    id: 2,
    title: "Student Scholarship Program",
    description: "Provide financial assistance to deserving students who need support to complete their education.",
    goalAmount: 500000,
    raisedAmount: 325000,
    endDate: "2025-10-15",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
    category: "Education"
  },
  {
    id: 3,
    title: "Alumni Emergency Relief Fund",
    description: "Support fellow alumni and their families during unexpected financial hardships.",
    goalAmount: 100000,
    raisedAmount: 75000,
    endDate: "2025-09-30",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
    category: "Relief"
  }
];

export const donations = [
  {
    id: 1,
    donor: "Anonymous",
    amount: 10000,
    campaign: "New Science Building Fund",
    date: "2025-06-25",
    message: "Proud to support the next generation of scientists!"
  },
  {
    id: 2,
    donor: "John Smith ('18)",
    amount: 5000,
    campaign: "Student Scholarship Program",
    date: "2025-06-24",
    message: "Education opened doors for me, happy to pay it forward."
  },
  {
    id: 3,
    donor: "Sarah Johnson ('19)",
    amount: 2500,
    campaign: "New Science Building Fund",
    date: "2025-06-23",
    message: "Excited to see the university continue to grow and innovate!"
  },
  {
    id: 4,
    donor: "Michael Chen ('17)",
    amount: 1000,
    campaign: "Alumni Emergency Relief Fund",
    date: "2025-06-22",
    message: "We're all in this together. Happy to help fellow alumni."
  },
  {
    id: 5,
    donor: "Anonymous",
    amount: 500,
    campaign: "Student Scholarship Program",
    date: "2025-06-21",
    message: ""
  }
];
