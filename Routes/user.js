var express = require('express');
var router  = express.Router();
var User = models.User;



router.post('/test_route',function(req,res)
{
    User.create({
        userName: 'janedoe',
    }).then(function(user)
    {
        res.send(user);
    })
});


module.exports = router;