export function clone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const temp = obj.constructor();
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            temp[key] = clone(obj[key]);
        }
    }
    return temp;
}
