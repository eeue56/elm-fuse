
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _eeue56$elm_all_dict$EveryDict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_eeue56$elm_all_dict$EveryDict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _eeue56$elm_all_dict$EveryDict$keys = function (dict) {
	return A3(
		_eeue56$elm_all_dict$EveryDict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _eeue56$elm_all_dict$EveryDict$values = function (dict) {
	return A3(
		_eeue56$elm_all_dict$EveryDict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _eeue56$elm_all_dict$EveryDict$toList = function (dict) {
	return A3(
		_eeue56$elm_all_dict$EveryDict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _eeue56$elm_all_dict$EveryDict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_eeue56$elm_all_dict$EveryDict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _eeue56$elm_all_dict$EveryDict$isBBlack = function (dict) {
	var _p2 = dict;
	_v8_2:
	do {
		if (_p2.ctor === 'RBNode_elm_builtin') {
			if (_p2._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v8_2;
			}
		} else {
			if (_p2._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v8_2;
			}
		}
	} while(false);
	return false;
};
var _eeue56$elm_all_dict$EveryDict$showFlag = function (f) {
	var _p3 = f;
	switch (_p3.ctor) {
		case 'Insert':
			return 'Insert';
		case 'Remove':
			return 'Remove';
		default:
			return 'Same';
	}
};
var _eeue56$elm_all_dict$EveryDict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p4 = dict;
			if (_p4.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v11 = A2(_eeue56$elm_all_dict$EveryDict$sizeHelp, n + 1, _p4._4),
					_v12 = _p4._3;
				n = _v11;
				dict = _v12;
				continue sizeHelp;
			}
		}
	});
var _eeue56$elm_all_dict$EveryDict$size = function (dict) {
	return A2(_eeue56$elm_all_dict$EveryDict$sizeHelp, 0, dict);
};
var _eeue56$elm_all_dict$EveryDict$isEmpty = function (dict) {
	var _p5 = dict;
	if (_p5.ctor === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var _eeue56$elm_all_dict$EveryDict$max = function (dict) {
	max:
	while (true) {
		var _p6 = dict;
		if (_p6.ctor === 'RBNode_elm_builtin') {
			if (_p6._4.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: _p6._1, _1: _p6._2};
			} else {
				var _v15 = _p6._4;
				dict = _v15;
				continue max;
			}
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'EveryDict',
				{
					start: {line: 127, column: 5},
					end: {line: 135, column: 51}
				},
				_p6)('(max Empty) is not defined');
		}
	}
};
var _eeue56$elm_all_dict$EveryDict$min = function (dict) {
	min:
	while (true) {
		var _p8 = dict;
		if (_p8.ctor === 'RBNode_elm_builtin') {
			if ((_p8._3.ctor === 'RBEmpty_elm_builtin') && (_p8._3._0.ctor === 'LBlack')) {
				return {ctor: '_Tuple2', _0: _p8._1, _1: _p8._2};
			} else {
				var _v17 = _p8._3;
				dict = _v17;
				continue min;
			}
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'EveryDict',
				{
					start: {line: 115, column: 5},
					end: {line: 123, column: 51}
				},
				_p8)('(min Empty) is not defined');
		}
	}
};
var _eeue56$elm_all_dict$EveryDict$eq = F2(
	function (first, second) {
		return _elm_lang$core$Native_Utils.eq(
			_eeue56$elm_all_dict$EveryDict$toList(first),
			_eeue56$elm_all_dict$EveryDict$toList(second));
	});
var _eeue56$elm_all_dict$EveryDict$ord = _elm_lang$core$Basics$toString;
var _eeue56$elm_all_dict$EveryDict$get_ = F2(
	function (targetKey, dict) {
		get_:
		while (true) {
			var _p10 = dict;
			if (_p10.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p11 = A2(
					_elm_lang$core$Basics$compare,
					_eeue56$elm_all_dict$EveryDict$ord(targetKey),
					_eeue56$elm_all_dict$EveryDict$ord(_p10._1));
				switch (_p11.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p10._3;
						targetKey = _v20;
						dict = _v21;
						continue get_;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p10._2);
					default:
						var _v22 = targetKey,
							_v23 = _p10._4;
						targetKey = _v22;
						dict = _v23;
						continue get_;
				}
			}
		}
	});
var _eeue56$elm_all_dict$EveryDict$get = F2(
	function (targetKey, dict) {
		return A2(_eeue56$elm_all_dict$EveryDict$get_, targetKey, dict);
	});
var _eeue56$elm_all_dict$EveryDict$member = F2(
	function (key, dict) {
		var _p12 = A2(_eeue56$elm_all_dict$EveryDict$get_, key, dict);
		if (_p12.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _eeue56$elm_all_dict$EveryDict$showLColor = function (color) {
	var _p13 = color;
	if (_p13.ctor === 'LBlack') {
		return 'LBlack';
	} else {
		return 'LBBlack';
	}
};
var _eeue56$elm_all_dict$EveryDict$showNColor = function (c) {
	var _p14 = c;
	switch (_p14.ctor) {
		case 'Red':
			return 'Red';
		case 'Black':
			return 'Black';
		case 'BBlack':
			return 'BBlack';
		default:
			return 'NBlack';
	}
};
var _eeue56$elm_all_dict$EveryDict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Utils.crash(
			'EveryDict',
			{
				start: {line: 320, column: 3},
				end: {line: 320, column: 14}
			})(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _eeue56$elm_all_dict$EveryDict$showNColor(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/Elm/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _eeue56$elm_all_dict$EveryDict$NBlack = {ctor: 'NBlack'};
var _eeue56$elm_all_dict$EveryDict$BBlack = {ctor: 'BBlack'};
var _eeue56$elm_all_dict$EveryDict$Black = {ctor: 'Black'};
var _eeue56$elm_all_dict$EveryDict$blackish = function (t) {
	var _p15 = t;
	if (_p15.ctor === 'RBNode_elm_builtin') {
		var _p16 = _p15._0;
		return _elm_lang$core$Native_Utils.eq(_p16, _eeue56$elm_all_dict$EveryDict$Black) || _elm_lang$core$Native_Utils.eq(_p16, _eeue56$elm_all_dict$EveryDict$BBlack);
	} else {
		return true;
	}
};
var _eeue56$elm_all_dict$EveryDict$Red = {ctor: 'Red'};
var _eeue56$elm_all_dict$EveryDict$moreBlack = function (color) {
	var _p17 = color;
	switch (_p17.ctor) {
		case 'Black':
			return _eeue56$elm_all_dict$EveryDict$BBlack;
		case 'Red':
			return _eeue56$elm_all_dict$EveryDict$Black;
		case 'NBlack':
			return _eeue56$elm_all_dict$EveryDict$Red;
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'EveryDict',
				{
					start: {line: 294, column: 5},
					end: {line: 298, column: 73}
				},
				_p17)('Can\'t make a double black node more black!');
	}
};
var _eeue56$elm_all_dict$EveryDict$lessBlack = function (color) {
	var _p19 = color;
	switch (_p19.ctor) {
		case 'BBlack':
			return _eeue56$elm_all_dict$EveryDict$Black;
		case 'Black':
			return _eeue56$elm_all_dict$EveryDict$Red;
		case 'Red':
			return _eeue56$elm_all_dict$EveryDict$NBlack;
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'EveryDict',
				{
					start: {line: 303, column: 5},
					end: {line: 307, column: 75}
				},
				_p19)('Can\'t make a negative black node less black!');
	}
};
var _eeue56$elm_all_dict$EveryDict$LBBlack = {ctor: 'LBBlack'};
var _eeue56$elm_all_dict$EveryDict$LBlack = {ctor: 'LBlack'};
var _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _eeue56$elm_all_dict$EveryDict$empty = _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin(_eeue56$elm_all_dict$EveryDict$LBlack);
var _eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _eeue56$elm_all_dict$EveryDict$ensureBlackRoot = function (dict) {
	var _p21 = dict;
	if (_p21.ctor === 'RBNode_elm_builtin') {
		switch (_p21._0.ctor) {
			case 'Red':
				return A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, _p21._1, _p21._2, _p21._3, _p21._4);
			case 'Black':
				return dict;
			default:
				return dict;
		}
	} else {
		return dict;
	}
};
var _eeue56$elm_all_dict$EveryDict$lessBlackTree = function (dict) {
	var _p22 = dict;
	if (_p22.ctor === 'RBNode_elm_builtin') {
		return A5(
			_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin,
			_eeue56$elm_all_dict$EveryDict$lessBlack(_p22._0),
			_p22._1,
			_p22._2,
			_p22._3,
			_p22._4);
	} else {
		if (_p22._0.ctor === 'LBBlack') {
			return _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin(_eeue56$elm_all_dict$EveryDict$LBlack);
		} else {
			return dict;
		}
	}
};
var _eeue56$elm_all_dict$EveryDict$blacken = function (t) {
	var _p23 = t;
	if (_p23.ctor === 'RBEmpty_elm_builtin') {
		return _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin(_eeue56$elm_all_dict$EveryDict$LBlack);
	} else {
		return A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	}
};
var _eeue56$elm_all_dict$EveryDict$redden = function (t) {
	var _p24 = t;
	if (_p24.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Utils.crashCase(
			'EveryDict',
			{
				start: {line: 440, column: 5},
				end: {line: 442, column: 69}
			},
			_p24)('can\'t make a Leaf red');
	} else {
		return A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Red, _p24._1, _p24._2, _p24._3, _p24._4);
	}
};
var _eeue56$elm_all_dict$EveryDict$balance_node = function (t) {
	var assemble = function (col) {
		return function (xk) {
			return function (xv) {
				return function (yk) {
					return function (yv) {
						return function (zk) {
							return function (zv) {
								return function (a) {
									return function (b) {
										return function (c) {
											return function (d) {
												return A5(
													_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin,
													_eeue56$elm_all_dict$EveryDict$lessBlack(col),
													yk,
													yv,
													A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, xk, xv, a, b),
													A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, zk, zv, c, d));
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	if (_eeue56$elm_all_dict$EveryDict$blackish(t)) {
		var _p26 = t;
		_v34_6:
		do {
			_v34_5:
			do {
				_v34_4:
				do {
					_v34_3:
					do {
						_v34_2:
						do {
							_v34_1:
							do {
								_v34_0:
								do {
									if (_p26.ctor === 'RBNode_elm_builtin') {
										if (_p26._3.ctor === 'RBNode_elm_builtin') {
											if (_p26._4.ctor === 'RBNode_elm_builtin') {
												switch (_p26._3._0.ctor) {
													case 'Red':
														switch (_p26._4._0.ctor) {
															case 'Red':
																if ((_p26._3._3.ctor === 'RBNode_elm_builtin') && (_p26._3._3._0.ctor === 'Red')) {
																	break _v34_0;
																} else {
																	if ((_p26._3._4.ctor === 'RBNode_elm_builtin') && (_p26._3._4._0.ctor === 'Red')) {
																		break _v34_1;
																	} else {
																		if ((_p26._4._3.ctor === 'RBNode_elm_builtin') && (_p26._4._3._0.ctor === 'Red')) {
																			break _v34_2;
																		} else {
																			if ((_p26._4._4.ctor === 'RBNode_elm_builtin') && (_p26._4._4._0.ctor === 'Red')) {
																				break _v34_3;
																			} else {
																				break _v34_6;
																			}
																		}
																	}
																}
															case 'NBlack':
																if ((_p26._3._3.ctor === 'RBNode_elm_builtin') && (_p26._3._3._0.ctor === 'Red')) {
																	break _v34_0;
																} else {
																	if ((_p26._3._4.ctor === 'RBNode_elm_builtin') && (_p26._3._4._0.ctor === 'Red')) {
																		break _v34_1;
																	} else {
																		if (((_p26._0.ctor === 'BBlack') && (_p26._4._3.ctor === 'RBNode_elm_builtin')) && (_p26._4._3._0.ctor === 'Black')) {
																			break _v34_4;
																		} else {
																			break _v34_6;
																		}
																	}
																}
															default:
																if ((_p26._3._3.ctor === 'RBNode_elm_builtin') && (_p26._3._3._0.ctor === 'Red')) {
																	break _v34_0;
																} else {
																	if ((_p26._3._4.ctor === 'RBNode_elm_builtin') && (_p26._3._4._0.ctor === 'Red')) {
																		break _v34_1;
																	} else {
																		break _v34_6;
																	}
																}
														}
													case 'NBlack':
														switch (_p26._4._0.ctor) {
															case 'Red':
																if ((_p26._4._3.ctor === 'RBNode_elm_builtin') && (_p26._4._3._0.ctor === 'Red')) {
																	break _v34_2;
																} else {
																	if ((_p26._4._4.ctor === 'RBNode_elm_builtin') && (_p26._4._4._0.ctor === 'Red')) {
																		break _v34_3;
																	} else {
																		if (((_p26._0.ctor === 'BBlack') && (_p26._3._4.ctor === 'RBNode_elm_builtin')) && (_p26._3._4._0.ctor === 'Black')) {
																			break _v34_5;
																		} else {
																			break _v34_6;
																		}
																	}
																}
															case 'NBlack':
																if (_p26._0.ctor === 'BBlack') {
																	if ((_p26._4._3.ctor === 'RBNode_elm_builtin') && (_p26._4._3._0.ctor === 'Black')) {
																		break _v34_4;
																	} else {
																		if ((_p26._3._4.ctor === 'RBNode_elm_builtin') && (_p26._3._4._0.ctor === 'Black')) {
																			break _v34_5;
																		} else {
																			break _v34_6;
																		}
																	}
																} else {
																	break _v34_6;
																}
															default:
																if (((_p26._0.ctor === 'BBlack') && (_p26._3._4.ctor === 'RBNode_elm_builtin')) && (_p26._3._4._0.ctor === 'Black')) {
																	break _v34_5;
																} else {
																	break _v34_6;
																}
														}
													default:
														switch (_p26._4._0.ctor) {
															case 'Red':
																if ((_p26._4._3.ctor === 'RBNode_elm_builtin') && (_p26._4._3._0.ctor === 'Red')) {
																	break _v34_2;
																} else {
																	if ((_p26._4._4.ctor === 'RBNode_elm_builtin') && (_p26._4._4._0.ctor === 'Red')) {
																		break _v34_3;
																	} else {
																		break _v34_6;
																	}
																}
															case 'NBlack':
																if (((_p26._0.ctor === 'BBlack') && (_p26._4._3.ctor === 'RBNode_elm_builtin')) && (_p26._4._3._0.ctor === 'Black')) {
																	break _v34_4;
																} else {
																	break _v34_6;
																}
															default:
																break _v34_6;
														}
												}
											} else {
												switch (_p26._3._0.ctor) {
													case 'Red':
														if ((_p26._3._3.ctor === 'RBNode_elm_builtin') && (_p26._3._3._0.ctor === 'Red')) {
															break _v34_0;
														} else {
															if ((_p26._3._4.ctor === 'RBNode_elm_builtin') && (_p26._3._4._0.ctor === 'Red')) {
																break _v34_1;
															} else {
																break _v34_6;
															}
														}
													case 'NBlack':
														if (((_p26._0.ctor === 'BBlack') && (_p26._3._4.ctor === 'RBNode_elm_builtin')) && (_p26._3._4._0.ctor === 'Black')) {
															break _v34_5;
														} else {
															break _v34_6;
														}
													default:
														break _v34_6;
												}
											}
										} else {
											if (_p26._4.ctor === 'RBNode_elm_builtin') {
												switch (_p26._4._0.ctor) {
													case 'Red':
														if ((_p26._4._3.ctor === 'RBNode_elm_builtin') && (_p26._4._3._0.ctor === 'Red')) {
															break _v34_2;
														} else {
															if ((_p26._4._4.ctor === 'RBNode_elm_builtin') && (_p26._4._4._0.ctor === 'Red')) {
																break _v34_3;
															} else {
																break _v34_6;
															}
														}
													case 'NBlack':
														if (((_p26._0.ctor === 'BBlack') && (_p26._4._3.ctor === 'RBNode_elm_builtin')) && (_p26._4._3._0.ctor === 'Black')) {
															break _v34_4;
														} else {
															break _v34_6;
														}
													default:
														break _v34_6;
												}
											} else {
												break _v34_6;
											}
										}
									} else {
										break _v34_6;
									}
								} while(false);
								return assemble(_p26._0)(_p26._3._3._1)(_p26._3._3._2)(_p26._3._1)(_p26._3._2)(_p26._1)(_p26._2)(_p26._3._3._3)(_p26._3._3._4)(_p26._3._4)(_p26._4);
							} while(false);
							return assemble(_p26._0)(_p26._3._1)(_p26._3._2)(_p26._3._4._1)(_p26._3._4._2)(_p26._1)(_p26._2)(_p26._3._3)(_p26._3._4._3)(_p26._3._4._4)(_p26._4);
						} while(false);
						return assemble(_p26._0)(_p26._1)(_p26._2)(_p26._4._3._1)(_p26._4._3._2)(_p26._4._1)(_p26._4._2)(_p26._3)(_p26._4._3._3)(_p26._4._3._4)(_p26._4._4);
					} while(false);
					return assemble(_p26._0)(_p26._1)(_p26._2)(_p26._4._1)(_p26._4._2)(_p26._4._4._1)(_p26._4._4._2)(_p26._3)(_p26._4._3)(_p26._4._4._3)(_p26._4._4._4);
				} while(false);
				var _p28 = _p26._4._4;
				var _p27 = _p28;
				if ((_p27.ctor === 'RBNode_elm_builtin') && (_p27._0.ctor === 'Black')) {
					return A5(
						_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin,
						_eeue56$elm_all_dict$EveryDict$Black,
						_p26._4._3._1,
						_p26._4._3._2,
						A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, _p26._1, _p26._2, _p26._3, _p26._4._3._3),
						A5(
							_eeue56$elm_all_dict$EveryDict$balance,
							_eeue56$elm_all_dict$EveryDict$Black,
							_p26._4._1,
							_p26._4._2,
							_p26._4._3._4,
							_eeue56$elm_all_dict$EveryDict$redden(_p28)));
				} else {
					return t;
				}
			} while(false);
			var _p30 = _p26._3._3;
			var _p29 = _p30;
			if ((_p29.ctor === 'RBNode_elm_builtin') && (_p29._0.ctor === 'Black')) {
				return A5(
					_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin,
					_eeue56$elm_all_dict$EveryDict$Black,
					_p26._3._4._1,
					_p26._3._4._2,
					A5(
						_eeue56$elm_all_dict$EveryDict$balance,
						_eeue56$elm_all_dict$EveryDict$Black,
						_p26._3._1,
						_p26._3._2,
						_eeue56$elm_all_dict$EveryDict$redden(_p30),
						_p26._3._4._3),
					A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, _p26._1, _p26._2, _p26._3._4._4, _p26._4));
			} else {
				return t;
			}
		} while(false);
		return t;
	} else {
		return t;
	}
};
var _eeue56$elm_all_dict$EveryDict$balance = F5(
	function (c, k, v, l, r) {
		return _eeue56$elm_all_dict$EveryDict$balance_node(
			A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, c, k, v, l, r));
	});
var _eeue56$elm_all_dict$EveryDict$bubble = F5(
	function (c, k, v, l, r) {
		return (_eeue56$elm_all_dict$EveryDict$isBBlack(l) || _eeue56$elm_all_dict$EveryDict$isBBlack(r)) ? A5(
			_eeue56$elm_all_dict$EveryDict$balance,
			_eeue56$elm_all_dict$EveryDict$moreBlack(c),
			k,
			v,
			_eeue56$elm_all_dict$EveryDict$lessBlackTree(l),
			_eeue56$elm_all_dict$EveryDict$lessBlackTree(r)) : A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _eeue56$elm_all_dict$EveryDict$remove_max = F5(
	function (c, k, v, l, r) {
		var _p31 = r;
		if (_p31.ctor === 'RBEmpty_elm_builtin') {
			return A3(_eeue56$elm_all_dict$EveryDict$rem, c, l, r);
		} else {
			return A5(
				_eeue56$elm_all_dict$EveryDict$bubble,
				c,
				k,
				v,
				l,
				A5(_eeue56$elm_all_dict$EveryDict$remove_max, _p31._0, _p31._1, _p31._2, _p31._3, _p31._4));
		}
	});
var _eeue56$elm_all_dict$EveryDict$rem = F3(
	function (c, l, r) {
		var _p32 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p32._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p32._1.ctor === 'RBEmpty_elm_builtin') {
				var _p33 = c;
				switch (_p33.ctor) {
					case 'Red':
						return _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin(_eeue56$elm_all_dict$EveryDict$LBlack);
					case 'Black':
						return _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin(_eeue56$elm_all_dict$EveryDict$LBBlack);
					default:
						return _eeue56$elm_all_dict$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p36 = _p32._1._0;
				var _p35 = _p32._0._0;
				var _p34 = {ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'LBlack')) && (_p34._2.ctor === 'Red')) {
					return A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, _p32._1._1, _p32._1._2, _p32._1._3, _p32._1._4);
				} else {
					return A4(
						_eeue56$elm_all_dict$EveryDict$reportRemBug,
						'Black/LBlack/Red',
						c,
						_eeue56$elm_all_dict$EveryDict$showLColor(_p35),
						_eeue56$elm_all_dict$EveryDict$showNColor(_p36));
				}
			}
		} else {
			if (_p32._1.ctor === 'RBEmpty_elm_builtin') {
				var _p39 = _p32._1._0;
				var _p38 = _p32._0._0;
				var _p37 = {ctor: '_Tuple3', _0: c, _1: _p38, _2: _p39};
				if ((((_p37.ctor === '_Tuple3') && (_p37._0.ctor === 'Black')) && (_p37._1.ctor === 'Red')) && (_p37._2.ctor === 'LBlack')) {
					return A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Black, _p32._0._1, _p32._0._2, _p32._0._3, _p32._0._4);
				} else {
					return A4(
						_eeue56$elm_all_dict$EveryDict$reportRemBug,
						'Black/Red/LBlack',
						c,
						_eeue56$elm_all_dict$EveryDict$showNColor(_p38),
						_eeue56$elm_all_dict$EveryDict$showLColor(_p39));
				}
			} else {
				var _p45 = _p32._0._2;
				var _p44 = _p32._0._4;
				var _p43 = _p32._0._3;
				var _p42 = _p32._0._1;
				var _p41 = _p32._0._0;
				var l_ = A5(_eeue56$elm_all_dict$EveryDict$remove_max, _p41, _p42, _p45, _p43, _p44);
				var r = A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _p32._1._0, _p32._1._1, _p32._1._2, _p32._1._3, _p32._1._4);
				var l = A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _p41, _p42, _p45, _p43, _p44);
				var _p40 = _eeue56$elm_all_dict$EveryDict$max(l);
				var k = _p40._0;
				var v = _p40._1;
				return A5(_eeue56$elm_all_dict$EveryDict$bubble, c, k, v, l_, r);
			}
		}
	});
var _eeue56$elm_all_dict$EveryDict$map = F2(
	function (f, dict) {
		var _p46 = dict;
		if (_p46.ctor === 'RBEmpty_elm_builtin') {
			return _eeue56$elm_all_dict$EveryDict$RBEmpty_elm_builtin(_p46._0);
		} else {
			var _p47 = _p46._1;
			return A5(
				_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin,
				_p46._0,
				_p47,
				A2(f, _p47, _p46._2),
				A2(_eeue56$elm_all_dict$EveryDict$map, f, _p46._3),
				A2(_eeue56$elm_all_dict$EveryDict$map, f, _p46._4));
		}
	});
var _eeue56$elm_all_dict$EveryDict$Same = {ctor: 'Same'};
var _eeue56$elm_all_dict$EveryDict$Remove = {ctor: 'Remove'};
var _eeue56$elm_all_dict$EveryDict$Insert = {ctor: 'Insert'};
var _eeue56$elm_all_dict$EveryDict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p48 = dict;
			if (_p48.ctor === 'RBEmpty_elm_builtin') {
				var _p49 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p49.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _eeue56$elm_all_dict$EveryDict$Same, _1: _eeue56$elm_all_dict$EveryDict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _eeue56$elm_all_dict$EveryDict$Insert,
						_1: A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _eeue56$elm_all_dict$EveryDict$Red, k, _p49._0, _eeue56$elm_all_dict$EveryDict$empty, _eeue56$elm_all_dict$EveryDict$empty)
					};
				}
			} else {
				var _p60 = _p48._2;
				var _p59 = _p48._4;
				var _p58 = _p48._3;
				var _p57 = _p48._1;
				var _p56 = _p48._0;
				var _p50 = A2(
					_elm_lang$core$Basics$compare,
					_eeue56$elm_all_dict$EveryDict$ord(k),
					_eeue56$elm_all_dict$EveryDict$ord(_p57));
				switch (_p50.ctor) {
					case 'EQ':
						var _p51 = alter(
							_elm_lang$core$Maybe$Just(_p60));
						if (_p51.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _eeue56$elm_all_dict$EveryDict$Remove,
								_1: A3(_eeue56$elm_all_dict$EveryDict$rem, _p56, _p58, _p59)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _eeue56$elm_all_dict$EveryDict$Same,
								_1: A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _p56, _p57, _p51._0, _p58, _p59)
							};
						}
					case 'LT':
						var _p52 = up(_p58);
						var flag = _p52._0;
						var newLeft = _p52._1;
						var _p53 = flag;
						switch (_p53.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$EveryDict$Same,
									_1: A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _p56, _p57, _p60, newLeft, _p59)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$EveryDict$Insert,
									_1: A5(_eeue56$elm_all_dict$EveryDict$balance, _p56, _p57, _p60, newLeft, _p59)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$EveryDict$Remove,
									_1: A5(_eeue56$elm_all_dict$EveryDict$bubble, _p56, _p57, _p60, newLeft, _p59)
								};
						}
					default:
						var _p54 = up(_p59);
						var flag = _p54._0;
						var newRight = _p54._1;
						var _p55 = flag;
						switch (_p55.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$EveryDict$Same,
									_1: A5(_eeue56$elm_all_dict$EveryDict$RBNode_elm_builtin, _p56, _p57, _p60, _p58, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$EveryDict$Insert,
									_1: A5(_eeue56$elm_all_dict$EveryDict$balance, _p56, _p57, _p60, _p58, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$EveryDict$Remove,
									_1: A5(_eeue56$elm_all_dict$EveryDict$bubble, _p56, _p57, _p60, _p58, newRight)
								};
						}
				}
			}
		};
		var _p61 = up(dict);
		var flag = _p61._0;
		var updatedDict = _p61._1;
		var _p62 = flag;
		switch (_p62.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _eeue56$elm_all_dict$EveryDict$ensureBlackRoot(updatedDict);
			default:
				return _eeue56$elm_all_dict$EveryDict$blacken(updatedDict);
		}
	});
