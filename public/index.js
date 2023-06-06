
let olElement = document.querySelector('.ol-container');

fetch('http://localhost:5000/data').then((res) => {
    res.json().then((data) => {
           
            data.forEach((food) => {
            let myLi = document.createElement('li');
            myLi.textContent = `Name is ${food.name} - it is ${food.cuisine} - and the price is $${food.price.toFixed(2)}`;
            olElement.appendChild(myLi)
        })
    })
})

