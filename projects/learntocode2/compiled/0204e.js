Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname3,$loadname6,$compareres7,$loadname11,$loadname14,$loadname17,$compareres18,$loadname22,$loadname25,$loadname28,$compareres29,$loadname33,$loadname36,$loadname39,$compareres40,$loadname44,$loadname47,$loadname50;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname3=susp.$tmps.$loadname3;$loadname6=susp.$tmps.$loadname6;$compareres7=susp.$tmps.$compareres7;$loadname11=susp.$tmps.$loadname11;$loadname14=susp.$tmps.$loadname14;$loadname17=susp.$tmps.$loadname17;$compareres18=susp.$tmps.$compareres18;$loadname22=susp.$tmps.$loadname22;$loadname25=susp.$tmps.$loadname25;$loadname28=susp.$tmps.$loadname28;$compareres29=susp.$tmps.$compareres29;$loadname33=susp.$tmps.$loadname33;$loadname36=susp.$tmps.$loadname36;$loadname39=susp.$tmps.$loadname39;$compareres40=susp.$tmps.$compareres40;$loadname44=susp.$tmps.$loadname44;$loadname47=susp.$tmps.$loadname47;$loadname50=susp.$tmps.$loadname50;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname3":$loadname3,"$loadname6":$loadname6,"$compareres7":$compareres7,"$loadname11":$loadname11,"$loadname14":$loadname14,"$loadname17":$loadname17,"$compareres18":$compareres18,"$loadname22":$loadname22,"$loadname25":$loadname25,"$loadname28":$loadname28,"$compareres29":$compareres29,"$loadname33":$loadname33,"$loadname36":$loadname36,"$loadname39":$loadname39,"$compareres40":$compareres40,"$loadname44":$loadname44,"$loadname47":$loadname47,"$loadname50":$loadname50};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 3;
$currColNo = 0;

$ret = Sk.builtin.__import__('csinsc',$gbl,$loc,['printImage'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,0); }var $module1=$ret;var $item2=Sk.abstr.gattr($module1, new Sk.builtin.str('printImage'), undefined);$loc.printImage=$item2;if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 5;
$currColNo = 0;

var $loadname3=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname3.tp$call)?$loadname3.tp$call([$scope0.$const4],undefined) : Sk.misceval.applyOrSuspend($loadname3,undefined,undefined,undefined,[$scope0.$const4]);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,9); }var $call5=$ret;

$currLineNo = 5;
$currColNo = 9;

$loc.planet=$call5;if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 7;
$currColNo = 0;

var $loadname6=$loc.planet!==undefined?$loc.planet:Sk.misceval.loadname('planet',$gbl);;var $compareres7=null;$ret = Sk.misceval.richCompareBool($loadname6,$scope0.$const8,'Eq', true);$blk=9;case 9: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,3); }$compareres7=Sk.builtin.bool($ret);var $jfalse9=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse9){$blk=8;continue;}$blk=8;case 8: var $jfalse10=($compareres7===false||!Sk.misceval.isTrue($compareres7));if($jfalse10){$blk=7;continue;}if (Sk.breakpoints('<stdin>.py',8,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,2);$susp.$blk = 10;$susp.optional = true;return $susp;}$blk=10;case 10: 

$currLineNo = 8;
$currColNo = 2;

var $loadname11=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname11.tp$call)?$loadname11.tp$call([$scope0.$const12],undefined) : Sk.misceval.applyOrSuspend($loadname11,undefined,undefined,undefined,[$scope0.$const12]);$blk=11;case 11: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,2); }var $call13=$ret;

$currLineNo = 8;
$currColNo = 2;

if (Sk.breakpoints('<stdin>.py',9,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,2);$susp.$blk = 12;$susp.optional = true;return $susp;}$blk=12;case 12: 

$currLineNo = 9;
$currColNo = 2;

var $loadname14=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname14.tp$call)?$loadname14.tp$call([$scope0.$const15],undefined) : Sk.misceval.applyOrSuspend($loadname14,undefined,undefined,undefined,[$scope0.$const15]);$blk=13;case 13: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,2); }var $call16=$ret;

