import React from 'react';

function Age(birthDateString) {

    const birthDate = new Date(birthDateString.slice(0, 4), birthDateString.slice(4, 6) - 1, birthDateString.slice(6, 8));
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (currentDate.getMonth() < birthDate.getMonth() || 
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}


export default Age;
