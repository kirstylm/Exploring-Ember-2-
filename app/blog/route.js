import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            data: this.store.findAll('post'),
            post: {}
        }
    }
});