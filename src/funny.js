import {HttpClient} from 'aurelia-http-client';

  export class Funny {
    // Dependency inject the HttpClient
    static inject() { return [HttpClient]; }

    constructor(http){
      this.http = http; // Assign the http client for use later
      this.posts = [];
      this.subreddit_url = "http://reddit.com/r/funny.json";
    }

    loadPosts(){
      // Aurelia's http client provides us with a jsonp method for
      // getting around CORS issues. The second param is the callback
      // name which reddit requires to be "jsonp"

      return this.http.jsonp(this.subreddit_url, "jsonp").then(r => {
       // Assign the list of posts from the json response from reddit
        this.posts = r.response.data.children;
      });
    }

   // This is called once when the route activates
    activate(){
      return this.loadPosts();
    }
  }
