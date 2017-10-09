# micro-host
Host html sites the way dropbox used to do through public folder. Place static html pages along with their assets into the /routes folder and name the folders by desired routes. The html file must be named as "index.html".

example:
/routes/helloworld/index.html
/routes/helloworld/some/assets/somescript.js

Above html page will be accessible at: www.mydomain.com/helloworld

The host will automatically map all the routes without need to restart the node process.
