function elementHeader(t) {
    const header = document.createElement('h3');
    header.textContent = t;
    header.classList.add('about-element-header');
    return header;
}

function makeDescription() {
    const descriptionWrapper = document.createElement('article');
    descriptionWrapper.classList.add('about-element');
    descriptionWrapper.appendChild(elementHeader('Who Am I?'));

    const descriptionText = document.createElement('p');
    descriptionText.textContent = 'I am a versatile developer, comfortable with blah blah';
    descriptionWrapper.appendChild(descriptionText);
    return descriptionWrapper;
}

export default function createAbout() {
    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about-section');
    document.querySelector('body').appendChild(aboutSection);

    const sectionHeader = document.createElement('h1');
    sectionHeader.classList.add('section-header');
    sectionHeader.textContent = 'About Me';
    aboutSection.appendChild(sectionHeader);

    const wrapper = document.createElement('div');
    wrapper.classList.add('about-wrapper');
    aboutSection.appendChild(wrapper);

    aboutSection.appendChild(makeDescription());
}
