import navCreator from './viewModules/navbar';
import menuCreator from './viewModules/Menu';
import ContactCreator from './viewModules/Contact';

navCreator();

const clearPage = () => {
  if (document.querySelector('.modifySection')) {
    const section = document.querySelector('.modifySection');
    section.remove();
  }
  if (document.querySelector('h2')) {
    const h2 = document.querySelector('h2');
    h2.remove();
  }
  if (document.querySelector('.modifySection-2')) {
    const section2 = document.querySelector('.modifySection-2');
    section2.remove();
  }
};


document.getElementById('anchor').addEventListener('click', () => {
  document.querySelector('#content').setAttribute('class', 'withBackground');
  if (document.querySelector('.modifySection') || document.querySelector('.modifySection-2')) {
    clearPage();
  }
});


document.getElementById('secondAnchor').addEventListener('click', () => {
  document.querySelector('#content').setAttribute('class', 'withouthBackground');
  if (!document.querySelector('.modifySection')) {
    clearPage();
    menuCreator();
  }
});

document.getElementById('thirdAnchor').addEventListener('click', () => {
  document.querySelector('#content').setAttribute('class', 'withouthBackground');
  if (!document.querySelector('.modifySection-2')) {
    clearPage();
    ContactCreator();
  }
});
