const db = require('../conf/database');
module.exports = {
    getRecentPosts: function(req,res,next){
        db.query('select id,title,description, thumbnail from posts ORDER BY createdAt DESC LIMIT 8')
        .then(function([results, fields]){
            if(results && results.length){
                res.locals.results = results;
            }
            next();
        })
        .catch(err => next(err));
    },
    getPostsById: function (req, res, next) {
        let postId = req.params.id;
        let baseSQL = `SELECT p.title, p.description, p.image, p.createdAt, u.username
        FROM posts p
        JOIN user u
        ON p.fk_authorId=u.id
        where p.id=32;`;
        db.query(baseSQL, [postId])
        .then(function([results, fields]){
            if(results && results.length == 1){
                res.locals.currentPost = results[0];
            }
            next();
        })
    },
};