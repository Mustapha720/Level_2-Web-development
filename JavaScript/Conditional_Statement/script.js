const day = "Monday"
const weather = "Sunny"

if (day == "Monday") {
    if (weather == "Sunny") {
        console.log("Today is Monday and it is Sunny")
    }
    else{
        console.log('Today is Monday and the weather is not sunny')
    }
}else {
    console.log("Today is not Monday")
}

const checkCGPA = () => {
    let val = userInput.value;
    val = val.trim();
    if (val === '') {
        console.log('C.G.P.A cannot be empty');
    } else{
        if (val >= 0.1 && val <= 5.0) {
            console.log('Third class!');
        } else if (val > 2.5 && val < 3.5) {
            console.log("Second class lower!");
        } else {
            console.log('The input is invalid');
        }
    }
}