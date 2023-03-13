 Sk.execStart = Sk.lastYield = new Date();
 var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname3,$loadname6,$loadname10,$loadname13;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname3=susp.$tmps.$loadname3;$loadname6=susp.$tmps.$loadname6;$loadname10=susp.$tmps.$loadname10;$loadname13=susp.$tmps.$loadname13;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname3":$loadname3,"$loadname6":$loadname6,"$loadname10":$loadname10,"$loadname13":$loadname13};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

 $currLineNo = 1;
 $currColNo = 0;

 $ret = Sk.builtin.__import__('csinsc',$gbl,$loc,['say'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;var $item2=Sk.abstr.gattr($module1, new Sk.builtin.str('say'), undefined);$loc.say=$item2;if (Sk.breakpoints('<stdin>.py',3,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',3,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

 $currLineNo = 3;
 $currColNo = 0;

 var $loadname3=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname3.tp$call)?$loadname3.tp$call([$scope0.$const4],undefined) : Sk.misceval.applyOrSuspend($loadname3,undefined,undefined,undefined,[$scope0.$const4]);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',3,0); }var $call5=$ret;

 $currLineNo = 3;
 $currColNo = 0;

 if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

 $currLineNo = 5;
 $currColNo = 0;

 var $loadname6=$loc.say!==undefined?$loc.say:Sk.misceval.loadname('say',$gbl);;$ret = ($loadname6.tp$call)?$loadname6.tp$call([$scope0.$const7,$scope0.$const8],undefined) : Sk.misceval.applyOrSuspend($loadname6,undefined,undefined,undefined,[$scope0.$const7,$scope0.$const8]);$blk=6;case 6: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',5,0); }var $call9=$ret;

 $currLineNo = 5;
 $currColNo = 0;

 if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

 $currLineNo = 6;
 $currColNo = 0;

 var $loadname10=$loc.say!==undefined?$loc.say:Sk.misceval.loadname('say',$gbl);;$ret = ($loadname10.tp$call)?$loadname10.tp$call([$scope0.$const7,$scope0.$const11],undefined) : Sk.misceval.applyOrSuspend($loadname10,undefined,undefined,undefined,[$scope0.$const7,$scope0.$const11]);$blk=8;case 8: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',6,0); }var $call12=$ret;

 $currLineNo = 6;
 $currColNo = 0;

 if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

 $currLineNo = 7;
 $currColNo = 0;

 var $loadname13=$loc.say!==undefined?$loc.say:Sk.misceval.loadname('say',$gbl);;$ret = ($loadname13.tp$call)?$loadname13.tp$call([$scope0.$const7,$scope0.$const14],undefined) : Sk.misceval.applyOrSuspend($loadname13,undefined,undefined,undefined,[$scope0.$const7,$scope0.$const14]);$blk=10;case 10: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',7,0); }var $call15=$ret;

 $currLineNo = 7;
 $currColNo = 0;

 return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const4 = new Sk.builtin.str("Press [Enter] to be greeted by the 3 amigos!");$scope0.$const7 = new Sk.builtin.str("Hello, world!");$scope0.$const8 = new Sk.builtin.int_(0);$scope0.$const11 = new Sk.builtin.int_(1);$scope0.$const14 = new Sk.builtin.int_(2);
 return $scope0;}();
 $compiledmod;