function skillToElement(skill) {
    const div = document.createElement('div');
    div.classList.add('skill');
    const img = document.createElement('img');
    img.src = skill.image;
    const name = document.createElement('h4');
    name.textContent = skill.skill;
    div.appendChild(img);
    div.appendChild(name);
    return div;
}

export default function populateSkills(skills) {
    const skillEleArray = [];
    skills.forEach((skill) => {
        const e = skillToElement(skill);
        skillEleArray.push({ element: e, type: skill.type });
    });
    skillEleArray.forEach((ele) => {
        document.querySelector(`#${ele.type}`).appendChild(ele.element);
    });
}
