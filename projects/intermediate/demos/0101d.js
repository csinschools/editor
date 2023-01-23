Sk.execStart = Sk.lastYield = new Date();
var $compiledmod = function() {var $scope0=(function($forcegbl, $forceloc){var $loadname5,$loadname7,$compareres8,$loadname11,$loadname15,$compareres16,$loadname20,$loadname23,$compareres24,$loadname27,$loadname31,$compareres32,$loadname35,$loadname38,$compareres39,$loadname43,$loadname46,$compareres47,$loadname50,$loadname54,$compareres55,$loadname58,$loadname61,$compareres62,$loadname65,$loadname68,$compareres69,$loadname72,$loadname76,$compareres77,$loadname80,$loadname83,$compareres84,$loadname87,$loadname90,$compareres91,$loadname94,$loadname97,$loadname99,$loadname97,$loadname99,$lattr101,$binop102,$binop104,$loadname105,$loadname106,$loadname97,$loadname99,$lattr101,$binop102,$binop104,$loadname105,$loadname106,$lattr108,$loadname111,$loadname114,$loadname117,$loadname120,$loadname123,$loadname126,$loadname129,$loadname132,$compareres133,$loadname137,$compareres138,$loadname141,$loadname143,$loadname144,$loadname143,$loadname144,$lattr145,$binop146,$binop147,$loadname148,$loadname149,$loadname143,$loadname144,$lattr145,$binop146,$binop147,$loadname148,$loadname149,$lattr150,$loadname152,$loadname155,$loadname158,$loadname160,$loadname163,$loadname165,$loadname168,$loadname170,$loadname172,$compareres173,$loadname176,$compareres177,$loadname178,$loadname181,$loadname184,$loadname186,$loadname192,$loadname195,$compareres196,$loadname201,$compareres202,$loadname203,$loadname206,$loadname208,$loadname209,$loadname214,$loadname216,$compareres217,$loadname222,$compareres223,$loadname224,$loadname227,$loadname229,$loadname230,$loadname235,$loadname237,$loadname240,$compareres241,$loadname244,$loadname247,$loadname250,$loadname252,$loadname255,$loadname257,$loadname260,$loadname262,$loadname264,$compareres265,$loadname269,$compareres270,$loadname271,$loadname274,$loadname276,$loadname277,$loadname282,$loadname284,$compareres285,$loadname288,$compareres289,$loadname290,$loadname293,$loadname295,$loadname296,$loadname301,$loadname303,$compareres304,$loadname308,$compareres309,$loadname310,$loadname313,$loadname315,$loadname316,$loadname321,$loadname323,$loadname325,$compareres326,$loadname329,$loadname332,$loadname335,$loadname337,$loadname340,$loadname342,$loadname345,$loadname347,$loadname349,$compareres350,$loadname354,$compareres355,$loadname356,$loadname359,$loadname361,$loadname362,$loadname367,$loadname369,$compareres370,$loadname373,$compareres374,$loadname375,$loadname378,$loadname380,$loadname381,$loadname386,$loadname388,$compareres389,$loadname392,$compareres393,$loadname394,$loadname397,$loadname399,$loadname400,$loadname405,$loadname407,$loadname409,$compareres410,$loadname414,$loadname417,$loadname420,$loadname422,$loadname425,$loadname427,$loadname429,$compareres430,$loadname433,$compareres434,$loadname437,$loadname439,$compareres440,$loadname444,$compareres445,$loadname448,$loadname449,$loadname448,$loadname449,$lattr450,$binop451,$binop452,$loadname453,$loadname454,$loadname448,$loadname449,$lattr450,$binop451,$binop452,$loadname453,$loadname454,$lattr455,$loadname458,$loadname459,$loadname458,$loadname459,$call461,$loadname463,$compareres464,$loadname465,$loadname468,$loadname471,$loadname474,$loadname477,$loadname480,$loadname484,$loadname486,$compareres487,$loadname490,$loadname493,$compareres494,$loadname498,$loadname499,$loadname498,$loadname499,$lattr500,$binop502,$loadname503,$loadname505,$loadname498,$loadname499,$lattr500,$binop502,$loadname503,$loadname505,$lattr506,$binop507,$loadname512,$loadname513,$loadname512,$loadname513,$lattr515,$binop517,$loadname518,$loadname519,$loadname512,$loadname513,$lattr515,$binop517,$loadname518,$loadname519,$lattr520,$binop521,$loadname526,$loadname529,$compareres530,$loadname533,$loadname534,$loadname533,$loadname534,$lattr535,$binop536,$loadname537,$loadname538,$loadname533,$loadname534,$lattr535,$binop536,$loadname537,$loadname538,$lattr539,$binop540,$loadname545,$loadname546,$loadname545,$loadname546,$lattr547,$binop548,$loadname549,$loadname550,$loadname545,$loadname546,$lattr547,$binop548,$loadname549,$loadname550,$lattr551,$binop552,$loadname557,$loadname560,$compareres561,$loadname565,$loadname568;var $wakeFromSuspension = function() {var susp = $scope0.$wakingSuspension; $scope0.$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();$loadname5=susp.$tmps.$loadname5;$loadname7=susp.$tmps.$loadname7;$compareres8=susp.$tmps.$compareres8;$loadname11=susp.$tmps.$loadname11;$loadname15=susp.$tmps.$loadname15;$compareres16=susp.$tmps.$compareres16;$loadname20=susp.$tmps.$loadname20;$loadname23=susp.$tmps.$loadname23;$compareres24=susp.$tmps.$compareres24;$loadname27=susp.$tmps.$loadname27;$loadname31=susp.$tmps.$loadname31;$compareres32=susp.$tmps.$compareres32;$loadname35=susp.$tmps.$loadname35;$loadname38=susp.$tmps.$loadname38;$compareres39=susp.$tmps.$compareres39;$loadname43=susp.$tmps.$loadname43;$loadname46=susp.$tmps.$loadname46;$compareres47=susp.$tmps.$compareres47;$loadname50=susp.$tmps.$loadname50;$loadname54=susp.$tmps.$loadname54;$compareres55=susp.$tmps.$compareres55;$loadname58=susp.$tmps.$loadname58;$loadname61=susp.$tmps.$loadname61;$compareres62=susp.$tmps.$compareres62;$loadname65=susp.$tmps.$loadname65;$loadname68=susp.$tmps.$loadname68;$compareres69=susp.$tmps.$compareres69;$loadname72=susp.$tmps.$loadname72;$loadname76=susp.$tmps.$loadname76;$compareres77=susp.$tmps.$compareres77;$loadname80=susp.$tmps.$loadname80;$loadname83=susp.$tmps.$loadname83;$compareres84=susp.$tmps.$compareres84;$loadname87=susp.$tmps.$loadname87;$loadname90=susp.$tmps.$loadname90;$compareres91=susp.$tmps.$compareres91;$loadname94=susp.$tmps.$loadname94;$loadname97=susp.$tmps.$loadname97;$loadname99=susp.$tmps.$loadname99;$lattr101=susp.$tmps.$lattr101;$binop102=susp.$tmps.$binop102;$binop104=susp.$tmps.$binop104;$loadname105=susp.$tmps.$loadname105;$loadname106=susp.$tmps.$loadname106;$lattr108=susp.$tmps.$lattr108;$loadname111=susp.$tmps.$loadname111;$loadname114=susp.$tmps.$loadname114;$loadname117=susp.$tmps.$loadname117;$loadname120=susp.$tmps.$loadname120;$loadname123=susp.$tmps.$loadname123;$loadname126=susp.$tmps.$loadname126;$loadname129=susp.$tmps.$loadname129;$loadname132=susp.$tmps.$loadname132;$compareres133=susp.$tmps.$compareres133;$loadname137=susp.$tmps.$loadname137;$compareres138=susp.$tmps.$compareres138;$loadname141=susp.$tmps.$loadname141;$loadname143=susp.$tmps.$loadname143;$loadname144=susp.$tmps.$loadname144;$lattr145=susp.$tmps.$lattr145;$binop146=susp.$tmps.$binop146;$binop147=susp.$tmps.$binop147;$loadname148=susp.$tmps.$loadname148;$loadname149=susp.$tmps.$loadname149;$lattr150=susp.$tmps.$lattr150;$loadname152=susp.$tmps.$loadname152;$loadname155=susp.$tmps.$loadname155;$loadname158=susp.$tmps.$loadname158;$loadname160=susp.$tmps.$loadname160;$loadname163=susp.$tmps.$loadname163;$loadname165=susp.$tmps.$loadname165;$loadname168=susp.$tmps.$loadname168;$loadname170=susp.$tmps.$loadname170;$loadname172=susp.$tmps.$loadname172;$compareres173=susp.$tmps.$compareres173;$loadname176=susp.$tmps.$loadname176;$compareres177=susp.$tmps.$compareres177;$loadname178=susp.$tmps.$loadname178;$loadname181=susp.$tmps.$loadname181;$loadname184=susp.$tmps.$loadname184;$loadname186=susp.$tmps.$loadname186;$loadname192=susp.$tmps.$loadname192;$loadname195=susp.$tmps.$loadname195;$compareres196=susp.$tmps.$compareres196;$loadname201=susp.$tmps.$loadname201;$compareres202=susp.$tmps.$compareres202;$loadname203=susp.$tmps.$loadname203;$loadname206=susp.$tmps.$loadname206;$loadname208=susp.$tmps.$loadname208;$loadname209=susp.$tmps.$loadname209;$loadname214=susp.$tmps.$loadname214;$loadname216=susp.$tmps.$loadname216;$compareres217=susp.$tmps.$compareres217;$loadname222=susp.$tmps.$loadname222;$compareres223=susp.$tmps.$compareres223;$loadname224=susp.$tmps.$loadname224;$loadname227=susp.$tmps.$loadname227;$loadname229=susp.$tmps.$loadname229;$loadname230=susp.$tmps.$loadname230;$loadname235=susp.$tmps.$loadname235;$loadname237=susp.$tmps.$loadname237;$loadname240=susp.$tmps.$loadname240;$compareres241=susp.$tmps.$compareres241;$loadname244=susp.$tmps.$loadname244;$loadname247=susp.$tmps.$loadname247;$loadname250=susp.$tmps.$loadname250;$loadname252=susp.$tmps.$loadname252;$loadname255=susp.$tmps.$loadname255;$loadname257=susp.$tmps.$loadname257;$loadname260=susp.$tmps.$loadname260;$loadname262=susp.$tmps.$loadname262;$loadname264=susp.$tmps.$loadname264;$compareres265=susp.$tmps.$compareres265;$loadname269=susp.$tmps.$loadname269;$compareres270=susp.$tmps.$compareres270;$loadname271=susp.$tmps.$loadname271;$loadname274=susp.$tmps.$loadname274;$loadname276=susp.$tmps.$loadname276;$loadname277=susp.$tmps.$loadname277;$loadname282=susp.$tmps.$loadname282;$loadname284=susp.$tmps.$loadname284;$compareres285=susp.$tmps.$compareres285;$loadname288=susp.$tmps.$loadname288;$compareres289=susp.$tmps.$compareres289;$loadname290=susp.$tmps.$loadname290;$loadname293=susp.$tmps.$loadname293;$loadname295=susp.$tmps.$loadname295;$loadname296=susp.$tmps.$loadname296;$loadname301=susp.$tmps.$loadname301;$loadname303=susp.$tmps.$loadname303;$compareres304=susp.$tmps.$compareres304;$loadname308=susp.$tmps.$loadname308;$compareres309=susp.$tmps.$compareres309;$loadname310=susp.$tmps.$loadname310;$loadname313=susp.$tmps.$loadname313;$loadname315=susp.$tmps.$loadname315;$loadname316=susp.$tmps.$loadname316;$loadname321=susp.$tmps.$loadname321;$loadname323=susp.$tmps.$loadname323;$loadname325=susp.$tmps.$loadname325;$compareres326=susp.$tmps.$compareres326;$loadname329=susp.$tmps.$loadname329;$loadname332=susp.$tmps.$loadname332;$loadname335=susp.$tmps.$loadname335;$loadname337=susp.$tmps.$loadname337;$loadname340=susp.$tmps.$loadname340;$loadname342=susp.$tmps.$loadname342;$loadname345=susp.$tmps.$loadname345;$loadname347=susp.$tmps.$loadname347;$loadname349=susp.$tmps.$loadname349;$compareres350=susp.$tmps.$compareres350;$loadname354=susp.$tmps.$loadname354;$compareres355=susp.$tmps.$compareres355;$loadname356=susp.$tmps.$loadname356;$loadname359=susp.$tmps.$loadname359;$loadname361=susp.$tmps.$loadname361;$loadname362=susp.$tmps.$loadname362;$loadname367=susp.$tmps.$loadname367;$loadname369=susp.$tmps.$loadname369;$compareres370=susp.$tmps.$compareres370;$loadname373=susp.$tmps.$loadname373;$compareres374=susp.$tmps.$compareres374;$loadname375=susp.$tmps.$loadname375;$loadname378=susp.$tmps.$loadname378;$loadname380=susp.$tmps.$loadname380;$loadname381=susp.$tmps.$loadname381;$loadname386=susp.$tmps.$loadname386;$loadname388=susp.$tmps.$loadname388;$compareres389=susp.$tmps.$compareres389;$loadname392=susp.$tmps.$loadname392;$compareres393=susp.$tmps.$compareres393;$loadname394=susp.$tmps.$loadname394;$loadname397=susp.$tmps.$loadname397;$loadname399=susp.$tmps.$loadname399;$loadname400=susp.$tmps.$loadname400;$loadname405=susp.$tmps.$loadname405;$loadname407=susp.$tmps.$loadname407;$loadname409=susp.$tmps.$loadname409;$compareres410=susp.$tmps.$compareres410;$loadname414=susp.$tmps.$loadname414;$loadname417=susp.$tmps.$loadname417;$loadname420=susp.$tmps.$loadname420;$loadname422=susp.$tmps.$loadname422;$loadname425=susp.$tmps.$loadname425;$loadname427=susp.$tmps.$loadname427;$loadname429=susp.$tmps.$loadname429;$compareres430=susp.$tmps.$compareres430;$loadname433=susp.$tmps.$loadname433;$compareres434=susp.$tmps.$compareres434;$loadname437=susp.$tmps.$loadname437;$loadname439=susp.$tmps.$loadname439;$compareres440=susp.$tmps.$compareres440;$loadname444=susp.$tmps.$loadname444;$compareres445=susp.$tmps.$compareres445;$loadname448=susp.$tmps.$loadname448;$loadname449=susp.$tmps.$loadname449;$lattr450=susp.$tmps.$lattr450;$binop451=susp.$tmps.$binop451;$binop452=susp.$tmps.$binop452;$loadname453=susp.$tmps.$loadname453;$loadname454=susp.$tmps.$loadname454;$lattr455=susp.$tmps.$lattr455;$loadname458=susp.$tmps.$loadname458;$loadname459=susp.$tmps.$loadname459;$call461=susp.$tmps.$call461;$loadname463=susp.$tmps.$loadname463;$compareres464=susp.$tmps.$compareres464;$loadname465=susp.$tmps.$loadname465;$loadname468=susp.$tmps.$loadname468;$loadname471=susp.$tmps.$loadname471;$loadname474=susp.$tmps.$loadname474;$loadname477=susp.$tmps.$loadname477;$loadname480=susp.$tmps.$loadname480;$loadname484=susp.$tmps.$loadname484;$loadname486=susp.$tmps.$loadname486;$compareres487=susp.$tmps.$compareres487;$loadname490=susp.$tmps.$loadname490;$loadname493=susp.$tmps.$loadname493;$compareres494=susp.$tmps.$compareres494;$loadname498=susp.$tmps.$loadname498;$loadname499=susp.$tmps.$loadname499;$lattr500=susp.$tmps.$lattr500;$binop502=susp.$tmps.$binop502;$loadname503=susp.$tmps.$loadname503;$loadname505=susp.$tmps.$loadname505;$lattr506=susp.$tmps.$lattr506;$binop507=susp.$tmps.$binop507;$loadname512=susp.$tmps.$loadname512;$loadname513=susp.$tmps.$loadname513;$lattr515=susp.$tmps.$lattr515;$binop517=susp.$tmps.$binop517;$loadname518=susp.$tmps.$loadname518;$loadname519=susp.$tmps.$loadname519;$lattr520=susp.$tmps.$lattr520;$binop521=susp.$tmps.$binop521;$loadname526=susp.$tmps.$loadname526;$loadname529=susp.$tmps.$loadname529;$compareres530=susp.$tmps.$compareres530;$loadname533=susp.$tmps.$loadname533;$loadname534=susp.$tmps.$loadname534;$lattr535=susp.$tmps.$lattr535;$binop536=susp.$tmps.$binop536;$loadname537=susp.$tmps.$loadname537;$loadname538=susp.$tmps.$loadname538;$lattr539=susp.$tmps.$lattr539;$binop540=susp.$tmps.$binop540;$loadname545=susp.$tmps.$loadname545;$loadname546=susp.$tmps.$loadname546;$lattr547=susp.$tmps.$lattr547;$binop548=susp.$tmps.$binop548;$loadname549=susp.$tmps.$loadname549;$loadname550=susp.$tmps.$loadname550;$lattr551=susp.$tmps.$lattr551;$binop552=susp.$tmps.$binop552;$loadname557=susp.$tmps.$loadname557;$loadname560=susp.$tmps.$loadname560;$compareres561=susp.$tmps.$compareres561;$loadname565=susp.$tmps.$loadname565;$loadname568=susp.$tmps.$loadname568;try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){$scope0.$wakingSuspension=susp; return $scope0(); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;susp.$tmps={"$loadname5":$loadname5,"$loadname7":$loadname7,"$compareres8":$compareres8,"$loadname11":$loadname11,"$loadname15":$loadname15,"$compareres16":$compareres16,"$loadname20":$loadname20,"$loadname23":$loadname23,"$compareres24":$compareres24,"$loadname27":$loadname27,"$loadname31":$loadname31,"$compareres32":$compareres32,"$loadname35":$loadname35,"$loadname38":$loadname38,"$compareres39":$compareres39,"$loadname43":$loadname43,"$loadname46":$loadname46,"$compareres47":$compareres47,"$loadname50":$loadname50,"$loadname54":$loadname54,"$compareres55":$compareres55,"$loadname58":$loadname58,"$loadname61":$loadname61,"$compareres62":$compareres62,"$loadname65":$loadname65,"$loadname68":$loadname68,"$compareres69":$compareres69,"$loadname72":$loadname72,"$loadname76":$loadname76,"$compareres77":$compareres77,"$loadname80":$loadname80,"$loadname83":$loadname83,"$compareres84":$compareres84,"$loadname87":$loadname87,"$loadname90":$loadname90,"$compareres91":$compareres91,"$loadname94":$loadname94,"$loadname97":$loadname97,"$loadname99":$loadname99,"$lattr101":$lattr101,"$binop102":$binop102,"$binop104":$binop104,"$loadname105":$loadname105,"$loadname106":$loadname106,"$lattr108":$lattr108,"$loadname111":$loadname111,"$loadname114":$loadname114,"$loadname117":$loadname117,"$loadname120":$loadname120,"$loadname123":$loadname123,"$loadname126":$loadname126,"$loadname129":$loadname129,"$loadname132":$loadname132,"$compareres133":$compareres133,"$loadname137":$loadname137,"$compareres138":$compareres138,"$loadname141":$loadname141,"$loadname143":$loadname143,"$loadname144":$loadname144,"$lattr145":$lattr145,"$binop146":$binop146,"$binop147":$binop147,"$loadname148":$loadname148,"$loadname149":$loadname149,"$lattr150":$lattr150,"$loadname152":$loadname152,"$loadname155":$loadname155,"$loadname158":$loadname158,"$loadname160":$loadname160,"$loadname163":$loadname163,"$loadname165":$loadname165,"$loadname168":$loadname168,"$loadname170":$loadname170,"$loadname172":$loadname172,"$compareres173":$compareres173,"$loadname176":$loadname176,"$compareres177":$compareres177,"$loadname178":$loadname178,"$loadname181":$loadname181,"$loadname184":$loadname184,"$loadname186":$loadname186,"$loadname192":$loadname192,"$loadname195":$loadname195,"$compareres196":$compareres196,"$loadname201":$loadname201,"$compareres202":$compareres202,"$loadname203":$loadname203,"$loadname206":$loadname206,"$loadname208":$loadname208,"$loadname209":$loadname209,"$loadname214":$loadname214,"$loadname216":$loadname216,"$compareres217":$compareres217,"$loadname222":$loadname222,"$compareres223":$compareres223,"$loadname224":$loadname224,"$loadname227":$loadname227,"$loadname229":$loadname229,"$loadname230":$loadname230,"$loadname235":$loadname235,"$loadname237":$loadname237,"$loadname240":$loadname240,"$compareres241":$compareres241,"$loadname244":$loadname244,"$loadname247":$loadname247,"$loadname250":$loadname250,"$loadname252":$loadname252,"$loadname255":$loadname255,"$loadname257":$loadname257,"$loadname260":$loadname260,"$loadname262":$loadname262,"$loadname264":$loadname264,"$compareres265":$compareres265,"$loadname269":$loadname269,"$compareres270":$compareres270,"$loadname271":$loadname271,"$loadname274":$loadname274,"$loadname276":$loadname276,"$loadname277":$loadname277,"$loadname282":$loadname282,"$loadname284":$loadname284,"$compareres285":$compareres285,"$loadname288":$loadname288,"$compareres289":$compareres289,"$loadname290":$loadname290,"$loadname293":$loadname293,"$loadname295":$loadname295,"$loadname296":$loadname296,"$loadname301":$loadname301,"$loadname303":$loadname303,"$compareres304":$compareres304,"$loadname308":$loadname308,"$compareres309":$compareres309,"$loadname310":$loadname310,"$loadname313":$loadname313,"$loadname315":$loadname315,"$loadname316":$loadname316,"$loadname321":$loadname321,"$loadname323":$loadname323,"$loadname325":$loadname325,"$compareres326":$compareres326,"$loadname329":$loadname329,"$loadname332":$loadname332,"$loadname335":$loadname335,"$loadname337":$loadname337,"$loadname340":$loadname340,"$loadname342":$loadname342,"$loadname345":$loadname345,"$loadname347":$loadname347,"$loadname349":$loadname349,"$compareres350":$compareres350,"$loadname354":$loadname354,"$compareres355":$compareres355,"$loadname356":$loadname356,"$loadname359":$loadname359,"$loadname361":$loadname361,"$loadname362":$loadname362,"$loadname367":$loadname367,"$loadname369":$loadname369,"$compareres370":$compareres370,"$loadname373":$loadname373,"$compareres374":$compareres374,"$loadname375":$loadname375,"$loadname378":$loadname378,"$loadname380":$loadname380,"$loadname381":$loadname381,"$loadname386":$loadname386,"$loadname388":$loadname388,"$compareres389":$compareres389,"$loadname392":$loadname392,"$compareres393":$compareres393,"$loadname394":$loadname394,"$loadname397":$loadname397,"$loadname399":$loadname399,"$loadname400":$loadname400,"$loadname405":$loadname405,"$loadname407":$loadname407,"$loadname409":$loadname409,"$compareres410":$compareres410,"$loadname414":$loadname414,"$loadname417":$loadname417,"$loadname420":$loadname420,"$loadname422":$loadname422,"$loadname425":$loadname425,"$loadname427":$loadname427,"$loadname429":$loadname429,"$compareres430":$compareres430,"$loadname433":$loadname433,"$compareres434":$compareres434,"$loadname437":$loadname437,"$loadname439":$loadname439,"$compareres440":$compareres440,"$loadname444":$loadname444,"$compareres445":$compareres445,"$loadname448":$loadname448,"$loadname449":$loadname449,"$lattr450":$lattr450,"$binop451":$binop451,"$binop452":$binop452,"$loadname453":$loadname453,"$loadname454":$loadname454,"$lattr455":$lattr455,"$loadname458":$loadname458,"$loadname459":$loadname459,"$call461":$call461,"$loadname463":$loadname463,"$compareres464":$compareres464,"$loadname465":$loadname465,"$loadname468":$loadname468,"$loadname471":$loadname471,"$loadname474":$loadname474,"$loadname477":$loadname477,"$loadname480":$loadname480,"$loadname484":$loadname484,"$loadname486":$loadname486,"$compareres487":$compareres487,"$loadname490":$loadname490,"$loadname493":$loadname493,"$compareres494":$compareres494,"$loadname498":$loadname498,"$loadname499":$loadname499,"$lattr500":$lattr500,"$binop502":$binop502,"$loadname503":$loadname503,"$loadname505":$loadname505,"$lattr506":$lattr506,"$binop507":$binop507,"$loadname512":$loadname512,"$loadname513":$loadname513,"$lattr515":$lattr515,"$binop517":$binop517,"$loadname518":$loadname518,"$loadname519":$loadname519,"$lattr520":$lattr520,"$binop521":$binop521,"$loadname526":$loadname526,"$loadname529":$loadname529,"$compareres530":$compareres530,"$loadname533":$loadname533,"$loadname534":$loadname534,"$lattr535":$lattr535,"$binop536":$binop536,"$loadname537":$loadname537,"$loadname538":$loadname538,"$lattr539":$lattr539,"$binop540":$binop540,"$loadname545":$loadname545,"$loadname546":$loadname546,"$lattr547":$lattr547,"$binop548":$binop548,"$loadname549":$loadname549,"$loadname550":$loadname550,"$lattr551":$lattr551,"$binop552":$binop552,"$loadname557":$loadname557,"$loadname560":$loadname560,"$compareres561":$compareres561,"$loadname565":$loadname565,"$loadname568":$loadname568};return susp;};var $gbl = $forcegbl || {}, $blk=0,$exc=[],$loc=$forceloc || $gbl,$cell={},$err=undefined;var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}var $waking=false; if ($scope0.$wakingSuspension!==undefined) { $wakeFromSuspension(); $waking=true; }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }while(true){try{var $dateNow = Date.now();if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeoutError(Sk.timeoutMsg())}if (!$waking && ($dateNow - Sk.lastYield > Sk.yieldLimit)) {var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '<stdin>.py',$currLineNo,$currColNo);$susp.$blk = $blk;$susp.optional = true;return $susp;}$waking = false;switch($blk){case 0: if (Sk.breakpoints('<stdin>.py',1,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',1,0);$susp.$blk = 1;$susp.optional = true;return $susp;}$blk=1;case 1: 

$currLineNo = 1;
$currColNo = 0;

$ret = Sk.builtin.__import__('csinsc',$gbl,$loc,['*'],-1);$blk=2;case 2: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',1,0); }var $module1=$ret;Sk.importStar($module1,$loc, $gbl);if (Sk.breakpoints('<stdin>.py',2,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',2,0);$susp.$blk = 3;$susp.optional = true;return $susp;}$blk=3;case 3: 

$currLineNo = 2;
$currColNo = 0;

$ret = Sk.builtin.__import__('random',$gbl,$loc,['*'],-1);$blk=4;case 4: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',2,0); }var $module2=$ret;Sk.importStar($module2,$loc, $gbl);if (Sk.breakpoints('<stdin>.py',4,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',4,0);$susp.$blk = 5;$susp.optional = true;return $susp;}$blk=5;case 5: 

