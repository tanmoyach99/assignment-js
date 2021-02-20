

//unit conversion
function kilometerToMeter(kilometer){
    if(kilometer<=0){
        return "kilometer value is invalid"
    }
    var meter=kilometer*1000;
    return meter;
}
var meter=kilometerToMeter(30.89);
console.log(meter);

//budget of electronics
function budgetCalculator(watchNum,phoneNum,laptopNum){
    var watchPrice=watchNum*50;
    var phonePrice=phoneNum*100;
    var laptopPrice=laptopNum*500;
    var totalPrice=watchPrice+phonePrice+laptopPrice;
    return totalPrice;

}

var totalCost=budgetCalculator(10,10,10);
console.log(totalCost);


//hotel cost func
function hotelCost(days){
    var cost=0;
    if(days<=0){
        return "no cost needed for not staying a single day";
    }
    else if(days<=10){
         cost=days*100;
    }
    else if(days<=20){
        var first=10*100;
        var second=(days-10)*80;
        cost=first+second;
    }
    else{
        var first=10*100;
        var second=10*80;
        var thirdTerm=(days-20)*50;
        cost=first+second+thirdTerm;
    }
    return cost;
}
var totalCost=hotelCost(22);
console.log(totalCost);


//biggest names
function megaFriend(names){
    var bigNames=names[0];
    for(i=0;i<names.length;i++){
    var friendNames=names[i];
    if(friendNames.length>bigNames.length){
        bigNames=friendNames;
      }   

    }
return bigNames;
}
var mega=megaFriend(['sushyam','anik','ashim','sowravraj','anukabbyaHrishav']);
console.log(mega);



