Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname4,$loadname6,$loadname9,$compareres10,$loadname13,$loadname16,$compareres17,$loadname21,$loadname24,$loadname27,$compareres28,$loadname31,$loadname32,$loadname31,$loadname32,$lattr34,$loadname36,$loadname31,$loadname32,$lattr34,$loadname36,$lattr38,$loadname41,$compareres42,$loadname46,$loadname49,$loadname52,$loadname55,$loadname58,$loadname61,$loadname64,$loadname67,$compareres68,$loadname72,$compareres73,$loadname77,$compareres78,$loadname82,$compareres83;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname4=susp.$tmps.$loadname4;$loadname6=susp.$tmps.$loadname6;$loadname9=susp.$tmps.$loadname9;$compareres10=susp.$tmps.$compareres10;$loadname13=susp.$tmps.$loadname13;$loadname16=susp.$tmps.$loadname16;$compareres17=susp.$tmps.$compareres17;$loadname21=susp.$tmps.$loadname21;$loadname24=susp.$tmps.$loadname24;$loadname27=susp.$tmps.$loadname27;$compareres28=susp.$tmps.$compareres28;$loadname31=susp.$tmps.$loadname31;$loadname32=susp.$tmps.$loadname32;$lattr34=susp.$tmps.$lattr34;$loadname36=susp.$tmps.$loadname36;$lattr38=susp.$tmps.$lattr38;$loadname41=susp.$tmps.$loadname41;$compareres42=susp.$tmps.$compareres42;$loadname46=susp.$tmps.$loadname46;$loadname49=susp.$tmps.$loadname49;$loadname52=susp.$tmps.$loadname52;$loadname55=susp.$tmps.$loadname55;$loadname58=susp.$tmps.$loadname58;$loadname61=susp.$tmps.$loadname61;$loadname64=susp.$tmps.$loadname64;$loadname67=susp.$tmps.$loadname67;$compareres68=susp.$tmps.$compareres68;$loadname72=susp.$tmps.$loadname72;$compareres73=susp.$tmps.$compareres73;$loadname77=susp.$tmps.$loadname77;$compareres78=susp.$tmps.$compareres78;$loadname82=susp.$tmps.$loadname82;$compareres83=susp.$tmps.$compareres83;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname4":$loadname4,"$loadname6":$loadname6,"$loadname9":$loadname9,"$compareres10":$compareres10,"$loadname13":$loadname13,"$loadname16":$loadname16,"$compareres17":$compareres17,"$loadname21":$loadname21,"$loadname24":$loadname24,"$loadname27":$loadname27,"$compareres28":$compareres28,"$loadname31":$loadname31,"$loadname32":$loadname32,"$lattr34":$lattr34,"$loadname36":$loadname36,"$lattr38":$lattr38,"$loadname41":$loadname41,"$compareres42":$compareres42,"$loadname46":$loadname46,"$loadname49":$loadname49,"$loadname52":$loadname52,"$loadname55":$loadname55,"$loadname58":$loadname58,"$loadname61":$loadname61,"$loadname64":$loadname64,"$loadname67":$loadname67,"$compareres68":$compareres68,"$loadname72":$loadname72,"$compareres73":$compareres73,"$loadname77":$loadname77,"$compareres78":$compareres78,"$loadname82":$loadname82,"$compareres83":$compareres83};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$ret = Sk.builtin.__import__('csinsc',$gbl,$loc,['*'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;Sk.importStar($module1,$loc, $gbl);if (Sk.breakpoints('<stdin>.py',2,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',2,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 2;
$currColNo = 0;

$loc.shipping=$scope0.$const2;if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 4;$susp.optional = true;return $susp;}$blk=4;case 4: 

$currLineNo = 3;
$currColNo = 0;

$loc.item=$scope0.$const3;if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

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

var $loadname9=$loc.item!==undefined?$loc.item:Sk.misceval.loadname('item',$gbl);;var $compareres10=null;$ret = Sk.misceval.richCompareBool($loadname9,$scope0.$const3,'Eq', true);$blk=17;case 17: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,3); }$compareres10=Sk.builtin.bool($ret);var $jfalse11=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse11){$blk=16;continue;}$blk=16;case 16: var $jfalse12=($compareres10===false||!Sk.misceval.isTrue($compareres10));if($jfalse12){$blk=15;continue;}if (Sk.breakpoints('<stdin>.py',9,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,4);$susp.$blk = 18;$susp.optional = true;return $susp;}$blk=18;case 18: 

