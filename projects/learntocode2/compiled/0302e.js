Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname1,$loadname4,$compareres5,$loadname9,$loadname12,$compareres13,$loadname17,$loadname20,$loadname21,$binop23,$loadname25,$compareres26,$loadname30,$loadname32,$compareres33,$loadname37,$loadname40,$compareres41,$loadname45,$loadname48,$compareres49,$loadname53,$loadname56,$loadname59,$loadname60,$binop61,$loadname63,$loadname64,$binop65;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname1=susp.$tmps.$loadname1;$loadname4=susp.$tmps.$loadname4;$compareres5=susp.$tmps.$compareres5;$loadname9=susp.$tmps.$loadname9;$loadname12=susp.$tmps.$loadname12;$compareres13=susp.$tmps.$compareres13;$loadname17=susp.$tmps.$loadname17;$loadname20=susp.$tmps.$loadname20;$loadname21=susp.$tmps.$loadname21;$binop23=susp.$tmps.$binop23;$loadname25=susp.$tmps.$loadname25;$compareres26=susp.$tmps.$compareres26;$loadname30=susp.$tmps.$loadname30;$loadname32=susp.$tmps.$loadname32;$compareres33=susp.$tmps.$compareres33;$loadname37=susp.$tmps.$loadname37;$loadname40=susp.$tmps.$loadname40;$compareres41=susp.$tmps.$compareres41;$loadname45=susp.$tmps.$loadname45;$loadname48=susp.$tmps.$loadname48;$compareres49=susp.$tmps.$compareres49;$loadname53=susp.$tmps.$loadname53;$loadname56=susp.$tmps.$loadname56;$loadname59=susp.$tmps.$loadname59;$loadname60=susp.$tmps.$loadname60;$binop61=susp.$tmps.$binop61;$loadname63=susp.$tmps.$loadname63;$loadname64=susp.$tmps.$loadname64;$binop65=susp.$tmps.$binop65;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname1":$loadname1,"$loadname4":$loadname4,"$compareres5":$compareres5,"$loadname9":$loadname9,"$loadname12":$loadname12,"$compareres13":$compareres13,"$loadname17":$loadname17,"$loadname20":$loadname20,"$loadname21":$loadname21,"$binop23":$binop23,"$loadname25":$loadname25,"$compareres26":$compareres26,"$loadname30":$loadname30,"$loadname32":$loadname32,"$compareres33":$compareres33,"$loadname37":$loadname37,"$loadname40":$loadname40,"$compareres41":$compareres41,"$loadname45":$loadname45,"$loadname48":$loadname48,"$compareres49":$compareres49,"$loadname53":$loadname53,"$loadname56":$loadname56,"$loadname59":$loadname59,"$loadname60":$loadname60,"$binop61":$binop61,"$loadname63":$loadname63,"$loadname64":$loadname64,"$binop65":$binop65};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

var $loadname1=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname1.tp$call)?$loadname1.tp$call([$scope0.$const2],undefined) : Sk.misceval.applyOrSuspend($loadname1,undefined,undefined,undefined,[$scope0.$const2]);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,7); }var $call3=$ret;

$currLineNo = 1;
$currColNo = 7;

$loc.food=$call3;if (Sk.breakpoints('<stdin>.py',2,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',2,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 2;
$currColNo = 0;

var $loadname4=$loc.food!==undefined?$loc.food:Sk.misceval.loadname('food',$gbl);;var $compareres5=null;$ret = Sk.misceval.richCompareBool($loadname4,$scope0.$const6,'Eq', true);$blk=7;case 7: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',2,3); }$compareres5=Sk.builtin.bool($ret);var $jfalse7=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse7){$blk=6;continue;}$blk=6;case 6: var $jfalse8=($compareres5===false||!Sk.misceval.isTrue($compareres5));if($jfalse8){$blk=5;continue;}if (Sk.breakpoints('<stdin>.py',3,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,2);$susp.$blk = 8;$susp.optional = true;return $susp;}$blk=8;case 8: 

$currLineNo = 3;
$currColNo = 2;

var $loadname9=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname9.tp$call)?$loadname9.tp$call([$scope0.$const10],undefined) : Sk.misceval.applyOrSuspend($loadname9,undefined,undefined,undefined,[$scope0.$const10]);$blk=9;case 9: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,9); }var $call11=$ret;

$currLineNo = 3;
$currColNo = 9;

$loc.dish=$call11;if (Sk.breakpoints('<stdin>.py',4,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',4,2);$susp.$blk = 10;$susp.optional = true;return $susp;}$blk=10;case 10: 

$currLineNo = 4;
$currColNo = 2;

var $loadname12=$loc.dish!==undefined?$loc.dish:Sk.misceval.loadname('dish',$gbl);;var $compareres13=null;$ret = Sk.misceval.richCompareBool($loadname12,$scope0.$const14,'Eq', true);$blk=14;case 14: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',4,5); }$compareres13=Sk.builtin.bool($ret);var $jfalse15=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse15){$blk=13;continue;}$blk=13;case 13: var $jfalse16=($compareres13===false||!Sk.misceval.isTrue($compareres13));if($jfalse16){$blk=12;continue;}if (Sk.breakpoints('<stdin>.py',5,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,4);$susp.$blk = 15;$susp.optional = true;return $susp;}$blk=15;case 15: 

$currLineNo = 5;
$currColNo = 4;

var $loadname17=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname17.tp$call)?$loadname17.tp$call([$scope0.$const18],undefined) : Sk.misceval.applyOrSuspend($loadname17,undefined,undefined,undefined,[$scope0.$const18]);$blk=16;case 16: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,4); }var $call19=$ret;

