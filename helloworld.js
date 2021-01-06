var helloWorld = /** @class */ (function () {
    function helloWorld() {
        this.str = "Hello World"; //just like String str="Hello World" in Java mr Noob
        this.newStr = "";
    }
    helloWorld.prototype.h = function () {
        for (var i = 0; i < this.str.length; i++) {
            if (this.str[i] == 'H') {
                console.log(this.str[i]);
                this.newStr = this.newStr + this.str[i];
                return;
            }
        }
    };
    helloWorld.prototype.e = function () {
        for (var i = 0; i < this.str.length; i++) {
            if (this.str[i] == 'e') {
                console.log(this.str[i]);
                this.newStr = this.newStr + this.str[i];
                return;
            }
        }
    };
    helloWorld.prototype.l = function () {
        for (var i = 0; i < this.str.length; i++) {
            if (this.str[i] == 'l') {
                console.log(this.str[i]);
                this.newStr = this.newStr + this.str[i];
                return;
            }
        }
    };
    helloWorld.prototype.o = function () {
        for (var i = 0; i < this.str.length; i++) {
            if (this.str[i] == 'o') {
                console.log(this.str[i]);
                this.newStr = this.newStr + this.str[i];
                return;
            }
        }
    };
    helloWorld.prototype.w = function () {
        for (var i = 0; i < this.str.length; i++) {
            if (this.str[i] == 'W') {
                console.log(this.str[i]);
                this.newStr = this.newStr + this.str[i];
                return;
            }
        }
    };
    helloWorld.prototype.r = function () {
        for (var i = 0; i < this.str.length; i++) {
            if (this.str[i] == 'r') {
                console.log(this.str[i]);
                this.newStr = this.newStr + this.str[i];
                return;
            }
        }
    };
    helloWorld.prototype.d = function () {
        for (var i = 0; i < this.str.length; i++) {
            if (this.str[i] == 'd') {
                console.log(this.str[i]);
                this.newStr = this.newStr + this.str[i];
                return;
            }
        }
    };
    helloWorld.prototype.space = function () {
        console.log(" ");
    };
    helloWorld.prototype.output = function () {
        console.log(this.newStr);
    };
    return helloWorld;
}());
var HelloWorld = new helloWorld();
HelloWorld.h();
HelloWorld.e();
HelloWorld.l();
HelloWorld.l();
HelloWorld.o();
HelloWorld.space();
HelloWorld.w();
HelloWorld.o();
HelloWorld.r();
HelloWorld.l();
HelloWorld.d();
HelloWorld.output();
