export function circleColor(role){
    switch (role) {
        case 'GKP':
            return '3px solid yellow';
        case 'DEF':
            return '3px solid blue';
        case 'MID':
            return '3px solid green';
        case 'FWD':
            return '3px solid red';
        default:
            break;
    }
};

export function calculateAge(birthDate){
    const year = Number(new Date().getFullYear());
    const birthYear = Number(birthDate?.slice(0, 4));
    return year - birthYear;
};

export function flagArrange(alphaCode){
    if(alphaCode){
        if(alphaCode === "EN"){
            return "gb"
        }else if(alphaCode === "KS"){
            return "xk"
        }else{
            return alphaCode.toLowerCase()
        }
    }else{
        return "tr"
    }
};