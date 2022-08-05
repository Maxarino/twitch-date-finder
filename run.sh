#!/bin/bash

# switch to correct node version
# source $NVM_DIR/nvm.sh;
# nvm use 16

# Navigate to the backend
cd backend

echo "Starting backend web server..."
# Activate virtual env
# source /usr/local/bin/virtualenvwrapper.sh
# workon twitch

# Kills backend when we kill frontend
trap 'kill %1' SIGINT
python manage.py runserver & cd ../frontend && npm start
