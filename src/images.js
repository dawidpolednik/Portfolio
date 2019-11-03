const images = [
  {
    id: 1,
    imageRef: require("./img/1.png"),
    title: "HTML5",
    description: "bar"
  },
  {
    id: 2,
    imageRef: require("./img/2.png"),
    title: "CSS3",
    description: "bar"
  },
  {
    id: 3,
    imageRef: require("./img/3.png"),
    title: "JavaScript(ES6)",
    description: "bar"
  },
  { id: 4, imageRef: require("./img/4.png"), title: "RWD", description: "bar" },
  {
    id: 5,
    imageRef: require("./img/5.svg"),
    title: "React",
    description: "bar"
  },
  {
    id: 6,
    imageRef: require("./img/6.png"),
    title: "Redux",
    description: "bar"
  },
  {
    id: 7,
    imageRef: require("./img/7.svg"),
    title: "React-Native",
    description: "bar"
  },
  {
    id: 8,
    imageRef: require("./img/8.svg"),
    title: "Sass(SCSS)",
    description: "bar"
  },
  { id: 9, imageRef: require("./img/9.png"), title: "Git", description: "bar" },
  {
    id: 10,
    imageRef: require("./img/10.svg"),
    title: "GitKraken",
    description: "bar"
  },
  {
    id: 11,
    imageRef: require("./img/11.png"),
    title: "Gulp",
    description: "bar"
  },
  {
    id: 12,
    imageRef: require("./img/12.png"),
    title: "Scrum",
    description: "bar"
  }
];
export const imageLoader = () => {
  return images;
};

const projectsImage = [
  {
    key: 1,
    id: 1,
    imageRef: require("./img/delfinagram.png"),
    title: "Delfinagram App",
    description:
      "Aplikacja zbudowana w oparciu o popularny portal społecznościowy Instagram z uwględnieniem widoków mobilnych. Portal umożliwiający dodawanie oraz zarządzanie znajomymi, postami, zdjęciami oraz danymi użytkownika aplikacji. Projekt zrealizowany za pomocą biblioteki React oraz Redux. Wykorzystujący popularny framework interfejsu użytkownika Material UI.",
    tools:
      "React, Redux, React-Router-DOM, SASS(SCSS), MaterialUI, GitKraken, PostMan",
    link: "https://github.com/dawidpolednik/DelfinagramAPP"
  },
  {
    key: 2,
    id: 2,
    imageRef: require("./img/code.PNG"),
    title: "Detect Labels Comparison",
    description:
      "Aplikacja konsolowa Node.js porównująca skuteczności algorytmów etykietowania obrazów w oparciu o usługi 3 najpopularniejszych dostawców chmurowych. Dla danego zbioru testowego usługami  badanymi podczas symulacji to usługi Cognitive Services, Amazon Rekognition oraz Google Cloud Vision. Testowaną funkcjonalnością jest etykietowanie (tagowanie) obrazu.",
    tools:
      "Node.js, Gulp, ExcelJS , Microsoft Excel, PostMan, Lodash, GitKraken",
    link: "https://github.com/dawidpolednik/Detect-Labels-Comparison"
  }
];
export const imageProjectsLoader = () => {
  return projectsImage;
};

// async function imageLoader() {
//     const request = await fetch('https://my/images/on/a/cdn');
//     const response = await request.json();
//     return response.images
//   }
