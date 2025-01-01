const mongoose=require('mongoose')
 const connectdb=async()=>{
    try {
        const con=await mongoose.connect(
            `mongodb+srv://nikhilvora:Nihkil@cluster0.bvfwl.mongodb.net/apiproject`
        )
        console.log(`mongodb connect`);
        
        
    } catch (error) {
        
        console.log(error);
        return false
            }

 }
 module.exports=connectdb; 