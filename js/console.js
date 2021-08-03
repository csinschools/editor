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
    while (n.length > 0)
    {
        if (n[0] == "\u001b")
        {
            i++;
            if (text.length > 0)
                pyConsole.appendChild(createColouredTextSpanElement(text, color, bgcolor, italics, bold, underlined));                
            text = "";
            
            var escPattern = /\[ (\d+);2;(\d+);(\d+);(\d+) m/;                          
            var match = n.match(escPattern);
            
            if (typeof(match) !== 'undefined')
            {
                code = parseInt(match[1]);
                if (code == 0)
                {
                    // reset
                    color = "rgb(255,255,255)";
                    bgcolor = "rgb(0,0,0)";                    
                    bold = false;
                    italics = false;
                    underlined = false;
                }
                else if (code == 38)
                {
                    color = "rgb(" + parseInt(match[2]) + "," + parseInt(match[3]) + "," + parseInt(match[4]) + ")"; 
                }
                else if (code == 48)
                {
                    bgcolor = "rgb(" + parseInt(match[2]) + "," + parseInt(match[3]) + "," + parseInt(match[4]) + ")"; 
                }
                else if (code == 1)
                {
                    // bold
                    bold = true;
                }
                else if (code == 3)
                {
                    // italics
                    italics = true;
                }
                else if (code == 4)
                {
                    // underlined
                    underlined = true;
                }                
                i = match.index + match[0].length;
            }
            n = n.substring(i);
        }
        else
        {
            text += n[0];
            n = n.substring(1);
        }                
    }
    if (text.length > 0)
        pyConsole.appendChild(createColouredTextSpanElement(text, color, bgcolor, italics, bold, underlined));                           
    
    pyConsole.scrollTop = document.getElementById("console").scrollHeight;
}

function inputf(n) {
    inputPromise = new Promise((function(n, e) {                    
                inputElement = document.createElement("span");
                inputElement.setAttribute("contenteditable", "true");
                inputElement.style.color = "rgb(255,255,255)";
                inputElement.style.fontSize = "14pt";
                inputElement.style.outlineStyle = "none";
                pyConsole.appendChild(inputElement);
                inputElement.focus();
                inputElement.addEventListener("keyup", (function(e) {
                    e.preventDefault();
                    if (e.key ==="Enter") {
                        userResponse = inputElement.innerText.replace(/\n+$/, "");
                        inputElement.remove();
                        inputElement = null;
                        outputf(userResponse);
                        outputf("\n");
                        n(userResponse);
                    }
                }))
            }));
    return inputPromise;
}
    
var fontColour = "rgba(255, 255, 255, 1)";
var fontBgColour = "rgba(0, 0, 0, 1)";
var fontItalics = false;
var fontBold = false;
var fontUnderlined = false;
var fontSize = "14pt";

