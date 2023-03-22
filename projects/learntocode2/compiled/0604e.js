Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname4,$loadname6,$loadname9,$compareres10,$loadname13,$loadname16,$compareres17,$loadname21,$loadname24,$loadname27,$compareres28,$loadname31,$loadname32,$loadname31,$loadname32,$lattr34,$binop36,$loadname37,$loadname31,$loadname32,$lattr34,$binop36,$loadname37,$lattr39,$binop40,$loadname42,$compareres43,$loadname47,$loadname48,$loadname47,$loadname48,$lattr50,$binop52,$loadname53,$loadname47,$loadname48,$lattr50,$binop52,$loadname53,$lattr54,$binop55,$loadname57,$loadname60,$loadname63,$loadname66,$loadname69,$loadname72,$compareres73,$loadname77,$loadname80,$loadname83,$loadname86,$loadname88,$compareres89,$loadname92,$compareres93,$loadname97,$loadname100,$compareres101,$loadname104,$loadname107,$loadname110,$loadname113,$loadname115,$compareres116,$loadname119,$compareres120,$loadname123,$loadname125,$compareres126,$loadname130,$loadname132,$loadname135,$compareres136,$loadname139,$loadname142,$compareres143,$loadname146,$loadname149;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname4=susp.$tmps.$loadname4;$loadname6=susp.$tmps.$loadname6;$loadname9=susp.$tmps.$loadname9;$compareres10=susp.$tmps.$compareres10;$loadname13=susp.$tmps.$loadname13;$loadname16=susp.$tmps.$loadname16;$compareres17=susp.$tmps.$compareres17;$loadname21=susp.$tmps.$loadname21;$loadname24=susp.$tmps.$loadname24;$loadname27=susp.$tmps.$loadname27;$compareres28=susp.$tmps.$compareres28;$loadname31=susp.$tmps.$loadname31;$loadname32=susp.$tmps.$loadname32;$lattr34=susp.$tmps.$lattr34;$binop36=susp.$tmps.$binop36;$loadname37=susp.$tmps.$loadname37;$lattr39=susp.$tmps.$lattr39;$binop40=susp.$tmps.$binop40;$loadname42=susp.$tmps.$loadname42;$compareres43=susp.$tmps.$compareres43;$loadname47=susp.$tmps.$loadname47;$loadname48=susp.$tmps.$loadname48;$lattr50=susp.$tmps.$lattr50;$binop52=susp.$tmps.$binop52;$loadname53=susp.$tmps.$loadname53;$lattr54=susp.$tmps.$lattr54;$binop55=susp.$tmps.$binop55;$loadname57=susp.$tmps.$loadname57;$loadname60=susp.$tmps.$loadname60;$loadname63=susp.$tmps.$loadname63;$loadname66=susp.$tmps.$loadname66;$loadname69=susp.$tmps.$loadname69;$loadname72=susp.$tmps.$loadname72;$compareres73=susp.$tmps.$compareres73;$loadname77=susp.$tmps.$loadname77;$loadname80=susp.$tmps.$loadname80;$loadname83=susp.$tmps.$loadname83;$loadname86=susp.$tmps.$loadname86;$loadname88=susp.$tmps.$loadname88;$compareres89=susp.$tmps.$compareres89;$loadname92=susp.$tmps.$loadname92;$compareres93=susp.$tmps.$compareres93;$loadname97=susp.$tmps.$loadname97;$loadname100=susp.$tmps.$loadname100;$compareres101=susp.$tmps.$compareres101;$loadname104=susp.$tmps.$loadname104;$loadname107=susp.$tmps.$loadname107;$loadname110=susp.$tmps.$loadname110;$loadname113=susp.$tmps.$loadname113;$loadname115=susp.$tmps.$loadname115;$compareres116=susp.$tmps.$compareres116;$loadname119=susp.$tmps.$loadname119;$compareres120=susp.$tmps.$compareres120;$loadname123=susp.$tmps.$loadname123;$loadname125=susp.$tmps.$loadname125;$compareres126=susp.$tmps.$compareres126;$loadname130=susp.$tmps.$loadname130;$loadname132=susp.$tmps.$loadname132;$loadname135=susp.$tmps.$loadname135;$compareres136=susp.$tmps.$compareres136;$loadname139=susp.$tmps.$loadname139;$loadname142=susp.$tmps.$loadname142;$compareres143=susp.$tmps.$compareres143;$loadname146=susp.$tmps.$loadname146;$loadname149=susp.$tmps.$loadname149;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname4":$loadname4,"$loadname6":$loadname6,"$loadname9":$loadname9,"$compareres10":$compareres10,"$loadname13":$loadname13,"$loadname16":$loadname16,"$compareres17":$compareres17,"$loadname21":$loadname21,"$loadname24":$loadname24,"$loadname27":$loadname27,"$compareres28":$compareres28,"$loadname31":$loadname31,"$loadname32":$loadname32,"$lattr34":$lattr34,"$binop36":$binop36,"$loadname37":$loadname37,"$lattr39":$lattr39,"$binop40":$binop40,"$loadname42":$loadname42,"$compareres43":$compareres43,"$loadname47":$loadname47,"$loadname48":$loadname48,"$lattr50":$lattr50,"$binop52":$binop52,"$loadname53":$loadname53,"$lattr54":$lattr54,"$binop55":$binop55,"$loadname57":$loadname57,"$loadname60":$loadname60,"$loadname63":$loadname63,"$loadname66":$loadname66,"$loadname69":$loadname69,"$loadname72":$loadname72,"$compareres73":$compareres73,"$loadname77":$loadname77,"$loadname80":$loadname80,"$loadname83":$loadname83,"$loadname86":$loadname86,"$loadname88":$loadname88,"$compareres89":$compareres89,"$loadname92":$loadname92,"$compareres93":$compareres93,"$loadname97":$loadname97,"$loadname100":$loadname100,"$compareres101":$compareres101,"$loadname104":$loadname104,"$loadname107":$loadname107,"$loadname110":$loadname110,"$loadname113":$loadname113,"$loadname115":$loadname115,"$compareres116":$compareres116,"$loadname119":$loadname119,"$compareres120":$compareres120,"$loadname123":$loadname123,"$loadname125":$loadname125,"$compareres126":$compareres126,"$loadname130":$loadname130,"$loadname132":$loadname132,"$loadname135":$loadname135,"$compareres136":$compareres136,"$loadname139":$loadname139,"$loadname142":$loadname142,"$compareres143":$compareres143,"$loadname146":$loadname146,"$loadname149":$loadname149};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$ret = Sk.builtin.__import__('csinsc',$gbl,$loc,['*'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;Sk.importStar($module1,$loc, $gbl);if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 3;
$currColNo = 0;

