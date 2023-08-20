Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname6,$loadname8,$loadname11,$loadname14,$loadname15,$loadname17,$loadname18,$loadname20,$loadname21,$loadname23,$loadname24,$loadname26,$loadname29,$loadname32,$loadname35,$loadname38,$loadname40,$loadname38,$loadname40,$lattr42,$binop43,$binop45,$loadname46,$loadname38,$loadname40,$lattr42,$binop43,$binop45,$loadname46,$lattr48,$binop49,$loadname51,$loadname54,$compareres55,$loadname59,$loadname61,$loadname62,$loadname61,$loadname62,$lattr64,$binop66,$loadname68,$loadname70,$loadname68,$loadname70,$lattr71,$binop72,$loadname74,$loadname77,$loadname80,$loadname82,$loadname85,$loadname88,$loadname91,$loadname94,$loadname96,$compareres97,$loadname100,$compareres101,$loadname105,$compareres106,$loadname110,$loadname113,$loadname116,$compareres117,$loadname120,$loadname122,$loadname123,$loadname122,$loadname123,$lattr124,$binop126,$loadname128,$loadname130,$loadname128,$loadname130,$lattr131,$binop132,$loadname134,$loadname136,$loadname138,$loadname141,$loadname143,$loadname146,$loadname148,$loadname150,$loadname152,$compareres153,$loadname156,$compareres157,$loadname160,$compareres161,$loadname164,$loadname166,$loadname168,$compareres169,$loadname172,$loadname174,$loadname175,$loadname174,$loadname175,$lattr176,$binop178,$loadname180,$loadname182,$loadname180,$loadname182,$lattr183,$binop184,$loadname186,$loadname188,$loadname190,$loadname193,$loadname195,$loadname197,$loadname199,$loadname202,$loadname204,$compareres205,$loadname208,$compareres209,$loadname212,$compareres213,$loadname216,$loadname218,$loadname220,$compareres221,$loadname225,$loadname227,$loadname228,$loadname227,$loadname228,$lattr229,$binop231,$loadname233,$loadname234,$loadname233,$loadname234,$lattr235,$binop236,$loadname238,$loadname240,$loadname242,$loadname245,$loadname247,$loadname249,$loadname251,$loadname254,$loadname256,$compareres257,$loadname260,$compareres261,$loadname264,$compareres265,$loadname268,$loadname270,$loadname272,$compareres273,$loadname278,$compareres279,$loadname282,$compareres283,$loadname286,$compareres287,$loadname291,$loadname292,$loadname291,$loadname292,$lattr294,$binop296,$loadname298,$compareres299,$loadname302,$loadname303,$loadname302,$loadname303,$lattr304,$binop306,$loadname308,$loadname309,$loadname308,$loadname309,$lattr311,$binop313,$loadname315,$loadname318,$loadname320,$loadname322,$loadname323,$loadname322,$loadname323,$lattr324,$binop326;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname6=susp.$tmps.$loadname6;$loadname8=susp.$tmps.$loadname8;$loadname11=susp.$tmps.$loadname11;$loadname14=susp.$tmps.$loadname14;$loadname15=susp.$tmps.$loadname15;$loadname17=susp.$tmps.$loadname17;$loadname18=susp.$tmps.$loadname18;$loadname20=susp.$tmps.$loadname20;$loadname21=susp.$tmps.$loadname21;$loadname23=susp.$tmps.$loadname23;$loadname24=susp.$tmps.$loadname24;$loadname26=susp.$tmps.$loadname26;$loadname29=susp.$tmps.$loadname29;$loadname32=susp.$tmps.$loadname32;$loadname35=susp.$tmps.$loadname35;$loadname38=susp.$tmps.$loadname38;$loadname40=susp.$tmps.$loadname40;$lattr42=susp.$tmps.$lattr42;$binop43=susp.$tmps.$binop43;$binop45=susp.$tmps.$binop45;$loadname46=susp.$tmps.$loadname46;$lattr48=susp.$tmps.$lattr48;$binop49=susp.$tmps.$binop49;$loadname51=susp.$tmps.$loadname51;$loadname54=susp.$tmps.$loadname54;$compareres55=susp.$tmps.$compareres55;$loadname59=susp.$tmps.$loadname59;$loadname61=susp.$tmps.$loadname61;$loadname62=susp.$tmps.$loadname62;$lattr64=susp.$tmps.$lattr64;$binop66=susp.$tmps.$binop66;$loadname68=susp.$tmps.$loadname68;$loadname70=susp.$tmps.$loadname70;$lattr71=susp.$tmps.$lattr71;$binop72=susp.$tmps.$binop72;$loadname74=susp.$tmps.$loadname74;$loadname77=susp.$tmps.$loadname77;$loadname80=susp.$tmps.$loadname80;$loadname82=susp.$tmps.$loadname82;$loadname85=susp.$tmps.$loadname85;$loadname88=susp.$tmps.$loadname88;$loadname91=susp.$tmps.$loadname91;$loadname94=susp.$tmps.$loadname94;$loadname96=susp.$tmps.$loadname96;$compareres97=susp.$tmps.$compareres97;$loadname100=susp.$tmps.$loadname100;$compareres101=susp.$tmps.$compareres101;$loadname105=susp.$tmps.$loadname105;$compareres106=susp.$tmps.$compareres106;$loadname110=susp.$tmps.$loadname110;$loadname113=susp.$tmps.$loadname113;$loadname116=susp.$tmps.$loadname116;$compareres117=susp.$tmps.$compareres117;$loadname120=susp.$tmps.$loadname120;$loadname122=susp.$tmps.$loadname122;$loadname123=susp.$tmps.$loadname123;$lattr124=susp.$tmps.$lattr124;$binop126=susp.$tmps.$binop126;$loadname128=susp.$tmps.$loadname128;$loadname130=susp.$tmps.$loadname130;$lattr131=susp.$tmps.$lattr131;$binop132=susp.$tmps.$binop132;$loadname134=susp.$tmps.$loadname134;$loadname136=susp.$tmps.$loadname136;$loadname138=susp.$tmps.$loadname138;$loadname141=susp.$tmps.$loadname141;$loadname143=susp.$tmps.$loadname143;$loadname146=susp.$tmps.$loadname146;$loadname148=susp.$tmps.$loadname148;$loadname150=susp.$tmps.$loadname150;$loadname152=susp.$tmps.$loadname152;$compareres153=susp.$tmps.$compareres153;$loadname156=susp.$tmps.$loadname156;$compareres157=susp.$tmps.$compareres157;$loadname160=susp.$tmps.$loadname160;$compareres161=susp.$tmps.$compareres161;$loadname164=susp.$tmps.$loadname164;$loadname166=susp.$tmps.$loadname166;$loadname168=susp.$tmps.$loadname168;$compareres169=susp.$tmps.$compareres169;$loadname172=susp.$tmps.$loadname172;$loadname174=susp.$tmps.$loadname174;$loadname175=susp.$tmps.$loadname175;$lattr176=susp.$tmps.$lattr176;$binop178=susp.$tmps.$binop178;$loadname180=susp.$tmps.$loadname180;$loadname182=susp.$tmps.$loadname182;$lattr183=susp.$tmps.$lattr183;$binop184=susp.$tmps.$binop184;$loadname186=susp.$tmps.$loadname186;$loadname188=susp.$tmps.$loadname188;$loadname190=susp.$tmps.$loadname190;$loadname193=susp.$tmps.$loadname193;$loadname195=susp.$tmps.$loadname195;$loadname197=susp.$tmps.$loadname197;$loadname199=susp.$tmps.$loadname199;$loadname202=susp.$tmps.$loadname202;$loadname204=susp.$tmps.$loadname204;$compareres205=susp.$tmps.$compareres205;$loadname208=susp.$tmps.$loadname208;$compareres209=susp.$tmps.$compareres209;$loadname212=susp.$tmps.$loadname212;$compareres213=susp.$tmps.$compareres213;$loadname216=susp.$tmps.$loadname216;$loadname218=susp.$tmps.$loadname218;$loadname220=susp.$tmps.$loadname220;$compareres221=susp.$tmps.$compareres221;$loadname225=susp.$tmps.$loadname225;$loadname227=susp.$tmps.$loadname227;$loadname228=susp.$tmps.$loadname228;$lattr229=susp.$tmps.$lattr229;$binop231=susp.$tmps.$binop231;$loadname233=susp.$tmps.$loadname233;$loadname234=susp.$tmps.$loadname234;$lattr235=susp.$tmps.$lattr235;$binop236=susp.$tmps.$binop236;$loadname238=susp.$tmps.$loadname238;$loadname240=susp.$tmps.$loadname240;$loadname242=susp.$tmps.$loadname242;$loadname245=susp.$tmps.$loadname245;$loadname247=susp.$tmps.$loadname247;$loadname249=susp.$tmps.$loadname249;$loadname251=susp.$tmps.$loadname251;$loadname254=susp.$tmps.$loadname254;$loadname256=susp.$tmps.$loadname256;$compareres257=susp.$tmps.$compareres257;$loadname260=susp.$tmps.$loadname260;$compareres261=susp.$tmps.$compareres261;$loadname264=susp.$tmps.$loadname264;$compareres265=susp.$tmps.$compareres265;$loadname268=susp.$tmps.$loadname268;$loadname270=susp.$tmps.$loadname270;$loadname272=susp.$tmps.$loadname272;$compareres273=susp.$tmps.$compareres273;$loadname278=susp.$tmps.$loadname278;$compareres279=susp.$tmps.$compareres279;$loadname282=susp.$tmps.$loadname282;$compareres283=susp.$tmps.$compareres283;$loadname286=susp.$tmps.$loadname286;$compareres287=susp.$tmps.$compareres287;$loadname291=susp.$tmps.$loadname291;$loadname292=susp.$tmps.$loadname292;$lattr294=susp.$tmps.$lattr294;$binop296=susp.$tmps.$binop296;$loadname298=susp.$tmps.$loadname298;$compareres299=susp.$tmps.$compareres299;$loadname302=susp.$tmps.$loadname302;$loadname303=susp.$tmps.$loadname303;$lattr304=susp.$tmps.$lattr304;$binop306=susp.$tmps.$binop306;$loadname308=susp.$tmps.$loadname308;$loadname309=susp.$tmps.$loadname309;$lattr311=susp.$tmps.$lattr311;$binop313=susp.$tmps.$binop313;$loadname315=susp.$tmps.$loadname315;$loadname318=susp.$tmps.$loadname318;$loadname320=susp.$tmps.$loadname320;$loadname322=susp.$tmps.$loadname322;$loadname323=susp.$tmps.$loadname323;$lattr324=susp.$tmps.$lattr324;$binop326=susp.$tmps.$binop326;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname6":$loadname6,"$loadname8":$loadname8,"$loadname11":$loadname11,"$loadname14":$loadname14,"$loadname15":$loadname15,"$loadname17":$loadname17,"$loadname18":$loadname18,"$loadname20":$loadname20,"$loadname21":$loadname21,"$loadname23":$loadname23,"$loadname24":$loadname24,"$loadname26":$loadname26,"$loadname29":$loadname29,"$loadname32":$loadname32,"$loadname35":$loadname35,"$loadname38":$loadname38,"$loadname40":$loadname40,"$lattr42":$lattr42,"$binop43":$binop43,"$binop45":$binop45,"$loadname46":$loadname46,"$lattr48":$lattr48,"$binop49":$binop49,"$loadname51":$loadname51,"$loadname54":$loadname54,"$compareres55":$compareres55,"$loadname59":$loadname59,"$loadname61":$loadname61,"$loadname62":$loadname62,"$lattr64":$lattr64,"$binop66":$binop66,"$loadname68":$loadname68,"$loadname70":$loadname70,"$lattr71":$lattr71,"$binop72":$binop72,"$loadname74":$loadname74,"$loadname77":$loadname77,"$loadname80":$loadname80,"$loadname82":$loadname82,"$loadname85":$loadname85,"$loadname88":$loadname88,"$loadname91":$loadname91,"$loadname94":$loadname94,"$loadname96":$loadname96,"$compareres97":$compareres97,"$loadname100":$loadname100,"$compareres101":$compareres101,"$loadname105":$loadname105,"$compareres106":$compareres106,"$loadname110":$loadname110,"$loadname113":$loadname113,"$loadname116":$loadname116,"$compareres117":$compareres117,"$loadname120":$loadname120,"$loadname122":$loadname122,"$loadname123":$loadname123,"$lattr124":$lattr124,"$binop126":$binop126,"$loadname128":$loadname128,"$loadname130":$loadname130,"$lattr131":$lattr131,"$binop132":$binop132,"$loadname134":$loadname134,"$loadname136":$loadname136,"$loadname138":$loadname138,"$loadname141":$loadname141,"$loadname143":$loadname143,"$loadname146":$loadname146,"$loadname148":$loadname148,"$loadname150":$loadname150,"$loadname152":$loadname152,"$compareres153":$compareres153,"$loadname156":$loadname156,"$compareres157":$compareres157,"$loadname160":$loadname160,"$compareres161":$compareres161,"$loadname164":$loadname164,"$loadname166":$loadname166,"$loadname168":$loadname168,"$compareres169":$compareres169,"$loadname172":$loadname172,"$loadname174":$loadname174,"$loadname175":$loadname175,"$lattr176":$lattr176,"$binop178":$binop178,"$loadname180":$loadname180,"$loadname182":$loadname182,"$lattr183":$lattr183,"$binop184":$binop184,"$loadname186":$loadname186,"$loadname188":$loadname188,"$loadname190":$loadname190,"$loadname193":$loadname193,"$loadname195":$loadname195,"$loadname197":$loadname197,"$loadname199":$loadname199,"$loadname202":$loadname202,"$loadname204":$loadname204,"$compareres205":$compareres205,"$loadname208":$loadname208,"$compareres209":$compareres209,"$loadname212":$loadname212,"$compareres213":$compareres213,"$loadname216":$loadname216,"$loadname218":$loadname218,"$loadname220":$loadname220,"$compareres221":$compareres221,"$loadname225":$loadname225,"$loadname227":$loadname227,"$loadname228":$loadname228,"$lattr229":$lattr229,"$binop231":$binop231,"$loadname233":$loadname233,"$loadname234":$loadname234,"$lattr235":$lattr235,"$binop236":$binop236,"$loadname238":$loadname238,"$loadname240":$loadname240,"$loadname242":$loadname242,"$loadname245":$loadname245,"$loadname247":$loadname247,"$loadname249":$loadname249,"$loadname251":$loadname251,"$loadname254":$loadname254,"$loadname256":$loadname256,"$compareres257":$compareres257,"$loadname260":$loadname260,"$compareres261":$compareres261,"$loadname264":$loadname264,"$compareres265":$compareres265,"$loadname268":$loadname268,"$loadname270":$loadname270,"$loadname272":$loadname272,"$compareres273":$compareres273,"$loadname278":$loadname278,"$compareres279":$compareres279,"$loadname282":$loadname282,"$compareres283":$compareres283,"$loadname286":$loadname286,"$compareres287":$compareres287,"$loadname291":$loadname291,"$loadname292":$loadname292,"$lattr294":$lattr294,"$binop296":$binop296,"$loadname298":$loadname298,"$compareres299":$compareres299,"$loadname302":$loadname302,"$loadname303":$loadname303,"$lattr304":$lattr304,"$binop306":$binop306,"$loadname308":$loadname308,"$loadname309":$loadname309,"$lattr311":$lattr311,"$binop313":$binop313,"$loadname315":$loadname315,"$loadname318":$loadname318,"$loadname320":$loadname320,"$loadname322":$loadname322,"$loadname323":$loadname323,"$lattr324":$lattr324,"$binop326":$binop326};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$ret = Sk.builtin.__import__('goodies',$gbl,$loc,['*'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;Sk.importStar($module1,$loc, $gbl);if (Sk.breakpoints('<stdin>.py',4,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',4,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 4;
$currColNo = 0;

