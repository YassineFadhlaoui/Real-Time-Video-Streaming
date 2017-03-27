# Real-Time-Video-Streaming
a real time streaming video application using RTSP (Real Time Streaming Protocol)
## Part two of the Project
* [Ceilometer metrics](https://github.com/YassineFadhlaoui/Ceilometer-metrics)
the second part consist in configuring ceilometer, monitoring instances, creating graphs using sophisticated algorithms

## How it works
* NodeJs launchs a child process (ffmpeg) to get the data from the rtsp source
* ffmpeg receives the data from the RTSP source, decodes it and generates images.
* Then these images are sent to client browser through SocketIO

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
## Using Docker Image
* under development

## Manual Installation
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
* The generated rtsp link must look like rtsp://localhost:8554/vid 
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

  ```
  $ cd client
  $ npm start 
  ```
  then visit http://localhost:8000/
## Requirments
  * ffmpeg installed
  * nodejs installed
  
## Used programming languages
  
  * Javascript

## Authors

* **Yassine Fadhlaoui** - *Initial work* - [Yassine Fadhlaoui](https://github.com/YassineFadhlaoui)

## License

This project is licensed under the GPL-v3 License - see the [LICENSE](https://github.com/YassineFadhlaoui/Real-Time-Video-Streaming/blob/master/LICENSE) file for details


## Note :
When the application starts you will see the openstack logo because this application is destined to run on an open stack instance 
but you can run it on your machine as well .


