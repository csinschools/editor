Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname2,$loadname4,$loadname7,$compareres8,$loadname11,$loadname14,$compareres15,$loadname19,$loadname22,$compareres23,$loadname27,$loadname30,$compareres31,$loadname35,$loadname38,$loadname41,$loadname44,$loadname47,$loadname50,$loadname53,$loadname56,$compareres57,$loadname61,$compareres62,$loadname66,$compareres67,$loadname71,$compareres72,$loadname76,$loadname79;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname2=susp.$tmps.$loadname2;$loadname4=susp.$tmps.$loadname4;$loadname7=susp.$tmps.$loadname7;$compareres8=susp.$tmps.$compareres8;$loadname11=susp.$tmps.$loadname11;$loadname14=susp.$tmps.$loadname14;$compareres15=susp.$tmps.$compareres15;$loadname19=susp.$tmps.$loadname19;$loadname22=susp.$tmps.$loadname22;$compareres23=susp.$tmps.$compareres23;$loadname27=susp.$tmps.$loadname27;$loadname30=susp.$tmps.$loadname30;$compareres31=susp.$tmps.$compareres31;$loadname35=susp.$tmps.$loadname35;$loadname38=susp.$tmps.$loadname38;$loadname41=susp.$tmps.$loadname41;$loadname44=susp.$tmps.$loadname44;$loadname47=susp.$tmps.$loadname47;$loadname50=susp.$tmps.$loadname50;$loadname53=susp.$tmps.$loadname53;$loadname56=susp.$tmps.$loadname56;$compareres57=susp.$tmps.$compareres57;$loadname61=susp.$tmps.$loadname61;$compareres62=susp.$tmps.$compareres62;$loadname66=susp.$tmps.$loadname66;$compareres67=susp.$tmps.$compareres67;$loadname71=susp.$tmps.$loadname71;$compareres72=susp.$tmps.$compareres72;$loadname76=susp.$tmps.$loadname76;$loadname79=susp.$tmps.$loadname79;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname2":$loadname2,"$loadname4":$loadname4,"$loadname7":$loadname7,"$compareres8":$compareres8,"$loadname11":$loadname11,"$loadname14":$loadname14,"$compareres15":$compareres15,"$loadname19":$loadname19,"$loadname22":$loadname22,"$compareres23":$compareres23,"$loadname27":$loadname27,"$loadname30":$loadname30,"$compareres31":$compareres31,"$loadname35":$loadname35,"$loadname38":$loadname38,"$loadname41":$loadname41,"$loadname44":$loadname44,"$loadname47":$loadname47,"$loadname50":$loadname50,"$loadname53":$loadname53,"$loadname56":$loadname56,"$compareres57":$compareres57,"$loadname61":$loadname61,"$compareres62":$compareres62,"$loadname66":$loadname66,"$compareres67":$compareres67,"$loadname71":$loadname71,"$compareres72":$compareres72,"$loadname76":$loadname76,"$loadname79":$loadname79};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',2,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',2,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 2;
$currColNo = 0;

$loc.mood=$scope0.$const1;if (Sk.breakpoints('<stdin>.py',4,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',4,0);$susp.$blk = 2;$susp.optional = true;return $susp;}$blk=2;case 2: 

$currLineNo = 4;
$currColNo = 0;

$blk=3;case 3: if (Sk.breakpoints('<stdin>.py',4,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',4,0);$susp.$blk = 4;$susp.optional = true;return $susp;}$blk=4;case 4: $blk=5;case 5: if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 6;$susp.optional = true;return $susp;}$blk=6;case 6: 

$currLineNo = 5;
$currColNo = 0;

var $loadname2=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname2.tp$call)?$loadname2.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname2,undefined,undefined,undefined,[]);$blk=7;case 7: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,0); }var $call3=$ret;

$currLineNo = 5;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 8;$susp.optional = true;return $susp;}$blk=8;case 8: 

$currLineNo = 6;
$currColNo = 0;

