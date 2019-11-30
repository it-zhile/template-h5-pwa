/*
 * 常用正则表达式及验证
 * 1.check.phone  手机号码表达式
 * 2.check.regPhone  验证手机号码
 */
export const check = {
    //邮箱
    email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
    // 用户名
    username: /^[0-9a-zA-Z]{4,20}$/,
    // 密码
    password: /^[0-9a-zA-Z]{6,}$/,
    // 手机
    phone: /(^0[0-9]{9}$)|(^[1-9][0-9]{8}$)/,
    // 银行账号
    bankNum: /^\d{4,25}$/,
    // 数字
    number: /[0-9]$/,
    // 金额-两位小数
    amount: /^\d+(\.\d{0,2})?$/,
}

/**
 * getAdd - 加法函数，用来得到精确的加法结果
 * @param { Number } arg1    计算数值
 * @param { Number } arg2    计算数值
 */
export const getAdd = (arg1, arg2) => {
    if (isNaN(arg1)) {
        arg1 = 0;
    }
    if (isNaN(arg2)) {
        arg2 = 0;
    }
    arg1 = Number(arg1);
    arg2 = Number(arg2);
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
}

/**
* getAdd - 减法函数，用来得到精确的减法结果
* @param {Number}  arg1    计算数值
* @param {Number}  arg2    计算数值
*/
export const getSub = (arg1, arg2) => {
    if (isNaN(arg1)) {
        arg1 = 0;
    }
    if (isNaN(arg2)) {
        arg2 = 0;
    }
    arg1 = Number(arg1);
    arg2 = Number(arg2);

    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

export const isIphone = function () {
    if (window.navigator.userAgent.indexOf('iPhone') != -1) {
        return true;
    } else {
        return false;
    }
}

/**
 * arrRemover - 数组根据指定的key去重
 * @param {Array}   arr  数据源，要判断的数组
 * @param {String}  key  指定通过对象的某项去重
 */
export const arrRemover = function(arr, key){
    var hash = {};
    return arr.reduce(function (item, next) {
        hash[next[key]] ? '' : hash[next[key]] = true && item.push(next);
        return item;
    }, []);
}