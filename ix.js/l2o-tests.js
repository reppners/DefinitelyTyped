///<reference path="l2o.d.ts"/>
var ec_ns = function (a, b) { return a.toString() == b; }; //equality comparer on number,string
var ec_nn = function (a, b) { return a === b; }; //equality comparer on number,number
var c_nn = function (a, b) { return a - b; }; //comparer on number,number
// static
var ax = Ix.Enumerable.fromArray([0, 2, 7, 3, 4, 5]);
var bx = Ix.Enumerable.create(function () {
    var current = ".";
    return Ix.Enumerator.create(function () {
        current += ".";
        return true;
    }, function () { return current; }, function () {
    });
});
Ix.Enumerator.create(function () { return true; }, function () { return 1; }); // without dispose method
var cx = Ix.Enumerable.empty();
var dx = Ix.Enumerable.concat(ax, cx);
var ex = Ix.Enumerable.return(42);
var fx = Ix.Enumerable.returnValue("42");
var gx = Ix.Enumerable.range(-100, 200);
Ix.Enumerable.repeat(42, 42);
Ix.Enumerable.repeat(42); // infinite
Ix.Enumerable.sequenceEqual(ax, fx, ec_ns);
Ix.Enumerable.sequenceEqual(ax, ex); // default comparer on same type
// instance
ax.getEnumerator();
ax.aggregate("", function (acc, i) { return acc + i; }, function (acc) { return acc.length; });
ax.aggregate("", function (acc, i) { return acc + i; });
ax.aggregate(function (acc, i) { return acc + i; });
//ax.reduce((acc, i) => acc + i, 100);	// bug: https://typescript.codeplex.com/workitem/1960
ax.reduce(function (acc, i) { return acc + i; }, 100);
ax.reduce(function (acc, i) { return acc + i; });
ax.all(function (item) { return true; });
ax.all(function (item) { return true; }, bx);
ax.every(function (item) { return true; });
ax.every(function (item) { return true; }, bx);
ax.any();
ax.any(function (item) { return true; });
ax.any(function (item) { return true; }, bx);
ax.some();
ax.some(function (item) { return true; });
ax.some(function (item) { return true; }, bx);
ax.average();
bx.average(function (item) { return item.length; });
ax.min();
bx.min(function (item) { return item.length; });
ax.max();
bx.max(function (item) { return item.length; });
ax.sum();
bx.sum(function (item) { return item.length; });
ax.concat(ax, cx, dx, ex, gx);
ax.contains(10);
ax.contains("10", ec_ns);
ax.count();
ax.count(function (item) { return false; });
ax.count(function (item) { return false; }, {});
cx.defaultIfEmpty();
cx.defaultIfEmpty(10);
dx.distinct();
dx.distinct(function (d1, d2) { return d1 === d2; });
ax.elementAt(2);
ax.elementAtOrDefault(2);
ax.except(bx, ec_ns);
bx.except(fx);
ax.first();
ax.firstOrDefault();
ax.last();
ax.lastOrDefault();
ax.single();
ax.singleOrDefault();
ax.forEach(function (a) { return console.log(a); });
ax.forEach(function (a) { return console.log(a); }, cx);
bx.groupBy(function (b) { return b.length; });
bx.groupBy(function (b) { return b.length; }, function (b) { return "[" + b + "]"; });
bx.groupBy(function (b) { return b.length; }, function (b) { return "[" + b + "]"; }, function (l, values) { return l + values.count(); });
bx.groupBy(function (b) { return b.length; }, false, function (l, values) { return l + values.count(); });
bx.groupBy(function (b) { return b.length; }, function (b) { return "[" + b + "]"; }, function (l, values) { return l + values.count(); }, ec_nn);
bx.groupBy(function (b) { return b.length; }, function (b) { return "[" + b + "]"; }, false, function (x, y) { return x == y; });
bx.groupBy(function (b) { return b.length; }, false, function (l, values) { return l + values.count(); }, ec_nn);
bx.groupBy(function (b) { return b.length; }, false, false, ec_nn);
ax.groupJoin(bx, function (a) { return a; }, function (b) { return b; }, function (a, b) { return [a, b]; }, ec_ns);
ax.groupJoin(bx, function (a) { return a; }, function (b) { return b.length; }, function (a, b) { return [a, b]; });
ax.join(bx, function (a) { return a; }, function (b) { return b; }, function (a, b) { return [a, b]; }, ec_ns);
ax.join(bx, function (a) { return a; }, function (b) { return b.length; }, function (a, b) { return [a, b]; });
ax.intersect(bx, ec_ns);
ax.intersect(cx);
ax.union(cx);
ax.orderBy(function (a) { return -a; }).thenBy(function (a) { return a; });
ax.orderBy(function (a) { return -a; }, c_nn).thenBy(function (a) { return a; }, c_nn);
ax.orderByDescending(function (a) { return -a; }).thenByDescending(function (a) { return a; });
ax.orderByDescending(function (a) { return -a; }, c_nn).thenByDescending(function (a) { return a; }, c_nn);
ax.reverse();
ax.select(function (a) { return a.toString(); });
ax.select(function (a) { return a.toString(); }, {});
ax.map(function (a) { return a.toString(); });
ax.map(function (a) { return a.toString(); }, {});
ax.selectMany(function (a) { return bx; });
ax.selectMany(function (a) { return bx; }, function (a, b) { return [a, b]; });
ax.sequenceEqual(fx, ec_ns);
ax.sequenceEqual(ax, ec_nn);
ax.sequenceEqual(cx);
ax.skip(10);
ax.skipWhile(function (a) { return a > 10; });
ax.take(10);
ax.takeWhile(function (a) { return a > 10; });
ax.toArray();
bx.toDictionary(function (b) { return b.length; }, function (b) { return 10; }, ec_nn);
bx.toDictionary(function (b) { return b.length; }, false, ec_nn);
bx.toDictionary(function (b) { return b.length; }, function (b) { return 10; });
bx.toDictionary(function (b) { return b.length; });
bx.toLookup(function (b) { return b.length; }, function (b) { return 10; }, ec_nn);
bx.toLookup(function (b) { return b.length; }, false, ec_nn);
bx.toLookup(function (b) { return b.length; }, function (b) { return 10; });
bx.toLookup(function (b) { return b.length; });
ax.where(function (a) { return a > 10; }, {});
ax.where(function (a) { return a > 10; });
ax.filter(function (a) { return a > 10; }, {});
ax.filter(function (a) { return a > 10; });
ax.zip(bx, function (a, b) { return [a, b]; });
ax.zip(bx, function (a, b) { return [a, b]; });
{
    var d;
    d.dispose();
}
{
    var e;
    try {
        while (e.moveNext()) {
            var c = e.getCurrent();
        }
    }
    finally {
        e.dispose();
    }
}
{
    var dic = new Ix.Dictionary(0, ec_nn);
    var key = dic.toEnumerable().first().key;
    var value = dic.toEnumerable().first().value;
    dic.add(1, "1");
    dic.remove(1);
    dic.clear();
    dic.length();
    dic.tryGetValue(1);
    dic.get(1);
    dic.set(1, "1");
    dic.getValues();
    dic.has(1);
}
{
    var kv;
    var key = kv.key;
    var value = kv.value;
}
{
    var lookup;
    var key = lookup.toEnumerable().first().key;
    lookup.toEnumerable().first().first();
    lookup.has(1);
    lookup.length();
    lookup.get(1).first();
}
