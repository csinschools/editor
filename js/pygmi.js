function stripPeriodFromGoto(code) {
    pass1 = code;
    // removing '.' in front of labels and gotos
    // so that the pyangelo grammar works
    pass1 = pass1.replace(/label \./g, "label ")  
    pass1 = pass1.replace(/goto \./g, "goto ") 
	return pass1;
}

// preprocess the code to relax language grammar rules for newbies!
function pygmify(code)
{
    pass1 = code;
    
    // removing '.' in front of labels and gotos
    // so that the pyangelo grammar works
    pass1 = pass1.replace(/label \./g, "label ")  
    pass1 = pass1.replace(/goto \./g, "goto ")  

    // forever loop
    var forever_pattern = /^(\s*)(forever).*$/gm;                
    var matches = code.matchAll(forever_pattern);
    for (match of matches)
    {
        pass1 = pass1.substr(0, match.index) + pass1.substr(match.index).replace(match[0], match[1] + "while True");
        //pass1 = pass1.replace(match[0], match[1] + "while True");
    }    

    // until loop
    var until_pattern = /^(\s*)(until )(.*)$/gm;                
    matches = code.matchAll(until_pattern);
    for (match of matches)
    {
        pass1 = pass1.substr(0, match.index) + pass1.substr(match.index).replace(match[0], match[1] + "while not " + match[3]);
        //pass1 = pass1.replace(match[0], match[1] + "while not" + match[3]);
    }      
    
    pass2 = pass1;
    // repeat for
    var repeat_for_pattern = /^(\s*)(repeat )(\s*)(\S+)(\s*)=(\s*)(\S*)(\s*)to(\s*)(.*)$/gm;                
    matches = pass1.matchAll(repeat_for_pattern);
    for (match of matches)
    {
        times = match[10].replace(/(:)|(times)/g, "")
        pass2 = pass2.substr(0, match.index) + pass2.substr(match.index).replace(match[0], match[1] + "for " + match[4] + " in range(" + match[7] + ", " + times + "+ 1):");
    }      
    
    pass3 = pass2;
    // repeat   
    var repeat_pattern = /^(\s*)(repeat )(\s*)(.*)$/gm;                
    matches = pass2.matchAll(repeat_pattern);
    for (match of matches)
    {
        times = match[4].replace(/(:)|(times)/g, "")
        pass3 = pass3.substr(0, match.index) + pass3.substr(match.index).replace(match[0], match[1] + "for _ in range(" + times + "):");
    }  
    
    
    pass4 = pass3;
    // = vs ==   
    //var eq_pattern = /^(\s*)(if |elif |while )(.*[^=\<>\!])(=)([^=\<>\!].*)$/gm;                
    var eq_pattern = /^(\s*)(if |elif |while )(.*)$/gm;                
    matches = pass3.matchAll(eq_pattern);
    for (match of matches)
    {
        var condition = "";
        for (i = 0; i < match[3].length; i++)
        {
            var c = match[3][i];
            condition += c;
            // found an equals sign
            if (c == "=")
            {
                if (i > 0)
                {
                    // check the prev char
                    var prev = match[3][i-1];
                    // if it's not <>!
                    if (prev != ">" && prev != "<" && prev != "!")
                    {
                        // always add another equal sign
                        condition += "=";
                        // if the next char is actually an equals sign, then skip it
                        if (i < match[3].length -1 && match[3][i+1] == "=")
                        {
                            i++;
                        }                        
                    }
                }
            }            
        }
        pass4 = pass4.substr(0, match.index) + pass4.substr(match.index).replace(match[0], match[1] + match[2] + condition);
    }      
    
    lastpass = pass4;
    // no colons   
    var if_elif_else_while_for_def_class_pattern = /^(\s*)(if |elif |else|while |for |def |class )(.*)$/gm;                
    matches = pass4.matchAll(if_elif_else_while_for_def_class_pattern);
    for (match of matches)
    {
        if (match[0].trim().slice(-1) != ":")
        {
            lastpass = lastpass.substr(0, match.index) + lastpass.substr(match.index).replace(match[0], match[0] + ":");
        }
    }      
    return lastpass;
}