$loc.head=$scope0.$const2;if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 4;$susp.optional = true;return $susp;}$blk=4;case 4: 

$currLineNo = 5;
$currColNo = 0;

$loc.body=$scope0.$const3;if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 6;
$currColNo = 0;

$loc.legs=$scope0.$const4;if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 6;$susp.optional = true;return $susp;}$blk=6;case 6: 

$currLineNo = 7;
$currColNo = 0;

$loc.feet=$scope0.$const5;if (Sk.breakpoints('<stdin>.py',9,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',9,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 9;
$currColNo = 0;

$blk=8;case 8: if (Sk.breakpoints('<stdin>.py',9,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',9,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: $blk=10;case 10: if (Sk.breakpoints('<stdin>.py',10,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,0);$susp.$blk = 11;$susp.optional = true;return $susp;}$blk=11;case 11: 

$currLineNo = 10;
$currColNo = 0;

var $loadname6=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname6.tp$call)?$loadname6.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname6,undefined,undefined,undefined,[]);$blk=12;case 12: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',10,0); }var $call7=$ret;

$currLineNo = 10;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',11,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,0);$susp.$blk = 13;$susp.optional = true;return $susp;}$blk=13;case 13: 

$currLineNo = 11;
$currColNo = 0;

var $loadname8=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname8.tp$call)?$loadname8.tp$call([$scope0.$const9],undefined) : Sk.misceval.applyOrSuspend($loadname8,undefined,undefined,undefined,[$scope0.$const9]);$blk=14;case 14: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,0); }var $call10=$ret;

$currLineNo = 11;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',12,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',12,0);$susp.$blk = 15;$susp.optional = true;return $susp;}$blk=15;case 15: 

$currLineNo = 12;
$currColNo = 0;

var $loadname11=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname11.tp$call)?$loadname11.tp$call([$scope0.$const12],undefined) : Sk.misceval.applyOrSuspend($loadname11,undefined,undefined,undefined,[$scope0.$const12]);$blk=16;case 16: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',12,0); }var $call13=$ret;

$currLineNo = 12;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',13,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',13,0);$susp.$blk = 17;$susp.optional = true;return $susp;}$blk=17;case 17: 

$currLineNo = 13;
$currColNo = 0;

var $loadname14=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;var $loadname15=$loc.head!==undefined?$loc.head:Sk.misceval.loadname('head',$gbl);;$ret = ($loadname14.tp$call)?$loadname14.tp$call([$loadname15],undefined) : Sk.misceval.applyOrSuspend($loadname14,undefined,undefined,undefined,[$loadname15]);$blk=18;case 18: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',13,0); }var $call16=$ret;

$currLineNo = 13;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',14,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,0);$susp.$blk = 19;$susp.optional = true;return $susp;}$blk=19;case 19: 

$currLineNo = 14;
$currColNo = 0;

var $loadname17=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;var $loadname18=$loc.body!==undefined?$loc.body:Sk.misceval.loadname('body',$gbl);;$ret = ($loadname17.tp$call)?$loadname17.tp$call([$loadname18],undefined) : Sk.misceval.applyOrSuspend($loadname17,undefined,undefined,undefined,[$loadname18]);$blk=20;case 20: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,0); }var $call19=$ret;

$currLineNo = 14;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',15,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,0);$susp.$blk = 21;$susp.optional = true;return $susp;}$blk=21;case 21: 

$currLineNo = 15;
$currColNo = 0;

var $loadname20=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;var $loadname21=$loc.legs!==undefined?$loc.legs:Sk.misceval.loadname('legs',$gbl);;$ret = ($loadname20.tp$call)?$loadname20.tp$call([$loadname21],undefined) : Sk.misceval.applyOrSuspend($loadname20,undefined,undefined,undefined,[$loadname21]);$blk=22;case 22: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,0); }var $call22=$ret;

$currLineNo = 15;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',16,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,0);$susp.$blk = 23;$susp.optional = true;return $susp;}$blk=23;case 23: 

$currLineNo = 16;
$currColNo = 0;

var $loadname23=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;var $loadname24=$loc.feet!==undefined?$loc.feet:Sk.misceval.loadname('feet',$gbl);;$ret = ($loadname23.tp$call)?$loadname23.tp$call([$loadname24],undefined) : Sk.misceval.applyOrSuspend($loadname23,undefined,undefined,undefined,[$loadname24]);$blk=24;case 24: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,0); }var $call25=$ret;

$currLineNo = 16;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',18,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',18,0);$susp.$blk = 25;$susp.optional = true;return $susp;}$blk=25;case 25: 

$currLineNo = 18;
$currColNo = 0;

