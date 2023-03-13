Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname1,$loadname4,$loadname7,$loadname10,$loadname13,$compareres14,$loadname18,$loadname21,$compareres22,$loadname26,$loadname28,$compareres29,$loadname33,$loadname36,$compareres37,$loadname41,$loadname43;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname1=susp.$tmps.$loadname1;$loadname4=susp.$tmps.$loadname4;$loadname7=susp.$tmps.$loadname7;$loadname10=susp.$tmps.$loadname10;$loadname13=susp.$tmps.$loadname13;$compareres14=susp.$tmps.$compareres14;$loadname18=susp.$tmps.$loadname18;$loadname21=susp.$tmps.$loadname21;$compareres22=susp.$tmps.$compareres22;$loadname26=susp.$tmps.$loadname26;$loadname28=susp.$tmps.$loadname28;$compareres29=susp.$tmps.$compareres29;$loadname33=susp.$tmps.$loadname33;$loadname36=susp.$tmps.$loadname36;$compareres37=susp.$tmps.$compareres37;$loadname41=susp.$tmps.$loadname41;$loadname43=susp.$tmps.$loadname43;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname1":$loadname1,"$loadname4":$loadname4,"$loadname7":$loadname7,"$loadname10":$loadname10,"$loadname13":$loadname13,"$compareres14":$compareres14,"$loadname18":$loadname18,"$loadname21":$loadname21,"$compareres22":$compareres22,"$loadname26":$loadname26,"$loadname28":$loadname28,"$compareres29":$compareres29,"$loadname33":$loadname33,"$loadname36":$loadname36,"$compareres37":$compareres37,"$loadname41":$loadname41,"$loadname43":$loadname43};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

var $loadname1=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname1.tp$call)?$loadname1.tp$call([$scope0.$const2],undefined) : Sk.misceval.applyOrSuspend($loadname1,undefined,undefined,undefined,[$scope0.$const2]);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $call3=$ret;

$currLineNo = 1;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',2,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',2,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 2;
$currColNo = 0;

var $loadname4=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname4.tp$call)?$loadname4.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname4,undefined,undefined,undefined,[$scope0.$const5]);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',2,0); }var $call6=$ret;

$currLineNo = 2;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',10,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 10;
$currColNo = 0;

var $loadname7=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname7.tp$call)?$loadname7.tp$call([$scope0.$const8],undefined) : Sk.misceval.applyOrSuspend($loadname7,undefined,undefined,undefined,[$scope0.$const8]);$blk=6;case 6: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,0); }var $call9=$ret;

$currLineNo = 10;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',12,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 12;
$currColNo = 0;

var $loadname10=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname10.tp$call)?$loadname10.tp$call([$scope0.$const11],undefined) : Sk.misceval.applyOrSuspend($loadname10,undefined,undefined,undefined,[$scope0.$const11]);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,7); }var $call12=$ret;

$currLineNo = 12;
$currColNo = 7;

$loc.door=$call12;if (Sk.breakpoints('<stdin>.py',14,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 14;
$currColNo = 0;

var $loadname13=$loc.door!==undefined?$loc.door:Sk.misceval.loadname('door',$gbl);;var $compareres14=null;$ret = Sk.misceval.richCompareBool($loadname13,$scope0.$const15,'Eq', true);$blk=13;case 13: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,3); }$compareres14=Sk.builtin.bool($ret);var $jfalse16=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse16){$blk=12;continue;}$blk=12;case 12: var $jfalse17=($compareres14===false||!Sk.misceval.isTrue($compareres14));if($jfalse17){$blk=11;continue;}if (Sk.breakpoints('<stdin>.py',15,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,2);$susp.$blk = 14;$susp.optional = true;return $susp;}$blk=14;case 14: 

$currLineNo = 15;
$currColNo = 2;

var $loadname18=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname18.tp$call)?$loadname18.tp$call([$scope0.$const19],undefined) : Sk.misceval.applyOrSuspend($loadname18,undefined,undefined,undefined,[$scope0.$const19]);$blk=15;case 15: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,2); }var $call20=$ret;

$currLineNo = 15;
$currColNo = 2;

$blk=10;case 10: return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');case 11: if (Sk.breakpoints('<stdin>.py',16,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,5);$susp.$blk = 16;$susp.optional = true;return $susp;}$blk=16;case 16: 

$currLineNo = 16;
$currColNo = 5;

var $loadname21=$loc.door!==undefined?$loc.door:Sk.misceval.loadname('door',$gbl);;var $compareres22=null;$ret = Sk.misceval.richCompareBool($loadname21,$scope0.$const23,'Eq', true);$blk=20;case 20: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,5); }$compareres22=Sk.builtin.bool($ret);var $jfalse24=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse24){$blk=19;continue;}$blk=19;case 19: var $jfalse25=($compareres22===false||!Sk.misceval.isTrue($compareres22));if($jfalse25){$blk=18;continue;}if (Sk.breakpoints('<stdin>.py',17,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,2);$susp.$blk = 21;$susp.optional = true;return $susp;}$blk=21;case 21: 

