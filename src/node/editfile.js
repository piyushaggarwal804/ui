var fs=require('fs');
//const data={name:"jknsFb"}

 var saveData=(data)=>{
  fs.writeFileSync('../prod-data.json',JSON.stringify(data));
}

module.exports={saveData};

// api
// app = express()


// app.post('/save' , (req , res)=>{
  // req.bodys
  //  fs.writeFileSync
  // success case --> 200
  // error case --> 404
// })
