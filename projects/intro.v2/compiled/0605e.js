Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname2,$loadname3,$loadname2,$loadname3,$lattr5,$binop7,$loadname9,$loadname12,$compareres13,$loadname17,$loadname18,$loadname17,$loadname18,$lattr20,$binop22,$loadname24,$compareres25,$loadname29,$loadname30,$loadname29,$loadname30,$lattr31,$binop33,$loadname35,$compareres36,$loadname40,$loadname41,$loadname40,$loadname41,$lattr42,$binop44,$loadname46,$compareres47,$loadname51,$loadname52,$loadname51,$loadname52,$lattr53,$binop55,$loadname57,$compareres58,$loadname62,$loadname63,$loadname62,$loadname63,$lattr64,$binop66,$loadname68,$loadname69,$loadname68,$loadname69,$lattr70,$binop72;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname2=susp.$tmps.$loadname2;$loadname3=susp.$tmps.$loadname3;$lattr5=susp.$tmps.$lattr5;$binop7=susp.$tmps.$binop7;$loadname9=susp.$tmps.$loadname9;$loadname12=susp.$tmps.$loadname12;$compareres13=susp.$tmps.$compareres13;$loadname17=susp.$tmps.$loadname17;$loadname18=susp.$tmps.$loadname18;$lattr20=susp.$tmps.$lattr20;$binop22=susp.$tmps.$binop22;$loadname24=susp.$tmps.$loadname24;$compareres25=susp.$tmps.$compareres25;$loadname29=susp.$tmps.$loadname29;$loadname30=susp.$tmps.$loadname30;$lattr31=susp.$tmps.$lattr31;$binop33=susp.$tmps.$binop33;$loadname35=susp.$tmps.$loadname35;$compareres36=susp.$tmps.$compareres36;$loadname40=susp.$tmps.$loadname40;$loadname41=susp.$tmps.$loadname41;$lattr42=susp.$tmps.$lattr42;$binop44=susp.$tmps.$binop44;$loadname46=susp.$tmps.$loadname46;$compareres47=susp.$tmps.$compareres47;$loadname51=susp.$tmps.$loadname51;$loadname52=susp.$tmps.$loadname52;$lattr53=susp.$tmps.$lattr53;$binop55=susp.$tmps.$binop55;$loadname57=susp.$tmps.$loadname57;$compareres58=susp.$tmps.$compareres58;$loadname62=susp.$tmps.$loadname62;$loadname63=susp.$tmps.$loadname63;$lattr64=susp.$tmps.$lattr64;$binop66=susp.$tmps.$binop66;$loadname68=susp.$tmps.$loadname68;$loadname69=susp.$tmps.$loadname69;$lattr70=susp.$tmps.$lattr70;$binop72=susp.$tmps.$binop72;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname2":$loadname2,"$loadname3":$loadname3,"$lattr5":$lattr5,"$binop7":$binop7,"$loadname9":$loadname9,"$loadname12":$loadname12,"$compareres13":$compareres13,"$loadname17":$loadname17,"$loadname18":$loadname18,"$lattr20":$lattr20,"$binop22":$binop22,"$loadname24":$loadname24,"$compareres25":$compareres25,"$loadname29":$loadname29,"$loadname30":$loadname30,"$lattr31":$lattr31,"$binop33":$binop33,"$loadname35":$loadname35,"$compareres36":$compareres36,"$loadname40":$loadname40,"$loadname41":$loadname41,"$lattr42":$lattr42,"$binop44":$binop44,"$loadname46":$loadname46,"$compareres47":$compareres47,"$loadname51":$loadname51,"$loadname52":$loadname52,"$lattr53":$lattr53,"$binop55":$binop55,"$loadname57":$loadname57,"$compareres58":$compareres58,"$loadname62":$loadname62,"$loadname63":$loadname63,"$lattr64":$lattr64,"$binop66":$binop66,"$loadname68":$loadname68,"$loadname69":$loadname69,"$lattr70":$lattr70,"$binop72":$binop72};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$ret = Sk.builtin.__import__('goodies',$gbl,$loc,['*'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;Sk.importStar($module1,$loc, $gbl);if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 3;
$currColNo = 0;

$blk=4;case 4: if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: $blk=6;case 6: if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 5;
$currColNo = 0;

