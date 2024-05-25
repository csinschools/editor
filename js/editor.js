Sk.builtins.webServiceURL = new Sk.builtin.str("https://codestore-348206.ts.r.appspot.com/");

var animID = null;

var dots = 0;
var origMsg = "🔗 Getting URL"
var prevTime = null;

var _babylonObjects = {};
var _runtimeObjects = {};
var engine = null;
var scene = null;
var sceneToRender = null;
function resetBabylon() {
	_babylonObjects = {};
	_runtimeObjects = {};
}

function stopBabylon() {
	setDisplayMode("side");
	engine.dispose();
}

function addObject(bObj) {
  // copy internal dict
  var jsBObj = Sk.ffi.remapToJs(bObj.$d);
  _babylonObjects[jsBObj.bObjName] = jsBObj;
}

function babylonCreateScene(scene) {
	// pass 1: add objects to _runtimeObjects
	for (bObjKey in _babylonObjects) {		
		bObj = _babylonObjects[bObjKey];
		let runtimeBObj = null;
		if (bObj.bObjType == "Mesh" ) {
			if (bObj.meshType == "sphere") {
				runtimeBObj = BABYLON.Mesh.CreateSphere("sphere", bObj.segments, bObj.radius, scene);
			}
			runtimeBObj.position.x = bObj.position[0];
			runtimeBObj.position.y = bObj.position[1];
			runtimeBObj.position.z = bObj.position[2];
		} else if (bObj.bObjType == "Material" ) {
			runtimeBObj = new BABYLON.StandardMaterial("material", scene);
			runtimeBObj.ambientColor = new BABYLON.Color3(bObj.ambientColour[0], bObj.ambientColour[1], bObj.ambientColour[2]);
		} else if (bObj.bObjType == "Skybox" ) {
			let envTexture = new BABYLON.CubeTexture(bObj.texture, scene);
			_runtimeObjects[bObj.bObjName + ".texture"] = envTexture;
			runtimeBObj = scene.createDefaultSkybox(envTexture, true, bObj.size);
		} else if (bObj.bObjType == "DirectionalLight" ) {
			runtimeBObj = new BABYLON.DirectionalLight(bObj.oObjName, new BABYLON.Vector3(bObj.direction[0], bObj.direction[1], bObj.direction[2]), scene);
			runtimeBObj.diffuse = new BABYLON.Color3(bObj.diffuse[0], bObj.diffuse[1], bObj.diffuse[2]);
			runtimeBObj.specular = new BABYLON.Color3(bObj.specular[0], bObj.specular[1], bObj.specular[2]);
		}
		_runtimeObjects[bObj.bObjName] = runtimeBObj;
	}

	// pass 2: adjust object references within objects
	for (bObjKey in _babylonObjects) {		
		bObj = _babylonObjects[bObjKey];
		let runtimeBObj = _runtimeObjects[bObj.bObjName];
		if (bObj.bObjType == "Mesh" ) {
			if (bObj.material !== null && bObj.material in _runtimeObjects) {
				runtimeBObj.material = _runtimeObjects[bObj.material];
			}
		}
	}	
}

function startBabylon() {
	setDisplayMode("babylon");
	var canvas = document.getElementById("babylonCanvas");

	var startRenderLoop = function (engine, canvas) {
		engine.runRenderLoop(function () {
			if (sceneToRender && sceneToRender.activeCamera) {
				sceneToRender.render();
			}
		});
	}

	var createDefaultEngine = function() { 
		return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); 
	};
	var createScene = async function () {
	
		var scene = new BABYLON.Scene(engine);
		// Parameters: name, alpha, beta, radius, target position, scene
		//const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 8, new BABYLON.Vector3(0, 0, 0), scene);	
		var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, 0), scene);		
		camera.setTarget(new BABYLON.Vector3(0, 0, 5));
		camera.attachControl(canvas, true);

		scene.ambientColor = new BABYLON.Color3(1, 1, 1);

		/*
		var light = new BABYLON.DirectionalLight("light1", new BABYLON.Vector3(1, -1, 0), scene);
		light.diffuse = new BABYLON.Color3(0.7, 0.7, 0.7);
		light.specular = new BABYLON.Color3(1, 1, 1);	
		//light.intensity = 0.7;

		var redMat = new BABYLON.StandardMaterial("redMat", scene);
		redMat.ambientColor = new BABYLON.Color3(1, 0, 0);
		
		var greenMat = new BABYLON.StandardMaterial("greenMat", scene);
		greenMat.ambientColor = new BABYLON.Color3(0, 1, 0);
		
		var blueMat = new BABYLON.StandardMaterial("blueMat", scene);
		blueMat.ambientColor = new BABYLON.Color3(0, 0, 1);		

		var yellowMat = new BABYLON.StandardMaterial("yellowMat", scene);
		yellowMat.ambientColor = new BABYLON.Color3(1, 1, 0);				

		
		var sphere1 = BABYLON.Mesh.CreateSphere("sphere1", 16, 5, scene);
		sphere1.position.z = 10;
		sphere1.material = redMat;

		//var sphere2 = BABYLON.Mesh.CreateSphere("sphere2", 16, 5, scene);
		const capsule = new BABYLON.MeshBuilder.CreateCapsule("capsule", {height: 4, radius: 1}, scene)
		capsule.position.z = -10;
		capsule.material = greenMat;
		
		//var sphere3 = BABYLON.Mesh.CreateSphere("sphere3", 16, 5, scene);
		const box = BABYLON.MeshBuilder.CreateBox("box", {height: 4, width: 4, depth: 4}, scene);
		box.position.x = 10;
		box.rotation = new BABYLON.Vector3(0, 3.14159 / 4.0, 0);
		box.material = blueMat;

		//var sphere4 = BABYLON.Mesh.CreateSphere("sphere4", 16, 5, scene);
		const torus = BABYLON.MeshBuilder.CreateTorus("torus", {diameter: 4, tessellation: 32});
		torus.position.x = -10;
		torus.material = yellowMat;
		torus.rotation = new BABYLON.Vector3(-3.14159 / 4.0, 3.14159 / 8.0, -3.14159 / 4.0);
		*/

		// instantiate all our meshes
		babylonCreateScene(scene);

		//const env = scene.createDefaultEnvironment();
			
		const xr = await scene.createDefaultXRExperienceAsync({
			//floorMeshes: [env.ground]
		});     

		xr.input.onControllerAddedObservable.add((inputSource) => {
			xr.baseExperience.sessionManager.session.onselect = (inputSource) => {
				// Note that this gets triggered by any selection, including those
				// made with motion-controller buttons. If those buttons are
				// dealt with elsewhere, you'll need top check for gaze here. Otherwise,
				// the actOnButton function will get called twice.
				xr.camera.position = new BABYLON.Vector3(0, 0, 0);
				xr.camera.setTarget(new BABYLON.Vector3(0, 0, 5));		

			};
		});		
		

		return scene;
	};
	window.initFunction = async function() {
		var asyncEngineCreation = async function() {
			try {
				return createDefaultEngine();
			} catch(e) {
				console.log("the available createEngine function failed. Creating the default engine instead");
				return createDefaultEngine();
			}
		}
		engine = await asyncEngineCreation();
		if (!engine) throw 'engine should not be null.';
		startRenderLoop(engine, canvas);
		scene = createScene();
	};

	initFunction().then(() => {
		scene.then(returnedScene => { sceneToRender = returnedScene; });                            
	});
	// Resize
	window.addEventListener("resize", function () {
		engine.resize();
	});
}
function animateURL(timestamp) {    
    document.getElementById("codestoreURL").disabled = true;
	if (prevTime == null) {
		prevTime = timestamp;
	}
	if (timestamp - 400 >
		 prevTime) {
		prevTime = timestamp;
		msg = document.getElementById("codestoreURL").innerText;
		
		if (dots < 5) {
			dots += 1;
			msg = msg + ".";
		}
		else {
			msg = origMsg;
			dots = 0;
		}
		document.getElementById("codestoreURL").innerText = msg;
	}
	animID = window.requestAnimationFrame(animateURL);
}