$currLineNo = 17;
$currColNo = 2;

var $loadname26=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname26.tp$call)?$loadname26.tp$call([$scope0.$const19],undefined) : Sk.misceval.applyOrSuspend($loadname26,undefined,undefined,undefined,[$scope0.$const19]);$blk=22;case 22: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,2); }var $call27=$ret;

$currLineNo = 17;
$currColNo = 2;

$blk=17;case 17: $blk=10; continue;case 18: if (Sk.breakpoints('<stdin>.py',18,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',18,5);$susp.$blk = 23;$susp.optional = true;return $susp;}$blk=23;case 23: 

$currLineNo = 18;
$currColNo = 5;

var $loadname28=$loc.door!==undefined?$loc.door:Sk.misceval.loadname('door',$gbl);;var $compareres29=null;$ret = Sk.misceval.richCompareBool($loadname28,$scope0.$const30,'Eq', true);$blk=27;case 27: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',18,5); }$compareres29=Sk.builtin.bool($ret);var $jfalse31=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse31){$blk=26;continue;}$blk=26;case 26: var $jfalse32=($compareres29===false||!Sk.misceval.isTrue($compareres29));if($jfalse32){$blk=25;continue;}if (Sk.breakpoints('<stdin>.py',19,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',19,2);$susp.$blk = 28;$susp.optional = true;return $susp;}$blk=28;case 28: 

$currLineNo = 19;
$currColNo = 2;

var $loadname33=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname33.tp$call)?$loadname33.tp$call([$scope0.$const34],undefined) : Sk.misceval.applyOrSuspend($loadname33,undefined,undefined,undefined,[$scope0.$const34]);$blk=29;case 29: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',19,2); }var $call35=$ret;

$currLineNo = 19;
$currColNo = 2;

$blk=24;case 24: $blk=17; continue;case 25: if (Sk.breakpoints('<stdin>.py',20,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,5);$susp.$blk = 30;$susp.optional = true;return $susp;}$blk=30;case 30: 

$currLineNo = 20;
$currColNo = 5;

var $loadname36=$loc.door!==undefined?$loc.door:Sk.misceval.loadname('door',$gbl);;var $compareres37=null;$ret = Sk.misceval.richCompareBool($loadname36,$scope0.$const38,'Eq', true);$blk=34;case 34: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,5); }$compareres37=Sk.builtin.bool($ret);var $jfalse39=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse39){$blk=33;continue;}$blk=33;case 33: var $jfalse40=($compareres37===false||!Sk.misceval.isTrue($compareres37));if($jfalse40){$blk=32;continue;}if (Sk.breakpoints('<stdin>.py',21,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',21,2);$susp.$blk = 35;$susp.optional = true;return $susp;}$blk=35;case 35: 

$currLineNo = 21;
$currColNo = 2;

var $loadname41=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname41.tp$call)?$loadname41.tp$call([$scope0.$const19],undefined) : Sk.misceval.applyOrSuspend($loadname41,undefined,undefined,undefined,[$scope0.$const19]);$blk=36;case 36: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,2); }var $call42=$ret;

$currLineNo = 21;
$currColNo = 2;

$blk=31;case 31: $blk=24; continue;case 32: if (Sk.breakpoints('<stdin>.py',23,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',23,2);$susp.$blk = 37;$susp.optional = true;return $susp;}$blk=37;case 37: 

$currLineNo = 23;
$currColNo = 2;

var $loadname43=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname43.tp$call)?$loadname43.tp$call([$scope0.$const44],undefined) : Sk.misceval.applyOrSuspend($loadname43,undefined,undefined,undefined,[$scope0.$const44]);$blk=38;case 38: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',23,2); }var $call45=$ret;

$currLineNo = 23;
$currColNo = 2;

$blk=31; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const2 = new Sk.builtin.str("There are 4 doors...");$scope0.$const5 = new Sk.builtin.str("\x0d\n    .-----.    .-----.    .-----.    .-----.\x0d\n    |     |    |     |    |     |    |     |\x0d\n    |  A  |    |  B  |    |  C  |    |  D  |\x0d\n    |     |    |     |    |     |    |     |\x0d\n    .-----.    .-----.    .-----.    .-----.\x0d\n");$scope0.$const8 = new Sk.builtin.str("Behind 1 of them is a car... if you choose correctly, you win it!!");$scope0.$const11 = new Sk.builtin.str("Enter your choice:");$scope0.$const15 = new Sk.builtin.str("A");$scope0.$const19 = new Sk.builtin.str("Sorry, no car behind that one...");$scope0.$const23 = new Sk.builtin.str("B");$scope0.$const30 = new Sk.builtin.str("C");$scope0.$const34 = new Sk.builtin.str("Ding! Ding! Ding! YOU WON THE CAR!");$scope0.$const38 = new Sk.builtin.str("D");$scope0.$const44 = new Sk.builtin.str("There is no such door!");
return $scope0;}();
$compiledmod;