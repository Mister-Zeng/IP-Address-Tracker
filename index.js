const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

/*
let IPAddress = document.querySelector('.IPAddressNum');
let location = document.querySelector('.locationNum');
let timeZone = document.querySelector('.timeZoneNum');
let ISP = document.querySelector('.ISPNum');
const search = document.querySelector('.arrow');
let ip = "8.8.8.8";
const api_key = "1548105";

const fetchData = async () => {
    const searchWord = document.querySelector('.searchIPAddress')
    const config = { params: { ipAddress: searchWord, domain: searchWord, email: searchWord } }
    const res = await fetch('https://geo.ipify.org/api/v2/', config);
    const data = await res.json();
    IPAddress.innerText = data.ip;
    location.innerText = `(data.location.city), (data.location.region) (data.location.postalCode)`;
    timeZone.innerText = data.location.timezone
    ISP.innerText = data.isp;
};