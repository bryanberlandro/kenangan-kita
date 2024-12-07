export function getDate(){
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[today.getDay()];

    const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
    ];

    // Mendapatkan nama bulan
    const monthName = months[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();

    return (`${dayName}, ${date} ${monthName} ${year}`)
}
