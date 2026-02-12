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
          description: "A page to show what I am currently exploring as self-study. This page is still in progress!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/learning/";
          },
        },{id: "projects-multi-class-chest-x-ray-disease-classification-using-transfer-learning",
          title: 'Multi-Class Chest X-Ray Disease Classification Using Transfer Learning',
          description: "EfficientNet-based transfer learning model for multi-class classification, which shows improvement over baseline CNN model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chest_x-ray_disease_detection/";
            },},{id: "projects-binary-classification-diabetes-risk",
          title: 'Binary Classification - Diabetes Risk',
          description: "Binary Classification - Diabetes Risk",
          section: "Projects",handler: () => {
              window.location.href = "/projects/diabetes_risk_binary_classification/";
            },},{id: "projects-eda-and-clustering-analysis-on-songs",
          title: 'EDA and Clustering Analysis on Songs',
          description: "EDA and Clustering for Songs Dataset on Kaggle",
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
