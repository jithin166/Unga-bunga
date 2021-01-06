class helloWorld{
    str:string="Hello World" //just like String str="Hello World" in Java mr Noob
    newStr:string="";
    h(){
        for(var i=0;i<this.str.length;i++){
            if(this.str[i]=='H'){
                console.log(this.str[i]);
                this.newStr=this.newStr+this.str[i];
                return;
            }
        }

    }
    e(){
        for(var i=0;i<this.str.length;i++){
            if(this.str[i]=='e'){
                console.log(this.str[i]);
                this.newStr=this.newStr+this.str[i];
                return;
            }
        }
        
    }
    l(){
        for(var i=0;i<this.str.length;i++){
            if(this.str[i]=='l'){
                console.log(this.str[i]);
                this.newStr=this.newStr+this.str[i];
                return;
            }
        }
        
    }
    o(){
        
        for(var i=0;i<this.str.length;i++){
            if(this.str[i]=='o'){
                console.log(this.str[i]);
                this.newStr=this.newStr+this.str[i];
                return;
            }
        }
        
    }
    w(){
        
        for(var i=0;i<this.str.length;i++){
            if(this.str[i]=='W'){
                console.log(this.str[i]);
                this.newStr=this.newStr+this.str[i];
                return;
            }
        }
        
    }
    r(){
        
        for(var i=0;i<this.str.length;i++){
            if(this.str[i]=='r'){
                console.log(this.str[i]);
                this.newStr=this.newStr+this.str[i];
                return;
            }
        }
        
    }
    d(){

        
        for(var i=0;i<this.str.length;i++){
            if(this.str[i]=='d'){
                console.log(this.str[i]);
                this.newStr=this.newStr+this.str[i];
                return;
            }
        }

    }
    space(){
        console.log(" ");
    }
    output(){
        console.log(this.newStr);
    }
}

let HelloWorld: helloWorld=new helloWorld();
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