$currLineNo = 9;
$currColNo = 2;

$blk=6;case 6: return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');case 7: if (Sk.breakpoints('<stdin>.py',10,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,5);$susp.$blk = 14;$susp.optional = true;return $susp;}$blk=14;case 14: 

$currLineNo = 10;
$currColNo = 5;

var $loadname17=$loc.planet!==undefined?$loc.planet:Sk.misceval.loadname('planet',$gbl);;var $compareres18=null;$ret = Sk.misceval.richCompareBool($loadname17,$scope0.$const19,'Eq', true);$blk=18;case 18: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,5); }$compareres18=Sk.builtin.bool($ret);var $jfalse20=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse20){$blk=17;continue;}$blk=17;case 17: var $jfalse21=($compareres18===false||!Sk.misceval.isTrue($compareres18));if($jfalse21){$blk=16;continue;}if (Sk.breakpoints('<stdin>.py',11,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,2);$susp.$blk = 19;$susp.optional = true;return $susp;}$blk=19;case 19: 

$currLineNo = 11;
$currColNo = 2;

var $loadname22=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname22.tp$call)?$loadname22.tp$call([$scope0.$const23],undefined) : Sk.misceval.applyOrSuspend($loadname22,undefined,undefined,undefined,[$scope0.$const23]);$blk=20;case 20: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,2); }var $call24=$ret;

$currLineNo = 11;
$currColNo = 2;

if (Sk.breakpoints('<stdin>.py',12,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,2);$susp.$blk = 21;$susp.optional = true;return $susp;}$blk=21;case 21: 

$currLineNo = 12;
$currColNo = 2;

var $loadname25=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname25.tp$call)?$loadname25.tp$call([$scope0.$const26],undefined) : Sk.misceval.applyOrSuspend($loadname25,undefined,undefined,undefined,[$scope0.$const26]);$blk=22;case 22: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,2); }var $call27=$ret;

$currLineNo = 12;
$currColNo = 2;

$blk=15;case 15: $blk=6; continue;case 16: if (Sk.breakpoints('<stdin>.py',13,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,5);$susp.$blk = 23;$susp.optional = true;return $susp;}$blk=23;case 23: 

$currLineNo = 13;
$currColNo = 5;

var $loadname28=$loc.planet!==undefined?$loc.planet:Sk.misceval.loadname('planet',$gbl);;var $compareres29=null;$ret = Sk.misceval.richCompareBool($loadname28,$scope0.$const30,'Eq', true);$blk=27;case 27: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,5); }$compareres29=Sk.builtin.bool($ret);var $jfalse31=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse31){$blk=26;continue;}$blk=26;case 26: var $jfalse32=($compareres29===false||!Sk.misceval.isTrue($compareres29));if($jfalse32){$blk=25;continue;}if (Sk.breakpoints('<stdin>.py',14,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,2);$susp.$blk = 28;$susp.optional = true;return $susp;}$blk=28;case 28: 

$currLineNo = 14;
$currColNo = 2;

var $loadname33=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname33.tp$call)?$loadname33.tp$call([$scope0.$const34],undefined) : Sk.misceval.applyOrSuspend($loadname33,undefined,undefined,undefined,[$scope0.$const34]);$blk=29;case 29: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,2); }var $call35=$ret;

$currLineNo = 14;
$currColNo = 2;

if (Sk.breakpoints('<stdin>.py',15,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,2);$susp.$blk = 30;$susp.optional = true;return $susp;}$blk=30;case 30: 

$currLineNo = 15;
$currColNo = 2;

var $loadname36=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname36.tp$call)?$loadname36.tp$call([$scope0.$const37],undefined) : Sk.misceval.applyOrSuspend($loadname36,undefined,undefined,undefined,[$scope0.$const37]);$blk=31;case 31: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,2); }var $call38=$ret;

$currLineNo = 15;
$currColNo = 2;

$blk=24;case 24: $blk=15; continue;case 25: if (Sk.breakpoints('<stdin>.py',16,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,5);$susp.$blk = 32;$susp.optional = true;return $susp;}$blk=32;case 32: 