var $loadname2=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname3=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname3.tp$getattr($scope0.$const4, true);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname3.sk$attrError() + " has no attribute '" + $scope0.$const4.$jsstr() + "'");
};var $lattr5=$ret;var $binop7=Sk.abstr.numberBinOp($lattr5,$scope0.$const6,'Add');$ret = ($loadname2.tp$call)?$loadname2.tp$call([$binop7],undefined) : Sk.misceval.applyOrSuspend($loadname2,undefined,undefined,undefined,[$binop7]);$blk=9;case 9: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,0); }var $call8=$ret;

$currLineNo = 5;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 10;$susp.optional = true;return $susp;}$blk=10;case 10: 

$currLineNo = 6;
$currColNo = 0;

var $loadname9=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname9.tp$call)?$loadname9.tp$call([$scope0.$const10],undefined) : Sk.misceval.applyOrSuspend($loadname9,undefined,undefined,undefined,[$scope0.$const10]);$blk=11;case 11: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,9); }var $call11=$ret;

$currLineNo = 6;
$currColNo = 9;

$loc.planet=$call11;if (Sk.breakpoints('<stdin>.py',8,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,0);$susp.$blk = 12;$susp.optional = true;return $susp;}$blk=12;case 12: 

$currLineNo = 8;
$currColNo = 0;

var $loadname12=$loc.planet!==undefined?$loc.planet:Sk.misceval.loadname('planet',$gbl);;var $compareres13=null;$ret = Sk.misceval.richCompareBool($loadname12,$scope0.$const14,'Eq', true);$blk=15;case 15: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,3); }$compareres13=Sk.builtin.bool($ret);var $jfalse15=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse15){$blk=14;continue;}$blk=14;case 14: var $jfalse16=($compareres13===false||!Sk.misceval.isTrue($compareres13));if($jfalse16){$blk=13;continue;}if (Sk.breakpoints('<stdin>.py',9,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,4);$susp.$blk = 16;$susp.optional = true;return $susp;}$blk=16;case 16: 

$currLineNo = 9;
$currColNo = 4;

var $loadname17=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname18=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname18.tp$getattr($scope0.$const19, true);$blk=17;case 17: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname18.sk$attrError() + " has no attribute '" + $scope0.$const19.$jsstr() + "'");
};var $lattr20=$ret;var $binop22=Sk.abstr.numberBinOp($lattr20,$scope0.$const21,'Add');$ret = ($loadname17.tp$call)?$loadname17.tp$call([$binop22],undefined) : Sk.misceval.applyOrSuspend($loadname17,undefined,undefined,undefined,[$binop22]);$blk=18;case 18: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,4); }var $call23=$ret;

$currLineNo = 9;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',10,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,4);$susp.$blk = 19;$susp.optional = true;return $susp;}$blk=19;case 19: 

$currLineNo = 10;
$currColNo = 4;

$blk=4; continue;$blk=13; continue;case 13: if (Sk.breakpoints('<stdin>.py',12,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,0);$susp.$blk = 20;$susp.optional = true;return $susp;}$blk=20;case 20: 

$currLineNo = 12;
$currColNo = 0;

var $loadname24=$loc.planet!==undefined?$loc.planet:Sk.misceval.loadname('planet',$gbl);;var $compareres25=null;$ret = Sk.misceval.richCompareBool($loadname24,$scope0.$const26,'Eq', true);$blk=23;case 23: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,3); }$compareres25=Sk.builtin.bool($ret);var $jfalse27=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse27){$blk=22;continue;}$blk=22;case 22: var $jfalse28=($compareres25===false||!Sk.misceval.isTrue($compareres25));if($jfalse28){$blk=21;continue;}if (Sk.breakpoints('<stdin>.py',13,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,4);$susp.$blk = 24;$susp.optional = true;return $susp;}$blk=24;case 24: 

$currLineNo = 13;
$currColNo = 4;

var $loadname29=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname30=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname30.tp$getattr($scope0.$const19, true);$blk=25;case 25: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname30.sk$attrError() + " has no attribute '" + $scope0.$const19.$jsstr() + "'");
};var $lattr31=$ret;var $binop33=Sk.abstr.numberBinOp($lattr31,$scope0.$const32,'Add');$ret = ($loadname29.tp$call)?$loadname29.tp$call([$binop33],undefined) : Sk.misceval.applyOrSuspend($loadname29,undefined,undefined,undefined,[$binop33]);$blk=26;case 26: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,4); }var $call34=$ret;

