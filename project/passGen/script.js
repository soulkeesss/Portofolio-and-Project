function genPass(length, upper, nums, special) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let chars = lower;

    if (upper) chars += upperChars;
    if (nums) chars += numbers;
    if (special) chars += specialChars;
    let pass = '';

    for (let i = 0; i < length; i++) {
        const randInt = Math.floor(Math.random() * chars.length);
        pass += chars[randInt];
    }
    return pass;
}
function generate(){
    const len = parseInt(document.getElementById("length").value);
    const upper = document.getElementById("upper").checked;
    const nums = document.getElementById("nums").checked;
    const special = document.getElementById("special").checked;
    
    if (len > 9999 || len < 6) {
        window.alert("Password Length must be below 9999 and greater than 5")
        document.getElementById("length").value = 12;
        return;
    }

    const pass = genPass(len, upper, nums, special);
    document.getElementById("passOut").textContent = pass;
}

function reset(){
    document.getElementById("length").value = 12;
    document.getElementById("upper").checked = true;
    document.getElementById("nums").checked = true;
    document.getElementById("special").checked = true;
    document.getElementById("passOut").textContent = 'Password has been reset.';
}