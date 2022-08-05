const parseISOString = (s) => {
    var b = s?.split(/\D+/);
    return (b[0] + '-' +  b[1] + '-' + b[2] + ' ' + b[3] + ':' + b[4] + ':' + b[5]);
}

export default parseISOString;