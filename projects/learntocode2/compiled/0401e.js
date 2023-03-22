Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname2,$loadname4,$loadname7,$loadname11,$loadname14,$loadname17,$loadname20,$loadname23,$compareres24,$loadname28,$loadname29,$loadname28,$loadname29,$lattr31,$binop33,$loadname34,$loadname28,$loadname29,$lattr31,$binop33,$loadname34,$lattr36,$binop37,$loadname39,$loadname42,$loadname45,$loadname47,$loadname45,$loadname47,$lattr49,$binop50,$loadname52,$loadname55,$compareres56,$loadname59,$loadname62,$compareres63,$loadname67,$loadname70,$compareres71,$loadname75,$loadname78,$compareres79,$loadname82,$loadname83,$loadname82,$loadname83,$lattr84,$binop86,$loadname87,$loadname82,$loadname83,$lattr84,$binop86,$loadname87,$lattr88,$binop89,$loadname91,$loadname94,$loadname97,$loadname99,$loadname97,$loadname99,$lattr100,$binop101,$loadname103,$loadname106,$compareres107,$loadname110,$loadname113,$compareres114,$loadname117,$loadname120,$compareres121,$loadname124,$loadname127,$compareres128,$loadname131,$loadname134;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname2=susp.$tmps.$loadname2;$loadname4=susp.$tmps.$loadname4;$loadname7=susp.$tmps.$loadname7;$loadname11=susp.$tmps.$loadname11;$loadname14=susp.$tmps.$loadname14;$loadname17=susp.$tmps.$loadname17;$loadname20=susp.$tmps.$loadname20;$loadname23=susp.$tmps.$loadname23;$compareres24=susp.$tmps.$compareres24;$loadname28=susp.$tmps.$loadname28;$loadname29=susp.$tmps.$loadname29;$lattr31=susp.$tmps.$lattr31;$binop33=susp.$tmps.$binop33;$loadname34=susp.$tmps.$loadname34;$lattr36=susp.$tmps.$lattr36;$binop37=susp.$tmps.$binop37;$loadname39=susp.$tmps.$loadname39;$loadname42=susp.$tmps.$loadname42;$loadname45=susp.$tmps.$loadname45;$loadname47=susp.$tmps.$loadname47;$lattr49=susp.$tmps.$lattr49;$binop50=susp.$tmps.$binop50;$loadname52=susp.$tmps.$loadname52;$loadname55=susp.$tmps.$loadname55;$compareres56=susp.$tmps.$compareres56;$loadname59=susp.$tmps.$loadname59;$loadname62=susp.$tmps.$loadname62;$compareres63=susp.$tmps.$compareres63;$loadname67=susp.$tmps.$loadname67;$loadname70=susp.$tmps.$loadname70;$compareres71=susp.$tmps.$compareres71;$loadname75=susp.$tmps.$loadname75;$loadname78=susp.$tmps.$loadname78;$compareres79=susp.$tmps.$compareres79;$loadname82=susp.$tmps.$loadname82;$loadname83=susp.$tmps.$loadname83;$lattr84=susp.$tmps.$lattr84;$binop86=susp.$tmps.$binop86;$loadname87=susp.$tmps.$loadname87;$lattr88=susp.$tmps.$lattr88;$binop89=susp.$tmps.$binop89;$loadname91=susp.$tmps.$loadname91;$loadname94=susp.$tmps.$loadname94;$loadname97=susp.$tmps.$loadname97;$loadname99=susp.$tmps.$loadname99;$lattr100=susp.$tmps.$lattr100;$binop101=susp.$tmps.$binop101;$loadname103=susp.$tmps.$loadname103;$loadname106=susp.$tmps.$loadname106;$compareres107=susp.$tmps.$compareres107;$loadname110=susp.$tmps.$loadname110;$loadname113=susp.$tmps.$loadname113;$compareres114=susp.$tmps.$compareres114;$loadname117=susp.$tmps.$loadname117;$loadname120=susp.$tmps.$loadname120;$compareres121=susp.$tmps.$compareres121;$loadname124=susp.$tmps.$loadname124;$loadname127=susp.$tmps.$loadname127;$compareres128=susp.$tmps.$compareres128;$loadname131=susp.$tmps.$loadname131;$loadname134=susp.$tmps.$loadname134;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname2":$loadname2,"$loadname4":$loadname4,"$loadname7":$loadname7,"$loadname11":$loadname11,"$loadname14":$loadname14,"$loadname17":$loadname17,"$loadname20":$loadname20,"$loadname23":$loadname23,"$compareres24":$compareres24,"$loadname28":$loadname28,"$loadname29":$loadname29,"$lattr31":$lattr31,"$binop33":$binop33,"$loadname34":$loadname34,"$lattr36":$lattr36,"$binop37":$binop37,"$loadname39":$loadname39,"$loadname42":$loadname42,"$loadname45":$loadname45,"$loadname47":$loadname47,"$lattr49":$lattr49,"$binop50":$binop50,"$loadname52":$loadname52,"$loadname55":$loadname55,"$compareres56":$compareres56,"$loadname59":$loadname59,"$loadname62":$loadname62,"$compareres63":$compareres63,"$loadname67":$loadname67,"$loadname70":$loadname70,"$compareres71":$compareres71,"$loadname75":$loadname75,"$loadname78":$loadname78,"$compareres79":$compareres79,"$loadname82":$loadname82,"$loadname83":$loadname83,"$lattr84":$lattr84,"$binop86":$binop86,"$loadname87":$loadname87,"$lattr88":$lattr88,"$binop89":$binop89,"$loadname91":$loadname91,"$loadname94":$loadname94,"$loadname97":$loadname97,"$loadname99":$loadname99,"$lattr100":$lattr100,"$binop101":$binop101,"$loadname103":$loadname103,"$loadname106":$loadname106,"$compareres107":$compareres107,"$loadname110":$loadname110,"$loadname113":$loadname113,"$compareres114":$compareres114,"$loadname117":$loadname117,"$loadname120":$loadname120,"$compareres121":$compareres121,"$loadname124":$loadname124,"$loadname127":$loadname127,"$compareres128":$compareres128,"$loadname131":$loadname131,"$loadname134":$loadname134};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$ret = Sk.builtin.__import__('csinsc',$gbl,$loc,['*'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;Sk.importStar($module1,$loc, $gbl);if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 3;
$currColNo = 0;

