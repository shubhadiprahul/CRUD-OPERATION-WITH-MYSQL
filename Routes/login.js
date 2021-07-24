module.exports = (app, jwt, knex) =>{
    app.post("/login", (req, res) =>{
        if (req.body.email === undefined || req.body.password === undefined){
            console.log({"suggetion": "email and password both are require!"})
        }else{
            knex
            .select('*')
            .from('users')
            .where('email', req.body.email)
            .then((data) =>{
                // console.log(data);
                if (data.length>0){
                    // console.log(`data is showing......`)
                    if (data[0].password === req.body.password){
                        console.log(data[0].password)
                        console.log(`running status.....`)
                        console.log({"Login success!": data});
                        res.send({"Login success!": "thank you "});
                    }else{
                        console.log({"Error": "Password is invalid"})
                        res.send({
                            "Error": "Password is invalid"
                        })
                    }
                }else{
                    console.log({"Error": "This user doesn't exists! please Signup....."})
                    res.send({
                        "Error": "This user doesn't exists! please Signup....."
                    })
                }
            }).catch((err) =>{
                console.log(err);
            })
        }
    })
}