import {navCreator} from './viewModules/navbar'
import {menuCreator} from './viewModules/Menu'


  navCreator()

  let clearPage = () => {
    let section = document.querySelector('.modifySection')
    section.remove()
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
      menuCreator(); 
    } 
  })


