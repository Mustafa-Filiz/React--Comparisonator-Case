export const circleColor = (role) => {
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

export const calculateAge = (birthDate) => {
    const year = Number(new Date().getFullYear());
    const birthYear = Number(birthDate?.slice(0, 4));
    return year - birthYear;
};

export const flagArrange = (alphaCode) => {
    if(alphaCode){
        return alphaCode === 'EN' ? 'gb' : alphaCode?.toLowerCase();
    }else{
        return 'tr'
    }
};
