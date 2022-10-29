from csinsc import *

# adapted from flowchart below:
# https://survive-student-resource.austererisk.com/trauma/anzcor_9_1_1_bleeding.html
print(Colour.green + "An interactive guide to managing external bleeding." + Colour.reset)
label .step1
printImage("https://media.istockphoto.com/vectors/first-aid-compression-injury-in-the-arm-vector-id477827854?k=20&m=477827854&s=612x612&w=0&h=i50J8-kjhJ6K36yNJlmkUYAcwT-7kx6op2Fvz_J4_7A=", 200)
response = input("Is there external bleeding? [y/n]")
if response == "y":
    goto .applyPressure
elif response == "n":
    print("This program doesn't apply here.")
    goto .end
else:
    print("Invalid response, try again.")
    goto .step1

label .applyPressure
printImage("https://www.binghamton.edu/emergency/bleeding-control/img/apply-pressure.png", 200)
slowPrint("Apply pressure to the wound.")
goto .bleedingControlled

label .bleedingControlled
response = input("Is the bleeding controlled? [y/n]")
if response == "y":
    goto .selfaid
elif response == "n":
    goto .sendhelp
else:
    print("Invalid response, try again.")
    goto .bleedingControlled

label .selfaid
slowPrint("Self-aid, additional medical aid if required.")
goto .end

label .sendhelp
printImage("https://img.freepik.com/premium-vector/emergency-phone-call-hand-holding-phone-vector-smartphone-with-emergency-calling-mobile-phone-mockup-smartphone-technology_158224-34.jpg", 200)
slowPrint("Send for help. Use additional methods if trained.")
goto .bleedinglimb

label .bleedinglimb
response = input("Bleeding from limb? [y/n]")
if response == "y":
    goto .arterial
elif response == "n":
    goto .haemostatic
else:
    print("Invalid response, try again.")
    goto .bleedinglimb
    
label .arterial
printImage("https://images.squarespace-cdn.com/content/v1/58fb6d72b8a79b0b91bae012/1571132864162-YE4FDG5QTMZDJ215NRR0/Tourniquet.GIF", 400)
slowPrint("Apply arterial tourniquet.")
goto .bleedingControlled2

label .bleedingControlled2
response = input("Is the bleeding controlled now? [y/n]")
if response == "y":
    goto .monitor
elif response == "n":
    goto .secondTourniquet
else:
    print("Invalid response, try again.")
    
label .secondTourniquet
printImage("https://d3i71xaburhd42.cloudfront.net/9c46adff010589c2602c8dd476b71bfb3061a484/3-Figure2-1.png", 200)
slowPrint("Check tourniquet. Consider second tourniquet.")
goto .bleedingControlled3

label .bleedingControlled3
response = input("Is the bleeding controlled now? [y/n]")
if response == "y":
    goto .monitor
elif response == "n":
    goto .haemostatic
else:
    print("Invalid response, try again.")
    
label .haemostatic
printImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmoXzTn01FUYy_nDSVAzSah9Y8wSX1Q5x93w&usqp=CAU")
slowPrint("Apply haemostatic dressing.")
goto .monitor

label .monitor
slowPrint("Monitor bleeding and wait for medical aid.")
goto .end

label .end
print("All done.")


