Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname2,$loadname5,$loadname8,$loadname11,$loadname14,$compareres15,$loadname19,$loadname22,$loadname25,$compareres26,$loadname30,$loadname32,$loadname35,$compareres36,$loadname40,$loadname43,$loadname46,$compareres47,$loadname51,$loadname53,$loadname56,$loadname59;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname2=susp.$tmps.$loadname2;$loadname5=susp.$tmps.$loadname5;$loadname8=susp.$tmps.$loadname8;$loadname11=susp.$tmps.$loadname11;$loadname14=susp.$tmps.$loadname14;$compareres15=susp.$tmps.$compareres15;$loadname19=susp.$tmps.$loadname19;$loadname22=susp.$tmps.$loadname22;$loadname25=susp.$tmps.$loadname25;$compareres26=susp.$tmps.$compareres26;$loadname30=susp.$tmps.$loadname30;$loadname32=susp.$tmps.$loadname32;$loadname35=susp.$tmps.$loadname35;$compareres36=susp.$tmps.$compareres36;$loadname40=susp.$tmps.$loadname40;$loadname43=susp.$tmps.$loadname43;$loadname46=susp.$tmps.$loadname46;$compareres47=susp.$tmps.$compareres47;$loadname51=susp.$tmps.$loadname51;$loadname53=susp.$tmps.$loadname53;$loadname56=susp.$tmps.$loadname56;$loadname59=susp.$tmps.$loadname59;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname2":$loadname2,"$loadname5":$loadname5,"$loadname8":$loadname8,"$loadname11":$loadname11,"$loadname14":$loadname14,"$compareres15":$compareres15,"$loadname19":$loadname19,"$loadname22":$loadname22,"$loadname25":$loadname25,"$compareres26":$compareres26,"$loadname30":$loadname30,"$loadname32":$loadname32,"$loadname35":$loadname35,"$compareres36":$compareres36,"$loadname40":$loadname40,"$loadname43":$loadname43,"$loadname46":$loadname46,"$compareres47":$compareres47,"$loadname51":$loadname51,"$loadname53":$loadname53,"$loadname56":$loadname56,"$loadname59":$loadname59};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',2,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',2,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 2;
$currColNo = 0;

$ret = Sk.builtin.__import__('csinsc',$gbl,$loc,['*'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',2,0); }var $module1=$ret;Sk.importStar($module1,$loc, $gbl);if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 3;
$currColNo = 0;

var $loadname2=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname2.tp$call)?$loadname2.tp$call([$scope0.$const3],undefined) : Sk.misceval.applyOrSuspend($loadname2,undefined,undefined,undefined,[$scope0.$const3]);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,0); }var $call4=$ret;

$currLineNo = 3;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',4,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',4,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 4;
$currColNo = 0;

var $loadname5=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname5.tp$call)?$loadname5.tp$call([$scope0.$const6],undefined) : Sk.misceval.applyOrSuspend($loadname5,undefined,undefined,undefined,[$scope0.$const6]);$blk=6;case 6: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',4,0); }var $call7=$ret;

$currLineNo = 4;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 6;
$currColNo = 0;

var $loadname8=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname8.tp$call)?$loadname8.tp$call([$scope0.$const9],undefined) : Sk.misceval.applyOrSuspend($loadname8,undefined,undefined,undefined,[$scope0.$const9]);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,0); }var $call10=$ret;

$currLineNo = 6;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',8,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 8;
$currColNo = 0;

var $loadname11=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname11.tp$call)?$loadname11.tp$call([$scope0.$const12],undefined) : Sk.misceval.applyOrSuspend($loadname11,undefined,undefined,undefined,[$scope0.$const12]);$blk=10;case 10: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,7); }var $call13=$ret;

$currLineNo = 8;
$currColNo = 7;

$loc.door=$call13;if (Sk.breakpoints('<stdin>.py',10,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,0);$susp.$blk = 11;$susp.optional = true;return $susp;}$blk=11;case 11: 

$currLineNo = 10;
$currColNo = 0;

var $loadname14=$loc.door!==undefined?$loc.door:Sk.misceval.loadname('door',$gbl);;var $compareres15=null;$ret = Sk.misceval.richCompareBool($loadname14,$scope0.$const16,'Eq', true);$blk=15;case 15: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,3); }$compareres15=Sk.builtin.bool($ret);var $jfalse17=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse17){$blk=14;continue;}$blk=14;case 14: var $jfalse18=($compareres15===false||!Sk.misceval.isTrue($compareres15));if($jfalse18){$blk=13;continue;}if (Sk.breakpoints('<stdin>.py',11,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,2);$susp.$blk = 16;$susp.optional = true;return $susp;}$blk=16;case 16: 

