var registration = /(?:(?:2[1-9]|[3-9][0-9])|(?:0[1-9]|1[0-9]))(?:0[1-9]|1[0-2])(?:0[1-9]|[12][0-9]|3[01])[\-' '\,]?[12][0-9]{6}/g
var phone = /(?:010[\-' '\,]?[0-9]{4}|01[3469][\-' '\,]?[0-9]{3})[\-' '\,]?[0-9]{4}/g
var test = '0105654709374989387293971004271831809029384940321217831500104680709306403032648420';
console.log(test.match(registration));
console.log(test.match(phone));
