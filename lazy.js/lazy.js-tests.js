/// <reference path="lazy.js.d.ts" />
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var foo;
var bar;
var fooArr;
var barArr;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var fooSequence;
var barSequence;
var fooArraySeq;
var barArraySeq;
var fooObjectSeq;
var anyObjectSeq;
var fooAsyncSeq;
var strSequence;
var stringSeq;
var obj;
var bool;
var num;
var str;
var x = null;
var arr;
var exp;
var strArr;
var numArr;
function fnCallback() {
}
function fnErrorCallback(error) {
}
function fnValueCallback(value) {
}
function fnGetKeyCallback(value) {
    return str;
}
function fnTestCallback(value) {
    return bool;
}
function fnMapCallback(value) {
    return bar;
}
function fnMapStringCallback(value) {
    return str;
}
function fnNumberCallback(value) {
    return num;
}
function fnMemoCallback(memo, value) {
    return bar;
}
function fnCompareCallback(x, y) {
    return num;
}
function fnGeneratorCallback(index) {
    return foo;
}
// Lazy
fooArraySeq = Lazy(fooArr);
fooObjectSeq = Lazy({ a: foo, b: foo });
anyObjectSeq = Lazy({ a: num, b: str });
stringSeq = Lazy(str);
// Strict
var Strict = Lazy.strict();
fooArraySeq = Strict([foo, foo]).pop();
// Sequence
fooAsyncSeq = fooSequence.async(num);
fooSequence = fooSequence.chunk(num);
fooSequence = fooSequence.compact();
fooSequence = fooSequence.concat(arr);
fooSequence = fooSequence.consecutive(num);
bool = fooSequence.contains(foo);
fooSequence = fooSequence.countBy(str);
fooObjectSeq = fooSequence.countBy(fnGetKeyCallback);
fooSequence = fooSequence.dropWhile(fnTestCallback);
fooSequence = fooSequence.each(fnValueCallback);
bool = fooSequence.every(fnTestCallback);
fooSequence = fooSequence.filter(fnTestCallback);
fooSequence = fooSequence.find(fnTestCallback);
fooSequence = fooSequence.findWhere(obj);
x = fooSequence.first();
fooSequence = fooSequence.first(num);
fooSequence = fooSequence.flatten();
fooObjectSeq = fooSequence.groupBy(fnGetKeyCallback);
fooSequence = fooSequence.indexOf(x);
fooSequence = fooSequence.initial();
fooSequence = fooSequence.initial(num);
fooSequence = fooSequence.intersection(arr);
fooSequence = fooSequence.invoke(str);
bool = fooSequence.isEmpty();
str = fooSequence.join();
str = fooSequence.join(str);
foo = fooSequence.last();
fooSequence = fooSequence.last(num);
fooSequence = fooSequence.lastIndexOf(foo);
barSequence = fooSequence.map(fnMapCallback);
foo = fooSequence.max();
foo = fooSequence.max(fnNumberCallback);
foo = fooSequence.min();
foo = fooSequence.min(fnNumberCallback);
fooSequence = fooSequence.pluck(str);
bar = fooSequence.reduce(fnMemoCallback);
bar = fooSequence.reduce(fnMemoCallback, bar);
bar = fooSequence.reduceRight(fnMemoCallback, bar);
fooSequence = fooSequence.reject(fnTestCallback);
fooSequence = fooSequence.rest(num);
fooSequence = fooSequence.reverse();
fooSequence = fooSequence.shuffle();
bool = fooSequence.some();
bool = fooSequence.some(fnTestCallback);
fooSequence = fooSequence.sort();
fooSequence = fooSequence.sort(fnCompareCallback);
fooSequence = fooSequence.sort(fnCompareCallback, bool);
fooSequence = fooSequence.sortBy(str);
fooSequence = fooSequence.sortBy(str, bool);
fooSequence = fooSequence.sortBy(fnNumberCallback);
fooSequence = fooSequence.sortBy(fnNumberCallback, bool);
fooSequence = fooSequence.sortedIndex(foo);
fooSequence = fooSequence.sum();
fooSequence = fooSequence.sum(fnNumberCallback);
fooSequence = fooSequence.takeWhile(fnTestCallback);
fooSequence = fooSequence.union(fooArr);
fooSequence = fooSequence.uniq();
fooSequence = fooSequence.where(obj);
fooSequence = fooSequence.without(foo, foo);
fooSequence = fooSequence.without(fooArr);
fooSequence = fooSequence.zip(arr);
fooArr = fooSequence.toArray();
obj = fooSequence.toObject();
// ArrayLikeSequence
fooArraySeq = fooArraySeq.concat(fooArr);
fooArraySeq = fooArraySeq.first();
fooArraySeq = fooArraySeq.first(num);
foo = fooArraySeq.get(num);
num = fooArraySeq.length();
barArraySeq = fooArraySeq.map(fnMapCallback);
fooArraySeq = fooArraySeq.pop();
fooArraySeq = fooArraySeq.rest();
fooArraySeq = fooArraySeq.rest(num);
fooArraySeq = fooArraySeq.reverse();
fooArraySeq = fooArraySeq.shift();
fooArraySeq = fooArraySeq.slice(num);
fooArraySeq = fooArraySeq.slice(num, num);
// ObjectLikeSequence
fooObjectSeq = fooObjectSeq.defaults(obj);
fooSequence = fooObjectSeq.functions();
fooObjectSeq = fooObjectSeq.get(str);
fooObjectSeq = fooObjectSeq.invert();
strSequence = fooObjectSeq.keys();
fooObjectSeq = fooObjectSeq.omit(strArr);
fooSequence = fooObjectSeq.pairs();
fooObjectSeq = fooObjectSeq.pick(strArr);
arr = fooObjectSeq.toArray();
obj = fooObjectSeq.toObject();
fooSequence = fooObjectSeq.values();
// StringLikeSequence
str = stringSeq.charAt(num);
num = stringSeq.charCodeAt(num);
bool = stringSeq.contains(str);
bool = stringSeq.endsWith(str);
str = stringSeq.first();
stringSeq = stringSeq.first(num);
num = stringSeq.indexOf(str);
num = stringSeq.indexOf(str, num);
str = stringSeq.last();
stringSeq = stringSeq.last(num);
num = stringSeq.lastIndexOf(str);
num = stringSeq.lastIndexOf(str, num);
stringSeq = stringSeq.mapString(fnMapStringCallback);
stringSeq = stringSeq.match(exp);
stringSeq = stringSeq.reverse();
stringSeq = stringSeq.split(str);
stringSeq = stringSeq.split(exp);
bool = stringSeq.startsWith(str);
stringSeq = stringSeq.substring(num);
stringSeq = stringSeq.substring(num, num);
stringSeq = stringSeq.toLowerCase();
stringSeq = stringSeq.toUpperCase();