$blk=4;case 4: if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: $blk=6;case 6: if (Sk.breakpoints('<stdin>.py',4,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',4,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 4;
$currColNo = 0;

var $loadname2=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname2.tp$call)?$loadname2.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname2,undefined,undefined,undefined,[]);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',4,0); }var $call3=$ret;

$currLineNo = 4;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 5;
$currColNo = 0;

var $loadname4=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname4.tp$call)?$loadname4.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname4,undefined,undefined,undefined,[$scope0.$const5]);$blk=10;case 10: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,0); }var $call6=$ret;

$currLineNo = 5;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 11;$susp.optional = true;return $susp;}$blk=11;case 11: 

$currLineNo = 6;
$currColNo = 0;

var $loadname7=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname7.tp$call)?$loadname7.tp$call([$scope0.$const8,$scope0.$const9,$scope0.$const9],undefined) : Sk.misceval.applyOrSuspend($loadname7,undefined,undefined,undefined,[$scope0.$const8,$scope0.$const9,$scope0.$const9]);$blk=12;case 12: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,0); }var $call10=$ret;

$currLineNo = 6;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 13;$susp.optional = true;return $susp;}$blk=13;case 13: 

$currLineNo = 7;
$currColNo = 0;

var $loadname11=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname11.tp$call)?$loadname11.tp$call([$scope0.$const12],undefined) : Sk.misceval.applyOrSuspend($loadname11,undefined,undefined,undefined,[$scope0.$const12]);$blk=14;case 14: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,0); }var $call13=$ret;

