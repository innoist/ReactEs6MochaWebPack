console.log('Ali is a nice developer');
import React from 'react';
import ReactDOM from 'react-dom';
import {getMovies} from './servicecalls/fetchMovies';
global.jQuery = require('jquery');
require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
const title = 'ali bhai ';
function cb(data){

}

getMovies(cb);
ReactDOM.render(
  (
      <div className="success">
        {title}
        <input type="button" className="btn btn-sucess" value="Click me" />
   
</div>),
  document.getElementById('app')
);

module.hot.accept();