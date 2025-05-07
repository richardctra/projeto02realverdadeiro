function muda_cor(){

    let body = document.getElementById("bg");

    flag = Math.floor(Math.random() * 9)


    switch(flag){
        case 0:
            body.style.backgroundColor = "#D3D3D3" 
            break;
        case 1:
            body.style.backgroundColor = "#836FFF"
            break;
        case 2:
            body.style.backgroundColor = "#191970"
            break;
        case 3:
            body.style.backgroundColor = "#00008B"
            break;
        case 4:
            body.style.backgroundColor = "#00BFFF"
            break;
        case 5:
            body.style.backgroundColor = "#B0C4DE"
            break;
        case 6:
            body.style.backgroundColor = "#40E0D0"
            break;
        case 7:
            body.style.backgroundColor = "#66CDAA"
            break;
        case 8:
            body.style.backgroundColor = "#2F4F4F"
            break;
        default:
            body.style.backgroundColor = "#3d828b"
    }
        
}