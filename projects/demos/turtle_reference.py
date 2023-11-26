from turtle import *
color("red")                 # changes the colour drawn by the turtle
                             # try changing the colour between
                             # the quotation marks !
forward(100)

right(90)

penup()                      # the turtle will not leave a trail,
                             # it will move and turn but won't draw
forward(100)

right(90)
pendown()                    # the turtle will draw lines again
color("blue")
forward(100)

write("Hello there!")        # display text at the turtle's location
                             # try changing the text between
                             # the quotation marks !
penup()
forward(150)
pendown()
color("orange")
write("Bigger!", font=("Arial", 20, "normal"))
                             # display text using a certain font 
                             # size, and style:
                             # normal, bold, italics
right(90)
penup()
forward(50)

pendown()
color("green")
begin_fill()                # used with end_fill() below...
repeat 3:
    forward(50)
    right(120)
end_fill()                  # Colours in everything drawn
                            # between begin_fill() and end_fill()