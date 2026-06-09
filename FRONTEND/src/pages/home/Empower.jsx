import React, { useEffect, useMemo, useState } from "react";
import "../../style/empower.css";
import { X } from "lucide-react";

const coursesData = [
  {
    id: 1,
    title: "Advanced Computer Concept (For Beginners)",
    category: "Basic Computer",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Upgrade your computer skills with modern, job-oriented and trending software used by today’s professionals and businesses.",
    learn: [
      "Computer Basics to Advanced Concepts",
      "Advanced MS Excel (Formulas, Reports, Data Analysis)",
      "MS Word Professional Formatting",
      "PowerPoint Presentations",
      "Internet & Office Tools",
      "Email & Communication",
      "English Typing",
      "Canva Design",
    ],
  },

  {
    id: 2,
    title: "Tally Prime with GST",
    category: "Accounting",
    duration: "4 Months",
    level: "Intermediate",
    description:
      "Master modern accounting workflows using Tally Prime with GST billing and inventory management.",
    learn: [
      "GST Billing",
      "Accounting Entries",
      "Payroll",
      "Inventory",
      "Reports",
      "Voucher Entries",
    ],
  },

  {
    id: 3,
    title: "Diploma in Data Analytics",
    category: "Analytics",
    duration: "6 Months",
    level: "Advanced",
    description:
      "Learn practical analytics using Excel, SQL, Power BI and business intelligence tools.",
    learn: [
      "Excel Dashboards",
      "SQL Queries",
      "Power BI",
      "Business Reports",
      "Data Cleaning",
      "Visualization",
    ],
  },

  {
    id: 4,
    title: "Diploma in Data Science",
    category: "Data Science",
    duration: "8 Months",
    level: "Advanced",
    description:
      "Industry-ready data science program with machine learning and AI concepts.",
    learn: [
      "Python",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Deep Learning",
      "Projects",
    ],
  },

  {
    id: 5,
    title: "Diploma in Full Stack Web Development with GenAI",
    category: "Development",
    duration: "8 Months",
    level: "Advanced",
    description:
      "Become a professional full stack developer with AI-powered workflow integration.",
    learn: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "GenAI",
    ],
  },

  {
    id: 6,
    title: "Certificate in Web Development",
    category: "Development",
    duration: "4 Months",
    level: "Beginner",
    description:
      "Build responsive websites and modern frontend projects from scratch.",
    learn: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "JavaScript",
      "Deployments",
    ],
  },

  {
    id: 7,
    title: "Diploma in Graphic Design with AI",
    category: "Design",
    duration: "6 Months",
    level: "Intermediate",
    description:
      "Create branding, social media, posters and AI-generated visual designs.",
    learn: [
      "Photoshop",
      "Illustrator",
      "Figma",
      "AI Design Tools",
      "Branding",
    ],
  },

  {
    id: 8,
    title: "Certificate in Graphic Design",
    category: "Design",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Learn professional graphic designing fundamentals for print and digital media.",
    learn: [
      "Typography",
      "Photoshop",
      "Social Media Design",
      "Poster Design",
    ],
  },

  {
    id: 9,
    title: "Professional Video Editing Course",
    category: "Video Editing",
    duration: "5 Months",
    level: "Intermediate",
    description:
      "Learn cinematic editing, transitions, reels and professional production workflows.",
    learn: [
      "Premiere Pro",
      "After Effects",
      "Transitions",
      "Color Grading",
      "Motion Graphics",
    ],
  },

  {
    id: 10,
    title: "AutoCAD 2D",
    category: "CAD",
    duration: "4 Months",
    level: "Beginner",
    description:
      "Master technical drawing and drafting with AutoCAD 2D tools.",
    learn: [
      "2D Drafting",
      "Dimensions",
      "Layouts",
      "CAD Commands",
      "Projects",
    ],
  },

  {
    id: 11,
    title: "Revit + CAD",
    category: "Architecture",
    duration: "6 Months",
    level: "Advanced",
    description:
      "Learn BIM workflows and professional architecture designing tools.",
    learn: [
      "BIM",
      "3D Modeling",
      "Architecture Plans",
      "Revit Tools",
    ],
  },

  {
    id: 12,
    title: "Revit MEP",
    category: "MEP",
    duration: "6 Months",
    level: "Advanced",
    description:
      "Design modern MEP systems using industry-level Revit workflows.",
    learn: [
      "HVAC",
      "Electrical Systems",
      "MEP Design",
      "3D Coordination",
    ],
  },

  {
    id: 13,
    title: "Ethical Hacking",
    category: "Cyber Security",
    duration: "6 Months",
    level: "Advanced",
    description:
      "Learn ethical hacking and cybersecurity tools with real-world scenarios.",
    learn: [
      "Networking",
      "Penetration Testing",
      "Linux",
      "Cyber Security",
    ],
  },

  {
    id: 14,
    title: "Generative AI & Prompt Engineering",
    category: "Artificial Intelligence",
    duration: "4 Months",
    level: "Advanced",
    description:
      "Master prompt engineering and AI productivity workflows.",
    learn: [
      "ChatGPT",
      "Prompt Engineering",
      "AI Automation",
      "LLM Tools",
    ],
  },

  {
    id: 15,
    title: "Diploma in Interior Design",
    category: "Interior Design",
    duration: "6 Months",
    level: "Intermediate",
    description:
      "Learn professional interior designing concepts and modern 3D tools.",
    learn: [
      "Space Planning",
      "3D Concepts",
      "Furniture Layout",
      "Rendering",
    ],
  },

  {
    id: 16,
    title: "Certificate in Interior Design",
    category: "Interior Design",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Build strong fundamentals in residential and commercial interior design.",
    learn: [
      "Interior Basics",
      "Color Theory",
      "Layouts",
      "Decor Concepts",
    ],
  },

  {
    id: 17,
    title: "UI/UX Design Specialist",
    category: "Design",
    duration: "4 Months",
    level: "Intermediate",
    description:
      "Design user-friendly interfaces and delightful digital experiences for mobile and web apps.",
    learn: [
      "Wireframing",
      "Prototyping",
      "Figma & Adobe XD",
      "User Research",
      "UI Elements",
    ],
  },

  {
    id: 18,
    title: "Advanced Digital Marketing",
    category: "Marketing",
    duration: "5 Months",
    level: "Intermediate",
    description:
      "Grow businesses online with strategic SEO, paid advertisements, and social media marketing frameworks.",
    learn: [
      "Search Engine Optimization",
      "Google Ads (PPC)",
      "Social Media Marketing",
      "Email Marketing",
      "Google Analytics",
    ],
  },

  {
    id: 19,
    title: "Python Programming Foundation",
    category: "Development",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Start your coding journey with Python, the most popular and versatile programming language.",
    learn: [
      "Python Syntax",
      "Data Structures",
      "Object-Oriented Programming",
      "File Handling",
      "Basic Automation Scripts",
    ],
  },

  {
    id: 20,
    title: "Cloud Computing with AWS",
    category: "Cloud",
    duration: "6 Months",
    level: "Advanced",
    description:
      "Deploy, manage, and scale secure applications on the Amazon Web Services cloud platform.",
    learn: [
      "AWS EC2 & S3",
      "Cloud Architecture",
      "IAM Security",
      "VPC Networking",
      "Serverless Deployments",
    ],
  },

  {
    id: 21,
    title: "DevOps Engineering Masterclass",
    category: "IT & Software",
    duration: "6 Months",
    level: "Advanced",
    description:
      "Bridge the gap between development and operations using modern CI/CD automation tools.",
    learn: [
      "Docker Containers",
      "Kubernetes Orchestration",
      "Jenkins CI/CD",
      "Linux Administration",
      "Git & GitHub",
    ],
  },

  {
    id: 22,
    title: "Mobile App Development with Flutter",
    category: "Development",
    duration: "6 Months",
    level: "Advanced",
    description:
      "Build beautiful, natively compiled cross-platform applications for Android and iOS using a single codebase.",
    learn: [
      "Dart Programming",
      "Flutter Widgets",
      "State Management",
      "API Integration",
      "App Store Deployment",
    ],
  },

  {
    id: 23,
    title: "Cyber Security Fundamentals",
    category: "Cyber Security",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Understand the basics of network security, digital forensics, and how to protect digital assets.",
    learn: [
      "Network Protocols",
      "Cryptography Basics",
      "Malware Analysis",
      "Firewalls & Security",
    ],
  },

  {
    id: 24,
    title: "3D Max & V-Ray Architecture",
    category: "Architecture",
    duration: "5 Months",
    level: "Advanced",
    description:
      "Create ultra-realistic 3D architectural walk-throughs and interior/exterior renderings.",
    learn: [
      "3D Modeling",
      "V-Ray Material Setup",
      "Lighting Techniques",
      "Camera Animation",
      "Interior Rendering",
    ],
  },

  {
    id: 25,
    title: "Advanced Excel & MIS Reporting",
    category: "Analytics",
    duration: "2 Months",
    level: "Intermediate",
    description:
      "Master corporate reporting workflows and automated dashboard creation using advanced spreadsheets.",
    learn: [
      "Pivot Tables & Charts",
      "VLOOKUP & XLOOKUP",
      "Macros & VBA Introduction",
      "MIS Dashboard Design",
    ],
  },

  {
    id: 26,
    title: "Motion Graphics with After Effects",
    category: "Video Editing",
    duration: "4 Months",
    level: "Intermediate",
    description:
      "Bring static designs to life with professional visual effects, typography animations, and intro creation.",
    learn: [
      "Keyframe Animation",
      "Text Effects",
      "VFX Compositing",
      "Logo Animation",
    ],
  },

  {
    id: 27,
    title: "SolidWorks 3D Modeling",
    category: "CAD",
    duration: "4 Months",
    level: "Intermediate",
    description:
      "Learn industrial product designing, assembly drafting, and mechanical part modeling using SolidWorks.",
    learn: [
      "3D Part Modeling",
      "Assembly Design",
      "Sheet Metal Work",
      "Engineering Drawings",
    ],
  },

  {
    id: 28,
    title: "E-Commerce Business Management",
    category: "Marketing",
    duration: "3 Months",
    level: "Intermediate",
    description:
      "Learn how to set up, market, and manage successful online storefronts on Shopify and Amazon.",
    learn: [
      "Shopify Store Setup",
      "Product Sourcing",
      "Inventory Management",
      "Payment Gateway Integration",
    ],
  },

  {
    id: 29,
    title: "Data Structures & Algorithms in Java",
    category: "Development",
    duration: "6 Months",
    level: "Advanced",
    description:
      "Crack core coding interviews by mastering data structures, algorithms, and logical problem-solving.",
    learn: [
      "Arrays & Linked Lists",
      "Searching & Sorting",
      "Recursion & Dynamic Programming",
      "System Design Basics",
    ],
  },

  {
    id: 30,
    title: "FinTech & Financial Modeling",
    category: "Accounting",
    duration: "4 Months",
    level: "Advanced",
    description:
      "Analyze business performance and build powerful forecasting models for the corporate financial sector.",
    learn: [
      "Financial Statements",
      "Valuation Methods",
      "Ratio Analysis",
      "Forecasting Models",
    ],
  },

  {
    id: 31,
    title: "Creative Photography & Lighting",
    category: "Design",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Master manual camera controls, studio lighting layouts, and post-processing techniques for commercial photography.",
    learn: [
      "Camera Mechanics (ISO/Aperture)",
      "Studio Lighting Setups",
      "Composition Rules",
      "Lightroom Editing",
    ],
  },

  {
    id: 32,
    title: "SQL Developer Bootcamp",
    category: "Analytics",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Learn to manage relational databases, write complex queries, and handle database administration task workflows.",
    learn: [
      "Database Creation",
      "Joins & Subqueries",
      "Data Constraints",
      "Stored Procedures",
    ],
  },

  {
    id: 33,
    title: "Game Development with Unity 3D",
    category: "Development",
    duration: "6 Months",
    level: "Advanced",
    description:
      "Design, program, and launch your own 2D and 3D cross-platform video games using Unity engine.",
    learn: [
      "C# Scripting",
      "Game Physics & Mechanics",
      "UI & Menu Systems",
      "Asset Store Workflow",
    ],
  },

  {
    id: 34,
    title: "AI Product Management",
    category: "Artificial Intelligence",
    duration: "4 Months",
    level: "Advanced",
    description:
      "Learn to lead engineering teams, design AI product features, and deploy machine learning life cycles.",
    learn: [
      "Product Lifecycle (PLC)",
      "AI/ML User Experience",
      "Agile Tech Workflows",
      "Metrics & Analytics",
    ],
  },

  {
    id: 35,
    title: "HR Payroll & Operations Management",
    category: "Accounting",
    duration: "3 Months",
    level: "Intermediate",
    description:
      "Master corporate human resource workflows, legal compliance rules, and automated structural payroll processing.",
    learn: [
      "PF & ESI Compliance",
      "Salary Structuring",
      "Attendance Management",
      "HR Software Operations",
    ],
  },

  {
    id: 36,
    title: "Content Writing & Blogging Mastery",
    category: "Marketing",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Write high-ranking blog posts, engaging copy, and scripts that convert organic search traffic.",
    learn: [
      "SEO Copywriting",
      "Keyword Research Basics",
      "Content Strategy",
      "Monetization Formats",
    ],
  },

  {
    id: 37,
    title: "Linux System Administration",
    category: "IT & Software",
    duration: "4 Months",
    level: "Intermediate",
    description:
      "Master the command line, server configuration, and administrative control structures of Linux environments.",
    learn: [
      "Bash Scripting",
      "User Permissions",
      "Server Deployment",
      "Network Troubleshooting",
    ],
  },

  {
    id: 38,
    title: "Business Intelligence with Tableau",
    category: "Analytics",
    duration: "3 Months",
    level: "Intermediate",
    description:
      "Transform raw corporate data points into interactive corporate visual storyboards and executive dashboards.",
    learn: [
      "Data Connections",
      "Calculated Fields",
      "Interactive Mapping",
      "Storyboarding Layouts",
    ],
  },
];

