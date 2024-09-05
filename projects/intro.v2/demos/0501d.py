from goodies import Colour

print("Who dares approach the Gates of Doom?? ")
print(Colour.purple + "      ______")
print("   ,-' ;  ! `-.")
print("  / :  !  :  . \ ")
print(" |_ ;   __:  ;  |")
print(" )| .  :)(.  !  |")
print(" |~    (##)  :  |")
print(" |  :  ;`'   .  (")
print(" |  :  :  .  |  |")
print(" |___.------.___|" + Colour.reset)
print()
secret = input("Speak the password: ")

if secret == "0p3nSe5@m3":
  print("You are correct!")
  sleep(0.5)
  print(Colour.yellow + "You may enter and enjoy the riches within." + Colour.reset)
  sleep(1.5)

print("The gates slams close.")
sleep(1)
print("Forever!")

sleep(1)
print(Colour.red + "THE END")