$currLineNo = 4;
$currColNo = 0;

$loc.money=$scope0.$const3;if (Sk.breakpoints('<stdin>.py',5,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',5,0);$susp.$blk = 6;$susp.optional = true;return $susp;}$blk=6;case 6: 

$currLineNo = 5;
$currColNo = 0;

$loc.head=$scope0.$const4;if (Sk.breakpoints('<stdin>.py',6,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',6,0);$susp.$blk = 7;$susp.optional = true;return $susp;}$blk=7;case 7: 

$currLineNo = 6;
$currColNo = 0;

$loc.top=$scope0.$const4;if (Sk.breakpoints('<stdin>.py',7,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',7,0);$susp.$blk = 8;$susp.optional = true;return $susp;}$blk=8;case 8: 

$currLineNo = 7;
$currColNo = 0;

$loc.bottom=$scope0.$const4;if (Sk.breakpoints('<stdin>.py',8,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',8,0);$susp.$blk = 9;$susp.optional = true;return $susp;}$blk=9;case 9: 

$currLineNo = 8;
$currColNo = 0;

$loc.feet=$scope0.$const4;if (Sk.breakpoints('<stdin>.py',10,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',10,0);$susp.$blk = 10;$susp.optional = true;return $susp;}$blk=10;case 10: 

$currLineNo = 10;
$currColNo = 0;

$blk=11;case 11: if (Sk.breakpoints('<stdin>.py',10,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',10,0);$susp.$blk = 12;$susp.optional = true;return $susp;}$blk=12;case 12: $blk=13;case 13: if (Sk.breakpoints('<stdin>.py',11,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',11,0);$susp.$blk = 14;$susp.optional = true;return $susp;}$blk=14;case 14: 

$currLineNo = 11;
$currColNo = 0;

var $loadname5=$loc.clear!==undefined?$loc.clear:Sk.misceval.loadname('clear',$gbl);;$ret = ($loadname5.tp$call)?$loadname5.tp$call([],undefined) : Sk.misceval.applyOrSuspend($loadname5,undefined,undefined,undefined,[]);$blk=15;case 15: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',11,0); }var $call6=$ret;

$currLineNo = 11;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',14,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',14,0);$susp.$blk = 16;$susp.optional = true;return $susp;}$blk=16;case 16: 

$currLineNo = 14;
$currColNo = 0;

var $loadname7=$loc.head!==undefined?$loc.head:Sk.misceval.loadname('head',$gbl);;var $compareres8=null;$ret = Sk.misceval.richCompareBool($loadname7,$scope0.$const4,'Eq', true);$blk=20;case 20: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',14,3); }$compareres8=Sk.builtin.bool($ret);var $jfalse9=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse9){$blk=19;continue;}$blk=19;case 19: var $jfalse10=($compareres8===false||!Sk.misceval.isTrue($compareres8));if($jfalse10){$blk=18;continue;}if (Sk.breakpoints('<stdin>.py',15,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',15,4);$susp.$blk = 21;$susp.optional = true;return $susp;}$blk=21;case 21: 

$currLineNo = 15;
$currColNo = 4;

var $loadname11=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname11.tp$call)?$loadname11.tp$call([$scope0.$const12,$scope0.$const3,$scope0.$const13],undefined) : Sk.misceval.applyOrSuspend($loadname11,undefined,undefined,undefined,[$scope0.$const12,$scope0.$const3,$scope0.$const13]);$blk=22;case 22: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',15,4); }var $call14=$ret;

$currLineNo = 15;
$currColNo = 4;

$blk=17;case 17: if (Sk.breakpoints('<stdin>.py',19,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',19,0);$susp.$blk = 29;$susp.optional = true;return $susp;}$blk=29;case 29: 

$currLineNo = 19;
$currColNo = 0;

var $loadname23=$loc.top!==undefined?$loc.top:Sk.misceval.loadname('top',$gbl);;var $compareres24=null;$ret = Sk.misceval.richCompareBool($loadname23,$scope0.$const4,'Eq', true);$blk=33;case 33: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',19,3); }$compareres24=Sk.builtin.bool($ret);var $jfalse25=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse25){$blk=32;continue;}$blk=32;case 32: var $jfalse26=($compareres24===false||!Sk.misceval.isTrue($compareres24));if($jfalse26){$blk=31;continue;}if (Sk.breakpoints('<stdin>.py',20,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',20,4);$susp.$blk = 34;$susp.optional = true;return $susp;}$blk=34;case 34: 

$currLineNo = 20;
$currColNo = 4;

var $loadname27=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname27.tp$call)?$loadname27.tp$call([$scope0.$const28,$scope0.$const3,$scope0.$const29],undefined) : Sk.misceval.applyOrSuspend($loadname27,undefined,undefined,undefined,[$scope0.$const28,$scope0.$const3,$scope0.$const29]);$blk=35;case 35: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',20,4); }var $call30=$ret;

$currLineNo = 20;
$currColNo = 4;

$blk=30;case 30: if (Sk.breakpoints('<stdin>.py',28,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',28,0);$susp.$blk = 49;$susp.optional = true;return $susp;}$blk=49;case 49: 

$currLineNo = 28;
$currColNo = 0;

var $loadname46=$loc.bottom!==undefined?$loc.bottom:Sk.misceval.loadname('bottom',$gbl);;var $compareres47=null;$ret = Sk.misceval.richCompareBool($loadname46,$scope0.$const4,'Eq', true);$blk=53;case 53: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',28,3); }$compareres47=Sk.builtin.bool($ret);var $jfalse48=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse48){$blk=52;continue;}$blk=52;case 52: var $jfalse49=($compareres47===false||!Sk.misceval.isTrue($compareres47));if($jfalse49){$blk=51;continue;}if (Sk.breakpoints('<stdin>.py',29,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',29,4);$susp.$blk = 54;$susp.optional = true;return $susp;}$blk=54;case 54: 

$currLineNo = 29;
$currColNo = 4;

var $loadname50=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname50.tp$call)?$loadname50.tp$call([$scope0.$const51,$scope0.$const3,$scope0.$const52],undefined) : Sk.misceval.applyOrSuspend($loadname50,undefined,undefined,undefined,[$scope0.$const51,$scope0.$const3,$scope0.$const52]);$blk=55;case 55: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',29,4); }var $call53=$ret;

$currLineNo = 29;
$currColNo = 4;

$blk=50;case 50: if (Sk.breakpoints('<stdin>.py',36,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',36,0);$susp.$blk = 69;$susp.optional = true;return $susp;}$blk=69;case 69: 

$currLineNo = 36;
$currColNo = 0;

var $loadname68=$loc.feet!==undefined?$loc.feet:Sk.misceval.loadname('feet',$gbl);;var $compareres69=null;$ret = Sk.misceval.richCompareBool($loadname68,$scope0.$const4,'Eq', true);$blk=73;case 73: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',36,3); }$compareres69=Sk.builtin.bool($ret);var $jfalse70=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse70){$blk=72;continue;}$blk=72;case 72: var $jfalse71=($compareres69===false||!Sk.misceval.isTrue($compareres69));if($jfalse71){$blk=71;continue;}if (Sk.breakpoints('<stdin>.py',37,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',37,4);$susp.$blk = 74;$susp.optional = true;return $susp;}$blk=74;case 74: 

$currLineNo = 37;
$currColNo = 4;

var $loadname72=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname72.tp$call)?$loadname72.tp$call([$scope0.$const73,$scope0.$const3,$scope0.$const74],undefined) : Sk.misceval.applyOrSuspend($loadname72,undefined,undefined,undefined,[$scope0.$const73,$scope0.$const3,$scope0.$const74]);$blk=75;case 75: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',37,4); }var $call75=$ret;

$currLineNo = 37;
$currColNo = 4;

$blk=70;case 70: if (Sk.breakpoints('<stdin>.py',44,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',44,0);$susp.$blk = 89;$susp.optional = true;return $susp;}$blk=89;case 89: 

$currLineNo = 44;
$currColNo = 0;

var $loadname90=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $compareres91=null;$ret = Sk.misceval.richCompareBool($loadname90,$scope0.$const4,'LtE', true);$blk=93;case 93: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',44,3); }$compareres91=Sk.builtin.bool($ret);var $jfalse92=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse92){$blk=92;continue;}$blk=92;case 92: var $jfalse93=($compareres91===false||!Sk.misceval.isTrue($compareres91));if($jfalse93){$blk=91;continue;}if (Sk.breakpoints('<stdin>.py',45,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',45,4);$susp.$blk = 94;$susp.optional = true;return $susp;}$blk=94;case 94: 

$currLineNo = 45;
$currColNo = 4;

var $loadname94=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname94.tp$call)?$loadname94.tp$call([$scope0.$const95],undefined) : Sk.misceval.applyOrSuspend($loadname94,undefined,undefined,undefined,[$scope0.$const95]);$blk=95;case 95: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',45,4); }var $call96=$ret;

$currLineNo = 45;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',46,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',46,4);$susp.$blk = 96;$susp.optional = true;return $susp;}$blk=96;case 96: 

$currLineNo = 46;
$currColNo = 4;

$blk=513; continue;$blk=90;case 513: if (Sk.breakpoints('<stdin>.py',246,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',246,0);$susp.$blk = 514;$susp.optional = true;return $susp;}$blk=514;case 514: $blk=515;case 515: if (Sk.breakpoints('<stdin>.py',247,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',247,0);$susp.$blk = 516;$susp.optional = true;return $susp;}$blk=516;case 516: 

$currLineNo = 247;
$currColNo = 0;

var $loadname565=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname565.tp$call)?$loadname565.tp$call([$scope0.$const566],undefined) : Sk.misceval.applyOrSuspend($loadname565,undefined,undefined,undefined,[$scope0.$const566]);$blk=517;case 517: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',247,0); }var $call567=$ret;