$loc.colour=$scope0.$const2;if (Sk.breakpoints('<stdin>.py',4,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',4,0);$susp.$blk = 4;$susp.optional = true;return $susp;}$blk=4;case 4: 

$currLineNo = 4;
$currColNo = 0;

$loc.memory=$scope0.$const3;if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 5;
$currColNo = 0;

$blk=6;case 6: if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: $blk=8;case 8: if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 6;
$currColNo = 0;

var $loadname4=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname4.tp$call)?$loadname4.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname4,undefined,undefined,undefined,[]);$blk=10;case 10: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,0); }var $call5=$ret;

$currLineNo = 6;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 11;$susp.optional = true;return $susp;}$blk=11;case 11: 

$currLineNo = 7;
$currColNo = 0;

var $loadname6=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname6.tp$call)?$loadname6.tp$call([$scope0.$const7],undefined) : Sk.misceval.applyOrSuspend($loadname6,undefined,undefined,undefined,[$scope0.$const7]);$blk=12;case 12: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,0); }var $call8=$ret;

$currLineNo = 7;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',8,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,0);$susp.$blk = 13;$susp.optional = true;return $susp;}$blk=13;case 13: 

$currLineNo = 8;
$currColNo = 0;

var $loadname9=$loc.colour!==undefined?$loc.colour:Sk.misceval.loadname('colour',$gbl);;var $compareres10=null;$ret = Sk.misceval.richCompareBool($loadname9,$scope0.$const2,'Eq', true);$blk=17;case 17: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,3); }$compareres10=Sk.builtin.bool($ret);var $jfalse11=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse11){$blk=16;continue;}$blk=16;case 16: var $jfalse12=($compareres10===false||!Sk.misceval.isTrue($compareres10));if($jfalse12){$blk=15;continue;}if (Sk.breakpoints('<stdin>.py',9,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,4);$susp.$blk = 18;$susp.optional = true;return $susp;}$blk=18;case 18: 

$currLineNo = 9;
$currColNo = 4;

var $loadname13=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname13.tp$call)?$loadname13.tp$call([$scope0.$const14],undefined) : Sk.misceval.applyOrSuspend($loadname13,undefined,undefined,undefined,[$scope0.$const14]);$blk=19;case 19: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,4); }var $call15=$ret;

$currLineNo = 9;
$currColNo = 4;

