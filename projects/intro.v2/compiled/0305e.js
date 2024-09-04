Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname1,$loadname4,$loadname7,$loadname9,$loadname12,$loadname14,$loadname16,$loadname19,$loadname21,$loadname23,$loadname26,$loadname28,$loadname30,$loadname33,$loadname35,$loadname37,$loadname39,$loadname41,$loadname43,$loadname45,$loadname47,$loadname49,$loadname51,$loadname53,$loadname55,$loadname57,$loadname59,$loadname61;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname1=susp.$tmps.$loadname1;$loadname4=susp.$tmps.$loadname4;$loadname7=susp.$tmps.$loadname7;$loadname9=susp.$tmps.$loadname9;$loadname12=susp.$tmps.$loadname12;$loadname14=susp.$tmps.$loadname14;$loadname16=susp.$tmps.$loadname16;$loadname19=susp.$tmps.$loadname19;$loadname21=susp.$tmps.$loadname21;$loadname23=susp.$tmps.$loadname23;$loadname26=susp.$tmps.$loadname26;$loadname28=susp.$tmps.$loadname28;$loadname30=susp.$tmps.$loadname30;$loadname33=susp.$tmps.$loadname33;$loadname35=susp.$tmps.$loadname35;$loadname37=susp.$tmps.$loadname37;$loadname39=susp.$tmps.$loadname39;$loadname41=susp.$tmps.$loadname41;$loadname43=susp.$tmps.$loadname43;$loadname45=susp.$tmps.$loadname45;$loadname47=susp.$tmps.$loadname47;$loadname49=susp.$tmps.$loadname49;$loadname51=susp.$tmps.$loadname51;$loadname53=susp.$tmps.$loadname53;$loadname55=susp.$tmps.$loadname55;$loadname57=susp.$tmps.$loadname57;$loadname59=susp.$tmps.$loadname59;$loadname61=susp.$tmps.$loadname61;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname1":$loadname1,"$loadname4":$loadname4,"$loadname7":$loadname7,"$loadname9":$loadname9,"$loadname12":$loadname12,"$loadname14":$loadname14,"$loadname16":$loadname16,"$loadname19":$loadname19,"$loadname21":$loadname21,"$loadname23":$loadname23,"$loadname26":$loadname26,"$loadname28":$loadname28,"$loadname30":$loadname30,"$loadname33":$loadname33,"$loadname35":$loadname35,"$loadname37":$loadname37,"$loadname39":$loadname39,"$loadname41":$loadname41,"$loadname43":$loadname43,"$loadname45":$loadname45,"$loadname47":$loadname47,"$loadname49":$loadname49,"$loadname51":$loadname51,"$loadname53":$loadname53,"$loadname55":$loadname55,"$loadname57":$loadname57,"$loadname59":$loadname59,"$loadname61":$loadname61};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

var $loadname1=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname1.tp$call)?$loadname1.tp$call([$scope0.$const2],undefined) : Sk.misceval.applyOrSuspend($loadname1,undefined,undefined,undefined,[$scope0.$const2]);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $call3=$ret;

$currLineNo = 1;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',2,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',2,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 2;
$currColNo = 0;

var $loadname4=$loc.sleep!==undefined?$loc.sleep:Sk.misceval.loadname('sleep',$gbl);;$ret = ($loadname4.tp$call)?$loadname4.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname4,undefined,undefined,undefined,[$scope0.$const5]);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',2,0); }var $call6=$ret;

$currLineNo = 2;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 3;
$currColNo = 0;

var $loadname7=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname7.tp$call)?$loadname7.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname7,undefined,undefined,undefined,[]);$blk=6;case 6: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,0); }var $call8=$ret;

$currLineNo = 3;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',4,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',4,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 4;
$currColNo = 0;

var $loadname9=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname9.tp$call)?$loadname9.tp$call([$scope0.$const10],undefined) : Sk.misceval.applyOrSuspend($loadname9,undefined,undefined,undefined,[$scope0.$const10]);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',4,0); }var $call11=$ret;

$currLineNo = 4;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 5;
$currColNo = 0;

var $loadname12=$loc.sleep!==undefined?$loc.sleep:Sk.misceval.loadname('sleep',$gbl);;$ret = ($loadname12.tp$call)?$loadname12.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname12,undefined,undefined,undefined,[$scope0.$const5]);$blk=10;case 10: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,0); }var $call13=$ret;

$currLineNo = 5;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 11;$susp.optional = true;return $susp;}$blk=11;case 11: 

$currLineNo = 6;
$currColNo = 0;

var $loadname14=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname14.tp$call)?$loadname14.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname14,undefined,undefined,undefined,[]);$blk=12;case 12: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,0); }var $call15=$ret;

$currLineNo = 6;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 13;$susp.optional = true;return $susp;}$blk=13;case 13: 

$currLineNo = 7;
$currColNo = 0;

var $loadname16=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname16.tp$call)?$loadname16.tp$call([$scope0.$const17],undefined) : Sk.misceval.applyOrSuspend($loadname16,undefined,undefined,undefined,[$scope0.$const17]);$blk=14;case 14: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,0); }var $call18=$ret;

