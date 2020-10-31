const navCreator = () => {
  let body = document.querySelector('body');
  let navbarContainer = document.createElement('header')
  let unorderedList = document.createElement('ul');
  let list = document.createElement('li');
  let anchor = document.createElement('a');
  let secondList = document.createElement('li');
  let secondAnchor = document.createElement('a');
  let thirdList = document.createElement('li');
  let thirdAnchor = document.createElement('a');
  let content = document.getElementById('content')
  anchor.textContent = 'Home';
  secondAnchor.textContent = 'Menu';
  thirdAnchor.textContent = 'Contact'
  list.appendChild(anchor);
  secondList.appendChild(secondAnchor);
  thirdList.appendChild(thirdAnchor);
  unorderedList.appendChild(list);
  unorderedList.appendChild(secondList);
  unorderedList.appendChild(thirdList);
  navbarContainer.appendChild(unorderedList);
  body.appendChild(navbarContainer);

  body.insertBefore(navbarContainer, content)
  unorderedList.setAttribute('class', 'nav nav-tabs list-unstyled');
  list.setAttribute('class', 'nav-item list-inline-item');
  secondList.setAttribute('class', 'nav-item list-inline-item');
  thirdList.setAttribute('class', 'nav-item list-inline-item');
  anchor.setAttribute('class', 'nav-link btn text-light');
  anchor.setAttribute('id', 'firstAnchor');
  secondAnchor.setAttribute('id', 'secondAnchor');
  secondAnchor.setAttribute('class', 'nav-link btn text-light')
  thirdAnchor.setAttribute('class', 'nav-link btn text-light')
  unorderedList.setAttribute('class', 'd-flex justify-content-center mb-0')
  navbarContainer.setAttribute('class', 'bg-secondary')
  return {
    firstAnchor,
    secondAnchor,
    thirdAnchor
  }
}

export {navCreator}