var _eeue56$elm_all_dict$EveryDict$insert = F3(
	function (key, value, dict) {
		return A3(
			_eeue56$elm_all_dict$EveryDict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _eeue56$elm_all_dict$EveryDict$singleton = F2(
	function (key, value) {
		return A3(_eeue56$elm_all_dict$EveryDict$insert, key, value, _eeue56$elm_all_dict$EveryDict$empty);
	});
var _eeue56$elm_all_dict$EveryDict$union = F2(
	function (t1, t2) {
		return A3(_eeue56$elm_all_dict$EveryDict$foldl, _eeue56$elm_all_dict$EveryDict$insert, t2, t1);
	});
var _eeue56$elm_all_dict$EveryDict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_eeue56$elm_all_dict$EveryDict$insert, _p64._0, _p64._1, dict);
			}),
		_eeue56$elm_all_dict$EveryDict$empty,
		assocs);
};
var _eeue56$elm_all_dict$EveryDict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_eeue56$elm_all_dict$EveryDict$insert, key, value, dict) : dict;
			});
		return A3(_eeue56$elm_all_dict$EveryDict$foldl, add, _eeue56$elm_all_dict$EveryDict$empty, dictionary);
	});
var _eeue56$elm_all_dict$EveryDict$intersect = F2(
	function (t1, t2) {
		return A2(
			_eeue56$elm_all_dict$EveryDict$filter,
			F2(
				function (k, _p65) {
					return A2(_eeue56$elm_all_dict$EveryDict$member, k, t2);
				}),
			t1);
	});
