var AAAPerson = function() {
    
    // 构造方法
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }

    // 私有属性
    var separate = ' -';
    var myOwner = this;

    // 私有方法
    function alertMessage() {
        alert(myOwner.name);
        alert(myOwner.email);
    }

    // 共有方法--------1
    this.appendToMessage = function(string) {
        this.myMessage += separate + string;
        alertMessage();
    };

    // 共有方法--------2
    Person.prototype.clearMessage = function() {
        this.myMessage = '';
    }

    // 静态属性
    Person.name = 'Jeff';

    // 静态方法
    Person.alertName = function() {
        alert(this.name);
    }

    return Person;
}();

var BBBEmployee = function() {

    // Employee继承自Person
    function Employee(name, email, jobTitle) {
        AAAPerson.call(this, name, email);
        this.jobTitle = jobTitle;
    }

    Employee.prototype = Object.create(AAAPerson.prototype);
}
