1. Count how many times `"Resources"` are defined in the file (CloudFormation Template file). If more than once -> throw an error, for now.

1. Find the offset (in # of lines) to the resources
1. Find all resources defined after the offset by using `Object.keys()` of the resources
1. Find all the offsets to the individual resources (start and end line)
1. Find all the properties of each resource
