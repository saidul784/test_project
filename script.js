// Role data with industry standards and roadmaps
const roleData = {
    "ml engineer": {
        title: "ML Engineer",
        industryStandards: {
            avgSalary: "$120,000 - $180,000",
            demandGrowth: "+35% YoY",
            topCompanies: ["Google", "Amazon", "Meta", "Microsoft"],
            keySkills: ["Python", "TensorFlow", "PyTorch", "SQL", "Statistics", "Deep Learning"]
        },
        roadmap: {
            30: [
                {
                    week: "Week 1-2",
                    title: "Python & Mathematics Foundations",
                    tasks: [
                        "Master Python basics and NumPy",
                        "Review Linear Algebra and Calculus",
                        "Learn Pandas for data manipulation",
                        "Understand probability and statistics"
                    ]
                },
                {
                    week: "Week 3-4",
                    title: "Machine Learning Fundamentals",
                    tasks: [
                        "Study supervised learning algorithms",
                        "Implement regression and classification",
                        "Learn model evaluation metrics",
                        "Practice with Scikit-learn"
                    ]
                }
            ],
            60: [
                {
                    week: "Week 5-6",
                    title: "Deep Learning Basics",
                    tasks: [
                        "Understand neural networks architecture",
                        "Learn backpropagation and optimization",
                        "Implement CNNs for image processing",
                        "Start with TensorFlow/PyTorch"
                    ]
                },
                {
                    week: "Week 7-8",
                    title: "Advanced Deep Learning",
                    tasks: [
                        "Study RNNs and LSTMs for sequences",
                        "Learn transfer learning techniques",
                        "Implement attention mechanisms",
                        "Build your first deep learning project"
                    ]
                }
            ],
            90: [
                {
                    week: "Week 9-10",
                    title: "MLOps & Deployment",
                    tasks: [
                        "Learn model versioning with MLflow",
                        "Understand containerization with Docker",
                        "Deploy models using FastAPI",
                        "Set up CI/CD pipelines"
                    ]
                },
                {
                    week: "Week 11-12",
                    title: "Specialization & Portfolio",
                    tasks: [
                        "Choose a specialization (NLP, CV, etc.)",
                        "Build 2-3 production-ready projects",
                        "Contribute to open-source ML projects",
                        "Prepare for technical interviews"
                    ]
                }
            ]
        },
        projects: [
            {
                title: "Customer Churn Prediction",
                description: "Build a model to predict customer churn using classification algorithms",
                difficulty: "beginner"
            },
            {
                title: "Image Classification with CNNs",
                description: "Create an image classifier using deep learning and transfer learning",
                difficulty: "intermediate"
            },
            {
                title: "NLP Sentiment Analysis",
                description: "Develop a sentiment analysis system using transformers",
                difficulty: "intermediate"
            },
            {
                title: "Recommender System",
                description: "Build a collaborative filtering recommendation engine",
                difficulty: "advanced"
            }
        ]
    },
    "frontend developer": {
        title: "Frontend Developer",
        industryStandards: {
            avgSalary: "$85,000 - $140,000",
            demandGrowth: "+22% YoY",
            topCompanies: ["Meta", "Airbnb", "Netflix", "Shopify"],
            keySkills: ["JavaScript", "React", "TypeScript", "CSS", "HTML", "Git"]
        },
        roadmap: {
            30: [
                {
                    week: "Week 1-2",
                    title: "HTML & CSS Mastery",
                    tasks: [
                        "Master semantic HTML5",
                        "Learn modern CSS (Flexbox, Grid)",
                        "Understand responsive design principles",
                        "Practice CSS animations and transitions"
                    ]
                },
                {
                    week: "Week 3-4",
                    title: "JavaScript Fundamentals",
                    tasks: [
                        "Learn ES6+ features",
                        "Understand DOM manipulation",
                        "Master async JavaScript (Promises, async/await)",
                        "Practice with API integration"
                    ]
                }
            ],
            60: [
                {
                    week: "Week 5-6",
                    title: "React Framework",
                    tasks: [
                        "Learn React components and hooks",
                        "Understand state management",
                        "Master React Router",
                        "Build reusable component library"
                    ]
                },
                {
                    week: "Week 7-8",
                    title: "Advanced React & State Management",
                    tasks: [
                        "Learn Redux or Context API",
                        "Understand performance optimization",
                        "Implement code splitting",
                        "Master React testing with Jest"
                    ]
                }
            ],
            90: [
                {
                    week: "Week 9-10",
                    title: "TypeScript & Build Tools",
                    tasks: [
                        "Learn TypeScript fundamentals",
                        "Understand Webpack/Vite",
                        "Master version control with Git",
                        "Learn CI/CD for frontend"
                    ]
                },
                {
                    week: "Week 11-12",
                    title: "Portfolio & Interview Prep",
                    tasks: [
                        "Build 3+ production-ready projects",
                        "Create an impressive portfolio website",
                        "Practice coding challenges",
                        "Prepare for frontend interviews"
                    ]
                }
            ]
        },
        projects: [
            {
                title: "E-commerce Product Page",
                description: "Build a responsive product page with cart functionality",
                difficulty: "beginner"
            },
            {
                title: "Weather Dashboard",
                description: "Create a weather app using API integration and data visualization",
                difficulty: "beginner"
            },
            {
                title: "Social Media Dashboard",
                description: "Build a full-featured dashboard with React and state management",
                difficulty: "intermediate"
            },
            {
                title: "Real-time Chat Application",
                description: "Develop a chat app with WebSockets and React",
                difficulty: "advanced"
            }
        ]
    },
    "backend developer": {
        title: "Backend Developer",
        industryStandards: {
            avgSalary: "$95,000 - $155,000",
            demandGrowth: "+28% YoY",
            topCompanies: ["Amazon", "Google", "Stripe", "Uber"],
            keySkills: ["Python/Node.js", "SQL", "REST APIs", "Docker", "AWS", "System Design"]
        },
        roadmap: {
            30: [
                {
                    week: "Week 1-2",
                    title: "Programming Language Mastery",
                    tasks: [
                        "Master Python or Node.js fundamentals",
                        "Learn OOP principles",
                        "Understand data structures and algorithms",
                        "Practice problem-solving"
                    ]
                },
                {
                    week: "Week 3-4",
                    title: "Database Fundamentals",
                    tasks: [
                        "Learn SQL and relational databases",
                        "Understand NoSQL databases (MongoDB)",
                        "Master database design principles",
                        "Practice query optimization"
                    ]
                }
            ],
            60: [
                {
                    week: "Week 5-6",
                    title: "API Development",
                    tasks: [
                        "Build RESTful APIs",
                        "Learn API authentication (JWT, OAuth)",
                        "Understand API documentation (Swagger)",
                        "Implement error handling"
                    ]
                },
                {
                    week: "Week 7-8",
                    title: "Framework & Architecture",
                    tasks: [
                        "Master Express.js or Django/Flask",
                        "Learn MVC architecture",
                        "Understand microservices",
                        "Implement caching strategies"
                    ]
                }
            ],
            90: [
                {
                    week: "Week 9-10",
                    title: "DevOps & Cloud",
                    tasks: [
                        "Learn Docker containerization",
                        "Understand AWS/GCP basics",
                        "Master CI/CD pipelines",
                        "Learn monitoring and logging"
                    ]
                },
                {
                    week: "Week 11-12",
                    title: "System Design & Scale",
                    tasks: [
                        "Study system design principles",
                        "Learn load balancing and scaling",
                        "Build scalable applications",
                        "Prepare for backend interviews"
                    ]
                }
            ]
        },
        projects: [
            {
                title: "RESTful API for Blog",
                description: "Create a complete CRUD API with authentication",
                difficulty: "beginner"
            },
            {
                title: "E-commerce Backend",
                description: "Build a scalable e-commerce API with payment integration",
                difficulty: "intermediate"
            },
            {
                title: "Real-time Notification Service",
                description: "Develop a microservice for push notifications",
                difficulty: "intermediate"
            },
            {
                title: "Distributed Task Queue",
                description: "Build a job queue system with Redis and workers",
                difficulty: "advanced"
            }
        ]
    },
    "devops engineer": {
        title: "DevOps Engineer",
        industryStandards: {
            avgSalary: "$105,000 - $165,000",
            demandGrowth: "+32% YoY",
            topCompanies: ["Amazon", "Google", "Netflix", "HashiCorp"],
            keySkills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Python", "Terraform"]
        },
        roadmap: {
            30: [
                {
                    week: "Week 1-2",
                    title: "Linux & Scripting",
                    tasks: [
                        "Master Linux command line",
                        "Learn Bash scripting",
                        "Understand file systems and permissions",
                        "Practice Python for automation"
                    ]
                },
                {
                    week: "Week 3-4",
                    title: "Version Control & CI/CD Basics",
                    tasks: [
                        "Master Git workflows",
                        "Learn GitHub Actions or GitLab CI",
                        "Understand CI/CD principles",
                        "Build your first pipeline"
                    ]
                }
            ],
            60: [
                {
                    week: "Week 5-6",
                    title: "Containerization",
                    tasks: [
                        "Master Docker fundamentals",
                        "Learn Docker Compose",
                        "Understand container networking",
                        "Practice building optimized images"
                    ]
                },
                {
                    week: "Week 7-8",
                    title: "Cloud Platforms",
                    tasks: [
                        "Learn AWS core services (EC2, S3, RDS)",
                        "Understand IAM and security",
                        "Master VPC and networking",
                        "Practice cloud deployments"
                    ]
                }
            ],
            90: [
                {
                    week: "Week 9-10",
                    title: "Orchestration & IaC",
                    tasks: [
                        "Learn Kubernetes fundamentals",
                        "Master Terraform for IaC",
                        "Understand Helm charts",
                        "Practice cluster management"
                    ]
                },
                {
                    week: "Week 11-12",
                    title: "Monitoring & Production",
                    tasks: [
                        "Learn Prometheus and Grafana",
                        "Understand logging with ELK stack",
                        "Master incident response",
                        "Build production-grade infrastructure"
                    ]
                }
            ]
        },
        projects: [
            {
                title: "Automated Deployment Pipeline",
                description: "Build a complete CI/CD pipeline with GitHub Actions",
                difficulty: "beginner"
            },
            {
                title: "Containerized Microservices",
                description: "Deploy multi-container application with Docker Compose",
                difficulty: "intermediate"
            },
            {
                title: "Kubernetes Cluster Setup",
                description: "Deploy and manage a production Kubernetes cluster",
                difficulty: "intermediate"
            },
            {
                title: "Infrastructure as Code",
                description: "Provision complete AWS infrastructure with Terraform",
                difficulty: "advanced"
            }
        ]
    },
    "full stack developer": {
        title: "Full Stack Developer",
        industryStandards: {
            avgSalary: "$90,000 - $150,000",
            demandGrowth: "+25% YoY",
            topCompanies: ["Shopify", "Atlassian", "Stripe", "Square"],
            keySkills: ["JavaScript", "React", "Node.js", "SQL", "REST APIs", "Git"]
        },
        roadmap: {
            30: [
                {
                    week: "Week 1-2",
                    title: "Frontend Foundations",
                    tasks: [
                        "Master HTML, CSS, and JavaScript",
                        "Learn responsive design",
                        "Understand DOM manipulation",
                        "Practice with modern CSS frameworks"
                    ]
                },
                {
                    week: "Week 3-4",
                    title: "Backend Basics",
                    tasks: [
                        "Learn Node.js and Express",
                        "Understand REST API design",
                        "Master SQL databases",
                        "Implement authentication"
                    ]
                }
            ],
            60: [
                {
                    week: "Week 5-6",
                    title: "Modern Frontend",
                    tasks: [
                        "Master React or Vue.js",
                        "Learn state management",
                        "Understand component architecture",
                        "Build reusable components"
                    ]
                },
                {
                    week: "Week 7-8",
                    title: "Advanced Backend",
                    tasks: [
                        "Learn GraphQL",
                        "Understand microservices architecture",
                        "Master ORM (Sequelize/Prisma)",
                        "Implement real-time features"
                    ]
                }
            ],
            90: [
                {
                    week: "Week 9-10",
                    title: "DevOps & Deployment",
                    tasks: [
                        "Learn Docker basics",
                        "Understand cloud deployment (AWS/Heroku)",
                        "Master CI/CD pipelines",
                        "Implement monitoring"
                    ]
                },
                {
                    week: "Week 11-12",
                    title: "Complete Projects",
                    tasks: [
                        "Build 2-3 full-stack applications",
                        "Deploy to production",
                        "Create portfolio",
                        "Prepare for interviews"
                    ]
                }
            ]
        },
        projects: [
            {
                title: "Task Management App",
                description: "Build a full-stack todo app with user authentication",
                difficulty: "beginner"
            },
            {
                title: "Social Media Clone",
                description: "Create a Twitter-like app with posts, likes, and comments",
                difficulty: "intermediate"
            },
            {
                title: "E-commerce Platform",
                description: "Develop a complete online store with payments",
                difficulty: "advanced"
            },
            {
                title: "Real-time Collaboration Tool",
                description: "Build a Google Docs-like collaborative editor",
                difficulty: "advanced"
            }
        ]
    }
};

