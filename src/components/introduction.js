import niko from '../images/niko.jpg';

export default function createIntro() {
  const introSection = document.createElement('section');
  introSection.classList.add('intro-container');

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('introContentWrap');
  introSection.appendChild(contentWrapper);
  document.querySelector('body').appendChild(introSection);

  const portraitDiv = document.createElement('div');
  portraitDiv.classList.add('portrait');
  contentWrapper.appendChild(portraitDiv);

  const img = document.createElement('img');
  img.src = niko;
  portraitDiv.appendChild(img);

  const introTextContainer = document.createElement('div');
  introTextContainer.classList.add('introTextContainer');
  const greeting = document.createElement('h1');
  greeting.textContent = '~~Hello!~~';
  introTextContainer.appendChild(greeting);

  const name = document.createElement('h2');
  name.textContent = 'My name is NMGVox! Welcome to my personal website!';
  introTextContainer.appendChild(name);

  contentWrapper.appendChild(introTextContainer);
}
