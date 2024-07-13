# Let's practice using highlight to create a "no signal" screen.
# You should add to the exisiting print statements so that
# there are 6 vertical bars.
# The first 3 have been done for you!

from csinsc import *

# Print the first set of bars. Complete the colours!
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   ")
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   ")
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   ")
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   ")
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   ")
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   ")

# The NO SIGNAL text goes below. Remember it is in bold!
print(Colour.reset)

# Print the final set of bars below. Complete the colours!
print(Highlight.white + "   " + Highlight.yellow + "   " + Highlight.cyan + "   ")

# Reset all the settings before the program ends.
print(Colour.reset)
