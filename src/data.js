export const TECH = ["JavaScript","TypeScript","Python","Java","Go","SQL","React","Next.js","TailwindCSS","React Native","Electron","Node.js","Express.js","GraphQL","WebSockets","PostgreSQL","MongoDB","Prisma","Docker","Kubernetes","AWS","Azure","Vercel","Figma","Git"];

export const SKILLS = [
 {n:"React", c:"frontend", w:92},{n:"Next.js", c:"frontend", w:90},{n:"TailwindCSS", c:"frontend", w:94},
 {n:"TypeScript", c:"frontend", w:88},{n:"React Native", c:"frontend", w:78},{n:"Electron", c:"frontend", w:70},
 {n:"Node.js", c:"backend", w:90},{n:"Express.js", c:"backend", w:88},{n:"GraphQL", c:"backend", w:76},
 {n:"WebSockets", c:"backend", w:80},{n:"Go", c:"backend", w:74},{n:"REST APIs", c:"backend", w:92},
 {n:"LLM Integration", c:"ai", w:85},{n:"Prompt Engineering", c:"ai", w:88},{n:"Python / ML", c:"ai", w:80},
 {n:"AWS", c:"cloud", w:78},{n:"Azure", c:"cloud", w:74},{n:"Docker", c:"cloud", w:82},{n:"Kubernetes", c:"cloud", w:68},{n:"CI/CD", c:"cloud", w:80},{n:"Vercel", c:"cloud", w:90},
 {n:"PostgreSQL", c:"database", w:86},{n:"MongoDB", c:"database", w:82},{n:"Prisma", c:"database", w:84},{n:"SQLite", c:"database", w:88},
 {n:"Figma", c:"tools", w:80},{n:"Postman", c:"tools", w:88},{n:"Git & GitHub", c:"tools", w:92},{n:"Claude / ChatGPT", c:"tools", w:90},
];

export const PROJECTS = [
 {n:"FeedbackX", g:"FX", d:"A collaboration and feedback platform where users discuss ideas inside categorized communities, with live threads and voting.", t:["React","Node.js","Prisma","PostgreSQL","Socket.io"]},
 {n:"FarmSmart", g:"FS", d:"A digital agriculture platform helping farmers manage crops, livestock, inventory and buyers from one dashboard.", t:["Next.js","Node.js","PostgreSQL","REST APIs"]},
 {n:"NextStep AI", g:"NS", d:"An AI-powered career platform: resume builder, job matching, interview coach, career roadmaps and learning plans.", t:["Next.js","OpenAI API","TypeScript","Prisma"]},
 {n:"MESMTF", g:"MX", d:"A medical expert system for malaria and typhoid diagnosis, with an education chatbot, appointments and patient management.", t:["React","Node.js","MongoDB","AI/Rules Engine"]},
 {n:"Open Banking Middleware", g:"OB", d:"A middleware platform connecting banks through secure APIs, enabling fintech innovation across the market.", t:["Go","PostgreSQL","REST APIs","Docker"]},
 {n:"School Management Platform", g:"SM", d:"A nationwide school application and student management system digitizing admissions and administration.", t:["Next.js","Express.js","PostgreSQL","AWS"]},
];

export const TIMELINE = [
 {d:"2022", t:"Started the journey", x:"Began a software development engineering path with a strong focus on building practical systems."},
 {d:"2023", t:"First production apps", x:"Shipped early client and personal projects — moving from tutorials to real, deployed software."},
 {d:"2024", t:"Founder journey begins", x:"Started building FeedbackX and FarmSmart, learning product scoping and user research alongside coursework."},
 {d:"2025", t:"Fintech & health systems", x:"Built the open banking middleware and MESMTF, going deeper into system design and security."},
 {d:"2026", t:"AI-native products", x:"Focused on NextStep AI and AI-assisted tooling, exploring how LLMs change what a small team can ship."},
];

export const BUILDING = [
 {s:"live", sl:"● Live", t:"FeedbackX", x:"In active use by early community testers, iterating on real-time collaboration features."},
 {s:"build", sl:"◐ Building", t:"NextStep AI", x:"Building out the interview coach and career roadmap modules ahead of a closed beta."},
 {s:"idea", sl:"○ Exploring", t:"Open Banking SDK", x:"Scoping a developer SDK to make the middleware easier for fintechs to integrate."},
];

export const ACH = [
 {i:"🏆", t:"Hackathon Finalist", x:"National student hackathon — fintech track"},
 {i:"🚀", t:"6 Products Shipped", x:"From idea to deployed, end to end"},
 {i:"📖", t:"Open Source Contributor", x:"Contributions to community dev tooling"},
 {i:"🎓", t:"NUST — SDE Program", x:"Software Development Engineering, in progress"},
];

export const TESTIMONIALS = [
 {q:"David thinks like a founder, not just an engineer — he pushes on the 'why' before he writes a line of code.", n:"Course Mentor", r:"NUST, Software Engineering"},
 {q:"FarmSmart's data model was cleaner than platforms with ten times the budget. Impressive attention to real constraints.", n:"Early Pilot Partner", r:"Agritech collaborator"},
 {q:"Fast, communicative, and honest about trade-offs. Exactly what you want from an engineering partner who thinks like a founder.", n:"Hackathon Judge", r:"Fintech track"},
];

export const BLOG = [
 {tag:"System Design", t:"Designing an open banking middleware for low-connectivity markets", x:"Notes on API design when uptime and bandwidth aren't guaranteed."},
 {tag:"AI", t:"What LLMs actually change for a two-person startup", x:"Where AI tooling genuinely speeds up shipping — and where it doesn't."},
 {tag:"Product", t:"What FarmSmart taught me about talking to non-technical users", x:"Lessons from building for farmers, not developers."},
];

export const CMDS = [
 {l:"Go to About", k:"G A", href:"/about"},
 {l:"Go to Skills", k:"G S", href:"/skills"},
 {l:"Go to Projects", k:"G P", href:"/projects"},
 {l:"Go to Journey", k:"G J", href:"/timeline"},
 {l:"Go to Vision", k:"G V", href:"/vision"},
 {l:"Go to Contact", k:"G C", href:"/contact"},
 {l:"Toggle theme", k:"T", action:"theme"},
 {l:"Open GitHub", k:"↵", href:"https://github.com"},
];
