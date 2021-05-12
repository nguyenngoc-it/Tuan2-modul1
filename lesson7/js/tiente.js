function convert(){

    let nhap = document.getElementById("nhap").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    // console.log(nhap, from,to);
        if (from===to){
            document.getElementById("result").innerHTML= "Result :" + nhap  ;

    }
    if( from==="vn" && to==="usd"){
        document.getElementById("result").innerHTML= "Result :" + nhap/23000 ;

    }
    if(from==="usd" && to==="vn")
    {
      document.getElementById("result").innerHTML= "Result :" + nhap*23000 ;
        // alert("tiền VNĐ: "+ nhap*23000);
    }

}