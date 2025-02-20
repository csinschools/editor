Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname4,$loadname5,$loadname4,$loadname5,$lattr7,$loadname8,$loadname4,$loadname5,$lattr7,$loadname8,$lattr10,$binop11,$binop13,$loadname15,$loadname16,$loadname15,$loadname16,$lattr18,$binop20,$loadname22,$loadname24,$loadname25,$loadname24,$loadname25,$lattr27,$binop29,$loadname31,$loadname32,$loadname31,$loadname32,$lattr33,$binop35,$loadname37,$loadname38,$loadname37,$loadname38,$lattr40,$binop41,$loadname43,$loadname44,$loadname43,$loadname44,$lattr46,$binop47,$loadname49,$loadname51,$loadname52,$loadname51,$loadname52,$lattr53,$binop55,$loadname57,$loadname58,$loadname57,$loadname58,$lattr60,$binop62,$loadname63,$loadname57,$loadname58,$lattr60,$binop62,$loadname63,$lattr64,$binop65,$binop66,$loadname67,$loadname57,$loadname58,$lattr60,$binop62,$loadname63,$lattr64,$binop65,$binop66,$loadname67,$lattr68,$binop69,$binop70,$loadname72,$loadname73,$loadname72,$loadname73,$lattr74,$binop75,$loadname76,$loadname72,$loadname73,$lattr74,$binop75,$loadname76,$lattr77,$binop78,$binop79,$loadname80,$loadname72,$loadname73,$lattr74,$binop75,$loadname76,$lattr77,$binop78,$binop79,$loadname80,$lattr81,$binop82,$binop83,$loadname85,$loadname86,$loadname85,$loadname86,$lattr87,$binop88,$loadname89,$loadname85,$loadname86,$lattr87,$binop88,$loadname89,$lattr90,$binop91,$binop92,$loadname93,$loadname85,$loadname86,$lattr87,$binop88,$loadname89,$lattr90,$binop91,$binop92,$loadname93,$lattr94,$binop95,$binop96;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname4=susp.$tmps.$loadname4;$loadname5=susp.$tmps.$loadname5;$lattr7=susp.$tmps.$lattr7;$loadname8=susp.$tmps.$loadname8;$lattr10=susp.$tmps.$lattr10;$binop11=susp.$tmps.$binop11;$binop13=susp.$tmps.$binop13;$loadname15=susp.$tmps.$loadname15;$loadname16=susp.$tmps.$loadname16;$lattr18=susp.$tmps.$lattr18;$binop20=susp.$tmps.$binop20;$loadname22=susp.$tmps.$loadname22;$loadname24=susp.$tmps.$loadname24;$loadname25=susp.$tmps.$loadname25;$lattr27=susp.$tmps.$lattr27;$binop29=susp.$tmps.$binop29;$loadname31=susp.$tmps.$loadname31;$loadname32=susp.$tmps.$loadname32;$lattr33=susp.$tmps.$lattr33;$binop35=susp.$tmps.$binop35;$loadname37=susp.$tmps.$loadname37;$loadname38=susp.$tmps.$loadname38;$lattr40=susp.$tmps.$lattr40;$binop41=susp.$tmps.$binop41;$loadname43=susp.$tmps.$loadname43;$loadname44=susp.$tmps.$loadname44;$lattr46=susp.$tmps.$lattr46;$binop47=susp.$tmps.$binop47;$loadname49=susp.$tmps.$loadname49;$loadname51=susp.$tmps.$loadname51;$loadname52=susp.$tmps.$loadname52;$lattr53=susp.$tmps.$lattr53;$binop55=susp.$tmps.$binop55;$loadname57=susp.$tmps.$loadname57;$loadname58=susp.$tmps.$loadname58;$lattr60=susp.$tmps.$lattr60;$binop62=susp.$tmps.$binop62;$loadname63=susp.$tmps.$loadname63;$lattr64=susp.$tmps.$lattr64;$binop65=susp.$tmps.$binop65;$binop66=susp.$tmps.$binop66;$loadname67=susp.$tmps.$loadname67;$lattr68=susp.$tmps.$lattr68;$binop69=susp.$tmps.$binop69;$binop70=susp.$tmps.$binop70;$loadname72=susp.$tmps.$loadname72;$loadname73=susp.$tmps.$loadname73;$lattr74=susp.$tmps.$lattr74;$binop75=susp.$tmps.$binop75;$loadname76=susp.$tmps.$loadname76;$lattr77=susp.$tmps.$lattr77;$binop78=susp.$tmps.$binop78;$binop79=susp.$tmps.$binop79;$loadname80=susp.$tmps.$loadname80;$lattr81=susp.$tmps.$lattr81;$binop82=susp.$tmps.$binop82;$binop83=susp.$tmps.$binop83;$loadname85=susp.$tmps.$loadname85;$loadname86=susp.$tmps.$loadname86;$lattr87=susp.$tmps.$lattr87;$binop88=susp.$tmps.$binop88;$loadname89=susp.$tmps.$loadname89;$lattr90=susp.$tmps.$lattr90;$binop91=susp.$tmps.$binop91;$binop92=susp.$tmps.$binop92;$loadname93=susp.$tmps.$loadname93;$lattr94=susp.$tmps.$lattr94;$binop95=susp.$tmps.$binop95;$binop96=susp.$tmps.$binop96;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname4":$loadname4,"$loadname5":$loadname5,"$lattr7":$lattr7,"$loadname8":$loadname8,"$lattr10":$lattr10,"$binop11":$binop11,"$binop13":$binop13,"$loadname15":$loadname15,"$loadname16":$loadname16,"$lattr18":$lattr18,"$binop20":$binop20,"$loadname22":$loadname22,"$loadname24":$loadname24,"$loadname25":$loadname25,"$lattr27":$lattr27,"$binop29":$binop29,"$loadname31":$loadname31,"$loadname32":$loadname32,"$lattr33":$lattr33,"$binop35":$binop35,"$loadname37":$loadname37,"$loadname38":$loadname38,"$lattr40":$lattr40,"$binop41":$binop41,"$loadname43":$loadname43,"$loadname44":$loadname44,"$lattr46":$lattr46,"$binop47":$binop47,"$loadname49":$loadname49,"$loadname51":$loadname51,"$loadname52":$loadname52,"$lattr53":$lattr53,"$binop55":$binop55,"$loadname57":$loadname57,"$loadname58":$loadname58,"$lattr60":$lattr60,"$binop62":$binop62,"$loadname63":$loadname63,"$lattr64":$lattr64,"$binop65":$binop65,"$binop66":$binop66,"$loadname67":$loadname67,"$lattr68":$lattr68,"$binop69":$binop69,"$binop70":$binop70,"$loadname72":$loadname72,"$loadname73":$loadname73,"$lattr74":$lattr74,"$binop75":$binop75,"$loadname76":$loadname76,"$lattr77":$lattr77,"$binop78":$binop78,"$binop79":$binop79,"$loadname80":$loadname80,"$lattr81":$lattr81,"$binop82":$binop82,"$binop83":$binop83,"$loadname85":$loadname85,"$loadname86":$loadname86,"$lattr87":$lattr87,"$binop88":$binop88,"$loadname89":$loadname89,"$lattr90":$lattr90,"$binop91":$binop91,"$binop92":$binop92,"$loadname93":$loadname93,"$lattr94":$lattr94,"$binop95":$binop95,"$binop96":$binop96};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$ret = Sk.builtin.__import__('goodies',$gbl,$loc,['Colour','Highlight'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;var $item2=Sk.abstr.gattr($module1, new Sk.builtin.str('Colour'), undefined);$loc.Colour=$item2;var $item3=Sk.abstr.gattr($module1, new Sk.builtin.str('Highlight'), undefined);$loc.Highlight=$item3;if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 3;
$currColNo = 0;

