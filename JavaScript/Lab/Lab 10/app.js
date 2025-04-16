
let carsData = [
    {
        name: 'Lamborghini',
        model: "Urus",
        color: 'Orange',
        price: 300000,
        imgSrc: "https://hips.hearstapps.com/hmg-prod/images/2025-lamborghini-urus-se-phev-106-67005496322ba.jpg?crop=0.633xw:0.534xh;0.223xw,0.427xh&resize=1200:*",
        isImported: true
    },
    {
        name: 'Mehran',
        model: "VX",
        color: 'Silver',
        price: 2500,
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJtBX7b_ukY1rNcPgP_Y7BzG2AwWJecct6Q&s",
        isImported: false
    },
    {
        name: 'Sonata',
        model: "N Line",
        color: 'White',
        price: 60000,
        imgSrc: "https://propakistani.pk/wp-content/uploads/2025/01/N-Line.jpg",
        isImported: true
    },
    {
        name: 'Havel',
        model: "H6",
        color: 'black',
        price: 40000,
        imgSrc: "https://i.ytimg.com/vi/wAC15UwhCXo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBUbNTquKFO2W1t_bhbheKPMdYgrg",
        isImported: false
    }
];


let carListEl = document.querySelectorAll(".cars-list-container")[0];

function listCars(cars) {
    for (let i = 0; i < cars.length; i++) {
        let carCard = makeCarCard(cars[i]);
        carListEl.innerHTML += carCard;
    }
}

listCars(carsData);


function makeCarCard(car) {
    return `<div>
                <img src="${car.imgSrc}" alt="${car.name}"/>
                <h2>${car.name} ${car.model}</h2>
                <p>${car.color}</p>
                <p>${car.price}</p>
            </div>
        `
}


function filterCars(el) {
    console.log(el.value);
    let filterHoiwiCars = [];
    for (let i = 0; i < carsData.length; i++) {
        if (el.value === 'Imported' && carsData[i].isImported) {
            filterHoiwiCars.push(carsData[i]);
        }
        else if (el.value === 'Pakistani' && !carsData[i].isImported) {
            filterHoiwiCars.push(carsData[i]);

        }
    }
    if(el.value === 'All'){
        filterHoiwiCars = carsData.slice(0);
    }

    carListEl.innerHTML = "";
    listCars(filterHoiwiCars);

}