var _eeue56$elm_all_dict$EveryDict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p66) {
				var _p67 = _p66;
				var _p69 = _p67._1;
				var _p68 = _p67._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_eeue56$elm_all_dict$EveryDict$insert, key, value, _p68),
					_1: _p69
				} : {
					ctor: '_Tuple2',
					_0: _p68,
					_1: A3(_eeue56$elm_all_dict$EveryDict$insert, key, value, _p69)
				};
			});
		return A3(
			_eeue56$elm_all_dict$EveryDict$foldl,
			add,
			{ctor: '_Tuple2', _0: _eeue56$elm_all_dict$EveryDict$empty, _1: _eeue56$elm_all_dict$EveryDict$empty},
			dict);
	});
var _eeue56$elm_all_dict$EveryDict$remove = F2(
	function (key, dict) {
		return A3(
			_eeue56$elm_all_dict$EveryDict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _eeue56$elm_all_dict$EveryDict$diff = F2(
	function (t1, t2) {
		return A3(
			_eeue56$elm_all_dict$EveryDict$foldl,
			F3(
				function (k, v, t) {
					return A2(_eeue56$elm_all_dict$EveryDict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

var _eeue56$elm_ffi$Native_FFI = function(){

    // given "console.log(_0);", return "function(_0) { console.log(_0); }("hello")"
    var makeFunction = function(text, args, isAsync){
        var i = 0;

        var params = args.map(function(_){
            i++;
            return "_" + (i - 1).toString();
        });

        if (isAsync) {
            params.push("_succeed");
            params.push("_fail");
        }

        var joinedParams = params.join(', ');

        var functionString = "(function(" + joinedParams + ") {";
        var body = text + "\n});";
        return functionString + body;
    };

    var schedulerWrapper = function(functionBody){
        var head = "return _elm_lang$core$Native_Scheduler.nativeBinding(function (callback){ ";

        var tail = "});";

        return head + functionBody + tail;
    };

    var sync = function(text, args) {
        var func = eval(makeFunction(text, args, false));
        var result = func.apply(null, args);

        if (typeof result === "undefined"){
            return null;
        }
        return result;
    };

    var async = function(text, args) {
        // wrap the code
        var wrapped = schedulerWrapper(text);
        // make a function based on the original args with async mode enabled
        var funcBody = makeFunction(wrapped, args, true);
        var func = eval(funcBody);

        // create a copy and add succeed/fail
        var argsCopy = args.slice();
        argsCopy.push(_elm_lang$core$Native_Scheduler.succeed);
        argsCopy.push(_elm_lang$core$Native_Scheduler.fail);

        var result = func.apply(null, argsCopy);

        if (typeof result === "undefined"){
            return null;
        }
        return result;
    };

    var makeSafe = function(text, args, isAsync) {
        var func = sync;
        if (isAsync) {
            func = async;
        }

        try {
            var result = func(text, args);
            return {
                ctor: "Ok",
                _0: result
            };
        } catch (e) {
            return {
                ctor: 'Err',
                _0: 'Error during load: ' + e.message
            };
        }
    };

    var intoElm = function(a){
        return a;
    };

    var trueToString = function(a){
        return a.toString();
    };

    // expose your functions here
    return {
        sync: F2(sync),
        async: F2(async),
        asIs: function(v) { return v; },
        intoElm: intoElm,
        makeSafe: F3(makeSafe),
        trueToString: trueToString,
        
    };
}();
var _eeue56$elm_ffi$FFI$toString = function (a) {
	return _eeue56$elm_ffi$Native_FFI.trueToString(a);
};
var _eeue56$elm_ffi$FFI$safeAsync = F2(
	function (text, args) {
		return A3(
			_eeue56$elm_ffi$Native_FFI.makeSafe,
			text,
			_elm_lang$core$Json_Encode$list(args),
			true);
	});
var _eeue56$elm_ffi$FFI$async = F2(
	function (text, args) {
		return A2(
			_eeue56$elm_ffi$Native_FFI.async,
			text,
			_elm_lang$core$Json_Encode$list(args));
	});
var _eeue56$elm_ffi$FFI$intoElm = function (thing) {
	return _eeue56$elm_ffi$Native_FFI.intoElm(thing);
};
var _eeue56$elm_ffi$FFI$asIs = function (thing) {
	return _eeue56$elm_ffi$Native_FFI.asIs(thing);
};
var _eeue56$elm_ffi$FFI$safeSync = F2(
	function (text, args) {
		return A3(
			_eeue56$elm_ffi$Native_FFI.makeSafe,
			text,
			_elm_lang$core$Json_Encode$list(args),
			false);
	});
var _eeue56$elm_ffi$FFI$sync = F2(
	function (text, args) {
		return A2(
			_eeue56$elm_ffi$Native_FFI.sync,
			text,
			_elm_lang$core$Json_Encode$list(args));
	});

var _eeue56$elm_xml$Xml$xmlToJson = function (xml) {
	var _p0 = xml;
	switch (_p0.ctor) {
		case 'Tag':
			var jsonAttrs = _elm_lang$core$Json_Encode$object(
				function (list) {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						list,
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'value',
								_1: _eeue56$elm_xml$Xml$xmlToJson(_p0._2)
							},
							_1: {ctor: '[]'}
						});
				}(
					A2(
						_elm_lang$core$List$map,
						function (_p1) {
							var _p2 = _p1;
							return {
								ctor: '_Tuple2',
								_0: _p2._0,
								_1: _eeue56$elm_xml$Xml$xmlToJson(_p2._1)
							};
						},
						_elm_lang$core$Dict$toList(_p0._1))));
			return _elm_lang$core$Json_Encode$object(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: _p0._0, _1: jsonAttrs},
					_1: {ctor: '[]'}
				});
		case 'StrNode':
			return _elm_lang$core$Json_Encode$string(_p0._0);
		case 'IntNode':
			return _elm_lang$core$Json_Encode$int(_p0._0);
		case 'FloatNode':
			return _elm_lang$core$Json_Encode$float(_p0._0);
		case 'BoolNode':
			return _elm_lang$core$Json_Encode$bool(_p0._0);
		case 'Object':
			return _elm_lang$core$Json_Encode$list(
				A2(_elm_lang$core$List$map, _eeue56$elm_xml$Xml$xmlToJson, _p0._0));
		default:
			return _elm_lang$core$Json_Encode$null;
	}
};
var _eeue56$elm_xml$Xml$foldl = F3(
	function (fn, init, value) {
		foldl:
		while (true) {
			var _p3 = value;
			switch (_p3.ctor) {
				case 'Tag':
					var _v3 = fn,
						_v4 = A2(fn, value, init),
						_v5 = _p3._2;
					fn = _v3;
					init = _v4;
					value = _v5;
					continue foldl;
				case 'Object':
					return A3(
						_elm_lang$core$List$foldl,
						F2(
							function (elm, b) {
								return A3(_eeue56$elm_xml$Xml$foldl, fn, b, elm);
							}),
						A2(fn, value, init),
						_p3._0);
				default:
					return A2(fn, _p3, init);
			}
		}
	});
var _eeue56$elm_xml$Xml$DocType = F2(
	function (a, b) {
		return {ctor: 'DocType', _0: a, _1: b};
	});
var _eeue56$elm_xml$Xml$Object = function (a) {
	return {ctor: 'Object', _0: a};
};
var _eeue56$elm_xml$Xml$BoolNode = function (a) {
	return {ctor: 'BoolNode', _0: a};
};
var _eeue56$elm_xml$Xml$FloatNode = function (a) {
	return {ctor: 'FloatNode', _0: a};
};
var _eeue56$elm_xml$Xml$IntNode = function (a) {
	return {ctor: 'IntNode', _0: a};
};
var _eeue56$elm_xml$Xml$StrNode = function (a) {
	return {ctor: 'StrNode', _0: a};
};
var _eeue56$elm_xml$Xml$Tag = F3(
	function (a, b, c) {
		return {ctor: 'Tag', _0: a, _1: b, _2: c};
	});
var _eeue56$elm_xml$Xml$map = F2(
	function (fn, value) {
		var _p4 = value;
		switch (_p4.ctor) {
			case 'Tag':
				return fn(
					A3(
						_eeue56$elm_xml$Xml$Tag,
						_p4._0,
						_p4._1,
						A2(_eeue56$elm_xml$Xml$map, fn, _p4._2)));
			case 'Object':
				return fn(
					_eeue56$elm_xml$Xml$Object(
						A2(
							_elm_lang$core$List$map,
							_eeue56$elm_xml$Xml$map(fn),
							_p4._0)));
			default:
				return fn(_p4);
		}
	});
var _eeue56$elm_xml$Xml$xmlDecoder = _elm_lang$core$Json_Decode$oneOf(
	{
		ctor: '::',
		_0: A2(_elm_lang$core$Json_Decode$map, _eeue56$elm_xml$Xml$StrNode, _elm_lang$core$Json_Decode$string),
		_1: {
			ctor: '::',
			_0: A2(_elm_lang$core$Json_Decode$map, _eeue56$elm_xml$Xml$IntNode, _elm_lang$core$Json_Decode$int),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _eeue56$elm_xml$Xml$FloatNode, _elm_lang$core$Json_Decode$float),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$core$Json_Decode$map, _eeue56$elm_xml$Xml$BoolNode, _elm_lang$core$Json_Decode$bool),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$Json_Decode$map,
							_eeue56$elm_xml$Xml$Object,
							_elm_lang$core$Json_Decode$list(
								_elm_lang$core$Json_Decode$lazy(
									function (_p5) {
										return _eeue56$elm_xml$Xml$xmlDecoder;
									}))),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$core$Json_Decode$map,
								function (_p6) {
									return _eeue56$elm_xml$Xml$Object(
										A2(
											_elm_lang$core$List$map,
											function (_p7) {
												var _p8 = _p7;
												return A3(_eeue56$elm_xml$Xml$Tag, _p8._0, _elm_lang$core$Dict$empty, _p8._1);
											},
											_elm_lang$core$Dict$toList(_p6)));
								},
								_elm_lang$core$Json_Decode$dict(
									_elm_lang$core$Json_Decode$lazy(
										function (_p9) {
											return _eeue56$elm_xml$Xml$xmlDecoder;
										}))),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	});
var _eeue56$elm_xml$Xml$jsonToXml = function (json) {
	return A2(
		_elm_lang$core$Result$withDefault,
		_eeue56$elm_xml$Xml$Object(
			{ctor: '[]'}),
		A2(_elm_lang$core$Json_Decode$decodeValue, _eeue56$elm_xml$Xml$xmlDecoder, json));
};

var _eeue56$elm_xml$Xml_Encode$list = function (values) {
	return _eeue56$elm_xml$Xml$Object(values);
};
var _eeue56$elm_xml$Xml_Encode$object = function (values) {
	return _eeue56$elm_xml$Xml$Object(
		A2(
			_elm_lang$core$List$map,
			function (_p0) {
				var _p1 = _p0;
				return A3(_eeue56$elm_xml$Xml$Tag, _p1._0, _p1._1, _p1._2);
			},
			values));
};
var _eeue56$elm_xml$Xml_Encode$null = _eeue56$elm_xml$Xml_Encode$object(
	{ctor: '[]'});
var _eeue56$elm_xml$Xml_Encode$bool = function (b) {
	return _eeue56$elm_xml$Xml$BoolNode(b);
};
var _eeue56$elm_xml$Xml_Encode$float = function (n) {
	return _eeue56$elm_xml$Xml$FloatNode(n);
};
var _eeue56$elm_xml$Xml_Encode$int = function (n) {
	return _eeue56$elm_xml$Xml$IntNode(n);
};
var _eeue56$elm_xml$Xml_Encode$string = function (str) {
	return _eeue56$elm_xml$Xml$StrNode(str);
};
var _eeue56$elm_xml$Xml_Encode$needsIndent = function (nextValue) {
	var _p2 = nextValue;
	switch (_p2.ctor) {
		case 'Object':
			if (_p2._0.ctor === '[]') {
				return false;
			} else {
				return true;
			}
		case 'Tag':
			return true;
		default:
			return false;
	}
};
var _eeue56$elm_xml$Xml_Encode$propToString = function (value) {
	var _p3 = value;
	switch (_p3.ctor) {
		case 'StrNode':
			return _p3._0;
		case 'IntNode':
			return _elm_lang$core$Basics$toString(_p3._0);
		case 'BoolNode':
			return _elm_lang$core$String$toLower(
				_elm_lang$core$Basics$toString(_p3._0));
		case 'FloatNode':
			return _elm_lang$core$Basics$toString(_p3._0);
		default:
			return '';
	}
};
var _eeue56$elm_xml$Xml_Encode$propsToString = function (props) {
	return function (x) {
		return (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$String$length(x),
			0) > 0) ? A2(_elm_lang$core$Basics_ops['++'], ' ', x) : '';
	}(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				function (_p4) {
					var _p5 = _p4;
					return A2(
						_elm_lang$core$Basics_ops['++'],
						_p5._0,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'=\"',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_eeue56$elm_xml$Xml_Encode$propToString(_p5._1),
								'\"')));
				},
				_elm_lang$core$Dict$toList(props))));
};
var _eeue56$elm_xml$Xml_Encode$valueToString = F3(
	function (level, indent, value) {
		var _p6 = value;
		switch (_p6.ctor) {
			case 'Tag':
				var _p8 = _p6._2;
				var _p7 = _p6._0;
				var indentString = _eeue56$elm_xml$Xml_Encode$needsIndent(_p8) ? '\n' : '';
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'<',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p7,
						A2(
							_elm_lang$core$Basics_ops['++'],
							_eeue56$elm_xml$Xml_Encode$propsToString(_p6._1),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'>',
								A2(
									_elm_lang$core$Basics_ops['++'],
									indentString,
									A2(
										_elm_lang$core$Basics_ops['++'],
										A3(_eeue56$elm_xml$Xml_Encode$valueToString, level + 1, indent, _p8),
										A2(
											_elm_lang$core$Basics_ops['++'],
											indentString,
											A2(
												_elm_lang$core$Basics_ops['++'],
												'</',
												A2(_elm_lang$core$Basics_ops['++'], _p7, '>')))))))));
			case 'StrNode':
				return _p6._0;
			case 'IntNode':
				return _elm_lang$core$Basics$toString(_p6._0);
			case 'FloatNode':
				return _elm_lang$core$Basics$toString(_p6._0);
			case 'BoolNode':
				return _elm_lang$core$String$toLower(
					_elm_lang$core$Basics$toString(_p6._0));
			case 'Object':
				return A2(
					_elm_lang$core$String$join,
					'\n',
					A2(
						_elm_lang$core$List$map,
						F2(
							function (x, y) {
								return A2(_elm_lang$core$Basics_ops['++'], x, y);
							})(
							A2(_elm_lang$core$String$repeat, level * indent, ' ')),
						A2(
							_elm_lang$core$List$map,
							A2(_eeue56$elm_xml$Xml_Encode$valueToString, level + 1, indent),
							_p6._0)));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'<?',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p6._0,
						A2(
							_elm_lang$core$Basics_ops['++'],
							_eeue56$elm_xml$Xml_Encode$propsToString(_p6._1),
							'?>')));
		}
	});
