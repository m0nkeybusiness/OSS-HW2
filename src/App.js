import React from 'react';
import data from './data/data.json';
import Menu from './Components/Task4/Menu';
import Section from './Components/Section';
import Button from './Components/Task3/Button';
import Bold from './Components/Task1/Bold';
import Underline from './Components/Task1/Underline';
import Italic from './Components/Task1/Italic';
import BlockWrapper from './Components/Task2/BlockWrapper';
import './App.css';

const App = () => {
   const clickHandler = () => {
      alert('Privet Andrey');
   };

   return (
      <div className="container" id="main_page">
         <Menu />
         <Button setClickHandler={clickHandler} />
         <Section>
            <BlockWrapper />
         </Section>
         <Section id="article">
            <h2>Статьи</h2>
            <p>
               <Underline>{data.text}</Underline>
            </p>
         </Section>
         <Section id="about">
            <h2>О нас</h2>
            <p>
               <Bold>{data.text}</Bold>
            </p>
         </Section>
         <Section id="contacts">
            <h2>Контакты</h2>
            <p>
               <Italic>{data.text}</Italic>
            </p>
         </Section>
      </div>
   );
};

export default App;
