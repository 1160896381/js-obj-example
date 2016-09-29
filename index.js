function myConstructor(message) {
    this.myMsaage = message;

    // 私有属性
    var separate = ' -';
    var myOwner = this;

    // 私有方法
    function alertMessage() {
        alert(myOwner.myMsaage);
    }

    alertMessage();

    // 特权方法(也是公有方法)
    this.appendToMessage = function(string) {
        this.myMsaage += separate + string;　　　　
        alertMessage();
    };

    // 公有方法
    myConstructor.prototype.clearMessage = function() {
        this.myMsaage = '';
    }
    // 静态属性  
    myConstructor.name = 'Jeff';
    
    // 静态方法
    myConstructor.alertName = function() {
        alert(this.name);
    }
}
