# micro-host
Host html sites the way dropbox used to do through the /public folder. Place static html pages along with their assets into the /routes folder and name the folders by desired routes. The html file must be named as "index.html".

example:
/routes/helloworld/index.html

Above html page will be accessible at: www.mydomain.com/helloworld

The host will automatically map all the routes without need to restart the node process. Add or remove folders under the /routes on the fly during the runtime. "Forever" can be used to keep the server up and running.

To install and run:
1. clone repository
2. npm install
3. cd engine
3. sudo node index.js OR sudo forever start index.js
