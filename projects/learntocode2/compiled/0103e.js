Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname2,$loadname5,$loadname8,$loadname11,$loadname13,$binop14,$binop16,$loadname17,$binop18;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname2=susp.$tmps.$loadname2;$loadname5=susp.$tmps.$loadname5;$loadname8=susp.$tmps.$loadname8;$loadname11=susp.$tmps.$loadname11;$loadname13=susp.$tmps.$loadname13;$binop14=susp.$tmps.$binop14;$binop16=susp.$tmps.$binop16;$loadname17=susp.$tmps.$loadname17;$binop18=susp.$tmps.$binop18;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname2":$loadname2,"$loadname5":$loadname5,"$loadname8":$loadname8,"$loadname11":$loadname11,"$loadname13":$loadname13,"$binop14":$binop14,"$binop16":$binop16,"$loadname17":$loadname17,"$binop18":$binop18};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$ret = Sk.builtin.__import__('csinsc',$gbl,$loc,['*'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;Sk.importStar($module1,$loc, $gbl);if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 3;
$currColNo = 0;

var $loadname2=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname2.tp$call)?$loadname2.tp$call([$scope0.$const3],undefined) : Sk.misceval.applyOrSuspend($loadname2,undefined,undefined,undefined,[$scope0.$const3]);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,0); }var $call4=$ret;

$currLineNo = 3;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 5;
$currColNo = 0;

var $loadname5=$loc.listen!==undefined?$loc.listen:Sk.misceval.loadname('listen',$gbl);;$ret = ($loadname5.tp$call)?$loadname5.tp$call([$scope0.$const6],undefined) : Sk.misceval.applyOrSuspend($loadname5,undefined,undefined,undefined,[$scope0.$const6]);$blk=6;case 6: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,9); }var $call7=$ret;

$currLineNo = 5;
$currColNo = 9;

$loc.animal=$call7;if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 6;
$currColNo = 0;

var $loadname8=$loc.listen!==undefined?$loc.listen:Sk.misceval.loadname('listen',$gbl);;$ret = ($loadname8.tp$call)?$loadname8.tp$call([$scope0.$const9],undefined) : Sk.misceval.applyOrSuspend($loadname8,undefined,undefined,undefined,[$scope0.$const9]);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,9); }var $call10=$ret;

$currLineNo = 6;
$currColNo = 9;

$loc.object=$call10;if (Sk.breakpoints('<stdin>.py',8,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 8;
$currColNo = 0;

var $loadname11=$loc.say!==undefined?$loc.say:Sk.misceval.loadname('say',$gbl);;var $loadname13=$loc.animal!==undefined?$loc.animal:Sk.misceval.loadname('animal',$gbl);;var $binop14=Sk.abstr.numberBinOp($scope0.$const12,$loadname13,'Add');var $binop16=Sk.abstr.numberBinOp($binop14,$scope0.$const15,'Add');var $loadname17=$loc.object!==undefined?$loc.object:Sk.misceval.loadname('object',$gbl);;var $binop18=Sk.abstr.numberBinOp($binop16,$loadname17,'Add');$ret = ($loadname11.tp$call)?$loadname11.tp$call([$binop18],undefined) : Sk.misceval.applyOrSuspend($loadname11,undefined,undefined,undefined,[$binop18]);$blk=10;case 10: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,0); }var $call19=$ret;

$currLineNo = 8;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const3 = new Sk.builtin.str("Press [Enter] to begin");$scope0.$const6 = new Sk.builtin.str("Say an animal:");$scope0.$const9 = new Sk.builtin.str("Say an object:");$scope0.$const12 = new Sk.builtin.str("The ");$scope0.$const15 = new Sk.builtin.str(" sat on the ");
return $scope0;}();
$compiledmod;