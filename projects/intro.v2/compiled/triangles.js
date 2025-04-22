Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname2,$loadname6,$loadname11,$loadname16,$loadname21,$loadname23,$loadname26,$loadname29,$loadname31,$loadname34,$loadname37,$loadname39,$loadname42,$loadname45;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname2=susp.$tmps.$loadname2;$loadname6=susp.$tmps.$loadname6;$loadname11=susp.$tmps.$loadname11;$loadname16=susp.$tmps.$loadname16;$loadname21=susp.$tmps.$loadname21;$loadname23=susp.$tmps.$loadname23;$loadname26=susp.$tmps.$loadname26;$loadname29=susp.$tmps.$loadname29;$loadname31=susp.$tmps.$loadname31;$loadname34=susp.$tmps.$loadname34;$loadname37=susp.$tmps.$loadname37;$loadname39=susp.$tmps.$loadname39;$loadname42=susp.$tmps.$loadname42;$loadname45=susp.$tmps.$loadname45;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname2":$loadname2,"$loadname6":$loadname6,"$loadname11":$loadname11,"$loadname16":$loadname16,"$loadname21":$loadname21,"$loadname23":$loadname23,"$loadname26":$loadname26,"$loadname29":$loadname29,"$loadname31":$loadname31,"$loadname34":$loadname34,"$loadname37":$loadname37,"$loadname39":$loadname39,"$loadname42":$loadname42,"$loadname45":$loadname45};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$ret = Sk.builtin.__import__('goodies',$gbl,$loc,['*'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;Sk.importStar($module1,$loc, $gbl);if (Sk.breakpoints('<stdin>.py',2,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',2,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 2;
$currColNo = 0;

var $loadname2=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname2.tp$call)?$loadname2.tp$call([$scope0.$const3,$scope0.$const4,$scope0.$const4],undefined) : Sk.misceval.applyOrSuspend($loadname2,undefined,undefined,undefined,[$scope0.$const3,$scope0.$const4,$scope0.$const4]);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',2,0); }var $call5=$ret;

$currLineNo = 2;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 3;
$currColNo = 0;

var $loadname6=$loc.printButton!==undefined?$loc.printButton:Sk.misceval.loadname('printButton',$gbl);;$ret = ($loadname6.tp$call)?$loadname6.tp$call([$scope0.$const7,$scope0.$const8,$scope0.$const9],undefined) : Sk.misceval.applyOrSuspend($loadname6,undefined,undefined,undefined,[$scope0.$const7,$scope0.$const8,$scope0.$const9]);$blk=6;case 6: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,0); }var $call10=$ret;

$currLineNo = 3;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',4,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',4,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 4;
$currColNo = 0;

var $loadname11=$loc.printButton!==undefined?$loc.printButton:Sk.misceval.loadname('printButton',$gbl);;$ret = ($loadname11.tp$call)?$loadname11.tp$call([$scope0.$const12,$scope0.$const13,$scope0.$const14],undefined) : Sk.misceval.applyOrSuspend($loadname11,undefined,undefined,undefined,[$scope0.$const12,$scope0.$const13,$scope0.$const14]);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',4,0); }var $call15=$ret;

$currLineNo = 4;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 5;
$currColNo = 0;

var $loadname16=$loc.printButton!==undefined?$loc.printButton:Sk.misceval.loadname('printButton',$gbl);;$ret = ($loadname16.tp$call)?$loadname16.tp$call([$scope0.$const17,$scope0.$const18,$scope0.$const19],undefined) : Sk.misceval.applyOrSuspend($loadname16,undefined,undefined,undefined,[$scope0.$const17,$scope0.$const18,$scope0.$const19]);$blk=10;case 10: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,0); }var $call20=$ret;

$currLineNo = 5;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 11;$susp.optional = true;return $susp;}$blk=11;case 11: 

$currLineNo = 6;
$currColNo = 0;