$currLineNo = 16;
$currColNo = 5;

var $loadname39=$loc.planet!==undefined?$loc.planet:Sk.misceval.loadname('planet',$gbl);;var $compareres40=null;$ret = Sk.misceval.richCompareBool($loadname39,$scope0.$const41,'Eq', true);$blk=36;case 36: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,5); }$compareres40=Sk.builtin.bool($ret);var $jfalse42=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse42){$blk=35;continue;}$blk=35;case 35: var $jfalse43=($compareres40===false||!Sk.misceval.isTrue($compareres40));if($jfalse43){$blk=34;continue;}if (Sk.breakpoints('<stdin>.py',17,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,2);$susp.$blk = 37;$susp.optional = true;return $susp;}$blk=37;case 37: 

$currLineNo = 17;
$currColNo = 2;

var $loadname44=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname44.tp$call)?$loadname44.tp$call([$scope0.$const45],undefined) : Sk.misceval.applyOrSuspend($loadname44,undefined,undefined,undefined,[$scope0.$const45]);$blk=38;case 38: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,2); }var $call46=$ret;

$currLineNo = 17;
$currColNo = 2;

if (Sk.breakpoints('<stdin>.py',18,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',18,2);$susp.$blk = 39;$susp.optional = true;return $susp;}$blk=39;case 39: 

$currLineNo = 18;
$currColNo = 2;

var $loadname47=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname47.tp$call)?$loadname47.tp$call([$scope0.$const48],undefined) : Sk.misceval.applyOrSuspend($loadname47,undefined,undefined,undefined,[$scope0.$const48]);$blk=40;case 40: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',18,2); }var $call49=$ret;

$currLineNo = 18;
$currColNo = 2;

$blk=33;case 33: $blk=24; continue;case 34: if (Sk.breakpoints('<stdin>.py',20,2)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,2);$susp.$blk = 41;$susp.optional = true;return $susp;}$blk=41;case 41: 

$currLineNo = 20;
$currColNo = 2;

var $loadname50=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname50.tp$call)?$loadname50.tp$call([$scope0.$const51],undefined) : Sk.misceval.applyOrSuspend($loadname50,undefined,undefined,undefined,[$scope0.$const51]);$blk=42;case 42: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,2); }var $call52=$ret;

$currLineNo = 20;
$currColNo = 2;

$blk=33; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const4 = new Sk.builtin.str("Please type in your favourite planet (all lowercase):");$scope0.$const8 = new Sk.builtin.str("mercury");$scope0.$const12 = new Sk.builtin.str("https://www.weather.gov/images/fsd/astro/mercury_messenger_sm.jpg");$scope0.$const15 = new Sk.builtin.str("Mercury is the closest planet to the Sun! Did you know that a year on Mercury is just 88 days long?");$scope0.$const19 = new Sk.builtin.str("venus");$scope0.$const23 = new Sk.builtin.str("http://images.shoutwiki.com/ssrp/thumb/c/c6/Venus.jpg/256px-Venus.jpg");$scope0.$const26 = new Sk.builtin.str("Venus is the second planet from the Sun! Did you know that Venus is the third brightest natural object in the sky after the Sun and the Moon?");$scope0.$const30 = new Sk.builtin.str("earth");$scope0.$const34 = new Sk.builtin.str("https://photojournal.jpl.nasa.gov/browse/PIA00114.gif");$scope0.$const37 = new Sk.builtin.str("That's where we live! Earth is the third planet from the Sun! Did you know that Earth's surface is 70% water?");$scope0.$const41 = new Sk.builtin.str("mars");$scope0.$const45 = new Sk.builtin.str("https://nssdc.gsfc.nasa.gov/planetary/mars/image/mars.gif");$scope0.$const48 = new Sk.builtin.str("Mars is named after the Roman god of war due to its red atmosphere symbolising blood.");$scope0.$const51 = new Sk.builtin.str("I don't know about that planet. It must be out of this world.");
return $scope0;}();
$compiledmod;