$currLineNo = 13;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',14,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,4);$susp.$blk = 27;$susp.optional = true;return $susp;}$blk=27;case 27: 

$currLineNo = 14;
$currColNo = 4;

$blk=4; continue;$blk=21; continue;case 21: if (Sk.breakpoints('<stdin>.py',16,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,0);$susp.$blk = 28;$susp.optional = true;return $susp;}$blk=28;case 28: 

$currLineNo = 16;
$currColNo = 0;

var $loadname35=$loc.planet!==undefined?$loc.planet:Sk.misceval.loadname('planet',$gbl);;var $compareres36=null;$ret = Sk.misceval.richCompareBool($loadname35,$scope0.$const37,'Eq', true);$blk=31;case 31: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,3); }$compareres36=Sk.builtin.bool($ret);var $jfalse38=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse38){$blk=30;continue;}$blk=30;case 30: var $jfalse39=($compareres36===false||!Sk.misceval.isTrue($compareres36));if($jfalse39){$blk=29;continue;}if (Sk.breakpoints('<stdin>.py',17,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,4);$susp.$blk = 32;$susp.optional = true;return $susp;}$blk=32;case 32: 

$currLineNo = 17;
$currColNo = 4;

var $loadname40=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname41=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname41.tp$getattr($scope0.$const19, true);$blk=33;case 33: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname41.sk$attrError() + " has no attribute '" + $scope0.$const19.$jsstr() + "'");
};var $lattr42=$ret;var $binop44=Sk.abstr.numberBinOp($lattr42,$scope0.$const43,'Add');$ret = ($loadname40.tp$call)?$loadname40.tp$call([$binop44],undefined) : Sk.misceval.applyOrSuspend($loadname40,undefined,undefined,undefined,[$binop44]);$blk=34;case 34: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,4); }var $call45=$ret;

$currLineNo = 17;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',18,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',18,4);$susp.$blk = 35;$susp.optional = true;return $susp;}$blk=35;case 35: 

$currLineNo = 18;
$currColNo = 4;

$blk=4; continue;$blk=29; continue;case 29: if (Sk.breakpoints('<stdin>.py',20,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,0);$susp.$blk = 36;$susp.optional = true;return $susp;}$blk=36;case 36: 

$currLineNo = 20;
$currColNo = 0;

var $loadname46=$loc.planet!==undefined?$loc.planet:Sk.misceval.loadname('planet',$gbl);;var $compareres47=null;$ret = Sk.misceval.richCompareBool($loadname46,$scope0.$const48,'Eq', true);$blk=39;case 39: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,3); }$compareres47=Sk.builtin.bool($ret);var $jfalse49=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse49){$blk=38;continue;}$blk=38;case 38: var $jfalse50=($compareres47===false||!Sk.misceval.isTrue($compareres47));if($jfalse50){$blk=37;continue;}if (Sk.breakpoints('<stdin>.py',21,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',21,4);$susp.$blk = 40;$susp.optional = true;return $susp;}$blk=40;case 40: 

$currLineNo = 21;
$currColNo = 4;

var $loadname51=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname52=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname52.tp$getattr($scope0.$const19, true);$blk=41;case 41: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname52.sk$attrError() + " has no attribute '" + $scope0.$const19.$jsstr() + "'");
};var $lattr53=$ret;var $binop55=Sk.abstr.numberBinOp($lattr53,$scope0.$const54,'Add');$ret = ($loadname51.tp$call)?$loadname51.tp$call([$binop55],undefined) : Sk.misceval.applyOrSuspend($loadname51,undefined,undefined,undefined,[$binop55]);$blk=42;case 42: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,4); }var $call56=$ret;

$currLineNo = 21;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',22,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',22,4);$susp.$blk = 43;$susp.optional = true;return $susp;}$blk=43;case 43: 

$currLineNo = 22;
$currColNo = 4;

$blk=4; continue;$blk=37; continue;case 37: if (Sk.breakpoints('<stdin>.py',24,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',24,0);$susp.$blk = 44;$susp.optional = true;return $susp;}$blk=44;case 44: 

$currLineNo = 24;
$currColNo = 0;

var $loadname57=$loc.planet!==undefined?$loc.planet:Sk.misceval.loadname('planet',$gbl);;var $compareres58=null;$ret = Sk.misceval.richCompareBool($loadname57,$scope0.$const59,'Eq', true);$blk=47;case 47: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',24,3); }$compareres58=Sk.builtin.bool($ret);var $jfalse60=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse60){$blk=46;continue;}$blk=46;case 46: var $jfalse61=($compareres58===false||!Sk.misceval.isTrue($compareres58));if($jfalse61){$blk=45;continue;}if (Sk.breakpoints('<stdin>.py',25,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',25,4);$susp.$blk = 48;$susp.optional = true;return $susp;}$blk=48;case 48: 

