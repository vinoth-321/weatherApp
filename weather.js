 const loader = document.querySelector(".loader");
    async function weather() {
        const city = document.getElementById("city").value;
         
        loader.style.display = "flex";
       try{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'36d5eb6e7417020c91fe4dafb22d6bdb'}&units=metric` ;

       const response  = await fetch(url);
       const data=await response.json();
       console.log(data);

       if(data.cod==200){
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
            document.querySelector(".container").style.display='none';
            document.querySelector(".con2").style.display='flex';
            document.querySelector("#cityname").textContent=data.name;
            document.querySelector(".temp").textContent = `${data.main.temp} °C`;
            document.getElementById('weather-icon').src = iconUrl;
            document.querySelector(".climate").textContent = ` ${data.weather[0].main}`;
            document.querySelector(".humidity").textContent = `Humidity: ${data.main.humidity}%`;
            document.querySelector(".wind").textContent = `Wind: ${data.wind.speed} m/s`;
       }
       else{
           alert("City not found");
       }

       }
       catch{
           loader.style.display = "none"; 
        alert("Something went wrong. Please try again.");
       }


    }

    function back(){
           document.querySelector(".container").style.display='flex';
            document.querySelector(".con2").style.display='none';
            loader.style.display = "none"; 
    }