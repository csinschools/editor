Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname4,$loadname6,$loadname9,$compareres10,$loadname13,$loadname16,$compareres17,$loadname21,$loadname24,$loadname27,$compareres28,$loadname31,$loadname32,$loadname31,$loadname32,$lattr34,$binop36,$loadname37,$loadname31,$loadname32,$lattr34,$binop36,$loadname37,$lattr39,$binop40,$loadname42,$compareres43,$loadname47,$loadname48,$loadname47,$loadname48,$lattr50,$binop52,$loadname53,$loadname47,$loadname48,$lattr50,$binop52,$loadname53,$lattr54,$binop55,$loadname57,$loadname60,$loadname63,$loadname66,$loadname69,$loadname72,$compareres73,$loadname77,$loadname78,$loadname77,$loadname78,$lattr79,$binop81,$loadname82,$loadname77,$loadname78,$lattr79,$binop81,$loadname82,$lattr83,$binop84,$loadname86,$loadname89,$loadname92,$loadname95,$compareres96,$loadname99,$compareres100,$loadname104,$loadname105,$loadname104,$loadname105,$lattr107,$binop109,$loadname110,$loadname104,$loadname105,$lattr107,$binop109,$loadname110,$lattr111,$binop112,$loadname114,$loadname117,$compareres118,$loadname121,$loadname122,$loadname121,$loadname122,$lattr123,$binop125,$loadname126,$loadname121,$loadname122,$lattr123,$binop125,$loadname126,$lattr127,$binop128,$loadname130,$loadname133,$loadname136,$loadname138,$compareres139,$loadname142,$compareres143,$loadname146,$loadname147,$loadname146,$loadname147,$lattr148,$binop149,$loadname150,$loadname146,$loadname147,$lattr148,$binop149,$loadname150,$lattr151,$binop152,$loadname154,$loadname156,$compareres157,$loadname161,$loadname162,$loadname161,$loadname162,$lattr163,$binop165,$loadname166,$loadname161,$loadname162,$lattr163,$binop165,$loadname166,$lattr167,$binop168,$loadname170,$loadname173,$loadname176,$compareres177,$loadname180,$loadname182,$loadname180,$loadname182,$lattr184,$binop185,$binop187,$loadname188,$loadname180,$loadname182,$lattr184,$binop185,$binop187,$loadname188,$lattr189,$binop190,$loadname192,$compareres193,$loadname196,$loadname197,$loadname196,$loadname197,$lattr198,$binop199,$binop201,$loadname202,$loadname196,$loadname197,$lattr198,$binop199,$binop201,$loadname202,$lattr203,$binop204,$loadname206;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname4=susp.$tmps.$loadname4;$loadname6=susp.$tmps.$loadname6;$loadname9=susp.$tmps.$loadname9;$compareres10=susp.$tmps.$compareres10;$loadname13=susp.$tmps.$loadname13;$loadname16=susp.$tmps.$loadname16;$compareres17=susp.$tmps.$compareres17;$loadname21=susp.$tmps.$loadname21;$loadname24=susp.$tmps.$loadname24;$loadname27=susp.$tmps.$loadname27;$compareres28=susp.$tmps.$compareres28;$loadname31=susp.$tmps.$loadname31;$loadname32=susp.$tmps.$loadname32;$lattr34=susp.$tmps.$lattr34;$binop36=susp.$tmps.$binop36;$loadname37=susp.$tmps.$loadname37;$lattr39=susp.$tmps.$lattr39;$binop40=susp.$tmps.$binop40;$loadname42=susp.$tmps.$loadname42;$compareres43=susp.$tmps.$compareres43;$loadname47=susp.$tmps.$loadname47;$loadname48=susp.$tmps.$loadname48;$lattr50=susp.$tmps.$lattr50;$binop52=susp.$tmps.$binop52;$loadname53=susp.$tmps.$loadname53;$lattr54=susp.$tmps.$lattr54;$binop55=susp.$tmps.$binop55;$loadname57=susp.$tmps.$loadname57;$loadname60=susp.$tmps.$loadname60;$loadname63=susp.$tmps.$loadname63;$loadname66=susp.$tmps.$loadname66;$loadname69=susp.$tmps.$loadname69;$loadname72=susp.$tmps.$loadname72;$compareres73=susp.$tmps.$compareres73;$loadname77=susp.$tmps.$loadname77;$loadname78=susp.$tmps.$loadname78;$lattr79=susp.$tmps.$lattr79;$binop81=susp.$tmps.$binop81;$loadname82=susp.$tmps.$loadname82;$lattr83=susp.$tmps.$lattr83;$binop84=susp.$tmps.$binop84;$loadname86=susp.$tmps.$loadname86;$loadname89=susp.$tmps.$loadname89;$loadname92=susp.$tmps.$loadname92;$loadname95=susp.$tmps.$loadname95;$compareres96=susp.$tmps.$compareres96;$loadname99=susp.$tmps.$loadname99;$compareres100=susp.$tmps.$compareres100;$loadname104=susp.$tmps.$loadname104;$loadname105=susp.$tmps.$loadname105;$lattr107=susp.$tmps.$lattr107;$binop109=susp.$tmps.$binop109;$loadname110=susp.$tmps.$loadname110;$lattr111=susp.$tmps.$lattr111;$binop112=susp.$tmps.$binop112;$loadname114=susp.$tmps.$loadname114;$loadname117=susp.$tmps.$loadname117;$compareres118=susp.$tmps.$compareres118;$loadname121=susp.$tmps.$loadname121;$loadname122=susp.$tmps.$loadname122;$lattr123=susp.$tmps.$lattr123;$binop125=susp.$tmps.$binop125;$loadname126=susp.$tmps.$loadname126;$lattr127=susp.$tmps.$lattr127;$binop128=susp.$tmps.$binop128;$loadname130=susp.$tmps.$loadname130;$loadname133=susp.$tmps.$loadname133;$loadname136=susp.$tmps.$loadname136;$loadname138=susp.$tmps.$loadname138;$compareres139=susp.$tmps.$compareres139;$loadname142=susp.$tmps.$loadname142;$compareres143=susp.$tmps.$compareres143;$loadname146=susp.$tmps.$loadname146;$loadname147=susp.$tmps.$loadname147;$lattr148=susp.$tmps.$lattr148;$binop149=susp.$tmps.$binop149;$loadname150=susp.$tmps.$loadname150;$lattr151=susp.$tmps.$lattr151;$binop152=susp.$tmps.$binop152;$loadname154=susp.$tmps.$loadname154;$loadname156=susp.$tmps.$loadname156;$compareres157=susp.$tmps.$compareres157;$loadname161=susp.$tmps.$loadname161;$loadname162=susp.$tmps.$loadname162;$lattr163=susp.$tmps.$lattr163;$binop165=susp.$tmps.$binop165;$loadname166=susp.$tmps.$loadname166;$lattr167=susp.$tmps.$lattr167;$binop168=susp.$tmps.$binop168;$loadname170=susp.$tmps.$loadname170;$loadname173=susp.$tmps.$loadname173;$loadname176=susp.$tmps.$loadname176;$compareres177=susp.$tmps.$compareres177;$loadname180=susp.$tmps.$loadname180;$loadname182=susp.$tmps.$loadname182;$lattr184=susp.$tmps.$lattr184;$binop185=susp.$tmps.$binop185;$binop187=susp.$tmps.$binop187;$loadname188=susp.$tmps.$loadname188;$lattr189=susp.$tmps.$lattr189;$binop190=susp.$tmps.$binop190;$loadname192=susp.$tmps.$loadname192;$compareres193=susp.$tmps.$compareres193;$loadname196=susp.$tmps.$loadname196;$loadname197=susp.$tmps.$loadname197;$lattr198=susp.$tmps.$lattr198;$binop199=susp.$tmps.$binop199;$binop201=susp.$tmps.$binop201;$loadname202=susp.$tmps.$loadname202;$lattr203=susp.$tmps.$lattr203;$binop204=susp.$tmps.$binop204;$loadname206=susp.$tmps.$loadname206;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname4":$loadname4,"$loadname6":$loadname6,"$loadname9":$loadname9,"$compareres10":$compareres10,"$loadname13":$loadname13,"$loadname16":$loadname16,"$compareres17":$compareres17,"$loadname21":$loadname21,"$loadname24":$loadname24,"$loadname27":$loadname27,"$compareres28":$compareres28,"$loadname31":$loadname31,"$loadname32":$loadname32,"$lattr34":$lattr34,"$binop36":$binop36,"$loadname37":$loadname37,"$lattr39":$lattr39,"$binop40":$binop40,"$loadname42":$loadname42,"$compareres43":$compareres43,"$loadname47":$loadname47,"$loadname48":$loadname48,"$lattr50":$lattr50,"$binop52":$binop52,"$loadname53":$loadname53,"$lattr54":$lattr54,"$binop55":$binop55,"$loadname57":$loadname57,"$loadname60":$loadname60,"$loadname63":$loadname63,"$loadname66":$loadname66,"$loadname69":$loadname69,"$loadname72":$loadname72,"$compareres73":$compareres73,"$loadname77":$loadname77,"$loadname78":$loadname78,"$lattr79":$lattr79,"$binop81":$binop81,"$loadname82":$loadname82,"$lattr83":$lattr83,"$binop84":$binop84,"$loadname86":$loadname86,"$loadname89":$loadname89,"$loadname92":$loadname92,"$loadname95":$loadname95,"$compareres96":$compareres96,"$loadname99":$loadname99,"$compareres100":$compareres100,"$loadname104":$loadname104,"$loadname105":$loadname105,"$lattr107":$lattr107,"$binop109":$binop109,"$loadname110":$loadname110,"$lattr111":$lattr111,"$binop112":$binop112,"$loadname114":$loadname114,"$loadname117":$loadname117,"$compareres118":$compareres118,"$loadname121":$loadname121,"$loadname122":$loadname122,"$lattr123":$lattr123,"$binop125":$binop125,"$loadname126":$loadname126,"$lattr127":$lattr127,"$binop128":$binop128,"$loadname130":$loadname130,"$loadname133":$loadname133,"$loadname136":$loadname136,"$loadname138":$loadname138,"$compareres139":$compareres139,"$loadname142":$loadname142,"$compareres143":$compareres143,"$loadname146":$loadname146,"$loadname147":$loadname147,"$lattr148":$lattr148,"$binop149":$binop149,"$loadname150":$loadname150,"$lattr151":$lattr151,"$binop152":$binop152,"$loadname154":$loadname154,"$loadname156":$loadname156,"$compareres157":$compareres157,"$loadname161":$loadname161,"$loadname162":$loadname162,"$lattr163":$lattr163,"$binop165":$binop165,"$loadname166":$loadname166,"$lattr167":$lattr167,"$binop168":$binop168,"$loadname170":$loadname170,"$loadname173":$loadname173,"$loadname176":$loadname176,"$compareres177":$compareres177,"$loadname180":$loadname180,"$loadname182":$loadname182,"$lattr184":$lattr184,"$binop185":$binop185,"$binop187":$binop187,"$loadname188":$loadname188,"$lattr189":$lattr189,"$binop190":$binop190,"$loadname192":$loadname192,"$compareres193":$compareres193,"$loadname196":$loadname196,"$loadname197":$loadname197,"$lattr198":$lattr198,"$binop199":$binop199,"$binop201":$binop201,"$loadname202":$loadname202,"$lattr203":$lattr203,"$binop204":$binop204,"$loadname206":$loadname206};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$ret = Sk.builtin.__import__('csinsc',$gbl,$loc,['*'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;Sk.importStar($module1,$loc, $gbl);if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 3;
$currColNo = 0;

