Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname4,$loadname6,$loadname9,$compareres10,$loadname13,$loadname16,$compareres17,$loadname21,$loadname24,$loadname27,$compareres28,$loadname31,$loadname32,$loadname31,$loadname32,$lattr34,$binop36,$loadname37,$loadname31,$loadname32,$lattr34,$binop36,$loadname37,$lattr39,$binop40,$loadname42,$compareres43,$loadname47,$loadname48,$loadname47,$loadname48,$lattr50,$binop52,$loadname53,$loadname47,$loadname48,$lattr50,$binop52,$loadname53,$lattr54,$binop55,$loadname57,$loadname60,$loadname63,$loadname66,$loadname69,$loadname72,$compareres73,$loadname77,$loadname78,$loadname77,$loadname78,$lattr80,$binop82,$loadname83,$loadname77,$loadname78,$lattr80,$binop82,$loadname83,$lattr84,$binop85,$loadname87,$loadname90,$loadname93,$loadname96,$compareres97,$loadname100,$compareres101,$loadname105,$loadname106,$loadname105,$loadname106,$lattr108,$binop110,$loadname111,$loadname105,$loadname106,$lattr108,$binop110,$loadname111,$lattr112,$binop113,$loadname115,$loadname118,$compareres119,$loadname122,$loadname123,$loadname122,$loadname123,$lattr125,$binop127,$loadname128,$loadname122,$loadname123,$lattr125,$binop127,$loadname128,$lattr129,$binop130,$loadname132,$loadname135,$loadname138,$loadname141,$compareres142,$loadname145,$compareres146,$loadname149,$loadname150,$loadname149,$loadname150,$lattr151,$binop153,$loadname154,$loadname149,$loadname150,$lattr151,$binop153,$loadname154,$lattr155,$binop156,$loadname158,$loadname160,$compareres161,$loadname165,$loadname166,$loadname165,$loadname166,$lattr167,$binop169,$loadname170,$loadname165,$loadname166,$lattr167,$binop169,$loadname170,$lattr171,$binop172,$loadname174,$loadname177,$loadname178,$loadname177,$loadname178,$lattr179,$binop181;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname4=susp.$tmps.$loadname4;$loadname6=susp.$tmps.$loadname6;$loadname9=susp.$tmps.$loadname9;$compareres10=susp.$tmps.$compareres10;$loadname13=susp.$tmps.$loadname13;$loadname16=susp.$tmps.$loadname16;$compareres17=susp.$tmps.$compareres17;$loadname21=susp.$tmps.$loadname21;$loadname24=susp.$tmps.$loadname24;$loadname27=susp.$tmps.$loadname27;$compareres28=susp.$tmps.$compareres28;$loadname31=susp.$tmps.$loadname31;$loadname32=susp.$tmps.$loadname32;$lattr34=susp.$tmps.$lattr34;$binop36=susp.$tmps.$binop36;$loadname37=susp.$tmps.$loadname37;$lattr39=susp.$tmps.$lattr39;$binop40=susp.$tmps.$binop40;$loadname42=susp.$tmps.$loadname42;$compareres43=susp.$tmps.$compareres43;$loadname47=susp.$tmps.$loadname47;$loadname48=susp.$tmps.$loadname48;$lattr50=susp.$tmps.$lattr50;$binop52=susp.$tmps.$binop52;$loadname53=susp.$tmps.$loadname53;$lattr54=susp.$tmps.$lattr54;$binop55=susp.$tmps.$binop55;$loadname57=susp.$tmps.$loadname57;$loadname60=susp.$tmps.$loadname60;$loadname63=susp.$tmps.$loadname63;$loadname66=susp.$tmps.$loadname66;$loadname69=susp.$tmps.$loadname69;$loadname72=susp.$tmps.$loadname72;$compareres73=susp.$tmps.$compareres73;$loadname77=susp.$tmps.$loadname77;$loadname78=susp.$tmps.$loadname78;$lattr80=susp.$tmps.$lattr80;$binop82=susp.$tmps.$binop82;$loadname83=susp.$tmps.$loadname83;$lattr84=susp.$tmps.$lattr84;$binop85=susp.$tmps.$binop85;$loadname87=susp.$tmps.$loadname87;$loadname90=susp.$tmps.$loadname90;$loadname93=susp.$tmps.$loadname93;$loadname96=susp.$tmps.$loadname96;$compareres97=susp.$tmps.$compareres97;$loadname100=susp.$tmps.$loadname100;$compareres101=susp.$tmps.$compareres101;$loadname105=susp.$tmps.$loadname105;$loadname106=susp.$tmps.$loadname106;$lattr108=susp.$tmps.$lattr108;$binop110=susp.$tmps.$binop110;$loadname111=susp.$tmps.$loadname111;$lattr112=susp.$tmps.$lattr112;$binop113=susp.$tmps.$binop113;$loadname115=susp.$tmps.$loadname115;$loadname118=susp.$tmps.$loadname118;$compareres119=susp.$tmps.$compareres119;$loadname122=susp.$tmps.$loadname122;$loadname123=susp.$tmps.$loadname123;$lattr125=susp.$tmps.$lattr125;$binop127=susp.$tmps.$binop127;$loadname128=susp.$tmps.$loadname128;$lattr129=susp.$tmps.$lattr129;$binop130=susp.$tmps.$binop130;$loadname132=susp.$tmps.$loadname132;$loadname135=susp.$tmps.$loadname135;$loadname138=susp.$tmps.$loadname138;$loadname141=susp.$tmps.$loadname141;$compareres142=susp.$tmps.$compareres142;$loadname145=susp.$tmps.$loadname145;$compareres146=susp.$tmps.$compareres146;$loadname149=susp.$tmps.$loadname149;$loadname150=susp.$tmps.$loadname150;$lattr151=susp.$tmps.$lattr151;$binop153=susp.$tmps.$binop153;$loadname154=susp.$tmps.$loadname154;$lattr155=susp.$tmps.$lattr155;$binop156=susp.$tmps.$binop156;$loadname158=susp.$tmps.$loadname158;$loadname160=susp.$tmps.$loadname160;$compareres161=susp.$tmps.$compareres161;$loadname165=susp.$tmps.$loadname165;$loadname166=susp.$tmps.$loadname166;$lattr167=susp.$tmps.$lattr167;$binop169=susp.$tmps.$binop169;$loadname170=susp.$tmps.$loadname170;$lattr171=susp.$tmps.$lattr171;$binop172=susp.$tmps.$binop172;$loadname174=susp.$tmps.$loadname174;$loadname177=susp.$tmps.$loadname177;$loadname178=susp.$tmps.$loadname178;$lattr179=susp.$tmps.$lattr179;$binop181=susp.$tmps.$binop181;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname4":$loadname4,"$loadname6":$loadname6,"$loadname9":$loadname9,"$compareres10":$compareres10,"$loadname13":$loadname13,"$loadname16":$loadname16,"$compareres17":$compareres17,"$loadname21":$loadname21,"$loadname24":$loadname24,"$loadname27":$loadname27,"$compareres28":$compareres28,"$loadname31":$loadname31,"$loadname32":$loadname32,"$lattr34":$lattr34,"$binop36":$binop36,"$loadname37":$loadname37,"$lattr39":$lattr39,"$binop40":$binop40,"$loadname42":$loadname42,"$compareres43":$compareres43,"$loadname47":$loadname47,"$loadname48":$loadname48,"$lattr50":$lattr50,"$binop52":$binop52,"$loadname53":$loadname53,"$lattr54":$lattr54,"$binop55":$binop55,"$loadname57":$loadname57,"$loadname60":$loadname60,"$loadname63":$loadname63,"$loadname66":$loadname66,"$loadname69":$loadname69,"$loadname72":$loadname72,"$compareres73":$compareres73,"$loadname77":$loadname77,"$loadname78":$loadname78,"$lattr80":$lattr80,"$binop82":$binop82,"$loadname83":$loadname83,"$lattr84":$lattr84,"$binop85":$binop85,"$loadname87":$loadname87,"$loadname90":$loadname90,"$loadname93":$loadname93,"$loadname96":$loadname96,"$compareres97":$compareres97,"$loadname100":$loadname100,"$compareres101":$compareres101,"$loadname105":$loadname105,"$loadname106":$loadname106,"$lattr108":$lattr108,"$binop110":$binop110,"$loadname111":$loadname111,"$lattr112":$lattr112,"$binop113":$binop113,"$loadname115":$loadname115,"$loadname118":$loadname118,"$compareres119":$compareres119,"$loadname122":$loadname122,"$loadname123":$loadname123,"$lattr125":$lattr125,"$binop127":$binop127,"$loadname128":$loadname128,"$lattr129":$lattr129,"$binop130":$binop130,"$loadname132":$loadname132,"$loadname135":$loadname135,"$loadname138":$loadname138,"$loadname141":$loadname141,"$compareres142":$compareres142,"$loadname145":$loadname145,"$compareres146":$compareres146,"$loadname149":$loadname149,"$loadname150":$loadname150,"$lattr151":$lattr151,"$binop153":$binop153,"$loadname154":$loadname154,"$lattr155":$lattr155,"$binop156":$binop156,"$loadname158":$loadname158,"$loadname160":$loadname160,"$compareres161":$compareres161,"$loadname165":$loadname165,"$loadname166":$loadname166,"$lattr167":$lattr167,"$binop169":$binop169,"$loadname170":$loadname170,"$lattr171":$lattr171,"$binop172":$binop172,"$loadname174":$loadname174,"$loadname177":$loadname177,"$loadname178":$loadname178,"$lattr179":$lattr179,"$binop181":$binop181};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$ret = Sk.builtin.__import__('csinsc',$gbl,$loc,['*'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;Sk.importStar($module1,$loc, $gbl);if (Sk.breakpoints('<stdin>.py',2,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',2,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 2;
$currColNo = 0;