$currLineNo = 247;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',248,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',248,0);$susp.$blk = 518;$susp.optional = true;return $susp;}$blk=518;case 518: 

$currLineNo = 248;
$currColNo = 0;

var $loadname568=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname568.tp$call)?$loadname568.tp$call([$scope0.$const569],undefined) : Sk.misceval.applyOrSuspend($loadname568,undefined,undefined,undefined,[$scope0.$const569]);$blk=519;case 519: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',248,0); }var $call570=$ret;

$currLineNo = 248;
$currColNo = 0;

return $loc;throw new Sk.builtin.SystemError('internal error: unterminated block');case 18: if (Sk.breakpoints('<stdin>.py',16,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',16,5);$susp.$blk = 23;$susp.optional = true;return $susp;}$blk=23;case 23: 

$currLineNo = 16;
$currColNo = 5;

var $loadname15=$loc.head!==undefined?$loc.head:Sk.misceval.loadname('head',$gbl);;var $compareres16=null;$ret = Sk.misceval.richCompareBool($loadname15,$scope0.$const17,'Eq', true);$blk=26;case 26: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',16,5); }$compareres16=Sk.builtin.bool($ret);var $jfalse18=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse18){$blk=25;continue;}$blk=25;case 25: var $jfalse19=($compareres16===false||!Sk.misceval.isTrue($compareres16));if($jfalse19){$blk=24;continue;}if (Sk.breakpoints('<stdin>.py',17,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',17,4);$susp.$blk = 27;$susp.optional = true;return $susp;}$blk=27;case 27: 

$currLineNo = 17;
$currColNo = 4;

var $loadname20=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname20.tp$call)?$loadname20.tp$call([$scope0.$const21,$scope0.$const3,$scope0.$const13],undefined) : Sk.misceval.applyOrSuspend($loadname20,undefined,undefined,undefined,[$scope0.$const21,$scope0.$const3,$scope0.$const13]);$blk=28;case 28: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',17,4); }var $call22=$ret;

$currLineNo = 17;
$currColNo = 4;

$blk=24;case 24: $blk=17; continue;case 31: if (Sk.breakpoints('<stdin>.py',21,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',21,5);$susp.$blk = 36;$susp.optional = true;return $susp;}$blk=36;case 36: 

$currLineNo = 21;
$currColNo = 5;

var $loadname31=$loc.top!==undefined?$loc.top:Sk.misceval.loadname('top',$gbl);;var $compareres32=null;$ret = Sk.misceval.richCompareBool($loadname31,$scope0.$const17,'Eq', true);$blk=40;case 40: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',21,5); }$compareres32=Sk.builtin.bool($ret);var $jfalse33=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse33){$blk=39;continue;}$blk=39;case 39: var $jfalse34=($compareres32===false||!Sk.misceval.isTrue($compareres32));if($jfalse34){$blk=38;continue;}if (Sk.breakpoints('<stdin>.py',22,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',22,4);$susp.$blk = 41;$susp.optional = true;return $susp;}$blk=41;case 41: 

$currLineNo = 22;
$currColNo = 4;

var $loadname35=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname35.tp$call)?$loadname35.tp$call([$scope0.$const36,$scope0.$const3,$scope0.$const29],undefined) : Sk.misceval.applyOrSuspend($loadname35,undefined,undefined,undefined,[$scope0.$const36,$scope0.$const3,$scope0.$const29]);$blk=42;case 42: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',22,4); }var $call37=$ret;

$currLineNo = 22;
$currColNo = 4;

$blk=37;case 37: $blk=30; continue;case 38: if (Sk.breakpoints('<stdin>.py',23,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',23,5);$susp.$blk = 43;$susp.optional = true;return $susp;}$blk=43;case 43: 

$currLineNo = 23;
$currColNo = 5;

var $loadname38=$loc.top!==undefined?$loc.top:Sk.misceval.loadname('top',$gbl);;var $compareres39=null;$ret = Sk.misceval.richCompareBool($loadname38,$scope0.$const40,'Eq', true);$blk=46;case 46: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',23,5); }$compareres39=Sk.builtin.bool($ret);var $jfalse41=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse41){$blk=45;continue;}$blk=45;case 45: var $jfalse42=($compareres39===false||!Sk.misceval.isTrue($compareres39));if($jfalse42){$blk=44;continue;}if (Sk.breakpoints('<stdin>.py',24,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',24,4);$susp.$blk = 47;$susp.optional = true;return $susp;}$blk=47;case 47: 

$currLineNo = 24;
$currColNo = 4;

var $loadname43=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname43.tp$call)?$loadname43.tp$call([$scope0.$const44,$scope0.$const3,$scope0.$const29],undefined) : Sk.misceval.applyOrSuspend($loadname43,undefined,undefined,undefined,[$scope0.$const44,$scope0.$const3,$scope0.$const29]);$blk=48;case 48: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',24,4); }var $call45=$ret;

$currLineNo = 24;
$currColNo = 4;

$blk=44;case 44: $blk=37; continue;case 51: if (Sk.breakpoints('<stdin>.py',30,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',30,5);$susp.$blk = 56;$susp.optional = true;return $susp;}$blk=56;case 56: 

$currLineNo = 30;
$currColNo = 5;

var $loadname54=$loc.bottom!==undefined?$loc.bottom:Sk.misceval.loadname('bottom',$gbl);;var $compareres55=null;$ret = Sk.misceval.richCompareBool($loadname54,$scope0.$const17,'Eq', true);$blk=60;case 60: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',30,5); }$compareres55=Sk.builtin.bool($ret);var $jfalse56=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse56){$blk=59;continue;}$blk=59;case 59: var $jfalse57=($compareres55===false||!Sk.misceval.isTrue($compareres55));if($jfalse57){$blk=58;continue;}if (Sk.breakpoints('<stdin>.py',31,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',31,4);$susp.$blk = 61;$susp.optional = true;return $susp;}$blk=61;case 61: 

$currLineNo = 31;
$currColNo = 4;

var $loadname58=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname58.tp$call)?$loadname58.tp$call([$scope0.$const59,$scope0.$const3,$scope0.$const52],undefined) : Sk.misceval.applyOrSuspend($loadname58,undefined,undefined,undefined,[$scope0.$const59,$scope0.$const3,$scope0.$const52]);$blk=62;case 62: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',31,4); }var $call60=$ret;

$currLineNo = 31;
$currColNo = 4;

$blk=57;case 57: $blk=50; continue;case 58: if (Sk.breakpoints('<stdin>.py',32,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',32,5);$susp.$blk = 63;$susp.optional = true;return $susp;}$blk=63;case 63: 

$currLineNo = 32;
$currColNo = 5;

var $loadname61=$loc.bottom!==undefined?$loc.bottom:Sk.misceval.loadname('bottom',$gbl);;var $compareres62=null;$ret = Sk.misceval.richCompareBool($loadname61,$scope0.$const40,'Eq', true);$blk=66;case 66: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',32,5); }$compareres62=Sk.builtin.bool($ret);var $jfalse63=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse63){$blk=65;continue;}$blk=65;case 65: var $jfalse64=($compareres62===false||!Sk.misceval.isTrue($compareres62));if($jfalse64){$blk=64;continue;}if (Sk.breakpoints('<stdin>.py',33,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',33,4);$susp.$blk = 67;$susp.optional = true;return $susp;}$blk=67;case 67: 

$currLineNo = 33;
$currColNo = 4;

var $loadname65=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname65.tp$call)?$loadname65.tp$call([$scope0.$const66,$scope0.$const3,$scope0.$const52],undefined) : Sk.misceval.applyOrSuspend($loadname65,undefined,undefined,undefined,[$scope0.$const66,$scope0.$const3,$scope0.$const52]);$blk=68;case 68: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',33,4); }var $call67=$ret;

$currLineNo = 33;
$currColNo = 4;

$blk=64;case 64: $blk=57; continue;case 71: if (Sk.breakpoints('<stdin>.py',38,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',38,5);$susp.$blk = 76;$susp.optional = true;return $susp;}$blk=76;case 76: 

$currLineNo = 38;
$currColNo = 5;

var $loadname76=$loc.feet!==undefined?$loc.feet:Sk.misceval.loadname('feet',$gbl);;var $compareres77=null;$ret = Sk.misceval.richCompareBool($loadname76,$scope0.$const17,'Eq', true);$blk=80;case 80: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',38,5); }$compareres77=Sk.builtin.bool($ret);var $jfalse78=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse78){$blk=79;continue;}$blk=79;case 79: var $jfalse79=($compareres77===false||!Sk.misceval.isTrue($compareres77));if($jfalse79){$blk=78;continue;}if (Sk.breakpoints('<stdin>.py',39,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',39,4);$susp.$blk = 81;$susp.optional = true;return $susp;}$blk=81;case 81: 

$currLineNo = 39;
$currColNo = 4;

var $loadname80=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname80.tp$call)?$loadname80.tp$call([$scope0.$const81,$scope0.$const3,$scope0.$const74],undefined) : Sk.misceval.applyOrSuspend($loadname80,undefined,undefined,undefined,[$scope0.$const81,$scope0.$const3,$scope0.$const74]);$blk=82;case 82: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',39,4); }var $call82=$ret;

$currLineNo = 39;
$currColNo = 4;

$blk=77;case 77: $blk=70; continue;case 78: if (Sk.breakpoints('<stdin>.py',40,5)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',40,5);$susp.$blk = 83;$susp.optional = true;return $susp;}$blk=83;case 83: 

$currLineNo = 40;
$currColNo = 5;

var $loadname83=$loc.feet!==undefined?$loc.feet:Sk.misceval.loadname('feet',$gbl);;var $compareres84=null;$ret = Sk.misceval.richCompareBool($loadname83,$scope0.$const40,'Eq', true);$blk=86;case 86: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',40,5); }$compareres84=Sk.builtin.bool($ret);var $jfalse85=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse85){$blk=85;continue;}$blk=85;case 85: var $jfalse86=($compareres84===false||!Sk.misceval.isTrue($compareres84));if($jfalse86){$blk=84;continue;}if (Sk.breakpoints('<stdin>.py',41,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',41,4);$susp.$blk = 87;$susp.optional = true;return $susp;}$blk=87;case 87: 

$currLineNo = 41;
$currColNo = 4;

var $loadname87=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname87.tp$call)?$loadname87.tp$call([$scope0.$const88,$scope0.$const3,$scope0.$const74],undefined) : Sk.misceval.applyOrSuspend($loadname87,undefined,undefined,undefined,[$scope0.$const88,$scope0.$const3,$scope0.$const74]);$blk=88;case 88: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',41,4); }var $call89=$ret;

$currLineNo = 41;
$currColNo = 4;

$blk=84;case 84: $blk=77; continue;case 90: if (Sk.breakpoints('<stdin>.py',210,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',210,0);$susp.$blk = 431;$susp.optional = true;return $susp;}$blk=431;case 431: 

$currLineNo = 210;
$currColNo = 0;

$blk=11; continue;if (Sk.breakpoints('<stdin>.py',212,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',212,0);$susp.$blk = 432;$susp.optional = true;return $susp;}$blk=432; continue;case 91: if (Sk.breakpoints('<stdin>.py',48,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',48,4);$susp.$blk = 97;$susp.optional = true;return $susp;}$blk=97;case 97: 

$currLineNo = 48;
$currColNo = 4;

var $loadname97=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname99=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname99.tp$getattr($scope0.$const100, true);$blk=98;case 98: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',48,24); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname99.sk$attrError() + " has no attribute '" + $scope0.$const100.$jsstr() + "'");
};var $lattr101=$ret;var $binop102=Sk.abstr.numberBinOp($scope0.$const98,$lattr101,'Add');var $binop104=Sk.abstr.numberBinOp($binop102,$scope0.$const103,'Add');var $loadname105=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname106=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname106.tp$getattr($scope0.$const107, true);$blk=99;case 99: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',48,51); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname106.sk$attrError() + " has no attribute '" + $scope0.$const107.$jsstr() + "'");
};var $lattr108=$ret;$ret = ($loadname97.tp$call)?$loadname97.tp$call([$binop104,$loadname105,$lattr108,$scope0.$const109],undefined) : Sk.misceval.applyOrSuspend($loadname97,undefined,undefined,undefined,[$binop104,$loadname105,$lattr108,$scope0.$const109]);$blk=100;case 100: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',48,4); }var $call110=$ret;

$currLineNo = 48;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',49,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',49,4);$susp.$blk = 101;$susp.optional = true;return $susp;}$blk=101;case 101: 

$currLineNo = 49;
$currColNo = 4;

var $loadname111=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname111.tp$call)?$loadname111.tp$call([$scope0.$const112],undefined) : Sk.misceval.applyOrSuspend($loadname111,undefined,undefined,undefined,[$scope0.$const112]);$blk=102;case 102: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',49,4); }var $call113=$ret;

$currLineNo = 49;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',50,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',50,4);$susp.$blk = 103;$susp.optional = true;return $susp;}$blk=103;case 103: 

$currLineNo = 50;
$currColNo = 4;

var $loadname114=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname114.tp$call)?$loadname114.tp$call([$scope0.$const115],undefined) : Sk.misceval.applyOrSuspend($loadname114,undefined,undefined,undefined,[$scope0.$const115]);$blk=104;case 104: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',50,4); }var $call116=$ret;

$currLineNo = 50;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',51,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',51,4);$susp.$blk = 105;$susp.optional = true;return $susp;}$blk=105;case 105: 

$currLineNo = 51;
$currColNo = 4;

var $loadname117=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname117.tp$call)?$loadname117.tp$call([$scope0.$const118],undefined) : Sk.misceval.applyOrSuspend($loadname117,undefined,undefined,undefined,[$scope0.$const118]);$blk=106;case 106: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',51,4); }var $call119=$ret;

$currLineNo = 51;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',52,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',52,4);$susp.$blk = 107;$susp.optional = true;return $susp;}$blk=107;case 107: 

$currLineNo = 52;
$currColNo = 4;

var $loadname120=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname120.tp$call)?$loadname120.tp$call([$scope0.$const121],undefined) : Sk.misceval.applyOrSuspend($loadname120,undefined,undefined,undefined,[$scope0.$const121]);$blk=108;case 108: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',52,4); }var $call122=$ret;

$currLineNo = 52;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',53,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',53,4);$susp.$blk = 109;$susp.optional = true;return $susp;}$blk=109;case 109: 

$currLineNo = 53;
$currColNo = 4;

var $loadname123=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname123.tp$call)?$loadname123.tp$call([$scope0.$const124],undefined) : Sk.misceval.applyOrSuspend($loadname123,undefined,undefined,undefined,[$scope0.$const124]);$blk=110;case 110: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',53,4); }var $call125=$ret;

$currLineNo = 53;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',54,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',54,4);$susp.$blk = 111;$susp.optional = true;return $susp;}$blk=111;case 111: 

$currLineNo = 54;
$currColNo = 4;

var $loadname126=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname126.tp$call)?$loadname126.tp$call([$scope0.$const127],undefined) : Sk.misceval.applyOrSuspend($loadname126,undefined,undefined,undefined,[$scope0.$const127]);$blk=112;case 112: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',54,4); }var $call128=$ret;

$currLineNo = 54;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',56,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',56,4);$susp.$blk = 113;$susp.optional = true;return $susp;}$blk=113;case 113: 

$currLineNo = 56;
$currColNo = 4;

var $loadname129=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname129.tp$call)?$loadname129.tp$call([$scope0.$const130],undefined) : Sk.misceval.applyOrSuspend($loadname129,undefined,undefined,undefined,[$scope0.$const130]);$blk=114;case 114: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',56,13); }var $call131=$ret;

$currLineNo = 56;
$currColNo = 13;

$loc.choice=$call131;if (Sk.breakpoints('<stdin>.py',58,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',58,4);$susp.$blk = 115;$susp.optional = true;return $susp;}$blk=115;case 115: 

$currLineNo = 58;
$currColNo = 4;

var $loadname132=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres133=null;$ret = Sk.misceval.richCompareBool($loadname132,$scope0.$const134,'Eq', true);$blk=119;case 119: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',58,7); }$compareres133=Sk.builtin.bool($ret);var $jfalse135=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse135){$blk=118;continue;}$blk=118;case 118: var $jfalse136=($compareres133===false||!Sk.misceval.isTrue($compareres133));if($jfalse136){$blk=117;continue;}if (Sk.breakpoints('<stdin>.py',59,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',59,8);$susp.$blk = 120;$susp.optional = true;return $susp;}$blk=120;case 120: 

$currLineNo = 59;
$currColNo = 8;

$blk=121;case 121: if (Sk.breakpoints('<stdin>.py',59,8)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',59,8);$susp.$blk = 122;$susp.optional = true;return $susp;}$blk=122;case 122: $blk=123;case 123: if (Sk.breakpoints('<stdin>.py',60,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',60,8);$susp.$blk = 124;$susp.optional = true;return $susp;}$blk=124;case 124: 

$currLineNo = 60;
$currColNo = 8;

var $loadname137=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $compareres138=null;$ret = Sk.misceval.richCompareBool($loadname137,$scope0.$const4,'Eq', true);$blk=128;case 128: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',60,11); }$compareres138=Sk.builtin.bool($ret);var $jfalse139=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse139){$blk=127;continue;}$blk=127;case 127: var $jfalse140=($compareres138===false||!Sk.misceval.isTrue($compareres138));if($jfalse140){$blk=126;continue;}if (Sk.breakpoints('<stdin>.py',61,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',61,12);$susp.$blk = 129;$susp.optional = true;return $susp;}$blk=129;case 129: 

$currLineNo = 61;
$currColNo = 12;

var $loadname141=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname141.tp$call)?$loadname141.tp$call([$scope0.$const95],undefined) : Sk.misceval.applyOrSuspend($loadname141,undefined,undefined,undefined,[$scope0.$const95]);$blk=130;case 130: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',61,12); }var $call142=$ret;

$currLineNo = 61;
$currColNo = 12;

