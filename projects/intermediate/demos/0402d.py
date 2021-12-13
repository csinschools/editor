answer = input("Why do I have to eat my vegetables?")

keep_going = True

while keep_going == True:
  answer = input("But... why? ")

  if answer == "because I said so":
    keep_going = False

print("Okay then!")
