import {navCreator} from './viewModules/navbar';
import {menuCreator} from './viewModules/Menu';
import {ContactCreator} from './viewModules/Contact';

  navCreator()

  let clearPage = () => {
    if (document.querySelector('.modifySection')) {
      let section = document.querySelector('.modifySection')
      section.remove()
    }
    if (document.querySelector('h2')) {
      let h2 = document.querySelector('h2');
      h2.remove()
    }
    if (document.querySelector('.modifySection-2')) {
      let section2 = document.querySelector('.modifySection-2');
      section2.remove()
    }
  }


  firstAnchor.addEventListener('click', () => {
    document.querySelector('#content').setAttribute('class', 'withBackground');
    if (document.querySelector('.modifySection')) {
      clearPage()
    }
  })

  secondAnchor.addEventListener('click', () => {
    document.querySelector('#content').setAttribute('class', 'withouthBackground');
    if (!document.querySelector('.modifySection')) {
      clearPage();
      menuCreator(); 
    }
  })

  thirdAnchor.addEventListener('click', () => {
    document.querySelector('#content').setAttribute('class', 'withouthBackground');
    if (!document.querySelector('.modifySection-2')) {
      clearPage();
      ContactCreator(); 
    }
      
  })


