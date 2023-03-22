city = input("Melbourne or Sydney?")
if city == "Melbourne":
    melbourne_landmark = input("MCG or Arts Centre?")
    if melbourne_landmark == "MCG":
        print("The MCG will serve as the host for the opening ceremonies of the 2026 Commonwealth Games")
    elif melbourne_landmark == "Arts Centre":
        print("The Arts Centre is a performing arts centre consisting of a complex of theatres and concert halls.")
    else:
        print("That's not a landmark listed.")
elif city == "Sydney":
    sydney_landmark = input("Opera House or Harbour Bridge")  
    if sydney_landmark == "Opera House":
        print("Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.")
    elif sydney_landmark == "Harbour Bridge":
        print("The Harbour Bridge is Nicknamed 'The Coathanger' because of its arch-based design.")
    else:
        print("That's not a landmark listed.")    
else:
    print("Sorry that wasn't a city listed.")