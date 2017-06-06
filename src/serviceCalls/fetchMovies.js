var root = 'https://reqres.in';

import fc from '../shared/fetchinterceptor';
//if callback provided call the the cb with data
export let getMovies = function (cb) {
    fc.get(root + '/api/users')
        .then(data => {
            if (cb) {
                cb(data);
            }
        })
        .catch(ex => {
            console.log('there is an api error', ex);
        })
}