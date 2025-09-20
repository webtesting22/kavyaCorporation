import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ServiceDetail.css";

const serviceData = {
  "fire-protection-consultancy": {
    id: "fire-protection-consultancy",
    number: "01",
    title: "Fire Protection Consultancy",
    subtitle: "Planning Stage for Architects & Builders",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    color: "#e63b3b",
    description:
      "Comprehensive fire protection consultancy services for architects, builders, and developers during the planning and design phase of construction projects.",
    overview:
      "Our fire protection consultancy services ensure that your building design incorporates the latest fire safety standards and complies with NBC (National Building Code) requirements from the very beginning of your project.",
    features: [
      "Building Design Review & Fire Safety Assessment",
      "NBC Compliance Planning & Documentation",
      "Fire Risk Analysis & Mitigation Strategies",
      "Architectural Fire Safety Integration",
      "Code Compliance Consultation",
      "Design Optimization for Fire Safety",
    ],
    process: [
      {
        step: "Initial Consultation",
        description:
          "We meet with architects and builders to understand project requirements and assess fire safety needs.",
      },
      {
        step: "Design Review",
        description:
          "Comprehensive review of architectural plans to identify fire safety requirements and potential risks.",
      },
      {
        step: "Compliance Planning",
        description:
          "Development of fire safety strategies that meet NBC standards and local fire department requirements.",
      },
      {
        step: "Documentation",
        description:
          "Preparation of detailed fire safety documentation and compliance reports for approval processes.",
      },
    ],
    benefits: [
      "Early Integration of Fire Safety Systems",
      "Reduced Design Changes & Cost Overruns",
      "Faster Approval Process",
      "Comprehensive Risk Assessment",
      "Expert Technical Guidance",
      "NBC Compliance Assurance",
    ],
    images: [
      "/Images/HeroSection/About/FireStystem.jpg",
      "/Images/HeroSection/About/Firestystem2.jpg",
    ],
    testimonials: [
      {
        name: "Rajesh Kumar",
        company: "ABC Construction Ltd.",
        role: "Project Manager",
        content:
          "Kavya's fire protection consultancy helped us save significant costs by identifying fire safety requirements early in our project design phase.",
        rating: 5,
      },
      {
        name: "Priya Sharma",
        company: "Metro Builders",
        role: "Architect",
        content:
          "Their expertise in NBC compliance and fire safety integration made our approval process smooth and efficient.",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "When should I engage fire protection consultancy services?",
        answer:
          "It's best to engage fire protection consultancy services during the initial planning and design phase of your construction project, ideally before architectural drawings are finalized.",
      },
      {
        question:
          "What documents are required for fire protection consultancy?",
        answer:
          "We typically need architectural drawings, site plans, building specifications, occupancy details, and any existing fire safety documentation.",
      },
      {
        question: "How long does the consultancy process take?",
        answer:
          "The consultancy process typically takes 2-4 weeks depending on project complexity and size. We provide detailed timelines during initial consultation.",
      },
    ],
    pricing: {
      startingFrom: "₹25,000",
      includes: [
        "Initial consultation and site visit",
        "Design review and recommendations",
        "NBC compliance assessment",
        "Fire safety strategy development",
        "Documentation and reports",
      ],
    },
    certifications: [
      "ISO 9001:2015 Certified",
      "NBC Compliance Expert",
      "Fire Safety Consultant License",
      "ISO 14001:2015 Environmental Management",
    ],
  },
  "fire-dept-liaising": {
    id: "fire-dept-liaising",
    number: "02",
    title: "Fire Dept. Liaising",
    subtitle: "Obtain Provisional & Final Fire NOCs",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "#ff6b6b",
    description:
      "Professional liaison services with fire departments to obtain provisional and final Fire NOCs (No Objection Certificates) for your construction projects.",
    overview:
      "We handle all interactions with fire departments, ensuring smooth approval processes and timely issuance of required fire safety certificates.",
    features: [
      "Provisional Fire NOC Application",
      "Final Fire NOC Processing",
      "Documentation Preparation",
      "Fire Department Coordination",
      "Compliance Verification",
      "Follow-up & Status Updates",
    ],
    process: [
      {
        step: "Document Preparation",
        description:
          "Compilation and preparation of all required documents for fire department submission.",
      },
      {
        step: "Application Submission",
        description:
          "Professional submission of applications with proper documentation and compliance verification.",
      },
      {
        step: "Department Liaison",
        description:
          "Continuous coordination with fire department officials for smooth processing.",
      },
      {
        step: "NOC Issuance",
        description: "Final approval and issuance of Fire NOC certificates.",
      },
    ],
    benefits: [
      "Expert Documentation Handling",
      "Faster Approval Times",
      "Professional Representation",
      "Reduced Administrative Burden",
      "Compliance Assurance",
      "Ongoing Support",
    ],
    images: [
      "/Images/HeroSection/Fire Alarm Systems.jpg",
      "/Images/HeroSection/Commercial Systems.jpg",
    ],
    testimonials: [
      {
        name: "Amit Patel",
        company: "Skyline Developers",
        role: "Managing Director",
        content:
          "Kavya handled our Fire NOC process efficiently. Their liaison services saved us months of paperwork and follow-ups.",
        rating: 5,
      },
      {
        name: "Sunita Reddy",
        company: "Green Valley Constructions",
        role: "Legal Head",
        content:
          "Professional documentation and timely coordination with fire department officials. Highly recommended for NOC services.",
        rating: 5,
      },
    ],
    faq: [
      {
        question:
          "What is the difference between Provisional and Final Fire NOC?",
        answer:
          "Provisional NOC is issued during construction phase, while Final NOC is issued after completion and inspection of fire safety systems.",
      },
      {
        question: "How long does it take to get Fire NOC?",
        answer:
          "Provisional NOC typically takes 15-30 days, while Final NOC takes 30-45 days depending on documentation completeness and fire department workload.",
      },
      {
        question: "What documents are required for Fire NOC application?",
        answer:
          "Building plans, fire safety system designs, occupancy certificate, structural stability certificate, and other relevant documents as per local fire department requirements.",
      },
    ],
    pricing: {
      startingFrom: "₹15,000",
      includes: [
        "Document preparation and verification",
        "Application submission",
        "Fire department coordination",
        "Follow-up and status updates",
        "NOC collection and delivery",
      ],
    },
    certifications: [
      "Fire Department Liaison License",
      "Documentation Expert Certification",
      "Government Liaison Specialist",
      "Legal Compliance Consultant",
    ],
  },
  "fire-fighting-system-design": {
    id: "fire-fighting-system-design",
    number: "03",
    title: "Fire Fighting System Design",
    subtitle: "As per NBC Norms & Commissioning",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    color: "#e63b3b",
    description:
      "Complete fire fighting system design and commissioning services in accordance with NBC norms and international standards.",
    overview:
      "Our expert team designs comprehensive fire fighting systems tailored to your building requirements, ensuring optimal protection and compliance with all regulatory standards.",
    features: [
      "Hydrant System Design",
      "Sprinkler System Planning",
      "Fire Alarm System Design",
      "Emergency Lighting Design",
      "Fire Suppression System Design",
      "System Integration & Commissioning",
    ],
    process: [
      {
        step: "Site Assessment",
        description:
          "Detailed evaluation of building structure and fire safety requirements.",
      },
      {
        step: "System Design",
        description:
          "Comprehensive design of fire fighting systems based on NBC norms and building specifications.",
      },
      {
        step: "Design Review",
        description:
          "Professional review and optimization of fire safety system designs.",
      },
      {
        step: "Commissioning",
        description:
          "Complete system installation, testing, and commissioning with certification.",
      },
    ],
    benefits: [
      "NBC Compliant Design",
      "Optimized System Performance",
      "Cost-Effective Solutions",
      "Professional Installation",
      "Comprehensive Testing",
      "Full Documentation",
    ],
    images: [
      "/Images/HeroSection/Fire Extinguishers.png",
      "/Images/HeroSection/Exit Lighting.jpg",
    ],
    testimonials: [
      {
        name: "Vikram Singh",
        company: "Tech Park Industries",
        role: "Facility Manager",
        content:
          "Excellent fire fighting system design that perfectly integrated with our building architecture while meeting all NBC requirements.",
        rating: 5,
      },
      {
        name: "Meera Joshi",
        company: "Hospitality Group",
        role: "Operations Director",
        content:
          "Professional system design and commissioning. Their attention to detail and compliance standards is outstanding.",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "What fire fighting systems do you design?",
        answer:
          "We design hydrant systems, sprinkler systems, fire alarm systems, emergency lighting, fire suppression systems, and integrated fire safety solutions.",
      },
      {
        question: "Do you provide installation services?",
        answer:
          "Yes, we provide complete design, supply, installation, testing, and commissioning services for all fire fighting systems.",
      },
      {
        question: "How do you ensure NBC compliance?",
        answer:
          "Our designs are based on latest NBC norms, local fire department requirements, and international standards. We conduct thorough compliance reviews.",
      },
    ],
    pricing: {
      startingFrom: "₹50,000",
      includes: [
        "Site assessment and analysis",
        "System design and engineering",
        "Design review and optimization",
        "Installation supervision",
        "Testing and commissioning",
      ],
    },
    certifications: [
      "Fire System Design Engineer",
      "NBC Compliance Specialist",
      "Installation & Commissioning Expert",
      "Quality Management System Certified",
    ],
  },
  "fire-audit": {
    id: "fire-audit",
    number: "04",
    title: "Fire Audit",
    subtitle: "Complete Safety Assessment",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "#ff6b6b",
    description:
      "Comprehensive fire safety audit and assessment services to evaluate existing fire protection systems and ensure compliance with safety standards.",
    overview:
      "Our detailed fire audit process identifies potential risks, evaluates system effectiveness, and provides actionable recommendations for improved fire safety.",
    features: [
      "Complete System Assessment",
      "Compliance Verification",
      "Risk Identification & Analysis",
      "Performance Evaluation",
      "Recommendation Reports",
      "Follow-up Audits",
    ],
    process: [
      {
        step: "Pre-Audit Planning",
        description:
          "Preparation and scheduling of comprehensive fire safety audit activities.",
      },
      {
        step: "System Inspection",
        description:
          "Detailed inspection of all fire safety systems, equipment, and procedures.",
      },
      {
        step: "Risk Assessment",
        description:
          "Identification and analysis of potential fire risks and safety gaps.",
      },
      {
        step: "Report Generation",
        description:
          "Comprehensive audit report with findings, recommendations, and action plans.",
      },
    ],
    benefits: [
      "Comprehensive Safety Assessment",
      "Compliance Verification",
      "Risk Mitigation",
      "Improved Safety Standards",
      "Detailed Documentation",
      "Ongoing Support",
    ],
    images: [
      "/Images/HeroSection/Fire Alarm Systems.jpg",
      "/Images/HeroSection/Fire Extinguisher Training.jpg",
    ],
    testimonials: [
      {
        name: "Dr. Ravi Verma",
        company: "City Hospital",
        role: "Administrator",
        content:
          "Comprehensive fire audit helped us identify critical safety gaps. Their recommendations significantly improved our fire safety standards.",
        rating: 5,
      },
      {
        name: "Kavita Agarwal",
        company: "Shopping Mall Complex",
        role: "Safety Officer",
        content:
          "Professional audit process with detailed reports and actionable recommendations. Excellent follow-up support.",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "How often should fire audits be conducted?",
        answer:
          "Fire audits should be conducted annually for most buildings, and bi-annually for high-risk facilities like hospitals, schools, and high-rise buildings.",
      },
      {
        question: "What does a fire audit include?",
        answer:
          "Fire audit includes system inspection, compliance verification, risk assessment, performance evaluation, and comprehensive reporting with recommendations.",
      },
      {
        question: "Do you provide follow-up services?",
        answer:
          "Yes, we provide follow-up audits, implementation support, and ongoing consultation to ensure continuous fire safety compliance.",
      },
    ],
    pricing: {
      startingFrom: "₹20,000",
      includes: [
        "Pre-audit planning and scheduling",
        "Comprehensive system inspection",
        "Risk assessment and analysis",
        "Detailed audit report",
        "Recommendations and action plan",
      ],
    },
    certifications: [
      "Fire Safety Auditor License",
      "Risk Assessment Specialist",
      "Compliance Verification Expert",
      "Safety Management System Certified",
    ],
  },
  "fire-equipment-supply-amc": {
    id: "fire-equipment-supply-amc",
    number: "05",
    title: "Fire Equipment Supply & AMC",
    subtitle: "Extinguishers & Maintenance",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    color: "#e63b3b",
    description:
      "Complete fire equipment supply and Annual Maintenance Contract (AMC) services for all types of fire extinguishers and safety equipment.",
    overview:
      "We provide high-quality fire equipment and comprehensive maintenance services to ensure your fire safety systems remain in optimal working condition.",
    features: [
      "Fire Extinguisher Supply",
      "Equipment Installation",
      "Annual Maintenance Contracts",
      "Regular Inspections",
      "Refilling Services",
      "Certification & Documentation",
    ],
    process: [
      {
        step: "Equipment Assessment",
        description:
          "Evaluation of existing equipment and determination of supply requirements.",
      },
      {
        step: "Supply & Installation",
        description:
          "Delivery and professional installation of fire safety equipment.",
      },
      {
        step: "Maintenance Planning",
        description:
          "Development of comprehensive maintenance schedules and AMC agreements.",
      },
      {
        step: "Ongoing Service",
        description:
          "Regular maintenance, inspection, and certification services.",
      },
    ],
    benefits: [
      "Quality Equipment Supply",
      "Professional Installation",
      "Regular Maintenance",
      "Compliance Assurance",
      "Cost-Effective AMC",
      "24/7 Support",
    ],
    images: [
      "/Images/HeroSection/Fire Extinguishers.png",
      "/Images/HeroSection/Hood Cleaning Service.jpg",
    ],
    testimonials: [
      {
        name: "Sanjay Gupta",
        company: "Office Complex",
        role: "Facility Head",
        content:
          "Reliable AMC services with timely maintenance. Their technicians are professional and equipment quality is excellent.",
        rating: 5,
      },
      {
        name: "Anita Desai",
        company: "Residential Society",
        role: "Secretary",
        content:
          "Cost-effective AMC package with comprehensive coverage. Regular inspections and prompt service response.",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "What types of fire equipment do you supply?",
        answer:
          "We supply fire extinguishers (ABC, CO2, Water, Foam), fire hoses, nozzles, brackets, fire blankets, and other fire safety equipment.",
      },
      {
        question: "What does AMC include?",
        answer:
          "AMC includes regular inspections, maintenance, refilling, testing, certification, emergency repairs, and 24/7 support services.",
      },
      {
        question: "How often is maintenance performed?",
        answer:
          "Maintenance frequency depends on equipment type: monthly inspections, quarterly testing, and annual comprehensive maintenance.",
      },
    ],
    pricing: {
      startingFrom: "₹5,000",
      includes: [
        "Equipment supply and installation",
        "Annual maintenance contract",
        "Regular inspections and testing",
        "Refilling and certification",
        "Emergency support services",
      ],
    },
    certifications: [
      "Fire Equipment Supplier License",
      "AMC Service Provider",
      "Equipment Installation Expert",
      "Maintenance & Testing Certified",
    ],
  },
  "fire-fighting-training": {
    id: "fire-fighting-training",
    number: "06",
    title: "Fire Fighting Training",
    subtitle: "Employee & Security Personnel",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "#ff6b6b",
    description:
      "Professional fire fighting training programs for employees and security personnel to ensure proper response during fire emergencies.",
    overview:
      "Our comprehensive training programs equip your staff with essential fire safety knowledge and practical skills for effective emergency response.",
    features: [
      "Fire Safety Awareness Training",
      "Practical Fire Fighting Techniques",
      "Emergency Evacuation Procedures",
      "Equipment Operation Training",
      "Fire Prevention Strategies",
      "Certification Programs",
    ],
    process: [
      {
        step: "Training Needs Assessment",
        description:
          "Evaluation of organizational requirements and customization of training programs.",
      },
      {
        step: "Theoretical Training",
        description:
          "Comprehensive classroom sessions covering fire safety principles and procedures.",
      },
      {
        step: "Practical Training",
        description:
          "Hands-on training with fire fighting equipment and emergency response procedures.",
      },
      {
        step: "Certification",
        description:
          "Assessment and certification of trained personnel with valid certificates.",
      },
    ],
    benefits: [
      "Enhanced Safety Awareness",
      "Improved Emergency Response",
      "Reduced Fire Risks",
      "Compliance Training",
      "Certified Personnel",
      "Ongoing Support",
    ],
    images: [
      "/Images/HeroSection/Fire Extinguisher Training.jpg",
      "/Images/HeroSection/Fire Alarm Systems.jpg",
    ],
    testimonials: [
      {
        name: "Rohit Mehta",
        company: "IT Company",
        role: "HR Manager",
        content:
          "Excellent fire fighting training program. Our employees are now confident in handling fire emergencies and using fire safety equipment.",
        rating: 5,
      },
      {
        name: "Deepika Nair",
        company: "School Administration",
        role: "Principal",
        content:
          "Comprehensive training for our staff and students. The practical sessions were particularly valuable for building confidence.",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "Who should attend fire fighting training?",
        answer:
          "All employees, security personnel, facility managers, and designated fire wardens should attend fire fighting training for workplace safety.",
      },
      {
        question: "What does the training program include?",
        answer:
          "Training includes fire safety awareness, practical fire fighting techniques, evacuation procedures, equipment operation, and emergency response protocols.",
      },
      {
        question: "Do you provide certificates?",
        answer:
          "Yes, we provide valid certificates upon successful completion of training, which are recognized by fire departments and regulatory authorities.",
      },
    ],
    pricing: {
      startingFrom: "₹3,000",
      includes: [
        "Training needs assessment",
        "Theoretical and practical sessions",
        "Equipment demonstration",
        "Certification and documentation",
        "Follow-up support",
      ],
    },
    certifications: [
      "Fire Safety Training Instructor",
      "Emergency Response Specialist",
      "Training Program Developer",
      "Safety Education Expert",
    ],
  },
  "systems-survey-form-b": {
    id: "systems-survey-form-b",
    number: "07",
    title: "Systems Survey & Form B",
    subtitle: "Maintenance & Compliance",
    icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    color: "#e63b3b",
    description:
      "Comprehensive systems survey and Form B documentation services for maintenance compliance and regulatory requirements.",
    overview:
      "We provide detailed system surveys and prepare Form B documentation to ensure compliance with fire safety regulations and maintenance standards.",
    features: [
      "System Performance Survey",
      "Form B Documentation",
      "Compliance Verification",
      "Maintenance Records",
      "Regulatory Reporting",
      "Follow-up Services",
    ],
    process: [
      {
        step: "System Survey",
        description:
          "Detailed inspection and assessment of fire safety system performance and condition.",
      },
      {
        step: "Documentation",
        description:
          "Preparation of comprehensive Form B documentation and compliance reports.",
      },
      {
        step: "Verification",
        description:
          "Verification of system compliance with regulatory requirements and standards.",
      },
      {
        step: "Reporting",
        description:
          "Submission of required documentation to relevant authorities.",
      },
    ],
    benefits: [
      "Regulatory Compliance",
      "Detailed Documentation",
      "System Performance Assessment",
      "Maintenance Tracking",
      "Professional Reporting",
      "Ongoing Support",
    ],
    images: [
      "/Images/HeroSection/Commercial Systems.jpg",
      "/Images/HeroSection/Exit Lighting.jpg",
    ],
    testimonials: [
      {
        name: "Arjun Malhotra",
        company: "Manufacturing Unit",
        role: "Safety Manager",
        content:
          "Professional systems survey and Form B documentation. Their compliance expertise helped us maintain regulatory standards.",
        rating: 5,
      },
      {
        name: "Shilpa Iyer",
        company: "Commercial Building",
        role: "Property Manager",
        content:
          "Detailed survey reports and timely Form B submission. Excellent documentation and regulatory compliance support.",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "What is Form B documentation?",
        answer:
          "Form B is a mandatory fire safety compliance document required by fire departments, documenting system performance and maintenance records.",
      },
      {
        question: "How often should systems survey be conducted?",
        answer:
          "Systems survey should be conducted every 6 months for most buildings, and quarterly for high-risk facilities to ensure compliance.",
      },
      {
        question: "What happens if Form B is not submitted?",
        answer:
          "Non-submission of Form B can result in penalties, closure notices, or legal action by fire department authorities.",
      },
    ],
    pricing: {
      startingFrom: "₹12,000",
      includes: [
        "System performance survey",
        "Form B documentation",
        "Compliance verification",
        "Regulatory reporting",
        "Follow-up services",
      ],
    },
    certifications: [
      "Systems Survey Specialist",
      "Form B Documentation Expert",
      "Regulatory Compliance Consultant",
      "Fire Department Liaison Officer",
    ],
  },
  "high-rise-protection": {
    id: "high-rise-protection",
    number: "08",
    title: "High Rise Protection",
    subtitle: "Specialized Building Solutions",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    color: "#ff6b6b",
    description:
      "Specialized fire protection solutions for high-rise buildings with advanced systems and comprehensive safety measures.",
    overview:
      "Our high-rise protection services address the unique challenges of tall buildings with specialized fire safety systems and evacuation procedures.",
    features: [
      "High-Rise Fire Suppression Systems",
      "Advanced Smoke Management",
      "Elevator Fire Safety",
      "Stairwell Pressurization",
      "Emergency Communication Systems",
      "Evacuation Planning",
    ],
    process: [
      {
        step: "Building Analysis",
        description:
          "Comprehensive analysis of high-rise building structure and fire safety requirements.",
      },
      {
        step: "System Design",
        description:
          "Specialized design of fire protection systems for high-rise applications.",
      },
      {
        step: "Installation",
        description:
          "Professional installation of advanced fire safety systems and equipment.",
      },
      {
        step: "Testing & Commissioning",
        description:
          "Comprehensive testing and commissioning of all fire safety systems.",
      },
    ],
    benefits: [
      "Specialized Solutions",
      "Advanced Technology",
      "Comprehensive Protection",
      "Regulatory Compliance",
      "Professional Installation",
      "Ongoing Maintenance",
    ],
    images: [
      "/Images/HeroSection/About/FireStystem.jpg",
      "/Images/HeroSection/Fire Alarm Systems.jpg",
    ],
    testimonials: [
      {
        name: "Vikram Agarwal",
        company: "High-Rise Developer",
        role: "Project Director",
        content:
          "Specialized high-rise fire protection solutions that addressed unique challenges of our 40-story building. Excellent technical expertise.",
        rating: 5,
      },
      {
        name: "Dr. Neha Kapoor",
        company: "Hospital Complex",
        role: "Administrator",
        content:
          "Advanced fire protection systems for our high-rise hospital. Their specialized solutions ensure patient safety and regulatory compliance.",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "What makes high-rise fire protection different?",
        answer:
          "High-rise buildings require specialized systems like stairwell pressurization, advanced smoke management, elevator fire safety, and complex evacuation procedures.",
      },
      {
        question: "What systems are included in high-rise protection?",
        answer:
          "High-rise protection includes fire suppression systems, smoke management, emergency communication, elevator fire safety, and comprehensive evacuation planning.",
      },
      {
        question: "How do you handle evacuation in high-rise buildings?",
        answer:
          "We design phased evacuation systems, stairwell pressurization, emergency communication systems, and provide detailed evacuation procedures for different scenarios.",
      },
    ],
    pricing: {
      startingFrom: "₹1,00,000",
      includes: [
        "Building analysis and assessment",
        "Specialized system design",
        "Advanced technology integration",
        "Installation and commissioning",
        "Ongoing maintenance support",
      ],
    },
    certifications: [
      "High-Rise Fire Protection Specialist",
      "Advanced System Design Engineer",
      "Smoke Management Expert",
      "Evacuation Planning Consultant",
    ],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceData[serviceId];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="service-not-found">
        <div className="not-found-content">
          <h1>Service Not Found</h1>
          <p>The requested service could not be found.</p>
          <button onClick={() => navigate("/")} className="back-button">
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const phoneNumber = "9327337171";
    const message = `🔥 Hello Kavya Fire Protection!\n\nI'm interested in your ${service.title} service:\n\n${service.description}\n\nPlease provide me with more details and a quotation for my requirements.\n\nThank you!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <span onClick={() => navigate("/")}>Home</span>
            <span>/</span>
            <span onClick={() => navigate("/")}>Services</span>
            <span>/</span>
            <span className="current">{service.title}</span>
          </div>

          <div className="hero-content">
            <div className="service-badge">
              <span className="service-number">{service.number}</span>
              <span className="service-category">Our Process</span>
            </div>

            <h1 className="service-title">{service.title}</h1>
            <p className="service-subtitle">{service.subtitle}</p>
            <p className="service-description">{service.description}</p>

            <div className="hero-actions">
              <button onClick={handleWhatsApp} className="primary-button">
                <svg
                  className="btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Get Quote
              </button>
              <button
                onClick={() => navigate("/")}
                className="secondary-button"
              >
                <svg
                  className="btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </button>
            </div>
          </div>

          <div className="service-icon">
            <div className="icon-wrapper">
              <svg
                className="service-icon-svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d={service.icon} />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="service-overview">
        <div className="container">
          <div className="section-header">
            <h2>Service Overview</h2>
            <p>{service.overview}</p>
          </div>

          <div className="overview-grid">
            <div className="overview-content">
              <h3>What We Provide</h3>
              <ul className="features-list">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <svg
                      className="check-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overview-images">
              {service.images.map((image, index) => (
                <div key={index} className="image-container">
                  <img
                    src={image}
                    alt={`${service.title} - Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>
              Step-by-step approach to delivering exceptional fire safety
              solutions
            </p>
          </div>

          <div className="process-steps">
            {service.process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <h3>{step.step}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Service</h2>
            <p>
              Key benefits and advantages of our professional fire safety
              solutions
            </p>
          </div>

          <div className="benefits-grid">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3>{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="service-pricing">
        <div className="container">
          <div className="section-header">
            <h2>Service Pricing</h2>
            <p>Transparent pricing with comprehensive service coverage</p>
          </div>

          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Starting From</h3>
              <div className="price">{service.pricing.startingFrom}</div>
            </div>

            <div className="pricing-includes">
              <h4>What's Included:</h4>
              <ul>
                {service.pricing.includes.map((item, index) => (
                  <li key={index}>
                    <svg
                      className="check-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button onClick={handleWhatsApp} className="pricing-cta">
              Get Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="service-testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>What our clients say about our services</p>
          </div>

          <div className="testimonials-grid">
            {service.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>

                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="star-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="service-faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our {service.title} service</p>
          </div>

          <div className="faq-list">
            {service.faq.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <svg
                    className="faq-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="service-certifications">
        <div className="container">
          <div className="section-header">
            <h2>Our Certifications</h2>
            <p>Professional certifications and accreditations</p>
          </div>

          <div className="certifications-grid">
            {service.certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3>{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Contact us today for a consultation and let us help you implement
              comprehensive fire safety solutions.
            </p>
            <div className="cta-buttons">
              <button onClick={handleWhatsApp} className="cta-primary">
                <svg
                  className="btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us Now
              </button>
              <button
                onClick={() => navigate("/products")}
                className="cta-secondary"
              >
                View Our Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
