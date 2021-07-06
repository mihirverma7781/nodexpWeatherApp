const submitBtn =document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_form = document.getElementById("temp_form");
const temp = document.getElementById("temp");
const tempStatus = document.getElementById("temp_status");
const dayid = document.getElementById("day");
const dateid = document.getElementById("today_date")

const date = new Date();
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
dateid.innerText=`${date.getDate()}  ${month[date.getMonth()]}`
dayid.innerText=`${daysInWeek[date.getDay()]}`
const getInfo= async (event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText='Please Enter City Name';
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&uid&APPID=2454c11341d91cd72ce1bc7e34632990`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText=`${arrData[0].name} | ${arrData[0].sys.country}`;
            temp.innerHTML=`<span >${arrData[0].main.temp}</span><sup>o</sup>c`
        //    tempStatus.innerText = `${arrData[0].weather[0].main}}`;
            const tempMod = arrData[0].weather[0].main
           if(tempMod==="Clear"){
               tempStatus.innerHTML=`<i class="fa fa-sun" aria-hidden="true" style="color:#eccc68;"></i>`;
           }
           else if(tempMod==="Rain"){
               tempStatus.innerHTML=`<i class="fa fa-cloud-rain" aria-hidden="true" style="color:#f1f2f6;"></i>`;
           }
           else{
               tempStatus.innerHTML=`<i class="fa fa-cloud" aria-hidden="true" style="color:#f1f2f6;"></i>`;
           }


        }
        catch{
            city_name.innerText='Please Enter The Correct City Name';
        }
    }
}

submitBtn.addEventListener('click',getInfo);

// 