$loc.shipping=$scope0.$const2;if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 4;$susp.optional = true;return $susp;}$blk=4;case 4: 

$currLineNo = 3;
$currColNo = 0;

$loc.item=$scope0.$const3;if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 5;
$currColNo = 0;

$blk=6;case 6: if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: $blk=8;case 8: if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 6;
$currColNo = 0;

var $loadname4=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname4.tp$call)?$loadname4.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname4,undefined,undefined,undefined,[]);$blk=10;case 10: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,0); }var $call5=$ret;

$currLineNo = 6;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 11;$susp.optional = true;return $susp;}$blk=11;case 11: 

$currLineNo = 7;
$currColNo = 0;

var $loadname6=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname6.tp$call)?$loadname6.tp$call([$scope0.$const7],undefined) : Sk.misceval.applyOrSuspend($loadname6,undefined,undefined,undefined,[$scope0.$const7]);$blk=12;case 12: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,0); }var $call8=$ret;

$currLineNo = 7;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',8,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,0);$susp.$blk = 13;$susp.optional = true;return $susp;}$blk=13;case 13: 

$currLineNo = 8;
$currColNo = 0;

var $loadname9=$loc.item!==undefined?$loc.item:Sk.misceval.loadname('item',$gbl);;var $compareres10=null;$ret = Sk.misceval.richCompareBool($loadname9,$scope0.$const3,'Eq', true);$blk=17;case 17: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,3); }$compareres10=Sk.builtin.bool($ret);var $jfalse11=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse11){$blk=16;continue;}$blk=16;case 16: var $jfalse12=($compareres10===false||!Sk.misceval.isTrue($compareres10));if($jfalse12){$blk=15;continue;}if (Sk.breakpoints('<stdin>.py',9,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,4);$susp.$blk = 18;$susp.optional = true;return $susp;}$blk=18;case 18: 

