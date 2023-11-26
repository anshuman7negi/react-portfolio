import zeromusic from '../../assets/projectImages/ziroMusic/zirodesktop.png'
import mathMagician from '../../assets/projectImages/mathMagician/mathmagician.png'
import demoPortfolio from '../../assets/projectImages/portfolioDemo/demoPortfolio.png'
import flavourHub from '../../assets/projectImages/flavourHub/flavorhub.png'
import nikeshop from '../../assets/projectImages/nikeshop/Screenshot 2023-11-25 175725.png'
import budgetapp from '../../assets/projectImages/budgetapp/Screenshot 2023-11-26 121733.png'
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
        projectImage: budgetapp,
        projectTitle: 'Budget App',
        cardDetail: 'A budgeting app is a software application that you may access from your computer, tablet or mobile device to track your finances, such as income, savings, debt payoff, or investing. Budgeting apps often will sync with your financial accounts to give you an overview in real-time when finances change.',
        languageUsed: ['Ruby on Rails','Device','Bootstrap'],
        live_version: 'https://budget-ydgy.onrender.com/',
        link_source: 'https://github.com/anshuman7negi/budget-app',
      },
        {
          id:3,
          projectImage: mathMagician,
          projectTitle: 'Math Magician',
          cardDetail: 'Math Magician is a single page application where users can do simple math calculations and read random math related quotes.',
          languageUsed: ['React','React-router','JSX'],
          live_version: 'https://mathmagic-ux2q.onrender.com/quote',
          link_source: 'https://github.com/anshuman7negi/math-magicians',
        },
        {
          id:4,
          projectImage: zeromusic,
          projectTitle: 'ZIRO MUSIC FESTIVAL',
          cardDetail: 'A simple application to book the ZIRO music festival tickets and get details about the music festival.In this project I have used HTML, CSS, JavaScript.',
          languageUsed: ['HTML', 'CSS', 'JavaScript'],
          live_version: 'https://anshuman7negi.github.io/ConcertPage/',
          link_source: 'https://github.com/anshuman7negi/ConcertPage',
        },
        {
          id:5,
          projectImage: flavourHub,
          projectTitle: 'Flavour Hub',
          cardDetail: "Flavour Hub is a web application that displays different meals from an API and allows users to like and comment on their favourite meals.",
          languageUsed: ['HTML', 'CSS', 'JavaScript'],
          live_version: 'https://anshuman7negi.github.io/Kanban_board/dist/',
          link_source: 'https://github.com/anshuman7negi/Kanban_board',
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