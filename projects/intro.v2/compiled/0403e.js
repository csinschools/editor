Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname1,$loadname4,$loadname7,$loadname10,$loadname13,$loadname16,$loadname18,$binop19,$binop21,$loadname22,$binop23,$binop25,$loadname27,$loadname29,$binop30,$binop32,$loadname34,$loadname36,$binop37,$binop39,$loadname40,$binop41,$binop43,$loadname45,$loadname47,$binop48,$binop50,$loadname51,$binop52,$binop54,$loadname56,$loadname58,$binop59,$binop61,$loadname63;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname1=susp.$tmps.$loadname1;$loadname4=susp.$tmps.$loadname4;$loadname7=susp.$tmps.$loadname7;$loadname10=susp.$tmps.$loadname10;$loadname13=susp.$tmps.$loadname13;$loadname16=susp.$tmps.$loadname16;$loadname18=susp.$tmps.$loadname18;$binop19=susp.$tmps.$binop19;$binop21=susp.$tmps.$binop21;$loadname22=susp.$tmps.$loadname22;$binop23=susp.$tmps.$binop23;$binop25=susp.$tmps.$binop25;$loadname27=susp.$tmps.$loadname27;$loadname29=susp.$tmps.$loadname29;$binop30=susp.$tmps.$binop30;$binop32=susp.$tmps.$binop32;$loadname34=susp.$tmps.$loadname34;$loadname36=susp.$tmps.$loadname36;$binop37=susp.$tmps.$binop37;$binop39=susp.$tmps.$binop39;$loadname40=susp.$tmps.$loadname40;$binop41=susp.$tmps.$binop41;$binop43=susp.$tmps.$binop43;$loadname45=susp.$tmps.$loadname45;$loadname47=susp.$tmps.$loadname47;$binop48=susp.$tmps.$binop48;$binop50=susp.$tmps.$binop50;$loadname51=susp.$tmps.$loadname51;$binop52=susp.$tmps.$binop52;$binop54=susp.$tmps.$binop54;$loadname56=susp.$tmps.$loadname56;$loadname58=susp.$tmps.$loadname58;$binop59=susp.$tmps.$binop59;$binop61=susp.$tmps.$binop61;$loadname63=susp.$tmps.$loadname63;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname1":$loadname1,"$loadname4":$loadname4,"$loadname7":$loadname7,"$loadname10":$loadname10,"$loadname13":$loadname13,"$loadname16":$loadname16,"$loadname18":$loadname18,"$binop19":$binop19,"$binop21":$binop21,"$loadname22":$loadname22,"$binop23":$binop23,"$binop25":$binop25,"$loadname27":$loadname27,"$loadname29":$loadname29,"$binop30":$binop30,"$binop32":$binop32,"$loadname34":$loadname34,"$loadname36":$loadname36,"$binop37":$binop37,"$binop39":$binop39,"$loadname40":$loadname40,"$binop41":$binop41,"$binop43":$binop43,"$loadname45":$loadname45,"$loadname47":$loadname47,"$binop48":$binop48,"$binop50":$binop50,"$loadname51":$loadname51,"$binop52":$binop52,"$binop54":$binop54,"$loadname56":$loadname56,"$loadname58":$loadname58,"$binop59":$binop59,"$binop61":$binop61,"$loadname63":$loadname63};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',12,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 12;
$currColNo = 0;

var $loadname1=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname1.tp$call)?$loadname1.tp$call([$scope0.$const2],undefined) : Sk.misceval.applyOrSuspend($loadname1,undefined,undefined,undefined,[$scope0.$const2]);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,9); }var $call3=$ret;

$currLineNo = 12;
$currColNo = 9;

$loc.animal=$call3;if (Sk.breakpoints('<stdin>.py',13,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 13;
$currColNo = 0;

var $loadname4=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname4.tp$call)?$loadname4.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname4,undefined,undefined,undefined,[$scope0.$const5]);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,9); }var $call6=$ret;

$currLineNo = 13;
$currColNo = 9;

