from goodies import *

setSchool("school_ID")

language = input("Enter a language: ")
translated = getTranslation("Hello, how are you?", language)
speak(translated, language)