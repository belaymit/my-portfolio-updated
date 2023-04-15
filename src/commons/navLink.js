import Iqbal from '../assets/Iqbal.jfif';
import Ahad from '../assets/Ahad.jfif';
import Birhanu from '../assets/Birhanu.jfif';
import Img1 from '../assets/bookstore.jfif';
import Img2 from '../assets/conferecncefora.jfif';
import Img3 from '../assets/movies-app.jpg';
import Img4 from '../assets/leader-board.jfif';
import Img5 from '../assets/magic-calculator.jpg';
import Img6 from '../assets/awesome-books.jfif';
import Diego from '../assets/Diego.jpg';
import Glenda from '../assets/Glenda.jpg';
import Giovani from '../assets/Giovani.jpg';

const navLink = [
  {
    id: 1,
    link: '#',
    name: 'Home',
    icon: 'estate',
  },
  {
    id: 2,
    link: '#about',
    name: 'About',
    icon: 'user',
  },
  {
    id: 3,
    link: '#skills',
    name: 'Skills',
    icon: 'file-alt',
  },
  {
    id: 4,
    link: '#services',
    name: 'Service',
    icon: 'briefcase-alt',
  },
  {
    id: 5,
    link: '#portfolio',
    name: 'Portfolio',
    icon: 'scenery',
  },
  {
    id: 6,
    link: '#contacts',
    name: 'Contacts',
    icon: 'message',
  },
];
const socialLink = [
  {
    id: 1,
    link: 'https://github.com/belaymit',
    target: '_blank',
    icon: 'github-alt',
  },
  {
    id: 2,
    link: 'https://www.linkedin.com/in/belay-birhanu-144ba714b/',
    target: '_blank',
    icon: 'linkedin',
  },
  {
    id: 3,
    link: 'https://www.instagram.com/',
    target: '_blank',
    icon: 'instagram',
  },
  {
    id: 4,
    link: 'https://dribbble.com/',
    target: '_blank',
    icon: 'dribbble',
  },
  {
    id: 5,
    link: 'https://facebook.com/',
    target: '_blank',
    icon: 'facebook-f',
  },
];

const frontendSkills = [
  {
    id: 1,
    skill: 'HTML5',
    level: 'Experienced',
  },
  {
    id: 2,
    skill: 'CSS3',
    level: 'Experienced',
  },
  {
    id: 3,
    skill: 'SCSS',
    level: 'Experienced',
  },
  {
    id: 4,
    skill: 'Bootstrap',
    level: 'Experienced',
  },
  {
    id: 5,
    skill: 'tailwind',
    level: 'Intermediate',
  },
  {
    id: 6,
    skill: 'JavaScript',
    level: 'Experienced',
  },
  {
    id: 7,
    skill: 'React',
    level: 'Experienced',
  },
  {
    id: 8,
    skill: 'Redux',
    level: 'Experienced',
  },
  {
    id: 9,
    skill: 'Git',
    level: 'Experienced',
  },
  {
    id: 10,
    skill: 'Typescript',
    level: 'Intermediate',
  },
];

const backendSkills = [
  {
    id: 1,
    skill: 'PHP',
    level: 'Intermediate',
  },
  {
    id: 2,
    skill: 'Node Js',
    level: 'Experienced',
  },
  {
    id: 3,
    skill: 'GraphQL',
    level: 'Experienced',
  },
  {
    id: 4,
    skill: 'Python',
    level: 'Intermediate',
  },
  {
    id: 5,
    skill: 'MySQL',
    level: 'Intermediate',
  },
  {
    id: 6,
    skill: 'Firebase',
    level: 'Intermediate',
  },
  {
    id: 7,
    skill: 'Django',
    level: 'Intermediate',
  },
  {
    id: 8,
    skill: 'Ruby on rails',
    level: 'Intermediate',
  },
];

const services = [
  {
    id: 1,
    service: 'I develop user interface',
  },
  {
    id: 2,
    service: 'Web page development',
  },
  {
    id: 3,
    service: 'I create ux element interactions',
  },
  {
    id: 4,
    service: 'I position your company brand.',
  },
  {
    id: 5,
    service: 'Design and mockups of products for companies',
  },
];

