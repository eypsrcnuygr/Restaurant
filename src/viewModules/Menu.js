let menuCreator = () => {
  let body = document.querySelector('body')
  let section = document.createElement('section');
  let firstDiv = document.createElement('div');
  let secondDiv = document.createElement('div');
  let thirdDiv = document.createElement('div');
  let firtsH5 = document.createElement('h5');
  let secondH5 = document.createElement('h5');
  let thirdH5 = document.createElement('h5');
  let generalH2 = document.createElement('h2');
  let firstP = document.createElement('p');
  let secondP = document.createElement('p');
  let thirdP = document.createElement('p');
  let fourthP = document.createElement('p');
  let fifthP = document.createElement('p');
  let sixthP = document.createElement('p');
  let seventhP = document.createElement('p');
  let eighthP = document.createElement('p');
  let ninthP = document.createElement('p');
  let tenthP = document.createElement('p');
  let eleventhP = document.createElement('p');
  let twelfthP = document.createElement('p');
  let thirteenthP = document.createElement('p');
  let fourteenthP = document.createElement('p');
  let fifteenthP = document.createElement('p');
  let sixteenthP = document.createElement('p');
  let seventeenthP = document.createElement('p');
  let eighteenthP = document.createElement('p');
  let nineteenthP = document.createElement('p');
  let tweentiethP = document.createElement('p');
  let twentyonethP = document.createElement('p');
  let twentytwothP = document.createElement('p');
  let twentythreethP = document.createElement('p');
  let twentyfourthP = document.createElement('p');
  let twentyfifthP = document.createElement('p');
  let twentysixthP = document.createElement('p');
  let twentyseventhP = document.createElement('p');
  firtsH5.textContent = 'Garden';
  secondH5.textContent = 'Sea';
  thirdH5.textContent = 'Land';
  firstP.textContent = '—  Sautéed Swiss Chard  —';
  secondP.textContent = 'garlic, balsamic reduction';
  thirdP.textContent = '$7';
  fourthP.textContent = '—  Hen of the Woods  —';
  fifthP.textContent = 'shallots, thyme, black pepper';
  sixthP.textContent = '$8';
  seventhP.textContent = '—  Roasted Romanesco  —';
  eighthP.textContent = 'onion, sage, pecorino romano';
  ninthP.textContent = '$9';
  tenthP.textContent = '—  Grilled Octopus  —';
  eleventhP.textContent = 'bay leaf, whole peppercorns, lemon';
  twelfthP.textContent = '$20';
  thirteenthP.textContent = '—  Crab Ravioli  —';
  fourteenthP.textContent = 'garlic, white wine, basil, parsley, ricotta';
  fifteenthP.textContent = '$22';
  sixteenthP.textContent = '—  Wood-Fired Sea Bream  —';
  seventeenthP.textContent = 'artichoke, capers, rosemary, thyme';
  eighteenthP.textContent = '$25';
  nineteenthP.textContent = '—  Fried Quail  —';
  tweentiethP.textContent = 'paprika, turmeric, black pepper, ginger';
  twentyonethP.textContent = '$18';
  twentytwothP.textContent = '—  Escargot  —';
  twentythreethP.textContent = 'garlic, shallots, parsley, black pepper';
  twentyfourthP.textContent = '$19';
  twentyfifthP.textContent = '—  Lamb Stew  —';
  twentysixthP.textContent = 'roma tomatoes, cannellini beans, onion';
  twentyseventhP.textContent = '$21'
  generalH2.textContent = 'Menu'
  firstDiv.appendChild(firtsH5);
  firstDiv.appendChild(firstP);
  firstDiv.appendChild(secondP);
  firstDiv.appendChild(thirdP);
  firstDiv.appendChild(fourthP);
  firstDiv.appendChild(fifthP);
  firstDiv.appendChild(sixthP);
  firstDiv.appendChild(seventhP);
  firstDiv.appendChild(eighthP);
  firstDiv.appendChild(ninthP);
  secondDiv.appendChild(secondH5);
  secondDiv.appendChild(tenthP);
  secondDiv.appendChild(eleventhP);
  secondDiv.appendChild(twelfthP);
  secondDiv.appendChild(thirteenthP);
  secondDiv.appendChild(fourteenthP);
  secondDiv.appendChild(fifteenthP);
  secondDiv.appendChild(sixteenthP);
  secondDiv.appendChild(seventeenthP);
  secondDiv.appendChild(eighteenthP);
  thirdDiv.appendChild(thirdH5);
  thirdDiv.appendChild(nineteenthP);
  thirdDiv.appendChild(tweentiethP);
  thirdDiv.appendChild(twentyonethP);
  thirdDiv.appendChild(twentytwothP);
  thirdDiv.appendChild(twentythreethP);
  thirdDiv.appendChild(twentyfourthP);
  thirdDiv.appendChild(twentyfifthP);
  thirdDiv.appendChild(twentysixthP);
  thirdDiv.appendChild(twentyseventhP);
  section.appendChild(firstDiv);
  section.appendChild(secondDiv);
  section.appendChild(thirdDiv);
  body.appendChild(generalH2);
  section.setAttribute('class', 'modifySection d-flex justify-content-center bg-info text-center mx-auto w-75 mt-5 py-5 text-light font-weight-bold')
  firstDiv.setAttribute('class', 'mx-4')
  secondDiv.setAttribute('class', 'mx-4')
  thirdDiv.setAttribute('class', 'mx-4')
  generalH2.setAttribute('class', 'text-center text-primary mt-4 pr-5')
  body.appendChild(section);
}

export {menuCreator}