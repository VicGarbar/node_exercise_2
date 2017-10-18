const express = require('express')

const app = express()



app.use(express.static('public'))



//greeting array

function greeter(){



    var greeting = ["Hei, hei", "Hallo", "Bon giorno", "Ello"];

    var greet = greeting[Math.floor(Math.random()*4)];

    

    return greet;

}



//Get endpoint

app.get('/greet/:id', function (req,res){

    

    res.send(greeter() +" "+ req.params.id);

})





app.listen(prosses.evn.PORT || 8080, function () {

  console.log('Example app listening on port 1080!')

})