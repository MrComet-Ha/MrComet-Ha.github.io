const img = [
        {
            image : "0.jpg",
            name : "Seodang",
            author : "Kim-hongdo"},
        {
            image : "1.jpg",
            name : "Sainam-Do",
            author : "Kim-hongdo"},
        {
            image : "2.jpg",
            name : "Mona Lisa",
            author : "Leonardo da Vinci"},
        {
            image : "3.jpg",
            name : "Il Cenacolo",
            author : "Leonardo da Vinci"},
        {
            image : "4.jpg",
            name : "Self portrait",
            author : "Vincent van Gogh"},
        {
            image : "5.jpg",
            name : "The Starry Night",
            author : "Vincent van Gogh"},
        {
            image : "6.jpg",
            name : "American Gothic",
            author : "Grant DeVolson Wood"},
        {
            image : "7.jpg",
            name : "Guernica",
            author : "Pablo Ruiz Picasso"},
        {
            image : "8.jpg",
            name : "Meisje met de parel",
            author : "Johannes Vermeer"},
        {
            image : "9.jpg",
            name : "The Kiss",
            author : "Gustav Klimt"},
        {
            image : "10.jpg",
            name : "La Prsistencia de la Memoria",
            author : "Salvador Domingo Felipe Jacinto Dalí i Domènech"},
        {
            image : "11.jpg",
            name : "La nascita di Venere",
            author : "Sandro Botticelli"}
        ]

const base = document.querySelector(".base")
const rand = img[Math.floor(Math.random() * img.length)];
const randImg = rand.image;

base.style.backgroundImage = `url(img/${randImg})`;