var $loadname26=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname26.tp$call)?$loadname26.tp$call([$scope0.$const27],undefined) : Sk.misceval.applyOrSuspend($loadname26,undefined,undefined,undefined,[$scope0.$const27]);$blk=26;case 26: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',18,0); }var $call28=$ret;

$currLineNo = 18;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',19,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',19,0);$susp.$blk = 27;$susp.optional = true;return $susp;}$blk=27;case 27: 

$currLineNo = 19;
$currColNo = 0;

var $loadname29=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname29.tp$call)?$loadname29.tp$call([$scope0.$const30],undefined) : Sk.misceval.applyOrSuspend($loadname29,undefined,undefined,undefined,[$scope0.$const30]);$blk=28;case 28: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',19,0); }var $call31=$ret;

$currLineNo = 19;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',20,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,0);$susp.$blk = 29;$susp.optional = true;return $susp;}$blk=29;case 29: 

$currLineNo = 20;
$currColNo = 0;

var $loadname32=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname32.tp$call)?$loadname32.tp$call([$scope0.$const33],undefined) : Sk.misceval.applyOrSuspend($loadname32,undefined,undefined,undefined,[$scope0.$const33]);$blk=30;case 30: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,0); }var $call34=$ret;

$currLineNo = 20;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',21,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',21,0);$susp.$blk = 31;$susp.optional = true;return $susp;}$blk=31;case 31: 

$currLineNo = 21;
$currColNo = 0;

var $loadname35=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname35.tp$call)?$loadname35.tp$call([$scope0.$const36],undefined) : Sk.misceval.applyOrSuspend($loadname35,undefined,undefined,undefined,[$scope0.$const36]);$blk=32;case 32: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,0); }var $call37=$ret;

$currLineNo = 21;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',22,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',22,0);$susp.$blk = 33;$susp.optional = true;return $susp;}$blk=33;case 33: 

$currLineNo = 22;
$currColNo = 0;

var $loadname38=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname40=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname40.tp$getattr($scope0.$const41, true);$blk=34;case 34: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',22,14); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname40.sk$attrError() + " has no attribute '" + $scope0.$const41.$jsstr() + "'");
};var $lattr42=$ret;var $binop43=Sk.abstr.numberBinOp($scope0.$const39,$lattr42,'Add');var $binop45=Sk.abstr.numberBinOp($binop43,$scope0.$const44,'Add');var $loadname46=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname46.tp$getattr($scope0.$const47, true);$blk=35;case 35: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',22,56); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname46.sk$attrError() + " has no attribute '" + $scope0.$const47.$jsstr() + "'");
};var $lattr48=$ret;var $binop49=Sk.abstr.numberBinOp($binop45,$lattr48,'Add');$ret = ($loadname38.tp$call)?$loadname38.tp$call([$binop49],undefined) : Sk.misceval.applyOrSuspend($loadname38,undefined,undefined,undefined,[$binop49]);$blk=36;case 36: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',22,0); }var $call50=$ret;

$currLineNo = 22;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',24,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',24,0);$susp.$blk = 37;$susp.optional = true;return $susp;}$blk=37;case 37: 

$currLineNo = 24;
$currColNo = 0;

var $loadname51=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname51.tp$call)?$loadname51.tp$call([$scope0.$const52],undefined) : Sk.misceval.applyOrSuspend($loadname51,undefined,undefined,undefined,[$scope0.$const52]);$blk=38;case 38: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',24,9); }var $call53=$ret;

$currLineNo = 24;
$currColNo = 9;

$loc.choice=$call53;if (Sk.breakpoints('<stdin>.py',25,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',25,0);$susp.$blk = 39;$susp.optional = true;return $susp;}$blk=39;case 39: 

$currLineNo = 25;
$currColNo = 0;

var $loadname54=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres55=null;$ret = Sk.misceval.richCompareBool($loadname54,$scope0.$const56,'Eq', true);$blk=43;case 43: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',25,3); }$compareres55=Sk.builtin.bool($ret);var $jfalse57=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse57){$blk=42;continue;}$blk=42;case 42: var $jfalse58=($compareres55===false||!Sk.misceval.isTrue($compareres55));if($jfalse58){$blk=41;continue;}if (Sk.breakpoints('<stdin>.py',26,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',26,4);$susp.$blk = 44;$susp.optional = true;return $susp;}$blk=44;case 44: 

$currLineNo = 26;
$currColNo = 4;

$blk=45;case 45: if (Sk.breakpoints('<stdin>.py',26,4)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',26,4);$susp.$blk = 46;$susp.optional = true;return $susp;}$blk=46;case 46: $blk=47;case 47: if (Sk.breakpoints('<stdin>.py',27,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',27,4);$susp.$blk = 48;$susp.optional = true;return $susp;}$blk=48;case 48: 

$currLineNo = 27;
$currColNo = 4;

var $loadname59=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname59.tp$call)?$loadname59.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname59,undefined,undefined,undefined,[]);$blk=49;case 49: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',27,4); }var $call60=$ret;

$currLineNo = 27;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',28,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',28,4);$susp.$blk = 50;$susp.optional = true;return $susp;}$blk=50;case 50: 

$currLineNo = 28;
$currColNo = 4;

var $loadname61=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname62=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname62.tp$getattr($scope0.$const63, true);$blk=51;case 51: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',28,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname62.sk$attrError() + " has no attribute '" + $scope0.$const63.$jsstr() + "'");
};var $lattr64=$ret;var $binop66=Sk.abstr.numberBinOp($lattr64,$scope0.$const65,'Add');$ret = ($loadname61.tp$call)?$loadname61.tp$call([$binop66],undefined) : Sk.misceval.applyOrSuspend($loadname61,undefined,undefined,undefined,[$binop66]);$blk=52;case 52: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',28,4); }var $call67=$ret;

$currLineNo = 28;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',29,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',29,4);$susp.$blk = 53;$susp.optional = true;return $susp;}$blk=53;case 53: 

$currLineNo = 29;
$currColNo = 4;

var $loadname68=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname70=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname70.tp$getattr($scope0.$const47, true);$blk=54;case 54: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',29,39); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname70.sk$attrError() + " has no attribute '" + $scope0.$const47.$jsstr() + "'");
};var $lattr71=$ret;var $binop72=Sk.abstr.numberBinOp($scope0.$const69,$lattr71,'Add');$ret = ($loadname68.tp$call)?$loadname68.tp$call([$binop72],undefined) : Sk.misceval.applyOrSuspend($loadname68,undefined,undefined,undefined,[$binop72]);$blk=55;case 55: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',29,4); }var $call73=$ret;

$currLineNo = 29;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',30,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',30,4);$susp.$blk = 56;$susp.optional = true;return $susp;}$blk=56;case 56: 

$currLineNo = 30;
$currColNo = 4;

var $loadname74=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname74.tp$call)?$loadname74.tp$call([$scope0.$const75],undefined) : Sk.misceval.applyOrSuspend($loadname74,undefined,undefined,undefined,[$scope0.$const75]);$blk=57;case 57: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',30,4); }var $call76=$ret;

$currLineNo = 30;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',31,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',31,4);$susp.$blk = 58;$susp.optional = true;return $susp;}$blk=58;case 58: 

$currLineNo = 31;
$currColNo = 4;

var $loadname77=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname77.tp$call)?$loadname77.tp$call([$scope0.$const78],undefined) : Sk.misceval.applyOrSuspend($loadname77,undefined,undefined,undefined,[$scope0.$const78]);$blk=59;case 59: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',31,4); }var $call79=$ret;

$currLineNo = 31;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',32,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',32,4);$susp.$blk = 60;$susp.optional = true;return $susp;}$blk=60;case 60: 

$currLineNo = 32;
$currColNo = 4;

var $loadname80=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname80.tp$call)?$loadname80.tp$call([$scope0.$const2],undefined) : Sk.misceval.applyOrSuspend($loadname80,undefined,undefined,undefined,[$scope0.$const2]);$blk=61;case 61: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',32,4); }var $call81=$ret;

$currLineNo = 32;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',33,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',33,4);$susp.$blk = 62;$susp.optional = true;return $susp;}$blk=62;case 62: 

$currLineNo = 33;
$currColNo = 4;

var $loadname82=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname82.tp$call)?$loadname82.tp$call([$scope0.$const83],undefined) : Sk.misceval.applyOrSuspend($loadname82,undefined,undefined,undefined,[$scope0.$const83]);$blk=63;case 63: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',33,4); }var $call84=$ret;

$currLineNo = 33;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',34,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',34,4);$susp.$blk = 64;$susp.optional = true;return $susp;}$blk=64;case 64: 

$currLineNo = 34;
$currColNo = 4;

var $loadname85=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname85.tp$call)?$loadname85.tp$call([$scope0.$const86],undefined) : Sk.misceval.applyOrSuspend($loadname85,undefined,undefined,undefined,[$scope0.$const86]);$blk=65;case 65: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',34,4); }var $call87=$ret;

$currLineNo = 34;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',35,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',35,4);$susp.$blk = 66;$susp.optional = true;return $susp;}$blk=66;case 66: 

$currLineNo = 35;
$currColNo = 4;

var $loadname88=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname88.tp$call)?$loadname88.tp$call([$scope0.$const89],undefined) : Sk.misceval.applyOrSuspend($loadname88,undefined,undefined,undefined,[$scope0.$const89]);$blk=67;case 67: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',35,4); }var $call90=$ret;

$currLineNo = 35;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',36,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',36,4);$susp.$blk = 68;$susp.optional = true;return $susp;}$blk=68;case 68: 

$currLineNo = 36;
$currColNo = 4;

var $loadname91=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname91.tp$call)?$loadname91.tp$call([$scope0.$const92],undefined) : Sk.misceval.applyOrSuspend($loadname91,undefined,undefined,undefined,[$scope0.$const92]);$blk=69;case 69: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',36,4); }var $call93=$ret;

$currLineNo = 36;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',37,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',37,4);$susp.$blk = 70;$susp.optional = true;return $susp;}$blk=70;case 70: 

$currLineNo = 37;
$currColNo = 4;

var $loadname94=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname94.tp$call)?$loadname94.tp$call([$scope0.$const52],undefined) : Sk.misceval.applyOrSuspend($loadname94,undefined,undefined,undefined,[$scope0.$const52]);$blk=71;case 71: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',37,13); }var $call95=$ret;

$currLineNo = 37;
$currColNo = 13;

