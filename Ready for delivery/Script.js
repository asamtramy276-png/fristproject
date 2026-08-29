// alert("مرحبا بك")
// function AgeUser(){
//     let age = parseFloat(document.getElementById("ageInput").value);
//     let unit = document.getElementById("unitSelect").value;
//     let resultElement = document.getElementById("result");
    
//     if (isNaN(age) || age <= 0){
//         resultElement.textContent = "الرجاء ادخال عمر صحيح";
//         return;
//     }

//     let result = 0;

//     if (unit === "months"){
//         result = age * 12;
//         resultElement.textContent =` عمرك بالشهر : ${result}شهر ` ;
//     }else if(unit === "days"){
//         result = age * 12 * 30;
//         resultElement.textContent = ` عمرك بالايام : ${result}يوم ` ;
//     }else if(unit === "hours"){
//         result = age * 12 * 30 * 24;
//         resultElement.textContent = ` عمرك بالساعات : ${result}ساعة `;
//     }
// }


// let grad =95;

// if(grad >=95 <100) {
//     console.log("ممتاز");
// }else if(grad >=85 <90){
//     console.log("جيد جدا");
// }else if(grad >=75 <80){
//     console.log("مقبول");
// }else if(grad >=65 <70){
//     console.log("راسب");
// }


// let age =11;

// if(age <=12){
//     console.log("طفل");
// }else if(age >=18){
//     console.log("مراهق");
// }else if(age >= 45){
//     console.log("رجل بالغ");
// }else  {
//     console.log("كبير في السن");
// }



// let age =19;

// if (age < 12 ){
//     console.log("مسموح لك بأفلام الكرتون بس ");
// }else if(age <= 18){
//     console.log("مسموح لك بأفلام عادية ");
// }else{
//     console.log("مسموح لك بأي فيلم تحبه ");
// }



// let age = Number(prompt("أدخل سنك:"));

// if (age < 12) {
//     alert("مسموح لك بمشاهدة أفلام الكرتون فقط");
// } else if (age >= 12 && age <= 18) {
//     alert("مسموح لك بمشاهدة الأفلام العادية");
// } else if (age > 18) {
//     alert("مسموح لك بمشاهدة أي فيلم");
// } else {
//     alert("الرجاء إدخال سن صحيح!");
// }

alert("مرحبنا بك في  موقعي المتواضع")

function osama(){
    let age = Number(document.getElementById("ageInput").value);
    let resultElement = document.getElementById("result");

    if (isNaN(age) || age <= 0){
        resultElement.textContent = "الرجاء ادخال سن صحيح!";
    }else if(age < 12){
        resultElement.textContent = "مسموح لك بمشاهدة أفلام الكرتون";
    }else if(age >= 12 && age <= 18){
            resultElement.textContent = "مسموح لك بمشاهدة العادية";  
    }else{
        resultElement.textContent = "مسموح لك بمشاهدة اي فيلم";
    }
}