var $loadname4=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname4.tp$call)?$loadname4.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname4,undefined,undefined,undefined,[$scope0.$const5]);$blk=9;case 9: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,0); }var $call6=$ret;

$currLineNo = 6;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 10;$susp.optional = true;return $susp;}$blk=10;case 10: 

$currLineNo = 7;
$currColNo = 0;

var $loadname7=$loc.mood!==undefined?$loc.mood:Sk.misceval.loadname('mood',$gbl);;var $compareres8=null;$ret = Sk.misceval.richCompareBool($loadname7,$scope0.$const1,'Eq', true);$blk=14;case 14: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,3); }$compareres8=Sk.builtin.bool($ret);var $jfalse9=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse9){$blk=13;continue;}$blk=13;case 13: var $jfalse10=($compareres8===false||!Sk.misceval.isTrue($compareres8));if($jfalse10){$blk=12;continue;}if (Sk.breakpoints('<stdin>.py',8,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,4);$susp.$blk = 15;$susp.optional = true;return $susp;}$blk=15;case 15: 

$currLineNo = 8;
$currColNo = 4;

var $loadname11=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname11.tp$call)?$loadname11.tp$call([$scope0.$const12],undefined) : Sk.misceval.applyOrSuspend($loadname11,undefined,undefined,undefined,[$scope0.$const12]);$blk=16;case 16: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,4); }var $call13=$ret;

$currLineNo = 8;
$currColNo = 4;

$blk=11;case 11: if (Sk.breakpoints('<stdin>.py',16,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,0);$susp.$blk = 37;$susp.optional = true;return $susp;}$blk=37;case 37: 

$currLineNo = 16;
$currColNo = 0;

var $loadname38=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname38.tp$call)?$loadname38.tp$call([$scope0.$const39],undefined) : Sk.misceval.applyOrSuspend($loadname38,undefined,undefined,undefined,[$scope0.$const39]);$blk=38;case 38: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,0); }var $call40=$ret;

$currLineNo = 16;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',17,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,0);$susp.$blk = 39;$susp.optional = true;return $susp;}$blk=39;case 39: 

$currLineNo = 17;
$currColNo = 0;

var $loadname41=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname41.tp$call)?$loadname41.tp$call([$scope0.$const42],undefined) : Sk.misceval.applyOrSuspend($loadname41,undefined,undefined,undefined,[$scope0.$const42]);$blk=40;case 40: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,0); }var $call43=$ret;

$currLineNo = 17;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',18,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',18,0);$susp.$blk = 41;$susp.optional = true;return $susp;}$blk=41;case 41: 

$currLineNo = 18;
$currColNo = 0;

var $loadname44=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname44.tp$call)?$loadname44.tp$call([$scope0.$const45],undefined) : Sk.misceval.applyOrSuspend($loadname44,undefined,undefined,undefined,[$scope0.$const45]);$blk=42;case 42: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',18,0); }var $call46=$ret;

$currLineNo = 18;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',19,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',19,0);$susp.$blk = 43;$susp.optional = true;return $susp;}$blk=43;case 43: 

$currLineNo = 19;
$currColNo = 0;

var $loadname47=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname47.tp$call)?$loadname47.tp$call([$scope0.$const48],undefined) : Sk.misceval.applyOrSuspend($loadname47,undefined,undefined,undefined,[$scope0.$const48]);$blk=44;case 44: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',19,0); }var $call49=$ret;

$currLineNo = 19;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',20,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,0);$susp.$blk = 45;$susp.optional = true;return $susp;}$blk=45;case 45: 

$currLineNo = 20;
$currColNo = 0;

var $loadname50=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname50.tp$call)?$loadname50.tp$call([$scope0.$const51],undefined) : Sk.misceval.applyOrSuspend($loadname50,undefined,undefined,undefined,[$scope0.$const51]);$blk=46;case 46: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,0); }var $call52=$ret;

