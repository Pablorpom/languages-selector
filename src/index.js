/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';

import videoLanguagesList1 from './data/language-list-1';

import SelectMenu from './components/SelectMenu';
import Persist from './components/PersistSelectedValue';

import compareLists from './utils/compare-lists';

const navigatorLanguages = navigator.languages.map((lang) => lang.split('-')[0]);

const selectMenu = new SelectMenu(
  document.querySelector('body'),
  videoLanguagesList1,
);

const comparisonResults = compareLists(
  videoLanguagesList1.map(({ id }) => id),
  navigatorLanguages,
);

selectMenu.selectoption(comparisonResults);
const saveSelectedLanguage = new Persist(selectMenu.selectNode);
