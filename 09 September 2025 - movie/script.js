let selectElement = document.getElementById('film');
let imgElement = document.getElementById('mainImg');
let hargaTiket = document.getElementById('harga');
let sinopsis = document.getElementById('sinopsis');
let titleText = document.getElementById('title');
let harga = 0;
let sinopsisK = '';
let title = '';

// Function to update movie details based on film value
function updateMovieDetails(filmValue) {
    switch(filmValue) {
        case "film1":
            title = "Spirited Away";
            imgElement.src = 'assets/movie1.jpeg';
            harga = 20000;
            sinopsisK = 'A 10-year-old girl named Chihiro becomes trapped in a magical spirit world after her parents are transformed into pigs. She must work at a bathhouse for spirits and gods to find a way to free her family and return to the human world.';
            break;
            
        case "film2":
            title = "Your Name";
            imgElement.src = 'assets/movie2.jpeg';
            harga = 30000;
            sinopsisK = 'Two teenagers, Taki and Mitsuha, mysteriously begin swapping bodies in their dreams. As they navigate each other\'s lives, they develop a deep connection, but a supernatural disaster threatens to separate them forever.';
            break;
            
        case "film3":
            title = "Princess Mononoke";
            imgElement.src = 'assets/movie3.jpeg';
            harga = 40000;
            sinopsisK = 'Prince Ashitaka becomes cursed after defending his village from a demon boar. He journeys to find a cure and becomes caught in a war between the forest gods and humans who consume the forest\'s resources.';
            break;
            
        case "film4":
            title = "Akira";
            imgElement.src = 'assets/movie4.jpeg';
            harga = 35000;
            sinopsisK = 'Set in post-apocalyptic Neo-Tokyo, a biker gang member named Tetsuo develops dangerous psychic powers. His childhood friend Kaneda must stop him before Tetsuo\'s abilities destroy the city, just as the mysterious Akira did decades before.';
            break;
            
        case "film5":
            title = "Grave of the Fireflies";
            imgElement.src = 'assets/movie5.jpg';
            harga = 25000;
            sinopsisK = 'A heartbreaking tale following two siblings, Seita and Setsuko, struggling to survive in Japan during the final months of World War II after their mother dies in an air raid.';
            break;
            
        case "film6":
            title = "Ghost in the Shell";
            imgElement.src = 'assets/movie6.jpeg';
            harga = 45000;
            sinopsisK = 'In a cyberpunk future, cyborg police officer Major Motoko Kusanagi hunts a mysterious hacker known as the Puppet Master while questioning her own identity and what it means to be human.';
            break;
            
        case "film7":
            title = "My Neighbor Totoro";
            imgElement.src = 'assets/movie7.jpeg';
            harga = 22000;
            sinopsisK = 'Two young sisters, Satsuki and Mei, move to the countryside with their father to be closer to their hospitalized mother. They discover magical forest spirits, including the gentle giant Totoro, who help them through this difficult time.';
            break;
            
        case "film8":
            title = "A Silent Voice";
            imgElement.src = 'assets/movie8.jpeg';
            harga = 28000;
            sinopsisK = 'Former bully Shoya seeks redemption by reconnecting with Shoko, a deaf girl he tormented in elementary school. The film explores themes of bullying, forgiveness, and finding meaning in life.';
            break;
            
        case "film9":
            title = "Weathering With You";
            imgElement.src = 'assets/movie9.jpeg';
            harga = 32000;
            sinopsisK = 'Runaway teenager Hodaka meets Hina, a girl with the mysterious power to control weather. As they grow closer, they must decide whether to use her abilities to help others, despite the potentially catastrophic consequences.';
            break;
            
        case "film10":
            title = "Castle in the Sky";
            imgElement.src = 'assets/movie10.jpeg';
            harga = 38000;
            sinopsisK = 'Orphan girl Sheeta possesses a mysterious crystal that leads her and young miner Pazu on an adventure to find the legendary floating castle of Laputa, pursued by government agents and air pirates who want the crystal\'s power.';
            break;
            
        default:
            title = "Select a Movie";
            imgElement.src = 'assets/default.jpeg';
            harga = 0;
            sinopsisK = 'Please select a movie from the dropdown to see its details.';
            break;
    }
    
    let formatHarga = harga.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    });
    hargaTiket.textContent = formatHarga;
    sinopsis.innerText = sinopsisK;
    titleText.textContent = title;
    
    selectElement.value = filmValue;
}

selectElement.addEventListener("change", function(){
    let selectValue = selectElement.value;
    updateMovieDetails(selectValue);
});

function selectMovie(filmNumber) {
    let filmValue = `film${filmNumber}`;
    updateMovieDetails(filmValue);
}

function hitung() {
    let JTiket = parseFloat(document.getElementById('JTiket').value);
    if (isNaN(JTiket) || JTiket <= 0) {
        alert('Please enter a valid number of tickets');
        return;
    }
    let totalHarga = harga * JTiket;
    let formatBayar = totalHarga.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    });
    document.getElementById('bayar').textContent = formatBayar;
}