from csinsc import printImage

print(">>> Tourism Australia Information Kiosk <<<")

city = input("Melbourne or Sydney?")
if city == "Melbourne":
    printImage("samples/images/melbourne.jpg")
    melbourne_landmark = input("MCG or Arts Centre?")
    if melbourne_landmark == "MCG":
        printImage("samples/images/melbourne_MCG.jpg")
        print("The MCG will serve as the host for the opening ceremonies of the 2026 Commonwealth Games")
    elif melbourne_landmark == "Arts Centre":
        printImage("samples/images/melbourne_arts_centre.jpg")
        print("The Arts Centre is a performing arts centre consisting of a complex of theatres and concert halls.")
    else:
        print("That's not a landmark listed.")
elif city == "Sydney":
    printImage("samples/images/sydney.jpg")
    sydney_landmark = input("Opera House or Harbour Bridge")  
    if sydney_landmark == "Opera House":
        printImage("samples/images/sydney_opera_house.jpg")
        print("Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.")
    elif sydney_landmark == "Harbour Bridge":
        printImage("samples/images/sydney_harbour_bridge.jpg")
        print("The Harbour Bridge is Nicknamed 'The Coathanger' because of its arch-based design.")
    else:
        print("That's not a landmark listed.")    
else:
    print("Sorry that wasn't a city listed.")