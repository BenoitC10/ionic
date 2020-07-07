const API_KEY = '8a0cf494a282dda38eff6e38082c66b0'


export default {
    /**
    * /get weather data from location
    * @param location : string
    */
    async getWeather(location: string) {
        const request = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
        const data = await request.json()
        return data
    },
    
    setWeather(location: string) {},



    async getForecast(lon: number, lat: number) {
        const request = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=${API_KEY}`)
        const dataWeather = await request.json()
        return dataWeather
    }



   };

   