if (Sk.breakpoints('<stdin>.py',62,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',62,12);$susp.$blk = 131;$susp.optional = true;return $susp;}$blk=131;case 131: 

$currLineNo = 62;
$currColNo = 12;

$blk=513; continue;$blk=125; continue;case 116: $blk=90; continue;case 117: if (Sk.breakpoints('<stdin>.py',106,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',106,9);$susp.$blk = 215;$susp.optional = true;return $susp;}$blk=215;case 215: 

$currLineNo = 106;
$currColNo = 9;

var $loadname240=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres241=null;$ret = Sk.misceval.richCompareBool($loadname240,$scope0.$const197,'Eq', true);$blk=219;case 219: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',106,9); }$compareres241=Sk.builtin.bool($ret);var $jfalse242=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse242){$blk=218;continue;}$blk=218;case 218: var $jfalse243=($compareres241===false||!Sk.misceval.isTrue($compareres241));if($jfalse243){$blk=217;continue;}if (Sk.breakpoints('<stdin>.py',107,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',107,8);$susp.$blk = 220;$susp.optional = true;return $susp;}$blk=220;case 220: 

$currLineNo = 107;
$currColNo = 8;

$blk=221;case 221: if (Sk.breakpoints('<stdin>.py',107,8)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',107,8);$susp.$blk = 222;$susp.optional = true;return $susp;}$blk=222;case 222: $blk=223;case 223: if (Sk.breakpoints('<stdin>.py',108,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',108,8);$susp.$blk = 224;$susp.optional = true;return $susp;}$blk=224;case 224: 

$currLineNo = 108;
$currColNo = 8;

var $loadname244=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname244.tp$call)?$loadname244.tp$call([$scope0.$const245],undefined) : Sk.misceval.applyOrSuspend($loadname244,undefined,undefined,undefined,[$scope0.$const245]);$blk=225;case 225: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',108,8); }var $call246=$ret;

$currLineNo = 108;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',109,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',109,8);$susp.$blk = 226;$susp.optional = true;return $susp;}$blk=226;case 226: 

$currLineNo = 109;
$currColNo = 8;

var $loadname247=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname247.tp$call)?$loadname247.tp$call([$scope0.$const248],undefined) : Sk.misceval.applyOrSuspend($loadname247,undefined,undefined,undefined,[$scope0.$const248]);$blk=227;case 227: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',109,8); }var $call249=$ret;

$currLineNo = 109;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',110,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',110,8);$susp.$blk = 228;$susp.optional = true;return $susp;}$blk=228;case 228: 

$currLineNo = 110;
$currColNo = 8;

var $loadname250=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname250.tp$call)?$loadname250.tp$call([$scope0.$const51,$scope0.$const3,$scope0.$const52],undefined) : Sk.misceval.applyOrSuspend($loadname250,undefined,undefined,undefined,[$scope0.$const51,$scope0.$const3,$scope0.$const52]);$blk=229;case 229: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',110,8); }var $call251=$ret;

$currLineNo = 110;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',111,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',111,8);$susp.$blk = 230;$susp.optional = true;return $susp;}$blk=230;case 230: 

$currLineNo = 111;
$currColNo = 8;

var $loadname252=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname252.tp$call)?$loadname252.tp$call([$scope0.$const253],undefined) : Sk.misceval.applyOrSuspend($loadname252,undefined,undefined,undefined,[$scope0.$const253]);$blk=231;case 231: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',111,8); }var $call254=$ret;

$currLineNo = 111;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',112,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',112,8);$susp.$blk = 232;$susp.optional = true;return $susp;}$blk=232;case 232: 

$currLineNo = 112;
$currColNo = 8;

var $loadname255=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname255.tp$call)?$loadname255.tp$call([$scope0.$const59,$scope0.$const3,$scope0.$const52],undefined) : Sk.misceval.applyOrSuspend($loadname255,undefined,undefined,undefined,[$scope0.$const59,$scope0.$const3,$scope0.$const52]);$blk=233;case 233: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',112,8); }var $call256=$ret;

$currLineNo = 112;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',113,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',113,8);$susp.$blk = 234;$susp.optional = true;return $susp;}$blk=234;case 234: 

$currLineNo = 113;
$currColNo = 8;

var $loadname257=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname257.tp$call)?$loadname257.tp$call([$scope0.$const258],undefined) : Sk.misceval.applyOrSuspend($loadname257,undefined,undefined,undefined,[$scope0.$const258]);$blk=235;case 235: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',113,8); }var $call259=$ret;

$currLineNo = 113;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',114,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',114,8);$susp.$blk = 236;$susp.optional = true;return $susp;}$blk=236;case 236: 

$currLineNo = 114;
$currColNo = 8;

var $loadname260=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname260.tp$call)?$loadname260.tp$call([$scope0.$const66,$scope0.$const3,$scope0.$const52],undefined) : Sk.misceval.applyOrSuspend($loadname260,undefined,undefined,undefined,[$scope0.$const66,$scope0.$const3,$scope0.$const52]);$blk=237;case 237: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',114,8); }var $call261=$ret;

$currLineNo = 114;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',115,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',115,8);$susp.$blk = 238;$susp.optional = true;return $susp;}$blk=238;case 238: 

$currLineNo = 115;
$currColNo = 8;

var $loadname262=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname262.tp$call)?$loadname262.tp$call([$scope0.$const130],undefined) : Sk.misceval.applyOrSuspend($loadname262,undefined,undefined,undefined,[$scope0.$const130]);$blk=239;case 239: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',115,25); }var $call263=$ret;

$currLineNo = 115;
$currColNo = 25;

$loc.bottom_choice=$call263;if (Sk.breakpoints('<stdin>.py',116,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',116,8);$susp.$blk = 240;$susp.optional = true;return $susp;}$blk=240;case 240: 

$currLineNo = 116;
$currColNo = 8;

var $loadname264=$loc.bottom_choice!==undefined?$loc.bottom_choice:Sk.misceval.loadname('bottom_choice',$gbl);;var $compareres265=null;$ret = Sk.misceval.richCompareBool($loadname264,$scope0.$const134,'Eq', true);$blk=244;case 244: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',116,11); }$compareres265=Sk.builtin.bool($ret);var $jfalse266=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse266){$blk=243;continue;}$blk=243;case 243: var $jfalse267=($compareres265===false||!Sk.misceval.isTrue($compareres265));if($jfalse267){$blk=242;continue;}if (Sk.breakpoints('<stdin>.py',117,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',117,12);$susp.$blk = 245;$susp.optional = true;return $susp;}$blk=245;case 245: 

$currLineNo = 117;
$currColNo = 12;

$loc.cost=$scope0.$const268;if (Sk.breakpoints('<stdin>.py',118,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',118,12);$susp.$blk = 246;$susp.optional = true;return $susp;}$blk=246;case 246: 

$currLineNo = 118;
$currColNo = 12;

var $loadname269=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $compareres270=null;var $loadname271=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;$ret = Sk.misceval.richCompareBool($loadname269,$loadname271,'Gt', true);$blk=250;case 250: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',118,15); }$compareres270=Sk.builtin.bool($ret);var $jfalse272=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse272){$blk=249;continue;}$blk=249;case 249: var $jfalse273=($compareres270===false||!Sk.misceval.isTrue($compareres270));if($jfalse273){$blk=248;continue;}if (Sk.breakpoints('<stdin>.py',119,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',119,16);$susp.$blk = 251;$susp.optional = true;return $susp;}$blk=251;case 251: 

$currLineNo = 119;
$currColNo = 16;

var $loadname274=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname274.tp$call)?$loadname274.tp$call([$scope0.$const182],undefined) : Sk.misceval.applyOrSuspend($loadname274,undefined,undefined,undefined,[$scope0.$const182]);$blk=252;case 252: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',119,16); }var $call275=$ret;

$currLineNo = 119;
$currColNo = 16;

$blk=247;case 247: if (Sk.breakpoints('<stdin>.py',124,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',124,12);$susp.$blk = 257;$susp.optional = true;return $susp;}$blk=257;case 257: 

$currLineNo = 124;
$currColNo = 12;

var $loadname282=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname282.tp$call)?$loadname282.tp$call([$scope0.$const193],undefined) : Sk.misceval.applyOrSuspend($loadname282,undefined,undefined,undefined,[$scope0.$const193]);$blk=258;case 258: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',124,12); }var $call283=$ret;

$currLineNo = 124;
$currColNo = 12;

$blk=241;case 241: $blk=216;case 216: $blk=116; continue;case 125: if (Sk.breakpoints('<stdin>.py',65,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',65,8);$susp.$blk = 136;$susp.optional = true;return $susp;}$blk=136;case 136: 

$currLineNo = 65;
$currColNo = 8;

var $loadname152=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname152.tp$call)?$loadname152.tp$call([$scope0.$const153],undefined) : Sk.misceval.applyOrSuspend($loadname152,undefined,undefined,undefined,[$scope0.$const153]);$blk=137;case 137: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',65,8); }var $call154=$ret;

$currLineNo = 65;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',66,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',66,8);$susp.$blk = 138;$susp.optional = true;return $susp;}$blk=138;case 138: 

$currLineNo = 66;
$currColNo = 8;

var $loadname155=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname155.tp$call)?$loadname155.tp$call([$scope0.$const156],undefined) : Sk.misceval.applyOrSuspend($loadname155,undefined,undefined,undefined,[$scope0.$const156]);$blk=139;case 139: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',66,8); }var $call157=$ret;

$currLineNo = 66;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',67,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',67,8);$susp.$blk = 140;$susp.optional = true;return $susp;}$blk=140;case 140: 

$currLineNo = 67;
$currColNo = 8;

var $loadname158=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname158.tp$call)?$loadname158.tp$call([$scope0.$const28,$scope0.$const3,$scope0.$const29],undefined) : Sk.misceval.applyOrSuspend($loadname158,undefined,undefined,undefined,[$scope0.$const28,$scope0.$const3,$scope0.$const29]);$blk=141;case 141: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',67,8); }var $call159=$ret;

$currLineNo = 67;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',68,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',68,8);$susp.$blk = 142;$susp.optional = true;return $susp;}$blk=142;case 142: 

$currLineNo = 68;
$currColNo = 8;

var $loadname160=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname160.tp$call)?$loadname160.tp$call([$scope0.$const161],undefined) : Sk.misceval.applyOrSuspend($loadname160,undefined,undefined,undefined,[$scope0.$const161]);$blk=143;case 143: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',68,8); }var $call162=$ret;

$currLineNo = 68;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',69,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',69,8);$susp.$blk = 144;$susp.optional = true;return $susp;}$blk=144;case 144: 

$currLineNo = 69;
$currColNo = 8;

var $loadname163=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname163.tp$call)?$loadname163.tp$call([$scope0.$const36,$scope0.$const3,$scope0.$const29],undefined) : Sk.misceval.applyOrSuspend($loadname163,undefined,undefined,undefined,[$scope0.$const36,$scope0.$const3,$scope0.$const29]);$blk=145;case 145: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',69,8); }var $call164=$ret;

$currLineNo = 69;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',70,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',70,8);$susp.$blk = 146;$susp.optional = true;return $susp;}$blk=146;case 146: 

$currLineNo = 70;
$currColNo = 8;

var $loadname165=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname165.tp$call)?$loadname165.tp$call([$scope0.$const166],undefined) : Sk.misceval.applyOrSuspend($loadname165,undefined,undefined,undefined,[$scope0.$const166]);$blk=147;case 147: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',70,8); }var $call167=$ret;

$currLineNo = 70;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',71,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',71,8);$susp.$blk = 148;$susp.optional = true;return $susp;}$blk=148;case 148: 

$currLineNo = 71;
$currColNo = 8;

var $loadname168=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname168.tp$call)?$loadname168.tp$call([$scope0.$const44,$scope0.$const3,$scope0.$const29],undefined) : Sk.misceval.applyOrSuspend($loadname168,undefined,undefined,undefined,[$scope0.$const44,$scope0.$const3,$scope0.$const29]);$blk=149;case 149: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',71,8); }var $call169=$ret;

$currLineNo = 71;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',72,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',72,8);$susp.$blk = 150;$susp.optional = true;return $susp;}$blk=150;case 150: 

$currLineNo = 72;
$currColNo = 8;

var $loadname170=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname170.tp$call)?$loadname170.tp$call([$scope0.$const130],undefined) : Sk.misceval.applyOrSuspend($loadname170,undefined,undefined,undefined,[$scope0.$const130]);$blk=151;case 151: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',72,22); }var $call171=$ret;

$currLineNo = 72;
$currColNo = 22;

$loc.top_choice=$call171;if (Sk.breakpoints('<stdin>.py',73,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',73,8);$susp.$blk = 152;$susp.optional = true;return $susp;}$blk=152;case 152: 

$currLineNo = 73;
$currColNo = 8;

var $loadname172=$loc.top_choice!==undefined?$loc.top_choice:Sk.misceval.loadname('top_choice',$gbl);;var $compareres173=null;$ret = Sk.misceval.richCompareBool($loadname172,$scope0.$const134,'Eq', true);$blk=156;case 156: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',73,11); }$compareres173=Sk.builtin.bool($ret);var $jfalse174=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse174){$blk=155;continue;}$blk=155;case 155: var $jfalse175=($compareres173===false||!Sk.misceval.isTrue($compareres173));if($jfalse175){$blk=154;continue;}if (Sk.breakpoints('<stdin>.py',74,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',74,12);$susp.$blk = 157;$susp.optional = true;return $susp;}$blk=157;case 157: 

$currLineNo = 74;
$currColNo = 12;

$loc.cost=$scope0.$const3;if (Sk.breakpoints('<stdin>.py',75,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',75,12);$susp.$blk = 158;$susp.optional = true;return $susp;}$blk=158;case 158: 

$currLineNo = 75;
$currColNo = 12;

var $loadname176=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $compareres177=null;var $loadname178=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;$ret = Sk.misceval.richCompareBool($loadname176,$loadname178,'Gt', true);$blk=162;case 162: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',75,15); }$compareres177=Sk.builtin.bool($ret);var $jfalse179=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse179){$blk=161;continue;}$blk=161;case 161: var $jfalse180=($compareres177===false||!Sk.misceval.isTrue($compareres177));if($jfalse180){$blk=160;continue;}if (Sk.breakpoints('<stdin>.py',76,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',76,16);$susp.$blk = 163;$susp.optional = true;return $susp;}$blk=163;case 163: 

$currLineNo = 76;
$currColNo = 16;

var $loadname181=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname181.tp$call)?$loadname181.tp$call([$scope0.$const182],undefined) : Sk.misceval.applyOrSuspend($loadname181,undefined,undefined,undefined,[$scope0.$const182]);$blk=164;case 164: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',76,16); }var $call183=$ret;

$currLineNo = 76;
$currColNo = 16;