function checkBrowser() {
	var supported = false;
	let userAgent = navigator.userAgent;
	
	if(userAgent.match(/chrome|chromium|crios/i)) {
		supported |= true;
	} else if(userAgent.match(/safari/i)) {
		supported |= true;
	} else if(userAgent.match(/edg/i)) {
		supported |= true;
	}
	if (!supported) {
		showURLDialog("<p style='color: red;'>Sorry, your browser is not supported and the editor may not work as expected.</p>We recommend you use <b>Google Chrome</b>.")
	}
}

function showURLDialog(msg) {
	document.getElementById("copyToClip").style.display = "none"; 
    document.getElementById("urlContent").innerHTML = msg;
    document.getElementById("urlDialog").style.display = "block";      
}

function showErrorDialog(msg, onclose) {
	document.getElementById("errContent").innerHTML = msg;
	document.getElementById("errDialog").style.display = "block";     
	document.getElementById('errDialog').onclick = hideErrorDialog;
	document.getElementById('errDialog').addEventListener("click", onclose);	 
}

const afterDialogCloseEvent = new Event("afterDialogClose");
function hideErrorDialog() {
	document.getElementById("errDialog").style.display = "none";  
	let src = document.getElementById("errDialog").getAttribute("source");
	document.getElementById(src).dispatchEvent(afterDialogCloseEvent);
	
}

function resetSnapURLButton() {    
    document.getElementById("codestoreURL").disabled = false;
    document.getElementById("codestoreURL").innerText = "🔗 Snapshot to URL";  
    document.getElementById("codestoreURL").style.textAlign = "center";          
	document.getElementById("copyToClip").innerText = "Copy URL";      
}

var codeurl;
function copyURLToClipboard() {
	navigator.clipboard.writeText(codeurl);
	document.getElementById("copyToClip").innerText = "Copied!";
}
  
async function getCodestoreURL() {
    document.getElementById("codestoreURL").innerText = origMsg;    
    document.getElementById("codestoreURL").style.textAlign = "left";
	dots = 0;
	animID = window.requestAnimationFrame(animateURL);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", Sk.builtins.webServiceURL.v + 'put', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.timeout = 10000; // time in milliseconds

    xhr.ontimeout = (e) => {
		console.log("Timeout");
		window.cancelAnimationFrame(animID);
        showURLDialog("Unfortunately it took too long to generate your URL, please save your code to a file instead and try again later.");            
    };    

	xhr.onerror = function() {
		console.log("Error");
		window.cancelAnimationFrame(animID);
        showURLDialog("Unfortunately there was an error generating your URL, please save your code to a file instead and try again later.");  
	}
	
	xhr.onreadystatechange = function() {
	  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
		if (xhr.responseText.length == 0) {
            showURLDialog("Unfortunately there was an error generating your URL, please save your code to a file instead and try again later.");
		}
        else {
            codeurl = window.location.toString();

			// TODO: fix to work with display mode (need save it out)
			if (prevDisplay == "babylon") {
				// genereate a url with the wrapper around the editor.html (the index.html file => ATM works for the XR overlay)
				codeurl = codeurl.split('?')[0] + "?";
				codeurl = codeurl.replace("editor.html", "")
			} else {
				codeurl = codeurl.split('?')[0] + "?";	
			}
            
            delimit = "";

            urlParams.forEach(function(value, key) {
              if (key != "id" && key !== "undefined" && key != "project" && key != "headless" && key != "code") {
                codeurl = codeurl + "&" + key + "=" + value;
              }
            });
            
            codeurl += "&id=" + xhr.responseText; 
            
            showURLDialog("The code has been snapshotted to the url below:<br><br><a href=" + codeurl + " target='_blank'>" + codeurl + "</a><br><br><b>NOTE:</b> This URL will not save your changes, so if you change your code, you MUST regenerate the URL.");

			// TODO: fix to work with display mode (need save it out)
			// only display QR code if in babylon mode
			if (prevDisplay == "babylon") {
				let qrCode = document.createElement('div');
				qrCode.id = "qrcode";
				qrCode.style.marginTop = "10px";
				qrCode.style.maxWidth = "fit-content";
				qrCode.style.marginLeft = "auto";
				qrCode.style.marginRight = "auto";
				qrCode.style.width = "128px";
				qrCode.style.height = "128px";
						
				document.getElementById("urlContent").appendChild(qrCode);

				var qrCodeGenerator = new QRCode("qrcode", {
					text: codeurl,
					width: 128,
					height: 128,
					colorDark : "#000000",
					colorLight : "#ffffff",
					correctLevel : QRCode.CorrectLevel.H
				});
			}
			
			document.getElementById("copyToClip").style.display = "inline"; 
        }
		window.cancelAnimationFrame(animID);
	  }
	}
	var code = ace.edit("editor").getValue();

	saveToLocalStorage();
	sendURL = "code="+ encodeURIComponent(code);
	// update existing id if exists - comment out for new URL everytime
	/*
	if (id !== null) {
		sendURL += "&id=" + id;
	}
	*/
	xhr.send(sendURL);            
}

function setTrainingWheels() {
	if (document.getElementById("trainingWheels") !== null && document.getElementById("trainingWheels").checked)
		urlParams.set('wheels', 1)
	else
		urlParams.delete('wheels')
}