$blk=14;case 14: if (Sk.breakpoints('<stdin>.py',13,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,0);$susp.$blk = 26;$susp.optional = true;return $susp;}$blk=26;case 26: 

$currLineNo = 13;
$currColNo = 0;

var $loadname24=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname24.tp$call)?$loadname24.tp$call([$scope0.$const25],undefined) : Sk.misceval.applyOrSuspend($loadname24,undefined,undefined,undefined,[$scope0.$const25]);$blk=27;case 27: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,0); }var $call26=$ret;

$currLineNo = 13;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',14,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,0);$susp.$blk = 28;$susp.optional = true;return $susp;}$blk=28;case 28: 

$currLineNo = 14;
$currColNo = 0;

var $loadname27=$loc.memory!==undefined?$loc.memory:Sk.misceval.loadname('memory',$gbl);;var $compareres28=null;$ret = Sk.misceval.richCompareBool($loadname27,$scope0.$const3,'Eq', true);$blk=32;case 32: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,3); }$compareres28=Sk.builtin.bool($ret);var $jfalse29=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse29){$blk=31;continue;}$blk=31;case 31: var $jfalse30=($compareres28===false||!Sk.misceval.isTrue($compareres28));if($jfalse30){$blk=30;continue;}if (Sk.breakpoints('<stdin>.py',15,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,4);$susp.$blk = 33;$susp.optional = true;return $susp;}$blk=33;case 33: 

$currLineNo = 15;
$currColNo = 4;

var $loadname31=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname32=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname32.tp$getattr($scope0.$const33, true);$blk=34;case 34: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname32.sk$attrError() + " has no attribute '" + $scope0.$const33.$jsstr() + "'");
};var $lattr34=$ret;var $binop36=Sk.abstr.numberBinOp($lattr34,$scope0.$const35,'Add');var $loadname37=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname37.tp$getattr($scope0.$const38, true);$blk=35;case 35: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,37); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname37.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr39=$ret;var $binop40=Sk.abstr.numberBinOp($binop36,$lattr39,'Add');$ret = ($loadname31.tp$call)?$loadname31.tp$call([$binop40],undefined) : Sk.misceval.applyOrSuspend($loadname31,undefined,undefined,undefined,[$binop40]);$blk=36;case 36: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,4); }var $call41=$ret;

$currLineNo = 15;
$currColNo = 4;

$blk=29;case 29: if (Sk.breakpoints('<stdin>.py',19,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',19,0);$susp.$blk = 45;$susp.optional = true;return $susp;}$blk=45;case 45: 

$currLineNo = 19;
$currColNo = 0;

var $loadname57=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname57.tp$call)?$loadname57.tp$call([$scope0.$const58],undefined) : Sk.misceval.applyOrSuspend($loadname57,undefined,undefined,undefined,[$scope0.$const58]);$blk=46;case 46: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',19,0); }var $call59=$ret;

$currLineNo = 19;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',20,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,0);$susp.$blk = 47;$susp.optional = true;return $susp;}$blk=47;case 47: 

$currLineNo = 20;
$currColNo = 0;

var $loadname60=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname60.tp$call)?$loadname60.tp$call([$scope0.$const61],undefined) : Sk.misceval.applyOrSuspend($loadname60,undefined,undefined,undefined,[$scope0.$const61]);$blk=48;case 48: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,0); }var $call62=$ret;

$currLineNo = 20;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',21,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',21,0);$susp.$blk = 49;$susp.optional = true;return $susp;}$blk=49;case 49: 

$currLineNo = 21;
$currColNo = 0;

var $loadname63=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname63.tp$call)?$loadname63.tp$call([$scope0.$const64],undefined) : Sk.misceval.applyOrSuspend($loadname63,undefined,undefined,undefined,[$scope0.$const64]);$blk=50;case 50: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,0); }var $call65=$ret;

$currLineNo = 21;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',22,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',22,0);$susp.$blk = 51;$susp.optional = true;return $susp;}$blk=51;case 51: 

$currLineNo = 22;
$currColNo = 0;

var $loadname66=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname66.tp$call)?$loadname66.tp$call([$scope0.$const67],undefined) : Sk.misceval.applyOrSuspend($loadname66,undefined,undefined,undefined,[$scope0.$const67]);$blk=52;case 52: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',22,0); }var $call68=$ret;

$currLineNo = 22;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',23,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',23,0);$susp.$blk = 53;$susp.optional = true;return $susp;}$blk=53;case 53: 

$currLineNo = 23;
$currColNo = 0;

var $loadname69=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname69.tp$call)?$loadname69.tp$call([$scope0.$const70],undefined) : Sk.misceval.applyOrSuspend($loadname69,undefined,undefined,undefined,[$scope0.$const70]);$blk=54;case 54: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',23,9); }var $call71=$ret;

