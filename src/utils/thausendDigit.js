export default function thausendDigit(number){
    let n = (+number / 1000).toString().replace(".", ",");
    return n;
};