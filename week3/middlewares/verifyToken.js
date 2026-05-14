import jwt from 'jsonwebtoken';
const {verify} = jwt;



export function verifyToken(req,res,next){
  //token verification logic
  const token = req.cookies?.token;
  //if req from unauthorized user
  if(!token){
    return res.status(401).json({message:"plz login"})
  }
  try{
  //if token is existed
  const decodedToken = verify(token,'abcdef')
  req.user=decodedToken
  console.log(decodedToken)
  next();
  }catch(err){
    res.status(401).json({message:"session expired. plz relogin"})
  }

}