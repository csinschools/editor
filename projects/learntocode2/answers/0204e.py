# enter your code here
# (hint: you may copy your code from the previous your
# solar system exercise and change / add to the code)

from csinsc import printImage

planet = input("Please type in your favourite planet (all lowercase):")

if planet == "mercury":
  print("Mercury is the closest planet to the Sun! Did you know that a year on Mercury is just 88 days long?")
  printImage("https://www.weather.gov/images/fsd/astro/mercury_messenger_sm.jpg")
elif planet == "venus":
  print("Venus is the second planet from the Sun! Did you know that Venus is the third brightest natural object in the sky after the Sun and the Moon?")
  printImage("http://images.shoutwiki.com/ssrp/thumb/c/c6/Venus.jpg/256px-Venus.jpg")
elif planet == "earth":
  print("That's where we live! Earth is the third planet from the Sun! Did you know that Earth's surface is 70% water?")
  printImage("https://photojournal.jpl.nasa.gov/browse/PIA00114.gif")
elif planet == "mars":
  print("Mars is Elon Musks' idea for a second home!")
  printImage("https://nssdc.gsfc.nasa.gov/planetary/mars/image/mars.gif")
else:
  print("I don't know about that planet. It must be out of this world.")
