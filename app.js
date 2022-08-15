const app = require("express")();
const PORT = Process.env.PORT  || 3000;

app.get("",(req, res)=> {
    res.send("login.html");
});

app.listen(PORT, ()=>{
    console.log('app up at port ${PORT}');
}); 