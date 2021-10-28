import {
  SiNextdotjs,
  SiReact,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiStyledcomponents,
  SiJavascript,
} from "react-icons/si";

export const ProjectsData = [
  {
    title: "Cryptocurrency Tracker",
    image: "crypto.PNG",
    alt: "crypto",
    description:
      "A SPA updates in real time current market price and 24h % changes of top 100 cryptocurrencies.",
    link: "https://github.com/hoangulrich/cryptocurrency-price-checker",
    icons: [SiNextdotjs, SiJavascript],
    iconLabels: ["Nextjs", "Javascript"],
  },

  {
    title: "Antoine's Pizza Website",
    image: "Pizza.png",
    alt: "pizza",
    description:
      "Front-end for Antoine's Pizza website, displaying Pizza of the day, Desserts and Side Menu.",
    link: "https://github.com/hoangulrich/pizza-ecommerce-webapp",
    icons: [SiReact, SiStyledcomponents],
    iconLabels: ["React", "Styled-components"],
  },

  {
    title: "Shoesi's Store Website",
    image: "Shoesi.PNG",
    alt: "shoesi",
    description:
      "A Shoe Store e-commerce website displaying variety of shoes deals and seasonal selection.",
    link: "https://github.com/hoangulrich/product-showcase-website",
    icons: [SiHtml5, SiCss3],
    iconLabels: ["Html", "Css"],
  },

  {
    title: "BDO Enhancement Simulator",
    image: "bdo.PNG",
    alt: "bdo",
    description:
      "An application simulates the item enhancement system from Black Desert Online.",
    link: "https://github.com/hoangulrich/BDO-enhance-simulator",
    icons: [SiReact, SiBootstrap],
    iconLabels: ["React", "Bootstrap"],
  },
];