$currLineNo = 11;
$currColNo = 2;

var $loadname19=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname19.tp$call)?$loadname19.tp$call([$scope0.$const20],undefined) : Sk.misceval.applyOrSuspend($loadname19,undefined,undefined,undefined,[$scope0.$const20]);$blk=17;case 17: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,2); }var $call21=$ret;

$currLineNo = 11;
$currColNo = 2;

if (Sk.breakpoints('<stdin>.py',12,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,2);$susp.$blk = 18;$susp.optional = true;return $susp;}$blk=18;case 18: 

$currLineNo = 12;
$currColNo = 2;

var $loadname22=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname22.tp$call)?$loadname22.tp$call([$scope0.$const23],undefined) : Sk.misceval.applyOrSuspend($loadname22,undefined,undefined,undefined,[$scope0.$const23]);$blk=19;case 19: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,2); }var $call24=$ret;

$currLineNo = 12;
$currColNo = 2;

$blk=12;case 12: if (Sk.breakpoints('<stdin>.py',27,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',27,0);$susp.$blk = 49;$susp.optional = true;return $susp;}$blk=49;case 49: 

$currLineNo = 27;
$currColNo = 0;

var $loadname59=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname59.tp$call)?$loadname59.tp$call([$scope0.$const60],undefined) : Sk.misceval.applyOrSuspend($loadname59,undefined,undefined,undefined,[$scope0.$const60]);$blk=50;case 50: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',27,0); }var $call61=$ret;

$currLineNo = 27;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');case 13: if (Sk.breakpoints('<stdin>.py',14,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,5);$susp.$blk = 20;$susp.optional = true;return $susp;}$blk=20;case 20: 

$currLineNo = 14;
$currColNo = 5;

var $loadname25=$loc.door!==undefined?$loc.door:Sk.misceval.loadname('door',$gbl);;var $compareres26=null;$ret = Sk.misceval.richCompareBool($loadname25,$scope0.$const27,'Eq', true);$blk=24;case 24: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,5); }$compareres26=Sk.builtin.bool($ret);var $jfalse28=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse28){$blk=23;continue;}$blk=23;case 23: var $jfalse29=($compareres26===false||!Sk.misceval.isTrue($compareres26));if($jfalse29){$blk=22;continue;}if (Sk.breakpoints('<stdin>.py',15,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,2);$susp.$blk = 25;$susp.optional = true;return $susp;}$blk=25;case 25: 

$currLineNo = 15;
$currColNo = 2;

var $loadname30=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname30.tp$call)?$loadname30.tp$call([$scope0.$const20],undefined) : Sk.misceval.applyOrSuspend($loadname30,undefined,undefined,undefined,[$scope0.$const20]);$blk=26;case 26: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,2); }var $call31=$ret;

$currLineNo = 15;
$currColNo = 2;

if (Sk.breakpoints('<stdin>.py',16,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,2);$susp.$blk = 27;$susp.optional = true;return $susp;}$blk=27;case 27: 

$currLineNo = 16;
$currColNo = 2;

var $loadname32=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname32.tp$call)?$loadname32.tp$call([$scope0.$const33],undefined) : Sk.misceval.applyOrSuspend($loadname32,undefined,undefined,undefined,[$scope0.$const33]);$blk=28;case 28: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,2); }var $call34=$ret;

$currLineNo = 16;
$currColNo = 2;

$blk=21;case 21: $blk=12; continue;case 22: if (Sk.breakpoints('<stdin>.py',18,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',18,5);$susp.$blk = 29;$susp.optional = true;return $susp;}$blk=29;case 29: 

$currLineNo = 18;
$currColNo = 5;

var $loadname35=$loc.door!==undefined?$loc.door:Sk.misceval.loadname('door',$gbl);;var $compareres36=null;$ret = Sk.misceval.richCompareBool($loadname35,$scope0.$const37,'Eq', true);$blk=33;case 33: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',18,5); }$compareres36=Sk.builtin.bool($ret);var $jfalse38=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse38){$blk=32;continue;}$blk=32;case 32: var $jfalse39=($compareres36===false||!Sk.misceval.isTrue($compareres36));if($jfalse39){$blk=31;continue;}if (Sk.breakpoints('<stdin>.py',19,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',19,2);$susp.$blk = 34;$susp.optional = true;return $susp;}$blk=34;case 34: 

$currLineNo = 19;
$currColNo = 2;