$currLineNo = 20;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',22,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',22,0);$susp.$blk = 47;$susp.optional = true;return $susp;}$blk=47;case 47: 

$currLineNo = 22;
$currColNo = 0;

var $loadname53=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname53.tp$call)?$loadname53.tp$call([$scope0.$const54],undefined) : Sk.misceval.applyOrSuspend($loadname53,undefined,undefined,undefined,[$scope0.$const54]);$blk=48;case 48: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',22,11); }var $call55=$ret;

$currLineNo = 22;
$currColNo = 11;

$loc.response=$call55;if (Sk.breakpoints('<stdin>.py',24,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',24,0);$susp.$blk = 49;$susp.optional = true;return $susp;}$blk=49;case 49: 

$currLineNo = 24;
$currColNo = 0;

var $loadname56=$loc.response!==undefined?$loc.response:Sk.misceval.loadname('response',$gbl);;var $compareres57=null;$ret = Sk.misceval.richCompareBool($loadname56,$scope0.$const58,'Eq', true);$blk=53;case 53: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',24,3); }$compareres57=Sk.builtin.bool($ret);var $jfalse59=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse59){$blk=52;continue;}$blk=52;case 52: var $jfalse60=($compareres57===false||!Sk.misceval.isTrue($compareres57));if($jfalse60){$blk=51;continue;}if (Sk.breakpoints('<stdin>.py',25,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',25,4);$susp.$blk = 54;$susp.optional = true;return $susp;}$blk=54;case 54: 

$currLineNo = 25;
$currColNo = 4;

$loc.mood=$scope0.$const1;$blk=50;case 50: if (Sk.breakpoints('<stdin>.py',36,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',36,0);$susp.$blk = 77;$susp.optional = true;return $susp;}$blk=77;case 77: 

$currLineNo = 36;
$currColNo = 0;

$blk=3; continue;return $loc; continue;case 12: if (Sk.breakpoints('<stdin>.py',9,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,5);$susp.$blk = 17;$susp.optional = true;return $susp;}$blk=17;case 17: 

$currLineNo = 9;
$currColNo = 5;

var $loadname14=$loc.mood!==undefined?$loc.mood:Sk.misceval.loadname('mood',$gbl);;var $compareres15=null;$ret = Sk.misceval.richCompareBool($loadname14,$scope0.$const16,'Eq', true);$blk=21;case 21: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,5); }$compareres15=Sk.builtin.bool($ret);var $jfalse17=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse17){$blk=20;continue;}$blk=20;case 20: var $jfalse18=($compareres15===false||!Sk.misceval.isTrue($compareres15));if($jfalse18){$blk=19;continue;}if (Sk.breakpoints('<stdin>.py',10,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,4);$susp.$blk = 22;$susp.optional = true;return $susp;}$blk=22;case 22: 

$currLineNo = 10;
$currColNo = 4;

var $loadname19=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname19.tp$call)?$loadname19.tp$call([$scope0.$const20],undefined) : Sk.misceval.applyOrSuspend($loadname19,undefined,undefined,undefined,[$scope0.$const20]);$blk=23;case 23: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,4); }var $call21=$ret;

$currLineNo = 10;
$currColNo = 4;

$blk=18;case 18: $blk=11; continue;case 19: if (Sk.breakpoints('<stdin>.py',11,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,5);$susp.$blk = 24;$susp.optional = true;return $susp;}$blk=24;case 24: 

$currLineNo = 11;
$currColNo = 5;

var $loadname22=$loc.mood!==undefined?$loc.mood:Sk.misceval.loadname('mood',$gbl);;var $compareres23=null;$ret = Sk.misceval.richCompareBool($loadname22,$scope0.$const24,'Eq', true);$blk=28;case 28: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,5); }$compareres23=Sk.builtin.bool($ret);var $jfalse25=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse25){$blk=27;continue;}$blk=27;case 27: var $jfalse26=($compareres23===false||!Sk.misceval.isTrue($compareres23));if($jfalse26){$blk=26;continue;}if (Sk.breakpoints('<stdin>.py',12,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,4);$susp.$blk = 29;$susp.optional = true;return $susp;}$blk=29;case 29: 