function setThemeByButton() {
	document.getElementById("lightTheme").checked = !document.getElementById("lightTheme").checked;
	if (document.getElementById("lightTheme").checked) {
		themeButton.innerText = "⚫ Theme";
	} else {
		themeButton.innerText = "💡 Theme";
	}
	setTheme();
}

function setTheme() {
	if (document.getElementById("lightTheme") !== null && document.getElementById("lightTheme").checked) {
		urlParams.set('light', 1);
		editor.setTheme("ace/theme/eclipse");
	}
	else {
		editor.setTheme("ace/theme/monokai");
		urlParams.delete('light')
		// add step highlighting if debugging is on
		if (stepRun) {
			for (i = 0; i < document.styleSheets.length; i++) {
				let styleSheet =  document.styleSheets[i];
				if (styleSheet.ownerNode.id == "ace-monokai") {
					for (j = 0; j < styleSheet.cssRules.length; j++) {
						var rule = styleSheet.cssRules[j];
						if (rule.cssText.indexOf(".ace_active-line") != -1 && rule.cssText.indexOf(".ace_marker-layer") != -1) {
							break;
						}
					}	
					// only if the existing rule is not the last one... (the rule in the template, and not the one we added previously)
					// then add a new rule
					if (j < styleSheet.cssRules.length - 1) {
						styleSheet.insertRule(".ace-monokai .ace_marker-layer .ace_active-line {background: #208020}", styleSheet.cssRules.length);				
					}					
				}
			}
		}		
	}
}
 
function clearConsole() {
	var clearButton = document.getElementById("consoleClear");

	pyConsole.innerHTML = "";
	if (inputElement != null)
	{
		inputElement.innerText = "";
		pyConsole.appendChild(inputElement);
	}
	//pyConsole.appendChild(clearButton);
}

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen property yet */
function openFullscreen() {
	/* Get the element you want displayed in fullscreen mode (a video in this example): */
	var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
		(document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
		(document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
		(document.msFullscreenElement && document.msFullscreenElement !== null);

	if (!isInFullScreen) {
		var docElm = document.documentElement;
		if (docElm.requestFullscreen) {
			docElm.requestFullscreen();
		} else if (docElm.mozRequestFullScreen) {
			docElm.mozRequestFullScreen();
		} else if (docElm.webkitRequestFullScreen) {
			docElm.webkitRequestFullScreen();
		} else if (docElm.msRequestFullscreen) {
			docElm.msRequestFullscreen();
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}
}

//gets the type of browser
function detectBrowser() {
	if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
		return 'Opera';
	} else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
		return 'Chrome';
	} else if(navigator.userAgent.indexOf("Safari") != -1) {
		return 'Safari';
	} else if(navigator.userAgent.indexOf("Firefox") != -1 ){
		return 'Firefox';
	} else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
		return 'IE';
	} else {
		return 'Unknown';
	}
}

function copyToClipboard(text, successMsg, errorMsg)
{
	var browser = detectBrowser();
	if (browser == "Firefox")
	{
		navigator.clipboard.writeText(text);
		alert(successMsg);
	}
	else
	{
		navigator.permissions.query({name: "clipboard-write"}).then(result => {
		  if (result.state == "granted" || result.state == "prompt") {
			navigator.clipboard.writeText(text);
			alert(successMsg);
		  }
		  else
		  {
			alert(errorMsg);
		  }
		});
	}
}

function generateURL()
{
	var url = window.location.href.split("?")[0];

	url = url + "?code=" + encodeURIComponent(ace.edit("editor").getValue());

	copyToClipboard(url, "URL copied to clipboard.", "Unable to copy URL to clipboard. Please copy the URL below manually: \n" + url);
}

function copyCode()
{
	var code = ace.edit("editor").getValue();
	navigator.clipboard.writeText(code);

	copyToClipboard(code, "Code copied to clipboard.", "Unable to copy code to clipboard. Please copy the code manually.");
}

