from goodies import *

setSchool("school_ID")

topic = input("Enter a topic for me to write a poem about: ")
print(Colour.green + "Please wait while ChatGPT gets inspired..." + Colour.reset)
poem = getChatGPTAnswer("Write a poem about " + topic)

print(poem)