const heading = document.querySelector('.heading-section h1');

heading.addEventListener('mouseenter', (e) => {
    e.target.style.color = 'mediumvioletred';

    setTimeout(function() {
        e.target.style.color = "";
    }, 900);
}, false);

const cardBounce = document.querySelector('.about-cards');
cardBounce.classList.add('animated', 'fadeIn');

const contactFade = document.querySelector('.contact');
contactFade.classList.add('animated', 'fadeInUp');

const contactContent = document.querySelector('.contact p');
console.log(contactContent);

contactContent.textContent = 'We want to hear from you!';

const header3 = document.querySelector('.heading-section h3');

header3.textContent = 'Meet The Duo Behind Hair Connect';
console.log(header3);