$loc.colour=$scope0.$const2;if (Sk.breakpoints('<stdin>.py',4,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',4,0);$susp.$blk = 4;$susp.optional = true;return $susp;}$blk=4;case 4: 

$currLineNo = 4;
$currColNo = 0;

$loc.memory=$scope0.$const3;if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

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

var $loadname9=$loc.colour!==undefined?$loc.colour:Sk.misceval.loadname('colour',$gbl);;var $compareres10=null;$ret = Sk.misceval.richCompareBool($loadname9,$scope0.$const2,'Eq', true);$blk=17;case 17: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,3); }$compareres10=Sk.builtin.bool($ret);var $jfalse11=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse11){$blk=16;continue;}$blk=16;case 16: var $jfalse12=($compareres10===false||!Sk.misceval.isTrue($compareres10));if($jfalse12){$blk=15;continue;}if (Sk.breakpoints('<stdin>.py',9,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,4);$susp.$blk = 18;$susp.optional = true;return $susp;}$blk=18;case 18: 

$currLineNo = 9;
$currColNo = 4;

var $loadname13=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname13.tp$call)?$loadname13.tp$call([$scope0.$const14],undefined) : Sk.misceval.applyOrSuspend($loadname13,undefined,undefined,undefined,[$scope0.$const14]);$blk=19;case 19: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,4); }var $call15=$ret;

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

