Sk.builtins.RESET = new Sk.builtin.str("\u001b[ 0;2;0;0;0 m");

Sk.builtins.RED = new Sk.builtin.str("\u001b[ 38;2;255;0;0 m");
Sk.builtins.BLACK = new Sk.builtin.str("\u001b[ 38;2;0;0;0 m");
Sk.builtins.WHITE = new Sk.builtin.str("\u001b[ 38;2;255;255;255 m");
Sk.builtins.RED = new Sk.builtin.str("\u001b[ 38;2;255;0;0 m");
Sk.builtins.GREEN = new Sk.builtin.str("\u001b[ 38;2;0;255;0 m");
Sk.builtins.BLUE = new Sk.builtin.str("\u001b[ 38;2;0;0;255 m");
Sk.builtins.CYAN = new Sk.builtin.str("\u001b[ 38;2;0;255;255 m");
Sk.builtins.YELLOW = new Sk.builtin.str("\u001b[ 38;2;255;255;0 m");
Sk.builtins.MAGENTA = new Sk.builtin.str("\u001b[ 38;2;255;0;255 m");
Sk.builtins.ORANGE = new Sk.builtin.str("\u001b[ 38;2;255;165;0 m");
Sk.builtins.PURPLE = new Sk.builtin.str("\u001b[ 38;2;127;0;255 m");
    
Sk.builtins.HL_BLACK = new Sk.builtin.str("\u001b[ 48;2;0;0;0 m");
Sk.builtins.HL_WHITE = new Sk.builtin.str("\u001b[ 48;2;255;255;255 m");
Sk.builtins.HL_RED = new Sk.builtin.str("\u001b[ 48;2;255;0;0 m");
Sk.builtins.HL_GREEN = new Sk.builtin.str("\u001b[ 48;2;0;255;0 m");
Sk.builtins.HL_BLUE = new Sk.builtin.str("\u001b[ 48;2;0;0;255 m");    
Sk.builtins.HL_CYAN = new Sk.builtin.str("\u001b[ 48;2;0;255;255 m");
Sk.builtins.HL_YELLOW = new Sk.builtin.str("\u001b[ 48;2;255;255;0 m");
Sk.builtins.HL_MAGENTA = new Sk.builtin.str("\u001b[ 48;2;255;0;255 m");
Sk.builtins.HL_ORANGE = new Sk.builtin.str("\u001b[ 48;2;255;165;0 m");
Sk.builtins.HL_PURPLE = new Sk.builtin.str("\u001b[ 48;2;127;0;255 m");
    
Sk.builtins.BOLD = new Sk.builtin.str("\u001b[ 1;2;0;0;0 m");    
Sk.builtins.ITALICS = new Sk.builtin.str("\u001b[ 3;2;0;0;0 m");    
Sk.builtins.UNDERLINE = new Sk.builtin.str("\u001b[ 4;2;0;0;0 m");    

