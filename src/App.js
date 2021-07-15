import React from 'react';
import Menu from './Components/Menu';
import Section from './Components/Section';
import Button from './Components/Button';
import Bold from './Components/Bold';
import Underline from './Components/Underline';
import Italic from './Components/Italic';
import BlockWrapper from './Components/BlockWrapper';
import './App.css';

const App = () => {
   const types = ['Success', 'Info', 'Warning', 'Error'];
   const clickHandler = () => {
      alert('Privet Andrey');
   };

   return (
      <div className="container" id="main_page">
         <Menu />
         <Button setClickHandler={clickHandler} />
         <Section>
            {types.map((type) => {
               return (
                  <div
                     style={{
                        border: '2px dashed purple',
                        padding: '5px',
                        margin: '20px 0',
                     }}
                  >
                     <h2>{type}</h2>
                     <BlockWrapper type={type.toLowerCase()} />
                  </div>
               );
            })}
         </Section>
         <Section id="article">
            <h2>Статьи</h2>
            <p>
               <Underline>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                  ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                  orci eget eros faucibus tincidunt.
               </Underline>
            </p>
         </Section>
         <Section id="about">
            <h2>О нас</h2>
            <p>
               <Bold>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                  ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                  orci eget eros faucibus tincidunt.
               </Bold>
            </p>
         </Section>
         <Section id="contacts">
            <h2>Контакты</h2>
            <p>
               <Italic>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                  ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                  orci eget eros faucibus tincidunt.
               </Italic>
            </p>
         </Section>
      </div>
   );
};

export default App;
