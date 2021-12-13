# ascii art from:
# http://ascii.co.uk/art/trophy
print("             ___________")
print("            '._==_==_=_.'")
print("            .-\:      /-.")
print("           | (|:.     |) |")
print("            '-|:.     |-'")
print("              \::.    /")
print("               '::. .'")
print("                 ) (")
print("               _.' '._")
print("              `'''''''`   jgs")
print()

print("Which movie was the first to win 11 Academy Awards?")
print("a) Ben-Hur")
print("b) La La Land")
print("c) Titanic")
print("d) Sound of Music")

answer = input("Please enter your choice [a/b/c/d]: ")

if answer == "a":
  print("Correct! It is one of the reasons for the saying 'bigger than Ben-Hur'.")
elif answer == "b":
  print("The answer is Ben-Hur. La La Land did, however, win 6 Academy Awards in 2016.")
elif answer == "c":
  print("The answer is Ben-Hur. Titanic did win 11 Academy Awards, but it occurred later, in 1998.")
elif answer == "d":
  print("The answer is Ben-Hur. Sound of Music won 5 Academy Awards in 1966.")
else:
  print("Sorry, that was not an option.")
