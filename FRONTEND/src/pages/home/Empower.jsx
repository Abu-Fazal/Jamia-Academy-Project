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

  ...Array.from({ length: 22 }, (_, i) => ({
    id: i + 17,
    title: `Professional Tech Course ${i + 17}`,
    category: "IT & Software",
    duration: `${3 + (i % 5)} Months`,
    level: i % 2 === 0 ? "Beginner" : "Advanced",
    description:
      "Industry-ready professional IT course designed for modern digital careers.",
    learn: [
      "Practical Training",
      "Projects",
      "Industry Skills",
      "Certification",
      "Job Assistance",
    ],
  })),
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
      <section className="empower">
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