$blk=12;case 12: if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 13;$susp.optional = true;return $susp;}$blk=13;case 13: $blk=14;case 14: if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 15;$susp.optional = true;return $susp;}$blk=15;case 15: 

$currLineNo = 7;
$currColNo = 0;

var $loadname21=$loc.waitForButtonClick!==undefined?$loc.waitForButtonClick:Sk.misceval.loadname('waitForButtonClick',$gbl);;$ret = ($loadname21.tp$call)?$loadname21.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname21,undefined,undefined,undefined,[]);$blk=16;case 16: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,0); }var $call22=$ret;

$currLineNo = 7;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',8,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,0);$susp.$blk = 17;$susp.optional = true;return $susp;}$blk=17;case 17: 

$currLineNo = 8;
$currColNo = 0;

var $loadname23=$loc.isButtonClicked!==undefined?$loc.isButtonClicked:Sk.misceval.loadname('isButtonClicked',$gbl);;$ret = ($loadname23.tp$call)?$loadname23.tp$call([$scope0.$const7],undefined) : Sk.misceval.applyOrSuspend($loadname23,undefined,undefined,undefined,[$scope0.$const7]);$blk=19;case 19: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,3); }var $call24=$ret;

$currLineNo = 8;
$currColNo = 3;

var $jfalse25=($call24===false||!Sk.misceval.isTrue($call24));if($jfalse25){$blk=18;continue;}if (Sk.breakpoints('<stdin>.py',9,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,4);$susp.$blk = 20;$susp.optional = true;return $susp;}$blk=20;case 20: 

$currLineNo = 9;
$currColNo = 4;

var $loadname26=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname26.tp$call)?$loadname26.tp$call([$scope0.$const27],undefined) : Sk.misceval.applyOrSuspend($loadname26,undefined,undefined,undefined,[$scope0.$const27]);$blk=21;case 21: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,4); }var $call28=$ret;

$currLineNo = 9;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',10,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,4);$susp.$blk = 22;$susp.optional = true;return $susp;}$blk=22;case 22: 

$currLineNo = 10;
$currColNo = 4;

var $loadname29=$loc.say!==undefined?$loc.say:Sk.misceval.loadname('say',$gbl);;$ret = ($loadname29.tp$call)?$loadname29.tp$call([$scope0.$const27],undefined) : Sk.misceval.applyOrSuspend($loadname29,undefined,undefined,undefined,[$scope0.$const27]);$blk=23;case 23: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,4); }var $call30=$ret;

$currLineNo = 10;
$currColNo = 4;

$blk=18;case 18: if (Sk.breakpoints('<stdin>.py',11,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,0);$susp.$blk = 24;$susp.optional = true;return $susp;}$blk=24;case 24: 

$currLineNo = 11;
$currColNo = 0;

var $loadname31=$loc.isButtonClicked!==undefined?$loc.isButtonClicked:Sk.misceval.loadname('isButtonClicked',$gbl);;$ret = ($loadname31.tp$call)?$loadname31.tp$call([$scope0.$const12],undefined) : Sk.misceval.applyOrSuspend($loadname31,undefined,undefined,undefined,[$scope0.$const12]);$blk=26;case 26: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,3); }var $call32=$ret;

$currLineNo = 11;
$currColNo = 3;

var $jfalse33=($call32===false||!Sk.misceval.isTrue($call32));if($jfalse33){$blk=25;continue;}if (Sk.breakpoints('<stdin>.py',12,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,4);$susp.$blk = 27;$susp.optional = true;return $susp;}$blk=27;case 27: 

$currLineNo = 12;
$currColNo = 4;

var $loadname34=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname34.tp$call)?$loadname34.tp$call([$scope0.$const35],undefined) : Sk.misceval.applyOrSuspend($loadname34,undefined,undefined,undefined,[$scope0.$const35]);$blk=28;case 28: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,4); }var $call36=$ret;

