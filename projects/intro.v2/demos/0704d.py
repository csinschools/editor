from goodies import *

# adapted from flowchart below:
# https://survive-student-resource.austererisk.com/trauma/anzcor_9_1_1_bleeding.html
print(Colour.green + "An interactive guide to managing external bleeding." + Colour.reset)
print(r'''            .---------.
       _    |:: [-=-] |
      | |   |_________|
      |~|
      |_|                    ,;;;;,
       I\  ,__ ,;;;, __,    ///\\\\\
       I |{   / . . \   }   / "  \\||
       I | ) (   _   ) (    \_= _///
       I |{___'-. .-'___}\___ )_\
       I ||~/,'~~~~~,\~~|'---((  \
       I \ //        \\ |     \ \ \
       I  \/         // |     | /-/
       I (/         (/  |     |/||\
       I  |             |     |    |
       I  |             |     |____/
       I  :-----_o_-----:      || |
       I  | /~~|===|~~\ |      (( |
       I  ||   |===|   ||      ||_/
      /^\ "~   '^^^'   ""     ((__|
''')
label .step1
response = input("Is there external bleeding? [y/n]")
if response == "y":
    goto .applyPressure
if response == "n":
    print("This program doesn't apply here.")
    goto .end
print("Invalid response, try again.")
goto .step1

label .applyPressure
slowPrint("Apply pressure to the wound.")
goto .bleedingControlled

label .bleedingControlled
response = input("Is the bleeding controlled? [y/n]")
if response == "y":
    goto .selfaid
if response == "n":
    goto .sendhelp
print("Invalid response, try again.")
goto .bleedingControlled

label .selfaid
slowPrint("Self-aid, additional medical aid if required.")
goto .end

label .sendhelp
slowPrint("Send for help. Use additional methods if trained.")
goto .bleedinglimb

label .bleedinglimb
response = input("Bleeding from limb? [y/n]")
if response == "y":
    goto .arterial
if response == "n":
    goto .haemostatic
print("Invalid response, try again.")
goto .bleedinglimb
    
label .arterial
slowPrint("Apply arterial tourniquet.")
goto .bleedingControlled2

label .bleedingControlled2
response = input("Is the bleeding controlled now? [y/n]")
if response == "y":
    goto .monitor
if response == "n":
    goto .secondTourniquet
print("Invalid response, try again.")
goto .bleedingControlled2
    
label .secondTourniquet
slowPrint("Check tourniquet. Consider second tourniquet.")
goto .bleedingControlled3

label .bleedingControlled3
response = input("Is the bleeding controlled now? [y/n]")
if response == "y":
    goto .monitor
if response == "n":
    goto .haemostatic
print("Invalid response, try again.")
goto .bleedingControlled3
    
label .haemostatic
slowPrint("Apply haemostatic dressing.")
goto .monitor

label .monitor
slowPrint("Monitor bleeding and wait for medical aid.")
goto .end

label .end
print("All done")