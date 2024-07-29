Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname1,$loadname4,$loadname7,$compareres8,$loadname12;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname1=susp.$tmps.$loadname1;$loadname4=susp.$tmps.$loadname4;$loadname7=susp.$tmps.$loadname7;$compareres8=susp.$tmps.$compareres8;$loadname12=susp.$tmps.$loadname12;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname1":$loadname1,"$loadname4":$loadname4,"$loadname7":$loadname7,"$compareres8":$compareres8,"$loadname12":$loadname12};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

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

var $loadname4=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname4.tp$call)?$loadname4.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname4,undefined,undefined,undefined,[$scope0.$const5]);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',4,9); }var $call6=$ret;

$currLineNo = 4;
$currColNo = 9;

$loc.answer=$call6;if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 5;
$currColNo = 0;

var $loadname7=$loc.answer!==undefined?$loc.answer:Sk.misceval.loadname('answer',$gbl);;var $compareres8=null;$ret = Sk.misceval.richCompareBool($loadname7,$scope0.$const9,'Eq', true);$blk=12;case 12: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,3); }$compareres8=Sk.builtin.bool($ret);var $jfalse10=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse10){$blk=11;continue;}$blk=11;case 11: var $jfalse11=($compareres8===false||!Sk.misceval.isTrue($compareres8));if($jfalse11){$blk=10;continue;}if (Sk.breakpoints('<stdin>.py',7,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,4);$susp.$blk = 13;$susp.optional = true;return $susp;}$blk=13;case 13: 

$currLineNo = 7;
$currColNo = 4;

$blk=2; continue;$blk=10; continue;case 10: if (Sk.breakpoints('<stdin>.py',9,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,0);$susp.$blk = 14;$susp.optional = true;return $susp;}$blk=14;case 14: 

$currLineNo = 9;
$currColNo = 0;

var $loadname12=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname12.tp$call)?$loadname12.tp$call([$scope0.$const13],undefined) : Sk.misceval.applyOrSuspend($loadname12,undefined,undefined,undefined,[$scope0.$const13]);$blk=15;case 15: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,0); }var $call14=$ret;

$currLineNo = 9;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const2 = new Sk.builtin.str("You won!");$scope0.$const5 = new Sk.builtin.str("Type 'p' to play again, anything else to quit: ");$scope0.$const9 = new Sk.builtin.str("p");$scope0.$const13 = new Sk.builtin.str("Thanks for playing!");
return $scope0;}();
$compiledmod;