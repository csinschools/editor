Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname3,$loadname6,$loadname9,$compareres10,$loadname14,$loadname17,$loadname20,$compareres21,$loadname25,$loadname28,$loadname31,$compareres32,$loadname36,$loadname39,$loadname42,$loadname45,$compareres46,$loadname50,$loadname53,$loadname56,$compareres57,$loadname61,$loadname64,$loadname67,$compareres68,$loadname72,$loadname75,$loadname78,$loadname80;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname3=susp.$tmps.$loadname3;$loadname6=susp.$tmps.$loadname6;$loadname9=susp.$tmps.$loadname9;$compareres10=susp.$tmps.$compareres10;$loadname14=susp.$tmps.$loadname14;$loadname17=susp.$tmps.$loadname17;$loadname20=susp.$tmps.$loadname20;$compareres21=susp.$tmps.$compareres21;$loadname25=susp.$tmps.$loadname25;$loadname28=susp.$tmps.$loadname28;$loadname31=susp.$tmps.$loadname31;$compareres32=susp.$tmps.$compareres32;$loadname36=susp.$tmps.$loadname36;$loadname39=susp.$tmps.$loadname39;$loadname42=susp.$tmps.$loadname42;$loadname45=susp.$tmps.$loadname45;$compareres46=susp.$tmps.$compareres46;$loadname50=susp.$tmps.$loadname50;$loadname53=susp.$tmps.$loadname53;$loadname56=susp.$tmps.$loadname56;$compareres57=susp.$tmps.$compareres57;$loadname61=susp.$tmps.$loadname61;$loadname64=susp.$tmps.$loadname64;$loadname67=susp.$tmps.$loadname67;$compareres68=susp.$tmps.$compareres68;$loadname72=susp.$tmps.$loadname72;$loadname75=susp.$tmps.$loadname75;$loadname78=susp.$tmps.$loadname78;$loadname80=susp.$tmps.$loadname80;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname3":$loadname3,"$loadname6":$loadname6,"$loadname9":$loadname9,"$compareres10":$compareres10,"$loadname14":$loadname14,"$loadname17":$loadname17,"$loadname20":$loadname20,"$compareres21":$compareres21,"$loadname25":$loadname25,"$loadname28":$loadname28,"$loadname31":$loadname31,"$compareres32":$compareres32,"$loadname36":$loadname36,"$loadname39":$loadname39,"$loadname42":$loadname42,"$loadname45":$loadname45,"$compareres46":$compareres46,"$loadname50":$loadname50,"$loadname53":$loadname53,"$loadname56":$loadname56,"$compareres57":$compareres57,"$loadname61":$loadname61,"$loadname64":$loadname64,"$loadname67":$loadname67,"$compareres68":$compareres68,"$loadname72":$loadname72,"$loadname75":$loadname75,"$loadname78":$loadname78,"$loadname80":$loadname80};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$ret = Sk.builtin.__import__('csinsc',$gbl,$loc,['printImage'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;var $item2=Sk.abstr.gattr($module1, new Sk.builtin.str('printImage'), undefined);$loc.printImage=$item2;if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 3;
$currColNo = 0;

var $loadname3=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname3.tp$call)?$loadname3.tp$call([$scope0.$const4],undefined) : Sk.misceval.applyOrSuspend($loadname3,undefined,undefined,undefined,[$scope0.$const4]);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,0); }var $call5=$ret;

$currLineNo = 3;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 5;
$currColNo = 0;

var $loadname6=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname6.tp$call)?$loadname6.tp$call([$scope0.$const7],undefined) : Sk.misceval.applyOrSuspend($loadname6,undefined,undefined,undefined,[$scope0.$const7]);$blk=6;case 6: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,7); }var $call8=$ret;

$currLineNo = 5;
$currColNo = 7;

$loc.city=$call8;if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 6;
$currColNo = 0;

var $loadname9=$loc.city!==undefined?$loc.city:Sk.misceval.loadname('city',$gbl);;var $compareres10=null;$ret = Sk.misceval.richCompareBool($loadname9,$scope0.$const11,'Eq', true);$blk=11;case 11: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,3); }$compareres10=Sk.builtin.bool($ret);var $jfalse12=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse12){$blk=10;continue;}$blk=10;case 10: var $jfalse13=($compareres10===false||!Sk.misceval.isTrue($compareres10));if($jfalse13){$blk=9;continue;}if (Sk.breakpoints('<stdin>.py',7,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,4);$susp.$blk = 12;$susp.optional = true;return $susp;}$blk=12;case 12: 

$currLineNo = 7;
$currColNo = 4;