$currLineNo = 9;
$currColNo = 4;

var $loadname13=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname13.tp$call)?$loadname13.tp$call([$scope0.$const14],undefined) : Sk.misceval.applyOrSuspend($loadname13,undefined,undefined,undefined,[$scope0.$const14]);$blk=19;case 19: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,4); }var $call15=$ret;

$currLineNo = 9;
$currColNo = 4;

$blk=14;case 14: if (Sk.breakpoints('<stdin>.py',13,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,0);$susp.$blk = 26;$susp.optional = true;return $susp;}$blk=26;case 26: 

$currLineNo = 13;
$currColNo = 0;

var $loadname24=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname24.tp$call)?$loadname24.tp$call([$scope0.$const25],undefined) : Sk.misceval.applyOrSuspend($loadname24,undefined,undefined,undefined,[$scope0.$const25]);$blk=27;case 27: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,0); }var $call26=$ret;

$currLineNo = 13;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',14,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,0);$susp.$blk = 28;$susp.optional = true;return $susp;}$blk=28;case 28: 

$currLineNo = 14;
$currColNo = 0;

var $loadname27=$loc.shipping!==undefined?$loc.shipping:Sk.misceval.loadname('shipping',$gbl);;var $compareres28=null;$ret = Sk.misceval.richCompareBool($loadname27,$scope0.$const2,'Eq', true);$blk=32;case 32: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,3); }$compareres28=Sk.builtin.bool($ret);var $jfalse29=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse29){$blk=31;continue;}$blk=31;case 31: var $jfalse30=($compareres28===false||!Sk.misceval.isTrue($compareres28));if($jfalse30){$blk=30;continue;}if (Sk.breakpoints('<stdin>.py',15,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,4);$susp.$blk = 33;$susp.optional = true;return $susp;}$blk=33;case 33: 

$currLineNo = 15;
$currColNo = 4;

var $loadname31=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname32=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname32.tp$getattr($scope0.$const33, true);$blk=34;case 34: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname32.sk$attrError() + " has no attribute '" + $scope0.$const33.$jsstr() + "'");
};var $lattr34=$ret;var $binop36=Sk.abstr.numberBinOp($lattr34,$scope0.$const35,'Add');var $loadname37=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname37.tp$getattr($scope0.$const38, true);$blk=35;case 35: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,36); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname37.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr39=$ret;var $binop40=Sk.abstr.numberBinOp($binop36,$lattr39,'Add');$ret = ($loadname31.tp$call)?$loadname31.tp$call([$binop40],undefined) : Sk.misceval.applyOrSuspend($loadname31,undefined,undefined,undefined,[$binop40]);$blk=36;case 36: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,4); }var $call41=$ret;

$currLineNo = 15;
$currColNo = 4;

$blk=29;case 29: if (Sk.breakpoints('<stdin>.py',19,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',19,0);$susp.$blk = 45;$susp.optional = true;return $susp;}$blk=45;case 45: 

$currLineNo = 19;
$currColNo = 0;

var $loadname57=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname57.tp$call)?$loadname57.tp$call([$scope0.$const58],undefined) : Sk.misceval.applyOrSuspend($loadname57,undefined,undefined,undefined,[$scope0.$const58]);$blk=46;case 46: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',19,0); }var $call59=$ret;

$currLineNo = 19;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',20,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,0);$susp.$blk = 47;$susp.optional = true;return $susp;}$blk=47;case 47: 

$currLineNo = 20;
$currColNo = 0;

var $loadname60=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname60.tp$call)?$loadname60.tp$call([$scope0.$const61],undefined) : Sk.misceval.applyOrSuspend($loadname60,undefined,undefined,undefined,[$scope0.$const61]);$blk=48;case 48: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,0); }var $call62=$ret;