var $loadname4=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname5=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname5.tp$getattr($scope0.$const6, true);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname5.sk$attrError() + " has no attribute '" + $scope0.$const6.$jsstr() + "'");
};var $lattr7=$ret;var $loadname8=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname8.tp$getattr($scope0.$const9, true);$blk=5;case 5: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,22); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname8.sk$attrError() + " has no attribute '" + $scope0.$const9.$jsstr() + "'");
};var $lattr10=$ret;var $binop11=Sk.abstr.numberBinOp($lattr7,$lattr10,'Add');var $binop13=Sk.abstr.numberBinOp($binop11,$scope0.$const12,'Add');$ret = ($loadname4.tp$call)?$loadname4.tp$call([$binop13],undefined) : Sk.misceval.applyOrSuspend($loadname4,undefined,undefined,undefined,[$binop13]);$blk=6;case 6: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,0); }var $call14=$ret;

$currLineNo = 3;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',4,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',4,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 4;
$currColNo = 0;

var $loadname15=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname16=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname16.tp$getattr($scope0.$const17, true);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',4,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname16.sk$attrError() + " has no attribute '" + $scope0.$const17.$jsstr() + "'");
};var $lattr18=$ret;var $binop20=Sk.abstr.numberBinOp($lattr18,$scope0.$const19,'Add');$ret = ($loadname15.tp$call)?$loadname15.tp$call([$binop20],undefined) : Sk.misceval.applyOrSuspend($loadname15,undefined,undefined,undefined,[$binop20]);$blk=9;case 9: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',4,0); }var $call21=$ret;

