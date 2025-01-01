const post=require('../models/blogmodels')
const commentmodels=require('../models/commentmodels')

 
const allPost=async(req, res)=>{


    const allpost=await post.find({}).populate('userid')

    return res.status(200).send({
        success:true,
        message:'view all post',
        allpost

    })
}


const allcomment=async(req, res)=>{
    try {


        
        const allcommnet= await commentmodels.find({}).populate('userid').populate('postid')
        console.log(allcommnet);
        
        return res.status(200).send({
            success:true,
            message:'view all cpmmnet',
            allcommnet
    
        })

    } catch (error) {
        return res.status(501).send({
            success : false,
            err : error.message
        })
    }
}
module.exports={
    allPost,allcomment
}