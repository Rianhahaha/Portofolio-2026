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
    img: '/projects/thumbnail/lacak.png',
    desc: "Designed and developed UI/UX for Accountability and Performance Achievement Information System used by Universitas Negeri Yogyakarta's planning sector. This website has over 30 users. and developed with CSS frameworks for the front-end. Managed to teach and train the client for how to use the website with meet method which makes the client 90% of comprehension.",
    year:2022,
    // type:'Website, Project',
    type: ['website', 'project'],
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
    // type:'Website, Project',
    type:['website', 'project'],
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
    // type:'Website, Project',
    type: ['website', 'project'],
    case: "This project involves the Doctoral degree (S3) student of UNY. My team and I were tasked with creating a website capable of literacy assesment for early childhood. In this project, I served as the Front End Developer and Illustrator. Responsible for designing the website interface, making the assets and illustrations for the website.",
    techIds:[
      'tailwind-css',
      'laravel',
      'figma',
    ],    
     previewImg: autoLoop('paudpro',4),
  },
    {
    id: "mdaq",
    title: "Quran Whiz",
    link: 'https://www.figma.com/design/DOFvSfeedUmkPBR0wZvmwH/Final-MDAQ?node-id=44-9151&t=Hc8b8vuGWbagFj5i-1',
    img: '/projects/thumbnail/qwhizy.webp',
    desc: `"Quran Whiz" is a name that combines the words "Quran" and "Whiz." The Quran is the holy book in Islam containing teachings and guidance, while "Whiz" suggests that the application is designed to help users become experts or skilled in memorizing the Quran. This application is a platform for memorizing the Quran based on Android, implementing the takrir method to facilitate the memorization process. Through an educational game approach, the application not only makes the memorization experience more interactive and enjoyable but also enhances the interest of the younger generation in memorizing the Quran."`,
    year:2023,
    // type:'Competition',
    type:['competition'],
    case: "Currently, the world is facing an unprecedented global medical emergency in modern history, namely the Covid-19 pandemic. This virus is highly contagious and has rapidly spread to almost every country. The disease is transmitted through the droplets of the infected person, hence the need for physical distancing (Sulkowski & Ignatowski, 2020). The Covid-19 pandemic has been able to change the pattern of religious practices with restrictions on congregations in mosques and the cessation of TPA (Taman Pendidikan Al-Qur'an) activities by the Indonesian Ulema Council together with the Ministry of Religious Affairs. This has resulted in a reduction in spaces for children to learn the Quran, leading to a decline in interest in memorizing the Quran.",
    techIds:[
      'figma',
      'corel',
      'premierepro',
      'ibispaintx',
    ],    
     previewImg: autoLoop('qwhizy',6),
  },
    {
    id: "svelte-project", // Sesuaikan ID-nya
    title: "Svelte Web Application R&D", // Sesuaikan judulnya
    link: '',
    img: '', // Sesuaikan nama file gambarnya
    desc: "Explored and evaluated the Svelte framework for modern web development, successfully translating technical research into the implementation of a fully functional, real-world web application.",
    year: 2025, // Sesuaikan tahunnya
    type: [ 'website', 'internship', 'research'],
    case: "This project began as a technical research initiative to evaluate Svelte as a lightweight, compiler-based alternative to traditional frontend frameworks. I conducted an in-depth analysis of its performance benefits, reactive state management, and overall developer experience. After validating its capabilities during the research phase, I successfully transitioned into hands-on development, applying Svelte to build and deliver a real-world project with a highly optimized and reactive user interface.",
    techIds: [
      'svelte',
      'typescript',
      'css',
      // Tambahkan tech lain jika ada, misal: 'vite', 'tailwind-css'
    ],    
     previewImg: [], // Sesuaikan parameter gambarnya
  },


  {
    id: "rn-strapi", // Sesuaikan ID-nya
    title: "React Native + Strapi R&D", // Sesuaikan judulnya
    link: '',
    img: '', // Sesuaikan nama file gambarnya
    desc: "Conducted technical research and developed a foundational Content Management System (CMS) utilizing Strapi for a headless backend and React Native for integrated cross-platform mobile support.",
    year: 2025, // Sesuaikan tahunnya
    type: [ 'website', 'mobile', 'internship', 'research'],
    case: "This project focused on exploring and implementing a headless CMS architecture tailored for mobile applications. I conducted in-depth research on integrating Strapi as the backend content manager with a React Native frontend. The objective was to build a functioning basic CMS prototype that provided seamless mobile support, demonstrating flexible content delivery and management across devices.",
    techIds: [
      'react-native',
      'strapi',
      'tailwind',
      'typescript',
    ],    
     previewImg: [], // Sesuaikan parameter gambarnya
  },
  {
    id: "agora-meeting", // Sesuaikan ID-nya
    title: "Agora Online Meeting App R&D", // Sesuaikan judulnya
    link: '',
    img: '', // Sesuaikan nama file gambarnya
    desc: "Researched and developed a proof-of-concept for an online meeting web application. Integrated the Agora SDK for real-time video communication and implemented a live Speech-to-Text feature for automated meeting transcription.",
    year: 2025, // Sesuaikan tahunnya
    type: ['website', 'internship', 'Research'],
    case: "The primary objective of this project was to explore and implement scalable video conferencing solutions tailored for modern web browsers. I conducted extensive research and hands-on integration using the Agora Web SDK to establish low-latency, high-quality audio and video rooms. To enhance accessibility and user experience, I also researched and successfully integrated a real-time Speech-to-Text (STT) feature, allowing the application to generate live transcriptions during online meetings.",
    techIds: [
      'agora',
      'typescript',
      'react-js',
      'tailwind',
    
      // Tambahkan tech lain yang kamu pakai, misal: 'react', 'next-js'
    ],    
     previewImg: [], // Sesuaikan parameter gambarnya
  },
  {
    id: "avpn",
    title: "AVPN Academy Event Page",
    link: 'https://academy.avpn.asia/events/',
    img: '/projects/thumbnail/avpn.webp',
    desc: "Developed and managed a fully responsive WordPress website using Elementor for AVPN Academy. Handled the event management system using the Calendar Event Plugin and built a custom filter to enhance event discovery.",
    year: 2025,
    type: ['website', 'internship'],
    case: "In this project, I was responsible for developing and managing the AVPN Academy Events page. Built on WordPress using Elementor, I ensured the platform was fully responsive across all devices. My primary contribution involved integrating the Calendar Event Plugin for seamless event management and developing a custom filter plugin to improve user navigation and the overall browsing experience.",
    techIds: [
      'wordpress',
      'elementor',
      'acf-field',
      'css',
    ],    
     previewImg: autoLoop('avpn',4),
  },
  {
    id: "yuliter",
    title: "Yu-Liter",
    link: 'https://www.yuliter.fun/',
    img: '/projects/thumbnail/yuliter.webp',
    desc: "Designed and developed a gamification-based digital literacy web application focused on mastering digital skills to prepare students for the workplace. The application was evaluated using ISO/IEC 25010:2023 standards and achieved a 'Very Feasible' rating.",
    year: 2025,
    type: ['website', 'thesis'],
    case: "This Research and Development (R&D) project addresses the low digital literacy among youth by simulating real-world workplace digital scenarios. Using an Iterative SDLC model, I developed a full-stack platform and conducted testing with final-year students at Universitas Negeri Yogyakarta. The system achieved a 100% Functional Suitability score, an Interaction Capability score of 4.36, and optimal Performance Efficiency.",
    techIds: [
      'tailwind-css',
      'next-js',
      'typescript', 
      'supabase',
      'figma',
    ],    
     previewImg: autoLoop('yuliter',7),
  },

  //   {
  //   id: "ionic",
  //   title: "Tuas Mobile App",
  //   link: '',
  //   img: '/projects/thumbnail/paudpro.webp',
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim necessitatibus rem? Ab a vel ratione officiis alias, aliquid adipisci reiciendis incidunt fuga nostrum iure similique consectetur? Impedit laudantium amet enim aperiam odit deserunt delectus, quis consequatur ab consequuntur itaque dignissimos facilis magni voluptatibus doloremque incidunt vitae? Minus, nesciunt.",
  //   year:2022,
  //   type:['Mobile', 'Research'],
  //   case: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet enim necessitatibus rem? Ab a vel ratione officiis alias, aliquid adipisci reiciendis incidunt fuga nostrum iure similique consectetur? Impedit laudantium amet enim aperiam odit deserunt delectus, quis consequatur ab consequuntur itaque dignissimos facilis magni voluptatibus doloremque incidunt vitae? Minus, nesciunt.",
  //   techIds:[
  //     'react-native',
  //     'strapi',
  //     'tailwind',
  //   ],    
  //    previewImg: [''],
  // },


];