$currLineNo = 4;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 10;$susp.optional = true;return $susp;}$blk=10;case 10: 

$currLineNo = 6;
$currColNo = 0;

var $loadname22=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname22.tp$call)?$loadname22.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname22,undefined,undefined,undefined,[]);$blk=11;case 11: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,0); }var $call23=$ret;

$currLineNo = 6;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 12;$susp.optional = true;return $susp;}$blk=12;case 12: 

$currLineNo = 7;
$currColNo = 0;

var $loadname24=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname25=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname25.tp$getattr($scope0.$const26, true);$blk=13;case 13: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname25.sk$attrError() + " has no attribute '" + $scope0.$const26.$jsstr() + "'");
};var $lattr27=$ret;var $binop29=Sk.abstr.numberBinOp($lattr27,$scope0.$const28,'Add');$ret = ($loadname24.tp$call)?$loadname24.tp$call([$binop29],undefined) : Sk.misceval.applyOrSuspend($loadname24,undefined,undefined,undefined,[$binop29]);$blk=14;case 14: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,0); }var $call30=$ret;

$currLineNo = 7;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',8,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,0);$susp.$blk = 15;$susp.optional = true;return $susp;}$blk=15;case 15: 

$currLineNo = 8;
$currColNo = 0;

var $loadname31=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname32=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname32.tp$getattr($scope0.$const6, true);$blk=16;case 16: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname32.sk$attrError() + " has no attribute '" + $scope0.$const6.$jsstr() + "'");
};var $lattr33=$ret;var $binop35=Sk.abstr.numberBinOp($lattr33,$scope0.$const34,'Add');$ret = ($loadname31.tp$call)?$loadname31.tp$call([$binop35],undefined) : Sk.misceval.applyOrSuspend($loadname31,undefined,undefined,undefined,[$binop35]);$blk=17;case 17: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,0); }var $call36=$ret;

$currLineNo = 8;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',9,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,0);$susp.$blk = 18;$susp.optional = true;return $susp;}$blk=18;case 18: 

$currLineNo = 9;
$currColNo = 0;

var $loadname37=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname38=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname38.tp$getattr($scope0.$const39, true);$blk=19;case 19: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname38.sk$attrError() + " has no attribute '" + $scope0.$const39.$jsstr() + "'");
};var $lattr40=$ret;var $binop41=Sk.abstr.numberBinOp($lattr40,$scope0.$const34,'Add');$ret = ($loadname37.tp$call)?$loadname37.tp$call([$binop41],undefined) : Sk.misceval.applyOrSuspend($loadname37,undefined,undefined,undefined,[$binop41]);$blk=20;case 20: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,0); }var $call42=$ret;

