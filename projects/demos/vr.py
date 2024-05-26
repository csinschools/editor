from babylon import *

# setting up the sphere
sphere1 = Sphere()
sphere1.position = [0, 0, 5]  # 3D position coordinates!
sphere1.radius = 2

# setting up the direction light to simulate the sun
light = DirectionalLight()
light.direction = [-0.25, -1, 0.25] # 3D vector coordinates!

# setting up the material (aka "wallpaper" to wrap around the sphere)
sphereMaterial = Material()
sphereMaterial.ambientColour = Colour.white
# apply the wood texture to the material
sphereMaterial.ambientTexture = Texture("babylon/textures/wood.jpg")
# applying the material to the sphere (i.e. wrapping the wallpaper onto the sphere)
sphere1.material = sphereMaterial

# setting up the skybox to give the illusion of a sky
skybox = Skybox("babylon/textures/skybox")

# get everything started!
startBabylon()