var _eeue56$elm_xml$Xml_Encode$encode = F2(
	function (indent, value) {
		return A3(_eeue56$elm_xml$Xml_Encode$valueToString, -1, indent, value);
	});

var _eeue56$elm_xml$Xml_Query$contains = F2(
	function (contents, node) {
		contains:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(node, contents)) {
				return true;
			} else {
				var _p0 = node;
				switch (_p0.ctor) {
					case 'StrNode':
						return false;
					case 'BoolNode':
						return false;
					case 'IntNode':
						return false;
					case 'FloatNode':
						return false;
					case 'DocType':
						return false;
					case 'Tag':
						var _v1 = contents,
							_v2 = _p0._2;
						contents = _v1;
						node = _v2;
						continue contains;
					default:
						return A2(
							_elm_lang$core$List$any,
							_eeue56$elm_xml$Xml_Query$contains(contents),
							_p0._0);
				}
			}
		}
	});
var _eeue56$elm_xml$Xml_Query$tags = F2(
	function (tagName, node) {
		var _p1 = node;
		switch (_p1.ctor) {
			case 'StrNode':
				return {ctor: '[]'};
			case 'BoolNode':
				return {ctor: '[]'};
			case 'IntNode':
				return {ctor: '[]'};
			case 'FloatNode':
				return {ctor: '[]'};
			case 'DocType':
				return {ctor: '[]'};
			case 'Tag':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Native_Utils.eq(_p1._0, tagName) ? {
						ctor: '::',
						_0: node,
						_1: {ctor: '[]'}
					} : {ctor: '[]'},
					A2(_eeue56$elm_xml$Xml_Query$tags, tagName, _p1._2));
			default:
				return _elm_lang$core$List$concat(
					A2(
						_elm_lang$core$List$map,
						_eeue56$elm_xml$Xml_Query$tags(tagName),
						_p1._0));
		}
	});