$currLineNo = 12;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',13,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,4);$susp.$blk = 29;$susp.optional = true;return $susp;}$blk=29;case 29: 

$currLineNo = 13;
$currColNo = 4;

var $loadname37=$loc.say!==undefined?$loc.say:Sk.misceval.loadname('say',$gbl);;$ret = ($loadname37.tp$call)?$loadname37.tp$call([$scope0.$const35],undefined) : Sk.misceval.applyOrSuspend($loadname37,undefined,undefined,undefined,[$scope0.$const35]);$blk=30;case 30: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,4); }var $call38=$ret;

$currLineNo = 13;
$currColNo = 4;

$blk=25;case 25: if (Sk.breakpoints('<stdin>.py',14,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,0);$susp.$blk = 31;$susp.optional = true;return $susp;}$blk=31;case 31: 

$currLineNo = 14;
$currColNo = 0;

var $loadname39=$loc.isButtonClicked!==undefined?$loc.isButtonClicked:Sk.misceval.loadname('isButtonClicked',$gbl);;$ret = ($loadname39.tp$call)?$loadname39.tp$call([$scope0.$const17],undefined) : Sk.misceval.applyOrSuspend($loadname39,undefined,undefined,undefined,[$scope0.$const17]);$blk=33;case 33: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,3); }var $call40=$ret;

$currLineNo = 14;
$currColNo = 3;

var $jfalse41=($call40===false||!Sk.misceval.isTrue($call40));if($jfalse41){$blk=32;continue;}if (Sk.breakpoints('<stdin>.py',15,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,4);$susp.$blk = 34;$susp.optional = true;return $susp;}$blk=34;case 34: 

$currLineNo = 15;
$currColNo = 4;

var $loadname42=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname42.tp$call)?$loadname42.tp$call([$scope0.$const43],undefined) : Sk.misceval.applyOrSuspend($loadname42,undefined,undefined,undefined,[$scope0.$const43]);$blk=35;case 35: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,4); }var $call44=$ret;

$currLineNo = 15;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',16,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,4);$susp.$blk = 36;$susp.optional = true;return $susp;}$blk=36;case 36: 

$currLineNo = 16;
$currColNo = 4;

var $loadname45=$loc.say!==undefined?$loc.say:Sk.misceval.loadname('say',$gbl);;$ret = ($loadname45.tp$call)?$loadname45.tp$call([$scope0.$const43],undefined) : Sk.misceval.applyOrSuspend($loadname45,undefined,undefined,undefined,[$scope0.$const43]);$blk=37;case 37: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,4); }var $call46=$ret;

$currLineNo = 16;
$currColNo = 4;

$blk=32;case 32: if (Sk.breakpoints('<stdin>.py',17,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,0);$susp.$blk = 38;$susp.optional = true;return $susp;}$blk=38;case 38: 

$currLineNo = 17;
$currColNo = 0;

$blk=12; continue;return $loc; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const3 = new Sk.builtin.str("https://csinschools.io/editor/samples/images/triangles.png?v=1");$scope0.$const4 = new Sk.builtin.int_(500);$scope0.$const7 = new Sk.builtin.str("What triangle am I?");$scope0.$const8 = new Sk.builtin.int_(80);$scope0.$const9 = new Sk.builtin.int_(170);$scope0.$const12 = new Sk.builtin.str("How about me?");$scope0.$const13 = new Sk.builtin.int_(310);$scope0.$const14 = new Sk.builtin.int_(260);$scope0.$const17 = new Sk.builtin.str("What is my name?");$scope0.$const18 = new Sk.builtin.int_(160);$scope0.$const19 = new Sk.builtin.int_(420);$scope0.$const27 = new Sk.builtin.str("I am an equilateral triangle!");$scope0.$const35 = new Sk.builtin.str("I am an isosceles triangle!");$scope0.$const43 = new Sk.builtin.str("I am a scalene triangle!");
return $scope0;}();
$compiledmod;