$loc.colour=$call6;if (Sk.breakpoints('<stdin>.py',14,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 14;
$currColNo = 0;

var $loadname7=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname7.tp$call)?$loadname7.tp$call([$scope0.$const8],undefined) : Sk.misceval.applyOrSuspend($loadname7,undefined,undefined,undefined,[$scope0.$const8]);$blk=6;case 6: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,7); }var $call9=$ret;

$currLineNo = 14;
$currColNo = 7;

$loc.item=$call9;if (Sk.breakpoints('<stdin>.py',15,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 15;
$currColNo = 0;

var $loadname10=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname10.tp$call)?$loadname10.tp$call([$scope0.$const11],undefined) : Sk.misceval.applyOrSuspend($loadname10,undefined,undefined,undefined,[$scope0.$const11]);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,9); }var $call12=$ret;

$currLineNo = 15;
$currColNo = 9;

$loc.number=$call12;if (Sk.breakpoints('<stdin>.py',16,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 16;
$currColNo = 0;

var $loadname13=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname13.tp$call)?$loadname13.tp$call([$scope0.$const14],undefined) : Sk.misceval.applyOrSuspend($loadname13,undefined,undefined,undefined,[$scope0.$const14]);$blk=10;case 10: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,8); }var $call15=$ret;

$currLineNo = 16;
$currColNo = 8;

$loc.celeb=$call15;if (Sk.breakpoints('<stdin>.py',18,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',18,0);$susp.$blk = 11;$susp.optional = true;return $susp;}$blk=11;case 11: 

$currLineNo = 18;
$currColNo = 0;

var $loadname16=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname18=$loc.colour!==undefined?$loc.colour:Sk.misceval.loadname('colour',$gbl);;var $binop19=Sk.abstr.numberBinOp($scope0.$const17,$loadname18,'Add');var $binop21=Sk.abstr.numberBinOp($binop19,$scope0.$const20,'Add');var $loadname22=$loc.animal!==undefined?$loc.animal:Sk.misceval.loadname('animal',$gbl);;var $binop23=Sk.abstr.numberBinOp($binop21,$loadname22,'Add');var $binop25=Sk.abstr.numberBinOp($binop23,$scope0.$const24,'Add');$ret = ($loadname16.tp$call)?$loadname16.tp$call([$binop25],undefined) : Sk.misceval.applyOrSuspend($loadname16,undefined,undefined,undefined,[$binop25]);$blk=12;case 12: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',18,0); }var $call26=$ret;

$currLineNo = 18;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',19,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',19,0);$susp.$blk = 13;$susp.optional = true;return $susp;}$blk=13;case 13: 

$currLineNo = 19;
$currColNo = 0;

var $loadname27=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname29=$loc.number!==undefined?$loc.number:Sk.misceval.loadname('number',$gbl);;var $binop30=Sk.abstr.numberBinOp($scope0.$const28,$loadname29,'Add');var $binop32=Sk.abstr.numberBinOp($binop30,$scope0.$const31,'Add');$ret = ($loadname27.tp$call)?$loadname27.tp$call([$binop32],undefined) : Sk.misceval.applyOrSuspend($loadname27,undefined,undefined,undefined,[$binop32]);$blk=14;case 14: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',19,0); }var $call33=$ret;

$currLineNo = 19;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',20,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,0);$susp.$blk = 15;$susp.optional = true;return $susp;}$blk=15;case 15: 

$currLineNo = 20;
$currColNo = 0;

var $loadname34=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname36=$loc.celeb!==undefined?$loc.celeb:Sk.misceval.loadname('celeb',$gbl);;var $binop37=Sk.abstr.numberBinOp($scope0.$const35,$loadname36,'Add');var $binop39=Sk.abstr.numberBinOp($binop37,$scope0.$const38,'Add');var $loadname40=$loc.animal!==undefined?$loc.animal:Sk.misceval.loadname('animal',$gbl);;var $binop41=Sk.abstr.numberBinOp($binop39,$loadname40,'Add');var $binop43=Sk.abstr.numberBinOp($binop41,$scope0.$const42,'Add');$ret = ($loadname34.tp$call)?$loadname34.tp$call([$binop43],undefined) : Sk.misceval.applyOrSuspend($loadname34,undefined,undefined,undefined,[$binop43]);$blk=16;case 16: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,0); }var $call44=$ret;

