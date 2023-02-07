# Name IT Right

Stop taking the guess work out of naming your AWS resources!

VS Code extenstion to validate AWS resource names from CloudFormation tempalates in a better way!

## Customer Problem
Current solutions are incomplete and it's hard to update the rules.
With Name It Right, the rules can be much nore granular, and therefore easier to understand by humans.

## Features

### Name IT Right Errors
Get information about resource naming compliance according to resource naming rules expressed in AWS documentation

### Name It Right Warnings
Get information about possible incompatibility between services when using certain names.

### CloudFormation Schema Registry
Get information about resource naming compliance with the rules used by CloudFormation Schema Registry.

## Requirements

- Your CloudFormation template must be in `JSON` format.

## Known issues

- The plugin works only with hardcoded string at the moment (no CF functions like `Fn::Sub` etc.)