var $loadname40=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname40.tp$call)?$loadname40.tp$call([$scope0.$const41],undefined) : Sk.misceval.applyOrSuspend($loadname40,undefined,undefined,undefined,[$scope0.$const41]);$blk=35;case 35: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',19,2); }var $call42=$ret;

$currLineNo = 19;
$currColNo = 2;

if (Sk.breakpoints('<stdin>.py',20,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,2);$susp.$blk = 36;$susp.optional = true;return $susp;}$blk=36;case 36: 

$currLineNo = 20;
$currColNo = 2;

var $loadname43=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname43.tp$call)?$loadname43.tp$call([$scope0.$const44],undefined) : Sk.misceval.applyOrSuspend($loadname43,undefined,undefined,undefined,[$scope0.$const44]);$blk=37;case 37: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,2); }var $call45=$ret;

$currLineNo = 20;
$currColNo = 2;

$blk=30;case 30: $blk=21; continue;case 31: if (Sk.breakpoints('<stdin>.py',22,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',22,5);$susp.$blk = 38;$susp.optional = true;return $susp;}$blk=38;case 38: 

$currLineNo = 22;
$currColNo = 5;

var $loadname46=$loc.door!==undefined?$loc.door:Sk.misceval.loadname('door',$gbl);;var $compareres47=null;$ret = Sk.misceval.richCompareBool($loadname46,$scope0.$const48,'Eq', true);$blk=42;case 42: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',22,5); }$compareres47=Sk.builtin.bool($ret);var $jfalse49=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse49){$blk=41;continue;}$blk=41;case 41: var $jfalse50=($compareres47===false||!Sk.misceval.isTrue($compareres47));if($jfalse50){$blk=40;continue;}if (Sk.breakpoints('<stdin>.py',23,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',23,2);$susp.$blk = 43;$susp.optional = true;return $susp;}$blk=43;case 43: 

$currLineNo = 23;
$currColNo = 2;

var $loadname51=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname51.tp$call)?$loadname51.tp$call([$scope0.$const20],undefined) : Sk.misceval.applyOrSuspend($loadname51,undefined,undefined,undefined,[$scope0.$const20]);$blk=44;case 44: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',23,2); }var $call52=$ret;

$currLineNo = 23;
$currColNo = 2;

if (Sk.breakpoints('<stdin>.py',24,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',24,2);$susp.$blk = 45;$susp.optional = true;return $susp;}$blk=45;case 45: 

$currLineNo = 24;
$currColNo = 2;

var $loadname53=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname53.tp$call)?$loadname53.tp$call([$scope0.$const54],undefined) : Sk.misceval.applyOrSuspend($loadname53,undefined,undefined,undefined,[$scope0.$const54]);$blk=46;case 46: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',24,2); }var $call55=$ret;

$currLineNo = 24;
$currColNo = 2;

$blk=39;case 39: $blk=30; continue;case 40: if (Sk.breakpoints('<stdin>.py',26,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',26,2);$susp.$blk = 47;$susp.optional = true;return $susp;}$blk=47;case 47: 

$currLineNo = 26;
$currColNo = 2;

var $loadname56=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname56.tp$call)?$loadname56.tp$call([$scope0.$const57],undefined) : Sk.misceval.applyOrSuspend($loadname56,undefined,undefined,undefined,[$scope0.$const57]);$blk=48;case 48: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',26,2); }var $call58=$ret;

$currLineNo = 26;
$currColNo = 2;

$blk=39; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const3 = new Sk.builtin.str("There are 4 doors...");$scope0.$const6 = new Sk.builtin.str("samples/images/doors.png");$scope0.$const9 = new Sk.builtin.str("Behind 1 of them is a car... if you choose correctly, you win it!!");$scope0.$const12 = new Sk.builtin.str("Enter your choice (lower case): ");$scope0.$const16 = new Sk.builtin.str("a");$scope0.$const20 = new Sk.builtin.str("Sorry, no car behind that one...");$scope0.$const23 = new Sk.builtin.str("samples/images/doors_a.png");$scope0.$const27 = new Sk.builtin.str("b");$scope0.$const33 = new Sk.builtin.str("samples/images/doors_b.png");$scope0.$const37 = new Sk.builtin.str("c");$scope0.$const41 = new Sk.builtin.str("samples/images/doors_car.png");$scope0.$const44 = new Sk.builtin.str("Ding! Ding! Ding! YOU WON THE CAR!");$scope0.$const48 = new Sk.builtin.str("d");$scope0.$const54 = new Sk.builtin.str("samples/images/doors_d.png");$scope0.$const57 = new Sk.builtin.str("There is no such door!");$scope0.$const60 = new Sk.builtin.str("Bye now!");
return $scope0;}();
$compiledmod;