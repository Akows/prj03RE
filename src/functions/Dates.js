export const timeData = () => {
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    const month = currentTime.getMonth() + 1 < 10 ? `0${currentTime.getMonth() + 1}` : currentTime.getMonth() + 1;
    const date = currentTime.getDate() < 10 ? `0${currentTime.getDate()}` : currentTime.getDate();
    const hour = currentTime.getHours() < 10 ? `0${currentTime.getHours()}` : currentTime.getHours();
    const minute = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();
    const second = currentTime.getSeconds() < 10 ? `0${currentTime.getSeconds()}` : currentTime.getSeconds();
    const timeData = `${year}년 ${month}월 ${date}일 ${hour}:${minute}:${second}`;

    return timeData;
};


// console.log(timeData());
// console.log(timeData().slice(0, 10));