$currLineNo = 20;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',21,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',21,0);$susp.$blk = 49;$susp.optional = true;return $susp;}$blk=49;case 49: 

$currLineNo = 21;
$currColNo = 0;

var $loadname63=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname63.tp$call)?$loadname63.tp$call([$scope0.$const64],undefined) : Sk.misceval.applyOrSuspend($loadname63,undefined,undefined,undefined,[$scope0.$const64]);$blk=50;case 50: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,0); }var $call65=$ret;

$currLineNo = 21;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',22,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',22,0);$susp.$blk = 51;$susp.optional = true;return $susp;}$blk=51;case 51: 

$currLineNo = 22;
$currColNo = 0;

var $loadname66=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname66.tp$call)?$loadname66.tp$call([$scope0.$const67],undefined) : Sk.misceval.applyOrSuspend($loadname66,undefined,undefined,undefined,[$scope0.$const67]);$blk=52;case 52: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',22,0); }var $call68=$ret;

$currLineNo = 22;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',24,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',24,0);$susp.$blk = 53;$susp.optional = true;return $susp;}$blk=53;case 53: 

$currLineNo = 24;
$currColNo = 0;

var $loadname69=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname69.tp$call)?$loadname69.tp$call([$scope0.$const70],undefined) : Sk.misceval.applyOrSuspend($loadname69,undefined,undefined,undefined,[$scope0.$const70]);$blk=54;case 54: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',24,9); }var $call71=$ret;

$currLineNo = 24;
$currColNo = 9;

$loc.choice=$call71;if (Sk.breakpoints('<stdin>.py',25,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',25,0);$susp.$blk = 55;$susp.optional = true;return $susp;}$blk=55;case 55: 

$currLineNo = 25;
$currColNo = 0;

var $loadname72=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres73=null;$ret = Sk.misceval.richCompareBool($loadname72,$scope0.$const74,'Eq', true);$blk=59;case 59: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',25,3); }$compareres73=Sk.builtin.bool($ret);var $jfalse75=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse75){$blk=58;continue;}$blk=58;case 58: var $jfalse76=($compareres73===false||!Sk.misceval.isTrue($compareres73));if($jfalse76){$blk=57;continue;}if (Sk.breakpoints('<stdin>.py',26,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',26,4);$susp.$blk = 60;$susp.optional = true;return $susp;}$blk=60;case 60: 

$currLineNo = 26;
$currColNo = 4;

var $loadname77=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname78=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname78.tp$getattr($scope0.$const79, true);$blk=61;case 61: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',26,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname78.sk$attrError() + " has no attribute '" + $scope0.$const79.$jsstr() + "'");
};var $lattr80=$ret;var $binop82=Sk.abstr.numberBinOp($lattr80,$scope0.$const81,'Add');var $loadname83=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname83.tp$getattr($scope0.$const38, true);$blk=62;case 62: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',26,53); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname83.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr84=$ret;var $binop85=Sk.abstr.numberBinOp($binop82,$lattr84,'Add');$ret = ($loadname77.tp$call)?$loadname77.tp$call([$binop85],undefined) : Sk.misceval.applyOrSuspend($loadname77,undefined,undefined,undefined,[$binop85]);$blk=63;case 63: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',26,4); }var $call86=$ret;

$currLineNo = 26;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',27,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',27,4);$susp.$blk = 64;$susp.optional = true;return $susp;}$blk=64;case 64: 

$currLineNo = 27;
$currColNo = 4;

var $loadname87=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname87.tp$call)?$loadname87.tp$call([$scope0.$const88],undefined) : Sk.misceval.applyOrSuspend($loadname87,undefined,undefined,undefined,[$scope0.$const88]);$blk=65;case 65: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',27,4); }var $call89=$ret;

$currLineNo = 27;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',28,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',28,4);$susp.$blk = 66;$susp.optional = true;return $susp;}$blk=66;case 66: 

$currLineNo = 28;
$currColNo = 4;

var $loadname90=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname90.tp$call)?$loadname90.tp$call([$scope0.$const91],undefined) : Sk.misceval.applyOrSuspend($loadname90,undefined,undefined,undefined,[$scope0.$const91]);$blk=67;case 67: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',28,4); }var $call92=$ret;

$currLineNo = 28;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',29,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',29,4);$susp.$blk = 68;$susp.optional = true;return $susp;}$blk=68;case 68: 

$currLineNo = 29;
$currColNo = 4;

var $loadname93=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname93.tp$call)?$loadname93.tp$call([$scope0.$const94],undefined) : Sk.misceval.applyOrSuspend($loadname93,undefined,undefined,undefined,[$scope0.$const94]);$blk=69;case 69: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',29,18); }var $call95=$ret;

$currLineNo = 29;
$currColNo = 18;

