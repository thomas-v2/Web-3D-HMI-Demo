# Web-3D-HMI-Demo

**Demo of a Web based 3D Roboter Animation with node.js, three.js and nodes7**

This is a demo to create a Web based 3D HMI for a roboter arm, which can be controlled from a S7 controller.
The robot model was created from Kuka KR300 CAD model (STEP format) which was split into single parts
using FreeCAD software. The single parts are exported in OBJ format which gives in my experience the best results at
relative small file size. The parts in OBJ format are then loaded by the OBJLoader which comes with three.js.

The setpoint for each of the 5 axes are read out of the S7 program.
The rotation to the the desired setpoint is done by some Javascript on the robot.html.
The rotation speed of which the axis follows the setpoint can be configured from the Web GUI.

![Demo application running in a Webbrowser](file://images/demo-web-robot-tablet.jpg)

## Installation

The neccessary Javascript modules are downloaded and installed with npm.

In the work directory call:
```
npm install
```
which downloads them and copies some of the three.js files into the public directory.

## Prerequisites

Settings like Webserver port (default: 3000) and the S7-Plc IP, rack, slot and variable addresses can be configured in the file:
```
config.json
```

To control this model using S7 Plc variables, you need a S7 Plc (300/400 or 1200/1500 with Put/Get enabled) with a TCP/IP network interface.
The rotation of each axis is limited to:

| Axis  |      Name         |  Range of motion         |
|:-----:|:-----------------:|:------------------------:|
| 1     | Rotating column   | -170&deg; to +170&deg;   |
| 2     | Link arm          | -40&deg; to +110&deg;    |
| 3     | Arm               | -90&deg; to +65&deg;     |
| 4     | Wrist             | -40&deg; to +100&deg;    |
| 5     | End effector      | -175&deg; to +175&deg;   |

## Running

Start the application with:

```
node app-web-3d-hmi-demo.js
```

The default setting for the Webserver port is 3000. You can change this in the *config.json* file.
To view the demo with default settings, open a Webbrowser with the URL:

```
http://<your-ip>:3000/robot.html
```

Controls:
- Press LEFT mousebutton & MOVE mouse to rotate
- Press RIGHT mousebutton & MOVE mouse to pan
- Use mouse SCROLLWHEEL to zoom in / out

## Technical Details

* Using [Node.js](https://nodejs.org/) with express to deliver static content
* Using [nodeS7](https://www.npmjs.com/package/nodes7) for accessing variables from a S7 plc
* Using [three.js](https://threejs.org/) to create the 3D graphics
* The OBJ model was created from a CAD step model with [FreeCAD](https://www.freecadweb.org/)
* The robot model is based on [Kuka KR300](https://www.kuka.com/de-de/produkte-leistungen/robotersysteme/industrieroboter/kr-300-pa)

## Authors

* **Thomas Wiens** - *Initial work* - [thomas-v2](https://github.com/thomas-v2)
