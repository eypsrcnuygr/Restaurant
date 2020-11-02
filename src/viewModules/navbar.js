const navCreator = () => {
  const body = document.querySelector('body');
  const navbarContainer = document.createElement('header');
  const unorderedList = document.createElement('ul');
  const list = document.createElement('li');
  const anchor = document.createElement('a');
  const secondList = document.createElement('li');
  const secondAnchor = document.createElement('a');
  const thirdList = document.createElement('li');
  const thirdAnchor = document.createElement('a');
  const content = document.getElementById('content');
  anchor.textContent = 'Home';
  secondAnchor.textContent = 'Menu';
  thirdAnchor.textContent = 'Contact';
  list.appendChild(anchor);
  secondList.appendChild(secondAnchor);
  thirdList.appendChild(thirdAnchor);
  unorderedList.appendChild(list);
  unorderedList.appendChild(secondList);
  unorderedList.appendChild(thirdList);
  navbarContainer.appendChild(unorderedList);
  body.appendChild(navbarContainer);

  body.insertBefore(navbarContainer, content);
  unorderedList.setAttribute('class', 'nav nav-tabs list-unstyled');
  list.setAttribute('class', 'nav-item list-inline-item px-4');
  secondList.setAttribute('class', 'nav-item list-inline-item px-4');
  thirdList.setAttribute('class', 'nav-item list-inline-item px-4');
  anchor.setAttribute('class', 'nav-link btn text-light');
  anchor.setAttribute('id', 'anchor');
  secondAnchor.setAttribute('id', 'secondAnchor');
  secondAnchor.setAttribute('class', 'nav-link btn text-light');
  thirdAnchor.setAttribute('class', 'nav-link btn text-light');
  thirdAnchor.setAttribute('id', 'thirdAnchor');
  unorderedList.setAttribute('class', 'd-flex justify-content-center mb-0');
  navbarContainer.setAttribute('class', 'bg-secondary');
};

export default navCreator;