$currLineNo = 7;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',8,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,0);$susp.$blk = 15;$susp.optional = true;return $susp;}$blk=15;case 15: 

$currLineNo = 8;
$currColNo = 0;

var $loadname14=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname14.tp$call)?$loadname14.tp$call([$scope0.$const15],undefined) : Sk.misceval.applyOrSuspend($loadname14,undefined,undefined,undefined,[$scope0.$const15]);$blk=16;case 16: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,0); }var $call16=$ret;

$currLineNo = 8;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',9,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,0);$susp.$blk = 17;$susp.optional = true;return $susp;}$blk=17;case 17: 

$currLineNo = 9;
$currColNo = 0;

var $loadname17=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname17.tp$call)?$loadname17.tp$call([$scope0.$const18],undefined) : Sk.misceval.applyOrSuspend($loadname17,undefined,undefined,undefined,[$scope0.$const18]);$blk=18;case 18: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,0); }var $call19=$ret;

$currLineNo = 9;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',11,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,0);$susp.$blk = 19;$susp.optional = true;return $susp;}$blk=19;case 19: 

$currLineNo = 11;
$currColNo = 0;

var $loadname20=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname20.tp$call)?$loadname20.tp$call([$scope0.$const21],undefined) : Sk.misceval.applyOrSuspend($loadname20,undefined,undefined,undefined,[$scope0.$const21]);$blk=20;case 20: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,9); }var $call22=$ret;

$currLineNo = 11;
$currColNo = 9;

$loc.choice=$call22;if (Sk.breakpoints('<stdin>.py',12,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,0);$susp.$blk = 21;$susp.optional = true;return $susp;}$blk=21;case 21: 

$currLineNo = 12;
$currColNo = 0;

var $loadname23=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres24=null;$ret = Sk.misceval.richCompareBool($loadname23,$scope0.$const25,'Eq', true);$blk=25;case 25: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,3); }$compareres24=Sk.builtin.bool($ret);var $jfalse26=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse26){$blk=24;continue;}$blk=24;case 24: var $jfalse27=($compareres24===false||!Sk.misceval.isTrue($compareres24));if($jfalse27){$blk=23;continue;}if (Sk.breakpoints('<stdin>.py',13,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,4);$susp.$blk = 26;$susp.optional = true;return $susp;}$blk=26;case 26: 

$currLineNo = 13;
$currColNo = 4;

var $loadname28=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname29=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname29.tp$getattr($scope0.$const30, true);$blk=27;case 27: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname29.sk$attrError() + " has no attribute '" + $scope0.$const30.$jsstr() + "'");
};var $lattr31=$ret;var $binop33=Sk.abstr.numberBinOp($lattr31,$scope0.$const32,'Add');var $loadname34=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname34.tp$getattr($scope0.$const35, true);$blk=28;case 28: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,40); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname34.sk$attrError() + " has no attribute '" + $scope0.$const35.$jsstr() + "'");
};var $lattr36=$ret;var $binop37=Sk.abstr.numberBinOp($binop33,$lattr36,'Add');$ret = ($loadname28.tp$call)?$loadname28.tp$call([$binop37],undefined) : Sk.misceval.applyOrSuspend($loadname28,undefined,undefined,undefined,[$binop37]);$blk=29;case 29: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,4); }var $call38=$ret;

$currLineNo = 13;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',14,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,4);$susp.$blk = 30;$susp.optional = true;return $susp;}$blk=30;case 30: 

$currLineNo = 14;
$currColNo = 4;

var $loadname39=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname39.tp$call)?$loadname39.tp$call([$scope0.$const40],undefined) : Sk.misceval.applyOrSuspend($loadname39,undefined,undefined,undefined,[$scope0.$const40]);$blk=31;case 31: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,4); }var $call41=$ret;

