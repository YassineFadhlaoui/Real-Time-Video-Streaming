# Real-Time-Video-Streaming
a real time streaming video application using RTSP (Real Time Streaming Protocol)
##How it works
* NodeJs launchs a child process (ffmpeg) to get the data from rtsp source
* ffmpeg gets the data from the RTSP source, it decodes and generates images with jpeg format.
* Then these images images are sent to client browser through SocketIO

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

```
$ git clone https://github.com/YassineFadhlaoui/Real-Time-Video-Streaming.git
$ cd Real-Time-Video-Streaming
```
### Install client dependencies 
    ```
    $ cd client
    $ npm install
    ```
### Install server dependencies
    ```
    $ cd server
    $ npm install
    ```
## Running the tests
how to run the project ?
### RTSP source
You need an RTSP source to get this project working for example you can use VLC to spoof a RTSP traffic to do so see [RTSP Streaming using VLC](https://youtu.be/VsahDWNByVQ) 
####The generated rtsp link must look like rtsp://localhost:8554/vid 
### Start the server
First of all you have to replace the second line in the  Real-Time-Video-Streaming/server/streamserver.js file
by the path of Real-Time-Video-Streaming folder

The server uses ffmpeg to get the data from RTSP Server,  decodes and generates the images that will be displayed in the client browser using SocketIO
to start the server issue these commands
```
$ cd server
$ node streamserver.js
```
### Start the client application
####First method :
  ```
  open client/app/IPCamera/IPCamera.html file directly 
  ```
####Second method :
  ```
  $ cd client
  $ npm start 
  ```
  then visit http://localhost:8000/
##Requirments
  * ffmpeg installed
  * nodejs installed
  
##Used programming languages
  
  * Javascript
  * AngularJS
  
## Built With

* Atom 

## Authors

* **Yassine Fadhlaoui** - *Initial work* - [Yassine Fadhlaoui](https://github.com/YassineFadhlaoui)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/YassineFadhlaoui/Real-Time-Video-Streaming/blob/master/LICENSE) file for details


##Note :
When the application starts you will see the openstack logo because this application is destined to run on an open stack instance 
but you can run it on your machine as well .