$currLineNo = 23;
$currColNo = 9;

$loc.choice=$call71;if (Sk.breakpoints('<stdin>.py',24,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',24,0);$susp.$blk = 55;$susp.optional = true;return $susp;}$blk=55;case 55: 

$currLineNo = 24;
$currColNo = 0;

var $loadname72=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres73=null;$ret = Sk.misceval.richCompareBool($loadname72,$scope0.$const74,'Eq', true);$blk=59;case 59: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',24,3); }$compareres73=Sk.builtin.bool($ret);var $jfalse75=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse75){$blk=58;continue;}$blk=58;case 58: var $jfalse76=($compareres73===false||!Sk.misceval.isTrue($compareres73));if($jfalse76){$blk=57;continue;}if (Sk.breakpoints('<stdin>.py',25,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',25,4);$susp.$blk = 60;$susp.optional = true;return $susp;}$blk=60;case 60: 

$currLineNo = 25;
$currColNo = 4;

var $loadname77=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname77.tp$call)?$loadname77.tp$call([$scope0.$const78],undefined) : Sk.misceval.applyOrSuspend($loadname77,undefined,undefined,undefined,[$scope0.$const78]);$blk=61;case 61: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',25,4); }var $call79=$ret;

$currLineNo = 25;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',26,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',26,4);$susp.$blk = 62;$susp.optional = true;return $susp;}$blk=62;case 62: 

$currLineNo = 26;
$currColNo = 4;

var $loadname80=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname80.tp$call)?$loadname80.tp$call([$scope0.$const81],undefined) : Sk.misceval.applyOrSuspend($loadname80,undefined,undefined,undefined,[$scope0.$const81]);$blk=63;case 63: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',26,4); }var $call82=$ret;

$currLineNo = 26;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',27,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',27,4);$susp.$blk = 64;$susp.optional = true;return $susp;}$blk=64;case 64: 

$currLineNo = 27;
$currColNo = 4;

var $loadname83=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname83.tp$call)?$loadname83.tp$call([$scope0.$const84],undefined) : Sk.misceval.applyOrSuspend($loadname83,undefined,undefined,undefined,[$scope0.$const84]);$blk=65;case 65: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',27,4); }var $call85=$ret;

$currLineNo = 27;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',28,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',28,4);$susp.$blk = 66;$susp.optional = true;return $susp;}$blk=66;case 66: 

$currLineNo = 28;
$currColNo = 4;

var $loadname86=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname86.tp$call)?$loadname86.tp$call([$scope0.$const70],undefined) : Sk.misceval.applyOrSuspend($loadname86,undefined,undefined,undefined,[$scope0.$const70]);$blk=67;case 67: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',28,20); }var $call87=$ret;

$currLineNo = 28;
$currColNo = 20;

$loc.colour_choice=$call87;if (Sk.breakpoints('<stdin>.py',29,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',29,4);$susp.$blk = 68;$susp.optional = true;return $susp;}$blk=68;case 68: 

$currLineNo = 29;
$currColNo = 4;

var $loadname88=$loc.colour_choice!==undefined?$loc.colour_choice:Sk.misceval.loadname('colour_choice',$gbl);;var $compareres89=null;$ret = Sk.misceval.richCompareBool($loadname88,$scope0.$const74,'Eq', true);$blk=72;case 72: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',29,7); }$compareres89=Sk.builtin.bool($ret);var $jfalse90=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse90){$blk=71;continue;}$blk=71;case 71: var $jfalse91=($compareres89===false||!Sk.misceval.isTrue($compareres89));if($jfalse91){$blk=70;continue;}if (Sk.breakpoints('<stdin>.py',30,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',30,8);$susp.$blk = 73;$susp.optional = true;return $susp;}$blk=73;case 73: 

$currLineNo = 30;
$currColNo = 8;