$loc.choice=$call95;if (Sk.breakpoints('<stdin>.py',38,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',38,4);$susp.$blk = 72;$susp.optional = true;return $susp;}$blk=72;case 72: 

$currLineNo = 38;
$currColNo = 4;

var $loadname96=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres97=null;$ret = Sk.misceval.richCompareBool($loadname96,$scope0.$const56,'Eq', true);$blk=76;case 76: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',38,7); }$compareres97=Sk.builtin.bool($ret);var $jfalse98=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse98){$blk=75;continue;}$blk=75;case 75: var $jfalse99=($compareres97===false||!Sk.misceval.isTrue($compareres97));if($jfalse99){$blk=74;continue;}if (Sk.breakpoints('<stdin>.py',39,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',39,8);$susp.$blk = 77;$susp.optional = true;return $susp;}$blk=77;case 77: 

$currLineNo = 39;
$currColNo = 8;

$loc.head=$scope0.$const2;$blk=73;case 73: $blk=40;case 40: if (Sk.breakpoints('<stdin>.py',135,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',135,0);$susp.$blk = 304;$susp.optional = true;return $susp;}$blk=304;case 304: 

$currLineNo = 135;
$currColNo = 0;

$blk=8; continue;if (Sk.breakpoints('<stdin>.py',137,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',137,0);$susp.$blk = 305;$susp.optional = true;return $susp;}$blk=305; continue;case 41: if (Sk.breakpoints('<stdin>.py',48,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',48,5);$susp.$blk = 95;$susp.optional = true;return $susp;}$blk=95;case 95: 

$currLineNo = 48;
$currColNo = 5;

var $loadname116=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres117=null;$ret = Sk.misceval.richCompareBool($loadname116,$scope0.$const102,'Eq', true);$blk=99;case 99: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',48,5); }$compareres117=Sk.builtin.bool($ret);var $jfalse118=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse118){$blk=98;continue;}$blk=98;case 98: var $jfalse119=($compareres117===false||!Sk.misceval.isTrue($compareres117));if($jfalse119){$blk=97;continue;}if (Sk.breakpoints('<stdin>.py',49,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',49,4);$susp.$blk = 100;$susp.optional = true;return $susp;}$blk=100;case 100: 

$currLineNo = 49;
$currColNo = 4;

$blk=101;case 101: if (Sk.breakpoints('<stdin>.py',49,4)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',49,4);$susp.$blk = 102;$susp.optional = true;return $susp;}$blk=102;case 102: $blk=103;case 103: if (Sk.breakpoints('<stdin>.py',50,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',50,4);$susp.$blk = 104;$susp.optional = true;return $susp;}$blk=104;case 104: 

$currLineNo = 50;
$currColNo = 4;

var $loadname120=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname120.tp$call)?$loadname120.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname120,undefined,undefined,undefined,[]);$blk=105;case 105: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',50,4); }var $call121=$ret;

$currLineNo = 50;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',51,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',51,4);$susp.$blk = 106;$susp.optional = true;return $susp;}$blk=106;case 106: 

$currLineNo = 51;
$currColNo = 4;

var $loadname122=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname123=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname123.tp$getattr($scope0.$const63, true);$blk=107;case 107: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',51,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname123.sk$attrError() + " has no attribute '" + $scope0.$const63.$jsstr() + "'");
};var $lattr124=$ret;var $binop126=Sk.abstr.numberBinOp($lattr124,$scope0.$const125,'Add');$ret = ($loadname122.tp$call)?$loadname122.tp$call([$binop126],undefined) : Sk.misceval.applyOrSuspend($loadname122,undefined,undefined,undefined,[$binop126]);$blk=108;case 108: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',51,4); }var $call127=$ret;

$currLineNo = 51;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',52,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',52,4);$susp.$blk = 109;$susp.optional = true;return $susp;}$blk=109;case 109: 

$currLineNo = 52;
$currColNo = 4;

var $loadname128=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname130=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname130.tp$getattr($scope0.$const47, true);$blk=110;case 110: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',52,38); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname130.sk$attrError() + " has no attribute '" + $scope0.$const47.$jsstr() + "'");
};var $lattr131=$ret;var $binop132=Sk.abstr.numberBinOp($scope0.$const129,$lattr131,'Add');$ret = ($loadname128.tp$call)?$loadname128.tp$call([$binop132],undefined) : Sk.misceval.applyOrSuspend($loadname128,undefined,undefined,undefined,[$binop132]);$blk=111;case 111: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',52,4); }var $call133=$ret;

$currLineNo = 52;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',53,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',53,4);$susp.$blk = 112;$susp.optional = true;return $susp;}$blk=112;case 112: 

$currLineNo = 53;
$currColNo = 4;

var $loadname134=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname134.tp$call)?$loadname134.tp$call([$scope0.$const75],undefined) : Sk.misceval.applyOrSuspend($loadname134,undefined,undefined,undefined,[$scope0.$const75]);$blk=113;case 113: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',53,4); }var $call135=$ret;

$currLineNo = 53;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',54,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',54,4);$susp.$blk = 114;$susp.optional = true;return $susp;}$blk=114;case 114: 

$currLineNo = 54;
$currColNo = 4;

var $loadname136=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname136.tp$call)?$loadname136.tp$call([$scope0.$const78],undefined) : Sk.misceval.applyOrSuspend($loadname136,undefined,undefined,undefined,[$scope0.$const78]);$blk=115;case 115: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',54,4); }var $call137=$ret;

$currLineNo = 54;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',55,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',55,4);$susp.$blk = 116;$susp.optional = true;return $susp;}$blk=116;case 116: 

$currLineNo = 55;
$currColNo = 4;

var $loadname138=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname138.tp$call)?$loadname138.tp$call([$scope0.$const139],undefined) : Sk.misceval.applyOrSuspend($loadname138,undefined,undefined,undefined,[$scope0.$const139]);$blk=117;case 117: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',55,4); }var $call140=$ret;

$currLineNo = 55;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',56,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',56,4);$susp.$blk = 118;$susp.optional = true;return $susp;}$blk=118;case 118: 

$currLineNo = 56;
$currColNo = 4;

var $loadname141=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname141.tp$call)?$loadname141.tp$call([$scope0.$const83],undefined) : Sk.misceval.applyOrSuspend($loadname141,undefined,undefined,undefined,[$scope0.$const83]);$blk=119;case 119: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',56,4); }var $call142=$ret;

$currLineNo = 56;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',57,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',57,4);$susp.$blk = 120;$susp.optional = true;return $susp;}$blk=120;case 120: 

$currLineNo = 57;
$currColNo = 4;

var $loadname143=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname143.tp$call)?$loadname143.tp$call([$scope0.$const144],undefined) : Sk.misceval.applyOrSuspend($loadname143,undefined,undefined,undefined,[$scope0.$const144]);$blk=121;case 121: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',57,4); }var $call145=$ret;

$currLineNo = 57;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',58,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',58,4);$susp.$blk = 122;$susp.optional = true;return $susp;}$blk=122;case 122: 

$currLineNo = 58;
$currColNo = 4;

var $loadname146=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname146.tp$call)?$loadname146.tp$call([$scope0.$const89],undefined) : Sk.misceval.applyOrSuspend($loadname146,undefined,undefined,undefined,[$scope0.$const89]);$blk=123;case 123: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',58,4); }var $call147=$ret;

$currLineNo = 58;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',59,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',59,4);$susp.$blk = 124;$susp.optional = true;return $susp;}$blk=124;case 124: 

$currLineNo = 59;
$currColNo = 4;

var $loadname148=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname148.tp$call)?$loadname148.tp$call([$scope0.$const3],undefined) : Sk.misceval.applyOrSuspend($loadname148,undefined,undefined,undefined,[$scope0.$const3]);$blk=125;case 125: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',59,4); }var $call149=$ret;

$currLineNo = 59;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',60,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',60,4);$susp.$blk = 126;$susp.optional = true;return $susp;}$blk=126;case 126: 

$currLineNo = 60;
$currColNo = 4;

var $loadname150=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname150.tp$call)?$loadname150.tp$call([$scope0.$const52],undefined) : Sk.misceval.applyOrSuspend($loadname150,undefined,undefined,undefined,[$scope0.$const52]);$blk=127;case 127: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',60,13); }var $call151=$ret;

$currLineNo = 60;
$currColNo = 13;

$loc.choice=$call151;if (Sk.breakpoints('<stdin>.py',61,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',61,4);$susp.$blk = 128;$susp.optional = true;return $susp;}$blk=128;case 128: 

$currLineNo = 61;
$currColNo = 4;

var $loadname152=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres153=null;$ret = Sk.misceval.richCompareBool($loadname152,$scope0.$const56,'Eq', true);$blk=132;case 132: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',61,7); }$compareres153=Sk.builtin.bool($ret);var $jfalse154=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse154){$blk=131;continue;}$blk=131;case 131: var $jfalse155=($compareres153===false||!Sk.misceval.isTrue($compareres153));if($jfalse155){$blk=130;continue;}if (Sk.breakpoints('<stdin>.py',62,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',62,8);$susp.$blk = 133;$susp.optional = true;return $susp;}$blk=133;case 133: 

$currLineNo = 62;
$currColNo = 8;

$loc.body=$scope0.$const139;$blk=129;case 129: $blk=96;case 96: $blk=40; continue;case 74: if (Sk.breakpoints('<stdin>.py',40,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',40,9);$susp.$blk = 78;$susp.optional = true;return $susp;}$blk=78;case 78: 

$currLineNo = 40;
$currColNo = 9;

var $loadname100=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres101=null;$ret = Sk.misceval.richCompareBool($loadname100,$scope0.$const102,'Eq', true);$blk=82;case 82: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',40,9); }$compareres101=Sk.builtin.bool($ret);var $jfalse103=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse103){$blk=81;continue;}$blk=81;case 81: var $jfalse104=($compareres101===false||!Sk.misceval.isTrue($compareres101));if($jfalse104){$blk=80;continue;}if (Sk.breakpoints('<stdin>.py',41,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',41,8);$susp.$blk = 83;$susp.optional = true;return $susp;}$blk=83;case 83: 

$currLineNo = 41;
$currColNo = 8;

