import '../css/main.scss';
import {RandomGenerator} from './random-generator';

const outputParagraph = $('#outputParagraph');

const outputRandomInt = () => {
  outputParagraph.text(RandomGenerator.randomInteger());
};

const outputRandomRange = () => {
  outputParagraph.text(RandomGenerator.randomRange(1, 500));
};

const buttonRandomInt = jQuery('#randomInt');
const buttonRandomRange = $('#randomRange');

buttonRandomInt.click(outputRandomInt);
buttonRandomRange.click(outputRandomRange);