var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('webserver',function(){
    gulp.src('.').pipe(webserver({
        port:8800,
        host:'localhost',
        middleware:function(req,res,next){
            var obj = require('url').parse(req.url);
            if(req.method === 'GET'){
                if(obj.pathname === '/data' || obj.pathname === '/one' || obj.pathname === '/two' || obj.pathname === '/three'){
                    res.end(require('fs').readFileSync('./views/data.json'));
                }else{
                    next();
                }
            }else{
                next();
            }
        }
    }))
})