$currLineNo = 14;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',15,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,4);$susp.$blk = 32;$susp.optional = true;return $susp;}$blk=32;case 32: 

$currLineNo = 15;
$currColNo = 4;

var $loadname42=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname42.tp$call)?$loadname42.tp$call([$scope0.$const43],undefined) : Sk.misceval.applyOrSuspend($loadname42,undefined,undefined,undefined,[$scope0.$const43]);$blk=33;case 33: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,4); }var $call44=$ret;

$currLineNo = 15;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',16,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,4);$susp.$blk = 34;$susp.optional = true;return $susp;}$blk=34;case 34: 

$currLineNo = 16;
$currColNo = 4;

var $loadname45=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname47=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname47.tp$getattr($scope0.$const48, true);$blk=35;case 35: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,29); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname47.sk$attrError() + " has no attribute '" + $scope0.$const48.$jsstr() + "'");
};var $lattr49=$ret;var $binop50=Sk.abstr.numberBinOp($scope0.$const46,$lattr49,'Add');$ret = ($loadname45.tp$call)?$loadname45.tp$call([$binop50],undefined) : Sk.misceval.applyOrSuspend($loadname45,undefined,undefined,undefined,[$binop50]);$blk=36;case 36: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,4); }var $call51=$ret;

$currLineNo = 16;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',18,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',18,4);$susp.$blk = 37;$susp.optional = true;return $susp;}$blk=37;case 37: 

$currLineNo = 18;
$currColNo = 4;

var $loadname52=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname52.tp$call)?$loadname52.tp$call([$scope0.$const53],undefined) : Sk.misceval.applyOrSuspend($loadname52,undefined,undefined,undefined,[$scope0.$const53]);$blk=38;case 38: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',18,11); }var $call54=$ret;

$currLineNo = 18;
$currColNo = 11;

$loc.song=$call54;if (Sk.breakpoints('<stdin>.py',19,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',19,4);$susp.$blk = 39;$susp.optional = true;return $susp;}$blk=39;case 39: 

$currLineNo = 19;
$currColNo = 4;

var $loadname55=$loc.song!==undefined?$loc.song:Sk.misceval.loadname('song',$gbl);;var $compareres56=null;$ret = Sk.misceval.richCompareBool($loadname55,$scope0.$const25,'Eq', true);$blk=43;case 43: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',19,7); }$compareres56=Sk.builtin.bool($ret);var $jfalse57=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse57){$blk=42;continue;}$blk=42;case 42: var $jfalse58=($compareres56===false||!Sk.misceval.isTrue($compareres56));if($jfalse58){$blk=41;continue;}if (Sk.breakpoints('<stdin>.py',20,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,8);$susp.$blk = 44;$susp.optional = true;return $susp;}$blk=44;case 44: 

$currLineNo = 20;
$currColNo = 8;

var $loadname59=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname59.tp$call)?$loadname59.tp$call([$scope0.$const60],undefined) : Sk.misceval.applyOrSuspend($loadname59,undefined,undefined,undefined,[$scope0.$const60]);$blk=45;case 45: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,8); }var $call61=$ret;

$currLineNo = 20;
$currColNo = 8;

$blk=40;case 40: $blk=22;case 22: if (Sk.breakpoints('<stdin>.py',41,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',41,0);$susp.$blk = 102;$susp.optional = true;return $susp;}$blk=102;case 102: 

$currLineNo = 41;
$currColNo = 0;

var $loadname131=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname131.tp$call)?$loadname131.tp$call([$scope0.$const132],undefined) : Sk.misceval.applyOrSuspend($loadname131,undefined,undefined,undefined,[$scope0.$const132]);$blk=103;case 103: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',41,0); }var $call133=$ret;

$currLineNo = 41;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',42,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',42,0);$susp.$blk = 104;$susp.optional = true;return $susp;}$blk=104;case 104: 

