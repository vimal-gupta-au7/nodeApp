const Post = require("../models/post.model");

const addPost = (req, res) => {
    let post = new Post(req.body);
    post.save(function(err, data){
        if(err) return res.status(400).send(err);
        res.send(post);
    })
};

const deletePost = (req, res)=>{
    let id = req.params.id;
    Post.findOneAndDelete({_id:id})
    .then((data)=>{
        if(data){
            res.send("Sucessfull!!");
        } else{
            res.send("No Record Found!!");
        }
    }) .catch((err)=>{
        res.send(err);        })
};

const allPost = (req, res) =>{
    Post.find({}).exec(function(err, data){
        if(err) req.status(400).send(err)
        res.send(data);
    });
};


module.exports ={
    addPost,
    deletePost,
    allPost
}