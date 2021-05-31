class Mobile {
    constructor(name, id) {
        this.name= name;
        this.id= id;
        this.inbox=[];
        this.outbox=[];
        this.msg="";
    }
    writemsg(msg){
        this.msg= msg;
    }
    receiveMsg(msg, mobile){
        this.inbox.push(msg);

    }
    sendmsg(mobile){
        this.outbox.push(this.msg);
        mobile.receiveMsg(this.msg,this);


    }
}