$currLineNo = 9;
$currColNo = 4;

var $loadname13=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname13.tp$call)?$loadname13.tp$call([$scope0.$const14],undefined) : Sk.misceval.applyOrSuspend($loadname13,undefined,undefined,undefined,[$scope0.$const14]);$blk=19;case 19: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,4); }var $call15=$ret;

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

var $loadname27=$loc.shipping!==undefined?$loc.shipping:Sk.misceval.loadname('shipping',$gbl);;var $compareres28=null;$ret = Sk.misceval.richCompareBool($loadname27,$scope0.$const2,'Eq', true);$blk=32;case 32: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,3); }$compareres28=Sk.builtin.bool($ret);var $jfalse29=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse29){$blk=31;continue;}$blk=31;case 31: var $jfalse30=($compareres28===false||!Sk.misceval.isTrue($compareres28));if($jfalse30){$blk=30;continue;}if (Sk.breakpoints('<stdin>.py',15,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,4);$susp.$blk = 33;$susp.optional = true;return $susp;}$blk=33;case 33: 

$currLineNo = 15;
$currColNo = 4;

var $loadname31=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname32=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname32.tp$getattr($scope0.$const33, true);$blk=34;case 34: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname32.sk$attrError() + " has no attribute '" + $scope0.$const33.$jsstr() + "'");
};var $lattr34=$ret;var $loadname36=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname36.tp$getattr($scope0.$const37, true);$blk=35;case 35: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,36); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname36.sk$attrError() + " has no attribute '" + $scope0.$const37.$jsstr() + "'");
};var $lattr38=$ret;$ret = ($loadname31.tp$call)?$loadname31.tp$call([$lattr34,$scope0.$const35,$lattr38],['sep',$scope0.$const39]) : Sk.misceval.applyOrSuspend($loadname31,undefined,undefined,['sep',$scope0.$const39],[$lattr34,$scope0.$const35,$lattr38]);$blk=36;case 36: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,4); }var $call40=$ret;

$currLineNo = 15;
$currColNo = 4;

$blk=29;case 29: if (Sk.breakpoints('<stdin>.py',19,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',19,0);$susp.$blk = 43;$susp.optional = true;return $susp;}$blk=43;case 43: 

$currLineNo = 19;
$currColNo = 0;

var $loadname49=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname49.tp$call)?$loadname49.tp$call([$scope0.$const50],undefined) : Sk.misceval.applyOrSuspend($loadname49,undefined,undefined,undefined,[$scope0.$const50]);$blk=44;case 44: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',19,0); }var $call51=$ret;

$currLineNo = 19;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',20,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,0);$susp.$blk = 45;$susp.optional = true;return $susp;}$blk=45;case 45: 

$currLineNo = 20;
$currColNo = 0;

var $loadname52=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname52.tp$call)?$loadname52.tp$call([$scope0.$const53],undefined) : Sk.misceval.applyOrSuspend($loadname52,undefined,undefined,undefined,[$scope0.$const53]);$blk=46;case 46: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,0); }var $call54=$ret;

$currLineNo = 20;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',21,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',21,0);$susp.$blk = 47;$susp.optional = true;return $susp;}$blk=47;case 47: 

$currLineNo = 21;
$currColNo = 0;

var $loadname55=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname55.tp$call)?$loadname55.tp$call([$scope0.$const56],undefined) : Sk.misceval.applyOrSuspend($loadname55,undefined,undefined,undefined,[$scope0.$const56]);$blk=48;case 48: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,0); }var $call57=$ret;

$currLineNo = 21;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',22,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',22,0);$susp.$blk = 49;$susp.optional = true;return $susp;}$blk=49;case 49: 

$currLineNo = 22;
$currColNo = 0;

var $loadname58=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname58.tp$call)?$loadname58.tp$call([$scope0.$const59],undefined) : Sk.misceval.applyOrSuspend($loadname58,undefined,undefined,undefined,[$scope0.$const59]);$blk=50;case 50: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',22,0); }var $call60=$ret;

$currLineNo = 22;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',23,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',23,0);$susp.$blk = 51;$susp.optional = true;return $susp;}$blk=51;case 51: 

$currLineNo = 23;
$currColNo = 0;

var $loadname61=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname61.tp$call)?$loadname61.tp$call([$scope0.$const62],undefined) : Sk.misceval.applyOrSuspend($loadname61,undefined,undefined,undefined,[$scope0.$const62]);$blk=52;case 52: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',23,0); }var $call63=$ret;

