function nameGenerate() {
    const names = [
        "Luna", 
        "Leo", 
        "Aurora", 
        "Milo",
        "Hazel", 
        "Finn", 
        "Aria", 
        "Jasper", 
        "Mia", 
        "Zane"
    ];
    
    const randomName = names[Math.floor(Math.random() * names.length)];
    document.getElementById('nameResult').innerHTML = randomName;
}

function numGenerator(){
    const ranNumber = Math.floor(Math.random() * 50) + 1; 
    document.getElementById('numResult').innerHTML = ranNumber; 
}