$loc.head=$scope0.$const86;$blk=79;case 79: $blk=73; continue;case 80: if (Sk.breakpoints('<stdin>.py',42,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',42,9);$susp.$blk = 84;$susp.optional = true;return $susp;}$blk=84;case 84: 

$currLineNo = 42;
$currColNo = 9;

var $loadname105=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres106=null;$ret = Sk.misceval.richCompareBool($loadname105,$scope0.$const107,'Eq', true);$blk=88;case 88: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',42,9); }$compareres106=Sk.builtin.bool($ret);var $jfalse108=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse108){$blk=87;continue;}$blk=87;case 87: var $jfalse109=($compareres106===false||!Sk.misceval.isTrue($compareres106));if($jfalse109){$blk=86;continue;}if (Sk.breakpoints('<stdin>.py',43,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',43,8);$susp.$blk = 89;$susp.optional = true;return $susp;}$blk=89;case 89: 

$currLineNo = 43;
$currColNo = 8;

$loc.head=$scope0.$const92;$blk=85;case 85: $blk=79; continue;case 86: if (Sk.breakpoints('<stdin>.py',45,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',45,8);$susp.$blk = 90;$susp.optional = true;return $susp;}$blk=90;case 90: 

$currLineNo = 45;
$currColNo = 8;

var $loadname110=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname110.tp$call)?$loadname110.tp$call([$scope0.$const111],undefined) : Sk.misceval.applyOrSuspend($loadname110,undefined,undefined,undefined,[$scope0.$const111]);$blk=91;case 91: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',45,8); }var $call112=$ret;

$currLineNo = 45;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',46,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',46,8);$susp.$blk = 92;$susp.optional = true;return $susp;}$blk=92;case 92: 

$currLineNo = 46;
$currColNo = 8;

var $loadname113=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname113.tp$call)?$loadname113.tp$call([$scope0.$const114],undefined) : Sk.misceval.applyOrSuspend($loadname113,undefined,undefined,undefined,[$scope0.$const114]);$blk=93;case 93: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',46,8); }var $call115=$ret;

$currLineNo = 46;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',47,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',47,8);$susp.$blk = 94;$susp.optional = true;return $susp;}$blk=94;case 94: 

$currLineNo = 47;
$currColNo = 8;

$blk=45; continue;$blk=85; continue;case 97: if (Sk.breakpoints('<stdin>.py',71,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',71,5);$susp.$blk = 151;$susp.optional = true;return $susp;}$blk=151;case 151: 

$currLineNo = 71;
$currColNo = 5;

var $loadname168=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres169=null;$ret = Sk.misceval.richCompareBool($loadname168,$scope0.$const107,'Eq', true);$blk=155;case 155: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',71,5); }$compareres169=Sk.builtin.bool($ret);var $jfalse170=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse170){$blk=154;continue;}$blk=154;case 154: var $jfalse171=($compareres169===false||!Sk.misceval.isTrue($compareres169));if($jfalse171){$blk=153;continue;}if (Sk.breakpoints('<stdin>.py',72,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',72,4);$susp.$blk = 156;$susp.optional = true;return $susp;}$blk=156;case 156: 

$currLineNo = 72;
$currColNo = 4;

$blk=157;case 157: if (Sk.breakpoints('<stdin>.py',72,4)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',72,4);$susp.$blk = 158;$susp.optional = true;return $susp;}$blk=158;case 158: $blk=159;case 159: if (Sk.breakpoints('<stdin>.py',73,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',73,4);$susp.$blk = 160;$susp.optional = true;return $susp;}$blk=160;case 160: 

$currLineNo = 73;
$currColNo = 4;

var $loadname172=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname172.tp$call)?$loadname172.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname172,undefined,undefined,undefined,[]);$blk=161;case 161: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',73,4); }var $call173=$ret;

$currLineNo = 73;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',74,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',74,4);$susp.$blk = 162;$susp.optional = true;return $susp;}$blk=162;case 162: 

$currLineNo = 74;
$currColNo = 4;

var $loadname174=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname175=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname175.tp$getattr($scope0.$const63, true);$blk=163;case 163: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',74,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname175.sk$attrError() + " has no attribute '" + $scope0.$const63.$jsstr() + "'");
};var $lattr176=$ret;var $binop178=Sk.abstr.numberBinOp($lattr176,$scope0.$const177,'Add');$ret = ($loadname174.tp$call)?$loadname174.tp$call([$binop178],undefined) : Sk.misceval.applyOrSuspend($loadname174,undefined,undefined,undefined,[$binop178]);$blk=164;case 164: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',74,4); }var $call179=$ret;

$currLineNo = 74;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',75,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',75,4);$susp.$blk = 165;$susp.optional = true;return $susp;}$blk=165;case 165: 

$currLineNo = 75;
$currColNo = 4;

var $loadname180=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname182=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname182.tp$getattr($scope0.$const47, true);$blk=166;case 166: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',75,41); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname182.sk$attrError() + " has no attribute '" + $scope0.$const47.$jsstr() + "'");
};var $lattr183=$ret;var $binop184=Sk.abstr.numberBinOp($scope0.$const181,$lattr183,'Add');$ret = ($loadname180.tp$call)?$loadname180.tp$call([$binop184],undefined) : Sk.misceval.applyOrSuspend($loadname180,undefined,undefined,undefined,[$binop184]);$blk=167;case 167: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',75,4); }var $call185=$ret;

$currLineNo = 75;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',76,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',76,4);$susp.$blk = 168;$susp.optional = true;return $susp;}$blk=168;case 168: 

$currLineNo = 76;
$currColNo = 4;

var $loadname186=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname186.tp$call)?$loadname186.tp$call([$scope0.$const75],undefined) : Sk.misceval.applyOrSuspend($loadname186,undefined,undefined,undefined,[$scope0.$const75]);$blk=169;case 169: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',76,4); }var $call187=$ret;

$currLineNo = 76;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',77,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',77,4);$susp.$blk = 170;$susp.optional = true;return $susp;}$blk=170;case 170: 

$currLineNo = 77;
$currColNo = 4;

var $loadname188=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname188.tp$call)?$loadname188.tp$call([$scope0.$const78],undefined) : Sk.misceval.applyOrSuspend($loadname188,undefined,undefined,undefined,[$scope0.$const78]);$blk=171;case 171: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',77,4); }var $call189=$ret;

$currLineNo = 77;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',78,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',78,4);$susp.$blk = 172;$susp.optional = true;return $susp;}$blk=172;case 172: 

$currLineNo = 78;
$currColNo = 4;

var $loadname190=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname190.tp$call)?$loadname190.tp$call([$scope0.$const191],undefined) : Sk.misceval.applyOrSuspend($loadname190,undefined,undefined,undefined,[$scope0.$const191]);$blk=173;case 173: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',78,4); }var $call192=$ret;

$currLineNo = 78;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',79,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',79,4);$susp.$blk = 174;$susp.optional = true;return $susp;}$blk=174;case 174: 

$currLineNo = 79;
$currColNo = 4;

var $loadname193=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname193.tp$call)?$loadname193.tp$call([$scope0.$const83],undefined) : Sk.misceval.applyOrSuspend($loadname193,undefined,undefined,undefined,[$scope0.$const83]);$blk=175;case 175: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',79,4); }var $call194=$ret;

$currLineNo = 79;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',80,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',80,4);$susp.$blk = 176;$susp.optional = true;return $susp;}$blk=176;case 176: 

$currLineNo = 80;
$currColNo = 4;

var $loadname195=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname195.tp$call)?$loadname195.tp$call([$scope0.$const4],undefined) : Sk.misceval.applyOrSuspend($loadname195,undefined,undefined,undefined,[$scope0.$const4]);$blk=177;case 177: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',80,4); }var $call196=$ret;

$currLineNo = 80;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',81,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',81,4);$susp.$blk = 178;$susp.optional = true;return $susp;}$blk=178;case 178: 

$currLineNo = 81;
$currColNo = 4;

var $loadname197=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname197.tp$call)?$loadname197.tp$call([$scope0.$const89],undefined) : Sk.misceval.applyOrSuspend($loadname197,undefined,undefined,undefined,[$scope0.$const89]);$blk=179;case 179: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',81,4); }var $call198=$ret;

$currLineNo = 81;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',82,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',82,4);$susp.$blk = 180;$susp.optional = true;return $susp;}$blk=180;case 180: 

$currLineNo = 82;
$currColNo = 4;

var $loadname199=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname199.tp$call)?$loadname199.tp$call([$scope0.$const200],undefined) : Sk.misceval.applyOrSuspend($loadname199,undefined,undefined,undefined,[$scope0.$const200]);$blk=181;case 181: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',82,4); }var $call201=$ret;

$currLineNo = 82;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',83,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',83,4);$susp.$blk = 182;$susp.optional = true;return $susp;}$blk=182;case 182: 

$currLineNo = 83;
$currColNo = 4;

var $loadname202=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname202.tp$call)?$loadname202.tp$call([$scope0.$const52],undefined) : Sk.misceval.applyOrSuspend($loadname202,undefined,undefined,undefined,[$scope0.$const52]);$blk=183;case 183: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',83,13); }var $call203=$ret;

$currLineNo = 83;
$currColNo = 13;

$loc.choice=$call203;if (Sk.breakpoints('<stdin>.py',84,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',84,4);$susp.$blk = 184;$susp.optional = true;return $susp;}$blk=184;case 184: 

$currLineNo = 84;
$currColNo = 4;

var $loadname204=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres205=null;$ret = Sk.misceval.richCompareBool($loadname204,$scope0.$const56,'Eq', true);$blk=188;case 188: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',84,7); }$compareres205=Sk.builtin.bool($ret);var $jfalse206=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse206){$blk=187;continue;}$blk=187;case 187: var $jfalse207=($compareres205===false||!Sk.misceval.isTrue($compareres205));if($jfalse207){$blk=186;continue;}if (Sk.breakpoints('<stdin>.py',85,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',85,8);$susp.$blk = 189;$susp.optional = true;return $susp;}$blk=189;case 189: 

$currLineNo = 85;
$currColNo = 8;

$loc.legs=$scope0.$const191;$blk=185;case 185: $blk=152;case 152: $blk=96; continue;case 130: if (Sk.breakpoints('<stdin>.py',63,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',63,9);$susp.$blk = 134;$susp.optional = true;return $susp;}$blk=134;case 134: 

$currLineNo = 63;
$currColNo = 9;

var $loadname156=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres157=null;$ret = Sk.misceval.richCompareBool($loadname156,$scope0.$const102,'Eq', true);$blk=138;case 138: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',63,9); }$compareres157=Sk.builtin.bool($ret);var $jfalse158=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse158){$blk=137;continue;}$blk=137;case 137: var $jfalse159=($compareres157===false||!Sk.misceval.isTrue($compareres157));if($jfalse159){$blk=136;continue;}if (Sk.breakpoints('<stdin>.py',64,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',64,8);$susp.$blk = 139;$susp.optional = true;return $susp;}$blk=139;case 139: 