var $loadname14=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname14.tp$call)?$loadname14.tp$call([$scope0.$const15],undefined) : Sk.misceval.applyOrSuspend($loadname14,undefined,undefined,undefined,[$scope0.$const15]);$blk=13;case 13: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,4); }var $call16=$ret;

$currLineNo = 7;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',8,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,4);$susp.$blk = 14;$susp.optional = true;return $susp;}$blk=14;case 14: 

$currLineNo = 8;
$currColNo = 4;

var $loadname17=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname17.tp$call)?$loadname17.tp$call([$scope0.$const18],undefined) : Sk.misceval.applyOrSuspend($loadname17,undefined,undefined,undefined,[$scope0.$const18]);$blk=15;case 15: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,25); }var $call19=$ret;

$currLineNo = 8;
$currColNo = 25;

$loc.melbourne_landmark=$call19;if (Sk.breakpoints('<stdin>.py',9,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,4);$susp.$blk = 16;$susp.optional = true;return $susp;}$blk=16;case 16: 

$currLineNo = 9;
$currColNo = 4;

var $loadname20=$loc.melbourne_landmark!==undefined?$loc.melbourne_landmark:Sk.misceval.loadname('melbourne_landmark',$gbl);;var $compareres21=null;$ret = Sk.misceval.richCompareBool($loadname20,$scope0.$const22,'Eq', true);$blk=20;case 20: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,7); }$compareres21=Sk.builtin.bool($ret);var $jfalse23=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse23){$blk=19;continue;}$blk=19;case 19: var $jfalse24=($compareres21===false||!Sk.misceval.isTrue($compareres21));if($jfalse24){$blk=18;continue;}if (Sk.breakpoints('<stdin>.py',10,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,8);$susp.$blk = 21;$susp.optional = true;return $susp;}$blk=21;case 21: 

$currLineNo = 10;
$currColNo = 8;

var $loadname25=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname25.tp$call)?$loadname25.tp$call([$scope0.$const26],undefined) : Sk.misceval.applyOrSuspend($loadname25,undefined,undefined,undefined,[$scope0.$const26]);$blk=22;case 22: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,8); }var $call27=$ret;

$currLineNo = 10;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',11,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,8);$susp.$blk = 23;$susp.optional = true;return $susp;}$blk=23;case 23: 

$currLineNo = 11;
$currColNo = 8;

var $loadname28=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname28.tp$call)?$loadname28.tp$call([$scope0.$const29],undefined) : Sk.misceval.applyOrSuspend($loadname28,undefined,undefined,undefined,[$scope0.$const29]);$blk=24;case 24: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,8); }var $call30=$ret;

$currLineNo = 11;
$currColNo = 8;

$blk=17;case 17: $blk=8;case 8: return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');case 9: if (Sk.breakpoints('<stdin>.py',17,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,5);$susp.$blk = 36;$susp.optional = true;return $susp;}$blk=36;case 36: 

$currLineNo = 17;
$currColNo = 5;

var $loadname45=$loc.city!==undefined?$loc.city:Sk.misceval.loadname('city',$gbl);;var $compareres46=null;$ret = Sk.misceval.richCompareBool($loadname45,$scope0.$const47,'Eq', true);$blk=40;case 40: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,5); }$compareres46=Sk.builtin.bool($ret);var $jfalse48=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse48){$blk=39;continue;}$blk=39;case 39: var $jfalse49=($compareres46===false||!Sk.misceval.isTrue($compareres46));if($jfalse49){$blk=38;continue;}if (Sk.breakpoints('<stdin>.py',18,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',18,4);$susp.$blk = 41;$susp.optional = true;return $susp;}$blk=41;case 41: 

$currLineNo = 18;
$currColNo = 4;

var $loadname50=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname50.tp$call)?$loadname50.tp$call([$scope0.$const51],undefined) : Sk.misceval.applyOrSuspend($loadname50,undefined,undefined,undefined,[$scope0.$const51]);$blk=42;case 42: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',18,4); }var $call52=$ret;

$currLineNo = 18;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',19,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',19,4);$susp.$blk = 43;$susp.optional = true;return $susp;}$blk=43;case 43: 

$currLineNo = 19;
$currColNo = 4;

var $loadname53=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname53.tp$call)?$loadname53.tp$call([$scope0.$const54],undefined) : Sk.misceval.applyOrSuspend($loadname53,undefined,undefined,undefined,[$scope0.$const54]);$blk=44;case 44: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',19,22); }var $call55=$ret;

$currLineNo = 19;
$currColNo = 22;

$loc.sydney_landmark=$call55;if (Sk.breakpoints('<stdin>.py',20,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,4);$susp.$blk = 45;$susp.optional = true;return $susp;}$blk=45;case 45: 

