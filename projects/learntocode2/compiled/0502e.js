Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname2,$compareres3,$loadname7,$loadname10,$compareres11,$loadname14,$loadname17,$compareres18,$loadname22,$loadname25,$compareres26,$loadname30,$loadname33,$loadname36,$loadname39,$loadname42,$loadname45,$loadname48,$loadname51,$compareres52,$loadname56,$compareres57,$loadname61,$compareres62,$loadname66,$compareres67,$loadname71;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname2=susp.$tmps.$loadname2;$compareres3=susp.$tmps.$compareres3;$loadname7=susp.$tmps.$loadname7;$loadname10=susp.$tmps.$loadname10;$compareres11=susp.$tmps.$compareres11;$loadname14=susp.$tmps.$loadname14;$loadname17=susp.$tmps.$loadname17;$compareres18=susp.$tmps.$compareres18;$loadname22=susp.$tmps.$loadname22;$loadname25=susp.$tmps.$loadname25;$compareres26=susp.$tmps.$compareres26;$loadname30=susp.$tmps.$loadname30;$loadname33=susp.$tmps.$loadname33;$loadname36=susp.$tmps.$loadname36;$loadname39=susp.$tmps.$loadname39;$loadname42=susp.$tmps.$loadname42;$loadname45=susp.$tmps.$loadname45;$loadname48=susp.$tmps.$loadname48;$loadname51=susp.$tmps.$loadname51;$compareres52=susp.$tmps.$compareres52;$loadname56=susp.$tmps.$loadname56;$compareres57=susp.$tmps.$compareres57;$loadname61=susp.$tmps.$loadname61;$compareres62=susp.$tmps.$compareres62;$loadname66=susp.$tmps.$loadname66;$compareres67=susp.$tmps.$compareres67;$loadname71=susp.$tmps.$loadname71;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname2":$loadname2,"$compareres3":$compareres3,"$loadname7":$loadname7,"$loadname10":$loadname10,"$compareres11":$compareres11,"$loadname14":$loadname14,"$loadname17":$loadname17,"$compareres18":$compareres18,"$loadname22":$loadname22,"$loadname25":$loadname25,"$compareres26":$compareres26,"$loadname30":$loadname30,"$loadname33":$loadname33,"$loadname36":$loadname36,"$loadname39":$loadname39,"$loadname42":$loadname42,"$loadname45":$loadname45,"$loadname48":$loadname48,"$loadname51":$loadname51,"$compareres52":$compareres52,"$loadname56":$loadname56,"$compareres57":$compareres57,"$loadname61":$loadname61,"$compareres62":$compareres62,"$loadname66":$loadname66,"$compareres67":$compareres67,"$loadname71":$loadname71};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$loc.status=$scope0.$const1;if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 2;$susp.optional = true;return $susp;}$blk=2;case 2: 

$currLineNo = 3;
$currColNo = 0;

$blk=3;case 3: if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 4;$susp.optional = true;return $susp;}$blk=4;case 4: $blk=5;case 5: if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 6;$susp.optional = true;return $susp;}$blk=6;case 6: 

$currLineNo = 5;
$currColNo = 0;

var $loadname2=$loc.status!==undefined?$loc.status:Sk.misceval.loadname('status',$gbl);;var $compareres3=null;$ret = Sk.misceval.richCompareBool($loadname2,$scope0.$const4,'Eq', true);$blk=10;case 10: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,3); }$compareres3=Sk.builtin.bool($ret);var $jfalse5=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse5){$blk=9;continue;}$blk=9;case 9: var $jfalse6=($compareres3===false||!Sk.misceval.isTrue($compareres3));if($jfalse6){$blk=8;continue;}if (Sk.breakpoints('<stdin>.py',6,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,4);$susp.$blk = 11;$susp.optional = true;return $susp;}$blk=11;case 11: 

$currLineNo = 6;
$currColNo = 4;

var $loadname7=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname7.tp$call)?$loadname7.tp$call([$scope0.$const8],undefined) : Sk.misceval.applyOrSuspend($loadname7,undefined,undefined,undefined,[$scope0.$const8]);$blk=12;case 12: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,4); }var $call9=$ret;

$currLineNo = 6;
$currColNo = 4;

$blk=7;case 7: if (Sk.breakpoints('<stdin>.py',14,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,0);$susp.$blk = 33;$susp.optional = true;return $susp;}$blk=33;case 33: 

