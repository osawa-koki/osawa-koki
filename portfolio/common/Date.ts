
function Date2String(date: Date): string {
    return date.getFullYear() + "-" + ('00' + (date.getMonth() + 1)).slice(-2) + "-" + ('00' + date.getDate()).slice(-2);
}

export default Date2String;
