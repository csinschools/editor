from goodies import *

setSchool("school_ID")

topic = input("Enter a topic for me to write a poem about: ")
poem = getChatGPTAnswer("Write a poem about " + topic)
print("ChatGPT, the poet, says...")
print(poem)