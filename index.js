const form =  document.querySelector("form")

// this usecase give you empty
// const weight =  parseInt(document.querySelector("#weight").value)    

form.addEventListener("submit", function (E){
    E.preventDefault()

   const height =  parseInt(document.querySelector("#height").value);
   const weight =  parseInt(document.querySelector("#weight").value);
   const results =  document.querySelector("#results")

   if (height === " " || height < 0 || isNaN(height)) {
    
    results.innerHTML = `Please give a valid height ${height}`;

   }
  else if (weight === " " || weight < 0 || isNaN(weight)) {
    
    results.innerHTML = `Please give a valid weight ${weight}`;

   }
   else{
     const Bmi =  (weight / ((height * height) / 10000)).toFixed(2);
     //show the result 
     results.innerHTML = `<span> ${Bmi} </span>`;
   }

//    results.innerHTML = `${height}`;

})