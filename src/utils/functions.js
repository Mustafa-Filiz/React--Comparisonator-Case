export function circleColor(role){
    switch (role) {
        case 'GKP':
            return '3px solid #E3DF66';
        case 'DEF':
            return '3px solid #2AA5C1';
        case 'MID':
            return '3px solid #59B73D';
        case 'FWD':
            return '3px solid #C03268';
        default:
            break;
    }
};

export function calculateAge(birthDate){
    const year = Number(new Date().getFullYear());
    const birthYear = birthDate ? Number(birthDate.slice(0, 4)) : "No Data"
    return birthDate ? year - birthYear : birthYear
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