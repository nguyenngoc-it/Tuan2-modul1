function cong(){
    console.log("111");
    let trai = document.getElementById("left").value;
    let phai = document.getElementById("right").value;


    let T= parseInt(trai);
    let P= parseInt(phai);


    let tong=(T+P);
    document.getElementById("resultt").innerHTML= + tong;
}
function tru(){
    let trai = document.getElementById("left").value;
    let phai = document.getElementById("right").value;
    let T= parseInt(trai);
    let P= parseInt(phai);


    let hieu=(T-P);
    document.getElementById("resultt").innerHTML= + hieu;
}
function nhan(){
    let trai = document.getElementById("left").value;
    let phai = document.getElementById("right").value;
    let T= parseInt(trai);
    let P= parseInt(phai);


    let nhan=(T*P);
    document.getElementById("resultt").innerHTML= + nhan;
}
function chia(){
    let trai = document.getElementById("left").value;
    let phai = document.getElementById("right").value;
    let T= parseInt(trai);
    let P= parseInt(phai);


    let thuong=(T/P);
    document.getElementById("resultt").innerHTML= + thuong;

 }

