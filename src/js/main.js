const inputYear = document.getElementById("year");
const inputMonth = document.getElementById("month");
const inputDay = document.getElementById("day");
const btnChange = document.getElementById("btn");
const showYear = document.getElementById("shoeYear");
const showMonth = document.getElementById("shoeMonth");
const showDay = document.getElementById("shoeDay");

let yearBool = false;
let monthBool = false;
let dayBool = false;

function erroe(element) {
    const spanError = document.createElement("span");
    spanError.innerHTML = "value is not valid" ;
    element.style.border = "2px solid #B82132";
    spanError.style.display = "block";
    spanError.style.color = "#B82132" ;
    element.parentElement.append(spanError);
}

function exchange() {
    let date = new Date() ;
    let year = date.getFullYear();
    let month =date.getMonth();
    let day =date.getDate();

    if (inputYear.value > year || inputYear.value < 1900 || inputYear.value == "") {
        const existSpan = inputYear.parentElement.querySelector("span");
        if (!existSpan) {
            erroe(inputYear);
        }else{
            return;
        };
    }else{
        const existSpan = inputYear.parentElement.querySelector("span");
        if (existSpan) {
            existSpan.remove();
            inputYear.style.border = "1px solid #6b21a8"; 
        }
        yearBool =true ;
    }
    if (inputMonth.value < 0 || inputMonth.value > 12 || inputMonth.value == "") {
        const existSpan = inputMonth.parentElement.querySelector("span");
        if (!existSpan) {
            erroe(inputMonth);
        }else{
            return;
        };
    }else{
        const existSpan = inputMonth.parentElement.querySelector("span");
        if (existSpan) {
            existSpan.remove();
            inputMonth.style.border = "1px solid #6b21a8"; 
        }
        monthBool = true ;
    }
    if (inputDay.value < 0 || inputDay.value > 31 || inputDay.value == "") {
        const existSpan = inputDay.parentElement.querySelector("span");
        if (!existSpan) {
            erroe(inputDay);
        }else{
            return;
        };
    }else{
        const existSpan = inputDay.parentElement.querySelector("span");
        if (existSpan) {
            existSpan.remove();
            inputDay.style.border = "1px solid #6b21a8"; 
        }
        dayBool = true ;
    }

    if (dayBool && monthBool && yearBool) {
        let ageYear = year - inputYear.value;
        let ageMonth = (month + 1) - inputMonth.value;
        let ageDay = day - inputDay.value ;

        if (ageMonth < 0) {
            ageYear-- ;
            ageMonth += 12 ;
        }
        if (ageDay < 0) {
            ageMonth-- ;
            ageDay += 30 ;
        }
        showDay.innerHTML = ageDay ;
        showMonth.innerHTML = ageMonth ;
        showYear.innerHTML = ageYear ;
    }
}


btnChange.addEventListener("click" , exchange)