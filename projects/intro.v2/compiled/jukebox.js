Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname2,$loadname6,$loadname11,$loadname15,$loadname17,$loadname20,$loadname23,$loadname26;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname2=susp.$tmps.$loadname2;$loadname6=susp.$tmps.$loadname6;$loadname11=susp.$tmps.$loadname11;$loadname15=susp.$tmps.$loadname15;$loadname17=susp.$tmps.$loadname17;$loadname20=susp.$tmps.$loadname20;$loadname23=susp.$tmps.$loadname23;$loadname26=susp.$tmps.$loadname26;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname2":$loadname2,"$loadname6":$loadname6,"$loadname11":$loadname11,"$loadname15":$loadname15,"$loadname17":$loadname17,"$loadname20":$loadname20,"$loadname23":$loadname23,"$loadname26":$loadname26};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',2,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',2,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 2;
$currColNo = 0;

$ret = Sk.builtin.__import__('goodies',$gbl,$loc,['*'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',2,0); }var $module1=$ret;Sk.importStar($module1,$loc, $gbl);if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 3;
$currColNo = 0;

var $loadname2=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname2.tp$call)?$loadname2.tp$call([$scope0.$const3],['width',$scope0.$const4,'height',$scope0.$const4]) : Sk.misceval.applyOrSuspend($loadname2,undefined,undefined,['width',$scope0.$const4,'height',$scope0.$const4],[$scope0.$const3]);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,0); }var $call5=$ret;

$currLineNo = 3;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 6;
$currColNo = 0;

var $loadname6=$loc.printButton!==undefined?$loc.printButton:Sk.misceval.loadname('printButton',$gbl);;$ret = ($loadname6.tp$call)?$loadname6.tp$call([$scope0.$const7],['x',$scope0.$const8,'y',$scope0.$const9]) : Sk.misceval.applyOrSuspend($loadname6,undefined,undefined,['x',$scope0.$const8,'y',$scope0.$const9],[$scope0.$const7]);$blk=6;case 6: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,0); }var $call10=$ret;

$currLineNo = 6;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 7;
$currColNo = 0;

var $loadname11=$loc.printButton!==undefined?$loc.printButton:Sk.misceval.loadname('printButton',$gbl);;$ret = ($loadname11.tp$call)?$loadname11.tp$call([$scope0.$const12],['x',$scope0.$const13,'y',$scope0.$const9]) : Sk.misceval.applyOrSuspend($loadname11,undefined,undefined,['x',$scope0.$const13,'y',$scope0.$const9],[$scope0.$const12]);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,0); }var $call14=$ret;

$currLineNo = 7;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',9,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 9;
$currColNo = 0;

$blk=10;case 10: if (Sk.breakpoints('<stdin>.py',9,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',9,0);$susp.$blk = 11;$susp.optional = true;return $susp;}$blk=11;case 11: $blk=12;case 12: if (Sk.breakpoints('<stdin>.py',11,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,0);$susp.$blk = 13;$susp.optional = true;return $susp;}$blk=13;case 13: 

$currLineNo = 11;
$currColNo = 0;

var $loadname15=$loc.waitForButtonClick!==undefined?$loc.waitForButtonClick:Sk.misceval.loadname('waitForButtonClick',$gbl);;$ret = ($loadname15.tp$call)?$loadname15.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname15,undefined,undefined,undefined,[]);$blk=14;case 14: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,0); }var $call16=$ret;

$currLineNo = 11;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',12,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,0);$susp.$blk = 15;$susp.optional = true;return $susp;}$blk=15;case 15: 

$currLineNo = 12;
$currColNo = 0;

var $loadname17=$loc.isButtonClicked!==undefined?$loc.isButtonClicked:Sk.misceval.loadname('isButtonClicked',$gbl);;$ret = ($loadname17.tp$call)?$loadname17.tp$call([$scope0.$const7],undefined) : Sk.misceval.applyOrSuspend($loadname17,undefined,undefined,undefined,[$scope0.$const7]);$blk=17;case 17: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,3); }var $call18=$ret;

$currLineNo = 12;
$currColNo = 3;

var $jfalse19=($call18===false||!Sk.misceval.isTrue($call18));if($jfalse19){$blk=16;continue;}if (Sk.breakpoints('<stdin>.py',13,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,4);$susp.$blk = 18;$susp.optional = true;return $susp;}$blk=18;case 18: 

$currLineNo = 13;
$currColNo = 4;

var $loadname20=$loc.playSound!==undefined?$loc.playSound:Sk.misceval.loadname('playSound',$gbl);;$ret = ($loadname20.tp$call)?$loadname20.tp$call([$scope0.$const21],undefined) : Sk.misceval.applyOrSuspend($loadname20,undefined,undefined,undefined,[$scope0.$const21]);$blk=19;case 19: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,4); }var $call22=$ret;

$currLineNo = 13;
$currColNo = 4;

$blk=16;case 16: if (Sk.breakpoints('<stdin>.py',14,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,0);$susp.$blk = 20;$susp.optional = true;return $susp;}$blk=20;case 20: 

$currLineNo = 14;
$currColNo = 0;

var $loadname23=$loc.isButtonClicked!==undefined?$loc.isButtonClicked:Sk.misceval.loadname('isButtonClicked',$gbl);;$ret = ($loadname23.tp$call)?$loadname23.tp$call([$scope0.$const12],undefined) : Sk.misceval.applyOrSuspend($loadname23,undefined,undefined,undefined,[$scope0.$const12]);$blk=22;case 22: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,3); }var $call24=$ret;

$currLineNo = 14;
$currColNo = 3;

var $jfalse25=($call24===false||!Sk.misceval.isTrue($call24));if($jfalse25){$blk=21;continue;}if (Sk.breakpoints('<stdin>.py',15,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,4);$susp.$blk = 23;$susp.optional = true;return $susp;}$blk=23;case 23: 

$currLineNo = 15;
$currColNo = 4;

var $loadname26=$loc.playSound!==undefined?$loc.playSound:Sk.misceval.loadname('playSound',$gbl);;$ret = ($loadname26.tp$call)?$loadname26.tp$call([$scope0.$const27],undefined) : Sk.misceval.applyOrSuspend($loadname26,undefined,undefined,undefined,[$scope0.$const27]);$blk=24;case 24: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,4); }var $call28=$ret;

$currLineNo = 15;
$currColNo = 4;

$blk=21;case 21: if (Sk.breakpoints('<stdin>.py',17,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,0);$susp.$blk = 25;$susp.optional = true;return $susp;}$blk=25;case 25: 

$currLineNo = 17;
$currColNo = 0;

$blk=10; continue;return $loc; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const3 = new Sk.builtin.str("https://i.imgur.com/GNwjC9O.png");$scope0.$const4 = new Sk.builtin.int_(400);$scope0.$const7 = new Sk.builtin.str("Song 1");$scope0.$const8 = new Sk.builtin.int_(145);$scope0.$const9 = new Sk.builtin.int_(155);$scope0.$const12 = new Sk.builtin.str("Song 2");$scope0.$const13 = new Sk.builtin.int_(215);$scope0.$const21 = new Sk.builtin.str("samples/music/Lemmings_02.mp3");$scope0.$const27 = new Sk.builtin.str("samples/music/Turbo_Outrun_03.mp3");
return $scope0;}();
$compiledmod;