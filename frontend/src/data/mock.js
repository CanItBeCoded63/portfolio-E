// Mock data for Yashwardhan Singh Chouhan's Portfolio
export const portfolioData = {
  // Personal Information
  personalInfo: {
    name: "Yashwardhan Singh Chouhan",
    title: "Computer Science Student & ML Researcher",
    location: "Chennai, India",
    phone: "+91 9329661346",
    email: "yashsinghchouhan098@gmail.com",
    linkedin: "https://linkedin.com/in/yashwardhan-chouhan",
    github: "https://github.com/yashwardhan-chouhan",
    bio: "BTech Computer Science student at IIIT Sri City with a passion for Machine Learning, AI research, and full-stack development. Currently working on Vision-Language Models for sign language detection.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },

  // Education
  education: [
    {
      id: 1,
      institution: "Indian Institute of Information Technology, Sri City",
      degree: "BTech in Computer Science",
      duration: "Jun 2023 – Present",
      gpa: "8.54/10",
      location: "Chennai, India",
      status: "Current"
    }
  ],

  // Skills organized by category
  skills: {
    programmingLanguages: ["C", "C++", "Python", "Java", "JavaScript", "HTML5", "CSS3", "Node.js"],
    frameworks: ["React.js", "Flask", "TensorFlow", "Keras", "Hugging Face", "Scikit-Learn", "NumPy", "Pandas", "Streamlit"],
    aiML: ["CNNs", "RNNs", "Transformers", "Vision-Language Models", "CLIP", "DeepSeek", "Prithvi EO v2", "BERT", "LSTMs", "Fine-tuning", "Transfer Learning"],
    databases: ["MySQL", "SQL", "MongoDB", "API Development"],
    tools: ["Git", "GitHub", "Docker", "MATLAB", "Jupyter Notebook", "Postman"],
    coreCompetencies: ["Data Structures & Algorithms", "Object-Oriented Programming", "Machine Learning Model Development", "REST API Integration", "Model Deployment & Evaluation"],
    operatingSystems: ["Ubuntu (Linux)", "Windows"]
  },

  // Work Experience
  experience: [
    {
      id: 1,
      title: "Junior Researcher",
      company: "Indian Institute of Information Technology, Sri City",
      project: "Sign Language Detection using Vision-Language Models (VLM)",
      duration: "Aug 2024 – Present",
      type: "Research",
      responsibilities: [
        "Conducted research on Earth Observation (EO) data leveraging advanced VLMs, including Prithvi EO Model v2, DeepSeek VLM, and CLIP",
        "Fine-tuned existing models to improve accuracy in sign language detection tasks, enhancing multimodal learning capabilities",
        "Explored novel approaches to model adaptation and transfer learning for real-world EO and accessibility applications"
      ]
    },
    {
      id: 2,
      title: "Web Development Intern",
      company: "BrewApps, India",
      duration: "Jan 2024 – May 2024",
      type: "Internship",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express"],
      responsibilities: [
        "Gained hands-on experience in modern web development practices using HTML, CSS, JavaScript, React.js, Node.js, and Express",
        "Built a responsive website as a project, implementing both frontend (React.js) and backend (Node.js + Express) components",
        "Learned fundamentals of full-stack development, including UI design, API integration, and basic deployment workflows"
      ]
    }
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "AI Interview Agent",
      description: "End-to-end facial recognition and interview feedback system with real-time identification and personalized insights.",
      technologies: ["Next.js", "TensorFlow", "Keras", "React", "Node.js", "Express.js"],
      features: [
        "Developed facial recognition model with 90% real-time identification accuracy on 1M+ images dataset",
        "Built Next.js application with feedback dashboards and server-side rendering",
        "Implemented interview feedback breakdowns, scoring, and retake functionality",
        "Enhanced authentication and security features with ML integration"
      ],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Disease Prediction System",
      description: "Deep learning pipeline to predict risk factors for diabetes, heart disease, and stroke with high accuracy.",
      technologies: ["Python", "TensorFlow", "Keras", "Scikit-Learn", "Data Processing"],
      features: [
        "Designed end-to-end deep learning pipeline for health risk prediction",
        "Trained models on 100K+ patient health records achieving 92% predictive accuracy",
        "Applied data preprocessing, feature engineering, and model optimization techniques",
        "Built user-friendly interface for risk assessment visualization"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Customer Churn Prediction",
      description: "Deep learning model to predict customer churn with real-time probability predictions and business insights.",
      technologies: ["TensorFlow", "Keras", "Scikit-Learn", "Streamlit", "Python"],
      features: [
        "Developed deep learning model achieving strong classification accuracy on 10K+ banking records",
        "Implemented comprehensive data preprocessing pipelines with scikit-learn",
        "Built Streamlit web app for real-time churn probability predictions",
        "Enhanced business decision-making with key churn indicators and retention strategies"
      ],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    }
  ],

  // Achievements & Awards
  achievements: [
    {
      id: 1,
      title: "State-level Basketball Player",
      category: "Sports",
      description: "Achieved state-level recognition in basketball, demonstrating teamwork and competitive excellence."
    },
    {
      id: 2,
      title: "Research Publication",
      category: "Academic",
      description: "Contributing to research on Vision-Language Models for accessibility applications."
    },
    {
      id: 3,
      title: "Team Leadership",
      category: "Leadership",
      description: "Successfully led content creation team at BrewApps, managing 5,000+ video content library."
    }
  ],

  // Extracurricular Activities
  extracurricular: [
    {
      id: 1,
      title: "Team Head, BrewApps",
      description: "Spearheaded the management of a 5,000+ video content library, boosting viewer engagement by 40% and leading a content creation team.",
      category: "Leadership"
    },
    {
      id: 2,
      title: "Public Speaking & Volunteering",
      description: "Delivered talks on digital engagement and contributed to community initiatives within the city.",
      category: "Community Service"
    },
    {
      id: 3,
      title: "Sports Enthusiast",
      description: "State-level Basketball player and Ping Pong enthusiast, maintaining active lifestyle and competitive spirit.",
      category: "Sports"
    }
  ],

  // Personal Statement/Reflection
  personalStatement: `As a Computer Science student passionate about the intersection of AI and real-world applications, I'm driven by the potential of technology to solve meaningful problems. My journey from web development internships to cutting-edge research in Vision-Language Models reflects my commitment to continuous learning and innovation.

Through my research work on sign language detection and various ML projects, I've discovered my passion for developing AI solutions that enhance accessibility and improve lives. My experience leading teams and contributing to community initiatives has taught me that technical skills are most powerful when combined with leadership and social responsibility.

I'm excited to continue pushing the boundaries of what's possible with AI and machine learning, while building solutions that make a positive impact on society.`,

  // Contact & Social Links
  contact: {
    email: "yashsinghchouhan098@gmail.com",
    phone: "+91 9329661346",
    location: "Chennai, India",
    linkedin: "https://linkedin.com/in/yashwardhan-chouhan",
    github: "https://github.com/yashwardhan-chouhan",
    website: "#"
  }
};

export default portfolioData;