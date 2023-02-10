const url="https://www.themealdb.com/api/json/v1/1/search.php?s="
const search=document.querySelector('.search')
const btn=document.querySelector('.searchBtn')
const lists=document.querySelector('.lists')
const cont=document.querySelector('.btnCont')
const pic=document.querySelector('.pic')
const main=document.querySelector('.main')
const recip=document.querySelector('.recip')
function display(){
    console.log(search.value);
fetch(`${url}${search.value}`)
.then(res=>res.json())
.then(data=>{
    let myMeal=data.meals[0]
    // console.log(myMeal);
    // console.log(myMeal.strMeal);
    // console.log(myMeal.strInstructions);
    let count=1
    let ingredeants=[]
    for(let i in myMeal){
        let ingredeant=''
        let measure=''
        if(i.startsWith("strIngredient")&& myMeal[i]){
            ingredeant=myMeal[i]
            measure=myMeal['strMeasure'+count]
            console.log(ingredeant,measure);
            ingredeants.push(`${ingredeant} ${measure}`)
        }
        
    }
    console.log(ingredeants);
    lists.innerHTML=''
    ingredeants.forEach(ingr=>{
        lists.innerHTML+=`
       <li class="li">${ingr}</li>
      `
    })
    cont.innerHTML=`
    <button class="recipBtn">Recipe</button>
      `
      pic.innerHTML=`
       <img src="${myMeal.strMealThumb}" alt="">
       <div class="names">
             <h3 class="name">${myMeal.strMeal}</h3>
              <h5 class="area">${myMeal.strArea}</h5>
         </div>
      `
      recip.innerHTML=`
      <button class="back">X</button>
            <p>${myMeal.strInstructions}</p>
      `
      const back=document.querySelector('.back')
      const recipBtn=document.querySelector('.recipBtn')
    //   console.log(recipBtn);
    //   console.log(recip);
      recipBtn.addEventListener('click',function(){
        main.style.display='none'
        recip.style.display='block'
     })
     back.addEventListener('click',function(){
        main.style.display='block'
        recip.style.display='none'
     })
}).catch(err=>console.log(err))
}
btn.addEventListener('click',display)
