Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname4,$loadname5,$loadname4,$loadname5,$lattr7,$loadname8,$loadname4,$loadname5,$lattr7,$loadname8,$lattr10,$binop11,$binop13,$loadname15,$loadname16,$loadname15,$loadname16,$lattr18,$binop20,$loadname22,$loadname24,$loadname25,$loadname24,$loadname25,$lattr27,$binop29,$loadname31,$loadname32,$loadname31,$loadname32,$lattr33,$binop35,$loadname37,$loadname38,$loadname37,$loadname38,$lattr40,$binop41,$loadname43,$loadname44,$loadname43,$loadname44,$lattr45,$binop46,$loadname48,$loadname49,$loadname48,$loadname49,$lattr50,$binop52,$loadname54,$loadname55,$loadname54,$loadname55,$lattr57,$binop59,$loadname60,$loadname54,$loadname55,$lattr57,$binop59,$loadname60,$lattr61,$binop62,$binop63,$loadname64,$loadname54,$loadname55,$lattr57,$binop59,$loadname60,$lattr61,$binop62,$binop63,$loadname64,$lattr65,$binop66,$binop67,$loadname69,$loadname70,$loadname69,$loadname70,$lattr71,$binop72,$loadname73,$loadname69,$loadname70,$lattr71,$binop72,$loadname73,$lattr74,$binop75,$binop76,$loadname77,$loadname69,$loadname70,$lattr71,$binop72,$loadname73,$lattr74,$binop75,$binop76,$loadname77,$lattr78,$binop79,$binop80,$loadname82,$loadname83,$loadname82,$loadname83,$lattr84,$binop85,$loadname86,$loadname82,$loadname83,$lattr84,$binop85,$loadname86,$lattr87,$binop88,$binop89,$loadname90,$loadname82,$loadname83,$lattr84,$binop85,$loadname86,$lattr87,$binop88,$binop89,$loadname90,$lattr91,$binop92,$binop93;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname4=susp.$tmps.$loadname4;$loadname5=susp.$tmps.$loadname5;$lattr7=susp.$tmps.$lattr7;$loadname8=susp.$tmps.$loadname8;$lattr10=susp.$tmps.$lattr10;$binop11=susp.$tmps.$binop11;$binop13=susp.$tmps.$binop13;$loadname15=susp.$tmps.$loadname15;$loadname16=susp.$tmps.$loadname16;$lattr18=susp.$tmps.$lattr18;$binop20=susp.$tmps.$binop20;$loadname22=susp.$tmps.$loadname22;$loadname24=susp.$tmps.$loadname24;$loadname25=susp.$tmps.$loadname25;$lattr27=susp.$tmps.$lattr27;$binop29=susp.$tmps.$binop29;$loadname31=susp.$tmps.$loadname31;$loadname32=susp.$tmps.$loadname32;$lattr33=susp.$tmps.$lattr33;$binop35=susp.$tmps.$binop35;$loadname37=susp.$tmps.$loadname37;$loadname38=susp.$tmps.$loadname38;$lattr40=susp.$tmps.$lattr40;$binop41=susp.$tmps.$binop41;$loadname43=susp.$tmps.$loadname43;$loadname44=susp.$tmps.$loadname44;$lattr45=susp.$tmps.$lattr45;$binop46=susp.$tmps.$binop46;$loadname48=susp.$tmps.$loadname48;$loadname49=susp.$tmps.$loadname49;$lattr50=susp.$tmps.$lattr50;$binop52=susp.$tmps.$binop52;$loadname54=susp.$tmps.$loadname54;$loadname55=susp.$tmps.$loadname55;$lattr57=susp.$tmps.$lattr57;$binop59=susp.$tmps.$binop59;$loadname60=susp.$tmps.$loadname60;$lattr61=susp.$tmps.$lattr61;$binop62=susp.$tmps.$binop62;$binop63=susp.$tmps.$binop63;$loadname64=susp.$tmps.$loadname64;$lattr65=susp.$tmps.$lattr65;$binop66=susp.$tmps.$binop66;$binop67=susp.$tmps.$binop67;$loadname69=susp.$tmps.$loadname69;$loadname70=susp.$tmps.$loadname70;$lattr71=susp.$tmps.$lattr71;$binop72=susp.$tmps.$binop72;$loadname73=susp.$tmps.$loadname73;$lattr74=susp.$tmps.$lattr74;$binop75=susp.$tmps.$binop75;$binop76=susp.$tmps.$binop76;$loadname77=susp.$tmps.$loadname77;$lattr78=susp.$tmps.$lattr78;$binop79=susp.$tmps.$binop79;$binop80=susp.$tmps.$binop80;$loadname82=susp.$tmps.$loadname82;$loadname83=susp.$tmps.$loadname83;$lattr84=susp.$tmps.$lattr84;$binop85=susp.$tmps.$binop85;$loadname86=susp.$tmps.$loadname86;$lattr87=susp.$tmps.$lattr87;$binop88=susp.$tmps.$binop88;$binop89=susp.$tmps.$binop89;$loadname90=susp.$tmps.$loadname90;$lattr91=susp.$tmps.$lattr91;$binop92=susp.$tmps.$binop92;$binop93=susp.$tmps.$binop93;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname4":$loadname4,"$loadname5":$loadname5,"$lattr7":$lattr7,"$loadname8":$loadname8,"$lattr10":$lattr10,"$binop11":$binop11,"$binop13":$binop13,"$loadname15":$loadname15,"$loadname16":$loadname16,"$lattr18":$lattr18,"$binop20":$binop20,"$loadname22":$loadname22,"$loadname24":$loadname24,"$loadname25":$loadname25,"$lattr27":$lattr27,"$binop29":$binop29,"$loadname31":$loadname31,"$loadname32":$loadname32,"$lattr33":$lattr33,"$binop35":$binop35,"$loadname37":$loadname37,"$loadname38":$loadname38,"$lattr40":$lattr40,"$binop41":$binop41,"$loadname43":$loadname43,"$loadname44":$loadname44,"$lattr45":$lattr45,"$binop46":$binop46,"$loadname48":$loadname48,"$loadname49":$loadname49,"$lattr50":$lattr50,"$binop52":$binop52,"$loadname54":$loadname54,"$loadname55":$loadname55,"$lattr57":$lattr57,"$binop59":$binop59,"$loadname60":$loadname60,"$lattr61":$lattr61,"$binop62":$binop62,"$binop63":$binop63,"$loadname64":$loadname64,"$lattr65":$lattr65,"$binop66":$binop66,"$binop67":$binop67,"$loadname69":$loadname69,"$loadname70":$loadname70,"$lattr71":$lattr71,"$binop72":$binop72,"$loadname73":$loadname73,"$lattr74":$lattr74,"$binop75":$binop75,"$binop76":$binop76,"$loadname77":$loadname77,"$lattr78":$lattr78,"$binop79":$binop79,"$binop80":$binop80,"$loadname82":$loadname82,"$loadname83":$loadname83,"$lattr84":$lattr84,"$binop85":$binop85,"$loadname86":$loadname86,"$lattr87":$lattr87,"$binop88":$binop88,"$binop89":$binop89,"$loadname90":$loadname90,"$lattr91":$lattr91,"$binop92":$binop92,"$binop93":$binop93};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

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

