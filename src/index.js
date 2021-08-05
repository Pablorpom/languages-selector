import './styles.css';
import SelectMenu from './components/SelectMenu';
import video1 from './data/language-list-1';
import OptionList from './components/OptionList';

const selectMenu = new SelectMenu(document.querySelector('body'));
const optionList1 = new OptionList(document.querySelector('.select-menu'), video1);
const navigatorLanguage = navigator.language.split(('-'))[0];
const selectedLanguage = document.querySelector('.select-menu');
const defaultLanguage = optionList1.list.forEach((language) => {
  if (language.id.toLowerCase() === navigatorLanguage.toLowerCase()) {
    selectedLanguage.value = language.id;
  }
  return selectedLanguage.value;
});
console.log(navigatorLanguage);