$currLineNo = 14;
$currColNo = 0;

var $loadname33=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname33.tp$call)?$loadname33.tp$call([$scope0.$const34],undefined) : Sk.misceval.applyOrSuspend($loadname33,undefined,undefined,undefined,[$scope0.$const34]);$blk=34;case 34: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,0); }var $call35=$ret;

$currLineNo = 14;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',15,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,0);$susp.$blk = 35;$susp.optional = true;return $susp;}$blk=35;case 35: 

$currLineNo = 15;
$currColNo = 0;

var $loadname36=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname36.tp$call)?$loadname36.tp$call([$scope0.$const37],undefined) : Sk.misceval.applyOrSuspend($loadname36,undefined,undefined,undefined,[$scope0.$const37]);$blk=36;case 36: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,0); }var $call38=$ret;

$currLineNo = 15;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',16,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,0);$susp.$blk = 37;$susp.optional = true;return $susp;}$blk=37;case 37: 

$currLineNo = 16;
$currColNo = 0;

var $loadname39=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname39.tp$call)?$loadname39.tp$call([$scope0.$const40],undefined) : Sk.misceval.applyOrSuspend($loadname39,undefined,undefined,undefined,[$scope0.$const40]);$blk=38;case 38: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,0); }var $call41=$ret;

$currLineNo = 16;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',17,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,0);$susp.$blk = 39;$susp.optional = true;return $susp;}$blk=39;case 39: 

$currLineNo = 17;
$currColNo = 0;

var $loadname42=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname42.tp$call)?$loadname42.tp$call([$scope0.$const43],undefined) : Sk.misceval.applyOrSuspend($loadname42,undefined,undefined,undefined,[$scope0.$const43]);$blk=40;case 40: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,0); }var $call44=$ret;

$currLineNo = 17;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',18,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',18,0);$susp.$blk = 41;$susp.optional = true;return $susp;}$blk=41;case 41: 

$currLineNo = 18;
$currColNo = 0;

var $loadname45=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname45.tp$call)?$loadname45.tp$call([$scope0.$const46],undefined) : Sk.misceval.applyOrSuspend($loadname45,undefined,undefined,undefined,[$scope0.$const46]);$blk=42;case 42: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',18,0); }var $call47=$ret;

$currLineNo = 18;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',20,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,0);$susp.$blk = 43;$susp.optional = true;return $susp;}$blk=43;case 43: 

$currLineNo = 20;
$currColNo = 0;

var $loadname48=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname48.tp$call)?$loadname48.tp$call([$scope0.$const49],undefined) : Sk.misceval.applyOrSuspend($loadname48,undefined,undefined,undefined,[$scope0.$const49]);$blk=44;case 44: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,9); }var $call50=$ret;

$currLineNo = 20;
$currColNo = 9;

$loc.choice=$call50;if (Sk.breakpoints('<stdin>.py',21,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',21,0);$susp.$blk = 45;$susp.optional = true;return $susp;}$blk=45;case 45: 

$currLineNo = 21;
$currColNo = 0;

var $loadname51=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres52=null;$ret = Sk.misceval.richCompareBool($loadname51,$scope0.$const53,'Eq', true);$blk=49;case 49: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,3); }$compareres52=Sk.builtin.bool($ret);var $jfalse54=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse54){$blk=48;continue;}$blk=48;case 48: var $jfalse55=($compareres52===false||!Sk.misceval.isTrue($compareres52));if($jfalse55){$blk=47;continue;}if (Sk.breakpoints('<stdin>.py',22,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',22,4);$susp.$blk = 50;$susp.optional = true;return $susp;}$blk=50;case 50: 

$currLineNo = 22;
$currColNo = 4;

$loc.status=$scope0.$const1;$blk=46;case 46: if (Sk.breakpoints('<stdin>.py',31,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',31,0);$susp.$blk = 71;$susp.optional = true;return $susp;}$blk=71;case 71: 

$currLineNo = 31;
$currColNo = 0;

$blk=3; continue;return $loc; continue;case 8: if (Sk.breakpoints('<stdin>.py',7,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,5);$susp.$blk = 13;$susp.optional = true;return $susp;}$blk=13;case 13: 

$currLineNo = 7;
$currColNo = 5;

var $loadname10=$loc.status!==undefined?$loc.status:Sk.misceval.loadname('status',$gbl);;var $compareres11=null;$ret = Sk.misceval.richCompareBool($loadname10,$scope0.$const1,'Eq', true);$blk=17;case 17: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,5); }$compareres11=Sk.builtin.bool($ret);var $jfalse12=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse12){$blk=16;continue;}$blk=16;case 16: var $jfalse13=($compareres11===false||!Sk.misceval.isTrue($compareres11));if($jfalse13){$blk=15;continue;}if (Sk.breakpoints('<stdin>.py',8,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,4);$susp.$blk = 18;$susp.optional = true;return $susp;}$blk=18;case 18: 

$currLineNo = 8;
$currColNo = 4;

var $loadname14=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname14.tp$call)?$loadname14.tp$call([$scope0.$const15],undefined) : Sk.misceval.applyOrSuspend($loadname14,undefined,undefined,undefined,[$scope0.$const15]);$blk=19;case 19: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,4); }var $call16=$ret;

