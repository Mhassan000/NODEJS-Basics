function getMessages(req,res){
    res.send('<ul><li> Unordered List </li></ul>');
};

function postMessage(req,res){
    console.log('Updating the database')
 };

module.exports ={
    getMessages,
    postMessage,
}