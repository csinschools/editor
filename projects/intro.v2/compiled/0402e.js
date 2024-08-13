Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname1,$loadname4,$loadname7,$loadname10,$loadname11,$binop13,$loadname14,$binop15,$loadname17;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname1=susp.$tmps.$loadname1;$loadname4=susp.$tmps.$loadname4;$loadname7=susp.$tmps.$loadname7;$loadname10=susp.$tmps.$loadname10;$loadname11=susp.$tmps.$loadname11;$binop13=susp.$tmps.$binop13;$loadname14=susp.$tmps.$loadname14;$binop15=susp.$tmps.$binop15;$loadname17=susp.$tmps.$loadname17;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname1":$loadname1,"$loadname4":$loadname4,"$loadname7":$loadname7,"$loadname10":$loadname10,"$loadname11":$loadname11,"$binop13":$binop13,"$loadname14":$loadname14,"$binop15":$binop15,"$loadname17":$loadname17};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

var $loadname1=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname1.tp$call)?$loadname1.tp$call([$scope0.$const2],undefined) : Sk.misceval.applyOrSuspend($loadname1,undefined,undefined,undefined,[$scope0.$const2]);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $call3=$ret;

$currLineNo = 1;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',2,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',2,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 2;
$currColNo = 0;

var $loadname4=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname4.tp$call)?$loadname4.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname4,undefined,undefined,undefined,[$scope0.$const5]);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',2,10); }var $call6=$ret;

$currLineNo = 2;
$currColNo = 10;

$loc.clothes=$call6;if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 3;
$currColNo = 0;

var $loadname7=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname7.tp$call)?$loadname7.tp$call([$scope0.$const8],undefined) : Sk.misceval.applyOrSuspend($loadname7,undefined,undefined,undefined,[$scope0.$const8]);$blk=6;case 6: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,7); }var $call9=$ret;

$currLineNo = 3;
$currColNo = 7;

$loc.cost=$call9;if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 5;
$currColNo = 0;

var $loadname10=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname11=$loc.clothes!==undefined?$loc.clothes:Sk.misceval.loadname('clothes',$gbl);;var $binop13=Sk.abstr.numberBinOp($loadname11,$scope0.$const12,'Add');var $loadname14=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $binop15=Sk.abstr.numberBinOp($binop13,$loadname14,'Add');$ret = ($loadname10.tp$call)?$loadname10.tp$call([$binop15],undefined) : Sk.misceval.applyOrSuspend($loadname10,undefined,undefined,undefined,[$binop15]);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,0); }var $call16=$ret;

$currLineNo = 5;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 6;
$currColNo = 0;

var $loadname17=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname17.tp$call)?$loadname17.tp$call([$scope0.$const18],undefined) : Sk.misceval.applyOrSuspend($loadname17,undefined,undefined,undefined,[$scope0.$const18]);$blk=10;case 10: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,0); }var $call19=$ret;

$currLineNo = 6;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const2 = new Sk.builtin.str("Welcome to my Top Fashion shop!");$scope0.$const5 = new Sk.builtin.str("Enter the name of the clothes item: ");$scope0.$const8 = new Sk.builtin.str("Enter the price of the clothes item: $");$scope0.$const12 = new Sk.builtin.str(" is currently on sale for the low, low price of $");$scope0.$const18 = new Sk.builtin.str("Sale ends on Friday!");
return $scope0;}();
$compiledmod;