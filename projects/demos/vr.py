from babylon import *

skybox = Skybox("babylon/textures/skybox")

light = DirectionalLight()
light.direction = [-0.25, -1, 0.25]

sun = Sphere()
sun.position = [0, 5, 0]
sun.radius = 2

sphere1 = Sphere()
sphere1.position = [0, 0, 5]
sphere2 = Sphere()
sphere2.position = [0, 2, 5]
sphere3 = Sphere()
sphere3.position = [0, 4, 5]
sphere4 = Sphere()
sphere4.position = [0, 6, 5]


sphere5 = Sphere()
sphere5.position = [0, 0, -5]
sphere6 = Sphere()
sphere6.position = [0, 2, -5]
sphere7 = Sphere()
sphere7.position = [0, 4, -5]
sphere8 = Sphere()
sphere8.position = [0, 6, -5]


sphere9 = Sphere()
sphere9.position = [5, 0, 0]
sphere10 = Sphere()
sphere10.position = [5, 2, 0]
sphere11 = Sphere()
sphere11.position = [5, 4, 0]
sphere12 = Sphere()
sphere12.position = [5, 6, 0]


sphere13 = Sphere()
sphere13.position = [-5, 0, 0]
sphere14 = Sphere()
sphere14.position = [-5, 2, 0]
sphere15 = Sphere()
sphere15.position = [-5, 4, 0]
sphere16 = Sphere()
sphere16.position = [-5, 6, 0]

earth = Sphere()
earth.position = [0, -5, 0]
earth.radius = 3

redMaterial = Material()
redMaterial.ambientColour = Colour.red
yellowMaterial = Material()
yellowMaterial.ambientColour = Colour.yellow
greenMaterial = Material()
greenMaterial.ambientColour = Colour.green
blueMaterial = Material()
blueMaterial.ambientColour = Colour.blue
magentaMaterial = Material()
magentaMaterial.ambientColour = Colour.magenta

sun.material = yellowMaterial

sphere1.material = greenMaterial
sphere2.material = greenMaterial
sphere3.material = greenMaterial
sphere4.material = greenMaterial

sphere5.material = redMaterial
sphere6.material = redMaterial
sphere7.material = redMaterial
sphere8.material = redMaterial

sphere9.material = blueMaterial
sphere10.material = blueMaterial
sphere11.material = blueMaterial
sphere12.material = blueMaterial

sphere13.material = magentaMaterial
sphere14.material = magentaMaterial
sphere15.material = magentaMaterial
sphere16.material = magentaMaterial

startBabylon()