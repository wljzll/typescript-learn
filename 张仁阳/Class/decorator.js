// 装饰器
/**
 * 1) 装饰器是一种特殊的类型声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为;
 * 2) 常见的装饰器有: 类装饰器、属性装饰器、方法装饰器、参数装饰器;
 * 3) 装饰器的写法分为普通装饰器和装饰器工厂;
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器
// 1) 普通装饰器
var a;
(function (a) {
    function addNameEat(constructor) {
        console.log('执行装饰器');
        constructor.prototype.name = 'zhufeng';
        constructor.prototype.eat = function () {
            console.log("eat");
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
            console.log('执行原constructor');
        }
        Person = __decorate([
            addNameEat
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.name);
    p.eat();
})(a || (a = {}));
