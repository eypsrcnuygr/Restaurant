const ContactCreator = () => {
  const body = document.querySelector('body');
  const section = document.createElement('section');
  const adress = document.createElement('p');
  const phone = document.createElement('p');
  const email = document.createElement('p');
  adress.textContent = 'XXX district, XXX street, No:XXX, city:XXX';
  phone.textContent = '+90 XXX XXX XX XX';
  email.textContent = 'xxx@xxx.com';
  section.appendChild(adress);
  section.appendChild(phone);
  section.appendChild(email);
  section.setAttribute('class', 'modifySection-2 text-center');
  body.appendChild(section);
};

export default ContactCreator;