var express = require('express');
const crypto = require('crypto');
var router = express.Router();
const UserModel  = require('../models/user');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(UserModel);
});


// Level1

/* 
    ✔️ sign up
    METHOD : POST
    URI : localhost:3000/user/signup
    REQUEST BODY : id, name, password, email
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/



router.post('/signup', async (req, res) => {
  const {
      id,
      name,
      password,
      email
  } = req.body;

  // request data 확인 - 없다면 Null Value 반환
  if (!id || !name || !password || !email) {
      res.status(statusCode.BAD_REQUEST)
          .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
      return;
  }
  
  //already ID
  if (UserModel.filter(user => user.id == id).length > 0) {
      res.status(statusCode.BAD_REQUEST)
          .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
      return;
  }

  // 비밀번호 암호화 하기 
  
  const encrypt = (salt, password) => {
    return crypto.pbkdf2Sync(password, salt.toString(), 1, 32, 'sha512').toString('hex');
  }

  const salt = crypto.randomBytes(32).toString('hex');
  const hashed = encrypt(salt, password)

  UserModel.push({
      id,
      name,
      password,
      salt,
      hashed,
      email
  });

  res.status(statusCode.OK)
      .send(util.success(statusCode.OK, resMessage.CREATED_USER, {
          userId: id
      }));
});


// Level1
/* 
    ✔️ sign in
    METHOD : POST
    URI : localhost:3000/user/signin
    REQUEST BODY : id, password
    RESPONSE STATUS : 200 (OK)
    RESPONSE DATA : User ID
*/
router.post('/signin', async (req, res) => {
  // request body 에서 데이터 가져오기
  // request data 확인 - 없다면 Null Value 반환
  // 존재하는 아이디인지 확인 - 없다면 No user 반환
  // 비밀번호 확인 - 없다면 Miss match password 반환
  // 성공 - login success와 함께 user Id 반환

  const {id, password} = req.body;

  if (!id || !password) {
    return res.status(statusCode.BAD_REQUEST)
    .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE))
  }

  const user = UserModel.filter(user => user.id == id);
  if (user.length == 0) {
    return res.status(statusCode.BAD_REQUEST)
    .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
  }

  if (user[0].password != password) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, resMessage.MISS_MATCH_PW));
    
  }

  return res.status(statusCode.OK).send(util.success(statusCode.OK, resMessage.LOGIN_SUCCESS, {userId: user[0].id}));

});

// Level1

router.get('/profile/:id', async (req, res) => {
  const id = req.params.id;
  console.log(req.params.id);
  const user = UserModel.filter(user => user.id == id)[0];

  if (user === undefined) {
    res.status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
    return;
  }

  const dto = {
    id : user.id,
    name : user.name,
    email : user.email
  }

  res.status(statusCode.OK)
      .send(util.success(statusCode.OK, resMessage.READ_PROFILE_SUCCESS, dto))
});


module.exports = router;
