# Node Package Manager (NPM)

## NPM Command Cheat Sheet

|Need|Command|Example|
|:--|:--|:--|
|List global level node packages|npm list -g|
|List top level global packages|npm list -g --depth 0|
|Clean cache|npm cache clean --force|
|List module dependencies|npm ls|npm ls @ag-grid-community/core|
|List all configuration data|npm config ls -l|

## Introduction

[NPM](https://docs.npmjs.com/about-npm) is "the worlds largest package manager. For our purposes, npm consists of 

 * Registry of packages 
 * Command Line Interface (CLI)

 We use NPM to install packages that we will subsequently execute in our applications and execute tools that help in our development processes. NPM is installed when we install [Node.js](https://nodejs.org/en/download/current). On windows we can find where we are executing node from by running the following command from the command line.

 ```
 where npm
 ```

and the result is

```
C:\Program Files\nodejs\npm
```

To find out the version installed locally, run

```
npm --version
```

## Configuration
NPM can is configured via environment variables and config files. The config files are named .npmrc and are searched in the following order. 

* per-project config file (<path-to-project>\.npmrc)
* per-user config file %USERPROFILE%\.npmrc  (Windows)
* global config file $APPDATA%\npm\etc\npmrc (Windows)

To see a lot of information about config enter the command.

```
npm config ls -l
```

## Global Verus Local Packages
Most of the time we will install packages locally in the projects we are working on. In some cases where the package provides a specific tool we want to use over and over we might install it globally. Typically global packages will have an executable associated with them. On windows the global packages are installed in 

**%APPDATA%\npm**

and this folder is also added to the windows **PATH** environment variable so executables can be executed. On my machine I have nodemon and tsc in this folder. 

## Development Install
If we install with the --dev flag the package is only used at development time and is not bundled up with the application at production

## npx
[npx](https://docs.npmjs.com/cli/v7/commands/npx) enables one to run a command from a package in a similar way to the way in which we might run it from *npm run*


