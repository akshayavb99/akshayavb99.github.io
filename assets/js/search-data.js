// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "dropdown-overview",
              title: "Overview",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/technical-lab/";
              },
            },{id: "dropdown-technical-bookshelf",
              title: "Technical Bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/technical-lab/bookshelf/";
              },
            },{id: "dropdown-technical-papershelf",
              title: "Technical Papershelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/technical-lab/papershelf/";
              },
            },{id: "dropdown-field-log",
              title: "Field Log",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/technical-lab/field-log/";
              },
            },{id: "dropdown-courses",
              title: "Courses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/technical-lab/courses/";
              },
            },{id: "dropdown-certifications",
              title: "Certifications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/technical-lab/certifications/";
              },
            },{id: "dropdown-overview",
              title: "Overview",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/creative-atelier/";
              },
            },{id: "dropdown-creative-bookshelf",
              title: "Creative Bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/creative-atelier/bookshelf/";
              },
            },{id: "nav-resume",
          title: "Resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "post-between-curiosity-and-consistency-the-first-100-steps-toward-10-000-problems",
        
          title: "Between Curiosity and Consistency: The First 100 Steps Toward 10,000 Problems",
        
        description: "Taking inspiration from a graduate student and a fictional archer to start my own journey of solving 10,000 problems in Computer Science",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/10000-problems-season-1/";
          
        },
      },{id: "post-dashboard-of-the-first-100-problems",
        
          title: "Dashboard of the First 100 Problems",
        
        description: "Progress tracker and index for the first 100 problems in my 10,000 Problems journey",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/2026-06-01-100-problem-index";
          
        },
      },{id: "post-coding-challenges-2-write-your-own-compression-tool",
        
          title: 'Coding Challenges 2 — Write your own Compression Tool <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "(Medium Article) - Coding Challenge 2 from the series by John Crickett, where I wrote my own file compression tool using Huffman Coding algorithm",
        section: "Posts",
        handler: () => {
          
            window.open("https://akshayavb99.medium.com/coding-challenges-2-build-your-own-compression-tool-8341540431bf?source=friends_link&sk=723d8cc0c66cbdf8ed8ea5ff921a732d", "_blank");
          
        },
      },{id: "post-coding-challenges-1-rebuilding-the-wc-tool-with-python",
        
          title: 'Coding Challenges 1 — Rebuilding the wc tool with Python <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "(Medium Article) - Rebuilding my own wc tool with Python I recently found the Coding Challenges by John Crickett, a great series of coding challenges to understand the internal functionalities of the popular tools and concepts in software engineering",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@akshayavb99/coding-challenges-1-rebuilding-my-own-wc-tool-with-python-120998981e1d", "_blank");
          
        },
      },{id: "creative_atelier-creative-bookshelf",
          title: 'Creative Bookshelf',
          description: "Non-technical books and long-form works I have consumed",
          section: "Creative_atelier",handler: () => {
              window.location.href = "/creative-atelier/bookshelf/";
            },},{id: "field_log-july-2026-field-log",
          title: 'July 2026 Field Log',
          description: "Field Log short notes for what I learned in July 2026",
          section: "Field_log",handler: () => {
              window.location.href = "/technical-lab/field-log/2026/2026-07/";
            },},{id: "news-i-am-participating-in-the-stanford-code-in-place-2026-as-a-volunteer-section-leader",
          title: 'I am participating in the Stanford Code in Place 2026 as a volunteer...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-04-21-cip6-sl-participation/";
            },},{id: "projects-multi-class-chest-x-ray-disease-classification-using-transfer-learning",
          title: 'Multi-Class Chest X-Ray Disease Classification Using Transfer Learning',
          description: "EfficientNet-based transfer learning model for multi-class classification, which shows improvement over baseline CNN model (Kaggle)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chest_x-ray_disease_detection/";
            },},{id: "projects-coding-challenges-core-tools-and-systems-implementations",
          title: 'Coding Challenges - Core Tools and Systems Implementations',
          description: "A collection of my implementations for the Coding Challenges series by John Crickett, where I build real-world tools and systems such as Unix utilities with programming languages like Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coding-challenges/";
            },},{id: "projects-binary-classification-diabetes-risk",
          title: 'Binary Classification - Diabetes Risk',
          description: "Binary Classification - Diabetes Risk (Kaggle)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/diabetes_risk_binary_classification/";
            },},{id: "projects-eda-and-clustering-analysis-on-songs",
          title: 'EDA and Clustering Analysis on Songs',
          description: "EDA and Clustering for Songs Dataset (Kaggle)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eda_clustering_songs/";
            },},{id: "projects-fully-local-retreival-augmented-generation-rag-knowledge-assistant",
          title: 'Fully Local Retreival Augmented Generation (RAG) Knowledge Assistant',
          description: "A CLI implementation of a fully local RAG enhanced knowledge assistant, built with Ollama running on Docker and Chroma DB vector store",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fully-local-rag-with-cli/";
            },},{id: "technical_lab-certifications",
          title: 'Certifications',
          description: "Cloud and machine learning certifications from AWS and other leading providers",
          section: "Technical_lab",handler: () => {
              window.location.href = "/technical-lab/certifications/";
            },},{id: "technical_lab-courses",
          title: 'Courses',
          description: "Selected list of courses from my academic journey and online platforms, including lectures and structured learning programs",
          section: "Technical_lab",handler: () => {
              window.location.href = "/technical-lab/courses/";
            },},{id: "technical_lab-field-log",
          title: 'Field Log',
          description: "Bite-sized regular updates on what I am doing",
          section: "Technical_lab",handler: () => {
              window.location.href = "/technical-lab/field-log/";
            },},{id: "technical_lab-technical-papershelf",
          title: 'Technical Papershelf',
          description: "A selected list of research papers, blogs and articles I found interesting and informative",
          section: "Technical_lab",handler: () => {
              window.location.href = "/technical-lab/papershelf/";
            },},{id: "technical_lab-technical-bookshelf",
          title: 'Technical Bookshelf',
          description: "Selected list of technical books and what I learned from them",
          section: "Technical_lab",handler: () => {
              window.location.href = "/technical-lab/bookshelf/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
