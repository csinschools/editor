Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname3,$loadname6,$compareres7,$loadname11,$loadname12,$loadname11,$loadname12,$lattr14,$binop16,$loadname17,$loadname11,$loadname12,$lattr14,$binop16,$loadname17,$lattr19,$binop20,$loadname22;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname3=susp.$tmps.$loadname3;$loadname6=susp.$tmps.$loadname6;$compareres7=susp.$tmps.$compareres7;$loadname11=susp.$tmps.$loadname11;$loadname12=susp.$tmps.$loadname12;$lattr14=susp.$tmps.$lattr14;$binop16=susp.$tmps.$binop16;$loadname17=susp.$tmps.$loadname17;$lattr19=susp.$tmps.$lattr19;$binop20=susp.$tmps.$binop20;$loadname22=susp.$tmps.$loadname22;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname3":$loadname3,"$loadname6":$loadname6,"$compareres7":$compareres7,"$loadname11":$loadname11,"$loadname12":$loadname12,"$lattr14":$lattr14,"$binop16":$binop16,"$loadname17":$loadname17,"$lattr19":$lattr19,"$binop20":$binop20,"$loadname22":$loadname22};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$ret = Sk.builtin.__import__('goodies',$gbl,$loc,['Colour'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;var $item2=Sk.abstr.gattr($module1, new Sk.builtin.str('Colour'), undefined);$loc.Colour=$item2;if (Sk.breakpoints('<stdin>.py',2,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',2,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 2;
$currColNo = 0;

var $loadname3=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname3.tp$call)?$loadname3.tp$call([$scope0.$const4],undefined) : Sk.misceval.applyOrSuspend($loadname3,undefined,undefined,undefined,[$scope0.$const4]);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',2,8); }var $call5=$ret;

$currLineNo = 2;
$currColNo = 8;

$loc.album=$call5;if (Sk.breakpoints('<stdin>.py',4,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',4,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 4;
$currColNo = 0;

var $loadname6=$loc.album!==undefined?$loc.album:Sk.misceval.loadname('album',$gbl);;var $compareres7=null;$ret = Sk.misceval.richCompareBool($loadname6,$scope0.$const8,'Eq', true);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',4,3); }$compareres7=Sk.builtin.bool($ret);var $jfalse9=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse9){$blk=7;continue;}$blk=7;case 7: var $jfalse10=($compareres7===false||!Sk.misceval.isTrue($compareres7));if($jfalse10){$blk=6;continue;}if (Sk.breakpoints('<stdin>.py',6,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,4);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 6;
$currColNo = 4;

var $loadname11=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname12=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname12.tp$getattr($scope0.$const13, true);$blk=10;case 10: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname12.sk$attrError() + " has no attribute '" + $scope0.$const13.$jsstr() + "'");
};var $lattr14=$ret;var $binop16=Sk.abstr.numberBinOp($lattr14,$scope0.$const15,'Add');var $loadname17=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname17.tp$getattr($scope0.$const18, true);$blk=11;case 11: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,51); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname17.sk$attrError() + " has no attribute '" + $scope0.$const18.$jsstr() + "'");
};var $lattr19=$ret;var $binop20=Sk.abstr.numberBinOp($binop16,$lattr19,'Add');$ret = ($loadname11.tp$call)?$loadname11.tp$call([$binop20],undefined) : Sk.misceval.applyOrSuspend($loadname11,undefined,undefined,undefined,[$binop20]);$blk=12;case 12: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,4); }var $call21=$ret;

$currLineNo = 6;
$currColNo = 4;

$blk=6;case 6: if (Sk.breakpoints('<stdin>.py',8,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,0);$susp.$blk = 13;$susp.optional = true;return $susp;}$blk=13;case 13: 

$currLineNo = 8;
$currColNo = 0;

var $loadname22=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname22.tp$call)?$loadname22.tp$call([$scope0.$const23],undefined) : Sk.misceval.applyOrSuspend($loadname22,undefined,undefined,undefined,[$scope0.$const23]);$blk=14;case 14: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,0); }var $call24=$ret;

$currLineNo = 8;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const4 = new Sk.builtin.str("What was the name of Taylor Swift's first album? ");$scope0.$const8 = new Sk.builtin.str("Taylor Swift");$scope0.$const13 = new Sk.builtin.str('green');$scope0.$const15 = new Sk.builtin.str("Yes, you are correct!");$scope0.$const18 = new Sk.builtin.str('reset');$scope0.$const23 = new Sk.builtin.str("Taylor Swift was the debut studio album by Taylor Swift. It was released in North America in 2006.");
return $scope0;}();
$compiledmod;