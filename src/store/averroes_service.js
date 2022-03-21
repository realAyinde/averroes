import firebase from "../plugins/firebase";
const db = firebase.ref("/characters");

class AverroesService {
  getAll() {
    return db;
  }
  create(character) {
    return db.push(character);
  }
  update(key, value) {
    return db.child(key).update(value);
  }
  delete(key) {
    return db.child(key).remove();
  }
  deleteAll() {
    return db.remove();
  }
}

export default new AverroesService();