$loc.item_choice=$call95;if (Sk.breakpoints('<stdin>.py',30,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',30,4);$susp.$blk = 70;$susp.optional = true;return $susp;}$blk=70;case 70: 

$currLineNo = 30;
$currColNo = 4;

var $loadname96=$loc.item_choice!==undefined?$loc.item_choice:Sk.misceval.loadname('item_choice',$gbl);;var $compareres97=null;$ret = Sk.misceval.richCompareBool($loadname96,$scope0.$const74,'Eq', true);$blk=74;case 74: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',30,7); }$compareres97=Sk.builtin.bool($ret);var $jfalse98=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse98){$blk=73;continue;}$blk=73;case 73: var $jfalse99=($compareres97===false||!Sk.misceval.isTrue($compareres97));if($jfalse99){$blk=72;continue;}if (Sk.breakpoints('<stdin>.py',31,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',31,8);$susp.$blk = 75;$susp.optional = true;return $susp;}$blk=75;case 75: 

$currLineNo = 31;
$currColNo = 8;

$loc.item=$scope0.$const3;$blk=71;case 71: $blk=56;case 56: if (Sk.breakpoints('<stdin>.py',55,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',55,0);$susp.$blk = 133;$susp.optional = true;return $susp;}$blk=133;case 133: 

$currLineNo = 55;
$currColNo = 0;

$blk=6; continue;if (Sk.breakpoints('<stdin>.py',57,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',57,0);$susp.$blk = 134;$susp.optional = true;return $susp;}$blk=134; continue;case 15: if (Sk.breakpoints('<stdin>.py',10,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,5);$susp.$blk = 20;$susp.optional = true;return $susp;}$blk=20;case 20: 

$currLineNo = 10;
$currColNo = 5;

var $loadname16=$loc.item!==undefined?$loc.item:Sk.misceval.loadname('item',$gbl);;var $compareres17=null;$ret = Sk.misceval.richCompareBool($loadname16,$scope0.$const18,'Eq', true);$blk=23;case 23: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,5); }$compareres17=Sk.builtin.bool($ret);var $jfalse19=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse19){$blk=22;continue;}$blk=22;case 22: var $jfalse20=($compareres17===false||!Sk.misceval.isTrue($compareres17));if($jfalse20){$blk=21;continue;}if (Sk.breakpoints('<stdin>.py',11,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,4);$susp.$blk = 24;$susp.optional = true;return $susp;}$blk=24;case 24: 

$currLineNo = 11;
$currColNo = 4;

var $loadname21=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname21.tp$call)?$loadname21.tp$call([$scope0.$const22],undefined) : Sk.misceval.applyOrSuspend($loadname21,undefined,undefined,undefined,[$scope0.$const22]);$blk=25;case 25: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,4); }var $call23=$ret;

$currLineNo = 11;
$currColNo = 4;

$blk=21;case 21: $blk=14; continue;case 30: if (Sk.breakpoints('<stdin>.py',16,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,5);$susp.$blk = 37;$susp.optional = true;return $susp;}$blk=37;case 37: 

$currLineNo = 16;
$currColNo = 5;

var $loadname42=$loc.shipping!==undefined?$loc.shipping:Sk.misceval.loadname('shipping',$gbl);;var $compareres43=null;$ret = Sk.misceval.richCompareBool($loadname42,$scope0.$const44,'Eq', true);$blk=40;case 40: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,5); }$compareres43=Sk.builtin.bool($ret);var $jfalse45=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse45){$blk=39;continue;}$blk=39;case 39: var $jfalse46=($compareres43===false||!Sk.misceval.isTrue($compareres43));if($jfalse46){$blk=38;continue;}if (Sk.breakpoints('<stdin>.py',17,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,4);$susp.$blk = 41;$susp.optional = true;return $susp;}$blk=41;case 41: 

$currLineNo = 17;
$currColNo = 4;

var $loadname47=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname48=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname48.tp$getattr($scope0.$const49, true);$blk=42;case 42: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname48.sk$attrError() + " has no attribute '" + $scope0.$const49.$jsstr() + "'");
};var $lattr50=$ret;var $binop52=Sk.abstr.numberBinOp($lattr50,$scope0.$const51,'Add');var $loadname53=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname53.tp$getattr($scope0.$const38, true);$blk=43;case 43: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,33); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname53.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr54=$ret;var $binop55=Sk.abstr.numberBinOp($binop52,$lattr54,'Add');$ret = ($loadname47.tp$call)?$loadname47.tp$call([$binop55],undefined) : Sk.misceval.applyOrSuspend($loadname47,undefined,undefined,undefined,[$binop55]);$blk=44;case 44: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,4); }var $call56=$ret;

$currLineNo = 17;
$currColNo = 4;

$blk=38;case 38: $blk=29; continue;case 57: if (Sk.breakpoints('<stdin>.py',37,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',37,5);$susp.$blk = 88;$susp.optional = true;return $susp;}$blk=88;case 88: 

$currLineNo = 37;
$currColNo = 5;

var $loadname118=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres119=null;$ret = Sk.misceval.richCompareBool($loadname118,$scope0.$const102,'Eq', true);$blk=92;case 92: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',37,5); }$compareres119=Sk.builtin.bool($ret);var $jfalse120=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse120){$blk=91;continue;}$blk=91;case 91: var $jfalse121=($compareres119===false||!Sk.misceval.isTrue($compareres119));if($jfalse121){$blk=90;continue;}if (Sk.breakpoints('<stdin>.py',39,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',39,4);$susp.$blk = 93;$susp.optional = true;return $susp;}$blk=93;case 93: 

