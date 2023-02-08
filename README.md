# **Name IT Right VS Code Extension**
*Stop taking the guess work out of naming your AWS resources!*

Visual Studio Code Extenstion to validate AWS Resource names in CloudFormation templates.

<label for="video"><a href="https://d2v7vha21bdhr0.cloudfront.net/extension-wide.mp4">See in action</a></label>
<video id='video' src="https://d2v7vha21bdhr0.cloudfront.net/extension-wide.mp4" controls style="max-height:60vh;" alt="See live: https://d2v7vha21bdhr0.cloudfront.net/extension-wide.mp4" title="See live: https://d2v7vha21bdhr0.cloudfront.net/extension-wide.mp4"></video>

## Features

### Errors
Get warned before deploying the template about the properties breaking AWS naming rules thanks to our curated, open-source registry. We support **multiple rules** per property and provide **human-readable** errors.

### Warnings
Get insights about possible incompatibility between services when using certain names, without having to go through the documentation every time.

### CloudFormation Schema Registry
To ensure completeness, we leverage naming rules from CloudFormation resource provider schemas if Name IT Right does not (yet) have information about the resource.

## Requirements and current limitations
- Only JSON format of CloudFormation templates is supported.
- Only hardcoded JSON strings are supported. The extension does not evaluate CloudFormation functions like `Fn::Sub`.
- CloudFormation resource provider schemas may not be 100% accurate, as the resource availability may vary by region - [read more here](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-type-schemas.html).

## Building extension from source
Make sure [Visual Studio Code Extension Manager (vsce)](https://github.com/microsoft/vscode-vsce#usage) is installed.

You can build the `.vsix` package with `vsce package`. Finally, install it with from the context menu on the Extensions view by pointing to the newly created file.
