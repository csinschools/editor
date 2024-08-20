label .question
element = input("What is the 2nd element in the periodic table?")
if element != "Helium":
    print("That's not correct, try again!")
    goto .question
print("Correct!")