$loc.colour=$scope0.$const2;$blk=69;case 69: $blk=56;case 56: if (Sk.breakpoints('<stdin>.py',50,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',50,0);$susp.$blk = 117;$susp.optional = true;return $susp;}$blk=117;case 117: 

$currLineNo = 50;
$currColNo = 0;

$blk=6; continue;if (Sk.breakpoints('<stdin>.py',51,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',51,0);$susp.$blk = 118;$susp.optional = true;return $susp;}$blk=118; continue;case 15: if (Sk.breakpoints('<stdin>.py',10,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,5);$susp.$blk = 20;$susp.optional = true;return $susp;}$blk=20;case 20: 

$currLineNo = 10;
$currColNo = 5;

var $loadname16=$loc.colour!==undefined?$loc.colour:Sk.misceval.loadname('colour',$gbl);;var $compareres17=null;$ret = Sk.misceval.richCompareBool($loadname16,$scope0.$const18,'Eq', true);$blk=23;case 23: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,5); }$compareres17=Sk.builtin.bool($ret);var $jfalse19=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse19){$blk=22;continue;}$blk=22;case 22: var $jfalse20=($compareres17===false||!Sk.misceval.isTrue($compareres17));if($jfalse20){$blk=21;continue;}if (Sk.breakpoints('<stdin>.py',11,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,4);$susp.$blk = 24;$susp.optional = true;return $susp;}$blk=24;case 24: 

$currLineNo = 11;
$currColNo = 4;

var $loadname21=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname21.tp$call)?$loadname21.tp$call([$scope0.$const22],undefined) : Sk.misceval.applyOrSuspend($loadname21,undefined,undefined,undefined,[$scope0.$const22]);$blk=25;case 25: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,4); }var $call23=$ret;

$currLineNo = 11;
$currColNo = 4;

$blk=21;case 21: $blk=14; continue;case 30: if (Sk.breakpoints('<stdin>.py',16,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,5);$susp.$blk = 37;$susp.optional = true;return $susp;}$blk=37;case 37: 

$currLineNo = 16;
$currColNo = 5;

var $loadname42=$loc.memory!==undefined?$loc.memory:Sk.misceval.loadname('memory',$gbl);;var $compareres43=null;$ret = Sk.misceval.richCompareBool($loadname42,$scope0.$const44,'Eq', true);$blk=40;case 40: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,5); }$compareres43=Sk.builtin.bool($ret);var $jfalse45=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse45){$blk=39;continue;}$blk=39;case 39: var $jfalse46=($compareres43===false||!Sk.misceval.isTrue($compareres43));if($jfalse46){$blk=38;continue;}if (Sk.breakpoints('<stdin>.py',17,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,4);$susp.$blk = 41;$susp.optional = true;return $susp;}$blk=41;case 41: 

$currLineNo = 17;
$currColNo = 4;

var $loadname47=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname48=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname48.tp$getattr($scope0.$const49, true);$blk=42;case 42: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname48.sk$attrError() + " has no attribute '" + $scope0.$const49.$jsstr() + "'");
};var $lattr50=$ret;var $binop52=Sk.abstr.numberBinOp($lattr50,$scope0.$const51,'Add');var $loadname53=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname53.tp$getattr($scope0.$const38, true);$blk=43;case 43: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,35); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname53.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr54=$ret;var $binop55=Sk.abstr.numberBinOp($binop52,$lattr54,'Add');$ret = ($loadname47.tp$call)?$loadname47.tp$call([$binop55],undefined) : Sk.misceval.applyOrSuspend($loadname47,undefined,undefined,undefined,[$binop55]);$blk=44;case 44: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,4); }var $call56=$ret;

$currLineNo = 17;
$currColNo = 4;

$blk=38;case 38: $blk=29; continue;case 57: if (Sk.breakpoints('<stdin>.py',35,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',35,5);$susp.$blk = 82;$susp.optional = true;return $susp;}$blk=82;case 82: 

$currLineNo = 35;
$currColNo = 5;

var $loadname100=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres101=null;$ret = Sk.misceval.richCompareBool($loadname100,$scope0.$const94,'Eq', true);$blk=86;case 86: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',35,5); }$compareres101=Sk.builtin.bool($ret);var $jfalse102=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse102){$blk=85;continue;}$blk=85;case 85: var $jfalse103=($compareres101===false||!Sk.misceval.isTrue($compareres101));if($jfalse103){$blk=84;continue;}if (Sk.breakpoints('<stdin>.py',36,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',36,4);$susp.$blk = 87;$susp.optional = true;return $susp;}$blk=87;case 87: 

$currLineNo = 36;
$currColNo = 4;

var $loadname104=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname104.tp$call)?$loadname104.tp$call([$scope0.$const105],undefined) : Sk.misceval.applyOrSuspend($loadname104,undefined,undefined,undefined,[$scope0.$const105]);$blk=88;case 88: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',36,4); }var $call106=$ret;

$currLineNo = 36;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',37,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',37,4);$susp.$blk = 89;$susp.optional = true;return $susp;}$blk=89;case 89: 

$currLineNo = 37;
$currColNo = 4;

var $loadname107=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname107.tp$call)?$loadname107.tp$call([$scope0.$const108],undefined) : Sk.misceval.applyOrSuspend($loadname107,undefined,undefined,undefined,[$scope0.$const108]);$blk=90;case 90: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',37,4); }var $call109=$ret;