var _eeue56$elm_xml$Xml_Query$default = F2(
	function (b, res) {
		var _p2 = res;
		if (_p2.ctor === 'Ok') {
			return res;
		} else {
			return _elm_lang$core$Result$Ok(b);
		}
	});
var _eeue56$elm_xml$Xml_Query$bool = function (value) {
	var _p3 = value;
	if (_p3.ctor === 'BoolNode') {
		return _elm_lang$core$Result$Ok(_p3._0);
	} else {
		return _elm_lang$core$Result$Err('Not a bool');
	}
};
var _eeue56$elm_xml$Xml_Query$float = function (value) {
	var _p4 = value;
	if (_p4.ctor === 'FloatNode') {
		return _elm_lang$core$Result$Ok(_p4._0);
	} else {
		return _elm_lang$core$Result$Err('Not a float');
	}
};
var _eeue56$elm_xml$Xml_Query$int = function (value) {
	var _p5 = value;
	if (_p5.ctor === 'IntNode') {
		return _elm_lang$core$Result$Ok(_p5._0);
	} else {
		return _elm_lang$core$Result$Err('Not an int');
	}
};
var _eeue56$elm_xml$Xml_Query$string = function (value) {
	var _p6 = value;
	if (_p6.ctor === 'StrNode') {
		return _elm_lang$core$Result$Ok(_p6._0);
	} else {
		return _elm_lang$core$Result$Err('Not a string.');
	}
};
var _eeue56$elm_xml$Xml_Query$collect = F2(
	function (fn, values) {
		return A2(
			_elm_lang$core$List$filterMap,
			function (_p7) {
				return _elm_lang$core$Result$toMaybe(
					fn(_p7));
			},
			values);
	});
var _eeue56$elm_xml$Xml_Query$tag = F3(
	function (name, converter, value) {
		tag:
		while (true) {
			var _p8 = A2(_eeue56$elm_xml$Xml_Query$tags, name, value);
			if (_p8.ctor === '[]') {
				return _elm_lang$core$Result$Err(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'No tag called \'',
						A2(_elm_lang$core$Basics_ops['++'], name, '\' found.')));
			} else {
				var _p9 = _p8._0;
				_v10_2:
				do {
					switch (_p9.ctor) {
						case 'Tag':
							return converter(_p9._2);
						case 'Object':
							if (_p9._0.ctor === '::') {
								var _v11 = name,
									_v12 = converter,
									_v13 = _p9._0._0;
								name = _v11;
								converter = _v12;
								value = _v13;
								continue tag;
							} else {
								break _v10_2;
							}
						default:
							break _v10_2;
					}
				} while(false);
				return _elm_lang$core$Result$Err('Not a tag');
			}
		}
	});

