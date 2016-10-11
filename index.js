var EXAMPLE = EXAMPLE || {};

/**
 * 面向对象继承处理
 */
EXAMPLE.extend = function(Child, Parent) {　　　　
    var p = Parent.prototype;　　　　
    var c = Child.prototype;　　　　
    for (var i in p) {　
        c[i] = p[i];
    }　　　　
    c.uber = p;
}

EXAMPLE.Person = function() {
    
    // 构造方法
    function constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // 私有属性
    var separate = ' -';
    var self = this;

    // 私有方法
    function alertMessage() {
        alert(self.name);
        alert(self.email);
    }

    // 共有方法--------1
    this.appendToMessage = function(string) {
        this.myMessage += separate + string;
        alertMessage();
    };

    // 共有方法--------2
    constructor.prototype.clearMessage = function() {
        this.myMessage = '';
        alert(this.name)
    }

    // 静态属性
    constructor.name = 'Jeff';

    // 静态方法
    constructor.alertName = function() {
        alert(this.name);
    }

    return constructor;
}();

EXAMPLE.Employee = function() {

    // Employee继承自Person
    function constructor(name, email, jobTitle) {
        Person.call(this, name, email);
        this.jobTitle = jobTitle;
    }

    EXAMPLE.extend(constructor, EXAMPLE.Person);

    return constructor;
}();