$currLineNo = 5;
$currColNo = 4;

$blk=11;case 11: $blk=4;case 4: return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');case 5: if (Sk.breakpoints('<stdin>.py',8,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,5);$susp.$blk = 19;$susp.optional = true;return $susp;}$blk=19;case 19: 

$currLineNo = 8;
$currColNo = 5;

var $loadname25=$loc.food!==undefined?$loc.food:Sk.misceval.loadname('food',$gbl);;var $compareres26=null;$ret = Sk.misceval.richCompareBool($loadname25,$scope0.$const27,'Eq', true);$blk=23;case 23: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,5); }$compareres26=Sk.builtin.bool($ret);var $jfalse28=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse28){$blk=22;continue;}$blk=22;case 22: var $jfalse29=($compareres26===false||!Sk.misceval.isTrue($compareres26));if($jfalse29){$blk=21;continue;}if (Sk.breakpoints('<stdin>.py',9,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,2);$susp.$blk = 24;$susp.optional = true;return $susp;}$blk=24;case 24: 

$currLineNo = 9;
$currColNo = 2;

var $loadname30=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname30.tp$call)?$loadname30.tp$call([$scope0.$const10],undefined) : Sk.misceval.applyOrSuspend($loadname30,undefined,undefined,undefined,[$scope0.$const10]);$blk=25;case 25: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,9); }var $call31=$ret;

$currLineNo = 9;
$currColNo = 9;

$loc.dish=$call31;if (Sk.breakpoints('<stdin>.py',10,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,2);$susp.$blk = 26;$susp.optional = true;return $susp;}$blk=26;case 26: 

$currLineNo = 10;
$currColNo = 2;

var $loadname32=$loc.dish!==undefined?$loc.dish:Sk.misceval.loadname('dish',$gbl);;var $compareres33=null;$ret = Sk.misceval.richCompareBool($loadname32,$scope0.$const34,'Eq', true);$blk=30;case 30: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,5); }$compareres33=Sk.builtin.bool($ret);var $jfalse35=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse35){$blk=29;continue;}$blk=29;case 29: var $jfalse36=($compareres33===false||!Sk.misceval.isTrue($compareres33));if($jfalse36){$blk=28;continue;}if (Sk.breakpoints('<stdin>.py',11,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,4);$susp.$blk = 31;$susp.optional = true;return $susp;}$blk=31;case 31: 

$currLineNo = 11;
$currColNo = 4;

var $loadname37=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname37.tp$call)?$loadname37.tp$call([$scope0.$const38],undefined) : Sk.misceval.applyOrSuspend($loadname37,undefined,undefined,undefined,[$scope0.$const38]);$blk=32;case 32: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,4); }var $call39=$ret;

$currLineNo = 11;
$currColNo = 4;

$blk=27;case 27: $blk=20;case 20: $blk=4; continue;case 12: if (Sk.breakpoints('<stdin>.py',7,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,4);$susp.$blk = 17;$susp.optional = true;return $susp;}$blk=17;case 17: 

$currLineNo = 7;
$currColNo = 4;

var $loadname20=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname21=$loc.dish!==undefined?$loc.dish:Sk.misceval.loadname('dish',$gbl);;var $binop23=Sk.abstr.numberBinOp($loadname21,$scope0.$const22,'Add');$ret = ($loadname20.tp$call)?$loadname20.tp$call([$binop23],undefined) : Sk.misceval.applyOrSuspend($loadname20,undefined,undefined,undefined,[$binop23]);$blk=18;case 18: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,4); }var $call24=$ret;

$currLineNo = 7;
$currColNo = 4;

$blk=11; continue;case 21: if (Sk.breakpoints('<stdin>.py',21,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',21,2);$susp.$blk = 51;$susp.optional = true;return $susp;}$blk=51;case 51: 

$currLineNo = 21;
$currColNo = 2;

var $loadname63=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname64=$loc.food!==undefined?$loc.food:Sk.misceval.loadname('food',$gbl);;var $binop65=Sk.abstr.numberBinOp($loadname64,$scope0.$const22,'Add');$ret = ($loadname63.tp$call)?$loadname63.tp$call([$binop65],undefined) : Sk.misceval.applyOrSuspend($loadname63,undefined,undefined,undefined,[$binop65]);$blk=52;case 52: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,2); }var $call66=$ret;

$currLineNo = 21;
$currColNo = 2;