$currLineNo = 42;
$currColNo = 0;

$blk=4; continue;if (Sk.breakpoints('<stdin>.py',44,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',44,0);$susp.$blk = 105;$susp.optional = true;return $susp;}$blk=105; continue;case 23: if (Sk.breakpoints('<stdin>.py',25,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',25,5);$susp.$blk = 59;$susp.optional = true;return $susp;}$blk=59;case 59: 

$currLineNo = 25;
$currColNo = 5;

var $loadname78=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres79=null;$ret = Sk.misceval.richCompareBool($loadname78,$scope0.$const64,'Eq', true);$blk=63;case 63: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',25,5); }$compareres79=Sk.builtin.bool($ret);var $jfalse80=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse80){$blk=62;continue;}$blk=62;case 62: var $jfalse81=($compareres79===false||!Sk.misceval.isTrue($compareres79));if($jfalse81){$blk=61;continue;}if (Sk.breakpoints('<stdin>.py',26,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',26,4);$susp.$blk = 64;$susp.optional = true;return $susp;}$blk=64;case 64: 

$currLineNo = 26;
$currColNo = 4;

var $loadname82=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname83=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname83.tp$getattr($scope0.$const30, true);$blk=65;case 65: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',26,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname83.sk$attrError() + " has no attribute '" + $scope0.$const30.$jsstr() + "'");
};var $lattr84=$ret;var $binop86=Sk.abstr.numberBinOp($lattr84,$scope0.$const85,'Add');var $loadname87=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname87.tp$getattr($scope0.$const35, true);$blk=66;case 66: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',26,48); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname87.sk$attrError() + " has no attribute '" + $scope0.$const35.$jsstr() + "'");
};var $lattr88=$ret;var $binop89=Sk.abstr.numberBinOp($binop86,$lattr88,'Add');$ret = ($loadname82.tp$call)?$loadname82.tp$call([$binop89],undefined) : Sk.misceval.applyOrSuspend($loadname82,undefined,undefined,undefined,[$binop89]);$blk=67;case 67: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',26,4); }var $call90=$ret;

$currLineNo = 26;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',27,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',27,4);$susp.$blk = 68;$susp.optional = true;return $susp;}$blk=68;case 68: 

$currLineNo = 27;
$currColNo = 4;

var $loadname91=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname91.tp$call)?$loadname91.tp$call([$scope0.$const92],undefined) : Sk.misceval.applyOrSuspend($loadname91,undefined,undefined,undefined,[$scope0.$const92]);$blk=69;case 69: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',27,4); }var $call93=$ret;

$currLineNo = 27;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',28,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',28,4);$susp.$blk = 70;$susp.optional = true;return $susp;}$blk=70;case 70: 

$currLineNo = 28;
$currColNo = 4;

var $loadname94=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname94.tp$call)?$loadname94.tp$call([$scope0.$const95],undefined) : Sk.misceval.applyOrSuspend($loadname94,undefined,undefined,undefined,[$scope0.$const95]);$blk=71;case 71: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',28,4); }var $call96=$ret;

$currLineNo = 28;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',29,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',29,4);$susp.$blk = 72;$susp.optional = true;return $susp;}$blk=72;case 72: 

$currLineNo = 29;
$currColNo = 4;

var $loadname97=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname99=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname99.tp$getattr($scope0.$const48, true);$blk=73;case 73: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',29,26); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname99.sk$attrError() + " has no attribute '" + $scope0.$const48.$jsstr() + "'");
};var $lattr100=$ret;var $binop101=Sk.abstr.numberBinOp($scope0.$const98,$lattr100,'Add');$ret = ($loadname97.tp$call)?$loadname97.tp$call([$binop101],undefined) : Sk.misceval.applyOrSuspend($loadname97,undefined,undefined,undefined,[$binop101]);$blk=74;case 74: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',29,4); }var $call102=$ret;