$blk=159;case 159: if (Sk.breakpoints('<stdin>.py',81,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',81,12);$susp.$blk = 169;$susp.optional = true;return $susp;}$blk=169;case 169: 

$currLineNo = 81;
$currColNo = 12;

var $loadname192=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname192.tp$call)?$loadname192.tp$call([$scope0.$const193],undefined) : Sk.misceval.applyOrSuspend($loadname192,undefined,undefined,undefined,[$scope0.$const193]);$blk=170;case 170: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',81,12); }var $call194=$ret;

$currLineNo = 81;
$currColNo = 12;

if (Sk.breakpoints('<stdin>.py',82,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',82,12);$susp.$blk = 171;$susp.optional = true;return $susp;}$blk=171;case 171: 

$currLineNo = 82;
$currColNo = 12;

$blk=11; continue;$blk=153; continue;case 126: if (Sk.breakpoints('<stdin>.py',64,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',64,12);$susp.$blk = 132;$susp.optional = true;return $susp;}$blk=132;case 132: 

$currLineNo = 64;
$currColNo = 12;

var $loadname143=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname144=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname144.tp$getattr($scope0.$const100, true);$blk=133;case 133: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',64,32); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname144.sk$attrError() + " has no attribute '" + $scope0.$const100.$jsstr() + "'");
};var $lattr145=$ret;var $binop146=Sk.abstr.numberBinOp($scope0.$const98,$lattr145,'Add');var $binop147=Sk.abstr.numberBinOp($binop146,$scope0.$const103,'Add');var $loadname148=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname149=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname149.tp$getattr($scope0.$const107, true);$blk=134;case 134: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',64,59); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname149.sk$attrError() + " has no attribute '" + $scope0.$const107.$jsstr() + "'");
};var $lattr150=$ret;$ret = ($loadname143.tp$call)?$loadname143.tp$call([$binop147,$loadname148,$lattr150,$scope0.$const109],undefined) : Sk.misceval.applyOrSuspend($loadname143,undefined,undefined,undefined,[$binop147,$loadname148,$lattr150,$scope0.$const109]);$blk=135;case 135: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',64,12); }var $call151=$ret;

$currLineNo = 64;
$currColNo = 12;

$blk=125; continue;case 153: $blk=116; continue;case 154: if (Sk.breakpoints('<stdin>.py',83,13)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',83,13);$susp.$blk = 172;$susp.optional = true;return $susp;}$blk=172;case 172: 

$currLineNo = 83;
$currColNo = 13;

var $loadname195=$loc.top_choice!==undefined?$loc.top_choice:Sk.misceval.loadname('top_choice',$gbl);;var $compareres196=null;$ret = Sk.misceval.richCompareBool($loadname195,$scope0.$const197,'Eq', true);$blk=176;case 176: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',83,13); }$compareres196=Sk.builtin.bool($ret);var $jfalse198=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse198){$blk=175;continue;}$blk=175;case 175: var $jfalse199=($compareres196===false||!Sk.misceval.isTrue($compareres196));if($jfalse199){$blk=174;continue;}if (Sk.breakpoints('<stdin>.py',84,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',84,12);$susp.$blk = 177;$susp.optional = true;return $susp;}$blk=177;case 177: 

$currLineNo = 84;
$currColNo = 12;

$loc.cost=$scope0.$const200;if (Sk.breakpoints('<stdin>.py',85,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',85,12);$susp.$blk = 178;$susp.optional = true;return $susp;}$blk=178;case 178: 

$currLineNo = 85;
$currColNo = 12;

var $loadname201=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $compareres202=null;var $loadname203=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;$ret = Sk.misceval.richCompareBool($loadname201,$loadname203,'Gt', true);$blk=182;case 182: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',85,15); }$compareres202=Sk.builtin.bool($ret);var $jfalse204=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse204){$blk=181;continue;}$blk=181;case 181: var $jfalse205=($compareres202===false||!Sk.misceval.isTrue($compareres202));if($jfalse205){$blk=180;continue;}if (Sk.breakpoints('<stdin>.py',86,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',86,16);$susp.$blk = 183;$susp.optional = true;return $susp;}$blk=183;case 183: 

$currLineNo = 86;
$currColNo = 16;

var $loadname206=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname206.tp$call)?$loadname206.tp$call([$scope0.$const182],undefined) : Sk.misceval.applyOrSuspend($loadname206,undefined,undefined,undefined,[$scope0.$const182]);$blk=184;case 184: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',86,16); }var $call207=$ret;

$currLineNo = 86;
$currColNo = 16;

$blk=179;case 179: if (Sk.breakpoints('<stdin>.py',91,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',91,12);$susp.$blk = 189;$susp.optional = true;return $susp;}$blk=189;case 189: 

$currLineNo = 91;
$currColNo = 12;

var $loadname214=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname214.tp$call)?$loadname214.tp$call([$scope0.$const193],undefined) : Sk.misceval.applyOrSuspend($loadname214,undefined,undefined,undefined,[$scope0.$const193]);$blk=190;case 190: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',91,12); }var $call215=$ret;

$currLineNo = 91;
$currColNo = 12;

if (Sk.breakpoints('<stdin>.py',92,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',92,12);$susp.$blk = 191;$susp.optional = true;return $susp;}$blk=191;case 191: 

$currLineNo = 92;
$currColNo = 12;

$blk=11; continue;$blk=173; continue;case 160: if (Sk.breakpoints('<stdin>.py',78,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',78,16);$susp.$blk = 165;$susp.optional = true;return $susp;}$blk=165;case 165: 

$currLineNo = 78;
$currColNo = 16;

var $loadname184=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname186=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;$ret = ($loadname184.tp$call)?$loadname184.tp$call([$scope0.$const185,$loadname186,$scope0.$const187],undefined) : Sk.misceval.applyOrSuspend($loadname184,undefined,undefined,undefined,[$scope0.$const185,$loadname186,$scope0.$const187]);$blk=166;case 166: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',78,16); }var $call188=$ret;

$currLineNo = 78;
$currColNo = 16;

if (Sk.breakpoints('<stdin>.py',79,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',79,16);$susp.$blk = 167;$susp.optional = true;return $susp;}$blk=167;case 167: 

$currLineNo = 79;
$currColNo = 16;

var $loadname189=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname190=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $binop191=Sk.abstr.numberBinOp($loadname189,$loadname190,'Sub');$loc.money=$binop191;if (Sk.breakpoints('<stdin>.py',80,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',80,16);$susp.$blk = 168;$susp.optional = true;return $susp;}$blk=168;case 168: 

$currLineNo = 80;
$currColNo = 16;

$loc.top=$scope0.$const4;$blk=159; continue;case 173: $blk=153; continue;case 174: if (Sk.breakpoints('<stdin>.py',93,13)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',93,13);$susp.$blk = 192;$susp.optional = true;return $susp;}$blk=192;case 192: 

$currLineNo = 93;
$currColNo = 13;

var $loadname216=$loc.top_choice!==undefined?$loc.top_choice:Sk.misceval.loadname('top_choice',$gbl);;var $compareres217=null;$ret = Sk.misceval.richCompareBool($loadname216,$scope0.$const218,'Eq', true);$blk=196;case 196: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',93,13); }$compareres217=Sk.builtin.bool($ret);var $jfalse219=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse219){$blk=195;continue;}$blk=195;case 195: var $jfalse220=($compareres217===false||!Sk.misceval.isTrue($compareres217));if($jfalse220){$blk=194;continue;}if (Sk.breakpoints('<stdin>.py',94,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',94,12);$susp.$blk = 197;$susp.optional = true;return $susp;}$blk=197;case 197: 

$currLineNo = 94;
$currColNo = 12;

$loc.cost=$scope0.$const221;if (Sk.breakpoints('<stdin>.py',95,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',95,12);$susp.$blk = 198;$susp.optional = true;return $susp;}$blk=198;case 198: 

$currLineNo = 95;
$currColNo = 12;

var $loadname222=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $compareres223=null;var $loadname224=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;$ret = Sk.misceval.richCompareBool($loadname222,$loadname224,'Gt', true);$blk=202;case 202: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',95,15); }$compareres223=Sk.builtin.bool($ret);var $jfalse225=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse225){$blk=201;continue;}$blk=201;case 201: var $jfalse226=($compareres223===false||!Sk.misceval.isTrue($compareres223));if($jfalse226){$blk=200;continue;}if (Sk.breakpoints('<stdin>.py',96,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',96,16);$susp.$blk = 203;$susp.optional = true;return $susp;}$blk=203;case 203: 

$currLineNo = 96;
$currColNo = 16;

var $loadname227=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname227.tp$call)?$loadname227.tp$call([$scope0.$const182],undefined) : Sk.misceval.applyOrSuspend($loadname227,undefined,undefined,undefined,[$scope0.$const182]);$blk=204;case 204: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',96,16); }var $call228=$ret;

$currLineNo = 96;
$currColNo = 16;

$blk=199;case 199: if (Sk.breakpoints('<stdin>.py',101,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',101,12);$susp.$blk = 209;$susp.optional = true;return $susp;}$blk=209;case 209: 

$currLineNo = 101;
$currColNo = 12;

var $loadname235=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname235.tp$call)?$loadname235.tp$call([$scope0.$const193],undefined) : Sk.misceval.applyOrSuspend($loadname235,undefined,undefined,undefined,[$scope0.$const193]);$blk=210;case 210: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',101,12); }var $call236=$ret;

$currLineNo = 101;
$currColNo = 12;

if (Sk.breakpoints('<stdin>.py',102,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',102,12);$susp.$blk = 211;$susp.optional = true;return $susp;}$blk=211;case 211: 

$currLineNo = 102;
$currColNo = 12;

$blk=11; continue;$blk=193; continue;case 180: if (Sk.breakpoints('<stdin>.py',88,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',88,16);$susp.$blk = 185;$susp.optional = true;return $susp;}$blk=185;case 185: 

$currLineNo = 88;
$currColNo = 16;

var $loadname208=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname209=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;$ret = ($loadname208.tp$call)?$loadname208.tp$call([$scope0.$const185,$loadname209,$scope0.$const187],undefined) : Sk.misceval.applyOrSuspend($loadname208,undefined,undefined,undefined,[$scope0.$const185,$loadname209,$scope0.$const187]);$blk=186;case 186: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',88,16); }var $call210=$ret;

$currLineNo = 88;
$currColNo = 16;

if (Sk.breakpoints('<stdin>.py',89,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',89,16);$susp.$blk = 187;$susp.optional = true;return $susp;}$blk=187;case 187: 

$currLineNo = 89;
$currColNo = 16;

var $loadname211=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname212=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $binop213=Sk.abstr.numberBinOp($loadname211,$loadname212,'Sub');$loc.money=$binop213;if (Sk.breakpoints('<stdin>.py',90,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',90,16);$susp.$blk = 188;$susp.optional = true;return $susp;}$blk=188;case 188: 

$currLineNo = 90;
$currColNo = 16;

$loc.top=$scope0.$const17;$blk=179; continue;case 193: $blk=173; continue;case 194: if (Sk.breakpoints('<stdin>.py',104,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',104,12);$susp.$blk = 212;$susp.optional = true;return $susp;}$blk=212;case 212: 

$currLineNo = 104;
$currColNo = 12;

var $loadname237=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname237.tp$call)?$loadname237.tp$call([$scope0.$const238],undefined) : Sk.misceval.applyOrSuspend($loadname237,undefined,undefined,undefined,[$scope0.$const238]);$blk=213;case 213: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',104,12); }var $call239=$ret;

$currLineNo = 104;
$currColNo = 12;

if (Sk.breakpoints('<stdin>.py',105,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',105,12);$susp.$blk = 214;$susp.optional = true;return $susp;}$blk=214;case 214: 

$currLineNo = 105;
$currColNo = 12;

$blk=121; continue;$blk=193; continue;case 200: if (Sk.breakpoints('<stdin>.py',98,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',98,16);$susp.$blk = 205;$susp.optional = true;return $susp;}$blk=205;case 205: 

$currLineNo = 98;
$currColNo = 16;

var $loadname229=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname230=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;$ret = ($loadname229.tp$call)?$loadname229.tp$call([$scope0.$const185,$loadname230,$scope0.$const187],undefined) : Sk.misceval.applyOrSuspend($loadname229,undefined,undefined,undefined,[$scope0.$const185,$loadname230,$scope0.$const187]);$blk=206;case 206: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',98,16); }var $call231=$ret;

$currLineNo = 98;
$currColNo = 16;

if (Sk.breakpoints('<stdin>.py',99,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',99,16);$susp.$blk = 207;$susp.optional = true;return $susp;}$blk=207;case 207: 

$currLineNo = 99;
$currColNo = 16;

var $loadname232=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname233=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $binop234=Sk.abstr.numberBinOp($loadname232,$loadname233,'Sub');$loc.money=$binop234;if (Sk.breakpoints('<stdin>.py',100,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',100,16);$susp.$blk = 208;$susp.optional = true;return $susp;}$blk=208;case 208: 

$currLineNo = 100;
$currColNo = 16;

$loc.top=$scope0.$const40;$blk=199; continue;case 217: if (Sk.breakpoints('<stdin>.py',147,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',147,9);$susp.$blk = 300;$susp.optional = true;return $susp;}$blk=300;case 300: 

$currLineNo = 147;
$currColNo = 9;

var $loadname325=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres326=null;$ret = Sk.misceval.richCompareBool($loadname325,$scope0.$const218,'Eq', true);$blk=304;case 304: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',147,9); }$compareres326=Sk.builtin.bool($ret);var $jfalse327=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse327){$blk=303;continue;}$blk=303;case 303: var $jfalse328=($compareres326===false||!Sk.misceval.isTrue($compareres326));if($jfalse328){$blk=302;continue;}if (Sk.breakpoints('<stdin>.py',148,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',148,8);$susp.$blk = 305;$susp.optional = true;return $susp;}$blk=305;case 305: 

$currLineNo = 148;
$currColNo = 8;

$blk=306;case 306: if (Sk.breakpoints('<stdin>.py',148,8)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',148,8);$susp.$blk = 307;$susp.optional = true;return $susp;}$blk=307;case 307: $blk=308;case 308: if (Sk.breakpoints('<stdin>.py',149,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',149,8);$susp.$blk = 309;$susp.optional = true;return $susp;}$blk=309;case 309: 

$currLineNo = 149;
$currColNo = 8;

var $loadname329=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname329.tp$call)?$loadname329.tp$call([$scope0.$const330],undefined) : Sk.misceval.applyOrSuspend($loadname329,undefined,undefined,undefined,[$scope0.$const330]);$blk=310;case 310: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',149,8); }var $call331=$ret;

$currLineNo = 149;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',150,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',150,8);$susp.$blk = 311;$susp.optional = true;return $susp;}$blk=311;case 311: 

$currLineNo = 150;
$currColNo = 8;

var $loadname332=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname332.tp$call)?$loadname332.tp$call([$scope0.$const333],undefined) : Sk.misceval.applyOrSuspend($loadname332,undefined,undefined,undefined,[$scope0.$const333]);$blk=312;case 312: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',150,8); }var $call334=$ret;

$currLineNo = 150;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',151,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',151,8);$susp.$blk = 313;$susp.optional = true;return $susp;}$blk=313;case 313: 

$currLineNo = 151;
$currColNo = 8;

var $loadname335=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname335.tp$call)?$loadname335.tp$call([$scope0.$const73,$scope0.$const3,$scope0.$const74],undefined) : Sk.misceval.applyOrSuspend($loadname335,undefined,undefined,undefined,[$scope0.$const73,$scope0.$const3,$scope0.$const74]);$blk=314;case 314: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',151,8); }var $call336=$ret;

$currLineNo = 151;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',152,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',152,8);$susp.$blk = 315;$susp.optional = true;return $susp;}$blk=315;case 315: 

$currLineNo = 152;
$currColNo = 8;

var $loadname337=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname337.tp$call)?$loadname337.tp$call([$scope0.$const338],undefined) : Sk.misceval.applyOrSuspend($loadname337,undefined,undefined,undefined,[$scope0.$const338]);$blk=316;case 316: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',152,8); }var $call339=$ret;

$currLineNo = 152;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',153,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',153,8);$susp.$blk = 317;$susp.optional = true;return $susp;}$blk=317;case 317: 

$currLineNo = 153;
$currColNo = 8;

var $loadname340=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname340.tp$call)?$loadname340.tp$call([$scope0.$const81,$scope0.$const3,$scope0.$const74],undefined) : Sk.misceval.applyOrSuspend($loadname340,undefined,undefined,undefined,[$scope0.$const81,$scope0.$const3,$scope0.$const74]);$blk=318;case 318: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',153,8); }var $call341=$ret;

$currLineNo = 153;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',154,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',154,8);$susp.$blk = 319;$susp.optional = true;return $susp;}$blk=319;case 319: 

$currLineNo = 154;
$currColNo = 8;

var $loadname342=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname342.tp$call)?$loadname342.tp$call([$scope0.$const343],undefined) : Sk.misceval.applyOrSuspend($loadname342,undefined,undefined,undefined,[$scope0.$const343]);$blk=320;case 320: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',154,8); }var $call344=$ret;

$currLineNo = 154;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',155,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',155,8);$susp.$blk = 321;$susp.optional = true;return $susp;}$blk=321;case 321: 

$currLineNo = 155;
$currColNo = 8;

var $loadname345=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname345.tp$call)?$loadname345.tp$call([$scope0.$const88,$scope0.$const3,$scope0.$const74],undefined) : Sk.misceval.applyOrSuspend($loadname345,undefined,undefined,undefined,[$scope0.$const88,$scope0.$const3,$scope0.$const74]);$blk=322;case 322: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',155,8); }var $call346=$ret;

$currLineNo = 155;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',156,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',156,8);$susp.$blk = 323;$susp.optional = true;return $susp;}$blk=323;case 323: 

$currLineNo = 156;
$currColNo = 8;

var $loadname347=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname347.tp$call)?$loadname347.tp$call([$scope0.$const130],undefined) : Sk.misceval.applyOrSuspend($loadname347,undefined,undefined,undefined,[$scope0.$const130]);$blk=324;case 324: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',156,23); }var $call348=$ret;

$currLineNo = 156;
$currColNo = 23;

$loc.feet_choice=$call348;if (Sk.breakpoints('<stdin>.py',157,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',157,8);$susp.$blk = 325;$susp.optional = true;return $susp;}$blk=325;case 325: 

$currLineNo = 157;
$currColNo = 8;

var $loadname349=$loc.feet_choice!==undefined?$loc.feet_choice:Sk.misceval.loadname('feet_choice',$gbl);;var $compareres350=null;$ret = Sk.misceval.richCompareBool($loadname349,$scope0.$const134,'Eq', true);$blk=329;case 329: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',157,11); }$compareres350=Sk.builtin.bool($ret);var $jfalse351=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse351){$blk=328;continue;}$blk=328;case 328: var $jfalse352=($compareres350===false||!Sk.misceval.isTrue($compareres350));if($jfalse352){$blk=327;continue;}if (Sk.breakpoints('<stdin>.py',158,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',158,12);$susp.$blk = 330;$susp.optional = true;return $susp;}$blk=330;case 330: 

$currLineNo = 158;
$currColNo = 12;

$loc.cost=$scope0.$const353;if (Sk.breakpoints('<stdin>.py',159,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',159,12);$susp.$blk = 331;$susp.optional = true;return $susp;}$blk=331;case 331: 

$currLineNo = 159;
$currColNo = 12;

var $loadname354=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $compareres355=null;var $loadname356=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;$ret = Sk.misceval.richCompareBool($loadname354,$loadname356,'Gt', true);$blk=335;case 335: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',159,15); }$compareres355=Sk.builtin.bool($ret);var $jfalse357=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse357){$blk=334;continue;}$blk=334;case 334: var $jfalse358=($compareres355===false||!Sk.misceval.isTrue($compareres355));if($jfalse358){$blk=333;continue;}if (Sk.breakpoints('<stdin>.py',160,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',160,16);$susp.$blk = 336;$susp.optional = true;return $susp;}$blk=336;case 336: 

$currLineNo = 160;
$currColNo = 16;

var $loadname359=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname359.tp$call)?$loadname359.tp$call([$scope0.$const182],undefined) : Sk.misceval.applyOrSuspend($loadname359,undefined,undefined,undefined,[$scope0.$const182]);$blk=337;case 337: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',160,16); }var $call360=$ret;

$currLineNo = 160;
$currColNo = 16;

$blk=332;case 332: if (Sk.breakpoints('<stdin>.py',165,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',165,12);$susp.$blk = 342;$susp.optional = true;return $susp;}$blk=342;case 342: 

$currLineNo = 165;
$currColNo = 12;

var $loadname367=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname367.tp$call)?$loadname367.tp$call([$scope0.$const193],undefined) : Sk.misceval.applyOrSuspend($loadname367,undefined,undefined,undefined,[$scope0.$const193]);$blk=343;case 343: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',165,12); }var $call368=$ret;

$currLineNo = 165;
$currColNo = 12;

if (Sk.breakpoints('<stdin>.py',166,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',166,12);$susp.$blk = 344;$susp.optional = true;return $susp;}$blk=344;case 344: 

$currLineNo = 166;
$currColNo = 12;

$blk=11; continue;$blk=326; continue;case 242: if (Sk.breakpoints('<stdin>.py',125,13)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',125,13);$susp.$blk = 259;$susp.optional = true;return $susp;}$blk=259;case 259: 

$currLineNo = 125;
$currColNo = 13;

var $loadname284=$loc.bottom_choice!==undefined?$loc.bottom_choice:Sk.misceval.loadname('bottom_choice',$gbl);;var $compareres285=null;$ret = Sk.misceval.richCompareBool($loadname284,$scope0.$const197,'Eq', true);$blk=263;case 263: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',125,13); }$compareres285=Sk.builtin.bool($ret);var $jfalse286=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse286){$blk=262;continue;}$blk=262;case 262: var $jfalse287=($compareres285===false||!Sk.misceval.isTrue($compareres285));if($jfalse287){$blk=261;continue;}if (Sk.breakpoints('<stdin>.py',126,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',126,12);$susp.$blk = 264;$susp.optional = true;return $susp;}$blk=264;case 264: 

$currLineNo = 126;
$currColNo = 12;

$loc.cost=$scope0.$const221;if (Sk.breakpoints('<stdin>.py',127,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',127,12);$susp.$blk = 265;$susp.optional = true;return $susp;}$blk=265;case 265: 

$currLineNo = 127;
$currColNo = 12;

var $loadname288=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $compareres289=null;var $loadname290=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;$ret = Sk.misceval.richCompareBool($loadname288,$loadname290,'Gt', true);$blk=269;case 269: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',127,15); }$compareres289=Sk.builtin.bool($ret);var $jfalse291=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse291){$blk=268;continue;}$blk=268;case 268: var $jfalse292=($compareres289===false||!Sk.misceval.isTrue($compareres289));if($jfalse292){$blk=267;continue;}if (Sk.breakpoints('<stdin>.py',128,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',128,16);$susp.$blk = 270;$susp.optional = true;return $susp;}$blk=270;case 270: 

$currLineNo = 128;
$currColNo = 16;

var $loadname293=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname293.tp$call)?$loadname293.tp$call([$scope0.$const182],undefined) : Sk.misceval.applyOrSuspend($loadname293,undefined,undefined,undefined,[$scope0.$const182]);$blk=271;case 271: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',128,16); }var $call294=$ret;

$currLineNo = 128;
$currColNo = 16;

$blk=266;case 266: if (Sk.breakpoints('<stdin>.py',133,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',133,12);$susp.$blk = 276;$susp.optional = true;return $susp;}$blk=276;case 276: 

$currLineNo = 133;
$currColNo = 12;

var $loadname301=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname301.tp$call)?$loadname301.tp$call([$scope0.$const193],undefined) : Sk.misceval.applyOrSuspend($loadname301,undefined,undefined,undefined,[$scope0.$const193]);$blk=277;case 277: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',133,12); }var $call302=$ret;

$currLineNo = 133;
$currColNo = 12;

$blk=260;case 260: $blk=241; continue;case 248: if (Sk.breakpoints('<stdin>.py',121,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',121,16);$susp.$blk = 253;$susp.optional = true;return $susp;}$blk=253;case 253: 

$currLineNo = 121;
$currColNo = 16;

var $loadname276=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname277=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;$ret = ($loadname276.tp$call)?$loadname276.tp$call([$scope0.$const185,$loadname277,$scope0.$const187],undefined) : Sk.misceval.applyOrSuspend($loadname276,undefined,undefined,undefined,[$scope0.$const185,$loadname277,$scope0.$const187]);$blk=254;case 254: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',121,16); }var $call278=$ret;

$currLineNo = 121;
$currColNo = 16;

if (Sk.breakpoints('<stdin>.py',122,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',122,16);$susp.$blk = 255;$susp.optional = true;return $susp;}$blk=255;case 255: 

$currLineNo = 122;
$currColNo = 16;

var $loadname279=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname280=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $binop281=Sk.abstr.numberBinOp($loadname279,$loadname280,'Sub');$loc.money=$binop281;if (Sk.breakpoints('<stdin>.py',123,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',123,16);$susp.$blk = 256;$susp.optional = true;return $susp;}$blk=256;case 256: 

$currLineNo = 123;
$currColNo = 16;

$loc.bottom=$scope0.$const4;$blk=247; continue;case 261: if (Sk.breakpoints('<stdin>.py',134,13)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',134,13);$susp.$blk = 278;$susp.optional = true;return $susp;}$blk=278;case 278: 

$currLineNo = 134;
$currColNo = 13;

var $loadname303=$loc.bottom_choice!==undefined?$loc.bottom_choice:Sk.misceval.loadname('bottom_choice',$gbl);;var $compareres304=null;$ret = Sk.misceval.richCompareBool($loadname303,$scope0.$const218,'Eq', true);$blk=282;case 282: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',134,13); }$compareres304=Sk.builtin.bool($ret);var $jfalse305=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse305){$blk=281;continue;}$blk=281;case 281: var $jfalse306=($compareres304===false||!Sk.misceval.isTrue($compareres304));if($jfalse306){$blk=280;continue;}if (Sk.breakpoints('<stdin>.py',135,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',135,12);$susp.$blk = 283;$susp.optional = true;return $susp;}$blk=283;case 283: 

$currLineNo = 135;
$currColNo = 12;

$loc.cost=$scope0.$const307;if (Sk.breakpoints('<stdin>.py',136,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',136,12);$susp.$blk = 284;$susp.optional = true;return $susp;}$blk=284;case 284: 

$currLineNo = 136;
$currColNo = 12;

var $loadname308=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $compareres309=null;var $loadname310=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;$ret = Sk.misceval.richCompareBool($loadname308,$loadname310,'Gt', true);$blk=288;case 288: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',136,15); }$compareres309=Sk.builtin.bool($ret);var $jfalse311=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse311){$blk=287;continue;}$blk=287;case 287: var $jfalse312=($compareres309===false||!Sk.misceval.isTrue($compareres309));if($jfalse312){$blk=286;continue;}if (Sk.breakpoints('<stdin>.py',137,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',137,16);$susp.$blk = 289;$susp.optional = true;return $susp;}$blk=289;case 289: 

$currLineNo = 137;
$currColNo = 16;

var $loadname313=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname313.tp$call)?$loadname313.tp$call([$scope0.$const182],undefined) : Sk.misceval.applyOrSuspend($loadname313,undefined,undefined,undefined,[$scope0.$const182]);$blk=290;case 290: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',137,16); }var $call314=$ret;

$currLineNo = 137;
$currColNo = 16;

$blk=285;case 285: if (Sk.breakpoints('<stdin>.py',142,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',142,12);$susp.$blk = 295;$susp.optional = true;return $susp;}$blk=295;case 295: 

$currLineNo = 142;
$currColNo = 12;

var $loadname321=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname321.tp$call)?$loadname321.tp$call([$scope0.$const193],undefined) : Sk.misceval.applyOrSuspend($loadname321,undefined,undefined,undefined,[$scope0.$const193]);$blk=296;case 296: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',142,12); }var $call322=$ret;

$currLineNo = 142;
$currColNo = 12;

$blk=279;case 279: $blk=260; continue;case 267: if (Sk.breakpoints('<stdin>.py',130,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',130,16);$susp.$blk = 272;$susp.optional = true;return $susp;}$blk=272;case 272: 

$currLineNo = 130;
$currColNo = 16;

var $loadname295=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname296=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;$ret = ($loadname295.tp$call)?$loadname295.tp$call([$scope0.$const185,$loadname296,$scope0.$const187],undefined) : Sk.misceval.applyOrSuspend($loadname295,undefined,undefined,undefined,[$scope0.$const185,$loadname296,$scope0.$const187]);$blk=273;case 273: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',130,16); }var $call297=$ret;

$currLineNo = 130;
$currColNo = 16;

if (Sk.breakpoints('<stdin>.py',131,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',131,16);$susp.$blk = 274;$susp.optional = true;return $susp;}$blk=274;case 274: 

$currLineNo = 131;
$currColNo = 16;

var $loadname298=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname299=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $binop300=Sk.abstr.numberBinOp($loadname298,$loadname299,'Sub');$loc.money=$binop300;if (Sk.breakpoints('<stdin>.py',132,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',132,16);$susp.$blk = 275;$susp.optional = true;return $susp;}$blk=275;case 275: 

$currLineNo = 132;
$currColNo = 16;

$loc.bottom=$scope0.$const17;$blk=266; continue;case 280: if (Sk.breakpoints('<stdin>.py',144,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',144,12);$susp.$blk = 297;$susp.optional = true;return $susp;}$blk=297;case 297: 

$currLineNo = 144;
$currColNo = 12;

var $loadname323=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname323.tp$call)?$loadname323.tp$call([$scope0.$const238],undefined) : Sk.misceval.applyOrSuspend($loadname323,undefined,undefined,undefined,[$scope0.$const238]);$blk=298;case 298: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',144,12); }var $call324=$ret;

$currLineNo = 144;
$currColNo = 12;

if (Sk.breakpoints('<stdin>.py',145,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',145,12);$susp.$blk = 299;$susp.optional = true;return $susp;}$blk=299;case 299: 

$currLineNo = 145;
$currColNo = 12;

$blk=221; continue;$blk=279; continue;case 286: if (Sk.breakpoints('<stdin>.py',139,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',139,16);$susp.$blk = 291;$susp.optional = true;return $susp;}$blk=291;case 291: 

$currLineNo = 139;
$currColNo = 16;

var $loadname315=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname316=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;$ret = ($loadname315.tp$call)?$loadname315.tp$call([$scope0.$const185,$loadname316,$scope0.$const187],undefined) : Sk.misceval.applyOrSuspend($loadname315,undefined,undefined,undefined,[$scope0.$const185,$loadname316,$scope0.$const187]);$blk=292;case 292: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',139,16); }var $call317=$ret;

$currLineNo = 139;
$currColNo = 16;

if (Sk.breakpoints('<stdin>.py',140,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',140,16);$susp.$blk = 293;$susp.optional = true;return $susp;}$blk=293;case 293: 

$currLineNo = 140;
$currColNo = 16;

var $loadname318=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname319=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $binop320=Sk.abstr.numberBinOp($loadname318,$loadname319,'Sub');$loc.money=$binop320;if (Sk.breakpoints('<stdin>.py',141,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',141,16);$susp.$blk = 294;$susp.optional = true;return $susp;}$blk=294;case 294: 

$currLineNo = 141;
$currColNo = 16;

$loc.bottom=$scope0.$const40;$blk=285; continue;case 301: $blk=216; continue;case 302: if (Sk.breakpoints('<stdin>.py',190,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',190,9);$susp.$blk = 388;$susp.optional = true;return $susp;}$blk=388;case 388: 

$currLineNo = 190;
$currColNo = 9;

var $loadname409=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres410=null;$ret = Sk.misceval.richCompareBool($loadname409,$scope0.$const411,'Eq', true);$blk=392;case 392: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',190,9); }$compareres410=Sk.builtin.bool($ret);var $jfalse412=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse412){$blk=391;continue;}$blk=391;case 391: var $jfalse413=($compareres410===false||!Sk.misceval.isTrue($compareres410));if($jfalse413){$blk=390;continue;}if (Sk.breakpoints('<stdin>.py',191,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',191,8);$susp.$blk = 393;$susp.optional = true;return $susp;}$blk=393;case 393: 

$currLineNo = 191;
$currColNo = 8;

$blk=394;case 394: if (Sk.breakpoints('<stdin>.py',191,8)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',191,8);$susp.$blk = 395;$susp.optional = true;return $susp;}$blk=395;case 395: $blk=396;case 396: if (Sk.breakpoints('<stdin>.py',192,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',192,8);$susp.$blk = 397;$susp.optional = true;return $susp;}$blk=397;case 397: 

$currLineNo = 192;
$currColNo = 8;

var $loadname414=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname414.tp$call)?$loadname414.tp$call([$scope0.$const415],undefined) : Sk.misceval.applyOrSuspend($loadname414,undefined,undefined,undefined,[$scope0.$const415]);$blk=398;case 398: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',192,8); }var $call416=$ret;

$currLineNo = 192;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',193,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',193,8);$susp.$blk = 399;$susp.optional = true;return $susp;}$blk=399;case 399: 

$currLineNo = 193;
$currColNo = 8;

var $loadname417=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname417.tp$call)?$loadname417.tp$call([$scope0.$const418],undefined) : Sk.misceval.applyOrSuspend($loadname417,undefined,undefined,undefined,[$scope0.$const418]);$blk=400;case 400: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',193,8); }var $call419=$ret;

$currLineNo = 193;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',194,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',194,8);$susp.$blk = 401;$susp.optional = true;return $susp;}$blk=401;case 401: 

$currLineNo = 194;
$currColNo = 8;

var $loadname420=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname420.tp$call)?$loadname420.tp$call([$scope0.$const12,$scope0.$const3,$scope0.$const13],undefined) : Sk.misceval.applyOrSuspend($loadname420,undefined,undefined,undefined,[$scope0.$const12,$scope0.$const3,$scope0.$const13]);$blk=402;case 402: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',194,8); }var $call421=$ret;

$currLineNo = 194;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',195,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',195,8);$susp.$blk = 403;$susp.optional = true;return $susp;}$blk=403;case 403: 

$currLineNo = 195;
$currColNo = 8;

var $loadname422=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname422.tp$call)?$loadname422.tp$call([$scope0.$const423],undefined) : Sk.misceval.applyOrSuspend($loadname422,undefined,undefined,undefined,[$scope0.$const423]);$blk=404;case 404: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',195,8); }var $call424=$ret;

$currLineNo = 195;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',196,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',196,8);$susp.$blk = 405;$susp.optional = true;return $susp;}$blk=405;case 405: 

$currLineNo = 196;
$currColNo = 8;

var $loadname425=$loc.printImage!==undefined?$loc.printImage:Sk.misceval.loadname('printImage',$gbl);;$ret = ($loadname425.tp$call)?$loadname425.tp$call([$scope0.$const21,$scope0.$const3,$scope0.$const13],undefined) : Sk.misceval.applyOrSuspend($loadname425,undefined,undefined,undefined,[$scope0.$const21,$scope0.$const3,$scope0.$const13]);$blk=406;case 406: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',196,8); }var $call426=$ret;

$currLineNo = 196;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',197,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',197,8);$susp.$blk = 407;$susp.optional = true;return $susp;}$blk=407;case 407: 

$currLineNo = 197;
$currColNo = 8;

var $loadname427=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname427.tp$call)?$loadname427.tp$call([$scope0.$const130],undefined) : Sk.misceval.applyOrSuspend($loadname427,undefined,undefined,undefined,[$scope0.$const130]);$blk=408;case 408: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',197,15); }var $call428=$ret;

$currLineNo = 197;
$currColNo = 15;

$loc.face=$call428;if (Sk.breakpoints('<stdin>.py',198,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',198,8);$susp.$blk = 409;$susp.optional = true;return $susp;}$blk=409;case 409: 

$currLineNo = 198;
$currColNo = 8;

var $loadname429=$loc.face!==undefined?$loc.face:Sk.misceval.loadname('face',$gbl);;var $compareres430=null;$ret = Sk.misceval.richCompareBool($loadname429,$scope0.$const134,'Eq', true);$blk=413;case 413: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',198,11); }$compareres430=Sk.builtin.bool($ret);var $jfalse431=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse431){$blk=412;continue;}$blk=412;case 412: var $jfalse432=($compareres430===false||!Sk.misceval.isTrue($compareres430));if($jfalse432){$blk=411;continue;}if (Sk.breakpoints('<stdin>.py',199,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',199,12);$susp.$blk = 414;$susp.optional = true;return $susp;}$blk=414;case 414: 

$currLineNo = 199;
$currColNo = 12;

$loc.head=$scope0.$const4;if (Sk.breakpoints('<stdin>.py',200,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',200,12);$susp.$blk = 415;$susp.optional = true;return $susp;}$blk=415;case 415: 

$currLineNo = 200;
$currColNo = 12;

$blk=11; continue;$blk=410; continue;case 326: $blk=301; continue;case 327: if (Sk.breakpoints('<stdin>.py',167,13)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',167,13);$susp.$blk = 345;$susp.optional = true;return $susp;}$blk=345;case 345: 

$currLineNo = 167;
$currColNo = 13;

var $loadname369=$loc.feet_choice!==undefined?$loc.feet_choice:Sk.misceval.loadname('feet_choice',$gbl);;var $compareres370=null;$ret = Sk.misceval.richCompareBool($loadname369,$scope0.$const197,'Eq', true);$blk=349;case 349: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',167,13); }$compareres370=Sk.builtin.bool($ret);var $jfalse371=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse371){$blk=348;continue;}$blk=348;case 348: var $jfalse372=($compareres370===false||!Sk.misceval.isTrue($compareres370));if($jfalse372){$blk=347;continue;}if (Sk.breakpoints('<stdin>.py',168,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',168,12);$susp.$blk = 350;$susp.optional = true;return $susp;}$blk=350;case 350: 

$currLineNo = 168;
$currColNo = 12;

$loc.cost=$scope0.$const3;if (Sk.breakpoints('<stdin>.py',169,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',169,12);$susp.$blk = 351;$susp.optional = true;return $susp;}$blk=351;case 351: 

$currLineNo = 169;
$currColNo = 12;

var $loadname373=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $compareres374=null;var $loadname375=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;$ret = Sk.misceval.richCompareBool($loadname373,$loadname375,'Gt', true);$blk=355;case 355: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',169,15); }$compareres374=Sk.builtin.bool($ret);var $jfalse376=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse376){$blk=354;continue;}$blk=354;case 354: var $jfalse377=($compareres374===false||!Sk.misceval.isTrue($compareres374));if($jfalse377){$blk=353;continue;}if (Sk.breakpoints('<stdin>.py',170,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',170,16);$susp.$blk = 356;$susp.optional = true;return $susp;}$blk=356;case 356: 

$currLineNo = 170;
$currColNo = 16;

var $loadname378=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname378.tp$call)?$loadname378.tp$call([$scope0.$const182],undefined) : Sk.misceval.applyOrSuspend($loadname378,undefined,undefined,undefined,[$scope0.$const182]);$blk=357;case 357: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',170,16); }var $call379=$ret;

$currLineNo = 170;
$currColNo = 16;

$blk=352;case 352: if (Sk.breakpoints('<stdin>.py',175,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',175,12);$susp.$blk = 362;$susp.optional = true;return $susp;}$blk=362;case 362: 

$currLineNo = 175;
$currColNo = 12;

var $loadname386=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname386.tp$call)?$loadname386.tp$call([$scope0.$const193],undefined) : Sk.misceval.applyOrSuspend($loadname386,undefined,undefined,undefined,[$scope0.$const193]);$blk=363;case 363: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',175,12); }var $call387=$ret;

$currLineNo = 175;
$currColNo = 12;

if (Sk.breakpoints('<stdin>.py',176,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',176,12);$susp.$blk = 364;$susp.optional = true;return $susp;}$blk=364;case 364: 

$currLineNo = 176;
$currColNo = 12;

$blk=11; continue;$blk=346; continue;case 333: if (Sk.breakpoints('<stdin>.py',162,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',162,16);$susp.$blk = 338;$susp.optional = true;return $susp;}$blk=338;case 338: 

$currLineNo = 162;
$currColNo = 16;

var $loadname361=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname362=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;$ret = ($loadname361.tp$call)?$loadname361.tp$call([$scope0.$const185,$loadname362,$scope0.$const187],undefined) : Sk.misceval.applyOrSuspend($loadname361,undefined,undefined,undefined,[$scope0.$const185,$loadname362,$scope0.$const187]);$blk=339;case 339: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',162,16); }var $call363=$ret;

$currLineNo = 162;
$currColNo = 16;

if (Sk.breakpoints('<stdin>.py',163,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',163,16);$susp.$blk = 340;$susp.optional = true;return $susp;}$blk=340;case 340: 

$currLineNo = 163;
$currColNo = 16;

var $loadname364=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname365=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $binop366=Sk.abstr.numberBinOp($loadname364,$loadname365,'Sub');$loc.money=$binop366;if (Sk.breakpoints('<stdin>.py',164,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',164,16);$susp.$blk = 341;$susp.optional = true;return $susp;}$blk=341;case 341: 

$currLineNo = 164;
$currColNo = 16;

$loc.feet=$scope0.$const4;$blk=332; continue;case 346: $blk=326; continue;case 347: if (Sk.breakpoints('<stdin>.py',177,13)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',177,13);$susp.$blk = 365;$susp.optional = true;return $susp;}$blk=365;case 365: 

$currLineNo = 177;
$currColNo = 13;

var $loadname388=$loc.feet_choice!==undefined?$loc.feet_choice:Sk.misceval.loadname('feet_choice',$gbl);;var $compareres389=null;$ret = Sk.misceval.richCompareBool($loadname388,$scope0.$const218,'Eq', true);$blk=369;case 369: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',177,13); }$compareres389=Sk.builtin.bool($ret);var $jfalse390=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse390){$blk=368;continue;}$blk=368;case 368: var $jfalse391=($compareres389===false||!Sk.misceval.isTrue($compareres389));if($jfalse391){$blk=367;continue;}if (Sk.breakpoints('<stdin>.py',178,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',178,12);$susp.$blk = 370;$susp.optional = true;return $susp;}$blk=370;case 370: 

$currLineNo = 178;
$currColNo = 12;

$loc.cost=$scope0.$const3;if (Sk.breakpoints('<stdin>.py',179,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',179,12);$susp.$blk = 371;$susp.optional = true;return $susp;}$blk=371;case 371: 

$currLineNo = 179;
$currColNo = 12;

var $loadname392=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $compareres393=null;var $loadname394=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;$ret = Sk.misceval.richCompareBool($loadname392,$loadname394,'Gt', true);$blk=375;case 375: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',179,15); }$compareres393=Sk.builtin.bool($ret);var $jfalse395=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse395){$blk=374;continue;}$blk=374;case 374: var $jfalse396=($compareres393===false||!Sk.misceval.isTrue($compareres393));if($jfalse396){$blk=373;continue;}if (Sk.breakpoints('<stdin>.py',180,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',180,16);$susp.$blk = 376;$susp.optional = true;return $susp;}$blk=376;case 376: 

$currLineNo = 180;
$currColNo = 16;

var $loadname397=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname397.tp$call)?$loadname397.tp$call([$scope0.$const182],undefined) : Sk.misceval.applyOrSuspend($loadname397,undefined,undefined,undefined,[$scope0.$const182]);$blk=377;case 377: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',180,16); }var $call398=$ret;

$currLineNo = 180;
$currColNo = 16;

$blk=372;case 372: if (Sk.breakpoints('<stdin>.py',185,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',185,12);$susp.$blk = 382;$susp.optional = true;return $susp;}$blk=382;case 382: 

$currLineNo = 185;
$currColNo = 12;

var $loadname405=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname405.tp$call)?$loadname405.tp$call([$scope0.$const193],undefined) : Sk.misceval.applyOrSuspend($loadname405,undefined,undefined,undefined,[$scope0.$const193]);$blk=383;case 383: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',185,12); }var $call406=$ret;

$currLineNo = 185;
$currColNo = 12;

if (Sk.breakpoints('<stdin>.py',186,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',186,12);$susp.$blk = 384;$susp.optional = true;return $susp;}$blk=384;case 384: 

$currLineNo = 186;
$currColNo = 12;

$blk=11; continue;$blk=366; continue;case 353: if (Sk.breakpoints('<stdin>.py',172,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',172,16);$susp.$blk = 358;$susp.optional = true;return $susp;}$blk=358;case 358: 

$currLineNo = 172;
$currColNo = 16;

var $loadname380=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname381=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;$ret = ($loadname380.tp$call)?$loadname380.tp$call([$scope0.$const185,$loadname381,$scope0.$const187],undefined) : Sk.misceval.applyOrSuspend($loadname380,undefined,undefined,undefined,[$scope0.$const185,$loadname381,$scope0.$const187]);$blk=359;case 359: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',172,16); }var $call382=$ret;

$currLineNo = 172;
$currColNo = 16;

if (Sk.breakpoints('<stdin>.py',173,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',173,16);$susp.$blk = 360;$susp.optional = true;return $susp;}$blk=360;case 360: 

$currLineNo = 173;
$currColNo = 16;

var $loadname383=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname384=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $binop385=Sk.abstr.numberBinOp($loadname383,$loadname384,'Sub');$loc.money=$binop385;if (Sk.breakpoints('<stdin>.py',174,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',174,16);$susp.$blk = 361;$susp.optional = true;return $susp;}$blk=361;case 361: 

$currLineNo = 174;
$currColNo = 16;

$loc.feet=$scope0.$const17;$blk=352; continue;case 366: $blk=346; continue;case 367: if (Sk.breakpoints('<stdin>.py',188,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',188,12);$susp.$blk = 385;$susp.optional = true;return $susp;}$blk=385;case 385: 

$currLineNo = 188;
$currColNo = 12;

var $loadname407=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname407.tp$call)?$loadname407.tp$call([$scope0.$const238],undefined) : Sk.misceval.applyOrSuspend($loadname407,undefined,undefined,undefined,[$scope0.$const238]);$blk=386;case 386: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',188,12); }var $call408=$ret;

$currLineNo = 188;
$currColNo = 12;

if (Sk.breakpoints('<stdin>.py',189,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',189,12);$susp.$blk = 387;$susp.optional = true;return $susp;}$blk=387;case 387: 

$currLineNo = 189;
$currColNo = 12;

$blk=306; continue;$blk=366; continue;case 373: if (Sk.breakpoints('<stdin>.py',182,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',182,16);$susp.$blk = 378;$susp.optional = true;return $susp;}$blk=378;case 378: 

$currLineNo = 182;
$currColNo = 16;

var $loadname399=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname400=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;$ret = ($loadname399.tp$call)?$loadname399.tp$call([$scope0.$const185,$loadname400,$scope0.$const187],undefined) : Sk.misceval.applyOrSuspend($loadname399,undefined,undefined,undefined,[$scope0.$const185,$loadname400,$scope0.$const187]);$blk=379;case 379: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',182,16); }var $call401=$ret;

$currLineNo = 182;
$currColNo = 16;

if (Sk.breakpoints('<stdin>.py',183,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',183,16);$susp.$blk = 380;$susp.optional = true;return $susp;}$blk=380;case 380: 

$currLineNo = 183;
$currColNo = 16;

var $loadname402=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname403=$loc.cost!==undefined?$loc.cost:Sk.misceval.loadname('cost',$gbl);;var $binop404=Sk.abstr.numberBinOp($loadname402,$loadname403,'Sub');$loc.money=$binop404;if (Sk.breakpoints('<stdin>.py',184,16)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',184,16);$susp.$blk = 381;$susp.optional = true;return $susp;}$blk=381;case 381: 

$currLineNo = 184;
$currColNo = 16;

$loc.feet=$scope0.$const40;$blk=372; continue;case 389: $blk=301; continue;case 390: if (Sk.breakpoints('<stdin>.py',207,9)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',207,9);$susp.$blk = 426;$susp.optional = true;return $susp;}$blk=426;case 426: 

$currLineNo = 207;
$currColNo = 9;

var $loadname439=$loc.choice!==undefined?$loc.choice:Sk.misceval.loadname('choice',$gbl);;var $compareres440=null;$ret = Sk.misceval.richCompareBool($loadname439,$scope0.$const441,'Eq', true);$blk=429;case 429: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',207,9); }$compareres440=Sk.builtin.bool($ret);var $jfalse442=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse442){$blk=428;continue;}$blk=428;case 428: var $jfalse443=($compareres440===false||!Sk.misceval.isTrue($compareres440));if($jfalse443){$blk=427;continue;}if (Sk.breakpoints('<stdin>.py',208,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',208,8);$susp.$blk = 430;$susp.optional = true;return $susp;}$blk=430;case 430: 

$currLineNo = 208;
$currColNo = 8;

$blk=433; continue;$blk=427;case 433: if (Sk.breakpoints('<stdin>.py',212,0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py',212,0);$susp.$blk = 434;$susp.optional = true;return $susp;}$blk=434;case 434: $blk=435;case 435: if (Sk.breakpoints('<stdin>.py',213,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',213,0);$susp.$blk = 436;$susp.optional = true;return $susp;}$blk=436;case 436: 

$currLineNo = 213;
$currColNo = 0;

var $loadname444=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $compareres445=null;$ret = Sk.misceval.richCompareBool($loadname444,$scope0.$const4,'Eq', true);$blk=439;case 439: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',213,3); }$compareres445=Sk.builtin.bool($ret);var $jfalse446=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse446){$blk=438;continue;}$blk=438;case 438: var $jfalse447=($compareres445===false||!Sk.misceval.isTrue($compareres445));if($jfalse447){$blk=437;continue;}if (Sk.breakpoints('<stdin>.py',214,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',214,4);$susp.$blk = 440;$susp.optional = true;return $susp;}$blk=440;case 440: 

$currLineNo = 214;
$currColNo = 4;

$blk=11; continue;$blk=437; continue;case 410: $blk=389; continue;case 411: if (Sk.breakpoints('<stdin>.py',201,13)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',201,13);$susp.$blk = 416;$susp.optional = true;return $susp;}$blk=416;case 416: 

$currLineNo = 201;
$currColNo = 13;

var $loadname433=$loc.face!==undefined?$loc.face:Sk.misceval.loadname('face',$gbl);;var $compareres434=null;$ret = Sk.misceval.richCompareBool($loadname433,$scope0.$const197,'Eq', true);$blk=420;case 420: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',201,13); }$compareres434=Sk.builtin.bool($ret);var $jfalse435=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse435){$blk=419;continue;}$blk=419;case 419: var $jfalse436=($compareres434===false||!Sk.misceval.isTrue($compareres434));if($jfalse436){$blk=418;continue;}if (Sk.breakpoints('<stdin>.py',202,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',202,12);$susp.$blk = 421;$susp.optional = true;return $susp;}$blk=421;case 421: 

$currLineNo = 202;
$currColNo = 12;

$loc.head=$scope0.$const17;if (Sk.breakpoints('<stdin>.py',203,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',203,12);$susp.$blk = 422;$susp.optional = true;return $susp;}$blk=422;case 422: 

$currLineNo = 203;
$currColNo = 12;

$blk=11; continue;$blk=417; continue;case 417: $blk=410; continue;case 418: if (Sk.breakpoints('<stdin>.py',205,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',205,12);$susp.$blk = 423;$susp.optional = true;return $susp;}$blk=423;case 423: 

$currLineNo = 205;
$currColNo = 12;

var $loadname437=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname437.tp$call)?$loadname437.tp$call([$scope0.$const238],undefined) : Sk.misceval.applyOrSuspend($loadname437,undefined,undefined,undefined,[$scope0.$const238]);$blk=424;case 424: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',205,12); }var $call438=$ret;

$currLineNo = 205;
$currColNo = 12;

if (Sk.breakpoints('<stdin>.py',206,12)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',206,12);$susp.$blk = 425;$susp.optional = true;return $susp;}$blk=425;case 425: 

$currLineNo = 206;
$currColNo = 12;

$blk=394; continue;$blk=417; continue;case 427: $blk=389; continue;case 432: 

$currLineNo = 212;
$currColNo = 0;

$blk=433; continue;case 437: if (Sk.breakpoints('<stdin>.py',215,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',215,0);$susp.$blk = 441;$susp.optional = true;return $susp;}$blk=441;case 441: 

$currLineNo = 215;
$currColNo = 0;

var $loadname448=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname449=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname449.tp$getattr($scope0.$const100, true);$blk=442;case 442: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',215,20); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname449.sk$attrError() + " has no attribute '" + $scope0.$const100.$jsstr() + "'");
};var $lattr450=$ret;var $binop451=Sk.abstr.numberBinOp($scope0.$const98,$lattr450,'Add');var $binop452=Sk.abstr.numberBinOp($binop451,$scope0.$const103,'Add');var $loadname453=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname454=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname454.tp$getattr($scope0.$const107, true);$blk=443;case 443: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',215,47); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname454.sk$attrError() + " has no attribute '" + $scope0.$const107.$jsstr() + "'");
};var $lattr455=$ret;$ret = ($loadname448.tp$call)?$loadname448.tp$call([$binop452,$loadname453,$lattr455,$scope0.$const456],undefined) : Sk.misceval.applyOrSuspend($loadname448,undefined,undefined,undefined,[$binop452,$loadname453,$lattr455,$scope0.$const456]);$blk=444;case 444: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',215,0); }var $call457=$ret;

$currLineNo = 215;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',216,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',216,0);$susp.$blk = 445;$susp.optional = true;return $susp;}$blk=445;case 445: 

$currLineNo = 216;
$currColNo = 0;

var $loadname458=$loc.int_$rw$!==undefined?$loc.int_$rw$:Sk.misceval.loadname('int_$rw$',$gbl);;var $loadname459=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname459.tp$call)?$loadname459.tp$call([$scope0.$const460],undefined) : Sk.misceval.applyOrSuspend($loadname459,undefined,undefined,undefined,[$scope0.$const460]);$blk=446;case 446: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',216,10); }var $call461=$ret;

$currLineNo = 216;
$currColNo = 10;

$ret = ($loadname458.tp$call)?$loadname458.tp$call([$call461],undefined) : Sk.misceval.applyOrSuspend($loadname458,undefined,undefined,undefined,[$call461]);$blk=447;case 447: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',216,6); }var $call462=$ret;

$currLineNo = 216;
$currColNo = 6;

$loc.bet=$call462;if (Sk.breakpoints('<stdin>.py',217,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',217,0);$susp.$blk = 448;$susp.optional = true;return $susp;}$blk=448;case 448: 

$currLineNo = 217;
$currColNo = 0;

var $loadname463=$loc.bet!==undefined?$loc.bet:Sk.misceval.loadname('bet',$gbl);;var $compareres464=null;var $loadname465=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;$ret = Sk.misceval.richCompareBool($loadname463,$loadname465,'Gt', true);$blk=451;case 451: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',217,3); }$compareres464=Sk.builtin.bool($ret);var $jfalse466=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse466){$blk=450;continue;}$blk=450;case 450: var $jfalse467=($compareres464===false||!Sk.misceval.isTrue($compareres464));if($jfalse467){$blk=449;continue;}if (Sk.breakpoints('<stdin>.py',218,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',218,4);$susp.$blk = 452;$susp.optional = true;return $susp;}$blk=452;case 452: 

$currLineNo = 218;
$currColNo = 4;

var $loadname468=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname468.tp$call)?$loadname468.tp$call([$scope0.$const469],undefined) : Sk.misceval.applyOrSuspend($loadname468,undefined,undefined,undefined,[$scope0.$const469]);$blk=453;case 453: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',218,4); }var $call470=$ret;

$currLineNo = 218;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',219,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',219,4);$susp.$blk = 454;$susp.optional = true;return $susp;}$blk=454;case 454: 

$currLineNo = 219;
$currColNo = 4;

$blk=433; continue;$blk=449; continue;case 449: if (Sk.breakpoints('<stdin>.py',220,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',220,0);$susp.$blk = 455;$susp.optional = true;return $susp;}$blk=455;case 455: 

$currLineNo = 220;
$currColNo = 0;

var $loadname471=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname471.tp$call)?$loadname471.tp$call([$scope0.$const472],undefined) : Sk.misceval.applyOrSuspend($loadname471,undefined,undefined,undefined,[$scope0.$const472]);$blk=456;case 456: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',220,8); }var $call473=$ret;

$currLineNo = 220;
$currColNo = 8;

$loc.guess=$call473;if (Sk.breakpoints('<stdin>.py',221,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',221,0);$susp.$blk = 457;$susp.optional = true;return $susp;}$blk=457;case 457: 

$currLineNo = 221;
$currColNo = 0;

var $loadname474=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname474.tp$call)?$loadname474.tp$call([$scope0.$const475],undefined) : Sk.misceval.applyOrSuspend($loadname474,undefined,undefined,undefined,[$scope0.$const475]);$blk=458;case 458: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',221,0); }var $call476=$ret;

$currLineNo = 221;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',222,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',222,0);$susp.$blk = 459;$susp.optional = true;return $susp;}$blk=459;case 459: 

$currLineNo = 222;
$currColNo = 0;

var $loadname477=$loc.playFreeSoundOrg!==undefined?$loc.playFreeSoundOrg:Sk.misceval.loadname('playFreeSoundOrg',$gbl);;$ret = ($loadname477.tp$call)?$loadname477.tp$call([$scope0.$const478],undefined) : Sk.misceval.applyOrSuspend($loadname477,undefined,undefined,undefined,[$scope0.$const478]);$blk=460;case 460: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',222,0); }var $call479=$ret;

$currLineNo = 222;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',223,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',223,0);$susp.$blk = 461;$susp.optional = true;return $susp;}$blk=461;case 461: 

$currLineNo = 223;
$currColNo = 0;

var $loadname480=$loc.slowPrint!==undefined?$loc.slowPrint:Sk.misceval.loadname('slowPrint',$gbl);;$ret = ($loadname480.tp$call)?$loadname480.tp$call([$scope0.$const481],['delay',$scope0.$const482]) : Sk.misceval.applyOrSuspend($loadname480,undefined,undefined,['delay',$scope0.$const482],[$scope0.$const481]);$blk=462;case 462: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',223,0); }var $call483=$ret;

$currLineNo = 223;
$currColNo = 0;

if (Sk.breakpoints('<stdin>.py',224,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',224,0);$susp.$blk = 463;$susp.optional = true;return $susp;}$blk=463;case 463: 

$currLineNo = 224;
$currColNo = 0;

var $loadname484=$loc.randint!==undefined?$loc.randint:Sk.misceval.loadname('randint',$gbl);;$ret = ($loadname484.tp$call)?$loadname484.tp$call([$scope0.$const4,$scope0.$const17],undefined) : Sk.misceval.applyOrSuspend($loadname484,undefined,undefined,undefined,[$scope0.$const4,$scope0.$const17]);$blk=464;case 464: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',224,7); }var $call485=$ret;

$currLineNo = 224;
$currColNo = 7;

$loc.flip=$call485;if (Sk.breakpoints('<stdin>.py',225,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',225,0);$susp.$blk = 465;$susp.optional = true;return $susp;}$blk=465;case 465: 

$currLineNo = 225;
$currColNo = 0;

var $loadname486=$loc.flip!==undefined?$loc.flip:Sk.misceval.loadname('flip',$gbl);;var $compareres487=null;$ret = Sk.misceval.richCompareBool($loadname486,$scope0.$const4,'Eq', true);$blk=469;case 469: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',225,3); }$compareres487=Sk.builtin.bool($ret);var $jfalse488=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse488){$blk=468;continue;}$blk=468;case 468: var $jfalse489=($compareres487===false||!Sk.misceval.isTrue($compareres487));if($jfalse489){$blk=467;continue;}if (Sk.breakpoints('<stdin>.py',226,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',226,4);$susp.$blk = 470;$susp.optional = true;return $susp;}$blk=470;case 470: 

$currLineNo = 226;
$currColNo = 4;

var $loadname490=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname490.tp$call)?$loadname490.tp$call([$scope0.$const491],undefined) : Sk.misceval.applyOrSuspend($loadname490,undefined,undefined,undefined,[$scope0.$const491]);$blk=471;case 471: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',226,4); }var $call492=$ret;

$currLineNo = 226;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',227,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',227,4);$susp.$blk = 472;$susp.optional = true;return $susp;}$blk=472;case 472: 

$currLineNo = 227;
$currColNo = 4;

var $loadname493=$loc.guess!==undefined?$loc.guess:Sk.misceval.loadname('guess',$gbl);;var $compareres494=null;$ret = Sk.misceval.richCompareBool($loadname493,$scope0.$const495,'Eq', true);$blk=476;case 476: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',227,7); }$compareres494=Sk.builtin.bool($ret);var $jfalse496=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse496){$blk=475;continue;}$blk=475;case 475: var $jfalse497=($compareres494===false||!Sk.misceval.isTrue($compareres494));if($jfalse497){$blk=474;continue;}if (Sk.breakpoints('<stdin>.py',228,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',228,8);$susp.$blk = 477;$susp.optional = true;return $susp;}$blk=477;case 477: 

$currLineNo = 228;
$currColNo = 8;

var $loadname498=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname499=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname499.tp$getattr($scope0.$const100, true);$blk=478;case 478: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',228,14); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname499.sk$attrError() + " has no attribute '" + $scope0.$const100.$jsstr() + "'");
};var $lattr500=$ret;var $binop502=Sk.abstr.numberBinOp($lattr500,$scope0.$const501,'Add');var $loadname503=$loc.bet!==undefined?$loc.bet:Sk.misceval.loadname('bet',$gbl);;var $loadname505=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname505.tp$getattr($scope0.$const107, true);$blk=479;case 479: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',228,53); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname505.sk$attrError() + " has no attribute '" + $scope0.$const107.$jsstr() + "'");
};var $lattr506=$ret;var $binop507=Sk.abstr.numberBinOp($scope0.$const504,$lattr506,'Add');$ret = ($loadname498.tp$call)?$loadname498.tp$call([$binop502,$loadname503,$binop507],undefined) : Sk.misceval.applyOrSuspend($loadname498,undefined,undefined,undefined,[$binop502,$loadname503,$binop507]);$blk=480;case 480: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',228,8); }var $call508=$ret;

$currLineNo = 228;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',229,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',229,8);$susp.$blk = 481;$susp.optional = true;return $susp;}$blk=481;case 481: 

$currLineNo = 229;
$currColNo = 8;

var $loadname509=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname510=$loc.bet!==undefined?$loc.bet:Sk.misceval.loadname('bet',$gbl);;var $binop511=Sk.abstr.numberBinOp($loadname509,$loadname510,'Add');$loc.money=$binop511;$blk=473;case 473: $blk=466;case 466: if (Sk.breakpoints('<stdin>.py',241,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',241,0);$susp.$blk = 504;$susp.optional = true;return $susp;}$blk=504;case 504: 

$currLineNo = 241;
$currColNo = 0;

var $loadname557=$loc.input!==undefined?$loc.input:Sk.misceval.loadname('input',$gbl);;$ret = ($loadname557.tp$call)?$loadname557.tp$call([$scope0.$const558],undefined) : Sk.misceval.applyOrSuspend($loadname557,undefined,undefined,undefined,[$scope0.$const558]);$blk=505;case 505: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',241,7); }var $call559=$ret;

$currLineNo = 241;
$currColNo = 7;

$loc.play=$call559;if (Sk.breakpoints('<stdin>.py',242,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',242,0);$susp.$blk = 506;$susp.optional = true;return $susp;}$blk=506;case 506: 

$currLineNo = 242;
$currColNo = 0;

var $loadname560=$loc.play!==undefined?$loc.play:Sk.misceval.loadname('play',$gbl);;var $compareres561=null;$ret = Sk.misceval.richCompareBool($loadname560,$scope0.$const562,'Eq', true);$blk=509;case 509: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',242,3); }$compareres561=Sk.builtin.bool($ret);var $jfalse563=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse563){$blk=508;continue;}$blk=508;case 508: var $jfalse564=($compareres561===false||!Sk.misceval.isTrue($compareres561));if($jfalse564){$blk=507;continue;}if (Sk.breakpoints('<stdin>.py',243,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',243,4);$susp.$blk = 510;$susp.optional = true;return $susp;}$blk=510;case 510: 

$currLineNo = 243;
$currColNo = 4;

$blk=433; continue;$blk=507; continue;case 467: if (Sk.breakpoints('<stdin>.py',234,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',234,4);$susp.$blk = 487;$susp.optional = true;return $susp;}$blk=487;case 487: 

$currLineNo = 234;
$currColNo = 4;

var $loadname526=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;$ret = ($loadname526.tp$call)?$loadname526.tp$call([$scope0.$const527],undefined) : Sk.misceval.applyOrSuspend($loadname526,undefined,undefined,undefined,[$scope0.$const527]);$blk=488;case 488: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',234,4); }var $call528=$ret;

$currLineNo = 234;
$currColNo = 4;

if (Sk.breakpoints('<stdin>.py',235,4)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',235,4);$susp.$blk = 489;$susp.optional = true;return $susp;}$blk=489;case 489: 

$currLineNo = 235;
$currColNo = 4;

var $loadname529=$loc.guess!==undefined?$loc.guess:Sk.misceval.loadname('guess',$gbl);;var $compareres530=null;$ret = Sk.misceval.richCompareBool($loadname529,$scope0.$const495,'Eq', true);$blk=493;case 493: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',235,7); }$compareres530=Sk.builtin.bool($ret);var $jfalse531=($ret===false||!Sk.misceval.isTrue($ret));if($jfalse531){$blk=492;continue;}$blk=492;case 492: var $jfalse532=($compareres530===false||!Sk.misceval.isTrue($compareres530));if($jfalse532){$blk=491;continue;}if (Sk.breakpoints('<stdin>.py',236,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',236,8);$susp.$blk = 494;$susp.optional = true;return $susp;}$blk=494;case 494: 

$currLineNo = 236;
$currColNo = 8;

var $loadname533=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname534=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname534.tp$getattr($scope0.$const514, true);$blk=495;case 495: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',236,14); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname534.sk$attrError() + " has no attribute '" + $scope0.$const514.$jsstr() + "'");
};var $lattr535=$ret;var $binop536=Sk.abstr.numberBinOp($lattr535,$scope0.$const516,'Add');var $loadname537=$loc.bet!==undefined?$loc.bet:Sk.misceval.loadname('bet',$gbl);;var $loadname538=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname538.tp$getattr($scope0.$const107, true);$blk=496;case 496: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',236,58); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname538.sk$attrError() + " has no attribute '" + $scope0.$const107.$jsstr() + "'");
};var $lattr539=$ret;var $binop540=Sk.abstr.numberBinOp($scope0.$const504,$lattr539,'Add');$ret = ($loadname533.tp$call)?$loadname533.tp$call([$binop536,$loadname537,$binop540],undefined) : Sk.misceval.applyOrSuspend($loadname533,undefined,undefined,undefined,[$binop536,$loadname537,$binop540]);$blk=497;case 497: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',236,8); }var $call541=$ret;

$currLineNo = 236;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',237,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',237,8);$susp.$blk = 498;$susp.optional = true;return $susp;}$blk=498;case 498: 

$currLineNo = 237;
$currColNo = 8;

var $loadname542=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname543=$loc.bet!==undefined?$loc.bet:Sk.misceval.loadname('bet',$gbl);;var $binop544=Sk.abstr.numberBinOp($loadname542,$loadname543,'Sub');$loc.money=$binop544;$blk=490;case 490: $blk=466; continue;case 474: if (Sk.breakpoints('<stdin>.py',231,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',231,8);$susp.$blk = 482;$susp.optional = true;return $susp;}$blk=482;case 482: 

$currLineNo = 231;
$currColNo = 8;

var $loadname512=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname513=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname513.tp$getattr($scope0.$const514, true);$blk=483;case 483: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',231,14); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname513.sk$attrError() + " has no attribute '" + $scope0.$const514.$jsstr() + "'");
};var $lattr515=$ret;var $binop517=Sk.abstr.numberBinOp($lattr515,$scope0.$const516,'Add');var $loadname518=$loc.bet!==undefined?$loc.bet:Sk.misceval.loadname('bet',$gbl);;var $loadname519=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname519.tp$getattr($scope0.$const107, true);$blk=484;case 484: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',231,58); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname519.sk$attrError() + " has no attribute '" + $scope0.$const107.$jsstr() + "'");
};var $lattr520=$ret;var $binop521=Sk.abstr.numberBinOp($scope0.$const504,$lattr520,'Add');$ret = ($loadname512.tp$call)?$loadname512.tp$call([$binop517,$loadname518,$binop521],undefined) : Sk.misceval.applyOrSuspend($loadname512,undefined,undefined,undefined,[$binop517,$loadname518,$binop521]);$blk=485;case 485: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',231,8); }var $call522=$ret;

$currLineNo = 231;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',232,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',232,8);$susp.$blk = 486;$susp.optional = true;return $susp;}$blk=486;case 486: 

$currLineNo = 232;
$currColNo = 8;

var $loadname523=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname524=$loc.bet!==undefined?$loc.bet:Sk.misceval.loadname('bet',$gbl);;var $binop525=Sk.abstr.numberBinOp($loadname523,$loadname524,'Sub');$loc.money=$binop525;$blk=473; continue;case 491: if (Sk.breakpoints('<stdin>.py',239,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',239,8);$susp.$blk = 499;$susp.optional = true;return $susp;}$blk=499;case 499: 

$currLineNo = 239;
$currColNo = 8;

var $loadname545=$loc.print!==undefined?$loc.print:Sk.misceval.loadname('print',$gbl);;var $loadname546=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname546.tp$getattr($scope0.$const100, true);$blk=500;case 500: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',239,14); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname546.sk$attrError() + " has no attribute '" + $scope0.$const100.$jsstr() + "'");
};var $lattr547=$ret;var $binop548=Sk.abstr.numberBinOp($lattr547,$scope0.$const501,'Add');var $loadname549=$loc.bet!==undefined?$loc.bet:Sk.misceval.loadname('bet',$gbl);;var $loadname550=$loc.Colour!==undefined?$loc.Colour:Sk.misceval.loadname('Colour',$gbl);;$ret = $loadname550.tp$getattr($scope0.$const107, true);$blk=501;case 501: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',239,53); }
if ($ret === undefined) {
throw new Sk.builtin.AttributeError($loadname550.sk$attrError() + " has no attribute '" + $scope0.$const107.$jsstr() + "'");
};var $lattr551=$ret;var $binop552=Sk.abstr.numberBinOp($scope0.$const504,$lattr551,'Add');$ret = ($loadname545.tp$call)?$loadname545.tp$call([$binop548,$loadname549,$binop552],undefined) : Sk.misceval.applyOrSuspend($loadname545,undefined,undefined,undefined,[$binop548,$loadname549,$binop552]);$blk=502;case 502: if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'<stdin>.py',239,8); }var $call553=$ret;

$currLineNo = 239;
$currColNo = 8;

if (Sk.breakpoints('<stdin>.py',240,8)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',240,8);$susp.$blk = 503;$susp.optional = true;return $susp;}$blk=503;case 503: 

$currLineNo = 240;
$currColNo = 8;

var $loadname554=$loc.money!==undefined?$loc.money:Sk.misceval.loadname('money',$gbl);;var $loadname555=$loc.bet!==undefined?$loc.bet:Sk.misceval.loadname('bet',$gbl);;var $binop556=Sk.abstr.numberBinOp($loadname554,$loadname555,'Add');$loc.money=$binop556;$blk=490; continue;case 507: if (Sk.breakpoints('<stdin>.py',244,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',244,0);$susp.$blk = 511;$susp.optional = true;return $susp;}$blk=511;case 511: 

$currLineNo = 244;
$currColNo = 0;

$blk=11; continue;if (Sk.breakpoints('<stdin>.py',246,0)) {var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '<stdin>.py',246,0);$susp.$blk = 512;$susp.optional = true;return $susp;}$blk=512; continue;case 512: 

$currLineNo = 246;
$currColNo = 0;

$blk=513; continue;}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '<stdin>.py'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });$scope0.$const3 = new Sk.builtin.int_(100);$scope0.$const4 = new Sk.builtin.int_(0);$scope0.$const12 = new Sk.builtin.str("https://i.imgur.com/FHNyDgP.png");$scope0.$const13 = new Sk.builtin.int_(45);$scope0.$const17 = new Sk.builtin.int_(1);$scope0.$const21 = new Sk.builtin.str("https://i.imgur.com/Gu9lgZG.png");$scope0.$const28 = new Sk.builtin.str("https://i.imgur.com/I9JoKA1.png");$scope0.$const29 = new Sk.builtin.int_(60);$scope0.$const36 = new Sk.builtin.str("https://i.imgur.com/hTzrNW9.png");$scope0.$const40 = new Sk.builtin.int_(2);$scope0.$const44 = new Sk.builtin.str("https://i.imgur.com/L0XmfQ0.png");$scope0.$const51 = new Sk.builtin.str("https://i.imgur.com/YmOvbzU.png");$scope0.$const52 = new Sk.builtin.int_(95);$scope0.$const59 = new Sk.builtin.str("https://i.imgur.com/cErC86D.png");$scope0.$const66 = new Sk.builtin.str("https://i.imgur.com/8EITAyl.png");$scope0.$const73 = new Sk.builtin.str("https://i.imgur.com/LFlovRF.png");$scope0.$const74 = new Sk.builtin.int_(15);$scope0.$const81 = new Sk.builtin.str("https://i.imgur.com/WQbUk7c.png");$scope0.$const88 = new Sk.builtin.str("https://i.imgur.com/JD5JGA3.png");$scope0.$const95 = new Sk.builtin.str("You've got no more money...");$scope0.$const98 = new Sk.builtin.str("You have ");$scope0.$const100 = new Sk.builtin.str('green');$scope0.$const103 = new Sk.builtin.str("$");$scope0.$const107 = new Sk.builtin.str('reset');$scope0.$const109 = new Sk.builtin.str("to spend!");$scope0.$const112 = new Sk.builtin.str("==== Main menu ====");$scope0.$const115 = new Sk.builtin.str("[a] Change top");$scope0.$const118 = new Sk.builtin.str("[b] Change bottom");$scope0.$const121 = new Sk.builtin.str("[c] Change shoes");$scope0.$const124 = new Sk.builtin.str("[d] Change face");$scope0.$const127 = new Sk.builtin.str("[e] Play Heads or Tails to win (or lose) money!");$scope0.$const130 = new Sk.builtin.str("Enter your choice:");$scope0.$const134 = new Sk.builtin.str("a");$scope0.$const153 = new Sk.builtin.str("==== Top ====");$scope0.$const156 = new Sk.builtin.str("[a] Shirt, $100");$scope0.$const161 = new Sk.builtin.str("[b] Blazer, $200");$scope0.$const166 = new Sk.builtin.str("[c] T-shirt, $50");$scope0.$const182 = new Sk.builtin.str("Sorry you can't afford that!");$scope0.$const185 = new Sk.builtin.str("Paying $");$scope0.$const187 = new Sk.builtin.str("...");$scope0.$const193 = new Sk.builtin.str("Press [ENTER] to return to the main menu");$scope0.$const197 = new Sk.builtin.str("b");$scope0.$const200 = new Sk.builtin.int_(200);$scope0.$const218 = new Sk.builtin.str("c");$scope0.$const221 = new Sk.builtin.int_(50);$scope0.$const238 = new Sk.builtin.str("Invalid input, try again");$scope0.$const245 = new Sk.builtin.str("==== Bottom ====");$scope0.$const248 = new Sk.builtin.str("[a] Jeans, $80");$scope0.$const253 = new Sk.builtin.str("[b] Skirt, $50");$scope0.$const258 = new Sk.builtin.str("[c] Shorts, $55");$scope0.$const268 = new Sk.builtin.int_(80);$scope0.$const307 = new Sk.builtin.int_(55);$scope0.$const330 = new Sk.builtin.str("==== Shoes ====");$scope0.$const333 = new Sk.builtin.str("[a] Boots, $150");$scope0.$const338 = new Sk.builtin.str("[b] Sandals, $100");$scope0.$const343 = new Sk.builtin.str("[c] Dress shoes, $120");$scope0.$const353 = new Sk.builtin.int_(150);$scope0.$const411 = new Sk.builtin.str("d");$scope0.$const415 = new Sk.builtin.str("==== Face ====");$scope0.$const418 = new Sk.builtin.str("[a] Face 1");$scope0.$const423 = new Sk.builtin.str("[b] Face 1");$scope0.$const441 = new Sk.builtin.str("e");$scope0.$const456 = new Sk.builtin.str("to bet");$scope0.$const460 = new Sk.builtin.str("Enter your bet amount:");$scope0.$const469 = new Sk.builtin.str("Sorry you can't bet more than you have!");$scope0.$const472 = new Sk.builtin.str("Heads or tails [h/t]?");$scope0.$const475 = new Sk.builtin.str("Flipping the coin...");$scope0.$const478 = new Sk.builtin.int_(51401);$scope0.$const481 = new Sk.builtin.str("...........");$scope0.$const482 = new Sk.builtin.float_(0.2);$scope0.$const491 = new Sk.builtin.str("It landed heads!");$scope0.$const495 = new Sk.builtin.str("h");$scope0.$const501 = new Sk.builtin.str("You won $");$scope0.$const504 = new Sk.builtin.str("!");$scope0.$const514 = new Sk.builtin.str('red');$scope0.$const516 = new Sk.builtin.str("Sorry you lost $");$scope0.$const527 = new Sk.builtin.str("It landed tails!");$scope0.$const558 = new Sk.builtin.str("Play again? [y/n]");$scope0.$const562 = new Sk.builtin.str("y");$scope0.$const566 = new Sk.builtin.str("Hope you enjoy your final outfit!");$scope0.$const569 = new Sk.builtin.str("Game over!");
return $scope0;}();
$compiledmod;