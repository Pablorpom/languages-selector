/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';
import SelectMenu from './components/SelectMenu';
import videoLanguagesList1 from './data/language-list-1';
import ListComparison from './components/ListComparison';
import Persist from './components/PersistSelectedValue';

const navigatorLanguages = navigator.languages.map((lang) => lang.split('-')[0]);

const selectMenu = new SelectMenu(
  document.querySelector('body'),
  videoLanguagesList1,
);

const comparisonResult = new ListComparison(
  videoLanguagesList1,
  navigatorLanguages,
);

selectMenu.selectoption(comparisonResult.findedLanguage);
const saveSelectedLanguage = new Persist(selectMenu.selectNode);
