let Year= parseInt(prompt("nhập năm: "));
let LeapYear= false;
if(Year % 4 ==0){
    if(Year % 100 ==0 ){
        if(Year % 400==0)
        {
            LeapYear=true;
        }

    }
    else
    {
        LeapYear=true;
    }

}
if(LeapYear){
    alert(Year +" là năm nhuận");
}
else {
    alert(Year +"không là năm nhuận")
}