var $loadname27=$loc.memory!==undefined?$loc.memory:Sk.misceval.loadname('memory',$gbl);;var $compareres28=null;$ret = Sk.misceval.richCompareBool($loadname27,$scope0.$const3,'Eq', true);$blk=32;case 32: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,3); }$compareres28=Sk.builtin.bool($ret);var $jfalse29=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse29){$blk=31;continue;}$blk=31;case 31: var $jfalse30=($compareres28===false||!Sk.misceval.isTrue($compareres28));if($jfalse30){$blk=30;continue;}if (Sk.breakpoints('<stdin>.py',15,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,4);$susp.$blk = 33;$susp.optional = true;return $susp;}$blk=33;case 33: 

$currLineNo = 15;
$currColNo = 4;

var $loadname31=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname32=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname32.tp$getattr($scope0.$const33, true);$blk=34;case 34: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname32.sk$attrError() + " has no attribute '" + $scope0.$const33.$jsstr() + "'");
};var $lattr34=$ret;var $binop36=Sk.abstr.numberBinOp($lattr34,$scope0.$const35,'Add');var $loadname37=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname37.tp$getattr($scope0.$const38, true);$blk=35;case 35: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,37); }
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

if (Sk.breakpoints('<stdin>.py',23,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',23,0);$susp.$blk = 53;$susp.optional = true;return $susp;}$blk=53;case 53: 

$currLineNo = 23;
$currColNo = 0;

var $loadname69=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname69.tp$call)?$loadname69.tp$call([$scope0.$const70],undefined) : Sk.misceval.applyOrSuspend($loadname69,undefined,undefined,undefined,[$scope0.$const70]);$blk=54;case 54: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',23,9); }var $call71=$ret;

$currLineNo = 23;
$currColNo = 9;

$loc.choice=$call71;if (Sk.breakpoints('<stdin>.py',24,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',24,0);$susp.$blk = 55;$susp.optional = true;return $susp;}$blk=55;case 55: 

$currLineNo = 24;
$currColNo = 0;

var $loadname72=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres73=null;$ret = Sk.misceval.richCompareBool($loadname72,$scope0.$const74,'Eq', true);$blk=59;case 59: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',24,3); }$compareres73=Sk.builtin.bool($ret);var $jfalse75=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse75){$blk=58;continue;}$blk=58;case 58: var $jfalse76=($compareres73===false||!Sk.misceval.isTrue($compareres73));if($jfalse76){$blk=57;continue;}if (Sk.breakpoints('<stdin>.py',25,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',25,4);$susp.$blk = 60;$susp.optional = true;return $susp;}$blk=60;case 60: 

$currLineNo = 25;
$currColNo = 4;

var $loadname77=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname78=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname78.tp$getattr($scope0.$const49, true);$blk=61;case 61: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',25,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname78.sk$attrError() + " has no attribute '" + $scope0.$const49.$jsstr() + "'");
};var $lattr79=$ret;var $binop81=Sk.abstr.numberBinOp($lattr79,$scope0.$const80,'Add');var $loadname82=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname82.tp$getattr($scope0.$const38, true);$blk=62;case 62: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',25,58); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname82.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr83=$ret;var $binop84=Sk.abstr.numberBinOp($binop81,$lattr83,'Add');$ret = ($loadname77.tp$call)?$loadname77.tp$call([$binop84],undefined) : Sk.misceval.applyOrSuspend($loadname77,undefined,undefined,undefined,[$binop84]);$blk=63;case 63: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',25,4); }var $call85=$ret;

