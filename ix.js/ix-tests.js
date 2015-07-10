///<reference path="ix.d.ts"/>
var ec_ns = function (a, b) { return a.toString() == b; }; //equality comparer on number,string
var ec_ss = function (a, b) { return a == b; }; //equality comparer on string,string
var ec_nn = function (a, b) { return a === b; }; //equality comparer on number,number
var c_nn = function (a, b) { return a - b; }; //comparer on number,number
// static
Ix.Enumerable.throw(new Error("error"));
Ix.Enumerable.throwException(new Error("error"));
var ax = Ix.Enumerable.generate(-100, function (a) { return a < 100; }, function (a) { return a + 10; }, function (a) { return a * 2; });
Ix.Enumerable.defer(function () { return ax; });
Ix.Enumerable.using(function () { return ax.getEnumerator(); }, function (e) { return Ix.Enumerable.return(e.getCurrent()); });
Ix.Enumerable.catch(ax, ax, ax);
Ix.Enumerable.catchException(ax, ax, ax);
Ix.Enumerable.catch();
Ix.Enumerable.catchException();
Ix.Enumerable.onErrorResumeNext(ax, ax, ax);
Ix.Enumerable.onErrorResumeNext();
Ix.Enumerable.while(function (x) { return x.count() > 0; }, ax);
Ix.Enumerable.whileDo(function (x) { return x.count() > 0; }, ax);
Ix.Enumerable.if(function () { return true; }, ax, ax);
Ix.Enumerable.ifThen(function () { return true; }, ax, ax);
Ix.Enumerable.if(function () { return true; }, ax);
Ix.Enumerable.ifThen(function () { return true; }, ax);
Ix.Enumerable.doWhile(ax, function (x) { return x.count() > 0; });
Ix.Enumerable.case(function () { return 42; }, { 42: ax }, ax);
Ix.Enumerable.switchCase(function () { return 42; }, { 42: ax }, ax);
Ix.Enumerable.case(function () { return 42; }, { 42: ax });
Ix.Enumerable.switchCase(function () { return 42; }, { 42: ax });
Ix.Enumerable.case(function () { return "42"; }, { "42": ax }, ax);
Ix.Enumerable.switchCase(function () { return "42"; }, { "42": ax }, ax);
Ix.Enumerable.case(function () { return "42"; }, { "42": ax });
Ix.Enumerable.switchCase(function () { return "42"; }, { "42": ax });
Ix.Enumerable.for(ax, function (a) { return ax; });
Ix.Enumerable.forIn(ax, function (a) { return ax; });
// instance
var bx;
ax.isEmpty();
bx.minBy(function (b) { return b.length; }, c_nn);
bx.minBy(function (b) { return b.length; });
bx.maxBy(function (b) { return b.length; }, c_nn);
bx.maxBy(function (b) { return b.length; });
ax.share(function (ax) { return bx; });
ax.share();
ax.publish(function (ax) { return bx; });
ax.publish();
ax.memoize();
ax.do({ onNext: function (a) { return console.log(a); }, onError: function (err) { return console.log(err); }, onCompleted: function () { return console.log("completed"); } });
ax.do(function (a) { return console.log(a); }, function (err) { return console.log(err); }, function () { return console.log("completed"); });
ax.do(function (a) { return console.log(a); }, function (err) { return console.log(err); });
ax.do(function (a) { return console.log(a); });
ax.doAction({ onNext: function (a) { return console.log(a); }, onError: function (err) { return console.log(err); }, onCompleted: function () { return console.log("completed"); } });
ax.doAction(function (a) { return console.log(a); }, function (err) { return console.log(err); }, function () { return console.log("completed"); });
ax.doAction(function (a) { return console.log(a); }, function (err) { return console.log(err); });
ax.doAction(function (a) { return console.log(a); });
ax.bufferWithCount(10, 20);
ax.bufferWithCount(10);
ax.ignoreElements();
bx.distinctBy(function (b) { return b.length; }, ec_nn);
bx.distinctBy(function (b) { return b.length; });
bx.distinctUntilChanged(function (b) { return b.length; }, ec_nn);
bx.distinctUntilChanged(function (b) { return b.length; });
bx.distinctUntilChanged();
bx.distinctUntilChanged(false, ec_ss);
ax.expand(function (a) { return ax; });
ax.startWith(10, 20);
ax.scan(0, function (acc, a) { return acc + a; });
ax.scan(function (acc, a) { return acc + a; });
ax.takeLast(10);
ax.skipLast(10);
ax.repeat(10);
ax.repeat();
ax.catch(ax, ax, ax);
ax.catchException(ax, ax, ax);
ax.catch(ax);
ax.catchException(ax);
ax.catch(function (err) { return ax; });
ax.catchException(function (err) { return ax; });
ax.finally(function () {
});
ax.finallyDo(function () {
});
ax.onErrorResumeNext(ax);
ax.retry(10);
ax.retry();
