const express = require('express')
const bodyParser = require('body-parser')
// npm install body-parser
const app = express()
const db = require('./models')

app.use(bodyParser.urlencoded({extended:false,}))

db.sequelize.sync() // promise object
.then(()=>{
    console.log('DB 접속 성공');
})
.catch( error=>{
    console.log(`DB 접속 실패 : ${error} `)
})

app.get('/',(req,res)=>{
    res.send('hello aws !')
})

app.post('/', async (req,res)=>{
    // DB연결하고 
    console.log('POSTMAN으로 실행함!');
    res.json(req.body)
    await User.create({
        userid:req.body.userid,
        username:req.body.username,
        userpw:req.body.userpw
    })
})

// 회원가입 url
app.post('/user',(req,res)=>{

})

//회원정보 url
app.get('/user',(req,res)=>{

})

//회원수정 url 
app.patch('/user',(req,res)=>{

})

//회원탈퇴 url 
app.delete('/user/',(req,res)=>{

})

// 로그인 
// 게시판 view -> update 조회수 
// 게시판 view -> patch?? view get ? 가져오기인데 ?
// post get 

app.delete('/user/follwer')
app.delete('/user/folling')

app.listen(3001,()=>{
    console.log('start server port 3001')
})