$currLineNo = 25;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',26,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',26,4);$susp.$blk = 64;$susp.optional = true;return $susp;}$blk=64;case 64: 

$currLineNo = 26;
$currColNo = 4;

var $loadname86=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname86.tp$call)?$loadname86.tp$call([$scope0.$const87],undefined) : Sk.misceval.applyOrSuspend($loadname86,undefined,undefined,undefined,[$scope0.$const87]);$blk=65;case 65: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',26,4); }var $call88=$ret;

$currLineNo = 26;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',27,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',27,4);$susp.$blk = 66;$susp.optional = true;return $susp;}$blk=66;case 66: 

$currLineNo = 27;
$currColNo = 4;

var $loadname89=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname89.tp$call)?$loadname89.tp$call([$scope0.$const90],undefined) : Sk.misceval.applyOrSuspend($loadname89,undefined,undefined,undefined,[$scope0.$const90]);$blk=67;case 67: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',27,4); }var $call91=$ret;

$currLineNo = 27;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',28,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',28,4);$susp.$blk = 68;$susp.optional = true;return $susp;}$blk=68;case 68: 

$currLineNo = 28;
$currColNo = 4;

var $loadname92=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname92.tp$call)?$loadname92.tp$call([$scope0.$const93],undefined) : Sk.misceval.applyOrSuspend($loadname92,undefined,undefined,undefined,[$scope0.$const93]);$blk=69;case 69: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',28,20); }var $call94=$ret;

$currLineNo = 28;
$currColNo = 20;

$loc.colour_choice=$call94;if (Sk.breakpoints('<stdin>.py',29,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',29,4);$susp.$blk = 70;$susp.optional = true;return $susp;}$blk=70;case 70: 

$currLineNo = 29;
$currColNo = 4;

var $loadname95=$loc.colour_choice!==undefined?$loc.colour_choice:Sk.misceval.loadname('colour_choice',$gbl);;var $compareres96=null;$ret = Sk.misceval.richCompareBool($loadname95,$scope0.$const74,'Eq', true);$blk=74;case 74: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',29,7); }$compareres96=Sk.builtin.bool($ret);var $jfalse97=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse97){$blk=73;continue;}$blk=73;case 73: var $jfalse98=($compareres96===false||!Sk.misceval.isTrue($compareres96));if($jfalse98){$blk=72;continue;}if (Sk.breakpoints('<stdin>.py',30,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',30,8);$susp.$blk = 75;$susp.optional = true;return $susp;}$blk=75;case 75: 

$currLineNo = 30;
$currColNo = 8;

$loc.colour=$scope0.$const2;$blk=71;case 71: $blk=56;case 56: if (Sk.breakpoints('<stdin>.py',53,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',53,0);$susp.$blk = 133;$susp.optional = true;return $susp;}$blk=133;case 133: 

$currLineNo = 53;
$currColNo = 0;

$blk=6; continue;if (Sk.breakpoints('<stdin>.py',54,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',54,0);$susp.$blk = 134;$susp.optional = true;return $susp;}$blk=134; continue;case 15: if (Sk.breakpoints('<stdin>.py',10,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,5);$susp.$blk = 20;$susp.optional = true;return $susp;}$blk=20;case 20: 

$currLineNo = 10;
$currColNo = 5;

var $loadname16=$loc.colour!==undefined?$loc.colour:Sk.misceval.loadname('colour',$gbl);;var $compareres17=null;$ret = Sk.misceval.richCompareBool($loadname16,$scope0.$const18,'Eq', true);$blk=23;case 23: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,5); }$compareres17=Sk.builtin.bool($ret);var $jfalse19=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse19){$blk=22;continue;}$blk=22;case 22: var $jfalse20=($compareres17===false||!Sk.misceval.isTrue($compareres17));if($jfalse20){$blk=21;continue;}if (Sk.breakpoints('<stdin>.py',11,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,4);$susp.$blk = 24;$susp.optional = true;return $susp;}$blk=24;case 24: 

$currLineNo = 11;
$currColNo = 4;

var $loadname21=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname21.tp$call)?$loadname21.tp$call([$scope0.$const22],undefined) : Sk.misceval.applyOrSuspend($loadname21,undefined,undefined,undefined,[$scope0.$const22]);$blk=25;case 25: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,4); }var $call23=$ret;

$currLineNo = 11;
$currColNo = 4;

$blk=21;case 21: $blk=14; continue;case 30: if (Sk.breakpoints('<stdin>.py',16,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,5);$susp.$blk = 37;$susp.optional = true;return $susp;}$blk=37;case 37: 

$currLineNo = 16;
$currColNo = 5;

var $loadname42=$loc.memory!==undefined?$loc.memory:Sk.misceval.loadname('memory',$gbl);;var $compareres43=null;$ret = Sk.misceval.richCompareBool($loadname42,$scope0.$const44,'Eq', true);$blk=40;case 40: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,5); }$compareres43=Sk.builtin.bool($ret);var $jfalse45=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse45){$blk=39;continue;}$blk=39;case 39: var $jfalse46=($compareres43===false||!Sk.misceval.isTrue($compareres43));if($jfalse46){$blk=38;continue;}if (Sk.breakpoints('<stdin>.py',17,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,4);$susp.$blk = 41;$susp.optional = true;return $susp;}$blk=41;case 41: 

