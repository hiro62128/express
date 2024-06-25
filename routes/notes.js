var express = require('express');
var router = express.Router();




//接続情報設定
const { MongoClient } = require("mongodb");
const url = "";
const client = new MongoClient(url);


router.get('/',async(req, res, next) => {
//データベースコレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

//idが1のドキュメントを検索
const query = {id : 1};
const note = await notes.findOne(query);

res.json(note);
})

module.exports = router;