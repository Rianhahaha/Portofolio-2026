import { ProjectItem } from "@/types";
    // id:string;
    // title:string;
    // img:string;
    // desc:string;
    // year:number;
    // case:string;
    // techIds:string[];
    // previewImg?:string[];
  const autoLoop = (id: string, count: number): string[] => {
  return Array.from({ length: count }, (_, i) => `/projects/preview/${id}-${i + 1}.webp`);
};
export const PROJECT_DATA: ProjectItem[] = [

  {
    id: "lacak",
    title: "Lacak UNY",
    link: '',
    img: '/projects/thumbnail/Lacak.png',
    desc: "Designed and developed UI/UX for Accountability and Performance Achievement Information System used by Universitas Negeri Yogyakarta's planning sector. This website has over 30 users. and developed with CSS frameworks for the front-end. Managed to teach and train the client for how to use the website with meet method which makes the client 90% of comprehension.",
    year:2022,
    type:'Website, Project',
    case: "This project involves the Planning Department of UNY as the client. My team and I were tasked with creating a website capable of managing accountability reports and work achievements at UNY. In this project, I served as the Front End Developer. Responsible for designing the website interface.",
    techIds:[
      'figma',
      'css',
      'bootstrap',
      'corel',
    ],    
     previewImg: autoLoop('lacak',2),
  },
    {
    id: "ala",
    title: "Ala Indonesia",
    link: 'https://alaindonesia.id/',
    img: '/projects/thumbnail/ala.jpg',
    desc: "Designed and developed a front-end of web-based assessment model instrument system for early childhood using CSS framework which used by 500 users for S3 dissertation. Responsible for over 30 components of assets and illustrations which is used on the website. Responsible for UI/UX design and implemented to the website with CSS which increasing 40% of user interest.",
    year:2023,
    type:'Website, Project',
    case: "This project involves the Doctoral degree (S3) student of UNY. My team and I were tasked with creating a website capable of literacy assesment for early childhood. In this project, I served as the Front End Developer and Illustrator. Responsible for designing the website interface, making the assets and illustrations for the website.",
    techIds:[
      'css',
      'bootstrap',
      'ibispaintx',
    ],    
     previewImg: autoLoop('ala',5),
  },
    {
    id: "paudpro",
    title: "Paud Pro",
    link: 'https://paudpro.com/',
    img: '/projects/thumbnail/paudpro.webp',
    desc: "Designed and developed a front-end of web-based assessment model instrument system for early childhood using CSS framework which used by 500 users for S3 dissertation. Responsible for over 30 components of assets and illustrations which is used on the website. Responsible for UI/UX design and implemented to the website with CSS which increasing 40% of user interest.",
    year:2024,
    type:'Website, Project',
    case: "This project involves the Doctoral degree (S3) student of UNY. My team and I were tasked with creating a website capable of literacy assesment for early childhood. In this project, I served as the Front End Developer and Illustrator. Responsible for designing the website interface, making the assets and illustrations for the website.",
    techIds:[
      'tailwind-css',
      'laravel',
      'figma',
    ],    
     previewImg: autoLoop('ala',4),
  },
  //   {
  //   id: "mdaq",
  //   title: "Quran Whiz",
  //   link: 'https://paudpro.com/',
  //   img: '/projects/thumbnail/paudpro.webp',
  //   desc: `"Quran Whiz" is a name that combines the words "Quran" and "Whiz." The Quran is the holy book in Islam containing teachings and guidance, while "Whiz" suggests that the application is designed to help users become experts or skilled in memorizing the Quran. This application is a platform for memorizing the Quran based on Android, implementing the takrir method to facilitate the memorization process. Through an educational game approach, the application not only makes the memorization experience more interactive and enjoyable but also enhances the interest of the younger generation in memorizing the Quran."`,
  //   year:2023,
  //   type:'Competition',
  //   case: "Currently, the world is facing an unprecedented global medical emergency in modern history, namely the Covid-19 pandemic. This virus is highly contagious and has rapidly spread to almost every country. The disease is transmitted through the droplets of the infected person, hence the need for physical distancing (Sulkowski & Ignatowski, 2020). The Covid-19 pandemic has been able to change the pattern of religious practices with restrictions on congregations in mosques and the cessation of TPA (Taman Pendidikan Al-Qur'an) activities by the Indonesian Ulema Council together with the Ministry of Religious Affairs. This has resulted in a reduction in spaces for children to learn the Quran, leading to a decline in interest in memorizing the Quran.",
  //   techIds:[
  //     'figma',
  //     'corel',
  //     'premierepro',
  //     'ibispaintx',
  //   ],    
  //    previewImg: autoLoop('ala',4),
  // },
    {
    id: "yuliter",
    title: "Yu-Liter",
    link: 'https://www.yuliter.fun/',
    img: '/projects/thumbnail/paudpro.webp',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim necessitatibus rem? Ab a vel ratione officiis alias, aliquid adipisci reiciendis incidunt fuga nostrum iure similique consectetur? Impedit laudantium amet enim aperiam odit deserunt delectus, quis consequatur ab consequuntur itaque dignissimos facilis magni voluptatibus doloremque incidunt vitae? Minus, nesciunt.",
    year:2022,
    type:'Website, Thesis',
    case: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim necessitatibus rem? Ab a vel ratione officiis alias, aliquid adipisci reiciendis incidunt fuga nostrum iure similique consectetur? Impedit laudantium amet enim aperiam odit deserunt delectus, quis consequatur ab consequuntur itaque dignissimos facilis magni voluptatibus doloremque incidunt vitae? Minus, nesciunt.",
    techIds:[
      'tailwind-css',
      'next-js',
      'supabase',
      'figma',
    ],    
     previewImg: autoLoop('ala',4),
  },
  //   {
  //   id: "avpn",
  //   title: "AVPN Academy Event Page",
  //   link: 'https://academy.avpn.asia/events/',
  //   img: '/projects/thumbnail/paudpro.webp',
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim necessitatibus rem? Ab a vel ratione officiis alias, aliquid adipisci reiciendis incidunt fuga nostrum iure similique consectetur? Impedit laudantium amet enim aperiam odit deserunt delectus, quis consequatur ab consequuntur itaque dignissimos facilis magni voluptatibus doloremque incidunt vitae? Minus, nesciunt.",
  //   year:2022,
  //   type:'Website',
  //   case: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim necessitatibus rem? Ab a vel ratione officiis alias, aliquid adipisci reiciendis incidunt fuga nostrum iure similique consectetur? Impedit laudantium amet enim aperiam odit deserunt delectus, quis consequatur ab consequuntur itaque dignissimos facilis magni voluptatibus doloremque incidunt vitae? Minus, nesciunt.",
  //   techIds:[
  //     'wordpress',
  //     'elementor',
  //     'css',
  //   ],    
  //    previewImg: autoLoop('ala',4),
  // },
  //   {
  //   id: "reactnative",
  //   title: "React Native Strapi",
  //   link: '',
  //   img: '/projects/thumbnail/paudpro.webp',
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim necessitatibus rem? Ab a vel ratione officiis alias, aliquid adipisci reiciendis incidunt fuga nostrum iure similique consectetur? Impedit laudantium amet enim aperiam odit deserunt delectus, quis consequatur ab consequuntur itaque dignissimos facilis magni voluptatibus doloremque incidunt vitae? Minus, nesciunt.",
  //   year:2022,
  //   type:'Mobile, Research',
  //   case: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim necessitatibus rem? Ab a vel ratione officiis alias, aliquid adipisci reiciendis incidunt fuga nostrum iure similique consectetur? Impedit laudantium amet enim aperiam odit deserunt delectus, quis consequatur ab consequuntur itaque dignissimos facilis magni voluptatibus doloremque incidunt vitae? Minus, nesciunt.",
  //   techIds:[
  //     'react-native',
  //     'strapi',
  //     'tailwind',
  //   ],    
  //    previewImg: autoLoop('ala',4),
  // },
  //   {
  //   id: "ionic",
  //   title: "Tuas Mobile App",
  //   link: '',
  //   img: '/projects/thumbnail/paudpro.webp',
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim necessitatibus rem? Ab a vel ratione officiis alias, aliquid adipisci reiciendis incidunt fuga nostrum iure similique consectetur? Impedit laudantium amet enim aperiam odit deserunt delectus, quis consequatur ab consequuntur itaque dignissimos facilis magni voluptatibus doloremque incidunt vitae? Minus, nesciunt.",
  //   year:2022,
  //   type:'Mobile, Research',
  //   case: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim necessitatibus rem? Ab a vel ratione officiis alias, aliquid adipisci reiciendis incidunt fuga nostrum iure similique consectetur? Impedit laudantium amet enim aperiam odit deserunt delectus, quis consequatur ab consequuntur itaque dignissimos facilis magni voluptatibus doloremque incidunt vitae? Minus, nesciunt.",
  //   techIds:[
  //     'react-native',
  //     'strapi',
  //     'tailwind',
  //   ],    
  //    previewImg: autoLoop('ala',4),
  // },
  //   {
  //   id: "ionic",
  //   title: "Tuas Mobile App",
  //   link: '',
  //   img: '/projects/thumbnail/paudpro.webp',
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim necessitatibus rem? Ab a vel ratione officiis alias, aliquid adipisci reiciendis incidunt fuga nostrum iure similique consectetur? Impedit laudantium amet enim aperiam odit deserunt delectus, quis consequatur ab consequuntur itaque dignissimos facilis magni voluptatibus doloremque incidunt vitae? Minus, nesciunt.",
  //   year:2022,
  //   type:'Mobile, Research',
  //   case: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim necessitatibus rem? Ab a vel ratione officiis alias, aliquid adipisci reiciendis incidunt fuga nostrum iure similique consectetur? Impedit laudantium amet enim aperiam odit deserunt delectus, quis consequatur ab consequuntur itaque dignissimos facilis magni voluptatibus doloremque incidunt vitae? Minus, nesciunt.",
  //   techIds:[
  //     'react-native',
  //     'strapi',
  //     'tailwind',
  //   ],    
  //    previewImg: autoLoop('ala',4),
  // },

];