$currLineNo = 17;
$currColNo = 4;

var $loadname47=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname48=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname48.tp$getattr($scope0.$const49, true);$blk=42;case 42: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname48.sk$attrError() + " has no attribute '" + $scope0.$const49.$jsstr() + "'");
};var $lattr50=$ret;var $binop52=Sk.abstr.numberBinOp($lattr50,$scope0.$const51,'Add');var $loadname53=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname53.tp$getattr($scope0.$const38, true);$blk=43;case 43: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,35); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname53.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr54=$ret;var $binop55=Sk.abstr.numberBinOp($binop52,$lattr54,'Add');$ret = ($loadname47.tp$call)?$loadname47.tp$call([$binop55],undefined) : Sk.misceval.applyOrSuspend($loadname47,undefined,undefined,undefined,[$binop55]);$blk=44;case 44: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,4); }var $call56=$ret;

$currLineNo = 17;
$currColNo = 4;

$blk=38;case 38: $blk=29; continue;case 57: if (Sk.breakpoints('<stdin>.py',36,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',36,5);$susp.$blk = 88;$susp.optional = true;return $susp;}$blk=88;case 88: 

$currLineNo = 36;
$currColNo = 5;

var $loadname117=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres118=null;$ret = Sk.misceval.richCompareBool($loadname117,$scope0.$const101,'Eq', true);$blk=92;case 92: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',36,5); }$compareres118=Sk.builtin.bool($ret);var $jfalse119=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse119){$blk=91;continue;}$blk=91;case 91: var $jfalse120=($compareres118===false||!Sk.misceval.isTrue($compareres118));if($jfalse120){$blk=90;continue;}if (Sk.breakpoints('<stdin>.py',37,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',37,4);$susp.$blk = 93;$susp.optional = true;return $susp;}$blk=93;case 93: 

$currLineNo = 37;
$currColNo = 4;

var $loadname121=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname122=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname122.tp$getattr($scope0.$const33, true);$blk=94;case 94: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',37,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname122.sk$attrError() + " has no attribute '" + $scope0.$const33.$jsstr() + "'");
};var $lattr123=$ret;var $binop125=Sk.abstr.numberBinOp($lattr123,$scope0.$const124,'Add');var $loadname126=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname126.tp$getattr($scope0.$const38, true);$blk=95;case 95: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',37,65); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname126.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr127=$ret;var $binop128=Sk.abstr.numberBinOp($binop125,$lattr127,'Add');$ret = ($loadname121.tp$call)?$loadname121.tp$call([$binop128],undefined) : Sk.misceval.applyOrSuspend($loadname121,undefined,undefined,undefined,[$binop128]);$blk=96;case 96: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',37,4); }var $call129=$ret;

$currLineNo = 37;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',38,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',38,4);$susp.$blk = 97;$susp.optional = true;return $susp;}$blk=97;case 97: 

$currLineNo = 38;
$currColNo = 4;

var $loadname130=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname130.tp$call)?$loadname130.tp$call([$scope0.$const131],undefined) : Sk.misceval.applyOrSuspend($loadname130,undefined,undefined,undefined,[$scope0.$const131]);$blk=98;case 98: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',38,4); }var $call132=$ret;

$currLineNo = 38;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',39,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',39,4);$susp.$blk = 99;$susp.optional = true;return $susp;}$blk=99;case 99: 

$currLineNo = 39;
$currColNo = 4;

var $loadname133=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname133.tp$call)?$loadname133.tp$call([$scope0.$const134],undefined) : Sk.misceval.applyOrSuspend($loadname133,undefined,undefined,undefined,[$scope0.$const134]);$blk=100;case 100: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',39,4); }var $call135=$ret;

$currLineNo = 39;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',40,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',40,4);$susp.$blk = 101;$susp.optional = true;return $susp;}$blk=101;case 101: 

$currLineNo = 40;
$currColNo = 4;

var $loadname136=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname136.tp$call)?$loadname136.tp$call([$scope0.$const93],undefined) : Sk.misceval.applyOrSuspend($loadname136,undefined,undefined,undefined,[$scope0.$const93]);$blk=102;case 102: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',40,20); }var $call137=$ret;

$currLineNo = 40;
$currColNo = 20;

$loc.memory_choice=$call137;if (Sk.breakpoints('<stdin>.py',41,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',41,4);$susp.$blk = 103;$susp.optional = true;return $susp;}$blk=103;case 103: 

$currLineNo = 41;
$currColNo = 4;

var $loadname138=$loc.memory_choice!==undefined?$loc.memory_choice:Sk.misceval.loadname('memory_choice',$gbl);;var $compareres139=null;$ret = Sk.misceval.richCompareBool($loadname138,$scope0.$const74,'Eq', true);$blk=107;case 107: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',41,7); }$compareres139=Sk.builtin.bool($ret);var $jfalse140=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse140){$blk=106;continue;}$blk=106;case 106: var $jfalse141=($compareres139===false||!Sk.misceval.isTrue($compareres139));if($jfalse141){$blk=105;continue;}if (Sk.breakpoints('<stdin>.py',42,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',42,8);$susp.$blk = 108;$susp.optional = true;return $susp;}$blk=108;case 108: 

$currLineNo = 42;
$currColNo = 8;