$blk=20; continue;case 28: if (Sk.breakpoints('<stdin>.py',12,7)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,7);$susp.$blk = 33;$susp.optional = true;return $susp;}$blk=33;case 33: 

$currLineNo = 12;
$currColNo = 7;

var $loadname40=$loc.dish!==undefined?$loc.dish:Sk.misceval.loadname('dish',$gbl);;var $compareres41=null;$ret = Sk.misceval.richCompareBool($loadname40,$scope0.$const42,'Eq', true);$blk=37;case 37: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,7); }$compareres41=Sk.builtin.bool($ret);var $jfalse43=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse43){$blk=36;continue;}$blk=36;case 36: var $jfalse44=($compareres41===false||!Sk.misceval.isTrue($compareres41));if($jfalse44){$blk=35;continue;}if (Sk.breakpoints('<stdin>.py',13,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,4);$susp.$blk = 38;$susp.optional = true;return $susp;}$blk=38;case 38: 

$currLineNo = 13;
$currColNo = 4;

var $loadname45=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname45.tp$call)?$loadname45.tp$call([$scope0.$const46],undefined) : Sk.misceval.applyOrSuspend($loadname45,undefined,undefined,undefined,[$scope0.$const46]);$blk=39;case 39: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,11); }var $call47=$ret;

$currLineNo = 13;
$currColNo = 11;

$loc.type=$call47;if (Sk.breakpoints('<stdin>.py',14,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,4);$susp.$blk = 40;$susp.optional = true;return $susp;}$blk=40;case 40: 

$currLineNo = 14;
$currColNo = 4;

var $loadname48=$loc.type!==undefined?$loc.type:Sk.misceval.loadname('type',$gbl);;var $compareres49=null;$ret = Sk.misceval.richCompareBool($loadname48,$scope0.$const50,'Eq', true);$blk=44;case 44: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,7); }$compareres49=Sk.builtin.bool($ret);var $jfalse51=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse51){$blk=43;continue;}$blk=43;case 43: var $jfalse52=($compareres49===false||!Sk.misceval.isTrue($compareres49));if($jfalse52){$blk=42;continue;}if (Sk.breakpoints('<stdin>.py',15,6)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,6);$susp.$blk = 45;$susp.optional = true;return $susp;}$blk=45;case 45: 

$currLineNo = 15;
$currColNo = 6;

var $loadname53=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname53.tp$call)?$loadname53.tp$call([$scope0.$const54],undefined) : Sk.misceval.applyOrSuspend($loadname53,undefined,undefined,undefined,[$scope0.$const54]);$blk=46;case 46: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,6); }var $call55=$ret;

$currLineNo = 15;
$currColNo = 6;

$blk=41;case 41: $blk=34;case 34: $blk=27; continue;case 35: if (Sk.breakpoints('<stdin>.py',19,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',19,4);$susp.$blk = 49;$susp.optional = true;return $susp;}$blk=49;case 49: 

$currLineNo = 19;
$currColNo = 4;

var $loadname59=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname60=$loc.dish!==undefined?$loc.dish:Sk.misceval.loadname('dish',$gbl);;var $binop61=Sk.abstr.numberBinOp($loadname60,$scope0.$const22,'Add');$ret = ($loadname59.tp$call)?$loadname59.tp$call([$binop61],undefined) : Sk.misceval.applyOrSuspend($loadname59,undefined,undefined,undefined,[$binop61]);$blk=50;case 50: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',19,4); }var $call62=$ret;

$currLineNo = 19;
$currColNo = 4;

$blk=34; continue;case 42: if (Sk.breakpoints('<stdin>.py',17,6)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,6);$susp.$blk = 47;$susp.optional = true;return $susp;}$blk=47;case 47: 

$currLineNo = 17;
$currColNo = 6;

var $loadname56=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname56.tp$call)?$loadname56.tp$call([$scope0.$const57],undefined) : Sk.misceval.applyOrSuspend($loadname56,undefined,undefined,undefined,[$scope0.$const57]);$blk=48;case 48: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,6); }var $call58=$ret;

$currLineNo = 17;
$currColNo = 6;

$blk=41; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const2 = new Sk.builtin.str("Favourite cuisine?");$scope0.$const6 = new Sk.builtin.str("italian");$scope0.$const10 = new Sk.builtin.str("Favourite dish?");$scope0.$const14 = new Sk.builtin.str("pasta");$scope0.$const18 = new Sk.builtin.str("I like gnocchi most!");$scope0.$const22 = new Sk.builtin.str(" is yummy!");$scope0.$const27 = new Sk.builtin.str("chinese");$scope0.$const34 = new Sk.builtin.str("fried rice");$scope0.$const38 = new Sk.builtin.str("I love rice!");$scope0.$const42 = new Sk.builtin.str("noodles");$scope0.$const46 = new Sk.builtin.str("Soup or dry?");$scope0.$const50 = new Sk.builtin.str("soup");$scope0.$const54 = new Sk.builtin.str("Sluurrpp!");$scope0.$const57 = new Sk.builtin.str("I like crispy fried!");
return $scope0;}();
$compiledmod;