$currLineNo = 39;
$currColNo = 4;

var $loadname122=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname123=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname123.tp$getattr($scope0.$const124, true);$blk=94;case 94: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',39,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname123.sk$attrError() + " has no attribute '" + $scope0.$const124.$jsstr() + "'");
};var $lattr125=$ret;var $binop127=Sk.abstr.numberBinOp($lattr125,$scope0.$const126,'Add');var $loadname128=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname128.tp$getattr($scope0.$const38, true);$blk=95;case 95: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',39,58); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname128.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr129=$ret;var $binop130=Sk.abstr.numberBinOp($binop127,$lattr129,'Add');$ret = ($loadname122.tp$call)?$loadname122.tp$call([$binop130],undefined) : Sk.misceval.applyOrSuspend($loadname122,undefined,undefined,undefined,[$binop130]);$blk=96;case 96: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',39,4); }var $call131=$ret;

$currLineNo = 39;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',40,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',40,4);$susp.$blk = 97;$susp.optional = true;return $susp;}$blk=97;case 97: 

$currLineNo = 40;
$currColNo = 4;

var $loadname132=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname132.tp$call)?$loadname132.tp$call([$scope0.$const133],undefined) : Sk.misceval.applyOrSuspend($loadname132,undefined,undefined,undefined,[$scope0.$const133]);$blk=98;case 98: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',40,4); }var $call134=$ret;

$currLineNo = 40;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',41,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',41,4);$susp.$blk = 99;$susp.optional = true;return $susp;}$blk=99;case 99: 

$currLineNo = 41;
$currColNo = 4;

var $loadname135=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname135.tp$call)?$loadname135.tp$call([$scope0.$const136],undefined) : Sk.misceval.applyOrSuspend($loadname135,undefined,undefined,undefined,[$scope0.$const136]);$blk=100;case 100: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',41,4); }var $call137=$ret;

$currLineNo = 41;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',42,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',42,4);$susp.$blk = 101;$susp.optional = true;return $susp;}$blk=101;case 101: 

$currLineNo = 42;
$currColNo = 4;

var $loadname138=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname138.tp$call)?$loadname138.tp$call([$scope0.$const139],undefined) : Sk.misceval.applyOrSuspend($loadname138,undefined,undefined,undefined,[$scope0.$const139]);$blk=102;case 102: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',42,22); }var $call140=$ret;

$currLineNo = 42;
$currColNo = 22;

$loc.shipping_choice=$call140;if (Sk.breakpoints('<stdin>.py',43,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',43,4);$susp.$blk = 103;$susp.optional = true;return $susp;}$blk=103;case 103: 

$currLineNo = 43;
$currColNo = 4;

var $loadname141=$loc.shipping_choice!==undefined?$loc.shipping_choice:Sk.misceval.loadname('shipping_choice',$gbl);;var $compareres142=null;$ret = Sk.misceval.richCompareBool($loadname141,$scope0.$const74,'Eq', true);$blk=107;case 107: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',43,7); }$compareres142=Sk.builtin.bool($ret);var $jfalse143=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse143){$blk=106;continue;}$blk=106;case 106: var $jfalse144=($compareres142===false||!Sk.misceval.isTrue($compareres142));if($jfalse144){$blk=105;continue;}if (Sk.breakpoints('<stdin>.py',44,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',44,8);$susp.$blk = 108;$susp.optional = true;return $susp;}$blk=108;case 108: 

$currLineNo = 44;
$currColNo = 8;

$loc.shipping=$scope0.$const2;$blk=104;case 104: $blk=89;case 89: $blk=56; continue;case 72: if (Sk.breakpoints('<stdin>.py',32,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',32,9);$susp.$blk = 76;$susp.optional = true;return $susp;}$blk=76;case 76: 

$currLineNo = 32;
$currColNo = 9;

var $loadname100=$loc.item_choice!==undefined?$loc.item_choice:Sk.misceval.loadname('item_choice',$gbl);;var $compareres101=null;$ret = Sk.misceval.richCompareBool($loadname100,$scope0.$const102,'Eq', true);$blk=80;case 80: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',32,9); }$compareres101=Sk.builtin.bool($ret);var $jfalse103=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse103){$blk=79;continue;}$blk=79;case 79: var $jfalse104=($compareres101===false||!Sk.misceval.isTrue($compareres101));if($jfalse104){$blk=78;continue;}if (Sk.breakpoints('<stdin>.py',33,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',33,8);$susp.$blk = 81;$susp.optional = true;return $susp;}$blk=81;case 81: 

$currLineNo = 33;
$currColNo = 8;

