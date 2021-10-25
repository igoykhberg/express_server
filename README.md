# Repository name: express_server

-   empty Express server

# Installation and running the program

-   npm install
-   create .env file and insert the parameters specified below in ".env parameters"
-   run one of the mentioned below in "Starters"

# .env parameters

-   PORT

# Starters

-   npm run start-dev
-   npm run start-prod

# Systemd

-   Remove .env parameters and configure NODE_ENV in the service file

# Windows

-   Windows: $env:NODE_ENV="production" ; node ./bin/www

# Endpoints

-   GET api/v01/service/test_endpoint - test logs from middleware functions to console

# System logs

-   "src/log/access.log" is for requests

# File structure in project

-   "src/utils/loggers" - logger functions for the mentioned

# Remarks

-   if port not set in .env file, default port 3000 is used
-   default "npm start" script runs in "dev" environment
