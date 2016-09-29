var myConstructor = function() {
    
    // 构造方法
    function myConstructor(message) {
        this.myMessage = message;
    }
    myConstructor.prototype.constructor = myConstructor;

    // 私有属性
    var separate = ' -';
    var myOwner = this;

    // 私有方法
    function alertMessage() {
        alert(myOwner.myMessage);
    }

    // 共有方法--------1
    this.appendToMessage = function(string) {
        this.myMessage += separate + string;
        alertMessage();
    };

    // 共有方法--------2
    myConstructor.prototype.clearMessage = function() {
        this.myMessage = '';
    }

    // 静态属性
    myConstructor.name = 'Jeff';

    // 静态方法
    myConstructor.alertName = function() {
        alert(this.name);
    }

    return myConstructor;
}();
