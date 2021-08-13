/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';

import videoLanguagesList1 from './data/language-list-1';

import SelectMenu from './components/SelectMenu';
import Persist from './components/PersistSelectedValue';

import { compareLists, getSimpleLanguage, getId } from './utils';

const { languages: navigatorLanguages } = navigator;

const selectMenu = new SelectMenu(
  document.querySelector('body'),
  videoLanguagesList1,
);

const comparisonResults = compareLists(
  videoLanguagesList1.map(getId),
  navigatorLanguages.map(getSimpleLanguage),
);

selectMenu.selectoption(comparisonResults);
const saveSelectedLanguage = new Persist(selectMenu.selectNode);