$currLineNo = 64;
$currColNo = 8;

$loc.body=$scope0.$const144;$blk=135;case 135: $blk=129; continue;case 136: if (Sk.breakpoints('<stdin>.py',65,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',65,9);$susp.$blk = 140;$susp.optional = true;return $susp;}$blk=140;case 140: 

$currLineNo = 65;
$currColNo = 9;

var $loadname160=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres161=null;$ret = Sk.misceval.richCompareBool($loadname160,$scope0.$const107,'Eq', true);$blk=144;case 144: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',65,9); }$compareres161=Sk.builtin.bool($ret);var $jfalse162=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse162){$blk=143;continue;}$blk=143;case 143: var $jfalse163=($compareres161===false||!Sk.misceval.isTrue($compareres161));if($jfalse163){$blk=142;continue;}if (Sk.breakpoints('<stdin>.py',66,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',66,8);$susp.$blk = 145;$susp.optional = true;return $susp;}$blk=145;case 145: 

$currLineNo = 66;
$currColNo = 8;

$loc.body=$scope0.$const3;$blk=141;case 141: $blk=135; continue;case 142: if (Sk.breakpoints('<stdin>.py',68,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',68,8);$susp.$blk = 146;$susp.optional = true;return $susp;}$blk=146;case 146: 

$currLineNo = 68;
$currColNo = 8;

var $loadname164=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname164.tp$call)?$loadname164.tp$call([$scope0.$const111],undefined) : Sk.misceval.applyOrSuspend($loadname164,undefined,undefined,undefined,[$scope0.$const111]);$blk=147;case 147: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',68,8); }var $call165=$ret;

$currLineNo = 68;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',69,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',69,8);$susp.$blk = 148;$susp.optional = true;return $susp;}$blk=148;case 148: 

$currLineNo = 69;
$currColNo = 8;

var $loadname166=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname166.tp$call)?$loadname166.tp$call([$scope0.$const114],undefined) : Sk.misceval.applyOrSuspend($loadname166,undefined,undefined,undefined,[$scope0.$const114]);$blk=149;case 149: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',69,8); }var $call167=$ret;

$currLineNo = 69;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',70,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',70,8);$susp.$blk = 150;$susp.optional = true;return $susp;}$blk=150;case 150: 

$currLineNo = 70;
$currColNo = 8;

$blk=101; continue;$blk=141; continue;case 153: if (Sk.breakpoints('<stdin>.py',94,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',94,5);$susp.$blk = 207;$susp.optional = true;return $susp;}$blk=207;case 207: 

$currLineNo = 94;
$currColNo = 5;

var $loadname220=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres221=null;$ret = Sk.misceval.richCompareBool($loadname220,$scope0.$const222,'Eq', true);$blk=211;case 211: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',94,5); }$compareres221=Sk.builtin.bool($ret);var $jfalse223=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse223){$blk=210;continue;}$blk=210;case 210: var $jfalse224=($compareres221===false||!Sk.misceval.isTrue($compareres221));if($jfalse224){$blk=209;continue;}if (Sk.breakpoints('<stdin>.py',95,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',95,4);$susp.$blk = 212;$susp.optional = true;return $susp;}$blk=212;case 212: 

$currLineNo = 95;
$currColNo = 4;

$blk=213;case 213: if (Sk.breakpoints('<stdin>.py',95,4)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',95,4);$susp.$blk = 214;$susp.optional = true;return $susp;}$blk=214;case 214: $blk=215;case 215: if (Sk.breakpoints('<stdin>.py',96,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',96,4);$susp.$blk = 216;$susp.optional = true;return $susp;}$blk=216;case 216: 

$currLineNo = 96;
$currColNo = 4;

var $loadname225=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname225.tp$call)?$loadname225.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname225,undefined,undefined,undefined,[]);$blk=217;case 217: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',96,4); }var $call226=$ret;

$currLineNo = 96;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',97,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',97,4);$susp.$blk = 218;$susp.optional = true;return $susp;}$blk=218;case 218: 

$currLineNo = 97;
$currColNo = 4;

var $loadname227=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname228=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname228.tp$getattr($scope0.$const63, true);$blk=219;case 219: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',97,10); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname228.sk$attrError() + " has no attribute '" + $scope0.$const63.$jsstr() + "'");
};var $lattr229=$ret;var $binop231=Sk.abstr.numberBinOp($lattr229,$scope0.$const230,'Add');$ret = ($loadname227.tp$call)?$loadname227.tp$call([$binop231],undefined) : Sk.misceval.applyOrSuspend($loadname227,undefined,undefined,undefined,[$binop231]);$blk=220;case 220: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',97,4); }var $call232=$ret;

$currLineNo = 97;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',98,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',98,4);$susp.$blk = 221;$susp.optional = true;return $susp;}$blk=221;case 221: 

$currLineNo = 98;
$currColNo = 4;

var $loadname233=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname234=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname234.tp$getattr($scope0.$const47, true);$blk=222;case 222: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',98,39); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname234.sk$attrError() + " has no attribute '" + $scope0.$const47.$jsstr() + "'");
};var $lattr235=$ret;var $binop236=Sk.abstr.numberBinOp($scope0.$const69,$lattr235,'Add');$ret = ($loadname233.tp$call)?$loadname233.tp$call([$binop236],undefined) : Sk.misceval.applyOrSuspend($loadname233,undefined,undefined,undefined,[$binop236]);$blk=223;case 223: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',98,4); }var $call237=$ret;

$currLineNo = 98;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',99,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',99,4);$susp.$blk = 224;$susp.optional = true;return $susp;}$blk=224;case 224: 

$currLineNo = 99;
$currColNo = 4;

var $loadname238=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname238.tp$call)?$loadname238.tp$call([$scope0.$const75],undefined) : Sk.misceval.applyOrSuspend($loadname238,undefined,undefined,undefined,[$scope0.$const75]);$blk=225;case 225: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',99,4); }var $call239=$ret;

$currLineNo = 99;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',100,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',100,4);$susp.$blk = 226;$susp.optional = true;return $susp;}$blk=226;case 226: 

$currLineNo = 100;
$currColNo = 4;

var $loadname240=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname240.tp$call)?$loadname240.tp$call([$scope0.$const78],undefined) : Sk.misceval.applyOrSuspend($loadname240,undefined,undefined,undefined,[$scope0.$const78]);$blk=227;case 227: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',100,4); }var $call241=$ret;

$currLineNo = 100;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',101,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',101,4);$susp.$blk = 228;$susp.optional = true;return $susp;}$blk=228;case 228: 

$currLineNo = 101;
$currColNo = 4;

var $loadname242=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname242.tp$call)?$loadname242.tp$call([$scope0.$const243],undefined) : Sk.misceval.applyOrSuspend($loadname242,undefined,undefined,undefined,[$scope0.$const243]);$blk=229;case 229: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',101,4); }var $call244=$ret;

$currLineNo = 101;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',102,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',102,4);$susp.$blk = 230;$susp.optional = true;return $susp;}$blk=230;case 230: 

$currLineNo = 102;
$currColNo = 4;

var $loadname245=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname245.tp$call)?$loadname245.tp$call([$scope0.$const83],undefined) : Sk.misceval.applyOrSuspend($loadname245,undefined,undefined,undefined,[$scope0.$const83]);$blk=231;case 231: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',102,4); }var $call246=$ret;

$currLineNo = 102;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',103,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',103,4);$susp.$blk = 232;$susp.optional = true;return $susp;}$blk=232;case 232: 

$currLineNo = 103;
$currColNo = 4;

var $loadname247=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname247.tp$call)?$loadname247.tp$call([$scope0.$const5],undefined) : Sk.misceval.applyOrSuspend($loadname247,undefined,undefined,undefined,[$scope0.$const5]);$blk=233;case 233: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',103,4); }var $call248=$ret;

$currLineNo = 103;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',104,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',104,4);$susp.$blk = 234;$susp.optional = true;return $susp;}$blk=234;case 234: 

$currLineNo = 104;
$currColNo = 4;

var $loadname249=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname249.tp$call)?$loadname249.tp$call([$scope0.$const89],undefined) : Sk.misceval.applyOrSuspend($loadname249,undefined,undefined,undefined,[$scope0.$const89]);$blk=235;case 235: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',104,4); }var $call250=$ret;

$currLineNo = 104;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',105,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',105,4);$susp.$blk = 236;$susp.optional = true;return $susp;}$blk=236;case 236: 

$currLineNo = 105;
$currColNo = 4;

var $loadname251=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname251.tp$call)?$loadname251.tp$call([$scope0.$const252],undefined) : Sk.misceval.applyOrSuspend($loadname251,undefined,undefined,undefined,[$scope0.$const252]);$blk=237;case 237: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',105,4); }var $call253=$ret;

$currLineNo = 105;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',106,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',106,4);$susp.$blk = 238;$susp.optional = true;return $susp;}$blk=238;case 238: 

$currLineNo = 106;
$currColNo = 4;

var $loadname254=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname254.tp$call)?$loadname254.tp$call([$scope0.$const52],undefined) : Sk.misceval.applyOrSuspend($loadname254,undefined,undefined,undefined,[$scope0.$const52]);$blk=239;case 239: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',106,13); }var $call255=$ret;

$currLineNo = 106;
$currColNo = 13;

$loc.choice=$call255;if (Sk.breakpoints('<stdin>.py',107,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',107,4);$susp.$blk = 240;$susp.optional = true;return $susp;}$blk=240;case 240: 

$currLineNo = 107;
$currColNo = 4;

var $loadname256=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres257=null;$ret = Sk.misceval.richCompareBool($loadname256,$scope0.$const56,'Eq', true);$blk=244;case 244: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',107,7); }$compareres257=Sk.builtin.bool($ret);var $jfalse258=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse258){$blk=243;continue;}$blk=243;case 243: var $jfalse259=($compareres257===false||!Sk.misceval.isTrue($compareres257));if($jfalse259){$blk=242;continue;}if (Sk.breakpoints('<stdin>.py',108,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',108,8);$susp.$blk = 245;$susp.optional = true;return $susp;}$blk=245;case 245: 