$currLineNo = 37;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',38,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',38,4);$susp.$blk = 91;$susp.optional = true;return $susp;}$blk=91;case 91: 

$currLineNo = 38;
$currColNo = 4;

var $loadname110=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname110.tp$call)?$loadname110.tp$call([$scope0.$const111],undefined) : Sk.misceval.applyOrSuspend($loadname110,undefined,undefined,undefined,[$scope0.$const111]);$blk=92;case 92: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',38,4); }var $call112=$ret;

$currLineNo = 38;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',39,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',39,4);$susp.$blk = 93;$susp.optional = true;return $susp;}$blk=93;case 93: 

$currLineNo = 39;
$currColNo = 4;

var $loadname113=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname113.tp$call)?$loadname113.tp$call([$scope0.$const70],undefined) : Sk.misceval.applyOrSuspend($loadname113,undefined,undefined,undefined,[$scope0.$const70]);$blk=94;case 94: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',39,20); }var $call114=$ret;

$currLineNo = 39;
$currColNo = 20;

$loc.memory_choice=$call114;if (Sk.breakpoints('<stdin>.py',40,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',40,4);$susp.$blk = 95;$susp.optional = true;return $susp;}$blk=95;case 95: 

$currLineNo = 40;
$currColNo = 4;

var $loadname115=$loc.memory_choice!==undefined?$loc.memory_choice:Sk.misceval.loadname('memory_choice',$gbl);;var $compareres116=null;$ret = Sk.misceval.richCompareBool($loadname115,$scope0.$const74,'Eq', true);$blk=99;case 99: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',40,7); }$compareres116=Sk.builtin.bool($ret);var $jfalse117=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse117){$blk=98;continue;}$blk=98;case 98: var $jfalse118=($compareres116===false||!Sk.misceval.isTrue($compareres116));if($jfalse118){$blk=97;continue;}if (Sk.breakpoints('<stdin>.py',41,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',41,8);$susp.$blk = 100;$susp.optional = true;return $susp;}$blk=100;case 100: 

$currLineNo = 41;
$currColNo = 8;

$loc.memory=$scope0.$const3;$blk=96;case 96: $blk=83;case 83: $blk=56; continue;case 70: if (Sk.breakpoints('<stdin>.py',31,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',31,9);$susp.$blk = 74;$susp.optional = true;return $susp;}$blk=74;case 74: 

$currLineNo = 31;
$currColNo = 9;

var $loadname92=$loc.colour_choice!==undefined?$loc.colour_choice:Sk.misceval.loadname('colour_choice',$gbl);;var $compareres93=null;$ret = Sk.misceval.richCompareBool($loadname92,$scope0.$const94,'Eq', true);$blk=78;case 78: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',31,9); }$compareres93=Sk.builtin.bool($ret);var $jfalse95=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse95){$blk=77;continue;}$blk=77;case 77: var $jfalse96=($compareres93===false||!Sk.misceval.isTrue($compareres93));if($jfalse96){$blk=76;continue;}if (Sk.breakpoints('<stdin>.py',32,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',32,8);$susp.$blk = 79;$susp.optional = true;return $susp;}$blk=79;case 79: 

$currLineNo = 32;
$currColNo = 8;

