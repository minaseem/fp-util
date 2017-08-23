/**
 * Created by imamudinnaseem on 8/23/17.
 */

export const mapObj = (fn: Function, obj: Object) => {
    var keys = Object.keys(obj);
    var values = (<any>Object).values(obj);
    return keys.reduce((obj: any, k, i) => {
        obj[k] = fn(values[i], k, i);
        return obj;
    }, {});
};