var _user$project$Fuse$funcToString = function (fn) {
	return _eeue56$elm_ffi$FFI$intoElm(
		A2(
			_eeue56$elm_ffi$FFI$sync,
			'return _0.toString();',
			{
				ctor: '::',
				_0: _eeue56$elm_ffi$FFI$asIs(fn),
				_1: {ctor: '[]'}
			}));
};
var _user$project$Fuse$trueToString = function (a) {
	return _eeue56$elm_ffi$FFI$intoElm(
		A2(
			_eeue56$elm_ffi$FFI$sync,
			'return JSON.stringify(_0)',
			{
				ctor: '::',
				_0: _eeue56$elm_ffi$FFI$asIs(a),
				_1: {ctor: '[]'}
			}));
};
var _user$project$Fuse$functionToString = function (fn) {
	return _eeue56$elm_ffi$FFI$intoElm(
		A2(
			_eeue56$elm_ffi$FFI$sync,
			'return \'func\' + _0.toString().length.toString();',
			{
				ctor: '::',
				_0: _eeue56$elm_ffi$FFI$asIs(fn),
				_1: {ctor: '[]'}
			}));
};
var _user$project$Fuse$sendNameToJS = function (name) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		' var ',
		A2(_elm_lang$core$Basics_ops['++'], name, ' = new Observable();'));
};
var _user$project$Fuse$argsBlockValues = function (n) {
	return A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			function (str) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'_',
					A2(_elm_lang$core$Basics_ops['++'], str, '.value'));
			},
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$toString,
				A2(_elm_lang$core$List$range, 0, n - 1))));
};
var _user$project$Fuse$argsBlock = function (n) {
	return A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			function (str) {
				return A2(_elm_lang$core$Basics_ops['++'], '_', str);
			},
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$toString,
				A2(_elm_lang$core$List$range, 0, n - 1))));
};
var _user$project$Fuse$subNameToJS = function (_p0) {
	var _p1 = _p0;
	var _p3 = _p1._2;
	var _p2 = _p1._1;
	var extras = (_elm_lang$core$Native_Utils.cmp(_p3, 1) < 0) ? ')' : A2(
		_elm_lang$core$Basics_ops['++'],
		')(',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_user$project$Fuse$argsBlockValues(_p3),
			')'));
	var argParts = _user$project$Fuse$argsBlock(_p3);
	var msgToString = (_elm_lang$core$Native_Utils.cmp(_p3, 1) < 0) ? _user$project$Fuse$trueToString(_p2) : _user$project$Fuse$funcToString(
		_eeue56$elm_ffi$FFI$intoElm(
			_eeue56$elm_ffi$FFI$asIs(_p2)));
	return A2(
		_elm_lang$core$Basics_ops['++'],
		' function ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p1._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					argParts,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'){\n        elm.ports.eventsPort.send((',
						A2(
							_elm_lang$core$Basics_ops['++'],
							msgToString,
							A2(_elm_lang$core$Basics_ops['++'], extras, '  );\n        }')))))));
};
var _user$project$Fuse$getCtor = function (msg) {
	return _eeue56$elm_ffi$FFI$intoElm(
		A2(
			_eeue56$elm_ffi$FFI$sync,
			'\nreturn _0.ctor || \"\";\n    ',
			{
				ctor: '::',
				_0: _eeue56$elm_ffi$FFI$asIs(msg),
				_1: {ctor: '[]'}
			}));
};
var _user$project$Fuse$subsText = '\nelm.ports.modelUpdated.subscribe(function(things){\n    var model = things[0];\n    var nameToFn = things[1];\n\n    nameToFn.map(function(thing){\n        var name = thing._0;\n        var func = thing._1;\n        module.exports[name].value = func(model);\n    });\n});\n';
var _user$project$Fuse$elmApp = '\nvar Observable = require(\"FuseJS/Observable\");\nvar Elm = require(\'./elm.js\');\nvar elm = Elm.Main.worker();\n    ';
var _user$project$Fuse$exports = F2(
	function (sendNames, subs) {
		var subNames = A2(
			_elm_lang$core$List$map,
			function (_p4) {
				var _p5 = _p4;
				return _p5._0;
			},
			subs);
		var exportNames = A2(
			_elm_lang$core$String$join,
			',',
			A2(
				_elm_lang$core$List$map,
				function (name) {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						name,
						A2(_elm_lang$core$Basics_ops['++'], ':', name));
				},
				A2(_elm_lang$core$Basics_ops['++'], subNames, sendNames)));
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'module.exports = {',
			A2(_elm_lang$core$Basics_ops['++'], exportNames, '}'));
	});
var _user$project$Fuse$makeElmBindings = F2(
	function (sendNames, subs) {
		return function (body) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				body,
				A2(_user$project$Fuse$exports, sendNames, subs));
		}(
			function (app) {
				return A2(_elm_lang$core$Basics_ops['++'], app, _user$project$Fuse$subsText);
			}(
				A2(
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					_user$project$Fuse$elmApp,
					A2(
						_elm_lang$core$String$join,
						'\n',
						A2(
							F2(
								function (x, y) {
									return A2(_elm_lang$core$Basics_ops['++'], x, y);
								}),
							A2(_elm_lang$core$List$map, _user$project$Fuse$sendNameToJS, sendNames),
							A2(_elm_lang$core$List$map, _user$project$Fuse$subNameToJS, subs))))));
	});
var _user$project$Fuse$mapTags = F2(
	function (fn, tag) {
		var _p6 = tag;
		switch (_p6.ctor) {
			case 'Tag':
				return A3(
					fn,
					_p6._0,
					_p6._1,
					A2(_user$project$Fuse$mapTags, fn, _p6._2));
			case 'Object':
				return _eeue56$elm_xml$Xml$Object(
					A2(
						_elm_lang$core$List$map,
						_user$project$Fuse$mapTags(fn),
						_p6._0));
			default:
				return _p6;
		}
	});
var _user$project$Fuse$xmlToAttribute = function (_p7) {
	return _eeue56$elm_ffi$FFI$intoElm(
		_eeue56$elm_ffi$FFI$asIs(_p7));
};
var _user$project$Fuse$insertSpecialItem = F3(
	function (name, value, dict) {
		var _p8 = _user$project$Fuse$xmlToAttribute(value);
		switch (_p8.ctor) {
			case 'Attribute':
				return A3(_elm_lang$core$Dict$insert, _p8._0, _p8._1, dict);
			case 'EventAttribute':
				return dict;
			default:
				var attrName = A2(
					_elm_lang$core$String$dropLeft,
					_elm_lang$core$String$length('-Special') + 1,
					name);
				return A3(
					_elm_lang$core$Dict$insert,
					attrName,
					_eeue56$elm_xml$Xml_Encode$string(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'{',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_user$project$Fuse$functionToString(_p8._1),
								'}'))),
					dict);
		}
	});
var _user$project$Fuse$insertEventItem = F4(
	function (name, value, eventDict, dict) {
		var _p9 = _user$project$Fuse$xmlToAttribute(value);
		switch (_p9.ctor) {
			case 'Attribute':
				return A3(_elm_lang$core$Dict$insert, _p9._0, _p9._1, dict);
			case 'EventAttribute':
				var eventName = A2(
					_elm_lang$core$Maybe$withDefault,
					'event_unknown',
					A2(
						_eeue56$elm_all_dict$EveryDict$get,
						_eeue56$elm_ffi$FFI$intoElm(
							_eeue56$elm_ffi$FFI$asIs(_p9._1)),
						eventDict));
				var attrName = _p9._0;
				return A3(
					_elm_lang$core$Dict$insert,
					attrName,
					_eeue56$elm_xml$Xml_Encode$string(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'{',
							A2(_elm_lang$core$Basics_ops['++'], eventName, '}'))),
					dict);
			default:
				return dict;
		}
	});
var _user$project$Fuse$replaceSpecial = F4(
	function (eventDict, name, dict, tags) {
		var newDict = A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (name, value, dictA) {
					return A2(_elm_lang$core$String$startsWith, '-Special', name) ? A3(_user$project$Fuse$insertSpecialItem, name, value, dictA) : (A2(_elm_lang$core$String$startsWith, '-Event', name) ? A4(_user$project$Fuse$insertEventItem, name, value, eventDict, dictA) : A3(_elm_lang$core$Dict$insert, name, value, dictA));
				}),
			_elm_lang$core$Dict$empty,
			dict);
		return A3(_eeue56$elm_xml$Xml$Tag, name, newDict, tags);
	});
var _user$project$Fuse$getAttributeName = function (makeAttr) {
	var _p10 = makeAttr(
		_elm_lang$core$Json_Encode$string(''));
	if (_p10.ctor === 'Attribute') {
		return _p10._0;
	} else {
		return '';
	}
};
var _user$project$Fuse$collectEventValues = F2(
	function (tag, xs) {
		var _p11 = tag;
		if (_p11.ctor === 'Tag') {
			return A2(
				F2(
					function (x, y) {
						return A2(_elm_lang$core$Basics_ops['++'], x, y);
					}),
				xs,
				A2(
					_elm_lang$core$List$map,
					function (_p12) {
						return _eeue56$elm_ffi$FFI$intoElm(
							_eeue56$elm_ffi$FFI$asIs(
								_elm_lang$core$Tuple$second(_p12)));
					},
					A2(
						_elm_lang$core$List$filter,
						function (_p13) {
							var _p14 = _p13;
							return A2(_elm_lang$core$String$startsWith, '-Event', _p14._0);
						},
						_elm_lang$core$Dict$toList(_p11._1))));
		} else {
			return xs;
		}
	});
var _user$project$Fuse$collectEventHandlersWithNames = function (tags) {
	return _elm_lang$core$Tuple$second(
		A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p16, _p15) {
					var _p17 = _p16;
					var _p18 = _p15;
					var _p19 = _p18._0;
					return {
						ctor: '_Tuple2',
						_0: _p19 + 1,
						_1: A3(
							_eeue56$elm_all_dict$EveryDict$insert,
							_p17._1,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'event',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p19),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'_',
										_elm_lang$core$Basics$toString(_p17._2)))),
							_p18._1)
					};
				}),
			{ctor: '_Tuple2', _0: 0, _1: _eeue56$elm_all_dict$EveryDict$empty},
			A2(
				_elm_lang$core$List$filterMap,
				function (thing) {
					var _p20 = thing;
					switch (_p20.ctor) {
						case 'Attribute':
							return _elm_lang$core$Maybe$Nothing;
						case 'Reflector':
							return _elm_lang$core$Maybe$Nothing;
						default:
							return _elm_lang$core$Maybe$Just(
								{ctor: '_Tuple3', _0: _p20._0, _1: _p20._1, _2: _p20._2});
					}
				},
				A3(
					_eeue56$elm_xml$Xml$foldl,
					_user$project$Fuse$collectEventValues,
					{ctor: '[]'},
					_eeue56$elm_xml$Xml$Object(tags)))));
};
var _user$project$Fuse$collectObservableValues = F2(
	function (tag, xs) {
		var _p21 = tag;
		if (_p21.ctor === 'Tag') {
			return A2(
				F2(
					function (x, y) {
						return A2(_elm_lang$core$Basics_ops['++'], x, y);
					}),
				xs,
				A2(
					_elm_lang$core$List$map,
					function (_p22) {
						return _eeue56$elm_ffi$FFI$intoElm(
							_eeue56$elm_ffi$FFI$asIs(
								_elm_lang$core$Tuple$second(_p22)));
					},
					A2(
						_elm_lang$core$List$filter,
						function (_p23) {
							var _p24 = _p23;
							return A2(_elm_lang$core$String$startsWith, '-Special', _p24._0);
						},
						_elm_lang$core$Dict$toList(_p21._1))));
		} else {
			return xs;
		}
	});
