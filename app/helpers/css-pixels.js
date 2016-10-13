import Ember from 'ember';

export let toPixels = (params) => {
    const number = Math.floor( params[0] );
    if(number === NaN) {
        debugger;
    }
    return number + 'px';
};

export default Ember.Helper.helper(toPixels);
