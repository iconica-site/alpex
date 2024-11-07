import * as _ from "../index.js";

function server() {
  _.bs.init({
    server: {
      baseDir: _.path.dest,
    },
    notify: false,
    port: 3000,
    startPath: "pages.html",
  });
}

export { server };
