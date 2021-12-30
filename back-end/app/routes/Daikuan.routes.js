module.exports = app => {
  // const daikuan = require("../controllers/Danwei.controller.js");

  var router = require("express").Router();

  //营业收入
  router.get("/shouRu", (req,res) =>{
      res.json([{name:"营业收入",
          value:304134900}])
  });
  //贷款余额
  router.get("/daiKuan", (req,res) =>{
      res.json([{name:"贷款余额",
          value:219354900}])
  });
   //累计回款
   router.get("/huiKuan", (req,res) =>{
      res.json([{name:"累计回款",
          value:84780000}])
  });
   //营业利润
   router.get("/liRun", (req,res) =>{
      res.json([{name:"营业利润",
          value:21121500}])
  });
  //项目融资余额占比
  router.get("/yuE", (req,res) =>{
  const data=[
          {
              type:"桃心大道",
              value:204950000},
              {
              type:"塔田安置房",
              value:33848100
              },
              {
              type:"文化中心",
              value:15955100
                  }]
      res.json(
      data)
//        res.json([
//        {
//        type:"桃心大道",
//        value:204950000},
//        {
//        type:"塔田安置房",
//        value:33848100
//        },
//        {
//        type:"文化中心",
//        value:15955100
//            }])
  });
  //加权平均α比例
  router.get("/alpha", (req,res) =>{
      const value = 0.6341;
      res.json([{value}])
  });
  //建筑项目融资余额
  router.get("/rongZi", (req,res) =>{
      const data=[
          {
              x: "10/1/2020",
              y: 6536,
              s: "桃新大道"
            },
            {
              x: "11/1/2020",
              y: 6536,
              s: "桃新大道"
            },
            {
              x: "12/1/2020",
              y: 10778,
              s: "桃新大道"
            },
            {
              x: "1/1/2021",
              y: 8060,
              s: "桃新大道"
            },
            {
              x: "2/1/2021",
              y: 8372,
              s: "桃新大道"
            },
            {
              x: "3/1/2021",
              y: 9997,
              s: "桃新大道"
            },
            {
              x: "4/1/2021",
              y: 12876,
              s: "桃新大道"
            },
            {
              x: "5/1/2021",
              y: 18362,
              s: "桃新大道"
            },
            {
              x: "6/1/2021",
              y: 17362,
              s: "桃新大道"
            },
            {
              x: "7/1/2021",
              y: 19342,
              s: "桃新大道"
            },
            {
              x: "8/1/2021",
              y: 18564,
              s: "桃新大道"
            },
            {
              x: "9/1/2021",
              y: 20495,
              s: "桃新大道"
            },
            {
              x: "10/1/2020",
              y: 3385,
              s: "塔田安置房"
            },
            {
              x: "11/1/2020",
              y: 3385,
              s: "塔田安置房"
            },
            {
              x: "12/1/2020",
              y: 3385,
              s: "塔田安置房"
            },
            {
              x: "1/1/2021",
              y: 3385,
              s: "塔田安置房"
            },
            {
              x: "2/1/2021",
              y: 3385,
              s: "塔田安置房"
            },
            {
              x: "3/1/2021",
              y: 3385,
              s: "塔田安置房"
            },
            {
              x: "4/1/2021",
              y: 3385,
              s: "塔田安置房"
            },
            {
              x: "5/1/2021",
              y: 3385,
              s: "塔田安置房"
            },
            {
              x: "6/1/2021",
              y: 3385,
              s: "塔田安置房"
            },
            {
              x: "7/1/2021",
              y: 3385,
              s: "塔田安置房"
            },
            {
              x: "8/1/2021",
              y: 3385,
              s: "塔田安置房"
            },
            {
              x: "9/1/2021",
              y: 3385,
              s: "塔田安置房"
            },
            {
              x: "10/1/2020",
              y: 1652,
              s: "南昌县文化中心"
            },
            {
              x: "11/1/2020",
              y: 1704,
              s: "南昌县文化中心"
            },
            {
              x: "12/1/2020",
              y: 1718,
              s: "南昌县文化中心"
            },
            {
              x: "1/1/2021",
              y: 1718,
              s: "南昌县文化中心"
            },
            {
              x: "2/1/2021",
              y: 1718,
              s: "南昌县文化中心"
            },
            {
              x: "3/1/2021",
              y: 1718,
              s: "南昌县文化中心"
            },
            {
              x: "4/1/2021",
              y: 1718,
              s: "南昌县文化中心"
            },
            {
              x: "5/1/2021",
              y: 1718,
              s: "南昌县文化中心"
            },
            {
              x: "6/1/2021",
              y: 1718,
              s: "南昌县文化中心"
            },
            {
              x: "7/1/2021",
              y: 1718,
              s: "南昌县文化中心"
            },
            {
              x: "8/1/2021",
              y: 1718,
              s: "南昌县文化中心"
            },
            {
              x: "9/1/2021",
              y: 1718,
              s: "南昌县文化中心"
            }]
      res.json(
      data)
  });
  //信用评分
  router.get("/xinYong", (req,res) =>{
      const data=[
          {
              x: "10/1/2020",
              y: 89,
              s: "北京城建"
            },
            {
              x: "11/1/2020",
              y: 90,
              s: "北京城建"
            },
            {
              x: "12/1/2020",
              y: 90,
              s: "北京城建"
            },
            {
              x: "1/1/2021",
              y: 92,
              s: "北京城建"
            },
            {
              x: "2/1/2021",
              y: 92,
              s: "北京城建"
            },
            {
              x: "3/1/2021",
              y: 91,
              s: "北京城建"
            },
            {
              x: "4/1/2021",
              y: 92,
              s: "北京城建"
            },
            {
              x: "5/1/2021",
              y: 92,
              s: "北京城建"
            },
            {
              x: "6/1/2021",
              y: 91,
              s: "北京城建"
            },
            {
              x: "7/1/2021",
              y: 90,
              s: "北京城建"
            },
            {
              x: "8/1/2021",
              y: 85,
              s: "北京城建"
            },
            {
              x: "9/1/2021",
              y: 86,
              s: "北京城建"
            },
            {
              x: "10/1/2020",
              y: 88,
              s: "江西圳发"
            },
            {
              x: "11/1/2020",
              y: 88,
              s: "江西圳发"
            },
            {
              x: "12/1/2020",
              y: 86,
              s: "江西圳发"
            },
            {
              x: "1/1/2021",
              y: 88,
              s: "江西圳发"
            },
            {
              x: "2/1/2021",
              y: 90,
              s: "江西圳发"
            },
            {
              x: "3/1/2021",
              y: 90,
              s: "江西圳发"
            },
            {
              x: "4/1/2021",
              y: 92,
              s: "江西圳发"
            },
            {
              x: "5/1/2021",
              y: 92,
              s: "江西圳发"
            },
            {
              x: "6/1/2021",
              y: 92,
              s: "江西圳发"
            },
            {
              x: "7/1/2021",
              y: 93,
              s: "江西圳发"
            },
            {
              x: "8/1/2021",
              y: 93,
              s: "江西圳发"
            },
            {
              x: "9/1/2021",
              y: 93,
              s: "江西圳发"
            },
            {
              x: "10/1/2020",
              y: 85,
              s: "江西诺金"
            },
            {
              x: "11/1/2020",
              y: 85,
              s: "江西诺金"
            },
            {
              x: "12/1/2020",
              y: 86,
              s: "江西诺金"
            },
            {
              x: "1/1/2021",
              y: 85,
              s: "江西诺金"
            },
            {
              x: "2/1/2021",
              y: 86,
              s: "江西诺金"
            },
            {
              x: "3/1/2021",
              y: 85,
              s: "江西诺金"
            },
            {
              x: "4/1/2021",
              y: 88,
              s: "江西诺金"
            },
            {
              x: "5/1/2021",
              y: 89,
              s: "江西诺金"
            },
            {
              x: "6/1/2021",
              y: 86,
              s: "江西诺金"
            },
            {
              x: "7/1/2021",
              y: 85,
              s: "江西诺金"
            },
            {
              x: "8/1/2021",
              y: 88,
              s: "江西诺金"
            },
            {
              x: "9/1/2021",
              y: 88,
              s: "江西诺金"
            }]
      res.json(
      data)
  });
  //α风险值
  router.get("/alphaF", (req,res) =>{
      const data=[
          {
              x: "10/1/2020",
              y: 0.39757677,
              s: "桃新大道"
            },
            {
              x: "11/1/2020",
              y: 0.39757677,
              s: "桃新大道"
            },
            {
              x: "12/1/2020",
              y: 0.391606709,
              s: "桃新大道"
            },
            {
              x: "1/1/2021",
              y: 0.642819821,
              s: "桃新大道"
            },
            {
              x: "2/1/2021",
              y: 0.637,
              s: "桃新大道"
            },
            {
              x: "3/1/2021",
              y: 0.638,
              s: "桃新大道"
            },
            {
              x: "4/1/2021",
              y: 0.557,
              s: "桃新大道"
            },
            {
              x: "5/1/2021",
              y: 0.588,
              s: "桃新大道"
            },
            {
              x: "6/1/2021",
              y: 0.639,
              s: "桃新大道"
            },
            {
              x: "7/1/2021",
              y: 0.705,
              s: "桃新大道"
            },
            {
              x: "8/1/2021",
              y: 0.66,
              s: "桃新大道"
            },
            {
              x: "9/1/2021",
              y: 0.666,
              s: "桃新大道"
            },
            {
              x: "10/1/2020",
              y: 0.637739021,
              s: "塔田安置房"
            },
            {
              x: "11/1/2020",
              y: 0.637739021,
              s: "塔田安置房"
            },
            {
              x: "12/1/2020",
              y: 0.637739021,
              s: "塔田安置房"
            },
            {
              x: "1/1/2021",
              y: 0.637739021,
              s: "塔田安置房"
            },
            {
              x: "2/1/2021",
              y: 0.637739021,
              s: "塔田安置房"
            },
            {
              x: "3/1/2021",
              y: 0.637739021,
              s: "塔田安置房"
            },
            {
              x: "4/1/2021",
              y: 0.637739021,
              s: "塔田安置房"
            },
            {
              x: "5/1/2021",
              y: 0.637739021,
              s: "塔田安置房"
            },
            {
              x: "6/1/2021",
              y: 0.667,
              s: "塔田安置房"
            },
            {
              x: "7/1/2021",
              y: 0.705,
              s: "塔田安置房"
            },
            {
              x: "8/1/2021",
              y:  0.718,
              s: "塔田安置房"
            },
            {
              x: "9/1/2021",
              y: 0.711,
              s: "塔田安置房"
            },
            {
              x: "10/1/2020",
              y: 0.546716418,
              s: "南昌县文化中心"
            },
            {
              x: "11/1/2020",
              y: 0.540588235,
              s: "南昌县文化中心"
            },
            {
              x: "12/1/2020",
              y: 0.525642857,
              s: "南昌县文化中心"
            },
            {
              x: "1/1/2021",
              y: 0.525642857,
              s: "南昌县文化中心"
            },
            {
              x: "2/1/2021",
              y: 0.525642857,
              s: "南昌县文化中心"
            },
            {
              x: "3/1/2021",
              y: 0.525642857,
              s: "南昌县文化中心"
            },
            {
              x: "4/1/2021",
              y: 0.525642857,
              s: "南昌县文化中心"
            },
            {
              x: "5/1/2021",
              y: 0.525642857,
              s: "南昌县文化中心"
            },
            {
              x: "6/1/2021",
              y: 0.525642857,
              s: "南昌县文化中心"
            },
            {
              x: "7/1/2021",
              y: 0.525642857,
              s: "南昌县文化中心"
            },
            {
              x: "8/1/2021",
              y: 0.525642857,
              s: "南昌县文化中心"
            },
            {
              x: "9/1/2021",
              y: 0.525642857,
              s: "南昌县文化中心"
            }]
      res.json(
      data)
  });
  //β风险值
  router.get("/betaF", (req,res) =>{
         const data=[
          {
              x: "10/1/2020",
              y: 0.41,
              s: "北京城建"
            },
            {
              x: "11/1/2020",
              y: 0.45,
              s: "北京城建"
            },
            {
              x: "12/1/2020",
              y: 0.46,
              s: "北京城建"
            },
            {
              x: "1/1/2021",
              y: 0.32,
              s: "北京城建"
            },
            {
              x: "2/1/2021",
              y: 0.21,
              s: "北京城建"
            },
            {
              x: "3/1/2021",
              y: 0.23,
              s: "北京城建"
            },
            {
              x: "4/1/2021",
              y: 0.22,
              s: "北京城建"
            },
            {
              x: "5/1/2021",
              y: 0.23,
              s: "北京城建"
            },
            {
              x: "6/1/2021",
              y: 0.24,
              s: "北京城建"
            },
            {
              x: "7/1/2021",
              y: 0.23,
              s: "北京城建"
            },
            {
              x: "8/1/2021",
              y: 0.25,
              s: "北京城建"
            },
            {
              x: "9/1/2021",
              y: 0.25,
              s: "北京城建"
            },
            {
              x: "10/1/2020",
              y: 0.32,
              s: "江西圳发"
            },
            {
              x: "11/1/2020",
              y: 0.32,
              s: "江西圳发"
            },
            {
              x: "12/1/2020",
              y: 0.32,
              s: "江西圳发"
            },
            {
              x: "1/1/2021",
              y: 0.32,
              s: "江西圳发"
            },
            {
              x: "2/1/2021",
              y: 0.32,
              s: "江西圳发"
            },
            {
              x: "3/1/2021",
              y: 0.33,
              s: "江西圳发"
            },
            {
              x: "4/1/2021",
              y: 0.33,
              s: "江西圳发"
            },
            {
              x: "5/1/2021",
              y: 0.33,
              s: "江西圳发"
            },
            {
              x: "6/1/2021",
              y: 0.33,
              s: "江西圳发"
            },
            {
              x: "7/1/2021",
              y: 0.35,
              s: "江西圳发"
            },
            {
              x: "8/1/2021",
              y: 0.34,
              s: "江西圳发"
            },
            {
              x: "9/1/2021",
              y: 0.34,
              s: "江西圳发"
            },
            {
              x: "10/1/2020",
              y: 0.41,
              s: "江西诺金"
            },
            {
              x: "11/1/2020",
              y: 0.41,
              s: "江西诺金"
            },
            {
              x: "12/1/2020",
              y: 0.41,
              s: "江西诺金"
            },
            {
              x: "1/1/2021",
              y: 0.41,
              s: "江西诺金"
            },
            {
              x: "2/1/2021",
              y: 0.41,
              s: "江西诺金"
            },
            {
              x: "3/1/2021",
              y: 0.4,
              s: "江西诺金"
            },
            {
              x: "4/1/2021",
              y: 0.4,
              s: "江西诺金"
            },
            {
              x: "5/1/2021",
              y: 0.41,
              s: "江西诺金"
            },
            {
              x: "6/1/2021",
              y: 0.4,
              s: "江西诺金"
            },
            {
              x: "7/1/2021",
              y: 0.35,
              s: "江西诺金"
            },
            {
              x: "8/1/2021",
              y: 0.35,
              s: "江西诺金"
            },
            {
              x: "9/1/2021",
              y: 0.35,
              s: "江西诺金"
            }]
      res.json(
      data)
  });
  
  app.use('/api/DaPing', router);
};