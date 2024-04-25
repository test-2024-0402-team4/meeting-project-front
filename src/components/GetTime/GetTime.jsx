import React from 'react';

function GetTime(timeStamp) {
    const currentDate = new Date();
    const pastDate = new Date(timeStamp);

    const timeDifference = currentDate.getTime() - pastDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    console.log(currentDate);
    console.log(pastDate);
    

    if (isNaN(seconds) || isNaN(minutes) || isNaN(hours) || isNaN(days)) {
        return "올바른 날짜가 아닙니다";
    }

    if (days > 3) {
        const year = pastDate.getFullYear();
        const month = String(pastDate.getMonth() + 1).padStart(2, '0');
        const day = String(pastDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }else if (days > 0) {
        return `${days}일 전`;
    }else if (hours > 0) {
        return `${hours}시간 전`;
    } else if (minutes > 0) {
        return `${minutes}분 전`;
    } else {
        return `${seconds}초 전`;
    }
}

export default GetTime;