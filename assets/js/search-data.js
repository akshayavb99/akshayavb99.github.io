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
        },{id: "nav-resume",
          title: "Resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-learning",
          title: "Learning",
          description: "A page to show what I have been studying.  This page is still being built!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/learning/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "learning-articles",
          title: 'Articles',
          description: "A selected list of blogs and articles I found interesting and informative",
          section: "Learning",handler: () => {
              window.location.href = "/learning/articles/";
            },},{id: "learning-certifications",
          title: 'Certifications',
          description: "Cloud and machine learning certifications from AWS and other leading providers",
          section: "Learning",handler: () => {
              window.location.href = "/learning/certifications/";
            },},{id: "learning-courses",
          title: 'Courses',
          description: "Selected list of courses from my academic journey and online platforms, including lectures and structured learning programs",
          section: "Learning",handler: () => {
              window.location.href = "/learning/courses/";
            },},{id: "learning-books",
          title: 'Books',
          description: "Selected list of technical books and what I learned from them",
          section: "Learning",handler: () => {
              window.location.href = "/learning/tech_books/";
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
          title: 'Coding Challenges - Core tools and Systems implementations',
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
