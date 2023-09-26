// script.js

const ageCalculate = () => {
    const today = new Date();
    const inputDate = new Date(document.getElementById("date-input").value);
    const birthTime = inputDate.getTime();
    const currentTime = today.getTime();

    if (birthTime > currentTime) {
        alert("Aún no ha nacido.");
        displayResult("-", "-", "-", "Desconocido"); // Mostrar "Desconocido" como signo zodiacal
        return;
    }

    const diffTime = currentTime - birthTime;

    const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const birthMonth = inputDate.getMonth() + 1; // Nota: getMonth() devuelve 0 para enero, 1 para febrero, etc.

    const zodiacSign = calculateZodiacSign(birthMonth, inputDate.getDate());

    displayResult(days, months, years, zodiacSign);
};

const displayResult = (days, months, years, zodiacSign) => {
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("zodiac-sign").textContent = zodiacSign; // Mostrar el signo zodiacal
};

const calculateZodiacSign = (month, day) => {
    const zodiacSigns = [
        "Capricornio", "Acuario", "Piscis", "Aries", "Tauro", "Géminis",
        "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario"
    ];

    const dates = [
        [12, 22], [1, 20], [2, 19], [3, 21], [4, 20], [5, 21],
        [6, 21], [7, 23], [8, 23], [9, 23], [10, 23], [11, 22]
    ];

    for (let i = 0; i < zodiacSigns.length; i++) {
        if ((month === dates[i][0] && day >= dates[i][1]) || (month === dates[i][0] + 1 && day <= dates[i][1])) {
            return zodiacSigns[i];
        }
    }

    return "Desconocido";
};

document.getElementById("calcularEdad").addEventListener("click", ageCalculate);
