import '../css/main.scss';
import {RandomGenerator} from './random-generator';

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
};

const buttonRandomInt = document.querySelector('#randomInt');
const buttonRandomRange = document.querySelector('#randomRange');

buttonRandomInt.addEventListener('click', outputRandomInt);
buttonRandomRange.addEventListener('click', outputRandomRange);