import Ember from 'ember';

export default Ember.Component.extend({
  formVisible: false,
actions: {
  showQuestionForm() {
    this.set('formVisible', true);
  },
  saveQuestion() {
    var params = {
      content: this.get('content') ? this.get('content'): '',
      author: this.get('author') ? this.get('author'): '',
      notes: this.get('notes') ? this.get('notes'): ''
    };
    this.set('formVisible', false);
    this.sendAction('saveQuestion', params);
    this.set('content', '');
    this.set('author', '');
    this.set('notes', '');
  }
}
});
