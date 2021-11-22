var express = require('express')
var router = express.Router()
const axios = require('axios');
const Config = require('../main.config');

router.get('/login', function (req, res, next) {
  res.render('login', Config);
});

router.get('/redirect',async function (req, res, next) {

  let query = req.query;
  console.log(query);

  let corpid = Config.corpid;
  let corpsecret = Config.secret;

  const { data: {
    access_token, expires_in
  } } = await axios.get('https://qyapi.weixin.qq.com/cgi-bin/gettoken', {
    params: {
      corpid,
      corpsecret
    }
  });

  console.log(access_token);
  
  const {data:{
    UserId:userid
  }} = await axios.get('https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo',{
    params:{
      access_token,
      code:query.code
    }
  })

  console.log(userid);

  const {data:userinfo} = await axios.get('https://qyapi.weixin.qq.com/cgi-bin/user/get',{
    params:{
      access_token,
      userid
    }
  })

  console.log(userinfo)
  



  res.render('redirect',userinfo);

});

module.exports = router
