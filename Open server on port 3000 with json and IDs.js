npm install express

import express from 'express';

const posts = [ 
    {id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150"
}, {id: 2, descricao: "gatinho fofim", imagem: "https://placecats.com/millie/300/150"}
];



const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("servidor escutando...");

} );

app.get("/teste", (req, res)=> {
    res.status(200).json(posts);

});

function buscarPostPorID (id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}



app.get("/teste/:id", (req, res)=> {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);

})