$currLineNo = 7;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',8,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,0);$susp.$blk = 15;$susp.optional = true;return $susp;}$blk=15;case 15: 

$currLineNo = 8;
$currColNo = 0;

var $loadname19=$loc.sleep!==undefined?$loc.sleep:Sk.misceval.loadname('sleep',$gbl);;$ret = ($loadname19.tp$call)?$loadname19.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname19,undefined,undefined,undefined,[$scope0.$const5]);$blk=16;case 16: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,0); }var $call20=$ret;

$currLineNo = 8;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',9,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,0);$susp.$blk = 17;$susp.optional = true;return $susp;}$blk=17;case 17: 

$currLineNo = 9;
$currColNo = 0;

var $loadname21=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname21.tp$call)?$loadname21.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname21,undefined,undefined,undefined,[]);$blk=18;case 18: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,0); }var $call22=$ret;

$currLineNo = 9;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',10,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,0);$susp.$blk = 19;$susp.optional = true;return $susp;}$blk=19;case 19: 

$currLineNo = 10;
$currColNo = 0;

var $loadname23=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname23.tp$call)?$loadname23.tp$call([$scope0.$const24],undefined) : Sk.misceval.applyOrSuspend($loadname23,undefined,undefined,undefined,[$scope0.$const24]);$blk=20;case 20: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,0); }var $call25=$ret;

$currLineNo = 10;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',11,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,0);$susp.$blk = 21;$susp.optional = true;return $susp;}$blk=21;case 21: 

$currLineNo = 11;
$currColNo = 0;

var $loadname26=$loc.sleep!==undefined?$loc.sleep:Sk.misceval.loadname('sleep',$gbl);;$ret = ($loadname26.tp$call)?$loadname26.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname26,undefined,undefined,undefined,[$scope0.$const5]);$blk=22;case 22: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,0); }var $call27=$ret;

$currLineNo = 11;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',12,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,0);$susp.$blk = 23;$susp.optional = true;return $susp;}$blk=23;case 23: 

$currLineNo = 12;
$currColNo = 0;

var $loadname28=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname28.tp$call)?$loadname28.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname28,undefined,undefined,undefined,[]);$blk=24;case 24: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,0); }var $call29=$ret;

$currLineNo = 12;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',13,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,0);$susp.$blk = 25;$susp.optional = true;return $susp;}$blk=25;case 25: 

$currLineNo = 13;
$currColNo = 0;

var $loadname30=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname30.tp$call)?$loadname30.tp$call([$scope0.$const31],undefined) : Sk.misceval.applyOrSuspend($loadname30,undefined,undefined,undefined,[$scope0.$const31]);$blk=26;case 26: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,0); }var $call32=$ret;

$currLineNo = 13;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',14,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,0);$susp.$blk = 27;$susp.optional = true;return $susp;}$blk=27;case 27: 

$currLineNo = 14;
$currColNo = 0;

var $loadname33=$loc.sleep!==undefined?$loc.sleep:Sk.misceval.loadname('sleep',$gbl);;$ret = ($loadname33.tp$call)?$loadname33.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname33,undefined,undefined,undefined,[$scope0.$const5]);$blk=28;case 28: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,0); }var $call34=$ret;

$currLineNo = 14;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',15,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,0);$susp.$blk = 29;$susp.optional = true;return $susp;}$blk=29;case 29: 

$currLineNo = 15;
$currColNo = 0;

var $loadname35=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname35.tp$call)?$loadname35.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname35,undefined,undefined,undefined,[]);$blk=30;case 30: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,0); }var $call36=$ret;

$currLineNo = 15;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',16,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,0);$susp.$blk = 31;$susp.optional = true;return $susp;}$blk=31;case 31: 

$currLineNo = 16;
$currColNo = 0;

var $loadname37=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname37.tp$call)?$loadname37.tp$call([$scope0.$const2],undefined) : Sk.misceval.applyOrSuspend($loadname37,undefined,undefined,undefined,[$scope0.$const2]);$blk=32;case 32: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,0); }var $call38=$ret;

$currLineNo = 16;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',17,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,0);$susp.$blk = 33;$susp.optional = true;return $susp;}$blk=33;case 33: 

$currLineNo = 17;
$currColNo = 0;

var $loadname39=$loc.sleep!==undefined?$loc.sleep:Sk.misceval.loadname('sleep',$gbl);;$ret = ($loadname39.tp$call)?$loadname39.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname39,undefined,undefined,undefined,[$scope0.$const5]);$blk=34;case 34: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,0); }var $call40=$ret;

$currLineNo = 17;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',18,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',18,0);$susp.$blk = 35;$susp.optional = true;return $susp;}$blk=35;case 35: 

$currLineNo = 18;
$currColNo = 0;

var $loadname41=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname41.tp$call)?$loadname41.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname41,undefined,undefined,undefined,[]);$blk=36;case 36: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',18,0); }var $call42=$ret;

