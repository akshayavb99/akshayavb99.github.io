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
        },{id: "projects-binary-classification-diabetes-risk",
          title: 'Binary Classification - Diabetes Risk',
          description: "Binary Classification - Diabetes Risk",
          section: "Projects",handler: () => {
              window.location.href = "/projects/diabetes_risk_binary_classification/";
            },},{id: "projects-eda-and-clustering-analysis-on-songs",
          title: 'EDA and Clustering Analysis on Songs',
          description: "EDA and Clustering for Songs Dataset on Kaggle",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eda_clustering_songs/";
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