function outputf(n) {
    var text = "";
    var color;
    var bgcolor;
    var italics;
    var bold;
    var underlined;
                  
    i = 0;
    while (n.length > 0) {
        if (n[0] == "\u001b") {
            i++;
            if (text.length > 0)
                pyConsole.appendChild(createColouredTextSpanElement(text, color, bgcolor, italics, bold, underlined));                
            text = "";
            
            var escPattern = /\[ (\d+);2;(\d+);(\d+);(\d+) m/;                          
            var match = n.match(escPattern);
            
            if (typeof(match) !== 'undefined') {
                code = parseInt(match[1]);
                if (code == 0) {
                    // reset
                    color = "rgb(255,255,255)";
                    bgcolor = "rgb(0,0,0)";                    
                    bold = false;
                    italics = false;
                    underlined = false;
                } else if (code == 38) {
                    color = "rgb(" + parseInt(match[2]) + "," + parseInt(match[3]) + "," + parseInt(match[4]) + ")"; 
                } else if (code == 48) {
                    bgcolor = "rgb(" + parseInt(match[2]) + "," + parseInt(match[3]) + "," + parseInt(match[4]) + ")"; 
                } else if (code == 1) {
                    // bold
                    bold = true;
                } else if (code == 3) {
                    // italics
                    italics = true;
                } else if (code == 4) {
                    // underlined
                    underlined = true;
                } else if (code == 5) {
                    // default style
                    bold = false;
                    italics = false;
                    underlined = false;
                }                
                i = match.index + match[0].length;
            }
            n = n.substring(i);
        }
        else {
            text += n[0];
            n = n.substring(1);
        }                
    }
    if (text.length > 0) {
        pyConsole.appendChild(createColouredTextSpanElement(text, color, bgcolor, italics, bold, underlined));                           
    }
    
    // force scroll to bottom
    document.getElementById("consoleWrapper").scrollTop = document.getElementById("consoleWrapper").scrollHeight;
}

function inputf(promptStr) {
    if (!usingPyangelo) {
        inputPromise = new Promise((function(n, e) {                    
                    inputElement = document.createElement("span");
                    inputElement.setAttribute("contenteditable", "true");
                    inputElement.setAttribute("autocapitalize", "off");
                    inputElement.style.color = "rgb(255,255,255)";
                    inputElement.style.fontSize = fontSize;
                    inputElement.style.outlineStyle = "none";
                    pyConsole.appendChild(inputElement);
                    inputElement.focus();
                    inputElement.addEventListener("keyup", (function(e) {
                        e.preventDefault();
                        if (e.key ==="Enter") {
                            userResponse = this.innerText.replace(/\n+$/, "");
                            this.remove();
                            outputf(userResponse);
                            outputf("\n");
                            n(userResponse);
                        }
                    }))
                }));
        return inputPromise;
    } else {
        inputPromise = new Promise((function(n, e) {  
            userResponse = prompt(promptStr);
            n(userResponse);
        }));
        return inputPromise;
    }
}
    
var fontColour = "rgba(255, 255, 255, 1)";
var fontBgColour = "rgba(0, 0, 0, 1)";
var fontItalics = false;
var fontBold = false;
var fontUnderlined = false;
var fontSize = "14pt";

var spinner = document.getElementById("spinner");
spinner.style.display = "none";

function resetConsole() {
    fontColour = "rgba(255, 255, 255, 1)";
    fontBgColour = "rgba(0, 0, 0, 1)";
    fontItalics = false;
    fontBold = false;
    fontUnderlined = false;
    fontSize = "14pt";    
    clearConsole();
}

function createColouredTextSpanElement(n, color, bgcolor, italics, bold, underlined) {
    let t = document.createTextNode(n);        
    let e = document.createElement("span");    
    
    if (typeof(color) !== 'undefined') {
        fontColour = color;
    }        
    if (typeof(bgcolor) !== 'undefined') {
        fontBgColour = bgcolor;
    }    
    if (typeof(italics) !== 'undefined') {
        if (italics) {
            fontItalics = "italic";
        }
        else {
            fontItalics = "normal";
        }            
    }    
    if (typeof(bold) !== 'undefined') {
        if (bold) {
            fontBold = "bold";
        }
        else {
            fontBold = "normal";
        }    
    }    
    if (typeof(underlined) !== 'undefined') {
        if (underlined) {
            fontUnderlined = "underline";
        }
        else {
            fontUnderlined = "none";
        }    
    }  
    
    e.style.textDecoration = fontUnderlined;
    e.style.fontWeight = fontBold;
    e.style.fontStyle = fontItalics;
    e.style.backgroundColor = fontBgColour;
    e.style.color = fontColour;
    e.style.fontSize = fontSize;
    
    e.appendChild(t);        
    return e;
}
/////////////////////// Tone js functions //////////////////////////
var toneSynth = null;
var toneNow = null;
function sanitiseDuration(duration) {
    if (duration == "n") {
        duration = "1n";
    }
    return duration;
}
function tone_start() {
    try {
        if (toneSynth === null) {
            toneSynth = new Tone.PolySynth(Tone.Synth).toDestination();
        }    
        toneNow = Tone.now();
    } catch (error) {
        throw error;
    }

}

function tone_play(note, duration, time) {
    duration = sanitiseDuration(duration);
    try {
        if (toneSynth === null) {
            toneSynth = new Tone.PolySynth(Tone.Synth).toDestination();
        }
        if (time < 0) {
            toneSynth.triggerAttackRelease(note, duration, Tone.now());
        } else {
            toneSynth.triggerAttackRelease(note, duration, toneNow + time);
        }
    } catch (error) {
        throw error;
    }    
}

function tone_sleep(duration) {
    duration = sanitiseDuration(duration);
    try {
        const time = Tone.Time(duration).toSeconds();
        if (isNaN(time)) {
            throw new Error("Invalid duration " + duration);
        }
        return time;
    } catch (error) {
        throw error;
    }        
}

function tone_stop() {
    toneSynth.dispose();
    toneSynth = null;
}


/////////////////////// image functions //////////////////////////

function createImageElement(url, width, height, x, y, onload, onerror) {
    let e = document.createElement("img");  
    e.id = (Math.random() + 1).toString(36).substring(7);
    e.src = url;
    e.style.display = "none";

    // setting the width and height of the image element if specified
    if (width !== null) {
        e.width = width;
    }
    if (height !== null) {
        e.height = height;
    }

    // setting the position of the image element if x and y were specified
    if (x !== null || y !== null) {
        e.style.position = "absolute";
    }
    if (x !== null) {
        e.style.left = x + "px";
    }
    if (y !== null) {
        e.style.top = y + "px";
    }

    e.onload = onImageLoaded;
    e.addEventListener("load", onload);
    e.onerror = onImageError;

    e.addEventListener("afterDialogClose", onerror);

    document.getElementById("errDialog").setAttribute("source", e.id);

    return e ;
}

function addImage(url, width, height, x, y, onload, onerror) {
    showSpinner();
    pyConsole.appendChild(createImageElement(url, width, height, x, y, onload, onerror));      
}

// TODO: merge this with the createIFrameElement later - after the showGDriveVideo sk.builtin function is fully working
function createYouTubeElement(id, width, height, x, y, onload, onerror) {
    const iframe = document.createElement('iframe');

    // setting the width and height of the image element if specified
    if (width !== null) {
        iframe.setAttribute('width', width);
    }
    if (height !== null) {
        iframe.setAttribute('height', height);
    }    
  
    iframe.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
  
    iframe.id = (Math.random() + 1).toString(36).substring(7);
    iframe.style.display = "none";

    // setting the position of the image element if x and y were specified
    if (x !== null || y !== null) {
        iframe.style.position = "absolute";
    }
    if (x !== null) {
        iframe.style.left = x + "px";
    }
    if (y !== null) {
        iframe.style.top = y + "px";
    }

    iframe.onload = onImageLoaded;
    iframe.addEventListener("load", onload);

    iframe.onerror = onImageError;
    iframe.addEventListener("afterDialogClose", onerror);

    return iframe;
}

function createIFrameElement(url, width, height, x, y) {
    const iframe = document.createElement('iframe');

    // setting the width and height of the image element if specified
    if (width !== null) {
        iframe.setAttribute('width', width);
    }
    if (height !== null) {
        iframe.setAttribute('height', height);
    }    
  
    iframe.setAttribute('src', url);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
  
    iframe.id = (Math.random() + 1).toString(36).substring(7);
    iframe.style.display = "none";

    // setting the position of the image element if x and y were specified
    if (x >= 0 || y >= 0) {
        iframe.style.position = "absolute";
    }
    if (x >= 0) {
        iframe.style.left = x + "px";
    }
    if (y >= 0) {
        iframe.style.top = y + "px";
    }

    return iframe;
}

function addYoutube(id, width, height, x, y, onload, onerror) {
    showSpinner();
    pyConsole.appendChild(createYouTubeElement(`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`, width, height, x, y, onload, onerror));      
}

function onImageLoaded() {
    this.style.display = "block";
    // hide the spinner after image has loaded
    hideSpinner();
}

function onImageError() {
    showErrorDialog("There was an error loading: " + this.src, hideSpinner);    
}

function getGoogleDriveFileId(url) {
    // Remove any URL fragments and normalize
    const cleanUrl = url.split('#')[0];
    
    // Regex patterns for different Google Drive URL formats
    const patterns = [
        /\/file\/d\/([a-zA-Z0-9-_]+)\/?/,     // /file/d/ID/ or /file/d/ID
        /\/d\/([a-zA-Z0-9-_]+)\/?/,           // /d/ID/ or /d/ID
        /[?&]id=([a-zA-Z0-9-_]+)/,           // ?id=ID or &id=ID
        /\/open\?id=([a-zA-Z0-9-_]+)/,       // /open?id=ID
    ];
    
    for (const pattern of patterns) {
        const match = cleanUrl.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }
    
    return null;
}

function setupIFrame(url, width, height, x, y) {
    susp = new Sk.misceval.Suspension();
    susp.resume = function () {
        if (susp.data["error"]) {
            throw new Sk.builtin.IOError(susp.data["error"].message);
        }
        return susp.data.result;
    };
    susp.data = {
        type: "Sk.promise",
        promise: new Promise(function (resolve, reject) {

            showSpinner();
            let iframe = createIFrameElement(url, width, height, x, y);
            iframe.onload = () => {
                iframe.style.display = "block";
                // hide the spinner after image has loaded
                hideSpinner();
                resolve();
            };
            iframe.onerror = () => {
                reject(Error("There was an error loading: " + url));
                hideSpinner();
            };
                            
            pyConsole.appendChild(iframe);      
        })
    };

    return susp;            
}

Sk.builtin.showGoogleVideo = function showGoogleVideo(url, width, height, x, y) {
    const _url = Sk.ffi.remapToJs(url);
    const _width = Sk.ffi.remapToJs(width);
    const _height = Sk.ffi.remapToJs(height);
    const _x = Sk.ffi.remapToJs(x);
    const _y = Sk.ffi.remapToJs(y);
    

    const _id = getGoogleDriveFileId(_url);
    if (_id === null) {
        throw Error("The url is not a google drive link.");
    }

    return setupIFrame(`https://drive.google.com/file/d/${_id}/preview`, _width, _height, _x, _y);
       
}

Sk.builtins["showGoogleVideo"] = new Sk.builtin.sk_method(
    {
        $meth: Sk.builtin.showGoogleVideo,
        $name: "showGoogleVideo",
        $flags: {
            NamedArgs: [null, "width", "height", "x", "y"],
            Defaults: [600, 480, -1, -1],
        },
        $textsig: "($module, size /)",
        $doc:
            "Displays a google drive video in an iframe",
    },
    null,
    "builtins"
);

Sk.builtin.showIFrame = function showIFrame(url, width, height, x, y) {
    const _url = Sk.ffi.remapToJs(url);
    const _width = Sk.ffi.remapToJs(width);
    const _height = Sk.ffi.remapToJs(height);
    const _x = Sk.ffi.remapToJs(x);
    const _y = Sk.ffi.remapToJs(y);
    
    return setupIFrame(url, _width, _height, _x, _y);
       
}

Sk.builtins["showIFrame"] = new Sk.builtin.sk_method(
    {
        $meth: Sk.builtin.showIFrame,
        $name: "showIFrame",
        $flags: {
            NamedArgs: [null, "width", "height", "x", "y"],
            Defaults: [600, 480, -1, -1],
        },
        $textsig: "($module, url, width, height, x, y /)",
        $doc:
            "Displays a URL in an iframe",
    },
    null,
    "builtins"
);

/////////////////////// UI functions /////////////////////////////

function createButtonElement(id, text, width, height, x, y, width, height, onclick) {
    let e = document.createElement("button");
    e.id = id;
    e.textContent = text;
    e.addEventListener("click", onclick);
    return e;    
}

function addButton(id, text, width, height, x, y, width, height, onclick) {
    var newButton = createButtonElement(id, text, width, height, x, y, width, height, onclick);
    newButton.style.position = "relative";
    if (x !== null || y !== null) {
        newButton.style.position = "absolute";
    }
    if (x !== null) {
        newButton.style.left = x + "px";
    }
    if (y !== null) {
        newButton.style.top = y + "px";
    }    

    // setting the width and height of the image element if specified
    if (width !== null) {
        newButton.style.width = width;
    }
    if (height !== null) {
        newButton.style.height = height;
    }

    newButton.display = "block";
    
    pyConsole.appendChild(newButton);
}

function createTextboxElement(id, text, width, height, x, y, width, height, onchanged) {
    let e = document.createElement("input");
    e.type = "text";
    e.id = id;
    e.value = text;
    e.addEventListener("input", onchanged);
    e.style.color = "gray";
    // clear on first click
    e.addEventListener("click", () => { e.value = ""; e.onclick = null; e.style.color = "black"; });
    return e;    
}

function addTextbox(id, text, width, height, x, y, width, height, onchanged) {
    var newTextbox = createTextboxElement(id, text, width, height, x, y, width, height, onchanged);
    newTextbox.style.position = "relative";
    if (x !== null || y !== null) {
        newTextbox.style.position = "absolute";
    }
    if (x !== null) {
        newTextbox.style.left = x + "px";
    }
    if (y !== null) {
        newTextbox.style.top = y + "px";
    }    

    // setting the width and height of the image element if specified
    if (width !== null) {
        newTextbox.style.width = width;
    }
    if (height !== null) {
        newTextbox.style.height = height;
    }

    newTextbox.display = "block";
    
    pyConsole.appendChild(newTextbox);

    return newTextbox;
}

/////////////////////// audio functions //////////////////////////
var audioElement = null;
function stopSound() {
    if (audioElement !== null && audioElement.parentNode === document.body) {
      audioElement.onerror = null; 
      document.body.removeChild(audioElement);
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.src ="";
      audioElement = null;        
    }
  }

function createAudioElement(url, loop, onload, onerror) {
    stopSound();
    showSpinner();
    audioElement = new Audio(url);
    audioElement.id = (Math.random() + 1).toString(36).substring(7);
    audioElement.loop = loop;
    audioElement.oncanplaythrough = onAudioCanPlaythrough;
    audioElement.oncanplay = onAudioCanPlaythrough;
    // using the first timeupdate event to unblock the playSound function when the sound actually starts playing!
    // onload, oncanplay, onplaying etc. is inconsistent in determining when the 
    // actual sound starts to play because it depends on device running codec etc.
    // TODO: only fire this once! at the moment the blocking flag is unset on every timeupdate event
    audioElement.addEventListener("timeupdate", onload);
    audioElement.addEventListener("afterDialogClose", onerror);    
    audioElement.onerror = onAudioError; 
    document.getElementById("errDialog").setAttribute("source", audioElement.id);  
    document.body.appendChild(audioElement);

    return audioElement;
}

function onAudioError() {
    showErrorDialog("There was an error loading: " + this.src, hideSpinner);    
}

function onAudioCanPlaythrough() {
    audioElement.play();  
    
    // hide the spinner after image has loaded
    hideSpinner();
}

//TODO: return an audio element from this call, otherwise setVolume() etc. won't work
function playFreeSound(id, onload, onerror) {
    //mod.loadingSound = true;

    // stop current sound
    showSpinner()

    var xhr = new XMLHttpRequest();      
    const requestURL =  "https://freesound.org/apiv2/sounds/" + id + "/?fields=previews&format=json&token=Vzf4dkU29E5ltPX1sfi2aqCkzG1aKgbITklKHROh";
    console.log(requestURL);
    xhr.open("GET", requestURL, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.timeout = 10000; // time in milliseconds

    xhr.ontimeout = (e) => {
      console.log("Timeout");
      showErrorDialog("There was an error loading freesound id: " + id, hideSpinner);
      onerror();
    };    
  
    xhr.onerror = function() {
      console.log("Error");
      showErrorDialog("There was an error loading freesound id: " + id, hideSpinner);
      onerror();
    }
    
    xhr.onreadystatechange = function() {
      console.log("Response:" + xhr.responseText);
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        if (xhr.responseText.length == 0) {
        }
        else {            
          const response = JSON.parse(xhr.responseText);
          const url = response["previews"]["preview-hq-ogg"];

          createAudioElement(url, false, onload, onerror);                   
        }
      }
      else if (this.status !== 200) {
        // 404 or some other status code
        console.log("Error");
        hideSpinner();
        showErrorDialog("There was an error loading freesound id: " + id, onerror);              
      }
    } 
    
    xhr.send();        
}


//////////////////////// spinner functions /////////////////////

function showSpinner() {
    // already spinning
    if (spinner.parentNode == pyConsole) {
        return;
    }
    //spinner.style.display = "block";
    spinner.style.display = "flex";
    pyConsole.appendChild(spinner);
    document.getElementById("consoleWrapper").scrollTop = document.getElementById("consoleWrapper").scrollHeight;
}

function hideSpinner() {
    // already hidden
    if (spinner.parentNode != pyConsole) {
        return;
    }    
    spinner.style.display = "none";
    pyConsole.removeChild(spinner);
    // readjust console scroll height
    document.getElementById("consoleWrapper").scrollTop = document.getElementById("consoleWrapper").scrollHeight;    
}

////////////////////// turtle graphics functions /////////////////////
function createTurtleCanvas() {
    
    // already created
    if (document.getElementById("turtleCanvas") !== null) {
        return;
    }
    let turtle = document.createElement("div");   
    turtle.id = "turtleCanvas";
    turtle.style.backgroundColor = "#fff";    
    // inline-block needed to snap the containing div to the size of the canvas elements injected by turtle
    // (so that the bgcolor doesn't extend horizontally to the edge of the screen)
    turtle.style.display = "inline-block";
    pyConsole.appendChild(turtle);

    // have to append a line break because of the inline-block display of the turtle canvas
    pyConsole.appendChild(document.createElement("br"));

    // scroll to bottom
    document.getElementById("consoleWrapper").scrollTop = document.getElementById("consoleWrapper").scrollHeight;
}

/////////////////////////// watch table functions /////////////////////////////
var watchTableFrame = null;


async function createWatchTableFrame(w, h) {
    if (watchTableFrame !== null) {
        watchTableFrame.closeFrame();  
        watchTableFrame = null;
    }
    jsFrame = new JSFrame(); 
    //Create window
    watchTableFrame = jsFrame.create({
        title: 'Variables Watch Table',
        left: 600, top: 100, width: w, height: h,
        movable: true,//Enable to be moved by mouse
        resizable: true,//Enable to be resized by mouse
        html: '<div id = "watch-table"></div>',   
    });

    //Event handler for buttons on the title bar.
    watchTableFrame.on('closeButton', 'click', (_frame, evt) => {
        destroyWatchTableFrame();
    });

    watchTableFrame.htmlElement.parentElement.parentElement.style.zIndex = 99;
    watchTableFrame.show();
}

function destroyWatchTableFrame() {
    try {
        if (watchTableFrame !== null) {
            watchTableFrame.closeFrame();  
            watchTableFrame.htmlElement.remove();
            watchTableFrame = null;
        }    
    }
    catch (e) {
        console.log("error in destroyWatchTableFrame()");
    }
}

///////////////////////// URL param functions /////////////////////////

Sk.builtin.getURLParam = function getURLParam(param) {
    Sk.builtin.pyCheckArgsLen("getURLParam", arguments.length, 1, 1);
    Sk.builtin.pyCheckType("param","str",Sk.builtin.checkString(param));
    
    // Get all parameters
    const urlParams = new URLSearchParams(window.location.search);

    const data = urlParams.get(param);
    return new Sk.builtin.str(data);
};

Sk.builtins["getURLParam"] = new Sk.builtin.sk_method(
    {
        $meth: Sk.builtin.getURLParam,
        $name: "getURLParam",
        $flags: {
            NamedArgs: [null],
            Defaults: [14],
        },
        $textsig: "($module, size /)",
        $doc:
            "Returns the value of the URL param, None if it doesn't exist.",
    },
    null,
    "builtins"
);


///////////////////////// canvas (pyangelo) functions//////////////////////////

var pyangeloFrame = null;
let pyangeloFrameParent1 = null;
let pyangeloFrameParent2 = null;

// hijacking setCanvasSize to pop out new jsFrame
Sk.builtin.setCanvasSize = function setCanvasSize(w, h, yAxisMode) {
    Sk.builtin.pyCheckArgsLen("setCanvasSize", arguments.length, 2, 3);
    Sk.builtin.pyCheckType("w", "integer", Sk.builtin.checkInt(w));
    Sk.builtin.pyCheckType("h", "integer", Sk.builtin.checkInt(h));
    Sk.builtin.pyCheckType("yAxisMode", "integer", Sk.builtin.checkInt(yAxisMode));

    if (pyangeloFrame === null) {
        //Sk.PyAngelo.preparePage();
        createPyangeloFrame(w, h);
    }

    Sk.builtin._setCanvasSize(w, h, yAxisMode);
};

Sk.builtins["setCanvasSize"] = new Sk.builtin.sk_method(
    {
        $meth: Sk.builtin.setCanvasSize,
        $name: "setCanvasSize",
        $flags: {
            NamedArgs: [null, null, "yAxisMode"],
            Defaults: [1],
        },
        $textsig: "($module, w, h, yAxisMode /)",
        $doc:
            "Sets the size of the canvas that all drawings are written to. The first parameter specifies the width in pixels and the second the height. The thrid parameter specifies the direction of the y axis. The constant CARTESIAN can be used to specify the y axis acts like a regular cartesian plane in maths, and JAVASCRIPT can be used to specify a traditional javascript y-axis that moves down the screen. The default value for yAxisMode is CARTESIAN.",
    },
    null,
    "builtins"
);

// hijacking setCanvasSize to pop out new jsFrame
Sk.builtin.setConsoleFontSize = function setConsoleFontSize(size) {
    Sk.builtin.pyCheckArgsLen("setConsoleFontSize", arguments.length, 1, 1);
    Sk.builtin.pyCheckType("size", "integer", Sk.builtin.checkInt(size));

    fontSize = size + 'pt';
};

Sk.builtins["setConsoleFontSize"] = new Sk.builtin.sk_method(
    {
        $meth: Sk.builtin.setConsoleFontSize,
        $name: "setConsoleFontSize",
        $flags: {
            NamedArgs: [null],
            Defaults: [14],
        },
        $textsig: "($module, size /)",
        $doc:
            "Sets the size font in the console window in 'pts'.",
    },
    null,
    "builtins"
);

async function createPyangeloFrame(w, h) {
    if (pyangeloFrame !== null) {
        pyangeloFrame.closeFrame();  
        pyangeloFrame = null;
    }
    jsFrame = new JSFrame(); 
    //Create window
    pyangeloFrame = jsFrame.create({
        title: 'Pyangelo',
        left: 200, top: 200, width: w, height: h,
        movable: true,//Enable to be moved by mouse
        resizable: true,//Enable to be resized by mouse
        html: '<canvas id="canvas" width="' + w + '" height="' + h + '"></div>',   
    });

    //Event handler for buttons on the title bar.
    pyangeloFrame.on('closeButton', 'click', (_frame, evt) => {
        destroyPyangeloFrame();
        stopEditor();
    });

    pyangeloFrame.htmlElement.parentElement.parentElement.style.zIndex = 99;
    //pyangeloFrame.parentElement.style.zIndex = 99;
    pyangeloFrame.show();
    pyangeloFrame.requestFocus();

    pyangeloFrameParent1 = pyangeloFrame.htmlElement.parentElement;
    pyangeloFrameParent2 = pyangeloFrame.htmlElement.parentElement.parentElement;    

    Sk.PyAngelo.preparePage();
}

function destroyPyangeloFrame() {
    try {
        if (pyangeloFrame !== null) {
            pyangeloFrame.closeFrame();  
            pyangeloFrame.htmlElement.remove();
            pyangeloFrame = null;

            pyangeloFrameParent1.remove();
            pyangeloFrameParent2.remove();
        }    
    }
    catch (e) {
        console.log("error destroyPyangeloFrame()");
    }
}

///////////////////////// web cam functions //////////////////////////

var webCamAnimationID = null;
var webcamFrame = null;
var toplevelFrame = null;
var webcam = null;
var showPose = false;
let model, labelContainer, maxPredictions, jsFrame;

async function loadImageModel() {
    document.getElementById("tmImageDialog").style.display = "block";  
}

function getWebCamCanvas() {
    if (webcam !== null) {
        return webcam.canvas;
    } else {
        return null;
    }    
}

function getImageFromWebCam() {
    if (webcam !== null) {
        return webcam.canvas.toDataURL();
    } else {
        return null;
    }    
}
 
async function createWebCam() {
    jsFrame = new JSFrame(); 
    //Create window
    webcamFrame = jsFrame.create({
        title: 'Webcam View',
        left: 200, top: 200, width: 400, height: 400,
        movable: true,//Enable to be moved by mouse
        resizable: true,//Enable to be resized by mouse
        html: '<div id="webcam-container"></div>',   
    });
    
    const flip = true; // whether to flip the webcam
    //webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    webcam = new tmPose.Webcam(400, 400, flip); // width, height, flip
    try {
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        webCamAnimationID = window.requestAnimationFrame(loop);

        // append elements to the DOM
        webcamFrame.$('#webcam-container').appendChild(webcam.canvas); 
        webcamFrame.htmlElement.parentNode.parentNode.style.zIndex=20;
        toplevelFrame = webcamFrame.htmlElement.parentNode.parentNode;

        webcamFrame.on('closeButton', 'click', (_frame, evt) => {
            destroyWebCam();
        });    
        webcamFrame.show();     
    }
    catch (error) {
        throw error;
    }
}

async function printWebCam() {   
    const flip = true; // whether to flip the webcam
    //webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    webcam = new tmPose.Webcam(400, 400, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    webCamAnimationID = window.requestAnimationFrame(loop);
    webcam.canvas.style.display = "block";
    pyConsole.appendChild(webcam.canvas);
}

function pauseWebCam() {
    if (webcamFrame !== null) {
        window.cancelAnimationFrame(webCamAnimationID);
    }
}

function resumeWebCam() {
    if (webcamFrame !== null) {
        webCamAnimationID = window.requestAnimationFrame(loop);
    }
}

function destroyWebCam() {
    console.log("Closing webcam window");
    //let topParent = webcamFrame.htmlElement.parentNode.parentNode;      
    webCamCallback = null;
    window.cancelAnimationFrame(webCamAnimationID);

    try {
        if (webcamFrame !== null) {
            webcamFrame.closeFrame();  
            webcamFrame = null;
        }    
        if (toplevelFrame !== null) {
            toplevelFrame.remove();
            toplevelFrame = null
        }   
        if (webcam !== null) {
            webcam.stop();
            webcam = null;
        }
    }
    catch (e) {
        console.log("error trying to destroy webcam in destroyWebCam()")
    }
}

webCamCallback = null;
async function loop() {
    webcam.update(); // update the webcam frame
    //await predict();
    if (webCamCallback !== null) {
        await webCamCallback();
    }
    webCamAnimationID = window.requestAnimationFrame(loop);
}

Sk.builtins.saveWebCamImage = function(name) {
    if (webcam !== null) {
        var data = webcam.canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");        
        if (name === undefined) {
            name = 'webcam.png';
        }
        downloadLink.setAttribute('href', data);
        downloadLink.setAttribute('download', name);   
        downloadLink.click();     
    }    
}

Sk.builtins.getWebCamImage = function() {
    let data = "";
    if (webcam !== null) {
        data = webcam.canvas.toDataURL('image/png');
    }    
    return new Sk.builtin.str(data);
}
///////////////////////// exported helper functions //////////////////////////
Sk.builtins.setWebCamCallback = function(f) {
    webCamCallback = f;
}

Sk.builtins.clear = function() {
    clearConsole();
}

Sk.builtins.showSpinner = function() {
    showSpinner();
}

Sk.builtins.hideSpinner = function() {
    hideSpinner();
}

// FIXME: need to preserve CSS stylings of the div
Sk.builtins.print_screen = function() {
    var divContents = document.getElementById("consoleWrapper").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body >');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

Sk.builtins.showTurtle = function() {
    createTurtleCanvas();
}

//////////////////////////// input number ////////////////////////////////

Sk.builtin.inputnumber = function inputnumber(prompt) {
    var lprompt = prompt ? prompt : "";

    return Sk.misceval.chain(Sk.importModule("sys", false, true), function (sys) {
        if (Sk.inputfunTakesPrompt) {
            return Sk.builtin.file.$readline(sys["$d"]["stdin"], null, lprompt);
        } else {
            return Sk.misceval.chain(
                undefined,
                function () {
                    return Sk.misceval.callsimOrSuspendArray(sys["$d"]["stdout"]["write"], [sys["$d"]["stdout"], new Sk.builtin.str(lprompt)]);
                },
                function () {
                    return Sk.misceval.callsimOrSuspendArray(sys["$d"]["stdin"]["readlineasfloat"], [sys["$d"]["stdin"]]);
                }
            );
        }
    });
};

Sk.builtins["inputnumber"] = new Sk.builtin.sk_method(
    {
        $meth: Sk.builtin.inputnumber,
        $name: "inputnumber",
        $textsig: "($module, prompt /)",
        $doc:
            "Prompts for user to type in a number",
    },
    null,
    "builtins"
);
// synonymns
Sk.builtins["input_number"] = Sk.builtins["inputnumber"]
Sk.builtins["inputNumber"] = Sk.builtins["inputnumber"]
Sk.builtins["inputnum"] = Sk.builtins["inputnumber"]
Sk.builtins["input_num"] = Sk.builtins["inputnumber"]
Sk.builtins["inputNum"] = Sk.builtins["inputnumber"]

//////////////////////////// test phillips hue light API //////////////////////////////
var g_hueBridgeIP = "192.168.1.100";
var g_useHTTPS = true;
// this is the username to the bridge
var g_hueUserName = "3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP";

var hueCommands = [];
var hueTimer = 0;
var hueCommandInterval = 100;
var hueInterval = null;

class HueCommand {
    constructor(command, data, time) {
        this.command = command;
        // time is supplied in seconds, convert to milliseconds to match hueCommandInterval
        this.time = time * 1000;
        this.data = data;
    }
    execute() {
        switch (this.command) {
            case "on":
                Sk.builtins.huelight(this.data["light"], this.data["on"]);
                break;
            case "bright":
                Sk.builtins.huebright(this.data["light"], this.data["bright"]);
                break;                
            case "colour":
                Sk.builtins.huecolour(this.data["light"], this.data["x"], this.data["y"]);
                break;
        }
    }
}



function stopAllHue() {
    if (hueInterval !== null) {
        clearInterval(hueInterval);
        hueInterval = null;
    }
    hueTimer = 0;
    hueCommands = [];        
}

Sk.builtins.executeHueCommands = function executeHueCommands(loopTimes = 1) {
    let loops = Sk.ffi.remapToJs(loopTimes);
    let commandIndex = 0;
    hueTimer = 0;
    // sort all commands by their trigger time
    hueCommands.sort((a, b) => a.time - b.time);

    hueInterval = setInterval(() => {
        hueTimer +=hueCommandInterval;
        while (commandIndex < hueCommands.length && hueCommands[commandIndex].time <= hueTimer) {
            let command = hueCommands[commandIndex];
            commandIndex++;
            command.execute();            
        }
        if (commandIndex == hueCommands.length) {
            // if loopTimes is 0 or negative, loop forever
            if (loops <= 0) {
                // go again
                commandIndex = 0;
                hueTimer = 0;
            } else {
                loops--;
                if (loops == 0) {
                    // all done. Note that loopTimes == 0 check here is different to the check above - this one checks if loopTimes was positive and was decremented to 0. The above one checks if loopTimes was 0 or negative to begin with.
                    clearInterval(hueInterval);
                    hueInterval = null;
                } else {
                    // go again
                    commandIndex = 0;
                    hueTimer = 0;                    
                }
            }
        }
    }, hueCommandInterval);    
}
// synonymn
Sk.builtins["runHueCommands"] = Sk.builtins["executeHueCommands"]

Sk.builtins.queueHueCommand = function queueHueCommand(time, light, on = -1, bright = -1, colourx = -1, coloury = -1) {
    let t = Sk.ffi.remapToJs(time);
    let l = Sk.ffi.remapToJs(light);
    if (on !== -1) {
        let o = Sk.ffi.remapToJs(on);
        hueCommands.push(new HueCommand("on", {"light": l, "on": o}, t));
    }
    if (bright !== -1) {
        let b = Sk.ffi.remapToJs(bright);
        hueCommands.push(new HueCommand("bright", {"light": l, "bright": b}, t));
    }
    if (colourx !== -1 && coloury !== -1) {
        let cx = Sk.ffi.remapToJs(colourx);
        let cy = Sk.ffi.remapToJs(coloury);
        hueCommands.push(new HueCommand("colour", {"light": l, "x": cx, "y": cy}, t));
    }
}
// synonymn
Sk.builtins["setHueCommand"] = Sk.builtins["queueHueCommand"]

Sk.builtin.setHueBridgeIP = function setHueBridgeIP(IP, user, hueUserName, useHttps) {
    if (IP === null) {
        throw new Error("Must supply an IP address for the hue bridge.");
    }
    if (user === null) {
        throw new Error("Must supply a student username.");
    }

    // this is the username to the bridge
    g_hueUserName = Sk.ffi.remapToJs(hueUserName);

    var codestoreURL = Sk.builtins.webServiceURL.v;

    const hueuser = "cloud_" + Sk.ffi.remapToJs(user);
    const school = "school_huebridge";
    
    susp = new Sk.misceval.Suspension();
    susp.resume = function () {
        if (susp.data["error"]) {
            throw new Sk.builtin.IOError(susp.data["error"].message);
        }
        return susp.data.result;
    };
    susp.data = {
        type: "Sk.promise",
        promise: new Promise(function (resolve, reject) {
            
            const requestURL =  `${codestoreURL}cloudvars/get?name=${school + "_" + hueuser}&school=${school}`;

            fetch(requestURL, {
                method: "GET"
                })
            .then(res => res.json())
            .then(data => {
                //hideSpinner();
                console.log("cloud variable data:", data);
                if (data.status === 418) {
                    reject(Error("User not enabled:"+user));    
                } else if (data.status !== 200) {
                    console.error("Cloud variable error in setHueBrideIP:", err);
                    reject(Error("Error with school code for setting the Hue Bridge IP", err));                    
                } else if (data.value === 'False') {
                    reject(Error("User not enabled:"+user));  
                }
                g_hueBridgeIP = IP;
                g_useHTTPS = Sk.ffi.remapToJs(useHttps);                        

                // now send a state request for lights
                fetch(`${getHueBridgeURL()}/api/${g_hueUserName}/lights`, {
                    method: "GET"
                })
                .then(res => res.json())
                .then(data => {                    
                    console.log("Light state request:", data);
                    if (data.length > 0 && "error" in data[0]) {
                        // error with permissions?
                        console.error("Light state request failed:", data[0]["error"]);
                        hideSpinner();
                        reject(Error("Error with accessing the hue bridge:" + data[0]["error"]["description"]));     
                    } else {
                        // all good
                        hideSpinner();
                        resolve();
                    }
                })
                .catch(err => {
                    console.error("Request failed:", err);
                    hideSpinner();
                    reject(Error("Error with accessing the hue bridge:" + err));                
                });
            })
            .catch(err => {
                hideSpinner();
                console.error("Request failed:",err);
                reject(Error("Error with school code for setting the Hue Bridge IP", err));
            });
        })
    };
    showSpinner();
    return susp;        
}

Sk.builtins["setHueBridgeIP"] = new Sk.builtin.sk_method(
    {
        $meth: Sk.builtin.setHueBridgeIP,
        $name: "setHueBridgeIP",
        $flags: {
            NamedArgs: ["IP", "user", "hueUserName", "useHttps"],
            Defaults: [null, null, "3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP", true],
        },
        $textsig: "($module, IP, user, hueUserName, useHttps /)",
        $doc:
            "Sets hue bridge IP and the hue bridge username",
    },
    null,
    "builtins"
);

function getHueBridgeURL() {
    return `${g_useHTTPS ? "https" : "http"}://${g_hueBridgeIP}`;
}


Sk.builtin.setLight = function setLight(light, on, bright, x, y) {
    if (light === null) {
        return;
    }

    const _light = Sk.ffi.remapToJs(light);
    const _on = on ? Sk.ffi.remapToJs(on) : null;
    const _brightness = Sk.ffi.remapToJs(bright);
    const _x = Sk.ffi.remapToJs(x);
    const _y = Sk.ffi.remapToJs(y);

    // Do NOT make this a synchronous suspension because we would like multiple setLight functions issued
    // across multiple devices simulateneously. We don't want one light to wait until another light is done
    // before updating its state
    let state = {};
    if (_on !== null) {
        state["on"] = _on;
    }
    if (_brightness !== -1) {
        if (_brightness > 254) {
            _brightness = 254;
        }
        state["bri"] = _brightness;
    }
    if (_x !== -1 && _y !== -1) {
        state["xy"] = [_x, _y];
        state["colormode"] = "xy";
    }

    fetch(`${getHueBridgeURL()}/api/${g_hueUserName}/lights/${_light}/state`, {
        method: "PUT",
        body: JSON.stringify(state)
    })
    .then(res => res.json())
    .then(data => console.log("Light state changed:", data))
    .catch(err => {
        console.error("Request failed:", err);
        throw new Sk.builtin.IOError("Error with setting light state:" + err);
    });
}

Sk.builtins["setLight"] = new Sk.builtin.sk_method(
    {
        $meth: Sk.builtin.setLight,
        $name: "setLight",
        $flags: {
            NamedArgs: ["light", "on", "bright", "x", "y"],
            Defaults: [null, null, -1, -1, -1],
        },
        $textsig: "($module, light, on, bright, x, y /)",
        $doc:
            "Sets the Hue light properties",
    },
    null,
    "builtins"
);


Sk.builtins.huelight = function huelight(light, on) {
    const username = "3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP"; // obtained by pressing button + POST /api

    const lightOn = Sk.ffi.remapToJs(on);

    // https://192.168.0.17/api/3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP/lights

    fetch(`${getHueBridgeURL()}/api/${g_hueUserName}/lights/${light}/state`, {
    //fetch(`https://192.168.0.17/api/3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP/lights`, {
    method: "PUT",
    body: JSON.stringify({ on: lightOn })
    })
    .then(res => res.json())
    .then(data => console.log("Light turned on:", data))
    .catch(err => console.error("Request failed:", err));
}

Sk.builtins.huebright = function(light, brightness) {
    const username = "3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP"; // obtained by pressing button + POST /api

    const bri = Sk.ffi.remapToJs(brightness);

    // https://192.168.0.17/api/3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP/lights

    fetch(`${getHueBridgeURL()}/api/${g_hueUserName}/lights/${light}/state`, {
    //fetch(`https://192.168.0.17/api/3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP/lights`, {
    method: "PUT",
    body: JSON.stringify({ bri: bri })
    })
    .then(res => res.json())
    .then(data => console.log("Light brightness:", data))
    .catch(err => console.error("Request failed:", err));
}

Sk.builtins.huecolour = function(light, x, y) {
    const username = "3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP"; // obtained by pressing button + POST /api

    const lightx = Sk.ffi.remapToJs(x);
    const lighty = Sk.ffi.remapToJs(y);

    // https://192.168.0.17/api/3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP/lights

    fetch(`${getHueBridgeURL()}/api/${g_hueUserName}/lights/${light}/state`, {
    //fetch(`https://192.168.0.17/api/3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP/lights`, {
    method: "PUT",
    body: JSON.stringify(
        {xy: [lightx, lighty],
        colormode: "xy" 
        })
    })
    .then(res => res.json())
    .then(data => console.log("Light colour change:", data))
    .catch(err => console.error("Request failed:", err));
}

Sk.builtins.getlight = function(light) {
    // Only works in permissive environments (e.g., file:// or localhost with HTTP)
    const bridgeIP = "192.168.0.17"; // your bridge IP
    const username = "3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP"; // obtained by pressing button + POST /api


    susp = new Sk.misceval.Suspension();
    susp.resume = function () {
        if (susp.data["error"]) {
            throw new Sk.builtin.IOError(susp.data["error"].message);
        }
        return susp.data.result;
    };
    susp.data = {
        type: "Sk.promise",
        promise: new Promise(function (resolve, reject) {
            // https://192.168.0.17/api/3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP/lights

            fetch(`${getHueBridgeURL()}/api/${g_hueUserName}/lights/${light}`, {
                //fetch(`https://192.168.0.17/api/3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP/lights`, {
                method: "GET"
                })
            .then(res => res.json())
            .then(data => {
                console.log("Light turned on:", data);
                resolve(Sk.ffi.remapToPy(data));
            })
            .catch(err => {
                console.error("Request failed:", err);
                reject(Error("getlight Request failed:", err));
            });
        })
    };
    return susp;    
}

Sk.builtins.getButton = function(button) {
    const username = "3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP"; // obtained by pressing button + POST /api


    susp = new Sk.misceval.Suspension();
    susp.resume = function () {
        if (susp.data["error"]) {
            throw new Sk.builtin.IOError(susp.data["error"].message);
        }
        return susp.data.result;
    };
    susp.data = {
        type: "Sk.promise",
        promise: new Promise(function (resolve, reject) {
            // https://192.168.0.17/api/3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP/lights

            fetch(`${getHueBridgeURL()}/api/${g_hueUserName}/sensors/${button}`, {
                //fetch(`https://192.168.0.17/api/3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP/lights`, {
                method: "GET"
                })
            .then(res => res.json())
            .then(data => {
                console.log("Button event:", data.state.buttonevent);
                resolve(Sk.ffi.remapToPy(data.state.buttonevent));
            })
            .catch(err => {
                console.error("Request failed:", err);
                reject(Error("getButton Request failed:", err));
            });
        })
    };
    return susp;    
}

Sk.builtins.waitForSmartButtonClick = function(button) {
    const username = "3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP"; // obtained by pressing button + POST /api
    const pollDelay = 800;


    susp = new Sk.misceval.Suspension();
    susp.resume = function () {
        if (susp.data["error"]) {
            throw new Sk.builtin.IOError(susp.data["error"].message);
        }
        return susp.data.result;
    };
    susp.data = {
        type: "Sk.promise",
        promise: new Promise(function (resolve, reject) {

            const intervalID = setInterval(() => {
                // https://192.168.0.17/api/3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP/lights

                fetch(`${getHueBridgeURL()}/api/${g_hueUserName}/sensors/${button}`, {
                    //fetch(`https://192.168.0.17/api/3Lq6V7ZuY7pxl5vbivXanTQqe1XDllV8lHFEOhhP/lights`, {
                    method: "GET"
                    })
                .then(res => res.json())
                .then(data => {

                    console.log("Button event:", data.state.buttonevent);
                    if (data.state.buttonevent !== null && data.state.buttonevent !== 1002 && data.state.buttonevent !== 1003) {
                        // not button releases .. i.e. button press
                        clearInterval(intervalID);
                        resolve(Sk.ffi.remapToPy(data.state.buttonevent));
                    }
                })
                .catch(err => {
                    console.error("Request failed:", err);
                    clearInterval(intervalID);
                    reject(Error("getButton Request failed:", err));
                });
            }, pollDelay);
        })
    };
    return susp;    
}



