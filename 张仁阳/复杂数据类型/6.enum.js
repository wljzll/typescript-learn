// 枚举类型：使用enmu关键字定义数据
// 1.普通枚举
var Gender1;
(function (Gender1) {
    Gender1[Gender1["GIRL"] = 0] = "GIRL";
    Gender1[Gender1["BOY"] = 1] = "BOY";
})(Gender1 || (Gender1 = {}));
console.log("\u674E\u96F7\u662F".concat(Gender1.BOY));
console.log("\u97E9\u6885\u6885\u662F".concat(Gender1.GIRL));
var Gender2;
(function (Gender2) {
    Gender2[Gender2["GIRL"] = 0] = "GIRL";
    Gender2[Gender2["BOY"] = 'boy'.length] = "BOY";
})(Gender2 || (Gender2 = {}));
console.log("\u674E\u96F7\u662F".concat(Gender2.BOY));
console.log("\u97E9\u6885\u6885\u662F".concat(Gender2.GIRL));
var myColors = [0 /* RED */]; // 编译出的结果就是：var myColors = [0 /* RED */];
// const enum Colors2 {
//     RED,
//     YELLOW,
//     BLUE = 'blue'.length
// }
