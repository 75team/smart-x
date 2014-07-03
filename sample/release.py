import os, shutil

shutil.rmtree("./build", True)
shutil.copytree("./frameworks/js-bindings/bindings/script", "./build/script")
shutil.copytree("./src", "./build/src")
shutil.rmtree("./build/script/debugger")
shutil.copy("./main.js", "./build/script/main.js")
os.remove("./build/script/jsb_debugger.js")
os.system("cocos jscompile -s ./build/src -d ./dist -c true -o game.min.js -j release-config.json")
os.system("cocos jscompile -s ./build/script -d ./dist")
shutil.rmtree("./build", True)
shutil.copy("./project-release.json", "./dist/project.json")