var _user$project$Fuse$attributeToTuple = function (attribute) {
	var _p25 = attribute;
	switch (_p25.ctor) {
		case 'Attribute':
			return {ctor: '_Tuple2', _0: _p25._0, _1: _p25._1};
		case 'Reflector':
			var name = _user$project$Fuse$getAttributeName(_p25._0);
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$Basics_ops['++'], '-Special-', name),
				_1: _eeue56$elm_ffi$FFI$intoElm(
					_eeue56$elm_ffi$FFI$asIs(attribute))
			};
		default:
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$Basics_ops['++'], '-Event-', _p25._0),
				_1: _eeue56$elm_ffi$FFI$intoElm(
					_eeue56$elm_ffi$FFI$asIs(attribute))
			};
	}
};
var _user$project$Fuse$attributesToDict = function (attributes) {
	return _elm_lang$core$Dict$fromList(
		A2(_elm_lang$core$List$map, _user$project$Fuse$attributeToTuple, attributes));
};
var _user$project$Fuse$node = F3(
	function (name, attrs, children) {
		return A3(
			_eeue56$elm_xml$Xml$Tag,
			name,
			_user$project$Fuse$attributesToDict(attrs),
			_eeue56$elm_xml$Xml_Encode$list(children));
	});
var _user$project$Fuse$button = _user$project$Fuse$node('Button');
var _user$project$Fuse$rectangle = _user$project$Fuse$node('Rectangle');
var _user$project$Fuse$webview = _user$project$Fuse$node('WebView');
var _user$project$Fuse$nativeViewHost = _user$project$Fuse$node('NativeViewHost');
var _user$project$Fuse$javaScript = function (content) {
	return A3(
		_user$project$Fuse$node,
		'JavaScript',
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _eeue56$elm_xml$Xml_Encode$string(content),
			_1: {ctor: '[]'}
		});
};
var _user$project$Fuse$programToUXL = F3(
	function (_p26, sendNames, subNames) {
		var _p27 = _p26;
		return A2(
			_eeue56$elm_xml$Xml_Encode$encode,
			4,
			_eeue56$elm_xml$Xml_Encode$object(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple3',
						_0: 'App',
						_1: _elm_lang$core$Dict$empty,
						_2: _eeue56$elm_xml$Xml_Encode$list(
							{
								ctor: '::',
								_0: _user$project$Fuse$javaScript(
									A2(_user$project$Fuse$makeElmBindings, sendNames, subNames)),
								_1: _p27._0
							})
					},
					_1: {ctor: '[]'}
				}));
	});
var _user$project$Fuse$EventAttribute = F3(
	function (a, b, c) {
		return {ctor: 'EventAttribute', _0: a, _1: b, _2: c};
	});
var _user$project$Fuse$collectEventHandlers = F2(
	function (tags, lookup) {
		return A2(
			_elm_lang$core$List$filterMap,
			function (thing) {
				var _p28 = thing;
				switch (_p28.ctor) {
					case 'Attribute':
						return _elm_lang$core$Maybe$Nothing;
					case 'Reflector':
						return _elm_lang$core$Maybe$Nothing;
					default:
						var _p29 = _p28._1;
						return A2(
							_elm_lang$core$Maybe$map,
							function (eventName) {
								return A3(
									_user$project$Fuse$EventAttribute,
									eventName,
									_eeue56$elm_ffi$FFI$intoElm(
										_eeue56$elm_ffi$FFI$asIs(_p29)),
									_p28._2);
							},
							A2(_eeue56$elm_all_dict$EveryDict$get, _p29, lookup));
				}
			},
			A3(
				_eeue56$elm_xml$Xml$foldl,
				_user$project$Fuse$collectEventValues,
				{ctor: '[]'},
				_eeue56$elm_xml$Xml$Object(tags)));
	});
var _user$project$Fuse$Reflector = F2(
	function (a, b) {
		return {ctor: 'Reflector', _0: a, _1: b};
	});
var _user$project$Fuse$reflect = F2(
	function (attributeMake, view) {
		return A2(_user$project$Fuse$Reflector, attributeMake, view);
	});
var _user$project$Fuse$reflectString = F2(
	function (attributeMake, view) {
		return A2(
			_user$project$Fuse$reflect,
			function (_p30) {
				return attributeMake(
					_eeue56$elm_ffi$FFI$intoElm(_p30));
			},
			function (_p31) {
				return _elm_lang$core$Json_Encode$string(
					view(_p31));
			});
	});
var _user$project$Fuse$Attribute = F2(
	function (a, b) {
		return {ctor: 'Attribute', _0: a, _1: b};
	});
var _user$project$Fuse$collectReflectors = function (tags) {
	return A2(
		_elm_lang$core$List$filterMap,
		function (thing) {
			var _p32 = thing;
			switch (_p32.ctor) {
				case 'Attribute':
					return _elm_lang$core$Maybe$Nothing;
				case 'Reflector':
					var _p33 = _p32._1;
					return _elm_lang$core$Maybe$Just(
						A2(
							_user$project$Fuse$Attribute,
							_user$project$Fuse$functionToString(_p33),
							_eeue56$elm_ffi$FFI$intoElm(
								_eeue56$elm_ffi$FFI$asIs(_p33))));
				default:
					return _elm_lang$core$Maybe$Nothing;
			}
		},
		A3(
			_eeue56$elm_xml$Xml$foldl,
			_user$project$Fuse$collectObservableValues,
			{ctor: '[]'},
			_eeue56$elm_xml$Xml$Object(tags)));
};
var _user$project$Fuse$Program = F3(
	function (a, b, c) {
		return {ctor: 'Program', _0: a, _1: b, _2: c};
	});
var _user$project$Fuse$app = function (tags) {
	var eventHandlersNames = _user$project$Fuse$collectEventHandlersWithNames(tags);
	var events = A2(
		_elm_lang$core$Debug$log,
		'events inside',
		A2(_user$project$Fuse$collectEventHandlers, tags, eventHandlersNames));
	var newTags = A2(
		_elm_lang$core$List$map,
		_user$project$Fuse$mapTags(
			_user$project$Fuse$replaceSpecial(eventHandlersNames)),
		tags);
	var observables = _user$project$Fuse$collectReflectors(tags);
	return A3(_user$project$Fuse$Program, newTags, observables, events);
};

var _user$project$Fuse_Attributes$value = _user$project$Fuse$Attribute('Value');
var _user$project$Fuse_Attributes$bool = function (_p0) {
	return A2(
		_user$project$Fuse$Attribute,
		'Bool',
		_eeue56$elm_xml$Xml_Encode$bool(_p0));
};
var _user$project$Fuse_Attributes$text = function (words) {
	return A2(
		_user$project$Fuse$Attribute,
		'Text',
		_eeue56$elm_xml$Xml_Encode$string(words));
};
var _user$project$Fuse_Attributes$url = function (_p1) {
	return A2(
		_user$project$Fuse$Attribute,
		'Url',
		_eeue56$elm_xml$Xml_Encode$string(_p1));
};
var _user$project$Fuse_Attributes$color = function (_p2) {
	return A2(
		_user$project$Fuse$Attribute,
		'Color',
		_eeue56$elm_xml$Xml_Encode$string(_p2));
};
var _user$project$Fuse_Attributes$fontSize = function (_p3) {
	return A2(
		_user$project$Fuse$Attribute,
		'FontSize',
		_eeue56$elm_xml$Xml_Encode$int(_p3));
};
var _user$project$Fuse_Attributes$width = function (_p4) {
	return A2(
		_user$project$Fuse$Attribute,
		'Width',
		_eeue56$elm_xml$Xml_Encode$int(_p4));
};
var _user$project$Fuse_Attributes$height = function (_p5) {
	return A2(
		_user$project$Fuse$Attribute,
		'Height',
		_eeue56$elm_xml$Xml_Encode$int(_p5));
};
var _user$project$Fuse_Attributes$attribute = F2(
	function (name, value) {
		return A2(_user$project$Fuse$Attribute, name, value);
	});

