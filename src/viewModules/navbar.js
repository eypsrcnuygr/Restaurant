const navCreator = () => {
  let body = document.querySelector('body');
  let navbarContainer = document.createElement('div');
  let unorderedList = document.createElement('ul');
  let list = document.createElement('li');
  let anchor = document.createElement('a');
  let secondList = document.createElement('li');
  let secondAnchor = document.createElement('a');
  anchor.textContent = 'Menu';
  secondAnchor.textContent = 'Contact';
  list.appendChild(anchor);
  secondList.appendChild(secondAnchor);
  unorderedList.appendChild(list);
  unorderedList.appendChild(secondList);
  navbarContainer.appendChild(unorderedList);
  body.appendChild(navbarContainer);
  unorderedList.setAttribute('class', 'nav nav-tabs list-unstyled');
  list.setAttribute('class', 'nav-item list-inline-item');
  secondList.setAttribute('class', 'nav-item list-inline-item');
  anchor.setAttribute('class', 'nav-link');
  secondAnchor.setAttribute('class', 'nav-link')
  unorderedList.setAttribute('class', 'd-flex justify-content-center')
}

export {navCreator}