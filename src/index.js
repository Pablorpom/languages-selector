/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';

import videoLanguagesList from './data/language-list-1';

import SelectMenu from './components/SelectMenu';

import {
  Persist, compareLists, getSimpleLanguage, getId,
} from './utils';

const { languages: navigatorLanguages } = navigator;
const body = document.querySelector('body');

const selectedLanguagePersist = new Persist('selected-language');

const selectMenu = new SelectMenu(
  body,
  videoLanguagesList,
  (value) => {
    selectedLanguagePersist.persistValue(value);
  },
);

const comparisonResults = compareLists(
  videoLanguagesList.map(getId),
  navigatorLanguages.map(getSimpleLanguage),
);

selectMenu.selectoption(comparisonResults);

selectMenu.selectoption(selectedLanguagePersist.getPersistedValue());