if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 5;
$currColNo = 0;

var $loadname15=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname16=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname16.tp$getattr($scope0.$const17, true);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname16.sk$attrError() + " has no attribute '" + $scope0.$const17.$jsstr() + "'");
};var $lattr18=$ret;var $binop20=Sk.abstr.numberBinOp($lattr18,$scope0.$const19,'Add');$ret = ($loadname15.tp$call)?$loadname15.tp$call([$binop20],undefined) : Sk.misceval.applyOrSuspend($loadname15,undefined,undefined,undefined,[$binop20]);$blk=9;case 9: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,0); }var $call21=$ret;

$currLineNo = 5;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 10;$susp.optional = true;return $susp;}$blk=10;case 10: 

$currLineNo = 7;
$currColNo = 0;

var $loadname22=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname22.tp$call)?$loadname22.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname22,undefined,undefined,undefined,[]);$blk=11;case 11: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,0); }var $call23=$ret;

$currLineNo = 7;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',8,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,0);$susp.$blk = 12;$susp.optional = true;return $susp;}$blk=12;case 12: 

$currLineNo = 8;
$currColNo = 0;

var $loadname24=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname25=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname25.tp$getattr($scope0.$const26, true);$blk=13;case 13: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname25.sk$attrError() + " has no attribute '" + $scope0.$const26.$jsstr() + "'");
};var $lattr27=$ret;var $binop29=Sk.abstr.numberBinOp($lattr27,$scope0.$const28,'Add');$ret = ($loadname24.tp$call)?$loadname24.tp$call([$binop29],undefined) : Sk.misceval.applyOrSuspend($loadname24,undefined,undefined,undefined,[$binop29]);$blk=14;case 14: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',8,0); }var $call30=$ret;