$currLineNo = 29;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',31,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',31,4);$susp.$blk = 75;$susp.optional = true;return $susp;}$blk=75;case 75: 

$currLineNo = 31;
$currColNo = 4;

var $loadname103=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname103.tp$call)?$loadname103.tp$call([$scope0.$const104],undefined) : Sk.misceval.applyOrSuspend($loadname103,undefined,undefined,undefined,[$scope0.$const104]);$blk=76;case 76: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',31,11); }var $call105=$ret;

$currLineNo = 31;
$currColNo = 11;

$loc.song=$call105;if (Sk.breakpoints('<stdin>.py',32,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',32,4);$susp.$blk = 77;$susp.optional = true;return $susp;}$blk=77;case 77: 

$currLineNo = 32;
$currColNo = 4;

var $loadname106=$loc.song!==undefined?$loc.song:Sk.misceval.loadname('song',$gbl);;var $compareres107=null;$ret = Sk.misceval.richCompareBool($loadname106,$scope0.$const25,'Eq', true);$blk=81;case 81: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',32,7); }$compareres107=Sk.builtin.bool($ret);var $jfalse108=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse108){$blk=80;continue;}$blk=80;case 80: var $jfalse109=($compareres107===false||!Sk.misceval.isTrue($compareres107));if($jfalse109){$blk=79;continue;}if (Sk.breakpoints('<stdin>.py',33,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',33,8);$susp.$blk = 82;$susp.optional = true;return $susp;}$blk=82;case 82: 

$currLineNo = 33;
$currColNo = 8;

var $loadname110=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname110.tp$call)?$loadname110.tp$call([$scope0.$const111],undefined) : Sk.misceval.applyOrSuspend($loadname110,undefined,undefined,undefined,[$scope0.$const111]);$blk=83;case 83: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',33,8); }var $call112=$ret;

$currLineNo = 33;
$currColNo = 8;

$blk=78;case 78: $blk=60;case 60: $blk=22; continue;case 41: if (Sk.breakpoints('<stdin>.py',21,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',21,9);$susp.$blk = 46;$susp.optional = true;return $susp;}$blk=46;case 46: 

$currLineNo = 21;
$currColNo = 9;

var $loadname62=$loc.song!==undefined?$loc.song:Sk.misceval.loadname('song',$gbl);;var $compareres63=null;$ret = Sk.misceval.richCompareBool($loadname62,$scope0.$const64,'Eq', true);$blk=50;case 50: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,9); }$compareres63=Sk.builtin.bool($ret);var $jfalse65=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse65){$blk=49;continue;}$blk=49;case 49: var $jfalse66=($compareres63===false||!Sk.misceval.isTrue($compareres63));if($jfalse66){$blk=48;continue;}if (Sk.breakpoints('<stdin>.py',22,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',22,8);$susp.$blk = 51;$susp.optional = true;return $susp;}$blk=51;case 51: 

$currLineNo = 22;
$currColNo = 8;

var $loadname67=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname67.tp$call)?$loadname67.tp$call([$scope0.$const68],undefined) : Sk.misceval.applyOrSuspend($loadname67,undefined,undefined,undefined,[$scope0.$const68]);$blk=52;case 52: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',22,8); }var $call69=$ret;

$currLineNo = 22;
$currColNo = 8;

$blk=47;case 47: $blk=40; continue;case 48: if (Sk.breakpoints('<stdin>.py',23,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',23,9);$susp.$blk = 53;$susp.optional = true;return $susp;}$blk=53;case 53: 

$currLineNo = 23;
$currColNo = 9;

var $loadname70=$loc.song!==undefined?$loc.song:Sk.misceval.loadname('song',$gbl);;var $compareres71=null;$ret = Sk.misceval.richCompareBool($loadname70,$scope0.$const72,'Eq', true);$blk=56;case 56: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',23,9); }$compareres71=Sk.builtin.bool($ret);var $jfalse73=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse73){$blk=55;continue;}$blk=55;case 55: var $jfalse74=($compareres71===false||!Sk.misceval.isTrue($compareres71));if($jfalse74){$blk=54;continue;}if (Sk.breakpoints('<stdin>.py',24,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',24,8);$susp.$blk = 57;$susp.optional = true;return $susp;}$blk=57;case 57: 

$currLineNo = 24;
$currColNo = 8;

var $loadname75=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname75.tp$call)?$loadname75.tp$call([$scope0.$const76],undefined) : Sk.misceval.applyOrSuspend($loadname75,undefined,undefined,undefined,[$scope0.$const76]);$blk=58;case 58: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',24,8); }var $call77=$ret;