$currLineNo = 9;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',10,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,0);$susp.$blk = 21;$susp.optional = true;return $susp;}$blk=21;case 21: 

$currLineNo = 10;
$currColNo = 0;

var $loadname43=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname44=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname44.tp$getattr($scope0.$const45, true);$blk=22;case 22: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname44.sk$attrError() + " has no attribute '" + $scope0.$const45.$jsstr() + "'");
};var $lattr46=$ret;var $binop47=Sk.abstr.numberBinOp($lattr46,$scope0.$const34,'Add');$ret = ($loadname43.tp$call)?$loadname43.tp$call([$binop47],undefined) : Sk.misceval.applyOrSuspend($loadname43,undefined,undefined,undefined,[$binop47]);$blk=23;case 23: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,0); }var $call48=$ret;

$currLineNo = 10;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',11,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,0);$susp.$blk = 24;$susp.optional = true;return $susp;}$blk=24;case 24: 

$currLineNo = 11;
$currColNo = 0;

var $loadname49=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname49.tp$call)?$loadname49.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname49,undefined,undefined,undefined,[]);$blk=25;case 25: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,0); }var $call50=$ret;

$currLineNo = 11;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',12,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,0);$susp.$blk = 26;$susp.optional = true;return $susp;}$blk=26;case 26: 

$currLineNo = 12;
$currColNo = 0;

var $loadname51=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname52=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname52.tp$getattr($scope0.$const26, true);$blk=27;case 27: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname52.sk$attrError() + " has no attribute '" + $scope0.$const26.$jsstr() + "'");
};var $lattr53=$ret;var $binop55=Sk.abstr.numberBinOp($lattr53,$scope0.$const54,'Add');$ret = ($loadname51.tp$call)?$loadname51.tp$call([$binop55],undefined) : Sk.misceval.applyOrSuspend($loadname51,undefined,undefined,undefined,[$binop55]);$blk=28;case 28: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,0); }var $call56=$ret;

$currLineNo = 12;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',13,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,0);$susp.$blk = 29;$susp.optional = true;return $susp;}$blk=29;case 29: 

$currLineNo = 13;
$currColNo = 0;

var $loadname57=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname58=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname58.tp$getattr($scope0.$const59, true);$blk=30;case 30: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname58.sk$attrError() + " has no attribute '" + $scope0.$const59.$jsstr() + "'");
};var $lattr60=$ret;var $binop62=Sk.abstr.numberBinOp($lattr60,$scope0.$const61,'Add');var $loadname63=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname63.tp$getattr($scope0.$const39, true);$blk=31;case 31: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,32); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname63.sk$attrError() + " has no attribute '" + $scope0.$const39.$jsstr() + "'");
};var $lattr64=$ret;var $binop65=Sk.abstr.numberBinOp($binop62,$lattr64,'Add');var $binop66=Sk.abstr.numberBinOp($binop65,$scope0.$const61,'Add');var $loadname67=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname67.tp$getattr($scope0.$const59, true);$blk=32;case 32: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,58); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname67.sk$attrError() + " has no attribute '" + $scope0.$const59.$jsstr() + "'");
};var $lattr68=$ret;var $binop69=Sk.abstr.numberBinOp($binop66,$lattr68,'Add');var $binop70=Sk.abstr.numberBinOp($binop69,$scope0.$const61,'Add');$ret = ($loadname57.tp$call)?$loadname57.tp$call([$binop70],undefined) : Sk.misceval.applyOrSuspend($loadname57,undefined,undefined,undefined,[$binop70]);$blk=33;case 33: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,0); }var $call71=$ret;

$currLineNo = 13;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',14,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,0);$susp.$blk = 34;$susp.optional = true;return $susp;}$blk=34;case 34: 

$currLineNo = 14;
$currColNo = 0;