$currLineNo = 8;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',9,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,0);$susp.$blk = 15;$susp.optional = true;return $susp;}$blk=15;case 15: 

$currLineNo = 9;
$currColNo = 0;

var $loadname31=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname32=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname32.tp$getattr($scope0.$const6, true);$blk=16;case 16: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname32.sk$attrError() + " has no attribute '" + $scope0.$const6.$jsstr() + "'");
};var $lattr33=$ret;var $binop35=Sk.abstr.numberBinOp($lattr33,$scope0.$const34,'Add');$ret = ($loadname31.tp$call)?$loadname31.tp$call([$binop35],undefined) : Sk.misceval.applyOrSuspend($loadname31,undefined,undefined,undefined,[$binop35]);$blk=17;case 17: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',9,0); }var $call36=$ret;

$currLineNo = 9;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',10,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,0);$susp.$blk = 18;$susp.optional = true;return $susp;}$blk=18;case 18: 

$currLineNo = 10;
$currColNo = 0;

var $loadname37=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname38=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname38.tp$getattr($scope0.$const39, true);$blk=19;case 19: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname38.sk$attrError() + " has no attribute '" + $scope0.$const39.$jsstr() + "'");
};var $lattr40=$ret;var $binop41=Sk.abstr.numberBinOp($lattr40,$scope0.$const34,'Add');$ret = ($loadname37.tp$call)?$loadname37.tp$call([$binop41],undefined) : Sk.misceval.applyOrSuspend($loadname37,undefined,undefined,undefined,[$binop41]);$blk=20;case 20: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,0); }var $call42=$ret;

$currLineNo = 10;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',11,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,0);$susp.$blk = 21;$susp.optional = true;return $susp;}$blk=21;case 21: 

$currLineNo = 11;
$currColNo = 0;

var $loadname43=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname44=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname44.tp$getattr($scope0.$const17, true);$blk=22;case 22: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname44.sk$attrError() + " has no attribute '" + $scope0.$const17.$jsstr() + "'");
};var $lattr45=$ret;var $binop46=Sk.abstr.numberBinOp($lattr45,$scope0.$const34,'Add');$ret = ($loadname43.tp$call)?$loadname43.tp$call([$binop46],undefined) : Sk.misceval.applyOrSuspend($loadname43,undefined,undefined,undefined,[$binop46]);$blk=23;case 23: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,0); }var $call47=$ret;

$currLineNo = 11;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',13,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,0);$susp.$blk = 24;$susp.optional = true;return $susp;}$blk=24;case 24: 

$currLineNo = 13;
$currColNo = 0;

var $loadname48=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname49=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname49.tp$getattr($scope0.$const26, true);$blk=25;case 25: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname49.sk$attrError() + " has no attribute '" + $scope0.$const26.$jsstr() + "'");
};var $lattr50=$ret;var $binop52=Sk.abstr.numberBinOp($lattr50,$scope0.$const51,'Add');$ret = ($loadname48.tp$call)?$loadname48.tp$call([$binop52],undefined) : Sk.misceval.applyOrSuspend($loadname48,undefined,undefined,undefined,[$binop52]);$blk=26;case 26: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,0); }var $call53=$ret;

$currLineNo = 13;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',14,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,0);$susp.$blk = 27;$susp.optional = true;return $susp;}$blk=27;case 27: 

$currLineNo = 14;
$currColNo = 0;

var $loadname54=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname55=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname55.tp$getattr($scope0.$const56, true);$blk=28;case 28: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname55.sk$attrError() + " has no attribute '" + $scope0.$const56.$jsstr() + "'");
};var $lattr57=$ret;var $binop59=Sk.abstr.numberBinOp($lattr57,$scope0.$const58,'Add');var $loadname60=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname60.tp$getattr($scope0.$const39, true);$blk=29;case 29: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,32); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname60.sk$attrError() + " has no attribute '" + $scope0.$const39.$jsstr() + "'");
};var $lattr61=$ret;var $binop62=Sk.abstr.numberBinOp($binop59,$lattr61,'Add');var $binop63=Sk.abstr.numberBinOp($binop62,$scope0.$const58,'Add');var $loadname64=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname64.tp$getattr($scope0.$const56, true);$blk=30;case 30: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,58); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname64.sk$attrError() + " has no attribute '" + $scope0.$const56.$jsstr() + "'");
};var $lattr65=$ret;var $binop66=Sk.abstr.numberBinOp($binop63,$lattr65,'Add');var $binop67=Sk.abstr.numberBinOp($binop66,$scope0.$const58,'Add');$ret = ($loadname54.tp$call)?$loadname54.tp$call([$binop67],undefined) : Sk.misceval.applyOrSuspend($loadname54,undefined,undefined,undefined,[$binop67]);$blk=31;case 31: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,0); }var $call68=$ret;

