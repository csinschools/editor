# Let's practice using highlight to create a "no signal" screen.
# You should add to the exisiting print statements so that
# there are 6 vertical bars.
# The first 3 have been done for you!

from csinsc import *

# Print the first set of bars. Complete the colours!
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   " + Highlight.blue + "   " + Highlight.green + "   " + Highlight.orange + "   " + Highlight.red + "   ")
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   " + Highlight.blue + "   " + Highlight.green + "   " + Highlight.orange + "   " + Highlight.red + "   ")
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   " + Highlight.blue + "   " + Highlight.green + "   " + Highlight.orange + "   " + Highlight.red + "   ")
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   " + Highlight.blue + "   " + Highlight.green + "   " + Highlight.orange + "   " + Highlight.red + "   ")
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   " + Highlight.blue + "   " + Highlight.green + "   " + Highlight.orange + "   " + Highlight.red + "   ")
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   " + Highlight.blue + "   " + Highlight.green + "   " + Highlight.orange + "   " + Highlight.red + "   ")

# The NO SIGNAL text goes below. Remember it is in bold!
print(Colour.reset + Style.bold + "      No Signal!")

# Print the final set of bars below. Complete the colours!
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   " + Highlight.blue + "   " + Highlight.green + "   " + Highlight.orange + "   " + Highlight.red + "   ")

# Reset all the settings before the program ends.
print(Colour.reset)
