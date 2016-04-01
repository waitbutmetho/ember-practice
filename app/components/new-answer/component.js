import Ember from 'ember';

export default Ember.Component.extend({
  answer: false,
  actions: {
    newQuestion() {
      this.set('answer', true);
    },
    saveAnswer() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.set('answer', false);
      this.sendAction('answerQuestion', params);
      this.set('content', '');
      this.set('author', '');
    }
  }
});
