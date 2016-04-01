import Ember from 'ember';

export default Ember.Component.extend({
  formVisible: false,
actions: {
  showEditForm() {
    this.set('formVisible', true);
  },
  editQuestion(question, params) {
    this.sendAction('editQuestion', question, params);
    this.set('formVisible', false);
  }
}
});
