food = input("Favourite cuisine?")
if food == "italian":
   dish = input("Favourite dish?")
   if dish == "pasta":
      print("I like gnocchi most!")
   else:
      print(dish + " is yummy!")
elif food == "chinese":
   dish = input("Favourite dish?")
   if dish == "fried rice":
      print("I love rice!")
   elif dish == "noodles":
      print("I like the egg ones!")
   else:
      print(dish + " is yummy!")
else:
   print(food + " is yummy!")