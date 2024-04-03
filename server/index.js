const mongoUrl = require("mongoose");


const Url =  "mongodb+srv://raja:rajahb12@mern.y6wyg8l.mongodb.net/?retryWrites=true&w=majority";
const connectionParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}

mongoUrl.connect(Url,connectionParams)
.then(() => {
    console.log('created')
}).catch((err) => {
 console.log(err);
})