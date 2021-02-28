# Get started

## Install
npm install <GITHUB_URL>

## Update deploy.sh
npm install
npm uninstall governor-common
npm install https://github.com/tinysquirrelton/governor-common.git
npm run build

## Update package.json
{"scripts": {..., "postinstall": "rm -rf src/governor-common && cp -r node_modules/governor-common/src src/governor-common"}}

## Add to .gitignore
/src/governor-common

## Usage
Import the components you want from the repository.
