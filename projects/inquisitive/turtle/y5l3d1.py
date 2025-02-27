from turtle import *
# moving the turtle to the correct starting position
penup()
forward(100)
pendown()
# face upwards
left(90)
# draw outer red circle
begin_fill()
color("red")
repeat 360:
    forward(2)
    left(1)
end_fill()
# move in 10 steps
left(90)
forward(10)
right(90)
# draw smaller orange circle
begin_fill()
color("orange")
repeat 360:
    forward(1.83)
    left(1)
end_fill()
# move in 10 steps
left(90)
forward(10)
right(90)
# draw smaller yellow circle
begin_fill()
color("yellow")
repeat 360:
    forward(1.65)
    left(1)
end_fill()
# move in 10 steps
left(90)
forward(10)
right(90)
# draw smaller green circle
begin_fill()
color("green")
repeat 360:
    forward(1.48)
    left(1)
end_fill()
# move in 10 steps
left(90)
forward(10)
right(90)
# draw smaller blue circle
begin_fill()
color("blue")
repeat 360:
    forward(1.3)
    left(1)
end_fill()
# move in 10 steps
left(90)
forward(10)
right(90)
# draw smaller indigo circle
begin_fill()
color("indigo")
repeat 360:
    forward(1.13)
    left(1)
end_fill()
# move in 10 steps
left(90)
forward(10)
right(90)
# draw last small white circle
begin_fill()
color("white")
repeat 360:
    forward(0.95)
    left(1)
end_fill()
# draw the light green ground 
# this also covers the bottom half the circles to form the rainbow!
begin_fill()
left(90)
forward(200)
left(90)
forward(150)
left(90)
forward(295)
left(90)
forward(150)
left(90)
forward(95)
color("lightGreen")
end_fill()
# display the text
color("black")
penup()
forward(135)
left(90)
forward(30)
write("My Rainbow!", font = ("Verdana", 20))