$currLineNo = 23;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',25,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',25,0);$susp.$blk = 53;$susp.optional = true;return $susp;}$blk=53;case 53: 

$currLineNo = 25;
$currColNo = 0;

var $loadname64=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname64.tp$call)?$loadname64.tp$call([$scope0.$const65],undefined) : Sk.misceval.applyOrSuspend($loadname64,undefined,undefined,undefined,[$scope0.$const65]);$blk=54;case 54: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',25,9); }var $call66=$ret;

$currLineNo = 25;
$currColNo = 9;

$loc.choice=$call66;if (Sk.breakpoints('<stdin>.py',26,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',26,0);$susp.$blk = 55;$susp.optional = true;return $susp;}$blk=55;case 55: 

$currLineNo = 26;
$currColNo = 0;

var $loadname67=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres68=null;$ret = Sk.misceval.richCompareBool($loadname67,$scope0.$const69,'Eq', true);$blk=59;case 59: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',26,3); }$compareres68=Sk.builtin.bool($ret);var $jfalse70=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse70){$blk=58;continue;}$blk=58;case 58: var $jfalse71=($compareres68===false||!Sk.misceval.isTrue($compareres68));if($jfalse71){$blk=57;continue;}if (Sk.breakpoints('<stdin>.py',27,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',27,4);$susp.$blk = 60;$susp.optional = true;return $susp;}$blk=60;case 60: 

$currLineNo = 27;
$currColNo = 4;

$loc.item=$scope0.$const3;$blk=56;case 56: if (Sk.breakpoints('<stdin>.py',34,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',34,0);$susp.$blk = 78;$susp.optional = true;return $susp;}$blk=78;case 78: 

$currLineNo = 34;
$currColNo = 0;

$blk=6; continue;return $loc; continue;case 15: if (Sk.breakpoints('<stdin>.py',10,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,5);$susp.$blk = 20;$susp.optional = true;return $susp;}$blk=20;case 20: 

$currLineNo = 10;
$currColNo = 5;

var $loadname16=$loc.item!==undefined?$loc.item:Sk.misceval.loadname('item',$gbl);;var $compareres17=null;$ret = Sk.misceval.richCompareBool($loadname16,$scope0.$const18,'Eq', true);$blk=23;case 23: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,5); }$compareres17=Sk.builtin.bool($ret);var $jfalse19=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse19){$blk=22;continue;}$blk=22;case 22: var $jfalse20=($compareres17===false||!Sk.misceval.isTrue($compareres17));if($jfalse20){$blk=21;continue;}if (Sk.breakpoints('<stdin>.py',11,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,4);$susp.$blk = 24;$susp.optional = true;return $susp;}$blk=24;case 24: 

$currLineNo = 11;
$currColNo = 4;

var $loadname21=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname21.tp$call)?$loadname21.tp$call([$scope0.$const22],undefined) : Sk.misceval.applyOrSuspend($loadname21,undefined,undefined,undefined,[$scope0.$const22]);$blk=25;case 25: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,4); }var $call23=$ret;

$currLineNo = 11;
$currColNo = 4;

$blk=21;case 21: $blk=14; continue;case 30: if (Sk.breakpoints('<stdin>.py',16,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,5);$susp.$blk = 37;$susp.optional = true;return $susp;}$blk=37;case 37: 

$currLineNo = 16;
$currColNo = 5;

var $loadname41=$loc.shipping!==undefined?$loc.shipping:Sk.misceval.loadname('shipping',$gbl);;var $compareres42=null;$ret = Sk.misceval.richCompareBool($loadname41,$scope0.$const43,'Eq', true);$blk=40;case 40: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,5); }$compareres42=Sk.builtin.bool($ret);var $jfalse44=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse44){$blk=39;continue;}$blk=39;case 39: var $jfalse45=($compareres42===false||!Sk.misceval.isTrue($compareres42));if($jfalse45){$blk=38;continue;}if (Sk.breakpoints('<stdin>.py',17,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,4);$susp.$blk = 41;$susp.optional = true;return $susp;}$blk=41;case 41: 

$currLineNo = 17;
$currColNo = 4;

var $loadname46=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname46.tp$call)?$loadname46.tp$call([$scope0.$const47],undefined) : Sk.misceval.applyOrSuspend($loadname46,undefined,undefined,undefined,[$scope0.$const47]);$blk=42;case 42: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,4); }var $call48=$ret;

$currLineNo = 17;
$currColNo = 4;

