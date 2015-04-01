import {Router} from "aurelia-router";

export class App {
  static inject() { return [Router]; }

  constructor(router){
    this.router = router;
    this.router.configure(config => {
      config.title = "Reddit";

      config.map([
        {route: ["", "funny"], moduleId: "funny", nav: true, title: "Funny Subreddit"},
        {route: "gifs", moduleId: "gifs", nav: true, title: "Gifs Subreddit"}
      ]);
    });
  }
}