$currLineNo = 12;
$currColNo = 4;

var $loadname27=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname27.tp$call)?$loadname27.tp$call([$scope0.$const28],undefined) : Sk.misceval.applyOrSuspend($loadname27,undefined,undefined,undefined,[$scope0.$const28]);$blk=30;case 30: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,4); }var $call29=$ret;

$currLineNo = 12;
$currColNo = 4;

$blk=25;case 25: $blk=18; continue;case 26: if (Sk.breakpoints('<stdin>.py',13,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,5);$susp.$blk = 31;$susp.optional = true;return $susp;}$blk=31;case 31: 

$currLineNo = 13;
$currColNo = 5;

var $loadname30=$loc.mood!==undefined?$loc.mood:Sk.misceval.loadname('mood',$gbl);;var $compareres31=null;$ret = Sk.misceval.richCompareBool($loadname30,$scope0.$const32,'Eq', true);$blk=34;case 34: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,5); }$compareres31=Sk.builtin.bool($ret);var $jfalse33=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse33){$blk=33;continue;}$blk=33;case 33: var $jfalse34=($compareres31===false||!Sk.misceval.isTrue($compareres31));if($jfalse34){$blk=32;continue;}if (Sk.breakpoints('<stdin>.py',14,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,4);$susp.$blk = 35;$susp.optional = true;return $susp;}$blk=35;case 35: 

$currLineNo = 14;
$currColNo = 4;

var $loadname35=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname35.tp$call)?$loadname35.tp$call([$scope0.$const36],undefined) : Sk.misceval.applyOrSuspend($loadname35,undefined,undefined,undefined,[$scope0.$const36]);$blk=36;case 36: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,4); }var $call37=$ret;

$currLineNo = 14;
$currColNo = 4;

$blk=32;case 32: $blk=25; continue;case 51: if (Sk.breakpoints('<stdin>.py',26,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',26,5);$susp.$blk = 55;$susp.optional = true;return $susp;}$blk=55;case 55: 

$currLineNo = 26;
$currColNo = 5;

var $loadname61=$loc.response!==undefined?$loc.response:Sk.misceval.loadname('response',$gbl);;var $compareres62=null;$ret = Sk.misceval.richCompareBool($loadname61,$scope0.$const63,'Eq', true);$blk=59;case 59: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',26,5); }$compareres62=Sk.builtin.bool($ret);var $jfalse64=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse64){$blk=58;continue;}$blk=58;case 58: var $jfalse65=($compareres62===false||!Sk.misceval.isTrue($compareres62));if($jfalse65){$blk=57;continue;}if (Sk.breakpoints('<stdin>.py',27,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',27,4);$susp.$blk = 60;$susp.optional = true;return $susp;}$blk=60;case 60: 

$currLineNo = 27;
$currColNo = 4;

$loc.mood=$scope0.$const16;$blk=56;case 56: $blk=50; continue;case 57: if (Sk.breakpoints('<stdin>.py',28,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',28,5);$susp.$blk = 61;$susp.optional = true;return $susp;}$blk=61;case 61: 

$currLineNo = 28;
$currColNo = 5;

var $loadname66=$loc.response!==undefined?$loc.response:Sk.misceval.loadname('response',$gbl);;var $compareres67=null;$ret = Sk.misceval.richCompareBool($loadname66,$scope0.$const68,'Eq', true);$blk=65;case 65: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',28,5); }$compareres67=Sk.builtin.bool($ret);var $jfalse69=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse69){$blk=64;continue;}$blk=64;case 64: var $jfalse70=($compareres67===false||!Sk.misceval.isTrue($compareres67));if($jfalse70){$blk=63;continue;}if (Sk.breakpoints('<stdin>.py',29,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',29,4);$susp.$blk = 66;$susp.optional = true;return $susp;}$blk=66;case 66: 