$currLineNo = 8;
$currColNo = 4;

$blk=14;case 14: $blk=7; continue;case 15: if (Sk.breakpoints('<stdin>.py',9,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,5);$susp.$blk = 20;$susp.optional = true;return $susp;}$blk=20;case 20: 

$currLineNo = 9;
$currColNo = 5;

var $loadname17=$loc.status!==undefined?$loc.status:Sk.misceval.loadname('status',$gbl);;var $compareres18=null;$ret = Sk.misceval.richCompareBool($loadname17,$scope0.$const19,'Eq', true);$blk=24;case 24: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,5); }$compareres18=Sk.builtin.bool($ret);var $jfalse20=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse20){$blk=23;continue;}$blk=23;case 23: var $jfalse21=($compareres18===false||!Sk.misceval.isTrue($compareres18));if($jfalse21){$blk=22;continue;}if (Sk.breakpoints('<stdin>.py',10,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,4);$susp.$blk = 25;$susp.optional = true;return $susp;}$blk=25;case 25: 

$currLineNo = 10;
$currColNo = 4;

var $loadname22=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname22.tp$call)?$loadname22.tp$call([$scope0.$const23],undefined) : Sk.misceval.applyOrSuspend($loadname22,undefined,undefined,undefined,[$scope0.$const23]);$blk=26;case 26: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,4); }var $call24=$ret;

$currLineNo = 10;
$currColNo = 4;

$blk=21;case 21: $blk=14; continue;case 22: if (Sk.breakpoints('<stdin>.py',11,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,5);$susp.$blk = 27;$susp.optional = true;return $susp;}$blk=27;case 27: 

$currLineNo = 11;
$currColNo = 5;

var $loadname25=$loc.status!==undefined?$loc.status:Sk.misceval.loadname('status',$gbl);;var $compareres26=null;$ret = Sk.misceval.richCompareBool($loadname25,$scope0.$const27,'Eq', true);$blk=30;case 30: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,5); }$compareres26=Sk.builtin.bool($ret);var $jfalse28=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse28){$blk=29;continue;}$blk=29;case 29: var $jfalse29=($compareres26===false||!Sk.misceval.isTrue($compareres26));if($jfalse29){$blk=28;continue;}if (Sk.breakpoints('<stdin>.py',12,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,4);$susp.$blk = 31;$susp.optional = true;return $susp;}$blk=31;case 31: 

$currLineNo = 12;
$currColNo = 4;

var $loadname30=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname30.tp$call)?$loadname30.tp$call([$scope0.$const31],undefined) : Sk.misceval.applyOrSuspend($loadname30,undefined,undefined,undefined,[$scope0.$const31]);$blk=32;case 32: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,4); }var $call32=$ret;

$currLineNo = 12;
$currColNo = 4;

$blk=28;case 28: $blk=21; continue;case 47: if (Sk.breakpoints('<stdin>.py',23,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',23,5);$susp.$blk = 51;$susp.optional = true;return $susp;}$blk=51;case 51: 

$currLineNo = 23;
$currColNo = 5;

var $loadname56=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres57=null;$ret = Sk.misceval.richCompareBool($loadname56,$scope0.$const58,'Eq', true);$blk=55;case 55: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',23,5); }$compareres57=Sk.builtin.bool($ret);var $jfalse59=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse59){$blk=54;continue;}$blk=54;case 54: var $jfalse60=($compareres57===false||!Sk.misceval.isTrue($compareres57));if($jfalse60){$blk=53;continue;}if (Sk.breakpoints('<stdin>.py',24,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',24,4);$susp.$blk = 56;$susp.optional = true;return $susp;}$blk=56;case 56: 

