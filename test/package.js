const assert = require('assert'),
    jsonHasDifferences = require('diffler'),
    packagejson = require('../package.json')

const packageMock = {
  "author": {
    "name": "Jim Manton"
  },
  "version": "0.0.1",
  "bundleDependencies": false,
  "dependencies": {
    "chai": "^4.3.7",
    "node-console-colors": "^1.1.4",
    "queuejson": "^8.3.1",
    "diffler": "^2.0.4",
    "fs": "^0.0.1-security",
    "mocha": "^10.2.0"
  },
  "scripts": {
    "start": "node app.ts",
    "test": "mocha",
    "ditched": "ditched -a",
    "test_files": "node ./tests/files"
  },
  "keywords": [
    "queue",
    "processing",
    "appenders",
    "javascript",
    "synchronous",
    "objects",
    "promises",
    "mocha"
  ],
  "homepage": "https://github.com/jman717/file-queue",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jman717/file-queue.git"
  },
  "deprecated": false,
  "description": "Queue Objects For Processing",
  "email": "jrman@risebroadband.net",
  "license": "MIT",
  "main": "app.js",
  "name": "queueobj",
  "start": "node app.js"
}

describe('package.json', function () {
    it('should pass', function () {
      const difference = jsonHasDifferences(packagejson, packageMock)
      assert(JSON.stringify(difference) == "{}")
    })

    it('should fail', function () {
        packageMock.version = '0'
        assert(jsonHasDifferences(packagejson, packageMock))
    })
})