$loc.colour=$scope0.$const18;$blk=75;case 75: $blk=69; continue;case 76: if (Sk.breakpoints('<stdin>.py',34,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',34,8);$susp.$blk = 80;$susp.optional = true;return $susp;}$blk=80;case 80: 

$currLineNo = 34;
$currColNo = 8;

var $loadname97=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname97.tp$call)?$loadname97.tp$call([$scope0.$const98],undefined) : Sk.misceval.applyOrSuspend($loadname97,undefined,undefined,undefined,[$scope0.$const98]);$blk=81;case 81: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',34,8); }var $call99=$ret;

$currLineNo = 34;
$currColNo = 8;

$blk=75; continue;case 84: if (Sk.breakpoints('<stdin>.py',46,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',46,5);$susp.$blk = 109;$susp.optional = true;return $susp;}$blk=109;case 109: 

$currLineNo = 46;
$currColNo = 5;

var $loadname125=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres126=null;$ret = Sk.misceval.richCompareBool($loadname125,$scope0.$const127,'Eq', true);$blk=113;case 113: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',46,5); }$compareres126=Sk.builtin.bool($ret);var $jfalse128=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse128){$blk=112;continue;}$blk=112;case 112: var $jfalse129=($compareres126===false||!Sk.misceval.isTrue($compareres126));if($jfalse129){$blk=111;continue;}if (Sk.breakpoints('<stdin>.py',47,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',47,4);$susp.$blk = 114;$susp.optional = true;return $susp;}$blk=114;case 114: 

$currLineNo = 47;
$currColNo = 4;

$blk=119; continue;$blk=110;case 119: if (Sk.breakpoints('<stdin>.py',51,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',51,0);$susp.$blk = 120;$susp.optional = true;return $susp;}$blk=120;case 120: $blk=121;case 121: if (Sk.breakpoints('<stdin>.py',52,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',52,0);$susp.$blk = 122;$susp.optional = true;return $susp;}$blk=122;case 122: 

$currLineNo = 52;
$currColNo = 0;

var $loadname132=$loc.playFreeSoundOrg!==undefined?$loc.playFreeSoundOrg:Sk.misceval.loadname('playFreeSoundOrg',$gbl);;$ret = ($loadname132.tp$call)?$loadname132.tp$call([$scope0.$const133],undefined) : Sk.misceval.applyOrSuspend($loadname132,undefined,undefined,undefined,[$scope0.$const133]);$blk=123;case 123: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',52,0); }var $call134=$ret;

$currLineNo = 52;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',53,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',53,0);$susp.$blk = 124;$susp.optional = true;return $susp;}$blk=124;case 124: 

$currLineNo = 53;
$currColNo = 0;

var $loadname135=$loc.memory!==undefined?$loc.memory:Sk.misceval.loadname('memory',$gbl);;var $compareres136=null;$ret = Sk.misceval.richCompareBool($loadname135,$scope0.$const3,'Eq', true);$blk=128;case 128: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',53,3); }$compareres136=Sk.builtin.bool($ret);var $jfalse137=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse137){$blk=127;continue;}$blk=127;case 127: var $jfalse138=($compareres136===false||!Sk.misceval.isTrue($compareres136));if($jfalse138){$blk=126;continue;}if (Sk.breakpoints('<stdin>.py',54,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',54,4);$susp.$blk = 129;$susp.optional = true;return $susp;}$blk=129;case 129: 

$currLineNo = 54;
$currColNo = 4;

var $loadname139=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname139.tp$call)?$loadname139.tp$call([$scope0.$const140],undefined) : Sk.misceval.applyOrSuspend($loadname139,undefined,undefined,undefined,[$scope0.$const140]);$blk=130;case 130: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',54,4); }var $call141=$ret;

$currLineNo = 54;
$currColNo = 4;

$blk=125;case 125: if (Sk.breakpoints('<stdin>.py',57,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',57,0);$susp.$blk = 137;$susp.optional = true;return $susp;}$blk=137;case 137: 

$currLineNo = 57;
$currColNo = 0;

var $loadname149=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname149.tp$call)?$loadname149.tp$call([$scope0.$const150],undefined) : Sk.misceval.applyOrSuspend($loadname149,undefined,undefined,undefined,[$scope0.$const150]);$blk=138;case 138: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',57,0); }var $call151=$ret;

$currLineNo = 57;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');case 97: if (Sk.breakpoints('<stdin>.py',42,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',42,9);$susp.$blk = 101;$susp.optional = true;return $susp;}$blk=101;case 101: 

$currLineNo = 42;
$currColNo = 9;

var $loadname119=$loc.memory_choice!==undefined?$loc.memory_choice:Sk.misceval.loadname('memory_choice',$gbl);;var $compareres120=null;$ret = Sk.misceval.richCompareBool($loadname119,$scope0.$const94,'Eq', true);$blk=105;case 105: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',42,9); }$compareres120=Sk.builtin.bool($ret);var $jfalse121=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse121){$blk=104;continue;}$blk=104;case 104: var $jfalse122=($compareres120===false||!Sk.misceval.isTrue($compareres120));if($jfalse122){$blk=103;continue;}if (Sk.breakpoints('<stdin>.py',43,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',43,8);$susp.$blk = 106;$susp.optional = true;return $susp;}$blk=106;case 106: 

$currLineNo = 43;
$currColNo = 8;