$currLineNo = 20;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',21,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',21,0);$susp.$blk = 17;$susp.optional = true;return $susp;}$blk=17;case 17: 

$currLineNo = 21;
$currColNo = 0;

var $loadname45=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname47=$loc.celeb!==undefined?$loc.celeb:Sk.misceval.loadname('celeb',$gbl);;var $binop48=Sk.abstr.numberBinOp($scope0.$const46,$loadname47,'Add');var $binop50=Sk.abstr.numberBinOp($binop48,$scope0.$const49,'Add');var $loadname51=$loc.item!==undefined?$loc.item:Sk.misceval.loadname('item',$gbl);;var $binop52=Sk.abstr.numberBinOp($binop50,$loadname51,'Add');var $binop54=Sk.abstr.numberBinOp($binop52,$scope0.$const53,'Add');$ret = ($loadname45.tp$call)?$loadname45.tp$call([$binop54],undefined) : Sk.misceval.applyOrSuspend($loadname45,undefined,undefined,undefined,[$binop54]);$blk=18;case 18: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,0); }var $call55=$ret;

$currLineNo = 21;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',22,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',22,0);$susp.$blk = 19;$susp.optional = true;return $susp;}$blk=19;case 19: 

$currLineNo = 22;
$currColNo = 0;

var $loadname56=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname58=$loc.item!==undefined?$loc.item:Sk.misceval.loadname('item',$gbl);;var $binop59=Sk.abstr.numberBinOp($scope0.$const57,$loadname58,'Add');var $binop61=Sk.abstr.numberBinOp($binop59,$scope0.$const60,'Add');$ret = ($loadname56.tp$call)?$loadname56.tp$call([$binop61],undefined) : Sk.misceval.applyOrSuspend($loadname56,undefined,undefined,undefined,[$binop61]);$blk=20;case 20: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',22,0); }var $call62=$ret;

$currLineNo = 22;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',23,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',23,0);$susp.$blk = 21;$susp.optional = true;return $susp;}$blk=21;case 21: 

$currLineNo = 23;
$currColNo = 0;

var $loadname63=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname63.tp$call)?$loadname63.tp$call([$scope0.$const64],undefined) : Sk.misceval.applyOrSuspend($loadname63,undefined,undefined,undefined,[$scope0.$const64]);$blk=22;case 22: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',23,0); }var $call65=$ret;

$currLineNo = 23;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const2 = new Sk.builtin.str("Enter an animal: ");$scope0.$const5 = new Sk.builtin.str("Enter a colour: ");$scope0.$const8 = new Sk.builtin.str("Enter an item: ");$scope0.$const11 = new Sk.builtin.str("Enter a number: ");$scope0.$const14 = new Sk.builtin.str("Enter a celebrity: ");$scope0.$const17 = new Sk.builtin.str("Yesterday, when I was walking home, I saw a ");$scope0.$const20 = new Sk.builtin.str(" ");$scope0.$const24 = new Sk.builtin.str("!");$scope0.$const28 = new Sk.builtin.str("I tried to pet it but it growled at me ");$scope0.$const31 = new Sk.builtin.str(" times.");$scope0.$const35 = new Sk.builtin.str("Then, out of nowhere, ");$scope0.$const38 = new Sk.builtin.str(" ran up to us and picked up the ");$scope0.$const42 = new Sk.builtin.str(".");$scope0.$const46 = new Sk.builtin.str("'Sorry, Fluffy is feeling hungry right now!' said ");$scope0.$const49 = new Sk.builtin.str(". 'Please take this ");$scope0.$const53 = new Sk.builtin.str(" as an apology!'");$scope0.$const57 = new Sk.builtin.str("You will treaure that ");$scope0.$const60 = new Sk.builtin.str(" forever!");$scope0.$const64 = new Sk.builtin.str("THE END");
return $scope0;}();
$compiledmod;