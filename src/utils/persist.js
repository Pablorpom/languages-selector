/* eslint-disable import/prefer-default-export */
export class Persist {
  constructor(id) {
    this.id = id;
  }

  persistValue(value) {
    localStorage.setItem(this.id, value);
  }

  getPersistedValue() {
    return localStorage.getItem(this.id);
  }
}
