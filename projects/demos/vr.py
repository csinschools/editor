from babylon import *

# setting up the sphere
sphere = Sphere()
sphere.position = [0, 0, 5]  # 3D position coordinates!
sphere.radius = 2

# setting up the direction light to simulate the sun
light = DirectionalLight()
light.direction = [-0.25, -1, 0.25] # 3D vector coordinates!

# setting up the material (aka "wallpaper" to wrap around the sphere)
sphereMaterial = Material()
sphereMaterial.ambientColour = Colour.white
# apply the wood texture to the material
sphereMaterial.ambientTexture = Texture("babylon/textures/wood.jpg")
# applying the material to the sphere (i.e. wrapping the wallpaper onto the sphere)
sphere.material = sphereMaterial

# setting up the skybox to give the illusion of a sky
skybox = Skybox("babylon/textures/skybox")

# animations - more advanced. students can become more familiarised
# with accessing dictionaries and lists
rotateOnY = Animation("rotation.y", 10)
rotateOnY.keys = [{"frame": 0, "value": 0},{"frame": 20, "value": 3.14159}, {"frame": 40, "value": 2 * 3.14159}]
rotateOnX = Animation("rotation.x", 10)
rotateOnX.keys = [{"frame": 0, "value": 0},{"frame": 20, "value": 3.14159}, {"frame": 40, "value": 2 * 3.14159}]                    
sphere.animations = [rotateOnY, rotateOnX]
sphere.beginAnimation(0, 40)

# get everything started!
startBabylon()



