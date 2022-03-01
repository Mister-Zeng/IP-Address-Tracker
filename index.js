//api files
const api_key = 'at_udqU3AVVicMujkURhDkkHciDgU47U';
let url = 'https://geo.ipify.org/api/v2/';
const bypass_cors_url = 'https://cors-anywhere.herokuapp.com/';

// elements to update
let currentIPAddress = document.querySelector('#IPAddressNum');
let currentLocation = document.querySelector('#locationNum');
let currentTimeZone = document.querySelector('#timeZoneNum');
let currentISP = document.querySelector('#ISPNum');

//form element
let ip = document.querySelector('.searchIPAddress');
const searchButton = document.querySelector('.arrow');

const config = {
    headers: { 'Access-Control-Allow-Origin': '*' }
}

var map = L.map('map').setView([40.7, -73.9], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



updateMarker = (update_marker = [40.7, -73.9]) => {
    map.setView(update_marker, 12)
    L.marker(update_marker).addTo(map)
}

getIPDetails = (default_ip) => {
    if (default_ip == undefined) {
        let ip_url = `${url}?apikey=${api_key}`
    } else {
        let ip_url = `${url}?apikey=${api_key}&ipAddress=${default_ip} `
    }
    //fetch json data
    const res = async () => {
        try {
            axios.get(ip_url, config)
            const data = res.json()
            currentIPAddress.innerHtml = data.ip;
            currentLocation.innerHtml = `(data.location.city), (data.location.region)(data.location.postalCode)`;
            currentTimeZone.innerHtml = data.location.timezone;
            currentISP.innerHtml = data.isp;
            updateMarker([data.location.lat, data.location.lng])
        } catch (e) {
            alert("Unable to get IP details")
            console.log(error)
        }
    }
}

getIPDetails();

document.addEventListener('load', updateMarker())

searchButton.addEventListener('click', function (e) {
    e.preventDefault
    if (entered_ip.value != '' && eneter_ip.value != null) {
        getIPDetails(entered_ip.value)
        return
    }
})
