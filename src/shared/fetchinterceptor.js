
export class FetchInterceptor {
  get(url, params, options) {
    return this.processRequest(url, { ...params, method: 'get' });
  }
  post(url, params, options) {
    return this.processRequest(url, { ...params, method: 'post' });
  }
  put(url, params, options) {
    return this.processRequest(url, { ...params, method: 'put' });
  }
  delete(url, params, options) {
    return this.processRequest(url, { ...params, method: 'delete' });
  }
  //process the request and returns an appropriatre result or throw an error
  processRequest(url, params, options) {
    return fetch(url, { ...params }).then(response => {
      return this.processResponse(response);
    }).catch(err => {
      
      throw (err);//returns the exception to the code for logging or any further action
    }
      )
  }
  //process the responsose
  processResponse(response) {
    if (response.ok) {
      //if the response is ok
      return response.json().then(data => {
        return data;
      }).catch(err => {
        //means from api it could happen result status is ok, but no result/content is returned. 
      })
    }
    else if (response.status === 401 && window.location.href .indexOf('login')<0) {
      //general error in case of authentication, but if you are login page you don't want to get redirect to login page. instead show message
    
    }
    else {
      //throw the statusText as error. it can happen in case of duplicate name, or any other scnario
      throw response.statusText;
    }
  }
}

FetchInterceptor.dispatch = undefined;
export default new FetchInterceptor();
