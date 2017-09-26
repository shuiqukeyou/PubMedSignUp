// 以下为第一部分需要复制的内容

function setSelected(selectObj,optionsText){
    for(var i=0;i<selectObj.options.length;i++){
        if(selectObj.options[i].text==optionsText){
            selectObj.options[i].selected=true;
            return i;
        }
    }
}

void((function(){
// 这里是网页上需要手动输入的值，请按实际情况修改textValueList中的值，不要动textNameList
var textNameList = new Array("xmpy","txdz","yzbm","lxdh","dzxx","zcxh")

// ######此行注释中的代码需要手动修改所需填入的值######
var textValueList = new Array("姓名拼音","考生通讯地址","邮编","固定电话","电子信箱","注册学号")
// ######此行注释中的代码需要手动修改所需填入的值######

for (var i=0;i<textNameList.length;i++){
	document.getElementById(textNameList[i]).value = textValueList[i];
}



// 这是网页上需要点击勾选的部分，具体属性值请自己去翻网页源码，这里只提供一部分
// 性别：xbm_0：男，若为女将 xbm_0 改为 xbm_1
// 婚姻状况：hfm_0：未婚，若已婚将 hfm_0 改为 hfm_1，丧偶之类的奇葩选项请去翻网页源码
// 默认为：xbm_0、hfm_0  男、未婚
var clickNameList = new Array("xbm_0","hfm_0")
for (var i=0;i<clickNameList.length;i++){
	document.getElementById(clickNameList[i]).click();
}

// 这是网页上需要下拉选择的部分，请按实际情况“一字不漏的”修改textValueList中的值，因为是按值匹配的
// 比如政治面貌需要写全：中国共产主义青年团团员，写团员是匹配不了的
// 不要动textNameList
// 没有针对非应届生做设置（因为我是应届的），请自行修改源码或者等待脚本执行完成后手选
var selectNameList = new Array("xyjrm","mzm","zzmmm","kslym","xxxs","bklbm","bydwssm","byzydm")

// ######此行注释中的代码需要手动修改所需填入的值######
var selectValueList = new Array("现役军人","民族","政治面貌","考生来源","取得最后学历的学习形式","报考类别","大学所在省份","专业大类")// 此行需要手动修改
// ######此行注释中的代码需要手动修改所需填入的值######

for (var i=0;i<selectNameList.length;i++){
	var selObj=document.getElementById(selectNameList[i]);
	setSelected(selObj,selectValueList[i]);
}

// 网页自带的更新函数
selectedKsly();
refreshBydwList();
loadByzy2();

// 等待后续加载院校和专业名单进来后继续设置表单，延迟自行设定，默认3秒（就那个3000就是延迟，单位毫秒）
// 院校和专业也是下拉菜单所以同样需要严格匹配
setTimeout(function(){ 
var selObj=document.getElementById("bydwm");

// ######此行注释中的代码需要手动修改所需填入的值######
setSelected(selObj,"(学校编号)学院名称");
// ######此行注释中的代码需要手动修改所需填入的值######

var selObj=document.getElementById("byzydm2");

// ######此行注释中的代码需要手动修改所需填入的值######
setSelected(selObj,"专业编号-专业名称");
// ######此行注释中的代码需要手动修改所需填入的值######

selectedBydw() //原本自带的一个调用，不知道有什么卵用，懒得看
}, 3000);

})())

// 以上为第一部分需要复制的内容









// 以下为第二部分需要复制的内容

function setSelected(selectObj,optionsText){
    for(var i=0;i<selectObj.options.length;i++){
        if(selectObj.options[i].text==optionsText){
            selectObj.options[i].selected=true;
            return i;
        }
    }
}

void((function(){
// 这里是网页上需要手动输入的值，请按实际情况修改textValueList中的值，不要动textNameList
var textNameList = new Array("hkszdxxdz","xxgzdw","daszdw","daszdwdz","daszdwyzbm","jlcf","kszbqk","xingming0","guanxi0","danweizhiwu0","dianhua0","xingming1","guanxi1","danweizhiwu1","dianhua1","nianyue0","danwei0","zhiwu0")

// ######此行注释中的代码需要手动修改所需填入的值（很长）######
var textValueList = new Array("户口地址","学校地址","档案所在单位","档案所在单位地址","档案所在单位邮编","奖惩（无）","作弊（无）","亲属名1","亲属关系1","亲属就职单位1","亲属电话1","亲属名2","亲属关系2","亲属就职单位2","亲属电话2","单位经历时间（2014年9月起）","单位经历地址","学生")
// ######此行注释中的代码需要手动修改所需填入的值（很长）######

for (var i=0;i<textNameList.length;i++){
	document.getElementById(textNameList[i]).value = textValueList[i]
}

// 这是网页上需要下拉选择的部分，请按实际情况“一字不漏的”修改textValueList中的值
// 不要动textNameList
var selectNameList = new Array("jgss","hkszdss","csdss","daszdss")

// ######此行注释中的代码需要手动修改所需填入的值######
var selectValueList = new Array("籍贯（省）","户口（省）","出生地（省）","档案位置（省）")
// ######此行注释中的代码需要手动修改所需填入的值######

for (var i=0;i<selectNameList.length;i++){
	var selObj=document.getElementById(selectNameList[i]);
	setSelected(selObj,selectValueList[i]);
}

//网页自带的更新函数
updateJgDjsList()
updateHkszdDjsList();
updateCsdDjsList();
updateDaszdDjsList();

// 等待后续加载城市和区县进来后继续设置表单，延迟自行设定，默认都是0.5秒
setTimeout(function(){ 
// 这是网页上需要下拉选择的部分，请按实际情况“一字不漏的”修改textValueList中的值
// 不要动textNameList
var selectNameList = new Array("jgdjs","hkszddjs","csddjs","daszddjs")

// ######此行注释中的代码需要手动修改所需填入的值######
var selectValueList = new Array("籍贯（市）","户口（市）","出生地（市）","档案位置（市）")
// ######此行注释中的代码需要手动修改所需填入的值######

for (var i=0;i<selectNameList.length;i++){
	var selObj=document.getElementById(selectNameList[i]);
	setSelected(selObj,selectValueList[i]);
	//网页自带的更新函数
	updateJgXjsList();
	updateHkszdXjsList();
	updateCsdXjsList();
	updateDaszdXjsList();
}}, 500);



setTimeout(function(){ 
// 这是网页上需要下拉选择的部分，请按实际情况“一字不漏的”修改textValueList中的值
// 不要动textNameList
var selectNameList = new Array("jgszdm","hkszdm","csdm","daszdm")

// ######此行注释中的代码需要手动修改所需填入的值######
var selectValueList = new Array("籍贯（区/县）","户口（区/县）","出生地（区/县）","档案位置（区/县）")
// ######此行注释中的代码需要手动修改所需填入的值######

for (var i=0;i<selectNameList.length;i++){
	var selObj=document.getElementById(selectNameList[i]);
	setSelected(selObj,selectValueList[i]);
}}, 1000);

})())

// 以上为第二部分需要复制的内容
//格式？不存在的，拿记事本写的有个卵子的格式