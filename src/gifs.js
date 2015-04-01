import {HttpClient} from 'aurelia-http-client';

  export class Gifs {
    static inject() { return [HttpClient]; }

    constructor(http){
      this.http = http;
      this.posts = [];
      this.subreddit_url = "http://reddit.com/r/gifs.json";
    }

    loadPosts(){
      return this.http.jsonp(this.subreddit_url, "jsonp").then(r => {
        this.posts = r.response.data.children;
      });
    }

    activate(){
      return this.loadPosts();
    }
  }