$currLineNo = 18;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',19,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',19,0);$susp.$blk = 37;$susp.optional = true;return $susp;}$blk=37;case 37: 

$currLineNo = 19;
$currColNo = 0;

var $loadname43=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname43.tp$call)?$loadname43.tp$call([$scope0.$const10],undefined) : Sk.misceval.applyOrSuspend($loadname43,undefined,undefined,undefined,[$scope0.$const10]);$blk=38;case 38: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',19,0); }var $call44=$ret;

$currLineNo = 19;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',20,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,0);$susp.$blk = 39;$susp.optional = true;return $susp;}$blk=39;case 39: 

$currLineNo = 20;
$currColNo = 0;

var $loadname45=$loc.sleep!==undefined?$loc.sleep:Sk.misceval.loadname('sleep',$gbl);;$ret = ($loadname45.tp$call)?$loadname45.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname45,undefined,undefined,undefined,[$scope0.$const5]);$blk=40;case 40: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,0); }var $call46=$ret;

$currLineNo = 20;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',21,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',21,0);$susp.$blk = 41;$susp.optional = true;return $susp;}$blk=41;case 41: 

$currLineNo = 21;
$currColNo = 0;

var $loadname47=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname47.tp$call)?$loadname47.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname47,undefined,undefined,undefined,[]);$blk=42;case 42: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,0); }var $call48=$ret;

$currLineNo = 21;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',22,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',22,0);$susp.$blk = 43;$susp.optional = true;return $susp;}$blk=43;case 43: 

$currLineNo = 22;
$currColNo = 0;

var $loadname49=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname49.tp$call)?$loadname49.tp$call([$scope0.$const17],undefined) : Sk.misceval.applyOrSuspend($loadname49,undefined,undefined,undefined,[$scope0.$const17]);$blk=44;case 44: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',22,0); }var $call50=$ret;

$currLineNo = 22;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',23,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',23,0);$susp.$blk = 45;$susp.optional = true;return $susp;}$blk=45;case 45: 

$currLineNo = 23;
$currColNo = 0;

var $loadname51=$loc.sleep!==undefined?$loc.sleep:Sk.misceval.loadname('sleep',$gbl);;$ret = ($loadname51.tp$call)?$loadname51.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname51,undefined,undefined,undefined,[$scope0.$const5]);$blk=46;case 46: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',23,0); }var $call52=$ret;

$currLineNo = 23;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',24,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',24,0);$susp.$blk = 47;$susp.optional = true;return $susp;}$blk=47;case 47: 

$currLineNo = 24;
$currColNo = 0;

var $loadname53=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname53.tp$call)?$loadname53.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname53,undefined,undefined,undefined,[]);$blk=48;case 48: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',24,0); }var $call54=$ret;

$currLineNo = 24;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',25,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',25,0);$susp.$blk = 49;$susp.optional = true;return $susp;}$blk=49;case 49: 

$currLineNo = 25;
$currColNo = 0;

var $loadname55=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname55.tp$call)?$loadname55.tp$call([$scope0.$const24],undefined) : Sk.misceval.applyOrSuspend($loadname55,undefined,undefined,undefined,[$scope0.$const24]);$blk=50;case 50: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',25,0); }var $call56=$ret;

$currLineNo = 25;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',26,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',26,0);$susp.$blk = 51;$susp.optional = true;return $susp;}$blk=51;case 51: 

$currLineNo = 26;
$currColNo = 0;

var $loadname57=$loc.sleep!==undefined?$loc.sleep:Sk.misceval.loadname('sleep',$gbl);;$ret = ($loadname57.tp$call)?$loadname57.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname57,undefined,undefined,undefined,[$scope0.$const5]);$blk=52;case 52: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',26,0); }var $call58=$ret;

$currLineNo = 26;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',27,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',27,0);$susp.$blk = 53;$susp.optional = true;return $susp;}$blk=53;case 53: 

$currLineNo = 27;
$currColNo = 0;

var $loadname59=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname59.tp$call)?$loadname59.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname59,undefined,undefined,undefined,[]);$blk=54;case 54: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',27,0); }var $call60=$ret;

$currLineNo = 27;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',28,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',28,0);$susp.$blk = 55;$susp.optional = true;return $susp;}$blk=55;case 55: 

$currLineNo = 28;
$currColNo = 0;

var $loadname61=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname61.tp$call)?$loadname61.tp$call([$scope0.$const31],undefined) : Sk.misceval.applyOrSuspend($loadname61,undefined,undefined,undefined,[$scope0.$const31]);$blk=56;case 56: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',28,0); }var $call62=$ret;

$currLineNo = 28;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const2 = new Sk.builtin.str("'");$scope0.$const5 = new Sk.builtin.float_(0.1);$scope0.$const10 = new Sk.builtin.str(".");$scope0.$const17 = new Sk.builtin.str("o");$scope0.$const24 = new Sk.builtin.str("O");$scope0.$const31 = new Sk.builtin.str("|");
return $scope0;}();
$compiledmod;