function resetCanvas()
{
	window.cancelAnimationFrame(Sk.builtins.animationFrameRequest);
	var canvas = document.getElementById("pyangelo");
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "rgb(127, 127, 127)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function isChromiumBrowser()
{
	agent = window.navigator.userAgent.toLowerCase();
	if ((agent.indexOf("edg/") > -1) || (agent.indexOf("chrome") > -1 && !!window.chrome))
		return true;
	else
		return false;
}

async function saveCode(filename)
{
	if (isChromiumBrowser())
		saveCodeFS(filename);
	else
		saveCodeFilesaver(filename);            
}

async function saveCodeFS(filename)
{          
  const options = {
	suggestedName: filename,
	types: [
	  {
		
		description: 'Text Files',
		accept: {
		  'text/plain': ['.txt'],
		},
	  },
	],
  };
  const handle = await window.showSaveFilePicker(options);
  var code = ace.edit("editor").getValue();

  const writable = await handle.createWritable();
  // Write the contents of the file to the stream.
  await writable.write(code);
  // Close the file and write the contents to disk.
  await writable.close();          

  if (filename != null)
  {
	// only save to local storage if a filename was specified
	saveToLocalStorage();            
  }
}        

function saveCodeFilesaver(filename) {
	filename = window.prompt("Enter file name:", filename)
	if (filename == null)
	{
		return;
	}
	var code = ace.edit("editor").getValue();
	var file = new File([code], filename + ".txt", {type: "text/plain;charset=utf-8"});
	saveAs(file);
	saveToLocalStorage();
}

function saveToLocalStorage()
{
  try {
	var code = ace.edit("editor").getValue();
	localStorage.setItem(filename, code);
  }
  catch(e) {
	console.log("Unable to save to local storage");
  }
} 

async function loadCode()
{
	if (isChromiumBrowser())
		loadCodeFS();
	else
		document.getElementById('file-input').click();           
	return false;
}

async function loadCodeFS()
{             
	const options = {    
		suggestedName: filename,        
		types: [
		  {                                
			description: 'Text Files',
			accept: {
			  'text/plain': ['.txt'],
			},
		  },
		],};          
	[fileHandle] = await window.showOpenFilePicker(options);
	const file = await fileHandle.getFile();
	codestring = await file.text();

	checkForPyangelo(codestring);
	editor.setValue(codestring, -1);
	clearConsole();//pyConsole.innerHTML = "";            
	stopEditor();            
}

function userLoadCode(event) {
	var files = event.target.files;
	var file = null;
	if (files.length > 0) file = files[0];
	else return;
	var reader = new FileReader();
	reader.onload = (function (theFile) {
		codestring = e.target.result;
		return function (e) {
			checkForPyangelo(codestring);
			editor.setValue(codestring, -1);
			clearConsole();//pyConsole.innerHTML = "";
		};
	})(file);
	reader.readAsText(file);
	stopEditor();
}        

function loadFromLocalStorage() {
  if (filename == null || filename.length == 0)
  {
	return;
  }
  try {
	var src = localStorage.getItem(filename);
	return src;
  }
  catch (e) {
	console.log("Unable to load from local storage");
  }
} 

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// wait for next button before resuming suspension
function singleStep() {
	return new Promise((resolve, reject) => {
		nextButton.addEventListener('click', function(e) {
			resolve(1);
		}, {once: true});
		stopButton.addEventListener('click', function(e) {
			stopSkulpt();
			resolve(1);
		}, {once: true});
	});
}

// traverses through hierarchy of $loc variables and populates the tracetable
function recursivePopulateTraceTable(susp, traces) {
	if (susp.child == null) {
		return traces;
	}
	traces = recursivePopulateTraceTable(susp.child, traces);
	var child = susp.child;
	if (child.hasOwnProperty("$loc")) {
		var locals = child.$loc;
		let temp_traces = [];
		for (let property in locals) {
			if (property.substring(0, 2) == property.substring(property.length - 2) && property.substring(0, 2) == "__") {
				continue;
			}
			if (property.substring(0, 1) == "$") {
				continue;
			}
			if (locals[property] !== undefined && "v" in locals[property]) {
				temp_traces.push(property + ":" + locals[property].v);
				//console.log(property + ":" + locals[property].v);
			}
		}
		for (let i in temp_traces) {
			traces.push(temp_traces[i]);
		}	
		
	}
	
	if (child.hasOwnProperty("$tmps")) {
		var temps = child.$tmps;
		let temp_traces = [];
		for (let property in temps) {
			if (property.substring(0, 2) == property.substring(property.length - 2) &&  property.substring(0, 2) == "__") {
				continue;
			}		
			if (property.substring(0, 1) == "$") {
				continue;
			}
			if (temps[property] !== undefined && "v" in temps[property]) {
				//console.log(property + ":" + temps[property].v);
				temp_traces.push(property + ":" + temps[property].v);
			}
		}
		for (let i in temp_traces) {
			traces.push(temp_traces[i]);
		}			
	}	
	return traces;
}

function populateTraceTable(susp) {
	console.log("=======")
	var traces = recursivePopulateTraceTable(susp, []);
	console.log(traces);
}

var prevLine = -1;
async function nextlineStepper(susp) {
	checkForStop();
	try {
		populateTraceTable(susp);
		var child = susp.child;
		
		// record the last child which was from <stdin.py> - this would be
		// the deepest level code in our current active display (e.g. function calling functions etc.)
		var lastStdinChild = child;
		
		while ((child.child.child != null))
		{
			child = child.child;
			if (child.$filename === "<stdin>.py") {
				lastStdinChild = child;
			}
		}

		child = lastStdinChild;
		if (child.$lineno != prevLine)
		{
			editor.gotoLine(child.$lineno);
			await singleStep();
			prevLine = child.$lineno;
		}

		// Return an already-resolved promise in this case
		return Promise.resolve(susp.resume());
	} catch(e) {
		return Promise.reject(e);
	}
}

// autostepper, 1 second delay per line run (slow-mo)
async function lineStepper(susp) {
	checkForStop();
	try {
		var child = susp.child;
		while (child.child.child != null)
		{
			child = child.child;
		}
		if (child.$lineno != prevLine)
		{
			editor.gotoLine(child.$lineno);
			await sleep(1000);
			prevLine = child.$lineno;
		}
		return Promise.resolve(susp.resume());
	} catch(e) {
		return Promise.reject(e);
	}
}

function checkForStop() {
	if (_stopped)
		throw 'Stopped!';
}

function logError(text)
{
	outputf(Sk.builtins.RESET + Sk.builtins.RED + text + "\n" + Sk.builtins.RESET);
}

function getStyleSheet(unique_title) {
  for(var i=0; i<document.styleSheets.length; i++) {
	var sheet = document.styleSheets[i];
	if(sheet.title == unique_title) {
	  return sheet;
	}
  }
}

function errToString(err) {	
	let ret = err.tp$name;
	if (!ret) {
		return err;
	}
	ret += ": " + err.tp$str().v;
	if (err.traceback.length !== 0) {
		for (i = 0; i < err.traceback.length; i++) {
			if (err.traceback[i].filename == "<stdin>.py") {
				ret += " on line " + err.traceback[i].lineno;
				break;
			}
		}
		// find the first <stdin> filename in the trace
		if (i == err.traceback.length) {
			ret += " on line " + err.traceback[0].lineno;
		}
	} else {
		ret += " at <unknown>";
	}
	return ret;	
}

var stepRun = false;
function runSkulpt(stepMode, code = "") {
	stepRun = stepMode;
	if (!headless) {
		code = ace.edit("editor").getValue();
		saveToLocalStorage();
	} else {
		var clearButton = document.getElementById("consoleClear");
		if (clearButton !== null) {
			clearButton.style.display = "none";
		}
	}
	code = run_lexer(code);
	code = stripPeriodFromGoto(code);
	if (document.getElementById("trainingWheels") !== null && document.getElementById("trainingWheels").checked) {
		code = replacePrintConcatenationWithArgs(code);
		code = pygmify(code);
	}
	usingPyangelo = checkForPyangelo(code);
	setDisplayMode(usingPyangelo ? "canvas": display);
	if (usingPyangelo) document.getElementById("pyangelo").focus();

	_stopped = false;
	stopButton.style.display = "inline";
	stepButton.style.display = "none";
	runButton.style.display = "none";
	stopButton.style.width = "144px";

	// clear the console
	clearConsole();
	just_run = true;

	resetConsole();

	Sk.configure({
		output: outputf,
		inputfun: inputf,
		inputfunTakesPrompt: false,
		debugging: true, //stepRun ? true : false,
		killableWhile: true,
		//breakpoints: function() { return true; },
		__future__: Sk.python3
	});

	// turtle graphics
	(Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'turtleCanvas';

	var handlers = {};
	handlers["*"] = checkForStop;
	if (stepRun) {
		prevLine = 0;
		// set readOnly for step mode
		editor.setReadOnly(true);
	
		// insert step highlight rule if one doesn't already exist (need to check if user toggles theme, the rule can be re-added)
		if (!document.getElementById("lightTheme").checked) {
			for (i = 0; i < document.styleSheets.length; i++) {
				let styleSheet =  document.styleSheets[i];//getStyleSheet('ace-monokai');
				if (styleSheet.ownerNode.id == "ace-monokai") {
					for (j = 0; j < styleSheet.cssRules.length; j++) {
						var rule = styleSheet.cssRules[j];
						if (rule.cssText.indexOf(".ace_active-line") != -1 && rule.cssText.indexOf(".ace_marker-layer") != -1) {
							break;
						}
					}	
					// only if the existing rule is not the last one... (the rule in the template, and not the one we added previously)
					// then add a new rule
					if (j < styleSheet.cssRules.length - 1) {
						styleSheet.insertRule(".ace-monokai .ace_marker-layer .ace_active-line {background: #208020}", styleSheet.cssRules.length);				
					}					
				}
			}
		}
		prevLine = -1;
		if (autostep != null) {
			handlers["Sk.debug"] = lineStepper;
			handlers["Sk.delay"] = lineStepper;
		}
		else {
			handlers["Sk.debug"] = nextlineStepper;
			handlers["Sk.delay"] = nextlineStepper;
			// shorten stop button
			stopButton.style.width = "72px";
			nextButton.style.display = "inline";
		}
	}

	var e = Sk.misceval.asyncToPromise((function() {
		var a;
		try {
			a = Sk.importMainWithBody("<stdin>", true, code, true);
		}
		catch (err) {
			logError(errToString(err));
		}
		return a;
		})
		, handlers);
	e.catch((function(err) {
		if (err.message) {
		   logError(err.message);
		   logError(err.stack);
		   if (err.nativeError) {
			   logError(err.nativeError.message);
			   logError(err.nativeError.stack);
		   }
		}
		else {
			logError(errToString(err));
			if (err.stack)
			{
				logError(err.stack);
			}
	}}));
	e.finally((function() {
		stopSkulpt();
	} ));
}

function stopSkulpt() {
	editor.setReadOnly(false);
	stopAllSounds();
	hideSpinner();
	destroyWebCam();
	stopBabylon();

	if (stepRun) {
		// remove step highlighting
		// need to check all stylesheets regardless of what the current theme is because user could have
		// flipped the theme during debug stepping
		for (i = 0; i < document.styleSheets.length; i++) {
			let styleSheet =  document.styleSheets[i];
			if (styleSheet.ownerNode.id == "ace-monokai") {
				// delete any highlight rules from the end
				// when we first encounter a non-highlight rule we stop
				// (assumes that the template highlight rule is NOT at the end!)
				for (j =  styleSheet.cssRules.length - 1; j >= 0; j--) {
					var rule = styleSheet.cssRules[j];
					if (rule.cssText.indexOf(".ace_active-line") != -1 && rule.cssText.indexOf(".ace_marker-layer") != -1) {
						styleSheet.deleteRule(j);
					} else {
						break;
					}
				}
			}
		}
	}
	just_run = false;

	stopButton.style.display = "none";
	nextButton.style.display = "none";
	runButton.style.display = "inline";
	if (nostep != null && nostep.length > 0) {
		stepButton.style.display = "none";
	} else {
		stepButton.style.display = "inline";
	}
	if (norun != null && norun.length > 0) {
		runButton.style.display = "none";
	} else
	{
		runButton.style.display = "inline";
	}
	resetCanvas();
	if (headless) {
		// add re-run button to the console
		runButton.innerText = "🌀Rerun";
		if (!compiled) {
			// update the run button handler to re-run code
			// not needed for compiled code because runSkulpt can be called with "" code (default)
			// as it will be clobbered by the codescript global in the sk.afterCompile handler anyway
			runButton.onclick = function() {
				if (codestring !== "") {
					runSkulpt(false, codestring);
				} else if (esc !== "") {
					runSkulpt(false, esc);
				}
				// otherwise no code to run in a headless mode!
			};
	    }
		pyConsole.appendChild(runButton);
		document.getElementById("consoleWrapper").scrollTop = document.getElementById("consoleWrapper").scrollHeight;
	}
	stepRun = false;
}

function stopEditor() {
	_stopped = true;
	if (inputElement != null)
	{
		// if stopped during an input...
		stopSkulpt();
		userResponse = inputElement.innerText.replace(/\n+$/, "");
		inputElement.remove();
		outputf(userResponse);
		outputf("\n");
		// TODO: fold this into the main promise/catch process?
		inputElement = null;
		logError("Stopped!");
		throw "Stopped!";
	}
}
function checkForPyangelo(code) {
	var pyangeloPattern = /^(?:\s*import\s+pyangelo.*)|(?:\s*from\s+pyangelo\s+import.*)$/gm;
	var match = code.match(pyangeloPattern);
	return (match != null ? true: false);
}

function setDisplayMode(mode, headless = false) {
	if (prevDisplay != null && prevDisplay == mode)
	{
		return;
	}
	var gutters = document.getElementsByClassName("gutter");
	if (typeof(gutters) !== 'undefined' && gutters.length > 0)
	{
		for (gutter of gutters)
		{
			gutter.parentNode.removeChild(gutter);
		}
	}

	prevDisplay = mode;
	// FIXME: Setting display mode to non-canvas after it has been set to canvas causes issues
	// we're in canvas demo mode
	document.getElementById('babylonCanvas').style = "display:none";
	document.getElementById('pyangelo').style = "display:none";
	if (mode == "canvas")
	{
		if (headless) {
			// headless inside canvas only
			let split = document.getElementById('split');
			let left = document.getElementById('leftpane');
			let right = document.getElementById('rightpane');
			let bottom = document.getElementById('bottompane');
			let pyangelo = document.getElementById('pyangelo');
			split.appendChild(pyangelo);
			bottom.appendChild(document.getElementById('consoleWrapper'));
			bottom.style = "display:block; height: " + prefixedCalc() + "(100% - 580px);";
			split.removeChild(left);		
			split.removeChild(right);		
			split.style = "height: 505px; display: block;text-align:center;";
			pyangelo.style = "display:inline-block;";
		}
		else {			
			document.getElementById('leftpane').appendChild(document.getElementById('editor'));
			document.getElementById('rightpane').appendChild(document.getElementById('pyangelo'));
			document.getElementById('bottompane').appendChild(document.getElementById('consoleWrapper'));

			document.getElementById('bottompane').style = "display:block; height: " + prefixedCalc() + "(100% - 580px);";

			//document.getElementById('split').style = "height: 505px; display: flex; flex-direction:row;";
			document.getElementById('split').style = "height: 505px; display: flex; flex-direction:row;";
			document.getElementById('rightpane').style = "width: 330px;"
			document.getElementById('leftpane').style = "height: 500px; flex-grow: 1;";

			//document.getElementById('editor').style.height = "100%";
			document.getElementById('editor').style.height = "500px";
			document.getElementById('pyangelo').style = "display:block";

			new ResizeObserver(function(entries) {
				// needed so that resizing the divider forces a resize on the window
				// and thereby updating the ace code window properly
				window.dispatchEvent(new Event('resize'));
			}).observe(document.getElementById('leftpane'));			
		}

		document.getElementById('consoleWrapper').style = "height: 200px";
		//document.getElementById('console').style = "height: 100%";

		// no step-run for canvas items
		// TODO: implement optional immediate drawing mode to support this
		nostep = "1";
		stepButton.style.display = "none";
	} else if (mode == "babylon")
	{
		if (headless) {
			// headless inside canvas only
			let split = document.getElementById('split');
			let left = document.getElementById('leftpane');
			let right = document.getElementById('rightpane');
			let bottom = document.getElementById('bottompane');			
			let babylonCanvas = document.getElementById('babylonCanvas');
			split.appendChild(babylonCanvas);
			bottom.appendChild(document.getElementById('consoleWrapper'));
			bottom.style = "display:block; height: " + prefixedCalc() + "(100% - 580px);";
			split.removeChild(left);		
			split.removeChild(right);		
			split.style = "height: 505px; display: block;text-align:center;";
			babylonCanvas.style = "display:inline-block;";
		}
		else {			
			document.getElementById('leftpane').appendChild(document.getElementById('editor'));
			document.getElementById('rightpane').appendChild(document.getElementById('babylonCanvas'));
			document.getElementById('bottompane').appendChild(document.getElementById('consoleWrapper'));

			document.getElementById('bottompane').style = "display:block; height: " + prefixedCalc() + "(100% - 580px);";

			//document.getElementById('split').style = "height: 505px; display: flex; flex-direction:row;";
			document.getElementById('split').style = "height: 505px; display: flex; flex-direction:row;";
			document.getElementById('rightpane').style = "width: 330px;"
			document.getElementById('leftpane').style = "height: 500px; flex-grow: 1;";

			//document.getElementById('editor').style.height = "100%";
			document.getElementById('editor').style.height = "500px";
			document.getElementById('babylonCanvas').style = "display:block";

			new ResizeObserver(function(entries) {
				// needed so that resizing the divider forces a resize on the window
				// and thereby updating the ace code window properly
				window.dispatchEvent(new Event('resize'));
			}).observe(document.getElementById('leftpane'));			
		}

		document.getElementById('consoleWrapper').style = "height: 200px";
		//document.getElementById('console').style = "height: 100%";

		// no step-run for canvas items
		// TODO: implement optional immediate drawing mode to support this
		nostep = "1";
		stepButton.style.display = "none";
	} else if (mode == "top") {
	   // editor on top, console at the bottom, splittable
		document.getElementById('split').style = "display: flex; flex-direction: column";
		document.getElementById('split').style.width = "100%";
		document.getElementById('split').style.height = prefixedCalc() + "(100% - 60px)";

		document.getElementById('editor').style.width = "100%";
		document.getElementById('editor').style.height = "100%";
		document.getElementById('consoleWrapper').style.width = "100%";
		document.getElementById('consoleWrapper').style.height = "100%";

		document.getElementById('leftpane').appendChild(document.getElementById('editor'));
		document.getElementById('rightpane').appendChild(document.getElementById('consoleWrapper'));
		document.getElementById('bottompane').appendChild(document.getElementById('pyangelo'));

		Split(['#leftpane', '#rightpane'], {direction: 'vertical', minSize: [128, 128], snapOffset: 0,})

		document.getElementById('rightpane').style.width = "100%";
		document.getElementById('leftpane').style.width = "100%";
		document.getElementById('bottompane').style = "display:none";

		new ResizeObserver(function(entries) {
			// needed so that resizing the divider forces a resize on the window
			// and thereby updating the ace code window properly
			window.dispatchEvent(new Event('resize'));
		}).observe(document.getElementById('leftpane'));
	}
	else if (mode == "bottom")
	{
		// console on top, editor at the bottom, splittable
		document.getElementById('split').style = "display: flex; flex-direction: column";
		document.getElementById('split').style.width = "100%";
		document.getElementById('split').style.height = prefixedCalc() + "(100% - 60px)";

		document.getElementById('editor').style.width = "100%";
		document.getElementById('editor').style.height = "100%";
		document.getElementById('consoleWrapper').style.width = "100%";
		document.getElementById('consoleWrapper').style.height = "100%";

		document.getElementById('leftpane').appendChild(document.getElementById('consoleWrapper'));
		document.getElementById('rightpane').appendChild(document.getElementById('editor'));
		document.getElementById('bottompane').appendChild(document.getElementById('pyangelo'));

		Split(['#leftpane', '#rightpane'], {direction: 'vertical', minSize: [128, 128], snapOffset: 0,})

		document.getElementById('rightpane').style.width = "100%";
		document.getElementById('leftpane').style.width = "100%";
		document.getElementById('bottompane').style = "display:none";

		new ResizeObserver(function(entries) {
			// needed so that resizing the divider forces a resize on the window
			// and thereby updating the ace code window properly
			window.dispatchEvent(new Event('resize'));
		}).observe(document.getElementById('rightpane'));
	}
	else
	{
		// "side" is the default
		// standard editor mode: console to the right of the editor, no canvas - splittable view
		//document.getElementById('split').style.height = "100%";
		document.getElementById('split').style.height = prefixedCalc() + "(100% - 80px)";
		document.getElementById('editor').style.height = "100%";
		document.getElementById('consoleWrapper').style.height = "100%";

		document.getElementById('rightpane').style.height = "100%;"
		document.getElementById('leftpane').style.height = "100%";
		document.getElementById('bottompane').style = "display:none";

		document.getElementById('leftpane').appendChild(document.getElementById('editor'));
		document.getElementById('rightpane').appendChild(document.getElementById('consoleWrapper'));
		document.getElementById('bottompane').appendChild(document.getElementById('pyangelo'));

		Split(['#leftpane', '#rightpane'], {direction: 'horizontal', minSize: [128, 128], snapOffset: 0,})

		new ResizeObserver(function(entries) {
			// needed so that resizing the divider forces a resize on the window
			// and thereby updating the ace code window properly
			window.dispatchEvent(new Event('resize'));
		}).observe(document.getElementById('leftpane'));
	}
}

function prefixedCalc () {
	var prefixes = ["","-webkit-","-moz-","-o-"], el;
	for (var i = 0; i < prefixes.length; i++) {
		el = document.createElement('div');
		el.style.cssText = "width:" + prefixes[i] + "calc(9px)";
		if (el.style.length) return prefixes[i] + "calc";
	}
}

function resetEditor() {
	if (confirm("This will reset the code and you will lose your progress so far.\nIs this okay?"))
	{
		clearConsole();
		resetConsole();
		editor.setValue("", -1);
		// clear local storage
		localStorage.removeItem(filename);		
		if (esc != null && esc.length > 0)
		{
			codestring = decodeURIComponent(esc);
			usingPyangelo = checkForPyangelo(codestring);
			setDisplayMode(usingPyangelo ? "canvas": display);
			editor.setValue(codestring, -1);

			saveToLocalStorage();
		}
		else if (project != null && project.length > 0)
		{
			var client = new XMLHttpRequest();
			// Fixes a race condition where .py is not appended to the project name if user double clicks on the reset button
			// before code fully loads (??)
			if (!compiled && project.slice(-3) !== ".py") {
				project += ".py";
			}			
			client.open("GET", "projects/" + project);// Removed adding ".py" after compiled query param auto adds .py for non-compiled code
			client.onreadystatechange = function () {
				if (client.readyState == 4) {
					codestring = client.responseText;
					usingPyangelo = checkForPyangelo(codestring);
					setDisplayMode(usingPyangelo ? "canvas": display);
					editor.setValue(codestring, -1);
				}

				//saveToLocalStorage();
			};
			client.send();
		}
	}
}

// for all headless setup (see the setDisplayMode() for canvas specific setup)
function setupHeadless() {
	let body = document.getElementsByTagName('body')[0];	
	body.style.backgroundColor = "#000";
	let editorDiv = document.getElementById("editor");  
	editorDiv.style.display = "none";	
	document.getElementById('container').appendChild(document.getElementById('consoleWrapper'));

	document.getElementById("split").style.display = "none";
	document.getElementById("buttons").style.display = "none";
}

function stopAllSounds() {
    document.querySelectorAll('audio').forEach(element => {
        element.pause();
		// don't trigger the original error handlers
		element.onerror = null;
        element.currentTime = 0;
        element.src ="";
        element = null;        
    });
}

function openPiskel() {
	window.open('piskel', '_blank');
}

// setting up the ace editor
checkBrowser();

var pyConsole = document.getElementById("console");

var editor = ace.edit("editor");
var darkTheme = true;
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/python");
editor.setOptions({
  fontSize: "12pt"
});
editor.setHighlightActiveLine(true);

document.getElementById('file-input').addEventListener('change', userLoadCode, false);

// configurable buttons
var runButton = document.getElementById("runButton");
var saveButton = document.getElementById("saveButton");
var loadButton = document.getElementById("loadButton");
var stepButton = document.getElementById("stepButton");
var nextButton = document.getElementById("nextButton");
var copyButton = document.getElementById("copyButton");
var stopButton = document.getElementById("stopButton");
var themeButton = document.getElementById("themeToggle");
var URLButton = document.getElementById("URLButton");
var fsButton = document.getElementById("fullscreenButton");
var piskelButton = document.getElementById("piskelButton");

// grabbing the URL parameters and processing them
// Order in which we process the URL params are IMPORTANT!
// e.g. display is needed before project and id
// e.g. project (filename) is needed opening the project (because localstore is queried on the name)
urlParams = new URLSearchParams(window.location.search);

// piskel button
piskelButton.style.display = "none";
piskelButtonOn = urlParams.get('piskel')
if (piskelButtonOn != null && piskelButtonOn.length > 0)
{
	piskelButton.style.display = "inline";
}

// alternate webservice URL (for testing purposes - can be replaced with http://localhost:3000 etc.)
webserviceURLParam = urlParams.get('webservice')
if (webserviceURLParam != null && webserviceURLParam.length > 0)
{
	// add trailing "/" if not already there
	if (webserviceURLParam.slice(-1) != "/") {
		webserviceURLParam += "/";
	}
	Sk.builtins.webServiceURL = new Sk.builtin.str(webserviceURLParam);
}

// training wheels
wheels = urlParams.get('wheels')
if (wheels != null && wheels.length > 0 && document.getElementById("trainingWheels") !== null) {
	document.getElementById("trainingWheels").checked = true;
}

var compiled = false;
var headless = false;
compiled = urlParams.get('compiled');
if (compiled) {
	// if we're running compiled code, then headless will be on by default
	// as we don't want to show the compiled code in the editor
	headless = true;
	Sk.onAfterCompile = function(name, code) {
		// clobber compiled code and return with pre-compiled codestring instead
		if (name == "<stdin>") {
			// codestring is global - populated by code in the editor
			return codestring;
		}
		else {
			return code;
		}
	}	
} else {
	headless = urlParams.get('headless');
}

// canvas demo mode: canvas to the right of the editor, console at the bottom
var prevDisplay = null;
var display = urlParams.get('display');
// TODO: the order below is important

if (display == null || display.length == 0)
{
	display = "side";
}
setDisplayMode(display);


// auto run
autorun = urlParams.get('autorun')
autorun =  (autorun != null && autorun.length > 0);

// embedded code in the URL
esc = urlParams.get('code')
if (esc != null && esc.length > 0) {
	esc = decodeURIComponent(esc);
	usingPyangelo = checkForPyangelo(esc);
	setDisplayMode(usingPyangelo ? "canvas": display);
	editor.setValue(esc, -1);
}

// dark/light theme
light = urlParams.get('light')
if (light != null && light.length > 0) {
	editor.setTheme("ace/theme/eclipse");
	if (document.getElementById("lightTheme") !== null)
        document.getElementById("lightTheme").checked = true;
	themeButton.innerText = "⚫ Theme";
}
else {
	editor.setTheme("ace/theme/monokai");
}

// code store id
var id = urlParams.get('id');
// project mode: load from code from existing .py file under /projects
// only works when hosted on web server (no filesystem mode)
project = urlParams.get('project');
var filename = null;
if (project != null && project.length > 0)
{
	filename = project;
}
else
{
	// default file name (for saving)
	filename = urlParams.get('name')
	if (filename == null || filename.length == 0)
	{
		filename = "my_code";
	}
}
// disable headless only if there is something in the localstorage but this is not from the codestore 
// would occur when 
if (localStorage.getItem(filename) !== null && !(id != null && id.length > 0) && !compiled && !(esc != null && esc.length > 0)) {
	headless = false;
}

var codestring = "";
// load code by id from codestore
// only if code not provided in URL
if (!(esc != null && esc.length > 0)) {
	if (id != null && id.length > 0) {
		var xhr2 = new XMLHttpRequest();
		var editorDiv = document.getElementById("editor"); 
		var consoleDiv = document.getElementById("console"); 

		xhr2.open("GET", Sk.builtins.webServiceURL.v + 'get?id=' + id, true);

		if (!headless) {
			spinner.style.display = "block";
			editor.setValue("# Loading code... please wait.", -1);
			
			editorDiv.appendChild(spinner);
		} 
		else {
			spinner.style.display = "block";
			consoleDiv.appendChild(spinner);
			setupHeadless();
		}

		xhr2.onreadystatechange = function() { 
			if (this.readyState === XMLHttpRequest.DONE) {
				if (this.status === 200) {
					// don't check local storage for when there are ids
					// btw, we purge the id from the URL params when the page is loaded
					// this is so users don't save to local storage and think the code is actually part of the codestore id in the URL		
					codestring = xhr2.responseText;
					usingPyangelo = checkForPyangelo(codestring);
					setDisplayMode(usingPyangelo ? "canvas": display, headless);

					// TODO: untested line below - always populate the editor with the retrieved code
					// needed for 'rerun' functionality
					//editor.setValue(codestring, -1);

					if (!headless) {
						spinner.style.display = "none";
						editorDiv.removeChild(spinner);		
						editor.setValue(codestring, -1);							
						if (autorun) {
							runSkulpt(false, codestring);
						}							
					}
					else {
						// let's run!
						spinner.style.display = "none";
						consoleDiv.removeChild(spinner);		
						if (!compiled) {
							runSkulpt(false, codestring);
						}
						else {
							// the Sk.onAfterCompiled() callback will run the pre-compiled codestring
							// this just triggers an empty run to kick things off				
							runSkulpt(false, "");
						}
					}		
				}
				else {
					// TODO: error handling
					alert("There was a problem loading your code form the codestore. Please check the URL and/or try again later.")
				}
			}
		}
		xhr2.send();   
	}
	// only open up project if there is no id
	else if (project != null && project.length > 0) {
		// only if there is nothing in local storage for that project
		if (headless) {
			setupHeadless();	
		}

		// if there's nothing in localstorage for this project OR its in precompiled mode ... load from webserver
		if (localStorage.getItem(filename) === null || compiled) {
			var client = new XMLHttpRequest();
			// compiled files will not have .py extension
			if (!compiled) {
				project += ".py";
			}
			client.open("GET", "projects/" + project);
			client.onreadystatechange = function () {
				if (client.readyState == 4) {

					if (localStorage.getItem(filename) === null || headless)
					{
						codestring = client.responseText;
						usingPyangelo = checkForPyangelo(codestring);
						setDisplayMode(usingPyangelo ? "canvas": display, headless);
						// TODO: untested line below - always populate the editor with the retrieved code
						// needed for 'rerun' functionality
						//editor.setValue(codestring, -1);						

						if (!headless) {
							editor.setValue(codestring, -1);
							if (autorun) {
								runSkulpt(false, codestring);
							}
						}
						else {
							if (!compiled) {
								runSkulpt(false, codestring);
							}
							else {
								// the Sk.onAfterCompiled() callback will run the pre-compiled codestring
								// this just triggers an empty run to kick things off
								runSkulpt(false, "");
							}
						}
					}
				}
			};
			client.send();
		}
		else {
			codestring = loadFromLocalStorage();

			if (!(codestring === null || codestring == "")) {
				usingPyangelo = checkForPyangelo(codestring);
				editor.setValue(codestring, -1);
				setDisplayMode(usingPyangelo ? "canvas": display);
				if (autorun) {
					runSkulpt(false, codestring);
				}				
			}
		}
	}
	// no id, and no project, so let's load from local storage
	else {
		codestring = loadFromLocalStorage();
		if (!(codestring === null || codestring == "")) {
			usingPyangelo = checkForPyangelo(codestring);
			editor.setValue(codestring, -1);
			setDisplayMode(usingPyangelo ? "canvas": display);

			if (autorun) {
				runSkulpt(false, codestring);
			}			
		}	
	}
}
// code in URL via code parameter
else {
	if (headless) {
		setupHeadless();
		if (!compiled) {
			runSkulpt(false, esc);
		}
		else {
			// the Sk.onAfterCompiled() callback will run the pre-compiled codestring
			// this just triggers an empty run to kick things off
			runSkulpt(false, "");
		}
	}	
	else if (autorun) {
		runSkulpt(false, esc);
	}
}

// hide stop and next button on load
stopButton.style.display = "none";
nextButton.style.display = "none";

// allows save (and load)
nosave = urlParams.get('nosave')
if (nosave != null && nosave.length > 0)
{
	saveButton.style.display = "none";
	loadButton.style.display = "none";
}
else
{
	saveButton.style.display = "inline";
	loadButton.style.display = "inline";
}

// disable step-run button
nostep = urlParams.get('nostep')
if (nostep != null && nostep.length > 0)
{
	stepButton.style.display = "none";
	stopButton.style.width = "72px";
}
else
{
	stepButton.style.display = "inline";
}

// disable run button
norun = urlParams.get('norun')
if (norun != null && norun.length > 0)
{
	runButton.style.display = "none";
	stopButton.style.width = "72px";
	stepButton.innerHTML = "👣 Step";
}
else
{
	// this was turning the runButton on when loading from ID as autorun
	// do an explicit check for autorun first
	if (!autorun) {
		runButton.style.display = "inline";
	}
}

/*
// disable copy code button
nocopy = urlParams.get('nocopy')
if (nocopy != null && nocopy.length > 0)
{
	copyButton.style.display = "none";
}
else
{
	copyButton.style.display = "inline";
}
*/

// autostep
// (linestepper with sleep)
autostep = urlParams.get('autostep')
autodelay = urlParams.get('autodelay')

// get URL button
URLButton.style.display = "none";
urlButtonOn = urlParams.get('url')
if (urlButtonOn != null && urlButtonOn.length > 0)
{
	URLButton.style.display = "inline";
}
else
{
	URLButton.style.display = "none";
}


// hides the drawing canvas
nocanvas = urlParams.get('nocanvas')
if (nocanvas != null && nocanvas.length > 0)
{
	var rightpane = document.getElementById("rightpane");
	rightpane.style.display = "none";
	var leftpane = document.getElementById("leftpane");
	leftpane.style.width = "100%";
}

// no full screen (if unsupported by other widgets etc.)
nofs = urlParams.get('nofs')
if (nofs != null && nofs.length > 0)
{
	fsButton.style.display = "none";
}

var just_run = false;
var _stopped = false;
var inputElement = null;

resetCanvas();

var gutters = document.getElementsByClassName('gutter');
if (gutters.length > 0 && gutters !== undefined)
	gutters[0].style.zIndex = 10;

// if not in headless mode:
if (!headless) {
	// get rid of id= from param string
	// this is so users don't save to local storage and think the code is actually part of the codestore id in the URL		
	let newURL = window.location.toString();
	newURL = newURL.split('?')[0] + "?";
	urlParams.forEach(function(value, key) {
		if (key != "id" && key !== "undefined") {
		newURL = newURL + "&" + key + "=" + value;
		}
	});
	window.history.replaceState(null, null, newURL);
}
// if we are in headless mode, then editor is not active anyway and the ID needs to be in the url for the user to restart via refresh

