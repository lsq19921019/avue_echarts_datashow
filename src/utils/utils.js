

export const uuid = () => {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}
export const compare = (propertyName) => {
  return function (object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];
    if (value2 < value1) {
      return -1;
    } else if (value2 > value1) {
      return 1;
    } else {
      return 0;
    }
  }
}

export const stringify = (json) => {
  let count = 0;
  let list = [];
  let str = JSON.stringify(json, function (key, val) {
    if (typeof val === 'function') {
      list.push(val + '');
      const result = '$code{' + count + '}$code'
      count = count + 1;
      return result
    }
    return val;
  }, 2);
  let startCode = '$code{';
  let endCode = '}$code';
  list.forEach((ele, index) => {
    str = str.replace(startCode + index + endCode, startCode + ele + endCode)
  })
  for (let i = 0; i < count; i++) {
    str = str.replace('"' + startCode, '').replace(endCode + '"', '')
  }
  return str
}

export const parse = (str) => {
  return JSON.parse(str, function (k, v) {
    if (v.indexOf && v.indexOf('function') > -1) {
      return eval("(function(){return " + v + " })()")
    }
    return v;
  });
}
export const addUrlParam = (url, param, value) => {
  if (!url) return
  function GetQueryString (name) {
    var num = url.indexOf("?")
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = url.substr(num + 1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  }
  function replaceParamVal (paramName, value) {
    var re = eval('/(' + paramName + '=)([^&]*)/gi');
    return url.replace(re, paramName + '=' + value);
  }
  if (GetQueryString(param)) {
    return replaceParamVal(param, value)
  } else {
    if (url.includes('?')) {
      url = url + '&' + param + '=' + value
    } else {
      url = url + '?' + param + '=' + value
    }
    return url;
  }

}