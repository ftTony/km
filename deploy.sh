# deploy.sh
#!/bin/bash

echo 'npm install'
npm install

echo 'npm run km:build'
npm run km:build

echo 'success'