$currLineNo = 24;
$currColNo = 4;

$loc.status=$scope0.$const4;$blk=52;case 52: $blk=46; continue;case 53: if (Sk.breakpoints('<stdin>.py',25,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',25,5);$susp.$blk = 57;$susp.optional = true;return $susp;}$blk=57;case 57: 

$currLineNo = 25;
$currColNo = 5;

var $loadname61=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres62=null;$ret = Sk.misceval.richCompareBool($loadname61,$scope0.$const63,'Eq', true);$blk=61;case 61: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',25,5); }$compareres62=Sk.builtin.bool($ret);var $jfalse64=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse64){$blk=60;continue;}$blk=60;case 60: var $jfalse65=($compareres62===false||!Sk.misceval.isTrue($compareres62));if($jfalse65){$blk=59;continue;}if (Sk.breakpoints('<stdin>.py',26,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',26,4);$susp.$blk = 62;$susp.optional = true;return $susp;}$blk=62;case 62: 

$currLineNo = 26;
$currColNo = 4;

$loc.status=$scope0.$const19;$blk=58;case 58: $blk=52; continue;case 59: if (Sk.breakpoints('<stdin>.py',27,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',27,5);$susp.$blk = 63;$susp.optional = true;return $susp;}$blk=63;case 63: 

$currLineNo = 27;
$currColNo = 5;

var $loadname66=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres67=null;$ret = Sk.misceval.richCompareBool($loadname66,$scope0.$const68,'Eq', true);$blk=67;case 67: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',27,5); }$compareres67=Sk.builtin.bool($ret);var $jfalse69=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse69){$blk=66;continue;}$blk=66;case 66: var $jfalse70=($compareres67===false||!Sk.misceval.isTrue($compareres67));if($jfalse70){$blk=65;continue;}if (Sk.breakpoints('<stdin>.py',28,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',28,4);$susp.$blk = 68;$susp.optional = true;return $susp;}$blk=68;case 68: 

$currLineNo = 28;
$currColNo = 4;

$loc.status=$scope0.$const27;$blk=64;case 64: $blk=58; continue;case 65: if (Sk.breakpoints('<stdin>.py',30,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',30,4);$susp.$blk = 69;$susp.optional = true;return $susp;}$blk=69;case 69: 

$currLineNo = 30;
$currColNo = 4;

var $loadname71=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname71.tp$call)?$loadname71.tp$call([$scope0.$const72],undefined) : Sk.misceval.applyOrSuspend($loadname71,undefined,undefined,undefined,[$scope0.$const72]);$blk=70;case 70: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',30,4); }var $call73=$ret;

$currLineNo = 30;
$currColNo = 4;

$blk=64; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const1 = new Sk.builtin.str("user_online");$scope0.$const4 = new Sk.builtin.str("user_offline");$scope0.$const8 = new Sk.builtin.str("\u2b55");$scope0.$const15 = new Sk.builtin.str("\ud83d\ude00");$scope0.$const19 = new Sk.builtin.str("user_away");$scope0.$const23 = new Sk.builtin.str("\ud83d\ude34");$scope0.$const27 = new Sk.builtin.str("user_do_not_disturb");$scope0.$const31 = new Sk.builtin.str("\u274c");$scope0.$const34 = new Sk.builtin.str("Change Online Status");$scope0.$const37 = new Sk.builtin.str("[a] Online");$scope0.$const40 = new Sk.builtin.str("[b] Offline");$scope0.$const43 = new Sk.builtin.str("[c] Away");$scope0.$const46 = new Sk.builtin.str("[d] Do Not Disturb");$scope0.$const49 = new Sk.builtin.str("What would you like to do?");$scope0.$const53 = new Sk.builtin.str("a");$scope0.$const58 = new Sk.builtin.str("b");$scope0.$const63 = new Sk.builtin.str("c");$scope0.$const68 = new Sk.builtin.str("d");$scope0.$const72 = new Sk.builtin.str("Invalid Option");
return $scope0;}();
$compiledmod;