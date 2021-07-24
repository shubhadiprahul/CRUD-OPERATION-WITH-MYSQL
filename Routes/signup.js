
module.exports = (signup,jwt,knex) =>{
    signup.post("/signup",(req,res)=>{
        if (req.body.name === undefined || req.body.email === undefined || req.body.password === undefined) {
            console.log({ "suggetion": "please fill all contents!" });
            res.send({ "suggetion": "please fill all contents!" })
        }else{
            
            knex.select("*").from('users')
            
            .where({"name": req.body.name, "email": req.body.email, "password": req.body.password})
            .then((data)=>{
                console.log(data,"data");
                if(data.length<1){
                    knex('users').insert(req.body)
                    .then((result)=>{
                        console.log(result,"result");
                        knex("*").from('users')
                        .where("email",req.body.email)
                        .then((data)=>{
                            res.send({"sucess":"signup sucessfully"})
                        }).catch((err)=>{console.log({"sorry":"something went wrong"})
        
                        })
        
                    }).catch((err)=>{console.log(err);})
                }
            }).catch((err)=>{console.log(err)})
        }
    
    })



}