$currLineNo = 20;
$currColNo = 4;

var $loadname56=$loc.sydney_landmark!==undefined?$loc.sydney_landmark:Sk.misceval.loadname('sydney_landmark',$gbl);;var $compareres57=null;$ret = Sk.misceval.richCompareBool($loadname56,$scope0.$const58,'Eq', true);$blk=49;case 49: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,7); }$compareres57=Sk.builtin.bool($ret);var $jfalse59=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse59){$blk=48;continue;}$blk=48;case 48: var $jfalse60=($compareres57===false||!Sk.misceval.isTrue($compareres57));if($jfalse60){$blk=47;continue;}if (Sk.breakpoints('<stdin>.py',21,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',21,8);$susp.$blk = 50;$susp.optional = true;return $susp;}$blk=50;case 50: 

$currLineNo = 21;
$currColNo = 8;

var $loadname61=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname61.tp$call)?$loadname61.tp$call([$scope0.$const62],undefined) : Sk.misceval.applyOrSuspend($loadname61,undefined,undefined,undefined,[$scope0.$const62]);$blk=51;case 51: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,8); }var $call63=$ret;

$currLineNo = 21;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',22,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',22,8);$susp.$blk = 52;$susp.optional = true;return $susp;}$blk=52;case 52: 

$currLineNo = 22;
$currColNo = 8;

var $loadname64=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname64.tp$call)?$loadname64.tp$call([$scope0.$const65],undefined) : Sk.misceval.applyOrSuspend($loadname64,undefined,undefined,undefined,[$scope0.$const65]);$blk=53;case 53: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',22,8); }var $call66=$ret;

$currLineNo = 22;
$currColNo = 8;

$blk=46;case 46: $blk=37;case 37: $blk=8; continue;case 18: if (Sk.breakpoints('<stdin>.py',12,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,9);$susp.$blk = 25;$susp.optional = true;return $susp;}$blk=25;case 25: 

$currLineNo = 12;
$currColNo = 9;

var $loadname31=$loc.melbourne_landmark!==undefined?$loc.melbourne_landmark:Sk.misceval.loadname('melbourne_landmark',$gbl);;var $compareres32=null;$ret = Sk.misceval.richCompareBool($loadname31,$scope0.$const33,'Eq', true);$blk=29;case 29: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,9); }$compareres32=Sk.builtin.bool($ret);var $jfalse34=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse34){$blk=28;continue;}$blk=28;case 28: var $jfalse35=($compareres32===false||!Sk.misceval.isTrue($compareres32));if($jfalse35){$blk=27;continue;}if (Sk.breakpoints('<stdin>.py',13,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,8);$susp.$blk = 30;$susp.optional = true;return $susp;}$blk=30;case 30: 

$currLineNo = 13;
$currColNo = 8;

var $loadname36=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname36.tp$call)?$loadname36.tp$call([$scope0.$const37],undefined) : Sk.misceval.applyOrSuspend($loadname36,undefined,undefined,undefined,[$scope0.$const37]);$blk=31;case 31: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,8); }var $call38=$ret;

$currLineNo = 13;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',14,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,8);$susp.$blk = 32;$susp.optional = true;return $susp;}$blk=32;case 32: 

$currLineNo = 14;
$currColNo = 8;

var $loadname39=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname39.tp$call)?$loadname39.tp$call([$scope0.$const40],undefined) : Sk.misceval.applyOrSuspend($loadname39,undefined,undefined,undefined,[$scope0.$const40]);$blk=33;case 33: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,8); }var $call41=$ret;

$currLineNo = 14;
$currColNo = 8;

$blk=26;case 26: $blk=17; continue;case 27: if (Sk.breakpoints('<stdin>.py',16,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,8);$susp.$blk = 34;$susp.optional = true;return $susp;}$blk=34;case 34: 

$currLineNo = 16;
$currColNo = 8;

var $loadname42=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname42.tp$call)?$loadname42.tp$call([$scope0.$const43],undefined) : Sk.misceval.applyOrSuspend($loadname42,undefined,undefined,undefined,[$scope0.$const43]);$blk=35;case 35: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,8); }var $call44=$ret;

$currLineNo = 16;
$currColNo = 8;