$currLineNo = 29;
$currColNo = 4;

$loc.mood=$scope0.$const24;$blk=62;case 62: $blk=56; continue;case 63: if (Sk.breakpoints('<stdin>.py',30,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',30,5);$susp.$blk = 67;$susp.optional = true;return $susp;}$blk=67;case 67: 

$currLineNo = 30;
$currColNo = 5;

var $loadname71=$loc.response!==undefined?$loc.response:Sk.misceval.loadname('response',$gbl);;var $compareres72=null;$ret = Sk.misceval.richCompareBool($loadname71,$scope0.$const73,'Eq', true);$blk=71;case 71: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',30,5); }$compareres72=Sk.builtin.bool($ret);var $jfalse74=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse74){$blk=70;continue;}$blk=70;case 70: var $jfalse75=($compareres72===false||!Sk.misceval.isTrue($compareres72));if($jfalse75){$blk=69;continue;}if (Sk.breakpoints('<stdin>.py',31,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',31,4);$susp.$blk = 72;$susp.optional = true;return $susp;}$blk=72;case 72: 

$currLineNo = 31;
$currColNo = 4;

$loc.mood=$scope0.$const32;$blk=68;case 68: $blk=62; continue;case 69: if (Sk.breakpoints('<stdin>.py',33,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',33,4);$susp.$blk = 73;$susp.optional = true;return $susp;}$blk=73;case 73: 

$currLineNo = 33;
$currColNo = 4;

var $loadname76=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname76.tp$call)?$loadname76.tp$call([$scope0.$const77],undefined) : Sk.misceval.applyOrSuspend($loadname76,undefined,undefined,undefined,[$scope0.$const77]);$blk=74;case 74: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',33,4); }var $call78=$ret;

$currLineNo = 33;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',34,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',34,4);$susp.$blk = 75;$susp.optional = true;return $susp;}$blk=75;case 75: 

$currLineNo = 34;
$currColNo = 4;

var $loadname79=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname79.tp$call)?$loadname79.tp$call([$scope0.$const80],undefined) : Sk.misceval.applyOrSuspend($loadname79,undefined,undefined,undefined,[$scope0.$const80]);$blk=76;case 76: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',34,4); }var $call81=$ret;

$currLineNo = 34;
$currColNo = 4;

$blk=68; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const1 = new Sk.builtin.str("mood_happy");$scope0.$const5 = new Sk.builtin.str("I am feeling....");$scope0.$const12 = new Sk.builtin.str("\ud83d\ude01");$scope0.$const16 = new Sk.builtin.str("mood_sad");$scope0.$const20 = new Sk.builtin.str("\ud83d\ude22");$scope0.$const24 = new Sk.builtin.str("mood_angry");$scope0.$const28 = new Sk.builtin.str("\ud83d\ude21");$scope0.$const32 = new Sk.builtin.str("mood_tired");$scope0.$const36 = new Sk.builtin.str("\ud83e\udd71");$scope0.$const39 = new Sk.builtin.str("Mood menu");$scope0.$const42 = new Sk.builtin.str("[1] Happy");$scope0.$const45 = new Sk.builtin.str("[2] Sad");$scope0.$const48 = new Sk.builtin.str("[3] Angry");$scope0.$const51 = new Sk.builtin.str("[4] Tired");$scope0.$const54 = new Sk.builtin.str("Select your mood:");$scope0.$const58 = new Sk.builtin.str("1");$scope0.$const63 = new Sk.builtin.str("2");$scope0.$const68 = new Sk.builtin.str("3");$scope0.$const73 = new Sk.builtin.str("4");$scope0.$const77 = new Sk.builtin.str("Invalid mood.");$scope0.$const80 = new Sk.builtin.str("Press [Enter] to return to the main menu");
return $scope0;}();
$compiledmod;