const gulp = require("gulp");
const browser = require("browser-sync");

gulp.task("server", function () {
    browser({
        server: {
            baseDir: "./"
        }
    });
});