let ContactCreator = () => {
  let body = document.querySelector('body')
  let section = document.createElement('section');
  let adress = document.createElement('p');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  adress.textContent = 'XXX district, XXX street, No:XXX, city:XXX';
  phone.textContent = '+90 XXX XXX XX XX';
  email.textContent = 'xxx@xxx.com';
  section.appendChild(adress);
  section.appendChild(phone);
  section.appendChild(email);
  section.setAttribute('class', 'modifySection-2 text-center')
  body.appendChild(section)
}

export {ContactCreator}