$loc.memory=$scope0.$const44;$blk=102;case 102: $blk=96; continue;case 103: if (Sk.breakpoints('<stdin>.py',45,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',45,8);$susp.$blk = 107;$susp.optional = true;return $susp;}$blk=107;case 107: 

$currLineNo = 45;
$currColNo = 8;

var $loadname123=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname123.tp$call)?$loadname123.tp$call([$scope0.$const98],undefined) : Sk.misceval.applyOrSuspend($loadname123,undefined,undefined,undefined,[$scope0.$const98]);$blk=108;case 108: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',45,8); }var $call124=$ret;

$currLineNo = 45;
$currColNo = 8;

$blk=102; continue;case 110: $blk=83; continue;case 111: if (Sk.breakpoints('<stdin>.py',49,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',49,4);$susp.$blk = 115;$susp.optional = true;return $susp;}$blk=115;case 115: 

$currLineNo = 49;
$currColNo = 4;

var $loadname130=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname130.tp$call)?$loadname130.tp$call([$scope0.$const98],undefined) : Sk.misceval.applyOrSuspend($loadname130,undefined,undefined,undefined,[$scope0.$const98]);$blk=116;case 116: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',49,4); }var $call131=$ret;

$currLineNo = 49;
$currColNo = 4;

$blk=110; continue;case 118: 

$currLineNo = 51;
$currColNo = 0;

$blk=119; continue;case 126: if (Sk.breakpoints('<stdin>.py',55,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',55,5);$susp.$blk = 131;$susp.optional = true;return $susp;}$blk=131;case 131: 

$currLineNo = 55;
$currColNo = 5;

var $loadname142=$loc.memory!==undefined?$loc.memory:Sk.misceval.loadname('memory',$gbl);;var $compareres143=null;$ret = Sk.misceval.richCompareBool($loadname142,$scope0.$const44,'Eq', true);$blk=134;case 134: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',55,5); }$compareres143=Sk.builtin.bool($ret);var $jfalse144=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse144){$blk=133;continue;}$blk=133;case 133: var $jfalse145=($compareres143===false||!Sk.misceval.isTrue($compareres143));if($jfalse145){$blk=132;continue;}if (Sk.breakpoints('<stdin>.py',56,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',56,4);$susp.$blk = 135;$susp.optional = true;return $susp;}$blk=135;case 135: 

$currLineNo = 56;
$currColNo = 4;

var $loadname146=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname146.tp$call)?$loadname146.tp$call([$scope0.$const147],undefined) : Sk.misceval.applyOrSuspend($loadname146,undefined,undefined,undefined,[$scope0.$const147]);$blk=136;case 136: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',56,4); }var $call148=$ret;

$currLineNo = 56;
$currColNo = 4;

$blk=132;case 132: $blk=125; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const2 = new Sk.builtin.str("colour_white");$scope0.$const3 = new Sk.builtin.str("memory_256");$scope0.$const7 = new Sk.builtin.str("Your tablet choice:");$scope0.$const14 = new Sk.builtin.str("samples/images/tablet_white.png");$scope0.$const18 = new Sk.builtin.str("colour_gold");$scope0.$const22 = new Sk.builtin.str("samples/images/tablet_gold.png");$scope0.$const25 = new Sk.builtin.str("Memory size:");$scope0.$const33 = new Sk.builtin.str('yellow');$scope0.$const35 = new Sk.builtin.str("256 GB");$scope0.$const38 = new Sk.builtin.str('reset');$scope0.$const44 = new Sk.builtin.str("memory_512");$scope0.$const49 = new Sk.builtin.str('cyan');$scope0.$const51 = new Sk.builtin.str("512 GB");$scope0.$const58 = new Sk.builtin.str("=== Tablet design menu ===");$scope0.$const61 = new Sk.builtin.str("[1] Select Colour");$scope0.$const64 = new Sk.builtin.str("[2] Select Memory Size");$scope0.$const67 = new Sk.builtin.str("[3] Finalise and get quote");$scope0.$const70 = new Sk.builtin.str("Enter your choice:");$scope0.$const74 = new Sk.builtin.str("1");$scope0.$const78 = new Sk.builtin.str("=== Choose your colour ===");$scope0.$const81 = new Sk.builtin.str("[1] White");$scope0.$const84 = new Sk.builtin.str("[2] Gold");$scope0.$const94 = new Sk.builtin.str("2");$scope0.$const98 = new Sk.builtin.str("Sorry, invalid option");$scope0.$const105 = new Sk.builtin.str("=== Choose your memory size ===");$scope0.$const108 = new Sk.builtin.str("[1] 256 GB");$scope0.$const111 = new Sk.builtin.str("[2] 512 GB");$scope0.$const127 = new Sk.builtin.str("3");$scope0.$const133 = new Sk.builtin.int_(47962);$scope0.$const140 = new Sk.builtin.str("Your quote is: $700");$scope0.$const147 = new Sk.builtin.str("Your quote is: $1000");$scope0.$const150 = new Sk.builtin.str("Press [Enter] to exit");
return $scope0;}();
$compiledmod;