// DOM Elements
const roleForm = document.getElementById('roleForm');
const roleInput = document.getElementById('roleInput');
const experienceLevel = document.getElementById('experienceLevel');
const inputSection = document.getElementById('inputSection');
const loadingSection = document.getElementById('loadingSection');
const resultsSection = document.getElementById('resultsSection');
const loadingText = document.getElementById('loadingText');
const progressFill = document.getElementById('progressFill');
const roleTitle = document.getElementById('roleTitle');
const backBtn = document.getElementById('backBtn');
const downloadBtn = document.getElementById('downloadBtn');

// Role tag click handlers
document.querySelectorAll('.role-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        roleInput.value = tag.dataset.role;
    });
});

// Form submission
roleForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const role = roleInput.value.trim().toLowerCase();
    const experience = experienceLevel.value;
    
    if (!role || !experience) {
        alert('Please fill in all fields');
        return;
    }
    
    // Show loading
    inputSection.classList.add('hidden');
    loadingSection.classList.remove('hidden');
    
    // Simulate loading with messages
    const loadingMessages = [
        'Analyzing industry trends...',
        'Comparing with current market demands...',
        'Generating personalized roadmap...',
        'Curating project ideas...',
        'Finalizing your career path...'
    ];
    
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
        if (messageIndex < loadingMessages.length) {
            loadingText.textContent = loadingMessages[messageIndex];
            messageIndex++;
        }
    }, 600);
    
    // Wait for 3 seconds
    setTimeout(() => {
        clearInterval(messageInterval);
        loadingSection.classList.add('hidden');
        displayResults(role, experience);
        resultsSection.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 3000);
});

