function getRandomColor(){
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

// function getRandomColor(){
//     const letters = '0123456789abcdef';
//     let color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

export default getRandomColor;