$currLineNo = 24;
$currColNo = 8;

$blk=54;case 54: $blk=47; continue;case 61: if (Sk.breakpoints('<stdin>.py',38,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',38,5);$susp.$blk = 97;$susp.optional = true;return $susp;}$blk=97;case 97: 

$currLineNo = 38;
$currColNo = 5;

var $loadname127=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres128=null;$ret = Sk.misceval.richCompareBool($loadname127,$scope0.$const72,'Eq', true);$blk=100;case 100: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',38,5); }$compareres128=Sk.builtin.bool($ret);var $jfalse129=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse129){$blk=99;continue;}$blk=99;case 99: var $jfalse130=($compareres128===false||!Sk.misceval.isTrue($compareres128));if($jfalse130){$blk=98;continue;}if (Sk.breakpoints('<stdin>.py',39,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',39,4);$susp.$blk = 101;$susp.optional = true;return $susp;}$blk=101;case 101: 

$currLineNo = 39;
$currColNo = 4;

$blk=106; continue;$blk=98;case 106: if (Sk.breakpoints('<stdin>.py',44,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',44,0);$susp.$blk = 107;$susp.optional = true;return $susp;}$blk=107;case 107: $blk=108;case 108: if (Sk.breakpoints('<stdin>.py',45,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',45,0);$susp.$blk = 109;$susp.optional = true;return $susp;}$blk=109;case 109: 

$currLineNo = 45;
$currColNo = 0;

var $loadname134=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname134.tp$call)?$loadname134.tp$call([$scope0.$const135],undefined) : Sk.misceval.applyOrSuspend($loadname134,undefined,undefined,undefined,[$scope0.$const135]);$blk=110;case 110: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',45,0); }var $call136=$ret;

$currLineNo = 45;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');case 79: if (Sk.breakpoints('<stdin>.py',34,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',34,9);$susp.$blk = 84;$susp.optional = true;return $susp;}$blk=84;case 84: 

$currLineNo = 34;
$currColNo = 9;

var $loadname113=$loc.song!==undefined?$loc.song:Sk.misceval.loadname('song',$gbl);;var $compareres114=null;$ret = Sk.misceval.richCompareBool($loadname113,$scope0.$const64,'Eq', true);$blk=88;case 88: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',34,9); }$compareres114=Sk.builtin.bool($ret);var $jfalse115=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse115){$blk=87;continue;}$blk=87;case 87: var $jfalse116=($compareres114===false||!Sk.misceval.isTrue($compareres114));if($jfalse116){$blk=86;continue;}if (Sk.breakpoints('<stdin>.py',35,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',35,8);$susp.$blk = 89;$susp.optional = true;return $susp;}$blk=89;case 89: 

$currLineNo = 35;
$currColNo = 8;

var $loadname117=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname117.tp$call)?$loadname117.tp$call([$scope0.$const118],undefined) : Sk.misceval.applyOrSuspend($loadname117,undefined,undefined,undefined,[$scope0.$const118]);$blk=90;case 90: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',35,8); }var $call119=$ret;

$currLineNo = 35;
$currColNo = 8;