$currLineNo = 25;
$currColNo = 4;

$blk=54; continue;$blk=45;case 54: if (Sk.breakpoints('<stdin>.py',30,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',30,0);$susp.$blk = 55;$susp.optional = true;return $susp;}$blk=55;case 55: $blk=56;case 56: if (Sk.breakpoints('<stdin>.py',31,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',31,0);$susp.$blk = 57;$susp.optional = true;return $susp;}$blk=57;case 57: 

$currLineNo = 31;
$currColNo = 0;

var $loadname68=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname69=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname69.tp$getattr($scope0.$const4, true);$blk=58;case 58: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',31,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname69.sk$attrError() + " has no attribute '" + $scope0.$const4.$jsstr() + "'");
};var $lattr70=$ret;var $binop72=Sk.abstr.numberBinOp($lattr70,$scope0.$const71,'Add');$ret = ($loadname68.tp$call)?$loadname68.tp$call([$binop72],undefined) : Sk.misceval.applyOrSuspend($loadname68,undefined,undefined,undefined,[$binop72]);$blk=59;case 59: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',31,0); }var $call73=$ret;

$currLineNo = 31;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');case 45: if (Sk.breakpoints('<stdin>.py',27,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',27,0);$susp.$blk = 49;$susp.optional = true;return $susp;}$blk=49;case 49: 

$currLineNo = 27;
$currColNo = 0;

var $loadname62=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname63=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname63.tp$getattr($scope0.$const19, true);$blk=50;case 50: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',27,7); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname63.sk$attrError() + " has no attribute '" + $scope0.$const19.$jsstr() + "'");
};var $lattr64=$ret;var $binop66=Sk.abstr.numberBinOp($lattr64,$scope0.$const65,'Add');$ret = ($loadname62.tp$call)?$loadname62.tp$call([$binop66],undefined) : Sk.misceval.applyOrSuspend($loadname62,undefined,undefined,undefined,[$binop66]);$blk=51;case 51: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',27,0); }var $call67=$ret;

$currLineNo = 27;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',28,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',28,0);$susp.$blk = 52;$susp.optional = true;return $susp;}$blk=52;case 52: 

$currLineNo = 28;
$currColNo = 0;

$blk=4; continue;if (Sk.breakpoints('<stdin>.py',30,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',30,0);$susp.$blk = 53;$susp.optional = true;return $susp;}$blk=53; continue;case 53: 

$currLineNo = 30;
$currColNo = 0;

$blk=54; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const4 = new Sk.builtin.str('reset');$scope0.$const6 = new Sk.builtin.str("What's your favourite planet?");$scope0.$const10 = new Sk.builtin.str("Enter your planet (all lowercase) or type 'quit' to end: ");$scope0.$const14 = new Sk.builtin.str("mercury");$scope0.$const19 = new Sk.builtin.str('cyan');$scope0.$const21 = new Sk.builtin.str("Mercury is the closest planet to the Sun! Did you know that a year on Mercury is just 88 days long?");$scope0.$const26 = new Sk.builtin.str("venus");$scope0.$const32 = new Sk.builtin.str("Venus is the second planet from the Sun! Did you know that Venus is the third brightest natural object in the sky after the Sun and the Moon?");$scope0.$const37 = new Sk.builtin.str("earth");$scope0.$const43 = new Sk.builtin.str("That's where we live! Earth is the third planet from the Sun! Did you know that Earth's surface is 70% water?");$scope0.$const48 = new Sk.builtin.str("mars");$scope0.$const54 = new Sk.builtin.str("Mars is the fourth planet from the Sun! Did you know that the tallest mountain in the Solar System, Olympus Mons, is on Mars and is 21km high? That's almost 13km higher than Mount Everest!");$scope0.$const59 = new Sk.builtin.str("quit");$scope0.$const65 = new Sk.builtin.str("I've never heard of that planet!");$scope0.$const71 = new Sk.builtin.str("Have a nice day! Don't space out!");
return $scope0;}();
$compiledmod;