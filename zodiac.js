function zodiac(day, month, year) {

    console.log('Your zodiac is:')

    switch (month) {
        case 01:
            if (day > 0 && day <= 19) {
                console.log('Capricorn');
            } else if (day > 19 && day < 31) {
                console.log('Aquarius');
            } break;
        case 02:
            if (day > 0 && day <= 18) {
                console.log('Aquarius');
            } else if (day > 20 && day < 31) {
                console.log('Pisces');
            } break;
        case 03:
            if (day > 0 && day <= 20) {
                console.log('Pisces');
            } else if (day > 20 && day < 31) {
                console.log('Aries');
            } break;
        case 04:
            if (day > 0 && day <= 19) {
                console.log('Aries');
            } else if (day > 20 && day < 31) {
                console.log('Taurus');
            } break;
        case 05:
            if (day > 0 && day <= 20) {
                console.log('Taurus');
            } else if (day > 20 && day < 31) {
                console.log('Gemini');
            } break;
        case 06:
            if (day > 0 && day <= 20) {
                console.log('Gemini');
            } else if (day > 20 && day < 31) {
                console.log('Cancer');
            } break;
        case 07:
            if (day > 0 && day <= 22) {
                console.log('Cancer');
            } else if (day > 22 && day < 31) {
                console.log('Leo');
            } break;
        case 08:
            if (day > 0 && day <= 22) {
                console.log('Leo');
            } else if (day > 22 && day < 31) {
                console.log('Virgo');
            } break;
        case 09:
            if (day > 0 && day <= 22) {
                console.log('Virgo');
            } else if (day > 22 && day < 31) {
                console.log('Libra');
            } break;
        case 10:
            if (day > 0 && day <= 22) {
                console.log('Libra');
            } else if (day > 23 && day < 31) {
                console.log('Scorpio');
            } break;
        case 11:
            if (day > 0 && day <= 21) {
                console.log('Scorpio');
            } else if (day > 21 && day < 31) {
                console.log('Sagittarios');
            } break;
        case 12:
            if (day > 0 && day <= 21) {
                console.log('Sagittarios');
            } else if (day > 21 && day < 31) {
                console.log('Capricorn');
            } break;
    }
}
zodiac(22, 05, 1996);