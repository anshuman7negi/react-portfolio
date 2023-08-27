import zeromusic from '../../assets/projectImages/ziroMusic/zirodesktop.png'
import mathMagician from '../../assets/projectImages/mathMagician/mathmagician.png'
import demoPortfolio from '../../assets/projectImages/portfolioDemo/demoPortfolio.png'
import flavourHub from '../../assets/projectImages/flavourHub/flavorhub.png'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectData : [
        {
          id:1,
          projectImage: mathMagician,
          projectTitle: 'Math Magician',
          cardDetail: 'Math Magician is a single page application where users can do simple math calculations and read random math related quotes.',
          languageUsed: ['React','React-router','JSX'],
          live_version: 'https://mathmagic-ux2q.onrender.com/quote',
          link_source: 'https://github.com/anshuman7negi/math-magicians',
        },
        {
          id:2,
          projectImage: zeromusic,
          projectTitle: 'ZIRO MUSIC FESTIVAL',
          cardDetail: 'A simple application to book the ZIRO music festival tickets and get details about the music festival.In this project I have used HTML, CSS, JavaScript.',
          languageUsed: ['HTML', 'CSS', 'JavaScript'],
          live_version: 'https://anshuman7negi.github.io/ConcertPage/',
          link_source: 'https://github.com/anshuman7negi/ConcertPage',
        },
        {
          id:3,
          projectImage: flavourHub,
          projectTitle: 'Flavour Hub',
          cardDetail: "Flavour Hub is a web application that displays different meals from an API and allows users to like and comment on their favourite meals.",
          languageUsed: ['HTML', 'CSS', 'JavaScript'],
          live_version: 'https://anshuman7negi.github.io/Kanban_board/dist/',
          link_source: 'https://github.com/anshuman7negi/Kanban_board',
        },
        {
          id:4,
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