$currLineNo = 108;
$currColNo = 8;

$loc.feet=$scope0.$const243;$blk=241;case 241: $blk=208;case 208: $blk=152; continue;case 186: if (Sk.breakpoints('<stdin>.py',86,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',86,9);$susp.$blk = 190;$susp.optional = true;return $susp;}$blk=190;case 190: 

$currLineNo = 86;
$currColNo = 9;

var $loadname208=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres209=null;$ret = Sk.misceval.richCompareBool($loadname208,$scope0.$const102,'Eq', true);$blk=194;case 194: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',86,9); }$compareres209=Sk.builtin.bool($ret);var $jfalse210=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse210){$blk=193;continue;}$blk=193;case 193: var $jfalse211=($compareres209===false||!Sk.misceval.isTrue($compareres209));if($jfalse211){$blk=192;continue;}if (Sk.breakpoints('<stdin>.py',87,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',87,8);$susp.$blk = 195;$susp.optional = true;return $susp;}$blk=195;case 195: 

$currLineNo = 87;
$currColNo = 8;

$loc.legs=$scope0.$const4;$blk=191;case 191: $blk=185; continue;case 192: if (Sk.breakpoints('<stdin>.py',88,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',88,9);$susp.$blk = 196;$susp.optional = true;return $susp;}$blk=196;case 196: 

$currLineNo = 88;
$currColNo = 9;

var $loadname212=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres213=null;$ret = Sk.misceval.richCompareBool($loadname212,$scope0.$const107,'Eq', true);$blk=200;case 200: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',88,9); }$compareres213=Sk.builtin.bool($ret);var $jfalse214=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse214){$blk=199;continue;}$blk=199;case 199: var $jfalse215=($compareres213===false||!Sk.misceval.isTrue($compareres213));if($jfalse215){$blk=198;continue;}if (Sk.breakpoints('<stdin>.py',89,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',89,8);$susp.$blk = 201;$susp.optional = true;return $susp;}$blk=201;case 201: 

$currLineNo = 89;
$currColNo = 8;

$loc.legs=$scope0.$const200;$blk=197;case 197: $blk=191; continue;case 198: if (Sk.breakpoints('<stdin>.py',91,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',91,8);$susp.$blk = 202;$susp.optional = true;return $susp;}$blk=202;case 202: 

$currLineNo = 91;
$currColNo = 8;

var $loadname216=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname216.tp$call)?$loadname216.tp$call([$scope0.$const111],undefined) : Sk.misceval.applyOrSuspend($loadname216,undefined,undefined,undefined,[$scope0.$const111]);$blk=203;case 203: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',91,8); }var $call217=$ret;

$currLineNo = 91;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',92,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',92,8);$susp.$blk = 204;$susp.optional = true;return $susp;}$blk=204;case 204: 

$currLineNo = 92;
$currColNo = 8;

var $loadname218=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname218.tp$call)?$loadname218.tp$call([$scope0.$const114],undefined) : Sk.misceval.applyOrSuspend($loadname218,undefined,undefined,undefined,[$scope0.$const114]);$blk=205;case 205: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',92,8); }var $call219=$ret;

$currLineNo = 92;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',93,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',93,8);$susp.$blk = 206;$susp.optional = true;return $susp;}$blk=206;case 206: 

$currLineNo = 93;
$currColNo = 8;

$blk=157; continue;$blk=197; continue;case 209: if (Sk.breakpoints('<stdin>.py',117,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',117,5);$susp.$blk = 263;$susp.optional = true;return $susp;}$blk=263;case 263: 

$currLineNo = 117;
$currColNo = 5;

var $loadname272=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres273=null;$ret = Sk.misceval.richCompareBool($loadname272,$scope0.$const274,'Eq', true);$blk=267;case 267: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',117,5); }$compareres273=Sk.builtin.bool($ret);var $jfalse275=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse275){$blk=266;continue;}$blk=266;case 266: var $jfalse276=($compareres273===false||!Sk.misceval.isTrue($compareres273));if($jfalse276){$blk=265;continue;}if (Sk.breakpoints('<stdin>.py',118,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',118,4);$susp.$blk = 268;$susp.optional = true;return $susp;}$blk=268;case 268: 

$currLineNo = 118;
$currColNo = 4;

$loc.dress=$scope0.$const277;if (Sk.breakpoints('<stdin>.py',119,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',119,4);$susp.$blk = 269;$susp.optional = true;return $susp;}$blk=269;case 269: 

$currLineNo = 119;
$currColNo = 4;

var $loadname278=$loc.body!==undefined?$loc.body:Sk.misceval.loadname('body',$gbl);;var $compareres279=null;$ret = Sk.misceval.richCompareBool($loadname278,$scope0.$const144,'Eq', true);$blk=272;case 272: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',119,7); }$compareres279=Sk.builtin.bool($ret);var $jfalse280=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse280){$blk=271;continue;}$blk=271;case 271: var $jfalse281=($compareres279===false||!Sk.misceval.isTrue($compareres279));if($jfalse281){$blk=270;continue;}if (Sk.breakpoints('<stdin>.py',120,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',120,8);$susp.$blk = 273;$susp.optional = true;return $susp;}$blk=273;case 273: 

$currLineNo = 120;
$currColNo = 8;

var $loadname282=$loc.legs!==undefined?$loc.legs:Sk.misceval.loadname('legs',$gbl);;var $compareres283=null;$ret = Sk.misceval.richCompareBool($loadname282,$scope0.$const191,'Eq', true);$blk=276;case 276: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',120,11); }$compareres283=Sk.builtin.bool($ret);var $jfalse284=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse284){$blk=275;continue;}$blk=275;case 275: var $jfalse285=($compareres283===false||!Sk.misceval.isTrue($compareres283));if($jfalse285){$blk=274;continue;}if (Sk.breakpoints('<stdin>.py',121,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',121,12);$susp.$blk = 277;$susp.optional = true;return $susp;}$blk=277;case 277: 

$currLineNo = 121;
$currColNo = 12;

var $loadname286=$loc.feet!==undefined?$loc.feet:Sk.misceval.loadname('feet',$gbl);;var $compareres287=null;$ret = Sk.misceval.richCompareBool($loadname286,$scope0.$const252,'Eq', true);$blk=280;case 280: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',121,15); }$compareres287=Sk.builtin.bool($ret);var $jfalse288=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse288){$blk=279;continue;}$blk=279;case 279: var $jfalse289=($compareres287===false||!Sk.misceval.isTrue($compareres287));if($jfalse289){$blk=278;continue;}if (Sk.breakpoints('<stdin>.py',122,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',122,16);$susp.$blk = 281;$susp.optional = true;return $susp;}$blk=281;case 281: 

$currLineNo = 122;
$currColNo = 16;

$loc.dress=$scope0.$const290;$blk=278;case 278: $blk=274;case 274: $blk=270;case 270: if (Sk.breakpoints('<stdin>.py',123,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',123,4);$susp.$blk = 282;$susp.optional = true;return $susp;}$blk=282;case 282: 

$currLineNo = 123;
$currColNo = 4;

var $loadname291=$loc.slowPrint!==undefined?$loc.slowPrint:Sk.misceval.loadname('slowPrint',$gbl);;var $loadname292=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname292.tp$getattr($scope0.$const293, true);$blk=283;case 283: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',123,14); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname292.sk$attrError() + " has no attribute '" + $scope0.$const293.$jsstr() + "'");
};var $lattr294=$ret;var $binop296=Sk.abstr.numberBinOp($lattr294,$scope0.$const295,'Add');$ret = ($loadname291.tp$call)?$loadname291.tp$call([$binop296],undefined) : Sk.misceval.applyOrSuspend($loadname291,undefined,undefined,undefined,[$binop296]);$blk=284;case 284: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',123,4); }var $call297=$ret;

$currLineNo = 123;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',124,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',124,4);$susp.$blk = 285;$susp.optional = true;return $susp;}$blk=285;case 285: 

$currLineNo = 124;
$currColNo = 4;

var $loadname298=$loc.dress!==undefined?$loc.dress:Sk.misceval.loadname('dress',$gbl);;var $compareres299=null;$ret = Sk.misceval.richCompareBool($loadname298,$scope0.$const290,'Eq', true);$blk=289;case 289: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',124,7); }$compareres299=Sk.builtin.bool($ret);var $jfalse300=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse300){$blk=288;continue;}$blk=288;case 288: var $jfalse301=($compareres299===false||!Sk.misceval.isTrue($compareres299));if($jfalse301){$blk=287;continue;}if (Sk.breakpoints('<stdin>.py',125,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',125,8);$susp.$blk = 290;$susp.optional = true;return $susp;}$blk=290;case 290: 

$currLineNo = 125;
$currColNo = 8;

var $loadname302=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname303=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname303.tp$getattr($scope0.$const41, true);$blk=291;case 291: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',125,14); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname303.sk$attrError() + " has no attribute '" + $scope0.$const41.$jsstr() + "'");
};var $lattr304=$ret;var $binop306=Sk.abstr.numberBinOp($lattr304,$scope0.$const305,'Add');$ret = ($loadname302.tp$call)?$loadname302.tp$call([$binop306],undefined) : Sk.misceval.applyOrSuspend($loadname302,undefined,undefined,undefined,[$binop306]);$blk=292;case 292: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',125,8); }var $call307=$ret;

$currLineNo = 125;
$currColNo = 8;

$blk=286;case 286: if (Sk.breakpoints('<stdin>.py',128,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',128,4);$susp.$blk = 296;$susp.optional = true;return $susp;}$blk=296;case 296: 

$currLineNo = 128;
$currColNo = 4;

var $loadname315=$loc.sleep!==undefined?$loc.sleep:Sk.misceval.loadname('sleep',$gbl);;$ret = ($loadname315.tp$call)?$loadname315.tp$call([$scope0.$const316],undefined) : Sk.misceval.applyOrSuspend($loadname315,undefined,undefined,undefined,[$scope0.$const316]);$blk=297;case 297: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',128,4); }var $call317=$ret;

$currLineNo = 128;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',129,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',129,4);$susp.$blk = 298;$susp.optional = true;return $susp;}$blk=298;case 298: 

$currLineNo = 129;
$currColNo = 4;

