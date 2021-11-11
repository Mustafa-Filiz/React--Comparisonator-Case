export const circleColor = (role) => {
    switch (role) {
        case 'GKP':
            return '2px solid yellow';
        case 'DEF':
            return '2px solid blue';
        case 'MID':
            return '2px solid green';
        case 'FWD':
            return '2px solid red';
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
    return alphaCode === 'EN' ? 'gb' : alphaCode?.toLowerCase();
};