var _user$project$Fuse_Conditions$matchCase = _user$project$Fuse$node('Case');
var _user$project$Fuse_Conditions$match = _user$project$Fuse$node('Match');
var _user$project$Fuse_Conditions$viewIf = F3(
	function (conditionFn, ifTrueView, ifFalseView) {
		return A2(
			_user$project$Fuse_Conditions$match,
			{
				ctor: '::',
				_0: A2(
					_user$project$Fuse$reflect,
					function (_p0) {
						return _user$project$Fuse_Attributes$value(
							_eeue56$elm_xml$Xml$jsonToXml(_p0));
					},
					function (_p1) {
						return _elm_lang$core$Json_Encode$bool(
							conditionFn(_p1));
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_user$project$Fuse_Conditions$matchCase,
					{
						ctor: '::',
						_0: _user$project$Fuse_Attributes$bool(true),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: ifTrueView,
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$Fuse_Conditions$matchCase,
						{
							ctor: '::',
							_0: _user$project$Fuse_Attributes$bool(false),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: ifFalseView,
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});

var _user$project$Fuse_Controls$textInput = _user$project$Fuse$node('TextInput');

var _user$project$Fuse_Events$constructorToMsg = function (_p0) {
	return _eeue56$elm_ffi$FFI$intoElm(
		_eeue56$elm_ffi$FFI$asIs(_p0));
};
var _user$project$Fuse_Events$stringValueChanged = function (msg) {
	return A3(
		_user$project$Fuse$EventAttribute,
		'ValueChanged',
		_user$project$Fuse_Events$constructorToMsg(msg),
		1);
};
var _user$project$Fuse_Events$onClick = function (msg) {
	return A3(_user$project$Fuse$EventAttribute, 'Clicked', msg, 0);
};

var _user$project$Fuse_Generator$collectSends = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$List$filterMap,
		function (thing) {
			var _p2 = thing;
			if (_p2.ctor === 'Attribute') {
				return _elm_lang$core$Maybe$Just(_p2._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		},
		_p1._1);
};
var _user$project$Fuse_Generator$collectSubs = function (_p3) {
	var _p4 = _p3;
	return A2(
		_elm_lang$core$Debug$log,
		'events',
		A2(
			_elm_lang$core$List$filterMap,
			function (thing) {
				var _p5 = thing;
				if (_p5.ctor === 'EventAttribute') {
					return _elm_lang$core$Maybe$Just(
						{
							ctor: '_Tuple3',
							_0: _p5._0,
							_1: _eeue56$elm_ffi$FFI$intoElm(
								_eeue56$elm_ffi$FFI$asIs(_p5._1)),
							_2: _p5._2
						});
				} else {
					return _elm_lang$core$Maybe$Nothing;
				}
			},
			_p4._2));
};
var _user$project$Fuse_Generator$sendUxl = _elm_lang$core$Native_Platform.outgoingPort(
	'sendUxl',
	function (v) {
		return v;
	});
var _user$project$Fuse_Generator$modelUpdated = _elm_lang$core$Native_Platform.outgoingPort(
	'modelUpdated',
	function (v) {
		return [v._0, v._1];
	});
var _user$project$Fuse_Generator$eventsPort = _elm_lang$core$Native_Platform.incomingPort('eventsPort', _elm_lang$core$Json_Decode$value);
var _user$project$Fuse_Generator$run = F3(
	function (update, model, _p6) {
		var _p7 = _p6;
		var _p10 = _p7;
		var _p9 = _p7._1;
		return _elm_lang$core$Platform$program(
			{
				init: {
					ctor: '_Tuple2',
					_0: model,
					_1: _elm_lang$core$Platform_Cmd$batch(
						{
							ctor: '::',
							_0: _user$project$Fuse_Generator$sendUxl(
								A3(
									_user$project$Fuse$programToUXL,
									_p10,
									_user$project$Fuse_Generator$collectSends(_p10),
									_user$project$Fuse_Generator$collectSubs(_p10))),
							_1: {
								ctor: '::',
								_0: _user$project$Fuse_Generator$modelUpdated(
									{
										ctor: '_Tuple2',
										_0: _eeue56$elm_ffi$FFI$asIs(model),
										_1: _elm_lang$core$Json_Encode$list(
											A2(_elm_lang$core$List$map, _eeue56$elm_ffi$FFI$asIs, _p9))
									}),
								_1: {ctor: '[]'}
							}
						})
				},
				update: F2(
					function (msg, model) {
						var _p8 = A2(update, msg, model);
						var newModel = _p8._0;
						var newCmds = _p8._1;
						return {
							ctor: '_Tuple2',
							_0: newModel,
							_1: _elm_lang$core$Platform_Cmd$batch(
								{
									ctor: '::',
									_0: _user$project$Fuse_Generator$modelUpdated(
										{
											ctor: '_Tuple2',
											_0: _eeue56$elm_ffi$FFI$asIs(newModel),
											_1: _elm_lang$core$Json_Encode$list(
												A2(_elm_lang$core$List$map, _eeue56$elm_ffi$FFI$asIs, _p9))
										}),
									_1: {
										ctor: '::',
										_0: newCmds,
										_1: {ctor: '[]'}
									}
								})
						};
					}),
				subscriptions: function (model) {
					return _user$project$Fuse_Generator$eventsPort(_eeue56$elm_ffi$FFI$intoElm);
				}
			});
	});

var _user$project$Fuse_Layout$scrollView = _user$project$Fuse$node('ScrollView');
var _user$project$Fuse_Layout$circleLayout = _user$project$Fuse$node('CircleLayout');
var _user$project$Fuse_Layout$columnLayout = _user$project$Fuse$node('ColumnLayout');
var _user$project$Fuse_Layout$wrapPanel = _user$project$Fuse$node('WrapPanel');
var _user$project$Fuse_Layout$grid = _user$project$Fuse$node('Grid');
var _user$project$Fuse_Layout$dockPanel = _user$project$Fuse$node('DockPanel');
var _user$project$Fuse_Layout$stackPanel = _user$project$Fuse$node('StackPanel');
var _user$project$Fuse_Layout$element = _user$project$Fuse$node('Element');

var _user$project$Model$Model = F2(
	function (a, b) {
		return {clicks: a, text: b};
	});

var _user$project$Update$update = F2(
	function (msg, model) {
		var _p0 = msg;
		switch (_p0.ctor) {
			case 'YellowClicked':
				var _p1 = A2(_elm_lang$core$Debug$log, 'Small yellow button clicked! Incrementing model in Elm..', model.clicks);
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{clicks: model.clicks + 1}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'BlackClicked':
				var _p2 = A2(_elm_lang$core$Debug$log, 'Big black button clicked! Decrement model in Elm..', model.clicks);
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{clicks: model.clicks - 1}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			default:
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{text: _p0._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
		}
	});
var _user$project$Update$TextChanged = function (a) {
	return {ctor: 'TextChanged', _0: a};
};
var _user$project$Update$BlackClicked = {ctor: 'BlackClicked'};
var _user$project$Update$YellowClicked = {ctor: 'YellowClicked'};

var _user$project$Main$main = A3(
	_user$project$Fuse_Generator$run,
	_user$project$Update$update,
	{clicks: 0, text: ''},
	_user$project$Fuse$app(
		{
			ctor: '::',
			_0: A2(
				_user$project$Fuse_Layout$stackPanel,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_user$project$Fuse$button,
						{
							ctor: '::',
							_0: _user$project$Fuse_Attributes$text('MAKE IT GO DOWNEST'),
							_1: {
								ctor: '::',
								_0: _user$project$Fuse_Attributes$width(500),
								_1: {
									ctor: '::',
									_0: _user$project$Fuse_Attributes$height(200),
									_1: {
										ctor: '::',
										_0: _user$project$Fuse_Attributes$color('#000'),
										_1: {
											ctor: '::',
											_0: _user$project$Fuse_Events$onClick(_user$project$Update$BlackClicked),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: A2(
							_user$project$Fuse$button,
							{
								ctor: '::',
								_0: _user$project$Fuse_Attributes$text('Click to increment'),
								_1: {
									ctor: '::',
									_0: _user$project$Fuse_Attributes$width(300),
									_1: {
										ctor: '::',
										_0: _user$project$Fuse_Attributes$height(100),
										_1: {
											ctor: '::',
											_0: _user$project$Fuse_Attributes$color('#FF0'),
											_1: {
												ctor: '::',
												_0: _user$project$Fuse_Events$onClick(_user$project$Update$YellowClicked),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: A2(
								_user$project$Fuse_Controls$textInput,
								{
									ctor: '::',
									_0: _user$project$Fuse_Events$stringValueChanged(_user$project$Update$TextChanged),
									_1: {
										ctor: '::',
										_0: _user$project$Fuse_Attributes$width(300),
										_1: {
											ctor: '::',
											_0: _user$project$Fuse_Attributes$height(200),
											_1: {ctor: '[]'}
										}
									}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: A2(
									_user$project$Fuse$button,
									{
										ctor: '::',
										_0: _user$project$Fuse_Attributes$width(300),
										_1: {
											ctor: '::',
											_0: _user$project$Fuse_Attributes$height(200),
											_1: {
												ctor: '::',
												_0: _user$project$Fuse_Attributes$color('#FFA'),
												_1: {
													ctor: '::',
													_0: A2(
														_user$project$Fuse$reflectString,
														_user$project$Fuse_Attributes$text,
														function (model) {
															return A2(_elm_lang$core$Basics_ops['++'], 'You typed: ', model.text);
														}),
													_1: {ctor: '[]'}
												}
											}
										}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										_user$project$Fuse$button,
										{
											ctor: '::',
											_0: _user$project$Fuse_Attributes$width(400),
											_1: {
												ctor: '::',
												_0: _user$project$Fuse_Attributes$height(200),
												_1: {
													ctor: '::',
													_0: _user$project$Fuse_Attributes$color('#FFF'),
													_1: {ctor: '[]'}
												}
											}
										},
										{ctor: '[]'}),
									_1: {
										ctor: '::',
										_0: A2(
											_user$project$Fuse$button,
											{
												ctor: '::',
												_0: _user$project$Fuse_Attributes$height(50),
												_1: {
													ctor: '::',
													_0: _user$project$Fuse_Attributes$color('#000'),
													_1: {ctor: '[]'}
												}
											},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: A3(
												_user$project$Fuse_Conditions$viewIf,
												function (model) {
													return _elm_lang$core$Native_Utils.cmp(model.clicks, 5) > -1;
												},
												A2(
													_user$project$Fuse$button,
													{
														ctor: '::',
														_0: _user$project$Fuse_Attributes$text('You\'ve got 5 or more things!'),
														_1: {
															ctor: '::',
															_0: _user$project$Fuse_Attributes$width(400),
															_1: {
																ctor: '::',
																_0: _user$project$Fuse_Attributes$height(200),
																_1: {
																	ctor: '::',
																	_0: _user$project$Fuse_Attributes$color('#FFF'),
																	_1: {ctor: '[]'}
																}
															}
														}
													},
													{ctor: '[]'}),
												A2(
													_user$project$Fuse$button,
													{ctor: '[]'},
													{ctor: '[]'})),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_user$project$Fuse$rectangle,
					{
						ctor: '::',
						_0: _user$project$Fuse_Attributes$color('#FFF'),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			}
		}))();

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

