// function printMessage(el) {
//     console.log(el.value);
// }

let capitalCities = ['karachi', 'lahore', 'peshawar', 'quetta', 'gilgit'];
let provinces = ['sindh', 'punjab', 'kp', 'balochistan', 'gilgit baltistan'];

let provinceNameEl = document.querySelectorAll('.province-name')[0];
function checkCapitalCity(el) {
    let city = el.value.toLowerCase();
    if (!capitalCities.includes(city)) {
        showError("Capital cities are required.");
        return;
    }
    if (city === 'karachi') {
        provinceNameEl.value = "sindh";
    }
    else if (city === 'lahore') {
        provinceNameEl.value = "punjab";
    }
    else if (city === 'peshawar') {
        provinceNameEl.value = "kp";
    }
    else if (city === 'quetta') {
        provinceNameEl.value = "balochistan";
    }
    else if (city === 'gilgit') {
        provinceNameEl.value = "gilgit baltistan";
    }


    /*Second Logic*/
    // let cityIndex = capitalCities.indexOf(city);
    // let provinceName = provinces[cityIndex];
    // provinceNameEl.value = provinceName;

    /*second logic alternate code*/
    // provinceNameEl.value = provinces[capitalCities.indexOf(city)];

}

let errorEl = document.querySelectorAll('.error-msg')[0];
function showError(errorMessage) {
    errorEl.innerHTML = errorMessage;
    errorEl.style.color = "#ff0000"
    setTimeout(function () {
        errorEl.innerHTML = "";
    }, 3000)
}