var $loadname72=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname73=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname73.tp$getattr($scope0.$const59, true);$blk=35;case 35: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname73.sk$attrError() + " has no attribute '" + $scope0.$const59.$jsstr() + "'");
};var $lattr74=$ret;var $binop75=Sk.abstr.numberBinOp($lattr74,$scope0.$const61,'Add');var $loadname76=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname76.tp$getattr($scope0.$const39, true);$blk=36;case 36: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,32); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname76.sk$attrError() + " has no attribute '" + $scope0.$const39.$jsstr() + "'");
};var $lattr77=$ret;var $binop78=Sk.abstr.numberBinOp($binop75,$lattr77,'Add');var $binop79=Sk.abstr.numberBinOp($binop78,$scope0.$const61,'Add');var $loadname80=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname80.tp$getattr($scope0.$const59, true);$blk=37;case 37: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,58); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname80.sk$attrError() + " has no attribute '" + $scope0.$const59.$jsstr() + "'");
};var $lattr81=$ret;var $binop82=Sk.abstr.numberBinOp($binop79,$lattr81,'Add');var $binop83=Sk.abstr.numberBinOp($binop82,$scope0.$const61,'Add');$ret = ($loadname72.tp$call)?$loadname72.tp$call([$binop83],undefined) : Sk.misceval.applyOrSuspend($loadname72,undefined,undefined,undefined,[$binop83]);$blk=38;case 38: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,0); }var $call84=$ret;

$currLineNo = 14;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',15,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,0);$susp.$blk = 39;$susp.optional = true;return $susp;}$blk=39;case 39: 

$currLineNo = 15;
$currColNo = 0;

var $loadname85=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname86=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname86.tp$getattr($scope0.$const59, true);$blk=40;case 40: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname86.sk$attrError() + " has no attribute '" + $scope0.$const59.$jsstr() + "'");
};var $lattr87=$ret;var $binop88=Sk.abstr.numberBinOp($lattr87,$scope0.$const61,'Add');var $loadname89=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname89.tp$getattr($scope0.$const39, true);$blk=41;case 41: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,32); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname89.sk$attrError() + " has no attribute '" + $scope0.$const39.$jsstr() + "'");
};var $lattr90=$ret;var $binop91=Sk.abstr.numberBinOp($binop88,$lattr90,'Add');var $binop92=Sk.abstr.numberBinOp($binop91,$scope0.$const61,'Add');var $loadname93=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname93.tp$getattr($scope0.$const59, true);$blk=42;case 42: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,58); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname93.sk$attrError() + " has no attribute '" + $scope0.$const59.$jsstr() + "'");
};var $lattr94=$ret;var $binop95=Sk.abstr.numberBinOp($binop92,$lattr94,'Add');var $binop96=Sk.abstr.numberBinOp($binop95,$scope0.$const61,'Add');$ret = ($loadname85.tp$call)?$loadname85.tp$call([$binop96],undefined) : Sk.misceval.applyOrSuspend($loadname85,undefined,undefined,undefined,[$binop96]);$blk=43;case 43: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,0); }var $call97=$ret;

$currLineNo = 15;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const6 = new Sk.builtin.str('red');$scope0.$const9 = new Sk.builtin.str('yellow');$scope0.$const12 = new Sk.builtin.str("Let's draw some flags!");$scope0.$const17 = new Sk.builtin.str('orange');$scope0.$const19 = new Sk.builtin.str("                      ");$scope0.$const26 = new Sk.builtin.str('reset');$scope0.$const28 = new Sk.builtin.str("The Flag of the Netherlands:");$scope0.$const34 = new Sk.builtin.str("         ");$scope0.$const39 = new Sk.builtin.str('white');$scope0.$const45 = new Sk.builtin.str('blue');$scope0.$const54 = new Sk.builtin.str("The Flag of Nigeria:");$scope0.$const59 = new Sk.builtin.str('green');$scope0.$const61 = new Sk.builtin.str("   ");
return $scope0;}();
$compiledmod;