$blk=38;case 38: $blk=29; continue;case 57: if (Sk.breakpoints('<stdin>.py',28,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',28,5);$susp.$blk = 61;$susp.optional = true;return $susp;}$blk=61;case 61: 

$currLineNo = 28;
$currColNo = 5;

var $loadname72=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres73=null;$ret = Sk.misceval.richCompareBool($loadname72,$scope0.$const74,'Eq', true);$blk=65;case 65: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',28,5); }$compareres73=Sk.builtin.bool($ret);var $jfalse75=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse75){$blk=64;continue;}$blk=64;case 64: var $jfalse76=($compareres73===false||!Sk.misceval.isTrue($compareres73));if($jfalse76){$blk=63;continue;}if (Sk.breakpoints('<stdin>.py',29,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',29,4);$susp.$blk = 66;$susp.optional = true;return $susp;}$blk=66;case 66: 

$currLineNo = 29;
$currColNo = 4;

$loc.item=$scope0.$const18;$blk=62;case 62: $blk=56; continue;case 63: if (Sk.breakpoints('<stdin>.py',30,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',30,5);$susp.$blk = 67;$susp.optional = true;return $susp;}$blk=67;case 67: 

$currLineNo = 30;
$currColNo = 5;

var $loadname77=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres78=null;$ret = Sk.misceval.richCompareBool($loadname77,$scope0.$const79,'Eq', true);$blk=71;case 71: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',30,5); }$compareres78=Sk.builtin.bool($ret);var $jfalse80=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse80){$blk=70;continue;}$blk=70;case 70: var $jfalse81=($compareres78===false||!Sk.misceval.isTrue($compareres78));if($jfalse81){$blk=69;continue;}if (Sk.breakpoints('<stdin>.py',31,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',31,4);$susp.$blk = 72;$susp.optional = true;return $susp;}$blk=72;case 72: 

$currLineNo = 31;
$currColNo = 4;

$loc.shipping=$scope0.$const2;$blk=68;case 68: $blk=62; continue;case 69: if (Sk.breakpoints('<stdin>.py',32,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',32,5);$susp.$blk = 73;$susp.optional = true;return $susp;}$blk=73;case 73: 

$currLineNo = 32;
$currColNo = 5;

var $loadname82=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres83=null;$ret = Sk.misceval.richCompareBool($loadname82,$scope0.$const84,'Eq', true);$blk=76;case 76: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',32,5); }$compareres83=Sk.builtin.bool($ret);var $jfalse85=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse85){$blk=75;continue;}$blk=75;case 75: var $jfalse86=($compareres83===false||!Sk.misceval.isTrue($compareres83));if($jfalse86){$blk=74;continue;}if (Sk.breakpoints('<stdin>.py',33,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',33,4);$susp.$blk = 77;$susp.optional = true;return $susp;}$blk=77;case 77: 

$currLineNo = 33;
$currColNo = 4;

$loc.shipping=$scope0.$const43;$blk=74;case 74: $blk=68; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const2 = new Sk.builtin.str("shipping_free");$scope0.$const3 = new Sk.builtin.str("item_balloon");$scope0.$const7 = new Sk.builtin.str("Your item:");$scope0.$const14 = new Sk.builtin.str("\ud83c\udf88");$scope0.$const18 = new Sk.builtin.str("item_popper");$scope0.$const22 = new Sk.builtin.str("\ud83c\udf89");$scope0.$const25 = new Sk.builtin.str("Shipping mode:");$scope0.$const33 = new Sk.builtin.str('yellow');$scope0.$const35 = new Sk.builtin.str("Free!");$scope0.$const37 = new Sk.builtin.str('reset');$scope0.$const39 = new Sk.builtin.str("");$scope0.$const43 = new Sk.builtin.str("shipping_standard");$scope0.$const47 = new Sk.builtin.str("$5");$scope0.$const50 = new Sk.builtin.str("==== Menu ====");$scope0.$const53 = new Sk.builtin.str("[1] Change item to balloon");$scope0.$const56 = new Sk.builtin.str("[2] Change item to firecracker");$scope0.$const59 = new Sk.builtin.str("[3] Use free shipping");$scope0.$const62 = new Sk.builtin.str("[4] Use standard shipping");$scope0.$const65 = new Sk.builtin.str("Enter your choice:");$scope0.$const69 = new Sk.builtin.str("1");$scope0.$const74 = new Sk.builtin.str("2");$scope0.$const79 = new Sk.builtin.str("3");$scope0.$const84 = new Sk.builtin.str("4");
return $scope0;}();
$compiledmod;