$loc.memory=$scope0.$const3;$blk=104;case 104: $blk=89;case 89: $blk=56; continue;case 72: if (Sk.breakpoints('<stdin>.py',31,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',31,9);$susp.$blk = 76;$susp.optional = true;return $susp;}$blk=76;case 76: 

$currLineNo = 31;
$currColNo = 9;

var $loadname99=$loc.colour_choice!==undefined?$loc.colour_choice:Sk.misceval.loadname('colour_choice',$gbl);;var $compareres100=null;$ret = Sk.misceval.richCompareBool($loadname99,$scope0.$const101,'Eq', true);$blk=80;case 80: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',31,9); }$compareres100=Sk.builtin.bool($ret);var $jfalse102=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse102){$blk=79;continue;}$blk=79;case 79: var $jfalse103=($compareres100===false||!Sk.misceval.isTrue($compareres100));if($jfalse103){$blk=78;continue;}if (Sk.breakpoints('<stdin>.py',32,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',32,8);$susp.$blk = 81;$susp.optional = true;return $susp;}$blk=81;case 81: 

$currLineNo = 32;
$currColNo = 8;

$loc.colour=$scope0.$const18;$blk=77;case 77: $blk=71; continue;case 78: if (Sk.breakpoints('<stdin>.py',34,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',34,8);$susp.$blk = 82;$susp.optional = true;return $susp;}$blk=82;case 82: 

$currLineNo = 34;
$currColNo = 8;

var $loadname104=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname105=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname105.tp$getattr($scope0.$const106, true);$blk=83;case 83: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',34,14); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname105.sk$attrError() + " has no attribute '" + $scope0.$const106.$jsstr() + "'");
};var $lattr107=$ret;var $binop109=Sk.abstr.numberBinOp($lattr107,$scope0.$const108,'Add');var $loadname110=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname110.tp$getattr($scope0.$const38, true);$blk=84;case 84: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',34,56); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname110.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr111=$ret;var $binop112=Sk.abstr.numberBinOp($binop109,$lattr111,'Add');$ret = ($loadname104.tp$call)?$loadname104.tp$call([$binop112],undefined) : Sk.misceval.applyOrSuspend($loadname104,undefined,undefined,undefined,[$binop112]);$blk=85;case 85: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',34,8); }var $call113=$ret;

$currLineNo = 34;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',35,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',35,8);$susp.$blk = 86;$susp.optional = true;return $susp;}$blk=86;case 86: 

$currLineNo = 35;
$currColNo = 8;

var $loadname114=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname114.tp$call)?$loadname114.tp$call([$scope0.$const115],undefined) : Sk.misceval.applyOrSuspend($loadname114,undefined,undefined,undefined,[$scope0.$const115]);$blk=87;case 87: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',35,8); }var $call116=$ret;

$currLineNo = 35;
$currColNo = 8;

$blk=77; continue;case 90: if (Sk.breakpoints('<stdin>.py',48,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',48,5);$susp.$blk = 121;$susp.optional = true;return $susp;}$blk=121;case 121: 

$currLineNo = 48;
$currColNo = 5;

var $loadname156=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres157=null;$ret = Sk.misceval.richCompareBool($loadname156,$scope0.$const158,'Eq', true);$blk=125;case 125: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',48,5); }$compareres157=Sk.builtin.bool($ret);var $jfalse159=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse159){$blk=124;continue;}$blk=124;case 124: var $jfalse160=($compareres157===false||!Sk.misceval.isTrue($compareres157));if($jfalse160){$blk=123;continue;}if (Sk.breakpoints('<stdin>.py',49,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',49,4);$susp.$blk = 126;$susp.optional = true;return $susp;}$blk=126;case 126: 

$currLineNo = 49;
$currColNo = 4;

$blk=135; continue;$blk=122;case 135: if (Sk.breakpoints('<stdin>.py',54,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',54,0);$susp.$blk = 136;$susp.optional = true;return $susp;}$blk=136;case 136: $blk=137;case 137: if (Sk.breakpoints('<stdin>.py',55,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',55,0);$susp.$blk = 138;$susp.optional = true;return $susp;}$blk=138;case 138: 

$currLineNo = 55;
$currColNo = 0;

var $loadname173=$loc.playFreeSoundOrg!==undefined?$loc.playFreeSoundOrg:Sk.misceval.loadname('playFreeSoundOrg',$gbl);;$ret = ($loadname173.tp$call)?$loadname173.tp$call([$scope0.$const174],undefined) : Sk.misceval.applyOrSuspend($loadname173,undefined,undefined,undefined,[$scope0.$const174]);$blk=139;case 139: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',55,0); }var $call175=$ret;

$currLineNo = 55;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',56,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',56,0);$susp.$blk = 140;$susp.optional = true;return $susp;}$blk=140;case 140: 

$currLineNo = 56;
$currColNo = 0;

var $loadname176=$loc.memory!==undefined?$loc.memory:Sk.misceval.loadname('memory',$gbl);;var $compareres177=null;$ret = Sk.misceval.richCompareBool($loadname176,$scope0.$const3,'Eq', true);$blk=144;case 144: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',56,3); }$compareres177=Sk.builtin.bool($ret);var $jfalse178=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse178){$blk=143;continue;}$blk=143;case 143: var $jfalse179=($compareres177===false||!Sk.misceval.isTrue($compareres177));if($jfalse179){$blk=142;continue;}if (Sk.breakpoints('<stdin>.py',57,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',57,4);$susp.$blk = 145;$susp.optional = true;return $susp;}$blk=145;case 145: 

$currLineNo = 57;
$currColNo = 4;

