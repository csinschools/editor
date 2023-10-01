from goodies import *

setSchool("school_ID")

city = input("Enter your city: ")
state = input("Enter your state: ")
country = input("Enter your country: ")
url = getOpenAIImage("A cyclone in the city of " + city + " in the state of " + state + " in the country of " + country)
printImage(url)