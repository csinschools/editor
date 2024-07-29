Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname1,$loadname4,$loadname7,$loadname10,$loadname13,$compareres14,$loadname18,$loadname21,$compareres22,$loadname26;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname1=susp.$tmps.$loadname1;$loadname4=susp.$tmps.$loadname4;$loadname7=susp.$tmps.$loadname7;$loadname10=susp.$tmps.$loadname10;$loadname13=susp.$tmps.$loadname13;$compareres14=susp.$tmps.$compareres14;$loadname18=susp.$tmps.$loadname18;$loadname21=susp.$tmps.$loadname21;$compareres22=susp.$tmps.$compareres22;$loadname26=susp.$tmps.$loadname26;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname1":$loadname1,"$loadname4":$loadname4,"$loadname7":$loadname7,"$loadname10":$loadname10,"$loadname13":$loadname13,"$compareres14":$compareres14,"$loadname18":$loadname18,"$loadname21":$loadname21,"$compareres22":$compareres22,"$loadname26":$loadname26};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$blk=2;case 2: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: $blk=4;case 4: if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 3;
$currColNo = 0;

var $loadname1=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname1.tp$call)?$loadname1.tp$call([$scope0.$const2],undefined) : Sk.misceval.applyOrSuspend($loadname1,undefined,undefined,undefined,[$scope0.$const2]);$blk=6;case 6: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,0); }var $call3=$ret;

$currLineNo = 3;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',4,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',4,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 4;
$currColNo = 0;

var $loadname4=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname4.tp$call)?$loadname4.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname4,undefined,undefined,undefined,[$scope0.$const5]);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',4,0); }var $call6=$ret;

$currLineNo = 4;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 5;
$currColNo = 0;

var $loadname7=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname7.tp$call)?$loadname7.tp$call([$scope0.$const8],undefined) : Sk.misceval.applyOrSuspend($loadname7,undefined,undefined,undefined,[$scope0.$const8]);$blk=10;case 10: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,0); }var $call9=$ret;

$currLineNo = 5;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 11;$susp.optional = true;return $susp;}$blk=11;case 11: 

$currLineNo = 7;
$currColNo = 0;

var $loadname10=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname10.tp$call)?$loadname10.tp$call([$scope0.$const11],undefined) : Sk.misceval.applyOrSuspend($loadname10,undefined,undefined,undefined,[$scope0.$const11]);$blk=12;case 12: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,9); }var $call12=$ret;

$currLineNo = 7;
$currColNo = 9;

$loc.option=$call12;if (Sk.breakpoints('<stdin>.py',9,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,0);$susp.$blk = 13;$susp.optional = true;return $susp;}$blk=13;case 13: 

$currLineNo = 9;
$currColNo = 0;

var $loadname13=$loc.option!==undefined?$loc.option:Sk.misceval.loadname('option',$gbl);;var $compareres14=null;$ret = Sk.misceval.richCompareBool($loadname13,$scope0.$const15,'Eq', true);$blk=16;case 16: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,3); }$compareres14=Sk.builtin.bool($ret);var $jfalse16=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse16){$blk=15;continue;}$blk=15;case 15: var $jfalse17=($compareres14===false||!Sk.misceval.isTrue($compareres14));if($jfalse17){$blk=14;continue;}if (Sk.breakpoints('<stdin>.py',10,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,4);$susp.$blk = 17;$susp.optional = true;return $susp;}$blk=17;case 17: 

$currLineNo = 10;
$currColNo = 4;

var $loadname18=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname18.tp$call)?$loadname18.tp$call([$scope0.$const19],undefined) : Sk.misceval.applyOrSuspend($loadname18,undefined,undefined,undefined,[$scope0.$const19]);$blk=18;case 18: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,4); }var $call20=$ret;

$currLineNo = 10;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',11,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,4);$susp.$blk = 19;$susp.optional = true;return $susp;}$blk=19;case 19: 

$currLineNo = 11;
$currColNo = 4;

$blk=2; continue;$blk=14; continue;case 14: if (Sk.breakpoints('<stdin>.py',12,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,0);$susp.$blk = 20;$susp.optional = true;return $susp;}$blk=20;case 20: 

$currLineNo = 12;
$currColNo = 0;

var $loadname21=$loc.option!==undefined?$loc.option:Sk.misceval.loadname('option',$gbl);;var $compareres22=null;$ret = Sk.misceval.richCompareBool($loadname21,$scope0.$const23,'Eq', true);$blk=23;case 23: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,3); }$compareres22=Sk.builtin.bool($ret);var $jfalse24=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse24){$blk=22;continue;}$blk=22;case 22: var $jfalse25=($compareres22===false||!Sk.misceval.isTrue($compareres22));if($jfalse25){$blk=21;continue;}if (Sk.breakpoints('<stdin>.py',13,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,4);$susp.$blk = 24;$susp.optional = true;return $susp;}$blk=24;case 24: 

$currLineNo = 13;
$currColNo = 4;

var $loadname26=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname26.tp$call)?$loadname26.tp$call([$scope0.$const27],undefined) : Sk.misceval.applyOrSuspend($loadname26,undefined,undefined,undefined,[$scope0.$const27]);$blk=25;case 25: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,4); }var $call28=$ret;

$currLineNo = 13;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',14,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,4);$susp.$blk = 26;$susp.optional = true;return $susp;}$blk=26;case 26: 

$currLineNo = 14;
$currColNo = 4;

$blk=2; continue;$blk=21; continue;case 21: return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const2 = new Sk.builtin.str("Type '1' to get the current temperature");$scope0.$const5 = new Sk.builtin.str("Type '2' to get the chance of rain");$scope0.$const8 = new Sk.builtin.str("Type anything else to quit");$scope0.$const11 = new Sk.builtin.str("Enter your choice:");$scope0.$const15 = new Sk.builtin.str("1");$scope0.$const19 = new Sk.builtin.str("It is currently 18 degrees.");$scope0.$const23 = new Sk.builtin.str("2");$scope0.$const27 = new Sk.builtin.str("There is a 80% chance of rain.");
return $scope0;}();
$compiledmod;