$loc.item=$scope0.$const18;$blk=77;case 77: $blk=71; continue;case 78: if (Sk.breakpoints('<stdin>.py',35,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',35,8);$susp.$blk = 82;$susp.optional = true;return $susp;}$blk=82;case 82: 

$currLineNo = 35;
$currColNo = 8;

var $loadname105=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname106=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname106.tp$getattr($scope0.$const107, true);$blk=83;case 83: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',35,14); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname106.sk$attrError() + " has no attribute '" + $scope0.$const107.$jsstr() + "'");
};var $lattr108=$ret;var $binop110=Sk.abstr.numberBinOp($lattr108,$scope0.$const109,'Add');var $loadname111=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname111.tp$getattr($scope0.$const38, true);$blk=84;case 84: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',35,57); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname111.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr112=$ret;var $binop113=Sk.abstr.numberBinOp($binop110,$lattr112,'Add');$ret = ($loadname105.tp$call)?$loadname105.tp$call([$binop113],undefined) : Sk.misceval.applyOrSuspend($loadname105,undefined,undefined,undefined,[$binop113]);$blk=85;case 85: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',35,8); }var $call114=$ret;

$currLineNo = 35;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',36,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',36,8);$susp.$blk = 86;$susp.optional = true;return $susp;}$blk=86;case 86: 

$currLineNo = 36;
$currColNo = 8;

var $loadname115=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname115.tp$call)?$loadname115.tp$call([$scope0.$const116],undefined) : Sk.misceval.applyOrSuspend($loadname115,undefined,undefined,undefined,[$scope0.$const116]);$blk=87;case 87: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',36,8); }var $call117=$ret;

$currLineNo = 36;
$currColNo = 8;

$blk=77; continue;case 90: if (Sk.breakpoints('<stdin>.py',50,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',50,5);$susp.$blk = 121;$susp.optional = true;return $susp;}$blk=121;case 121: 

$currLineNo = 50;
$currColNo = 5;

var $loadname160=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres161=null;$ret = Sk.misceval.richCompareBool($loadname160,$scope0.$const162,'Eq', true);$blk=125;case 125: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',50,5); }$compareres161=Sk.builtin.bool($ret);var $jfalse163=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse163){$blk=124;continue;}$blk=124;case 124: var $jfalse164=($compareres161===false||!Sk.misceval.isTrue($compareres161));if($jfalse164){$blk=123;continue;}if (Sk.breakpoints('<stdin>.py',51,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',51,4);$susp.$blk = 126;$susp.optional = true;return $susp;}$blk=126;case 126: 

$currLineNo = 51;
$currColNo = 4;

$blk=135; continue;$blk=122;case 135: if (Sk.breakpoints('<stdin>.py',57,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',57,0);$susp.$blk = 136;$susp.optional = true;return $susp;}$blk=136;case 136: $blk=137;case 137: if (Sk.breakpoints('<stdin>.py',58,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',58,0);$susp.$blk = 138;$susp.optional = true;return $susp;}$blk=138;case 138: 

$currLineNo = 58;
$currColNo = 0;

var $loadname177=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname178=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname178.tp$getattr($scope0.$const38, true);$blk=139;case 139: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',58,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname178.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr179=$ret;var $binop181=Sk.abstr.numberBinOp($lattr179,$scope0.$const180,'Add');$ret = ($loadname177.tp$call)?$loadname177.tp$call([$binop181],undefined) : Sk.misceval.applyOrSuspend($loadname177,undefined,undefined,undefined,[$binop181]);$blk=140;case 140: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',58,0); }var $call182=$ret;

$currLineNo = 58;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');case 105: if (Sk.breakpoints('<stdin>.py',45,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',45,9);$susp.$blk = 109;$susp.optional = true;return $susp;}$blk=109;case 109: 

$currLineNo = 45;
$currColNo = 9;

var $loadname145=$loc.shipping_choice!==undefined?$loc.shipping_choice:Sk.misceval.loadname('shipping_choice',$gbl);;var $compareres146=null;$ret = Sk.misceval.richCompareBool($loadname145,$scope0.$const102,'Eq', true);$blk=113;case 113: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',45,9); }$compareres146=Sk.builtin.bool($ret);var $jfalse147=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse147){$blk=112;continue;}$blk=112;case 112: var $jfalse148=($compareres146===false||!Sk.misceval.isTrue($compareres146));if($jfalse148){$blk=111;continue;}if (Sk.breakpoints('<stdin>.py',46,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',46,8);$susp.$blk = 114;$susp.optional = true;return $susp;}$blk=114;case 114: 

$currLineNo = 46;
$currColNo = 8;

$loc.shipping=$scope0.$const44;$blk=110;case 110: $blk=104; continue;case 111: if (Sk.breakpoints('<stdin>.py',48,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',48,8);$susp.$blk = 115;$susp.optional = true;return $susp;}$blk=115;case 115: 

$currLineNo = 48;
$currColNo = 8;

var $loadname149=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname150=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname150.tp$getattr($scope0.$const107, true);$blk=116;case 116: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',48,14); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname150.sk$attrError() + " has no attribute '" + $scope0.$const107.$jsstr() + "'");
};var $lattr151=$ret;var $binop153=Sk.abstr.numberBinOp($lattr151,$scope0.$const152,'Add');var $loadname154=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname154.tp$getattr($scope0.$const38, true);$blk=117;case 117: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',48,61); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname154.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr155=$ret;var $binop156=Sk.abstr.numberBinOp($binop153,$lattr155,'Add');$ret = ($loadname149.tp$call)?$loadname149.tp$call([$binop156],undefined) : Sk.misceval.applyOrSuspend($loadname149,undefined,undefined,undefined,[$binop156]);$blk=118;case 118: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',48,8); }var $call157=$ret;