$blk=306; continue;$blk=264;case 306: if (Sk.breakpoints('<stdin>.py',137,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',137,0);$susp.$blk = 307;$susp.optional = true;return $susp;}$blk=307;case 307: $blk=308;case 308: if (Sk.breakpoints('<stdin>.py',138,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',138,0);$susp.$blk = 309;$susp.optional = true;return $susp;}$blk=309;case 309: 

$currLineNo = 138;
$currColNo = 0;

var $loadname322=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname323=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname323.tp$getattr($scope0.$const47, true);$blk=310;case 310: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',138,6); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname323.sk$attrError() + " has no attribute '" + $scope0.$const47.$jsstr() + "'");
};var $lattr324=$ret;var $binop326=Sk.abstr.numberBinOp($lattr324,$scope0.$const325,'Add');$ret = ($loadname322.tp$call)?$loadname322.tp$call([$binop326],undefined) : Sk.misceval.applyOrSuspend($loadname322,undefined,undefined,undefined,[$binop326]);$blk=311;case 311: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',138,0); }var $call327=$ret;

$currLineNo = 138;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');case 242: if (Sk.breakpoints('<stdin>.py',109,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',109,9);$susp.$blk = 246;$susp.optional = true;return $susp;}$blk=246;case 246: 

$currLineNo = 109;
$currColNo = 9;

var $loadname260=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres261=null;$ret = Sk.misceval.richCompareBool($loadname260,$scope0.$const102,'Eq', true);$blk=250;case 250: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',109,9); }$compareres261=Sk.builtin.bool($ret);var $jfalse262=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse262){$blk=249;continue;}$blk=249;case 249: var $jfalse263=($compareres261===false||!Sk.misceval.isTrue($compareres261));if($jfalse263){$blk=248;continue;}if (Sk.breakpoints('<stdin>.py',110,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',110,8);$susp.$blk = 251;$susp.optional = true;return $susp;}$blk=251;case 251: 

$currLineNo = 110;
$currColNo = 8;

$loc.feet=$scope0.$const5;$blk=247;case 247: $blk=241; continue;case 248: if (Sk.breakpoints('<stdin>.py',111,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',111,9);$susp.$blk = 252;$susp.optional = true;return $susp;}$blk=252;case 252: 

$currLineNo = 111;
$currColNo = 9;

var $loadname264=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres265=null;$ret = Sk.misceval.richCompareBool($loadname264,$scope0.$const107,'Eq', true);$blk=256;case 256: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',111,9); }$compareres265=Sk.builtin.bool($ret);var $jfalse266=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse266){$blk=255;continue;}$blk=255;case 255: var $jfalse267=($compareres265===false||!Sk.misceval.isTrue($compareres265));if($jfalse267){$blk=254;continue;}if (Sk.breakpoints('<stdin>.py',112,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',112,8);$susp.$blk = 257;$susp.optional = true;return $susp;}$blk=257;case 257: 

$currLineNo = 112;
$currColNo = 8;

$loc.feet=$scope0.$const252;$blk=253;case 253: $blk=247; continue;case 254: if (Sk.breakpoints('<stdin>.py',114,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',114,8);$susp.$blk = 258;$susp.optional = true;return $susp;}$blk=258;case 258: 

$currLineNo = 114;
$currColNo = 8;

var $loadname268=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname268.tp$call)?$loadname268.tp$call([$scope0.$const111],undefined) : Sk.misceval.applyOrSuspend($loadname268,undefined,undefined,undefined,[$scope0.$const111]);$blk=259;case 259: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',114,8); }var $call269=$ret;

$currLineNo = 114;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',115,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',115,8);$susp.$blk = 260;$susp.optional = true;return $susp;}$blk=260;case 260: 

$currLineNo = 115;
$currColNo = 8;

var $loadname270=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname270.tp$call)?$loadname270.tp$call([$scope0.$const114],undefined) : Sk.misceval.applyOrSuspend($loadname270,undefined,undefined,undefined,[$scope0.$const114]);$blk=261;case 261: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',115,8); }var $call271=$ret;

$currLineNo = 115;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',116,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',116,8);$susp.$blk = 262;$susp.optional = true;return $susp;}$blk=262;case 262: 

$currLineNo = 116;
$currColNo = 8;

$blk=213; continue;$blk=253; continue;case 264: $blk=208; continue;case 265: if (Sk.breakpoints('<stdin>.py',131,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',131,4);$susp.$blk = 299;$susp.optional = true;return $susp;}$blk=299;case 299: 

$currLineNo = 131;
$currColNo = 4;

var $loadname318=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname318.tp$call)?$loadname318.tp$call([$scope0.$const111],undefined) : Sk.misceval.applyOrSuspend($loadname318,undefined,undefined,undefined,[$scope0.$const111]);$blk=300;case 300: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',131,4); }var $call319=$ret;

$currLineNo = 131;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',132,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',132,4);$susp.$blk = 301;$susp.optional = true;return $susp;}$blk=301;case 301: 

$currLineNo = 132;
$currColNo = 4;

var $loadname320=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname320.tp$call)?$loadname320.tp$call([$scope0.$const114],undefined) : Sk.misceval.applyOrSuspend($loadname320,undefined,undefined,undefined,[$scope0.$const114]);$blk=302;case 302: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',132,4); }var $call321=$ret;

$currLineNo = 132;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',133,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',133,4);$susp.$blk = 303;$susp.optional = true;return $susp;}$blk=303;case 303: 

$currLineNo = 133;
$currColNo = 4;

$blk=8; continue;$blk=264; continue;case 287: if (Sk.breakpoints('<stdin>.py',127,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',127,8);$susp.$blk = 293;$susp.optional = true;return $susp;}$blk=293;case 293: 

$currLineNo = 127;
$currColNo = 8;

var $loadname308=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname309=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname309.tp$getattr($scope0.$const310, true);$blk=294;case 294: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',127,14); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname309.sk$attrError() + " has no attribute '" + $scope0.$const310.$jsstr() + "'");
};var $lattr311=$ret;var $binop313=Sk.abstr.numberBinOp($lattr311,$scope0.$const312,'Add');$ret = ($loadname308.tp$call)?$loadname308.tp$call([$binop313],undefined) : Sk.misceval.applyOrSuspend($loadname308,undefined,undefined,undefined,[$binop313]);$blk=295;case 295: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',127,8); }var $call314=$ret;

$currLineNo = 127;
$currColNo = 8;

$blk=286; continue;case 305: 

$currLineNo = 137;
$currColNo = 0;

$blk=306; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const2 = new Sk.builtin.str("samples/images/clothing/fashionhead_006.png");$scope0.$const3 = new Sk.builtin.str("samples/images/clothing/fashionbody_001.png");$scope0.$const4 = new Sk.builtin.str("samples/images/clothing/fashionlegs_006.png");$scope0.$const5 = new Sk.builtin.str("samples/images/clothing/fashionfeet_006.png");$scope0.$const9 = new Sk.builtin.str("Hurry, you're late for work at the fancy restaurant!");$scope0.$const12 = new Sk.builtin.str("Get dressed and goooooo!");$scope0.$const27 = new Sk.builtin.str("1. Change face");$scope0.$const30 = new Sk.builtin.str("2. Change top");$scope0.$const33 = new Sk.builtin.str("3. Change bottoms");$scope0.$const36 = new Sk.builtin.str("4. Change shoes");$scope0.$const39 = new Sk.builtin.str("5. ");$scope0.$const41 = new Sk.builtin.str('green');$scope0.$const44 = new Sk.builtin.str(">> Turn up to work! <<");$scope0.$const47 = new Sk.builtin.str('reset');$scope0.$const52 = new Sk.builtin.str("Enter your choice:");$scope0.$const56 = new Sk.builtin.str("1");$scope0.$const63 = new Sk.builtin.str('cyan');$scope0.$const65 = new Sk.builtin.str("Heads Menu");$scope0.$const69 = new Sk.builtin.str("==========");$scope0.$const75 = new Sk.builtin.str("Please choose the new image you'd like to use:");$scope0.$const78 = new Sk.builtin.str("   1:");$scope0.$const83 = new Sk.builtin.str("   2:");$scope0.$const86 = new Sk.builtin.str("samples/images/clothing/fashionhead_001.png");$scope0.$const89 = new Sk.builtin.str("   3:");$scope0.$const92 = new Sk.builtin.str("samples/images/clothing/fashionhead_007.png");$scope0.$const102 = new Sk.builtin.str("2");$scope0.$const107 = new Sk.builtin.str("3");$scope0.$const111 = new Sk.builtin.str("Invalid choice, please try again.");$scope0.$const114 = new Sk.builtin.str("Press [Enter] to coninue");$scope0.$const125 = new Sk.builtin.str("Tops Menu");$scope0.$const129 = new Sk.builtin.str("=========");$scope0.$const139 = new Sk.builtin.str("samples/images/clothing/fashionbody_011.png");$scope0.$const144 = new Sk.builtin.str("samples/images/clothing/fashionbody_009.png");$scope0.$const177 = new Sk.builtin.str("Bottoms Menu");$scope0.$const181 = new Sk.builtin.str("============");$scope0.$const191 = new Sk.builtin.str("samples/images/clothing/fashionlegs_005.png");$scope0.$const200 = new Sk.builtin.str("samples/images/clothing/fashionlegs_009.png");$scope0.$const222 = new Sk.builtin.str("4");$scope0.$const230 = new Sk.builtin.str("Shoes Menu");$scope0.$const243 = new Sk.builtin.str("samples/images/clothing/fashionfeet_009.png");$scope0.$const252 = new Sk.builtin.str("samples/images/clothing/fashionfeet_007.png");$scope0.$const274 = new Sk.builtin.str("5");$scope0.$const277 = new Sk.builtin.str("bad");$scope0.$const290 = new Sk.builtin.str("good");$scope0.$const293 = new Sk.builtin.str('yellow');$scope0.$const295 = new Sk.builtin.str("Your boss meets you at the door...");$scope0.$const305 = new Sk.builtin.str("'Perfect work uniform! Now go on in!'");$scope0.$const310 = new Sk.builtin.str('red');$scope0.$const312 = new Sk.builtin.str("'That is totally unprofessional attire... you're fired!'");$scope0.$const316 = new Sk.builtin.int_(1);$scope0.$const325 = new Sk.builtin.str("Game over");
return $scope0;}();
$compiledmod;