const Empower = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const floatingStyles = useMemo(() => {
    return coursesData.map(() => ({
      "--x": `${Math.random() * 30 - 15}px`,
      "--y": `${Math.random() * 30 - 15}px`,
      "--duration": `${4 + Math.random() * 6}s`,
    }));
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedCourse ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCourse]);

  return (
    <>
      <section className="empower" id="empower-section">
        <div className="empower__container">

          <div className="empower__heading">
            <h1>EMPOWER YOUR FUTURE</h1>
            <p>38 Professional Courses for a Digital Tomorrow</p>
          </div>

          <div className="empower__grid">

            {coursesData.map((course, index) => (
              <div
                key={course.id}
                style={floatingStyles[index]}
                className="course__card"
                onClick={() => setSelectedCourse(course)}
              >

                <div className="course__icon">
                  {course.title.charAt(0)}
                </div>

                <h3>{course.title}</h3>

              </div>
            ))}

          </div>
        </div>
      </section>

      {selectedCourse && (
        <div
          className="course__modalOverlay"
          onClick={() => setSelectedCourse(null)}
        >

          <div
            className="course__modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="course__close"
              onClick={() => setSelectedCourse(null)}
            >
              <X size={28} />
            </button>

            <h2>{selectedCourse.title}</h2>

            <span className="course__category">
              Category: {selectedCourse.category}
            </span>

            <div className="course__info">
              <p>
                <strong>Duration:</strong> {selectedCourse.duration}
              </p>

              <p>
                <strong>Level:</strong> {selectedCourse.level}
              </p>
            </div>

            <div className="course__content">
              <h4>Course Overview:</h4>

              <p>{selectedCourse.description}</p>

              <h4>What you will learn:</h4>

              <ul>
                {selectedCourse.learn.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Empower;