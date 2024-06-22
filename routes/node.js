var express = require('express');
var router = express.Router();

//レスポンスのデータ(ノート全体)
const responseObjectDataAll={
textObject1 : {
id: 1,
title: 'ノートのタイトルです',
subTitle: 'ノートのサブタイトルです',
bodyText: 'ノートの本文です',        
},
textObject2 : {
id: 2,
title:'ノート2のタイトル',
subTitle:'ノート2のサブタイトル',
bodyText:'ノート2の本文です'    
},
};

/**
 * メモを全件取得するAPI
 * @returns {Object[]} data
 * @returns {number} data.id - ID
 * @returns {string} data.title - タイトル
 * @returns {string} data.text - 内容
 */
router.get('/',function(req, res, next){
//全件取得して返す
res.json(responseObjectDataAll);
})

module.exports = router;