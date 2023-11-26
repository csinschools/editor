from goodies import *

setSchool("school_ID")

city = input("Enter your city: ")
state = input("Enter your state: ")
country = input("Enter your country: ")
url = getOpenAIImage("The city of " + city + " in the state of " + state + " in the country of " + country + " flooded and underwater.")
slowPrint("In 30 years... this could be the city you live in if we don't do anything about climate change...")
printImage(url)
print(Colour.green + "Live green and sustainably!" + Colour.reset)