var $loadname180=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname182=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname182.tp$getattr($scope0.$const183, true);$blk=146;case 146: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',57,30); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname182.sk$attrError() + " has no attribute '" + $scope0.$const183.$jsstr() + "'");
};var $lattr184=$ret;var $binop185=Sk.abstr.numberBinOp($scope0.$const181,$lattr184,'Add');var $binop187=Sk.abstr.numberBinOp($binop185,$scope0.$const186,'Add');var $loadname188=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname188.tp$getattr($scope0.$const38, true);$blk=147;case 147: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',57,54); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname188.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr189=$ret;var $binop190=Sk.abstr.numberBinOp($binop187,$lattr189,'Add');$ret = ($loadname180.tp$call)?$loadname180.tp$call([$binop190],undefined) : Sk.misceval.applyOrSuspend($loadname180,undefined,undefined,undefined,[$binop190]);$blk=148;case 148: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',57,4); }var $call191=$ret;

$currLineNo = 57;
$currColNo = 4;

$blk=141;case 141: if (Sk.breakpoints('<stdin>.py',60,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',60,0);$susp.$blk = 157;$susp.optional = true;return $susp;}$blk=157;case 157: 

$currLineNo = 60;
$currColNo = 0;

var $loadname206=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname206.tp$call)?$loadname206.tp$call([$scope0.$const207],undefined) : Sk.misceval.applyOrSuspend($loadname206,undefined,undefined,undefined,[$scope0.$const207]);$blk=158;case 158: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',60,0); }var $call208=$ret;

$currLineNo = 60;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');case 105: if (Sk.breakpoints('<stdin>.py',43,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',43,9);$susp.$blk = 109;$susp.optional = true;return $susp;}$blk=109;case 109: 

$currLineNo = 43;
$currColNo = 9;

var $loadname142=$loc.memory_choice!==undefined?$loc.memory_choice:Sk.misceval.loadname('memory_choice',$gbl);;var $compareres143=null;$ret = Sk.misceval.richCompareBool($loadname142,$scope0.$const101,'Eq', true);$blk=113;case 113: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',43,9); }$compareres143=Sk.builtin.bool($ret);var $jfalse144=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse144){$blk=112;continue;}$blk=112;case 112: var $jfalse145=($compareres143===false||!Sk.misceval.isTrue($compareres143));if($jfalse145){$blk=111;continue;}if (Sk.breakpoints('<stdin>.py',44,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',44,8);$susp.$blk = 114;$susp.optional = true;return $susp;}$blk=114;case 114: 

$currLineNo = 44;
$currColNo = 8;

$loc.memory=$scope0.$const44;$blk=110;case 110: $blk=104; continue;case 111: if (Sk.breakpoints('<stdin>.py',46,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',46,8);$susp.$blk = 115;$susp.optional = true;return $susp;}$blk=115;case 115: 

$currLineNo = 46;
$currColNo = 8;

var $loadname146=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname147=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname147.tp$getattr($scope0.$const106, true);$blk=116;case 116: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',46,14); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname147.sk$attrError() + " has no attribute '" + $scope0.$const106.$jsstr() + "'");
};var $lattr148=$ret;var $binop149=Sk.abstr.numberBinOp($lattr148,$scope0.$const108,'Add');var $loadname150=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname150.tp$getattr($scope0.$const38, true);$blk=117;case 117: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',46,56); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname150.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr151=$ret;var $binop152=Sk.abstr.numberBinOp($binop149,$lattr151,'Add');$ret = ($loadname146.tp$call)?$loadname146.tp$call([$binop152],undefined) : Sk.misceval.applyOrSuspend($loadname146,undefined,undefined,undefined,[$binop152]);$blk=118;case 118: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',46,8); }var $call153=$ret;

$currLineNo = 46;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',47,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',47,8);$susp.$blk = 119;$susp.optional = true;return $susp;}$blk=119;case 119: 

$currLineNo = 47;
$currColNo = 8;

var $loadname154=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname154.tp$call)?$loadname154.tp$call([$scope0.$const115],undefined) : Sk.misceval.applyOrSuspend($loadname154,undefined,undefined,undefined,[$scope0.$const115]);$blk=120;case 120: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',47,8); }var $call155=$ret;

$currLineNo = 47;
$currColNo = 8;

$blk=110; continue;case 122: $blk=89; continue;case 123: if (Sk.breakpoints('<stdin>.py',51,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',51,4);$susp.$blk = 127;$susp.optional = true;return $susp;}$blk=127;case 127: 

$currLineNo = 51;
$currColNo = 4;

var $loadname161=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname162=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname162.tp$getattr($scope0.$const106, true);$blk=128;case 128: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',51,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname162.sk$attrError() + " has no attribute '" + $scope0.$const106.$jsstr() + "'");
};var $lattr163=$ret;var $binop165=Sk.abstr.numberBinOp($lattr163,$scope0.$const164,'Add');var $loadname166=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname166.tp$getattr($scope0.$const38, true);$blk=129;case 129: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',51,49); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname166.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr167=$ret;var $binop168=Sk.abstr.numberBinOp($binop165,$lattr167,'Add');$ret = ($loadname161.tp$call)?$loadname161.tp$call([$binop168],undefined) : Sk.misceval.applyOrSuspend($loadname161,undefined,undefined,undefined,[$binop168]);$blk=130;case 130: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',51,4); }var $call169=$ret;

$currLineNo = 51;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',52,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',52,4);$susp.$blk = 131;$susp.optional = true;return $susp;}$blk=131;case 131: 