$blk=85;case 85: $blk=78; continue;case 86: if (Sk.breakpoints('<stdin>.py',36,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',36,9);$susp.$blk = 91;$susp.optional = true;return $susp;}$blk=91;case 91: 

$currLineNo = 36;
$currColNo = 9;

var $loadname120=$loc.song!==undefined?$loc.song:Sk.misceval.loadname('song',$gbl);;var $compareres121=null;$ret = Sk.misceval.richCompareBool($loadname120,$scope0.$const72,'Eq', true);$blk=94;case 94: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',36,9); }$compareres121=Sk.builtin.bool($ret);var $jfalse122=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse122){$blk=93;continue;}$blk=93;case 93: var $jfalse123=($compareres121===false||!Sk.misceval.isTrue($compareres121));if($jfalse123){$blk=92;continue;}if (Sk.breakpoints('<stdin>.py',37,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',37,8);$susp.$blk = 95;$susp.optional = true;return $susp;}$blk=95;case 95: 

$currLineNo = 37;
$currColNo = 8;

var $loadname124=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname124.tp$call)?$loadname124.tp$call([$scope0.$const125],undefined) : Sk.misceval.applyOrSuspend($loadname124,undefined,undefined,undefined,[$scope0.$const125]);$blk=96;case 96: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',37,8); }var $call126=$ret;

$currLineNo = 37;
$currColNo = 8;

$blk=92;case 92: $blk=85; continue;case 98: $blk=60; continue;case 105: 

$currLineNo = 44;
$currColNo = 0;

$blk=106; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const5 = new Sk.builtin.str(">>>> Jukebox <<<<");$scope0.$const8 = new Sk.builtin.str("https://cdn-icons-png.flaticon.com/512/5805/5805239.png");$scope0.$const9 = new Sk.builtin.int_(100);$scope0.$const12 = new Sk.builtin.str("[a] Play Music");$scope0.$const15 = new Sk.builtin.str("[b] Play Sound effect");$scope0.$const18 = new Sk.builtin.str("[c] Quit");$scope0.$const21 = new Sk.builtin.str("Enter your choice:");$scope0.$const25 = new Sk.builtin.str("a");$scope0.$const30 = new Sk.builtin.str('purple');$scope0.$const32 = new Sk.builtin.str("Song Menu");$scope0.$const35 = new Sk.builtin.str('cyan');$scope0.$const40 = new Sk.builtin.str("[a] Myth");$scope0.$const43 = new Sk.builtin.str("[b] Cybernoid II");$scope0.$const46 = new Sk.builtin.str("[c] Golden Axe");$scope0.$const48 = new Sk.builtin.str('reset');$scope0.$const53 = new Sk.builtin.str("Enter your song choice:");$scope0.$const60 = new Sk.builtin.str("Now playing Myth");$scope0.$const64 = new Sk.builtin.str("b");$scope0.$const68 = new Sk.builtin.str("Now playing Cybernoid II");$scope0.$const72 = new Sk.builtin.str("c");$scope0.$const76 = new Sk.builtin.str("Golden Axe");$scope0.$const85 = new Sk.builtin.str("Sound Effect Menu");$scope0.$const92 = new Sk.builtin.str("[a] Cat");$scope0.$const95 = new Sk.builtin.str("[b] Dogs barking");$scope0.$const98 = new Sk.builtin.str("[c] Whistle");$scope0.$const104 = new Sk.builtin.str("Enter your sound effect choice:");$scope0.$const111 = new Sk.builtin.str("Meow!");$scope0.$const118 = new Sk.builtin.str("Woof, woof!");$scope0.$const125 = new Sk.builtin.str("Beeeeeep!");$scope0.$const132 = new Sk.builtin.str("Press [Enter] to return to menu");$scope0.$const135 = new Sk.builtin.str("Bye now!");
return $scope0;}();
$compiledmod;