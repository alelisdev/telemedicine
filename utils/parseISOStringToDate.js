const parseISOStringToDate = (s) => {
    var b = s?.split(/\D+/);
    return b ? (b[0] + '-' +  b[1] + '-' + b[2]) : null;
}

export default parseISOStringToDate;