$currLineNo = 14;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',15,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,0);$susp.$blk = 32;$susp.optional = true;return $susp;}$blk=32;case 32: 

$currLineNo = 15;
$currColNo = 0;

var $loadname69=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname70=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname70.tp$getattr($scope0.$const56, true);$blk=33;case 33: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname70.sk$attrError() + " has no attribute '" + $scope0.$const56.$jsstr() + "'");
};var $lattr71=$ret;var $binop72=Sk.abstr.numberBinOp($lattr71,$scope0.$const58,'Add');var $loadname73=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname73.tp$getattr($scope0.$const39, true);$blk=34;case 34: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,32); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname73.sk$attrError() + " has no attribute '" + $scope0.$const39.$jsstr() + "'");
};var $lattr74=$ret;var $binop75=Sk.abstr.numberBinOp($binop72,$lattr74,'Add');var $binop76=Sk.abstr.numberBinOp($binop75,$scope0.$const58,'Add');var $loadname77=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname77.tp$getattr($scope0.$const56, true);$blk=35;case 35: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,58); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname77.sk$attrError() + " has no attribute '" + $scope0.$const56.$jsstr() + "'");
};var $lattr78=$ret;var $binop79=Sk.abstr.numberBinOp($binop76,$lattr78,'Add');var $binop80=Sk.abstr.numberBinOp($binop79,$scope0.$const58,'Add');$ret = ($loadname69.tp$call)?$loadname69.tp$call([$binop80],undefined) : Sk.misceval.applyOrSuspend($loadname69,undefined,undefined,undefined,[$binop80]);$blk=36;case 36: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,0); }var $call81=$ret;

$currLineNo = 15;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',16,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,0);$susp.$blk = 37;$susp.optional = true;return $susp;}$blk=37;case 37: 

$currLineNo = 16;
$currColNo = 0;

var $loadname82=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname83=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname83.tp$getattr($scope0.$const56, true);$blk=38;case 38: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname83.sk$attrError() + " has no attribute '" + $scope0.$const56.$jsstr() + "'");
};var $lattr84=$ret;var $binop85=Sk.abstr.numberBinOp($lattr84,$scope0.$const58,'Add');var $loadname86=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname86.tp$getattr($scope0.$const39, true);$blk=39;case 39: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,32); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname86.sk$attrError() + " has no attribute '" + $scope0.$const39.$jsstr() + "'");
};var $lattr87=$ret;var $binop88=Sk.abstr.numberBinOp($binop85,$lattr87,'Add');var $binop89=Sk.abstr.numberBinOp($binop88,$scope0.$const58,'Add');var $loadname90=$loc.Highlight!==undefined?$loc.Highlight:Sk.misceval.loadname('Highlight',$gbl);;$ret = $loadname90.tp$getattr($scope0.$const56, true);$blk=40;case 40: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,58); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname90.sk$attrError() + " has no attribute '" + $scope0.$const56.$jsstr() + "'");
};var $lattr91=$ret;var $binop92=Sk.abstr.numberBinOp($binop89,$lattr91,'Add');var $binop93=Sk.abstr.numberBinOp($binop92,$scope0.$const58,'Add');$ret = ($loadname82.tp$call)?$loadname82.tp$call([$binop93],undefined) : Sk.misceval.applyOrSuspend($loadname82,undefined,undefined,undefined,[$binop93]);$blk=41;case 41: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,0); }var $call94=$ret;

$currLineNo = 16;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const6 = new Sk.builtin.str('red');$scope0.$const9 = new Sk.builtin.str('yellow');$scope0.$const12 = new Sk.builtin.str("STOP!");$scope0.$const17 = new Sk.builtin.str('blue');$scope0.$const19 = new Sk.builtin.str("     ");$scope0.$const26 = new Sk.builtin.str('reset');$scope0.$const28 = new Sk.builtin.str("The Flag of the Netherlands:");$scope0.$const34 = new Sk.builtin.str("         ");$scope0.$const39 = new Sk.builtin.str('white');$scope0.$const51 = new Sk.builtin.str("The Flag of Nigeria:");$scope0.$const56 = new Sk.builtin.str('green');$scope0.$const58 = new Sk.builtin.str("   ");
return $scope0;}();
$compiledmod;