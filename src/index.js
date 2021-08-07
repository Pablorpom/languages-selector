/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';
import SelectMenu from './components/SelectMenu';
import video1 from './data/language-list-1';
import ListComparison from './components/ListComparison';

const selectMenu = new SelectMenu(document.querySelector('body'), video1);
const navigatorLanguages = navigator.languages.map((lang) => lang.split('-')[0]);
const listsComparison = new ListComparison(
  document.querySelector('.select-menu'),
  video1,
  navigatorLanguages,
);
const lang = document.querySelector('.select-menu').value;
console.log(lang);
