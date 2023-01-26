const jwt = require("jsonwebtoken")
const secret_key = "mern-market"


const auth = async (req, res, next) => {
  if(req.method === "GET"){
    return next()
  }
  const token = await req.headers.authorization.split(" ")[1]
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQG1vbm90ZWluLmNvbSIsImlhdCI6MTY3NDU2OTc0MCwiZXhwIjoxNjc0NjUyNTQwfQ.5LqZMx7DS6WCh7YldJvOnJF9psFFKUgild18rxy3_uQ"
  if(!token){
    return res.status(400).json({message: "トークンがありません"})
  }
  
  try {
    const decoded = jwt.verify(token, secret_key)
    console.log(decoded);
    req.body.email = decoded.email
    return next()
  } catch (error) {
    return res.status(400).json({message: "トークンが正しくありません"})
    
  }
}

module.exports = auth