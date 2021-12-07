keep_going = True

while keep_going == True:
  food = input("Tell me what food you love: ")

  if "pies" in food or "lamingtons" in food or "bustucker" in food or "vegemite" in food:
    print("So you like Aussie food!")
  elif "pasta" in food or "spaghetti" in food or "risotto" in food:
    print("So you like Italian food!")
  elif "sushi" in food or "sashimi" in food or "udon" in food:
    print("So you like Japanese food!")
  else:
    print("I like that too.")
