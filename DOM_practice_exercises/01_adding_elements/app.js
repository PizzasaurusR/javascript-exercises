

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redP = document.createElement('p');
redP.classList.add('redP');
redP.textContent = "Hey I'm red!";
redP.style.color ='red';

container.appendChild(redP);

const blueH3 = document.createElement('h3');
blueH3.classList.add('blueH3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color ='blue';

container.appendChild(blueH3);

// Pink Div container
const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pinkDiv');
pinkDiv.style.border = 'solid black 10px';
pinkDiv.style.backgroundColor = 'pink';

const h1Content = document.createElement('div');
h1Content.classList.add('h1Content');
h1Content.textContent = "I'm in a div";

const pContent = document.createElement('p');
pContent.classList.add('pContent');
pContent.textContent = "ME TOO!";

pinkDiv.appendChild(h1Content);
pinkDiv.appendChild(pContent);

container.appendChild(pinkDiv);





