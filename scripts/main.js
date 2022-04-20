let buttonAll = document.getElementById('all');
let buttonBreakfast = document.getElementById('breakfast');
let buttonLunch = document.getElementById('lunch');
let buttonShakes = document.getElementById('shakes');
let buttonDinner = document.getElementById('dinner');


let myObjArr = [{
  image: 'item-1.jpeg',
  tittle: 'Buttermilk Pancakes',
  price: '$15.99',
  text: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  property: 'breakfast'
},
{
  image: 'item-2.jpeg',
  tittle: 'Diner Double',
  price: '$13.99',
  text: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
  property: 'lunch'
},
{
  image: 'item-3.jpeg',
  tittle: 'Godzilla Milkshake',
  price: '$6.99',
  text: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  property: 'shakes'
},
{
  image: 'item-4.jpeg',
  tittle: 'Country Delight',
  price: '$20.99',
  text: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,`,
  property: 'dinner'
},
{
  image: 'item-5.jpeg',
  tittle: 'Egg Attack',
  price: '$22.99',
  text: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
  property: 'breakfast'
},
{
  image: 'item-6.jpeg',
  tittle: 'Oreo Dream',
  price: '$18.99',
  text: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  property: 'shakes'
},
{
  image: 'item-7.jpeg',
  tittle: 'Bacon Overflow',
  price: '$8.99',
  text: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
  property: 'lunch'
},
{
  image: 'item-8.jpeg',
  tittle: 'American Classic',
  price: '$12.99',
  text: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
  property: 'dinner'
},
{
  image: 'item-9.jpeg',
  tittle: 'Quarantine Buddy',
  price: '$16.99',
  text: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  property: 'shakes'
}]



let main = document.getElementById('main');


function myFunc(obj) {
  let str = '';
  for (let i = 0; i < obj.length; i++) {
    obj[i].isActive = 'Disable';
    str += `<div class="cont"  data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="myModal(${i})">
    <div class="imageDiv">
      <img src="./${obj[i].image}" alt="#" class="image">
    </div>
    <div class="rigt_div">
      <div class="nameLine">
        <span class="tittle"> ${obj[i].tittle}</span>
        <span class="price">  ${obj[i].price}</span>
      </div>
      <p class="text"> ${obj[i].text} </p>
    </div>
    </div>`;
  }
  main.innerHTML = str;
}
myFunc(myObjArr);

buttonAll.onclick = function all() {
  let a = document.querySelectorAll('.active');
  a.forEach(element => {
    element.classList.remove('active')
  });
  buttonAll.classList.add('active');
  myFunc(myObjArr);
}



function myFilter(obj, string) {
  let str = '';
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].property == string) {
      if (obj[i].isActive == 'Active') {
        obj[i].isActive = 'Disable';
      } else {
        obj[i].isActive = 'Active';
      }
    }
  }
  for (let k = 0; k < obj.length; k++) {
    if (obj[k].isActive == 'Active') {

      str += `<div class="cont" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="myModal(${k})" >
      <div class="imageDiv">
        <img src="./${obj[k].image}" alt="#" class="image">
      </div>
      <div class="rigt_div">
        <div class="nameLine">
          <span class="tittle"> ${obj[k].tittle}</span>
          <span class="price">  ${obj[k].price}</span>
        </div>
        <p class="text"> ${obj[k].text} </p>
      </div>
      </div>`;
    }
  }
  if (str.length < 1) {
    myFunc(myObjArr);
    buttonAll.classList.add('active');
  } else {
    main.innerHTML = str;
  }

}

buttonBreakfast.onclick = () => { filter(buttonBreakfast, 'breakfast') }
buttonLunch.onclick = () => { filter(buttonLunch, 'lunch') }
buttonShakes.onclick = () => { filter(buttonShakes, 'shakes') }
buttonDinner.onclick = () => { filter(buttonDinner, 'dinner') }

function filter(buton, name) {
  buttonAll.classList.remove('active');
  buton.classList.toggle('active');
  myFilter(myObjArr, name)
}

let myH5 = document.getElementById('myh5');
let myModalImage = document.getElementById('myModalImage');
let myModalText = document.getElementById('myP');
let modalPrice = document.getElementById('modalPrice');
let minusButton = document.getElementById('minusButton');
let plusButton = document.getElementById('plusButton');
let totalBought = document.getElementById('totalBought');
let buyButton = document.getElementById('buyButton');
let success = document.getElementById('success');
let mySpan = document.getElementById('resultSpan');
let modal = document.getElementById('exampleModal');
let closeModal = document.getElementById('closeModal');



buyButton.onclick = visibleOrNot;

closeModal.onclick = ()=>{
  document.body.removeAttribute('style');  
  document.body.removeAttribute('class');
  modal.style.display = 'none';
  document.getElementsByClassName('modal-backdrop')[0].remove('modal-backdrop');
}
  



function myModal(index) {
  myModalImage.setAttribute('src', `${myObjArr[index].image}`)
  myH5.innerHTML = myObjArr[index].tittle;
  myModalText.innerHTML = myObjArr[index].text;
  modalPrice.innerHTML = myObjArr[index].price;
}



function myCountFunc(event) {
  if (event.target.id == 'minusButton') {
    if (totalBought.innerHTML > 0) {
      totalBought.innerHTML = --totalBought.innerHTML;
    }
  }
  else {
    totalBought.innerHTML = ++totalBought.innerHTML;
  }
}


function visibleOrNot() {
  success.style.visibility = 'visible'; 
  if (totalBought.innerHTML == 0) {       
    success.classList.add('empty');
    mySpan.innerHTML = ' is Empty';
  }else{     
    success.classList.replace('empty','full');
    mySpan.innerHTML = `${totalBought.innerHTML} was bought`;
  }  
  setTimeout(() => { success.style.visibility = 'hidden' }, 1000)
}
  






