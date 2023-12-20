import zeromusic from '../../assets/projectImages/ziroMusic/Screenshot-2023-10-17-091053.avif'
import demoPortfolio from '../../assets/projectImages/portfolioDemo/demoPortfolio.png'
import nikeshop from '../../assets/projectImages/nikeshop/Screenshot-2023-11-25-175725.avif'
import budgetapp from '../../assets/projectImages/budgetapp/Screenshot-2023-11-26-121733.avif'
import carBook from '../../assets/projectImages/carBook/Screenshot-2023-12-09-221916.webp'
import samyati from '../../assets/projectImages/samyati/Screenshot-2023-12-12-205256.avif'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectData : [
      {
        id:1,
        projectImage: nikeshop,
        projectTitle: 'Nike Shop',
        cardDetail: 'A simple website showcasing Nike products. Built with React.js and ruby on rails. Explore, contribute, or use as a foundation for your own online store',
        languageUsed: ['Ruby on Rails','React.js','Tailwind'],
        live_version: 'https://nike-shop-s446.onrender.com/',
        link_source: 'https://github.com/anshuman7negi/Nike-shop',
      },
      {
        id:2,
        projectImage: samyati,
        projectTitle: 'SAMYATI',
        cardDetail: "SAMYATI is a traveling website and where you can find your buddy for your next trip.",
        languageUsed: ['React.js', 'Ruby on Rails', 'Tailwind'],
        live_version: 'https://samyati.onrender.com/',
        link_source: 'https://github.com/anshuman7negi/samyati',
      },
      {
        id:3,
        projectImage: carBook,
        projectTitle: 'CarBook',
        cardDetail: "Car Book is a website where users can book a Car. The user can also see the details of a Car, add the car and delete the car",
        languageUsed: ['React.js', 'Ruby on Rails', 'Tailwind'],
        live_version: 'https://final-capstone-frontend-3l0g.onrender.com/',
        link_source: 'https://github.com/2004-okari/FC_FRONTEND?tab=readme-ov-file',
      },
      {
        id:4,
        projectImage: budgetapp,
        projectTitle: 'Budget App',
        cardDetail: 'A budgeting app is a software application that you may access from your computer, tablet or mobile device to track your finances, such as income, savings, debt payoff, or investing. Budgeting apps often will sync with your financial accounts to give you an overview in real-time when finances change.',
        languageUsed: ['Ruby on Rails','Device','Bootstrap'],
        live_version: 'https://budget-ydgy.onrender.com/',
        link_source: 'https://github.com/anshuman7negi/budget-app',
      },
        {
          id:5,
          projectImage: zeromusic,
          projectTitle: 'ZIRO MUSIC FESTIVAL',
          cardDetail: 'A simple application to book the ZIRO music festival tickets and get details about the music festival.In this project I have used HTML, CSS, JavaScript.',
          languageUsed: ['HTML', 'CSS', 'JavaScript'],
          live_version: 'https://anshuman7negi.github.io/ConcertPage/',
          link_source: 'https://github.com/anshuman7negi/ConcertPage',
        },
        {
          id:6,
          projectImage: demoPortfolio,
          projectTitle: 'Demo Portfolio',
          cardDetail: "This is my demo portfolio website to showcase my skills in HTML5, CSS3, and JAVASCRIPT.",
          languageUsed: ['HTML', 'CSS', 'JavaScript'],
          live_version: 'https://anshuman7negi.github.io/Anshuman-Portfolio/',
          link_source: 'https://github.com/anshuman7negi/Anshuman-Portfolio',
        },
      ],
      selectProject: null,
}

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    selectProject: (state, action) => {
      state.selectProject = action.payload;
    },
    closePopup: (state,action) => {
      state.selectProject = null;
    }
  }

})

export const {selectProject, closePopup} =projectSlice.actions;
export default projectSlice.reducer;