from goodies import *

setSchool("school_ID")

question = input("Enter a question: ")
answer = getChatGPTAnswer(question)
print("ChatGPT thinks the answer is: " + answer)