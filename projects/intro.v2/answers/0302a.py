from goodies import Colour, Highlight

print(Highlight.red + Colour.yellow + "Let's draw some flags!")
print(Highlight.orange + "                      ")

print()
print(Colour.reset + "The Flag of the Netherlands:")
print(Highlight.red + "         ")
print(Highlight.white + "         ")
print(Highlight.blue + "         ")
print()
print(Colour.reset + "The Flag of Nigeria:")
print(Highlight.green + "   " + Highlight.white + "   " + Highlight.green + "   ")
print(Highlight.green + "   " + Highlight.white + "   " + Highlight.green + "   ")
print(Highlight.green + "   " + Highlight.white + "   " + Highlight.green + "   ")