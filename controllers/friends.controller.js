const model = require("../models/friends.model");

function getFriends (req,res){
    res.send(model);
};

function postFriend (req,res){
    if (req.body.name && typeof(req.body.name) === 'string'){
        const newFriend = {
            id: model.length,
            name: req.body.name
        }
        model.push(newFriend);
        res.json(newFriend);
    }else{    
        res.status(400).json({
            error: "Friend Name is required"
        });
    }
    
}

function getFriend (req,res){
    const friendId =+req.params.id;
    const friend = model[friendId];
    if (friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({
           error: "Friend not found" 
        });
    }
};

module.exports ={
    getFriends,
    postFriend,
    getFriend,
}