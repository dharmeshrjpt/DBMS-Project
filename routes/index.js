var express = require("express");
const { compile } = require("jade");
var mysql = require("mysql");
var router = express.Router();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dharmesh",
  database: "dbms",
});
con.connect();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/mainPage", (req, res) => {
  var sql = "select * from places where place = ?";
  var values = [req.body.fromVal, req.body.toVal];

  if (!values[0] || !values[1]) {
    res.status(200).send({
      message: "Please fill details",
    });
  } else {
    con.query(sql, req.body.fromVal, function (err, result) {
      if (err) throw err;
      if (result[0]) {
        con.query(sql, req.body.toVal, function (err, result1) {
          if (err) throw err;
          if (result1[0]) {
            res.status(200).send({
              isAvailable: true,
            });
          } else {
            res.status(200).send({
              isAvailable: false,
            });
          }
        });
      } else {
        res.status(200).send({
          isAvailable: false,
        });
      }
    });
  }
});
router.post("/signIn", (req, res) => {
  var sql = "select * from register where email = ?";
  var values = [req.body.email, req.body.password];

  if (!values[0] || !values[1]) {
    res.status(200).send({
      message: "Please fill details",
    });
  } else {
    con.query(sql, req.body.email, function (err, result) {
      if (err) throw err;
      if (result[0]) {
        if (result[0].password == req.body.password) {
          res.status(200).send({
            message: "login succesfull!!",
            isLoggedIn: true,
            name: result[0].name,
          });
        } else {
          res.status(200).send({
            message: "incorrect password!!",
            isLoggedIn: false,
          });
        }
      } else {
        res.status(200).send({
          message: "Email not registered!",
          isLoggedIn: false,
        });
      }
    });
  }
});
router.post("/signUp", (req, res) => {
  var sqlCheck = "select * from register where email = ?";

  var sql = "insert into register values (?) ";
  var values = [
    req.body.name,
    req.body.email,
    req.body.mobile,
    req.body.password,
  ];

  if (!values[0] || !values[1] || !values[2] || !values[3]) {
    res.status(200).send({
      message: "Please fill details",
    });
  } else {
    con.query(sqlCheck, req.body.email, (err, result) => {
      if (err) throw err;
      if (result[0] && result[0].email == req.body.email) {
        res.status(200).send({
          message: "Email already registered!!",
          isReg: false,
        });
      } else {
        con.query(sql, [values], (err, result) => {
          if (err) throw err;
          res.status(200).send({
            message: "succesfully registered!!",
            isReg: "true",
          });
        });
      }
    });
  }
});

module.exports = router;