$blk=26; continue;case 38: if (Sk.breakpoints('<stdin>.py',29,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',29,4);$susp.$blk = 65;$susp.optional = true;return $susp;}$blk=65;case 65: 

$currLineNo = 29;
$currColNo = 4;

var $loadname80=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname80.tp$call)?$loadname80.tp$call([$scope0.$const81],undefined) : Sk.misceval.applyOrSuspend($loadname80,undefined,undefined,undefined,[$scope0.$const81]);$blk=66;case 66: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',29,4); }var $call82=$ret;

$currLineNo = 29;
$currColNo = 4;

$blk=37; continue;case 47: if (Sk.breakpoints('<stdin>.py',23,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',23,9);$susp.$blk = 54;$susp.optional = true;return $susp;}$blk=54;case 54: 

$currLineNo = 23;
$currColNo = 9;

var $loadname67=$loc.sydney_landmark!==undefined?$loc.sydney_landmark:Sk.misceval.loadname('sydney_landmark',$gbl);;var $compareres68=null;$ret = Sk.misceval.richCompareBool($loadname67,$scope0.$const69,'Eq', true);$blk=58;case 58: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',23,9); }$compareres68=Sk.builtin.bool($ret);var $jfalse70=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse70){$blk=57;continue;}$blk=57;case 57: var $jfalse71=($compareres68===false||!Sk.misceval.isTrue($compareres68));if($jfalse71){$blk=56;continue;}if (Sk.breakpoints('<stdin>.py',24,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',24,8);$susp.$blk = 59;$susp.optional = true;return $susp;}$blk=59;case 59: 

$currLineNo = 24;
$currColNo = 8;

var $loadname72=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname72.tp$call)?$loadname72.tp$call([$scope0.$const73],undefined) : Sk.misceval.applyOrSuspend($loadname72,undefined,undefined,undefined,[$scope0.$const73]);$blk=60;case 60: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',24,8); }var $call74=$ret;

$currLineNo = 24;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',25,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',25,8);$susp.$blk = 61;$susp.optional = true;return $susp;}$blk=61;case 61: 

$currLineNo = 25;
$currColNo = 8;

var $loadname75=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname75.tp$call)?$loadname75.tp$call([$scope0.$const76],undefined) : Sk.misceval.applyOrSuspend($loadname75,undefined,undefined,undefined,[$scope0.$const76]);$blk=62;case 62: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',25,8); }var $call77=$ret;

$currLineNo = 25;
$currColNo = 8;

$blk=55;case 55: $blk=46; continue;case 56: if (Sk.breakpoints('<stdin>.py',27,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',27,8);$susp.$blk = 63;$susp.optional = true;return $susp;}$blk=63;case 63: 

$currLineNo = 27;
$currColNo = 8;

var $loadname78=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname78.tp$call)?$loadname78.tp$call([$scope0.$const43],undefined) : Sk.misceval.applyOrSuspend($loadname78,undefined,undefined,undefined,[$scope0.$const43]);$blk=64;case 64: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',27,8); }var $call79=$ret;

$currLineNo = 27;
$currColNo = 8;

$blk=55; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const4 = new Sk.builtin.str(">>> Tourism Australia Information Kiosk <<<");$scope0.$const7 = new Sk.builtin.str("Melbourne or Sydney?");$scope0.$const11 = new Sk.builtin.str("Melbourne");$scope0.$const15 = new Sk.builtin.str("samples/images/melbourne.jpg");$scope0.$const18 = new Sk.builtin.str("MCG or Arts Centre?");$scope0.$const22 = new Sk.builtin.str("MCG");$scope0.$const26 = new Sk.builtin.str("samples/images/melbourne_MCG.jpg");$scope0.$const29 = new Sk.builtin.str("The MCG will serve as the host for the opening ceremonies of the 2026 Commonwealth Games");$scope0.$const33 = new Sk.builtin.str("Arts Centre");$scope0.$const37 = new Sk.builtin.str("samples/images/melbourne_arts_centre.jpg");$scope0.$const40 = new Sk.builtin.str("The Arts Centre is a performing arts centre consisting of a complex of theatres and concert halls.");$scope0.$const43 = new Sk.builtin.str("That's not a landmark listed.");$scope0.$const47 = new Sk.builtin.str("Sydney");$scope0.$const51 = new Sk.builtin.str("samples/images/sydney.jpg");$scope0.$const54 = new Sk.builtin.str("Opera House or Harbour Bridge?");$scope0.$const58 = new Sk.builtin.str("Opera House");$scope0.$const62 = new Sk.builtin.str("samples/images/sydney_opera_house.jpg");$scope0.$const65 = new Sk.builtin.str("Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.");$scope0.$const69 = new Sk.builtin.str("Harbour Bridge");$scope0.$const73 = new Sk.builtin.str("samples/images/sydney_harbour_bridge.jpg");$scope0.$const76 = new Sk.builtin.str("The Harbour Bridge is Nicknamed 'The Coathanger' because of its arch-based design.");$scope0.$const81 = new Sk.builtin.str("Sorry that wasn't a city listed.");
return $scope0;}();
$compiledmod;