function resetConsole()
{
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
    
    if (typeof(color) !== 'undefined')
    {
        fontColour = color;
    }    
    
    if (typeof(bgcolor) !== 'undefined')
    {
        fontBgColour = bgcolor;
    }
    
    if (typeof(italics) !== 'undefined')
    {
        if (italics)
        {
            fontItalics = "italic";
        }
        else
        {
            fontItalics = "normal";
        }            
    }
    
    if (typeof(bold) !== 'undefined')
    {
        if (bold)
        {
            fontBold = "bold";
        }
        else
        {
            fontBold = "normal";
        }    
    }    

    if (typeof(underlined) !== 'undefined')
    {
        if (underlined)
        {
            fontUnderlined = "underline";
        }
        else
        {
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

function encodeToUTF16(plaintext) {
  var res = "";
  for (i = 0; i < plaintext.length; i++)
  {
    var ch1 = plaintext.charCodeAt(i);
    var ch2 = 0;
    if (ch1 < 256 && i < plaintext.length - 1)
    {
      ch2 = plaintext.charCodeAt(++i);   
      if (ch2 >= 256)
      {      	
        ch2 = 0;
        --i;
      }
    }
    else if (ch1 >= 256)
    {
      ch2 = 0;
      if (i < plaintext.length - 1)
      {
        ch2 = plaintext.charCodeAt(++i);    
      }
      res = res + "@" + String.fromCharCode(ch1, ch2);
      continue;
    }
    res = res + String.fromCharCode(ch1 * 256 + ch2);    
  }
  return res;
}

function decodeFromUTF16(codedText) {
  var res = "";
  
  for (i = 0; i < codedText.length; i++)
  {
    ch = codedText.charCodeAt(i);
    
    if (ch == 64)
    {
      ch1 = codedText.charCodeAt(++i);
      ch2 = codedText.charCodeAt(++i);
      res += String.fromCharCode(ch1, ch2);
    }
    else
    {
      var ch1 = (ch / 256) % (256);
      var ch2 = ch % (256);
           
      if (ch2 == 0)
      {
      	res += String.fromCharCode(ch1);
      }
      else
      {
      	res += String.fromCharCode(ch1, ch2);
      }
    }
  }
  return res;
}

Sk.builtins.clear = function()
{
    clearConsole();
}

Sk.onAfterCompile = function(name, code) {
    var destCode = code;
    if (name == "<stdin>")            
    {
        console.log(code);
        var labels = {};
        
        var blocks = [];
                        
        // grabbing all the blocks and their character indices in the code
        var casePattern = /case \d+:/g;                
        var matches = code.matchAll(casePattern);
        var numBlocks = 0;
        var start = 0;
        var end = 0;
        for (match of matches)
        {
            if (numBlocks == 0)
            {
                start = match.index;
            }
            else
            {
                end = match.index;
                blocks.push([start, end - start]);
                start = end;
                
            }
            numBlocks++;
        }
        if (numBlocks > 0)
        {
            blocks.push([start, code.length - start - 1]);
        }
        
        // pass 1:
        // finding all the label blocks, grabbing their block numbers
        // and populating the lookup table with them
        for (i = 0; i < blocks.length; i++)
        {
            block = code.substr(blocks[i][0], blocks[i][1]);
            var blockNumberPattern = /case (\d+)/g;  
            var blockNumberMatches = block.matchAll(blockNumberPattern);
            for (blockNumberMatch of blockNumberMatches)
            {
                var labalNamePattern = /label (.+)/g;
                var labalNameMatches = block.matchAll(labalNamePattern);
                for (labalNameMatch of labalNameMatches)
                {
                    labels[labalNameMatch[1].trim()] = blockNumberMatch[1];
                    
                    // deleting suspensions code associated with label code
                    var suspensionsPattern = /var \$loadname[\S\s]+?\$blk=(\d+);/g;
                    var suspensionsMatches = block.matchAll(suspensionsPattern);   

                    for (suspensionMatch of suspensionsMatches)
                    {
                        var nextBlock = parseInt(blockNumberMatch[1]) + 1;
                        var linenoPattern = /currLineNo = (\d+);/g;
                        var linenoMatches = block.matchAll(linenoPattern);   
                        for (linenoMatch of linenoMatches)                                
                        {
                            var suspCode = "if (Sk.breakpoints('<stdin>.py'," + linenoMatch[1] + ",0)) {var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '<stdin>.py'," + linenoMatch[1] + ",0);$susp.$blk = " + nextBlock + ";$susp.optional = true;return $susp;}$blk=" + nextBlock + ";";
                            destCode = destCode.replace(suspensionMatch[0], suspCode);      
                        }                                
                    }
                    
                    // deleting suspensions code in the next block too
                    if (i < blocks.length - 1)
                    {
                        block = code.substr(blocks[i + 1][0], blocks[i + 1][1]);
                        var suspensionsPattern = /if \(\$ret[\s\S]+=\$ret;/g;
                        var suspensionsMatches = block.matchAll(suspensionsPattern);   

                        for (suspensionMatch of suspensionsMatches)
                        {
                            
                            destCode = destCode.replace(suspensionMatch[0], "");                                                          
                        }                            
                    }
                }
            }
        }
        
        // pass 2:
        // fill in goto statements
        for (i = 0; i < blocks.length; i++)
        {
            block = code.substr(blocks[i][0], blocks[i][1]);
            var gotoPattern = patt2 = /\/\/\s+goto (.+)[\s\S]+/g;
            var gotoMatches = block.matchAll(gotoPattern);
            for (gotoMatch of gotoMatches)
            {
                var lineNo = labels[gotoMatch[1].trim()];
                // replace everything from the case statement onwards (exclusively) with the blk jump
                destCode = destCode.replace(gotoMatch[0], "$blk=" + lineNo + ";/* goto */continue;");
            }
        }                                
    }        
    return destCode;
}