// Display results
function displayResults(role, experience) {
    const data = roleData[role] || roleData["full stack developer"];
    
    // Set role title
    roleTitle.textContent = `${data.title} Roadmap`;
    
    // Display industry comparison
    displayIndustryComparison(data.industryStandards);
    
    // Display roadmaps
    displayRoadmap('tab30', data.roadmap[30]);
    displayRoadmap('tab60', data.roadmap[60]);
    displayRoadmap('tab90', data.roadmap[90]);
    
    // Display projects
    displayProjects(data.projects);
}

// Display industry comparison
function displayIndustryComparison(standards) {
    const comparisonHTML = `
        <div class="industry-grid">
            <div class="industry-item">
                <h4>Average Salary</h4>
                <p>${standards.avgSalary}</p>
            </div>
            <div class="industry-item">
                <h4>Demand Growth</h4>
                <p>${standards.demandGrowth}</p>
            </div>
            <div class="industry-item">
                <h4>Top Companies</h4>
                <div class="skills-list">
                    ${standards.topCompanies.map(company => `
                        <span class="skill-badge">${company}</span>
                    `).join('')}
                </div>
            </div>
            <div class="industry-item">
                <h4>Key Skills Required</h4>
                <div class="skills-list">
                    ${standards.keySkills.map(skill => `
                        <span class="skill-badge">${skill}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('industryComparison').innerHTML = comparisonHTML;
}

// Display roadmap
function displayRoadmap(tabId, roadmapData) {
    const timelineHTML = `
        <div class="timeline">
            ${roadmapData.map(item => `
                <div class="timeline-item">
                    <h4>
                        <span class="week-badge">${item.week}</span>
                        ${item.title}
                    </h4>
                    <ul>
                        ${item.tasks.map(task => `<li>${task}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;
    
    document.getElementById(tabId).innerHTML = timelineHTML;
}

// Display projects
function displayProjects(projects) {
    const projectsHTML = `
        <div class="projects-grid">
            ${projects.map(project => `
                <div class="project-card">
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                    <span class="difficulty ${project.difficulty}">${project.difficulty}</span>
                </div>
            `).join('')}
        </div>
    `;
    
    document.getElementById('projectIdeas').innerHTML = projectsHTML;
}

// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        
        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`tab${tab}`).classList.add('active');
    });
});

// Back button
backBtn.addEventListener('click', () => {
    resultsSection.classList.add('hidden');
    inputSection.classList.remove('hidden');
    roleForm.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Download button (basic implementation)
downloadBtn.addEventListener('click', () => {
    alert('PDF download feature would be implemented here. For now, you can print this page (Ctrl+P) and save as PDF.');
    window.print();
});