$currLineNo = 52;
$currColNo = 4;

var $loadname170=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname170.tp$call)?$loadname170.tp$call([$scope0.$const171],undefined) : Sk.misceval.applyOrSuspend($loadname170,undefined,undefined,undefined,[$scope0.$const171]);$blk=132;case 132: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',52,4); }var $call172=$ret;

$currLineNo = 52;
$currColNo = 4;

$blk=122; continue;case 134: 

$currLineNo = 54;
$currColNo = 0;

$blk=135; continue;case 142: if (Sk.breakpoints('<stdin>.py',58,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',58,5);$susp.$blk = 149;$susp.optional = true;return $susp;}$blk=149;case 149: 

$currLineNo = 58;
$currColNo = 5;

var $loadname192=$loc.memory!==undefined?$loc.memory:Sk.misceval.loadname('memory',$gbl);;var $compareres193=null;$ret = Sk.misceval.richCompareBool($loadname192,$scope0.$const44,'Eq', true);$blk=152;case 152: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',58,5); }$compareres193=Sk.builtin.bool($ret);var $jfalse194=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse194){$blk=151;continue;}$blk=151;case 151: var $jfalse195=($compareres193===false||!Sk.misceval.isTrue($compareres193));if($jfalse195){$blk=150;continue;}if (Sk.breakpoints('<stdin>.py',59,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',59,4);$susp.$blk = 153;$susp.optional = true;return $susp;}$blk=153;case 153: 

$currLineNo = 59;
$currColNo = 4;

var $loadname196=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname197=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname197.tp$getattr($scope0.$const183, true);$blk=154;case 154: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',59,30); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname197.sk$attrError() + " has no attribute '" + $scope0.$const183.$jsstr() + "'");
};var $lattr198=$ret;var $binop199=Sk.abstr.numberBinOp($scope0.$const181,$lattr198,'Add');var $binop201=Sk.abstr.numberBinOp($binop199,$scope0.$const200,'Add');var $loadname202=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname202.tp$getattr($scope0.$const38, true);$blk=155;case 155: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',59,55); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname202.sk$attrError() + " has no attribute '" + $scope0.$const38.$jsstr() + "'");
};var $lattr203=$ret;var $binop204=Sk.abstr.numberBinOp($binop201,$lattr203,'Add');$ret = ($loadname196.tp$call)?$loadname196.tp$call([$binop204],undefined) : Sk.misceval.applyOrSuspend($loadname196,undefined,undefined,undefined,[$binop204]);$blk=156;case 156: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',59,4); }var $call205=$ret;

$currLineNo = 59;
$currColNo = 4;

$blk=150;case 150: $blk=141; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const2 = new Sk.builtin.str("colour_white");$scope0.$const3 = new Sk.builtin.str("memory_256");$scope0.$const7 = new Sk.builtin.str("Your tablet choice:");$scope0.$const14 = new Sk.builtin.str("samples/images/tablet_white.png");$scope0.$const18 = new Sk.builtin.str("colour_gold");$scope0.$const22 = new Sk.builtin.str("samples/images/tablet_gold.png");$scope0.$const25 = new Sk.builtin.str("Memory size:");$scope0.$const33 = new Sk.builtin.str('yellow');$scope0.$const35 = new Sk.builtin.str("256 GB");$scope0.$const38 = new Sk.builtin.str('reset');$scope0.$const44 = new Sk.builtin.str("memory_512");$scope0.$const49 = new Sk.builtin.str('cyan');$scope0.$const51 = new Sk.builtin.str("512 GB");$scope0.$const58 = new Sk.builtin.str("=== Tablet design menu ===");$scope0.$const61 = new Sk.builtin.str("[1] Select Colour");$scope0.$const64 = new Sk.builtin.str("[2] Select Memory Size");$scope0.$const67 = new Sk.builtin.str("[3] Finalise and get quote");$scope0.$const70 = new Sk.builtin.str("Enter your choice:");$scope0.$const74 = new Sk.builtin.str("1");$scope0.$const80 = new Sk.builtin.str("   === Choose your colour ===");$scope0.$const87 = new Sk.builtin.str("   [1] White");$scope0.$const90 = new Sk.builtin.str("   [2] Gold");$scope0.$const93 = new Sk.builtin.str("   Enter your choice:");$scope0.$const101 = new Sk.builtin.str("2");$scope0.$const106 = new Sk.builtin.str('red');$scope0.$const108 = new Sk.builtin.str("   Sorry, invalid option");$scope0.$const115 = new Sk.builtin.str("   Press [Enter] to return to the main menu");$scope0.$const124 = new Sk.builtin.str("   === Choose your memory size ===");$scope0.$const131 = new Sk.builtin.str("   [1] 256 GB");$scope0.$const134 = new Sk.builtin.str("   [2] 512 GB");$scope0.$const158 = new Sk.builtin.str("3");$scope0.$const164 = new Sk.builtin.str("Sorry, invalid option");$scope0.$const171 = new Sk.builtin.str("Press [Enter] to return to the main menu");$scope0.$const174 = new Sk.builtin.int_(47962);$scope0.$const181 = new Sk.builtin.str("Your quote is: ");$scope0.$const183 = new Sk.builtin.str('green');$scope0.$const186 = new Sk.builtin.str("$700");$scope0.$const200 = new Sk.builtin.str("$1000");$scope0.$const207 = new Sk.builtin.str("Press [Enter] to exit");
return $scope0;}();
$compiledmod;