$currLineNo = 48;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',49,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',49,8);$susp.$blk = 119;$susp.optional = true;return $susp;}$blk=119;case 119: 

$currLineNo = 49;
$currColNo = 8;

var $loadname158=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname158.tp$call)?$loadname158.tp$call([$scope0.$const116],undefined) : Sk.misceval.applyOrSuspend($loadname158,undefined,undefined,undefined,[$scope0.$const116]);$blk=120;case 120: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',49,8); }var $call159=$ret;

$currLineNo = 49;
$currColNo = 8;

$blk=110; continue;case 122: $blk=89; continue;case 123: if (Sk.breakpoints('<stdin>.py',53,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',53,4);$susp.$blk = 127;$susp.optional = true;return $susp;}$blk=127;case 127: 

$currLineNo = 53;
$currColNo = 4;

var $loadname165=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname166=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname166.tp$getattr($scope0.$const107, true);$blk=128;case 128: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',53,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname166.sk$attrError() + " has no attribute '" + $scope0.$const107.$jsstr() + "'");
};var $lattr167=$ret;var $binop169=Sk.abstr.numberBinOp($lattr167,$scope0.$const168,'Add');var $loadname170=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname170.tp$getattr($scope0.$const38, true);$blk=129;case 129: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',53,54); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname170.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr171=$ret;var $binop172=Sk.abstr.numberBinOp($binop169,$lattr171,'Add');$ret = ($loadname165.tp$call)?$loadname165.tp$call([$binop172],undefined) : Sk.misceval.applyOrSuspend($loadname165,undefined,undefined,undefined,[$binop172]);$blk=130;case 130: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',53,4); }var $call173=$ret;

$currLineNo = 53;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',54,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',54,4);$susp.$blk = 131;$susp.optional = true;return $susp;}$blk=131;case 131: 

$currLineNo = 54;
$currColNo = 4;

var $loadname174=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname174.tp$call)?$loadname174.tp$call([$scope0.$const175],undefined) : Sk.misceval.applyOrSuspend($loadname174,undefined,undefined,undefined,[$scope0.$const175]);$blk=132;case 132: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',54,4); }var $call176=$ret;

$currLineNo = 54;
$currColNo = 4;

$blk=122; continue;case 134: 

$currLineNo = 57;
$currColNo = 0;

$blk=135; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const2 = new Sk.builtin.str("shipping_free");$scope0.$const3 = new Sk.builtin.str("item_balloon");$scope0.$const7 = new Sk.builtin.str("Your item:");$scope0.$const14 = new Sk.builtin.str("\ud83c\udf88");$scope0.$const18 = new Sk.builtin.str("item_popper");$scope0.$const22 = new Sk.builtin.str("\ud83c\udf89");$scope0.$const25 = new Sk.builtin.str("Shipping mode:");$scope0.$const33 = new Sk.builtin.str('yellow');$scope0.$const35 = new Sk.builtin.str("Free!");$scope0.$const38 = new Sk.builtin.str('reset');$scope0.$const44 = new Sk.builtin.str("shipping_standard");$scope0.$const49 = new Sk.builtin.str('orange');$scope0.$const51 = new Sk.builtin.str("$5");$scope0.$const58 = new Sk.builtin.str("==== Menu ====");$scope0.$const61 = new Sk.builtin.str("[1] Change item");$scope0.$const64 = new Sk.builtin.str("[2] Change shipping");$scope0.$const67 = new Sk.builtin.str("[3] Exit");$scope0.$const70 = new Sk.builtin.str("Enter your choice:");$scope0.$const74 = new Sk.builtin.str("1");$scope0.$const79 = new Sk.builtin.str('cyan');$scope0.$const81 = new Sk.builtin.str("   ==== Select item ====");$scope0.$const88 = new Sk.builtin.str("   [1] \ud83c\udf88 Balloon");$scope0.$const91 = new Sk.builtin.str("   [2] \ud83c\udf89 Popper");$scope0.$const94 = new Sk.builtin.str("   Enter your item:");$scope0.$const102 = new Sk.builtin.str("2");$scope0.$const107 = new Sk.builtin.str('red');$scope0.$const109 = new Sk.builtin.str("   Invalid item selection");$scope0.$const116 = new Sk.builtin.str("   Press [Enter] to return to main menu");$scope0.$const124 = new Sk.builtin.str('green');$scope0.$const126 = new Sk.builtin.str("   ==== Select shipping ====");$scope0.$const133 = new Sk.builtin.str("   [1] Free");$scope0.$const136 = new Sk.builtin.str("   [2] Standard");$scope0.$const139 = new Sk.builtin.str("   Enter your shipping choice:");$scope0.$const152 = new Sk.builtin.str("   Invalid shipping selection");$scope0.$const162 = new Sk.builtin.str("3");$scope0.$const168 = new Sk.builtin.str("Invalid choice, try again.");$scope0.$const175 = new Sk.builtin.str("Press [Enter] to return to main menu");$scope0.$const180 = new Sk.builtin.str("Thanks for visiting our store!");
return $scope0;}();
$compiledmod;