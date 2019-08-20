class Service {

    multiplication(a, b){
        return (a * b);
    }
    
    addition(c, d){
        return (c + d);
    }
 
    subtraction(a, b){
        return a - b;
    }

    threeNumberAddition(a, b, c){
        console.log((a + b + c) /3);
    }
     
    printOutValues(arrValues){
        for(var i= 0; i < arrayLen; i++) {
            if(!arrValues[i]) {
                console.log(`${i} is not an element in arrValues`);
            }
            console.log(`arrValues: value of ${arrValues[i]}`);
        }            
    }

}