const testimonialData = [
  {
    index: 1,
    avatar: Iqbal,
    name: 'Iqbal Elham',
    organization: 'Microverse',
    review:
    `Belay is exactly the sort of developer any company would love.
     He has brilliant communication skills. 
    I worked alongside him while building 2 
    different projects and he was always positive and open to learning from others.
     He was great at remote teamwork, and pair programming and has a keen eye for design.
      He is also super friendly and respectful so when we worked together,
       I felt like we'd known each other for years. I can't recommend him enough!`,
  },

  {
    index: 2,
    avatar: Ahad,
    name: 'Abdul Ahad Bhatti',
    organization: 'Microverse',
    review:
    `It was a wonderful experience to collaborate with Belay Birhanu on various projects
     at the Microverse program. He is a highly competent developer who uses effective
      problem-solving techniques. I would like to express my appreciation for his coding 
      expertise, time management skills, and professionalism. I firmly believe he would be a 
      valuable member of any team undertaking. If the chance arose, I wouldn't think twice
       about working with him again`,
  },

  {
    index: 3,
    avatar: Birhanu,
    name: 'Birhanu Gudisa',
    organization: 'Microverse',
    review:
    `It is my pleasure to recommend Mr. Belay Birhanu who worked with
     me at microverse as a full-stack developer. He is a very determined,
      well-qualified and intelligent individual. He is passionate 
      about writing codes and solving different problems through the
       development of creative and innovative software. 
    He is also a delight to work with a team player with 
    a positive attitude and interpersonal relationship all the way.
     I wouldn’t hesitate to work with him again if the opportunity arose.`,
  },
  {
    index: 4,
    avatar: Diego,
    name: 'Diego Cuenca Morocho',
    organization: 'Microverse',
    review:
    `I had the pleasure of studying alongside Belay in several courses at Microverse,
     an online tech code academy, and I must say that he is one of the most professional
      and knowledgeable developers I have met. 
      Belay has a strong understanding of various coding languages such as Ruby, 
      React, JavaScript, CSS, and HTML. His dedication to his work is evident 
      through his consistent hard work and willingness to help his classmates
       in any way he can. I am impressed with his ability to find solutions 
       to complex problems quickly and efficiently. Belay is an asset to
        any team and I highly recommend him to any employer looking for a 
        dedicated, professional, and skilled developer.`,
  },
  {
    index: 5,
    avatar: Glenda,
    name: 'Glenda Diaz',
    organization: 'Microverse',
    review:
    `Belay was my coding partner during the Microverse Program, and his skills and knowledge were unparalleled. Along with that, he brought energy and dependability that made him crucial to our project.
    He showed broad knowledge in Jest and save our team time, by finding the simplest solution, he was never late for a meeting, and he was always ready to solve any issue that will come our way, 
    I wish him the best in all he does and I know that any position he wishes to undertake he will doubtlessly be a star in it`,
  },
  {
    index: 6,
    avatar: Giovani,
    name: 'Giovanni Juliao',
    organization: 'Microverse',
    review:
    `Having the opportunity to work together on coding projects with Belay has been a great experience. Belay's positive attitude makes work more enjoyable. 
    Any company would be lucky to have him as a team member.`,
  },

];

const portfolioData = [
  {
    id: 1,
    image: Img1,
    title: 'Bookstore - React App',
    github: 'https://github.com/belaymit/bookstore-react-redux',
    demo: 'https://bookstore-react-redux.onrender.com/',
  },

  {
    id: 2,
    image: Img2,
    title: 'Capstone Project I',
    github: 'https://github.com/belaymit/Microverse-Capstone-Project-M1',
    demo: 'https://belaymit.github.io/Microverse-Capstone-Project-M1/',
  },

  {
    id: 3,
    image: Img3,
    title: 'Awesome Books',
    github: 'https://github.com/belaymit/Awesome-books--ES6',
    demo: 'https://belaymit.github.io/Awesome-books--ES6/',
  },

  {
    id: 4,
    image: Img4,
    title: 'Leaderborad Game',
    github: 'https://github.com/belaymit/leaderboard-APIs-git-flow/',
    demo: 'https://belaymit.github.io/Microverse-Capstone-Project-M1/',
  },

  {
    id: 5,
    image: Img5,
    title: 'Math Magician',
    github: 'https://github.com/belaymit/math-magicians',
    demo: 'https://new-math-magician.onrender.com/',
  },

  {
    id: 6,
    image: Img6,
    title: 'Movie App',
    github: 'https://github.com/belaymit/Capstone-module-2',
    demo: 'https://belaymit.github.io/Capstone-module-2/dist/',
  },

];

export {
  navLink, socialLink, frontendSkills, backendSkills, services, testimonialData, portfolioData,
};
