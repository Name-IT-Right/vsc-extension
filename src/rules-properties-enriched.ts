export const rulesPropertiesEnriched = {
    "AWS::AppIntegrations::DataIntegration": {
        "properties": {
            "Description": {
                "description": "The data integration description.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1000
            },
            "Id": {
                "description": "The unique identifer of the data integration.",
                "type": "string",
                "pattern": "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}",
                "minLength": 1,
                "maxLength": 255
            },
            "DataIntegrationArn": {
                "description": "The Amazon Resource Name (ARN) of the data integration.",
                "type": "string",
                "pattern": "^arn:aws[-a-z]*:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$",
                "minLength": 1,
                "maxLength": 2048
            },
            "Name": {
                "description": "The name of the data integration.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9/\\._\\-]+$",
                "minLength": 1,
                "maxLength": 255
            },
            "KmsKey": {
                "description": "The KMS key of the data integration.",
                "type": "string",
                "pattern": ".*\\S.*",
                "minLength": 1,
                "maxLength": 255
            },
            "ScheduleConfig": {
                "description": "The name of the data and how often it should be pulled from the source.",
                "$ref": "#/definitions/ScheduleConfig"
            },
            "SourceURI": {
                "description": "The URI of the data source.",
                "type": "string",
                "pattern": "^\\w+\\:\\/\\/\\w+\\/[\\w/!@#+=.-]+$",
                "minLength": 1,
                "maxLength": 255
            },
            "Tags": {
                "description": "The tags (keys and values) associated with the data integration.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 0,
                "maxItems": 200
            }
        }
    },
    "AWS::DevOpsGuru::NotificationChannel": {
        "properties": {
            "Config": {
                "$ref": "#/definitions/NotificationChannelConfig"
            },
            "Id": {
                "description": "The ID of a notification channel.",
                "type": "string",
                "minLength": 36,
                "maxLength": 36,
                "pattern": "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"
            }
        }
    },
    "AWS::FMS::Policy": {
        "properties": {
            "ExcludeMap": {
                "$ref": "#/definitions/IEMap"
            },
            "ExcludeResourceTags": {
                "type": "boolean"
            },
            "IncludeMap": {
                "$ref": "#/definitions/IEMap"
            },
            "Id": {
                "type": "string",
                "pattern": "^[a-z0-9A-Z-]{36}$",
                "minLength": 36,
                "maxLength": 36
            },
            "PolicyName": {
                "type": "string",
                "pattern": "^([a-zA-Z0-9_.:/=+\\-@\\s]+)$",
                "minLength": 1,
                "maxLength": 1024
            },
            "PolicyDescription": {
                "type": "string",
                "pattern": "^([a-zA-Z0-9_.:/=+\\-@\\s]+)$",
                "maxLength": 256
            },
            "RemediationEnabled": {
                "type": "boolean"
            },
            "ResourceTags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ResourceTag"
                },
                "maxItems": 8,
                "insertionOrder": true
            },
            "ResourceType": {
                "$ref": "#/definitions/ResourceType"
            },
            "ResourceTypeList": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ResourceType"
                },
                "insertionOrder": true
            },
            "ResourceSetIds": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Base62Id"
                },
                "insertionOrder": true,
                "uniqueItems": true
            },
            "SecurityServicePolicyData": {
                "$ref": "#/definitions/SecurityServicePolicyData"
            },
            "Arn": {
                "$ref": "#/definitions/ResourceArn"
            },
            "DeleteAllPolicyResources": {
                "type": "boolean"
            },
            "ResourcesCleanUp": {
                "type": "boolean"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/PolicyTag"
                },
                "insertionOrder": true
            }
        }
    },
    "AWS::Grafana::Workspace": {
        "properties": {
            "AuthenticationProviders": {
                "type": "array",
                "insertionOrder": false,
                "minItems": 1,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/AuthenticationProviderTypes"
                },
                "description": "List of authentication providers to enable."
            },
            "SsoClientId": {
                "type": "string",
                "description": "The client ID of the AWS SSO Managed Application."
            },
            "SamlConfiguration": {
                "$ref": "#/definitions/SamlConfiguration"
            },
            "VpcConfiguration": {
                "$ref": "#/definitions/VpcConfiguration"
            },
            "SamlConfigurationStatus": {
                "$ref": "#/definitions/SamlConfigurationStatus"
            },
            "ClientToken": {
                "type": "string",
                "pattern": "^[!-~]{1,64}$",
                "description": "A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request."
            },
            "Status": {
                "$ref": "#/definitions/WorkspaceStatus"
            },
            "CreationTimestamp": {
                "type": "string",
                "description": "Timestamp when the workspace was created.",
                "format": "date-time"
            },
            "ModificationTimestamp": {
                "type": "string",
                "description": "Timestamp when the workspace was last modified",
                "format": "date-time"
            },
            "GrafanaVersion": {
                "type": "string",
                "maxLength": 255,
                "minLength": 1,
                "description": "Version of Grafana the workspace is currently using."
            },
            "Endpoint": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "description": "Endpoint for the Grafana workspace."
            },
            "AccountAccessType": {
                "$ref": "#/definitions/AccountAccessType"
            },
            "OrganizationRoleName": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "description": "The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization."
            },
            "PermissionType": {
                "$ref": "#/definitions/PermissionType"
            },
            "StackSetName": {
                "type": "string",
                "description": "The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace."
            },
            "DataSources": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/DataSourceType"
                },
                "description": "List of data sources on the service managed IAM role."
            },
            "Description": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 0,
                "description": "Description of a workspace."
            },
            "Id": {
                "type": "string",
                "pattern": "^g-[0-9a-f]{10}$",
                "description": "The id that uniquely identifies a Grafana workspace."
            },
            "Name": {
                "type": "string",
                "pattern": "^[a-zA-Z0-9-._~]{1,255}$",
                "description": "The user friendly name of a workspace."
            },
            "NotificationDestinations": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/NotificationDestinationType"
                },
                "description": "List of notification destinations on the customers service managed IAM role that the Grafana workspace can query."
            },
            "OrganizationalUnits": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "description": "Id of an organizational unit."
                },
                "description": "List of Organizational Units containing AWS accounts the Grafana workspace can pull data from."
            },
            "RoleArn": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "description": "IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources."
            }
        }
    },
    "AWS::IoTFleetWise::Fleet": {
        "properties": {
            "Arn": {
                "type": "string"
            },
            "CreationTime": {
                "type": "string",
                "format": "date-time"
            },
            "Description": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "^[^\\u0000-\\u001F\\u007F]+$"
            },
            "Id": {
                "type": "string",
                "maxLength": 100,
                "minLength": 1,
                "pattern": "^[a-zA-Z0-9:_-]+$"
            },
            "LastModificationTime": {
                "type": "string",
                "format": "date-time"
            },
            "SignalCatalogArn": {
                "type": "string"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "insertionOrder": false,
                "uniqueItems": true,
                "maxItems": 50,
                "minItems": 0
            }
        }
    },
    "AWS::IoTWireless::TaskDefinition": {
        "properties": {
            "Name": {
                "description": "The name of the new resource.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256
            },
            "AutoCreateTasks": {
                "description": "Whether to automatically create tasks using this task definition for all gateways with the specified current version. If false, the task must me created by calling CreateWirelessGatewayTask.",
                "type": "boolean"
            },
            "Update": {
                "description": "Information about the gateways to update.",
                "$ref": "#/definitions/UpdateWirelessGatewayTaskCreate"
            },
            "LoRaWANUpdateGatewayTaskEntry": {
                "description": "The list of task definitions.",
                "$ref": "#/definitions/LoRaWANUpdateGatewayTaskEntry"
            },
            "Id": {
                "description": "The ID of the new wireless gateway task definition",
                "type": "string",
                "pattern": "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}"
            },
            "TaskDefinitionType": {
                "description": "A filter to list only the wireless gateway task definitions that use this task definition type",
                "type": "string",
                "enum": [
                    "UPDATE"
                ]
            },
            "Arn": {
                "description": "TaskDefinition arn. Returned after successful create.",
                "type": "string"
            },
            "Tags": {
                "description": "A list of key-value pairs that contain metadata for the destination.",
                "type": "array",
                "uniqueItems": true,
                "maxItems": 200,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Lambda::EventSourceMapping": {
        "properties": {
            "Id": {
                "description": "Event Source Mapping Identifier UUID.",
                "type": "string",
                "pattern": "[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}",
                "minLength": 36,
                "maxLength": 36
            },
            "BatchSize": {
                "description": "The maximum number of items to retrieve in a single batch.",
                "type": "integer",
                "minimum": 1,
                "maximum": 10000
            },
            "BisectBatchOnFunctionError": {
                "description": "(Streams) If the function returns an error, split the batch in two and retry.",
                "type": "boolean"
            },
            "DestinationConfig": {
                "description": "(Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.",
                "$ref": "#/definitions/DestinationConfig"
            },
            "Enabled": {
                "description": "Disables the event source mapping to pause polling and invocation.",
                "type": "boolean"
            },
            "EventSourceArn": {
                "description": "The Amazon Resource Name (ARN) of the event source.",
                "type": "string",
                "pattern": "arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\\-])+:([a-z]{2}(-gov)?-[a-z]+-\\d{1})?:(\\d{12})?:(.*)",
                "minLength": 12,
                "maxLength": 1024
            },
            "FilterCriteria": {
                "description": "The filter criteria to control event filtering.",
                "$ref": "#/definitions/FilterCriteria"
            },
            "FunctionName": {
                "description": "The name of the Lambda function.",
                "type": "string",
                "pattern": "(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\\$LATEST|[a-zA-Z0-9-_]+))?",
                "minLength": 1,
                "maxLength": 140
            },
            "MaximumBatchingWindowInSeconds": {
                "description": "(Streams) The maximum amount of time to gather records before invoking the function, in seconds.",
                "type": "integer",
                "minimum": 0,
                "maximum": 300
            },
            "MaximumRecordAgeInSeconds": {
                "description": "(Streams) The maximum age of a record that Lambda sends to a function for processing.",
                "type": "integer",
                "minimum": -1,
                "maximum": 604800
            },
            "MaximumRetryAttempts": {
                "description": "(Streams) The maximum number of times to retry when the function returns an error.",
                "type": "integer",
                "minimum": -1,
                "maximum": 10000
            },
            "ParallelizationFactor": {
                "description": "(Streams) The number of batches to process from each shard concurrently.",
                "type": "integer",
                "minimum": 1,
                "maximum": 10
            },
            "StartingPosition": {
                "description": "The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Streams sources.",
                "type": "string",
                "pattern": "(LATEST|TRIM_HORIZON|AT_TIMESTAMP)+",
                "minLength": 6,
                "maxLength": 12
            },
            "StartingPositionTimestamp": {
                "description": "With StartingPosition set to AT_TIMESTAMP, the time from which to start reading, in Unix time seconds.",
                "type": "number"
            },
            "Topics": {
                "description": "(Kafka) A list of Kafka topics.",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "string",
                    "pattern": "^[^.]([a-zA-Z0-9\\-_.]+)",
                    "minLength": 1,
                    "maxLength": 249
                },
                "minItems": 1,
                "maxItems": 1
            },
            "Queues": {
                "description": "(ActiveMQ) A list of ActiveMQ queues.",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "string",
                    "pattern": "[\\s\\S]*",
                    "minLength": 1,
                    "maxLength": 1000
                },
                "minItems": 1,
                "maxItems": 1
            },
            "SourceAccessConfigurations": {
                "description": "A list of SourceAccessConfiguration.",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/SourceAccessConfiguration"
                },
                "minItems": 1,
                "maxItems": 22
            },
            "TumblingWindowInSeconds": {
                "description": "(Streams) Tumbling window (non-overlapping time window) duration to perform aggregations.",
                "type": "integer",
                "minimum": 0,
                "maximum": 900
            },
            "FunctionResponseTypes": {
                "description": "(Streams) A list of response types supported by the function.",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "string",
                    "enum": [
                        "ReportBatchItemFailures"
                    ]
                },
                "minLength": 0,
                "maxLength": 1
            },
            "SelfManagedEventSource": {
                "description": "Self-managed event source endpoints.",
                "$ref": "#/definitions/SelfManagedEventSource"
            },
            "AmazonManagedKafkaEventSourceConfig": {
                "description": "Specific configuration settings for an MSK event source.",
                "$ref": "#/definitions/AmazonManagedKafkaEventSourceConfig"
            },
            "SelfManagedKafkaEventSourceConfig": {
                "description": "Specific configuration settings for a Self-Managed Apache Kafka event source.",
                "$ref": "#/definitions/SelfManagedKafkaEventSourceConfig"
            },
            "ScalingConfig": {
                "description": "The scaling configuration for the event source.",
                "$ref": "#/definitions/ScalingConfig"
            }
        }
    },
    "AWS::MediaPackage::Channel": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) assigned to the Channel.",
                "type": "string"
            },
            "Id": {
                "description": "The ID of the Channel.",
                "type": "string",
                "pattern": "\\A[0-9a-zA-Z-_]+\\Z",
                "minLength": 1,
                "maxLength": 256
            },
            "Description": {
                "description": "A short text description of the Channel.",
                "type": "string"
            },
            "HlsIngest": {
                "description": "An HTTP Live Streaming (HLS) ingest resource configuration.",
                "$ref": "#/definitions/HlsIngest"
            },
            "Tags": {
                "description": "A collection of tags associated with a resource",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "EgressAccessLogs": {
                "description": "The configuration parameters for egress access logging.",
                "$ref": "#/definitions/LogConfiguration"
            },
            "IngressAccessLogs": {
                "description": "The configuration parameters for egress access logging.",
                "$ref": "#/definitions/LogConfiguration"
            }
        }
    },
    "AWS::MediaPackage::OriginEndpoint": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) assigned to the OriginEndpoint.",
                "type": "string"
            },
            "Url": {
                "description": "The URL of the packaged OriginEndpoint for consumption.",
                "type": "string"
            },
            "Id": {
                "description": "The ID of the OriginEndpoint.",
                "type": "string",
                "pattern": "\\A[0-9a-zA-Z-_]+\\Z",
                "minLength": 1,
                "maxLength": 256
            },
            "ChannelId": {
                "description": "The ID of the Channel the OriginEndpoint is associated with.",
                "type": "string"
            },
            "Description": {
                "description": "A short text description of the OriginEndpoint.",
                "type": "string"
            },
            "Whitelist": {
                "description": "A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "StartoverWindowSeconds": {
                "description": "Maximum duration (seconds) of content to retain for startover playback. If not specified, startover playback will be disabled for the OriginEndpoint.",
                "type": "integer"
            },
            "TimeDelaySeconds": {
                "description": "Amount of delay (seconds) to enforce on the playback of live content. If not specified, there will be no time delay in effect for the OriginEndpoint.",
                "type": "integer"
            },
            "ManifestName": {
                "description": "A short string appended to the end of the OriginEndpoint URL.",
                "type": "string"
            },
            "Origination": {
                "description": "Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination",
                "type": "string",
                "enum": [
                    "ALLOW",
                    "DENY"
                ]
            },
            "Authorization": {
                "$ref": "#/definitions/Authorization"
            },
            "HlsPackage": {
                "$ref": "#/definitions/HlsPackage"
            },
            "DashPackage": {
                "$ref": "#/definitions/DashPackage"
            },
            "MssPackage": {
                "$ref": "#/definitions/MssPackage"
            },
            "CmafPackage": {
                "$ref": "#/definitions/CmafPackage"
            },
            "Tags": {
                "description": "A collection of tags associated with a resource",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::MediaPackage::PackagingGroup": {
        "properties": {
            "Id": {
                "description": "The ID of the PackagingGroup.",
                "type": "string",
                "pattern": "\\A[0-9a-zA-Z-_]+\\Z",
                "minLength": 1,
                "maxLength": 256
            },
            "Arn": {
                "description": "The ARN of the PackagingGroup.",
                "type": "string"
            },
            "DomainName": {
                "description": "The fully qualified domain name for Assets in the PackagingGroup.",
                "type": "string"
            },
            "Authorization": {
                "description": "CDN Authorization",
                "$ref": "#/definitions/Authorization"
            },
            "Tags": {
                "description": "A collection of tags associated with a resource",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "EgressAccessLogs": {
                "description": "The configuration parameters for egress access logging.",
                "$ref": "#/definitions/LogConfiguration"
            }
        }
    },
    "AWS::OpenSearchServerless::VpcEndpoint": {
        "properties": {
            "Id": {
                "type": "string",
                "maxLength": 255,
                "minLength": 1,
                "pattern": "^vpce-[0-9a-z]*$",
                "description": "The identifier of the VPC Endpoint"
            },
            "Name": {
                "type": "string",
                "maxLength": 32,
                "minLength": 3,
                "pattern": "^[a-z][a-z0-9-]{2,31}$",
                "description": "The name of the VPC Endpoint"
            },
            "SecurityGroupIds": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "maxLength": 128,
                    "minLength": 1,
                    "pattern": "^[\\w+\\-]+$"
                },
                "maxItems": 5,
                "minItems": 1,
                "description": "The ID of one or more security groups to associate with the endpoint network interface"
            },
            "SubnetIds": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "maxLength": 32,
                    "minLength": 1,
                    "pattern": "^subnet-([0-9a-f]{8}|[0-9a-f]{17})$"
                },
                "maxItems": 6,
                "minItems": 1,
                "description": "The ID of one or more subnets in which to create an endpoint network interface"
            },
            "VpcId": {
                "type": "string",
                "maxLength": 255,
                "minLength": 1,
                "pattern": "^vpc-[0-9a-z]*$",
                "description": "The ID of the VPC in which the endpoint will be used."
            }
        }
    },
    "AWS::Organizations::Policy": {
        "properties": {
            "Name": {
                "description": "Name of the Policy",
                "type": "string",
                "pattern": "[\\s\\S]*",
                "minLength": 1,
                "maxLength": 128
            },
            "Type": {
                "description": "The type of policy to create. You can specify one of the following values: AISERVICES_OPT_OUT_POLICY, BACKUP_POLICY, SERVICE_CONTROL_POLICY, TAG_POLICY",
                "type": "string",
                "enum": [
                    "SERVICE_CONTROL_POLICY",
                    "AISERVICES_OPT_OUT_POLICY",
                    "BACKUP_POLICY",
                    "TAG_POLICY"
                ]
            },
            "Content": {
                "description": "The Policy text content",
                "type": "string",
                "pattern": "[\\s\\S]*",
                "minLength": 1,
                "maxLength": 1000000
            },
            "Description": {
                "description": "Human readable description of the policy",
                "pattern": "[\\s\\S]*",
                "type": "string",
                "maxLength": 512
            },
            "TargetIds": {
                "description": "List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to",
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "type": "string",
                    "pattern": "^(r-[0-9a-z]{4,32})|(\\d{12})|(ou-[0-9a-z]{4,32}-[a-z0-9]{8,32})$"
                }
            },
            "Tags": {
                "description": "A list of tags that you want to attach to the newly created policy. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to null.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Id": {
                "description": "Id of the Policy",
                "type": "string",
                "pattern": "^p-[0-9a-zA-Z_]{8,128}$",
                "maxLength": 130
            },
            "Arn": {
                "description": "ARN of the Policy",
                "type": "string",
                "pattern": "^arn:aws.*:organizations::[0-9]{12}:policy/o-[a-z0-9]{10}/(service_control|tag|backup|aiservices_opt_out)_policy/p-[a-z0-9]{8}"
            },
            "AwsManaged": {
                "description": "A boolean value that indicates whether the specified policy is an AWS managed policy. If true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit it.",
                "type": "boolean"
            }
        }
    },
    "AWS::Organizations::OrganizationalUnit": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of this OU.",
                "type": "string",
                "pattern": "^arn:aws.*:organizations::\\d{12}:ou/o-[a-z0-9]{10,32}/ou-[0-9a-z]{4,32}-[0-9a-z]{8,32}"
            },
            "Id": {
                "description": "The unique identifier (ID) associated with this OU.",
                "type": "string",
                "pattern": "^ou-[0-9a-z]{4,32}-[a-z0-9]{8,32}$",
                "maxLength": 68
            },
            "Name": {
                "description": "The friendly name of this OU.",
                "type": "string",
                "pattern": "[\\s\\S]*",
                "minLength": 1,
                "maxLength": 128
            },
            "ParentId": {
                "description": "The unique identifier (ID) of the parent root or OU that you want to create the new OU in.",
                "type": "string",
                "pattern": "^(r-[0-9a-z]{4,32})|(ou-[0-9a-z]{4,32}-[a-z0-9]{8,32})$",
                "maxLength": 100
            },
            "Tags": {
                "description": "A list of tags that you want to attach to the newly created OU.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::S3Outposts::Endpoint": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the endpoint.",
                "minLength": 5,
                "maxLength": 500,
                "type": "string",
                "pattern": "^arn:[^:]+:s3-outposts:[a-zA-Z0-9\\-]+:\\d{12}:outpost\\/[^:]+\\/endpoint/[a-zA-Z0-9]{19}$"
            },
            "CidrBlock": {
                "description": "The VPC CIDR committed by this endpoint.",
                "minLength": 1,
                "maxLength": 20,
                "type": "string"
            },
            "CreationTime": {
                "description": "The time the endpoint was created.",
                "$ref": "#/definitions/iso8601UTC"
            },
            "Id": {
                "description": "The ID of the endpoint.",
                "minLength": 5,
                "maxLength": 500,
                "type": "string",
                "pattern": "^[a-zA-Z0-9]{19}$"
            },
            "NetworkInterfaces": {
                "description": "The network interfaces of the endpoint.",
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/NetworkInterface"
                }
            },
            "OutpostId": {
                "description": "The id of the customer outpost on which the bucket resides.",
                "pattern": "^(op-[a-f0-9]{17}|\\d{12}|ec2)$",
                "type": "string"
            },
            "SecurityGroupId": {
                "description": "The ID of the security group to use with the endpoint.",
                "minLength": 1,
                "maxLength": 100,
                "type": "string",
                "pattern": "^sg-([0-9a-f]{8}|[0-9a-f]{17})$"
            },
            "Status": {
                "type": "string",
                "enum": [
                    "Available",
                    "Pending",
                    "Deleting"
                ]
            },
            "SubnetId": {
                "description": "The ID of the subnet in the selected VPC. The subnet must belong to the Outpost.",
                "minLength": 1,
                "maxLength": 100,
                "type": "string",
                "pattern": "^subnet-([0-9a-f]{8}|[0-9a-f]{17})$"
            },
            "AccessType": {
                "description": "The type of access for the on-premise network connectivity for the Outpost endpoint. To access endpoint from an on-premises network, you must specify the access type and provide the customer owned Ipv4 pool.",
                "type": "string",
                "enum": [
                    "CustomerOwnedIp",
                    "Private"
                ],
                "default": "Private"
            },
            "CustomerOwnedIpv4Pool": {
                "description": "The ID of the customer-owned IPv4 pool for the Endpoint. IP addresses will be allocated from this pool for the endpoint.",
                "type": "string",
                "pattern": "^ipv4pool-coip-([0-9a-f]{17})$"
            }
        }
    },
    "AWS::ServiceCatalogAppRegistry::Application": {
        "properties": {
            "Id": {
                "type": "string",
                "pattern": "[a-z0-9]{26}"
            },
            "Arn": {
                "type": "string",
                "pattern": "arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[a-z0-9]+"
            },
            "Name": {
                "type": "string",
                "description": "The name of the application. ",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "\\w+"
            },
            "Description": {
                "type": "string",
                "description": "The description of the application. ",
                "maxLength": 1024
            },
            "Tags": {
                "$ref": "#/definitions/Tags"
            }
        }
    },
    "AWS::ServiceCatalogAppRegistry::AttributeGroup": {
        "properties": {
            "Id": {
                "type": "string",
                "pattern": "[a-z0-9]{12}"
            },
            "Arn": {
                "type": "string",
                "pattern": "arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/attribute-groups/[a-z0-9]+"
            },
            "Name": {
                "type": "string",
                "description": "The name of the attribute group. ",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "\\w+"
            },
            "Description": {
                "type": "string",
                "description": "The description of the attribute group. ",
                "maxLength": 1024
            },
            "Attributes": {
                "type": "object"
            },
            "Tags": {
                "$ref": "#/definitions/Tags"
            }
        }
    },
    "AWS::WAFv2::RegexPatternSet": {
        "properties": {
            "Arn": {
                "description": "ARN of the WAF entity.",
                "type": "string"
            },
            "Description": {
                "description": "Description of the entity.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9=:#@/\\-,.][a-zA-Z0-9+=:#@/\\-,.\\s]+[a-zA-Z0-9+=:#@/\\-,.]{1,256}$"
            },
            "Name": {
                "description": "Name of the RegexPatternSet.",
                "type": "string",
                "pattern": "^[0-9A-Za-z_-]{1,128}$"
            },
            "Id": {
                "description": "Id of the RegexPatternSet",
                "type": "string",
                "pattern": "^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$"
            },
            "RegularExpressionList": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "Scope": {
                "description": "Use CLOUDFRONT for CloudFront RegexPatternSet, use REGIONAL for Application Load Balancer and API Gateway.",
                "type": "string",
                "enum": [
                    "CLOUDFRONT",
                    "REGIONAL"
                ]
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 1
            }
        }
    },
    "AWS::Amplify::App": {
        "properties": {
            "AccessToken": {
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "AppId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 20,
                "pattern": "d[a-z0-9]+"
            },
            "AppName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 255,
                "pattern": "(?s).+"
            },
            "Arn": {
                "type": "string",
                "maxLength": 1000,
                "pattern": "(?s).*"
            },
            "AutoBranchCreationConfig": {
                "$ref": "#/definitions/AutoBranchCreationConfig"
            },
            "BasicAuthConfig": {
                "$ref": "#/definitions/BasicAuthConfig"
            },
            "BuildSpec": {
                "type": "string",
                "minLength": 1,
                "maxLength": 25000,
                "pattern": "(?s).+"
            },
            "CustomHeaders": {
                "type": "string",
                "minLength": 0,
                "maxLength": 25000,
                "pattern": "(?s).*"
            },
            "CustomRules": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/CustomRule"
                }
            },
            "DefaultDomain": {
                "type": "string",
                "minLength": 0,
                "maxLength": 1000
            },
            "Description": {
                "type": "string",
                "maxLength": 1000,
                "pattern": "(?s).*"
            },
            "EnableBranchAutoDeletion": {
                "type": "boolean"
            },
            "EnvironmentVariables": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/EnvironmentVariable"
                }
            },
            "IAMServiceRole": {
                "type": "string",
                "minLength": 1,
                "maxLength": 1000,
                "pattern": "(?s).*"
            },
            "Name": {
                "type": "string",
                "minLength": 1,
                "maxLength": 255,
                "pattern": "(?s).+"
            },
            "OauthToken": {
                "type": "string",
                "maxLength": 1000,
                "pattern": "(?s).*"
            },
            "Platform": {
                "type": "string",
                "enum": [
                    "WEB",
                    "WEB_DYNAMIC",
                    "WEB_COMPUTE"
                ]
            },
            "Repository": {
                "type": "string",
                "pattern": "(?s).*"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::AppIntegrations::EventIntegration": {
        "properties": {
            "Description": {
                "description": "The event integration description.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1000
            },
            "EventIntegrationArn": {
                "description": "The Amazon Resource Name (ARN) of the event integration.",
                "type": "string",
                "pattern": "^arn:aws[-a-z]*:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$",
                "minLength": 1,
                "maxLength": 2048
            },
            "Name": {
                "description": "The name of the event integration.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9/\\._\\-]+$",
                "minLength": 1,
                "maxLength": 255
            },
            "EventBridgeBus": {
                "description": "The Amazon Eventbridge bus for the event integration.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9/\\._\\-]+$",
                "minLength": 1,
                "maxLength": 255
            },
            "EventFilter": {
                "description": "The EventFilter (source) associated with the event integration.",
                "$ref": "#/definitions/EventFilter"
            },
            "Tags": {
                "description": "The tags (keys and values) associated with the event integration.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 0,
                "maxItems": 200
            },
            "Associations": {
                "description": "The associations with the event integration.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/EventIntegrationAssociation"
                },
                "minItems": 0
            }
        }
    },
    "AWS::Athena::WorkGroup": {
        "properties": {
            "Name": {
                "description": "The workGroup name.",
                "pattern": "[a-zA-Z0-9._-]{1,128}",
                "type": "string"
            },
            "Description": {
                "description": "The workgroup description.",
                "type": "string",
                "minLength": 0,
                "maxLength": 1024
            },
            "Tags": {
                "description": "One or more tags, separated by commas, that you want to attach to the workgroup as you create it",
                "$ref": "#/definitions/Tags"
            },
            "WorkGroupConfiguration": {
                "description": "The workgroup configuration",
                "$ref": "#/definitions/WorkGroupConfiguration"
            },
            "WorkGroupConfigurationUpdates": {
                "description": "The workgroup configuration update object",
                "$ref": "#/definitions/WorkGroupConfigurationUpdates"
            },
            "CreationTime": {
                "description": "The date and time the workgroup was created.",
                "type": "string"
            },
            "State": {
                "description": "The state of the workgroup: ENABLED or DISABLED.",
                "type": "string",
                "enum": [
                    "ENABLED",
                    "DISABLED"
                ]
            },
            "RecursiveDeleteOption": {
                "description": "The option to delete the workgroup and its contents even if the workgroup contains any named queries.",
                "type": "boolean"
            }
        }
    },
    "AWS::BillingConductor::CustomLineItem": {
        "properties": {
            "Name": {
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z0-9_\\+=\\.\\-@]+"
            },
            "Description": {
                "type": "string",
                "maxLength": 255
            },
            "CustomLineItemChargeDetails": {
                "$ref": "#/definitions/CustomLineItemChargeDetails"
            },
            "BillingGroupArn": {
                "description": "Billing Group ARN",
                "type": "string",
                "pattern": "arn:aws(-cn)?:billingconductor::[0-9]{12}:billinggroup/?[0-9]{12}"
            },
            "BillingPeriodRange": {
                "$ref": "#/definitions/BillingPeriodRange"
            },
            "Arn": {
                "description": "ARN",
                "type": "string",
                "pattern": "(arn:aws(-cn)?:billingconductor::[0-9]{12}:customlineitem/)?[a-zA-Z0-9]{10}"
            },
            "CreationTime": {
                "description": "Creation timestamp in UNIX epoch time format",
                "type": "integer"
            },
            "LastModifiedTime": {
                "description": "Latest modified timestamp in UNIX epoch time format",
                "type": "integer"
            },
            "AssociationSize": {
                "description": "Number of source values associated to this custom line item",
                "type": "integer"
            },
            "ProductCode": {
                "type": "string",
                "minLength": 1,
                "maxLength": 29
            },
            "CurrencyCode": {
                "type": "string",
                "enum": [
                    "USD",
                    "CNY"
                ]
            },
            "Tags": {
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Batch::SchedulingPolicy": {
        "properties": {
            "Name": {
                "description": "Name of Scheduling Policy.",
                "type": "string",
                "pattern": "",
                "m_pattern": "^[a-zA-Z0-9_-]{1,128}$",
                "m_alt_english": "Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed"
            },
            "Arn": {
                "$ref": "#/definitions/ResourceArn"
            },
            "FairsharePolicy": {
                "$ref": "#/definitions/FairsharePolicy"
            },
            "Tags": {
                "type": "object",
                "description": "A key-value pair to associate with a resource.",
                "patternProperties": {
                    ".*": {
                        "type": "string"
                    }
                },
                "additionalProperties": false
            }
        }
    },
    "AWS::BillingConductor::BillingGroup": {
        "properties": {
            "Arn": {
                "description": "Billing Group ARN",
                "type": "string",
                "pattern": "arn:aws(-cn)?:billingconductor::[0-9]{12}:billinggroup/?[0-9]{12}"
            },
            "Name": {
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z0-9_\\+=\\.\\-@]+"
            },
            "Description": {
                "type": "string",
                "maxLength": 1024
            },
            "PrimaryAccountId": {
                "description": "This account will act as a virtual payer account of the billing group",
                "type": "string",
                "pattern": "[0-9]{12}"
            },
            "ComputationPreference": {
                "$ref": "#/definitions/ComputationPreference"
            },
            "AccountGrouping": {
                "$ref": "#/definitions/AccountGrouping"
            },
            "Size": {
                "description": "Number of accounts in the billing group",
                "type": "integer"
            },
            "Status": {
                "$ref": "#/definitions/BillingGroupStatus"
            },
            "StatusReason": {
                "type": "string"
            },
            "CreationTime": {
                "description": "Creation timestamp in UNIX epoch time format",
                "type": "integer"
            },
            "LastModifiedTime": {
                "description": "Latest modified timestamp in UNIX epoch time format",
                "type": "integer"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::BillingConductor::PricingPlan": {
        "properties": {
            "Arn": {
                "description": "Pricing Plan ARN",
                "type": "string",
                "pattern": "arn:aws(-cn)?:billingconductor::[0-9]{12}:pricingplan/[a-zA-Z0-9]{10}"
            },
            "Name": {
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z0-9_\\+=\\.\\-@]+"
            },
            "PricingRuleArns": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/PricingRuleArn"
                }
            },
            "Size": {
                "type": "integer",
                "description": "Number of associated pricing rules"
            },
            "Description": {
                "type": "string",
                "maxLength": 1024
            },
            "CreationTime": {
                "description": "Creation timestamp in UNIX epoch time format",
                "type": "integer"
            },
            "LastModifiedTime": {
                "description": "Latest modified timestamp in UNIX epoch time format",
                "type": "integer"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::BillingConductor::PricingRule": {
        "properties": {
            "Arn": {
                "description": "Pricing rule ARN",
                "type": "string",
                "pattern": "arn:aws(-cn)?:billingconductor::[0-9]{12}:pricingrule/[a-zA-Z0-9]{10}"
            },
            "Name": {
                "description": "Pricing rule name",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z0-9_\\+=\\.\\-@]+"
            },
            "Description": {
                "description": "Pricing rule description",
                "type": "string",
                "maxLength": 1024
            },
            "Scope": {
                "description": "A term used to categorize the granularity of a Pricing Rule.",
                "type": "string",
                "enum": [
                    "GLOBAL",
                    "SERVICE",
                    "BILLING_ENTITY",
                    "SKU"
                ]
            },
            "Type": {
                "description": "One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule.",
                "type": "string",
                "enum": [
                    "MARKUP",
                    "DISCOUNT",
                    "TIERING"
                ]
            },
            "ModifierPercentage": {
                "description": "Pricing rule modifier percentage",
                "type": "number",
                "minimum": 0
            },
            "Service": {
                "description": "The service which a pricing rule is applied on",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z0-9\\.\\-]+"
            },
            "BillingEntity": {
                "description": "The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces. Supported billing entities are AWS, AWS Marketplace, and AISPL.",
                "type": "string",
                "enum": [
                    "AWS",
                    "AWS Marketplace",
                    "AISPL"
                ]
            },
            "Tiering": {
                "description": "The set of tiering configurations for the pricing rule.",
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "FreeTier": {
                        "$ref": "#/definitions/FreeTier"
                    }
                }
            },
            "UsageType": {
                "description": "The UsageType which a SKU pricing rule is modifying",
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "^\\S+$"
            },
            "Operation": {
                "description": "The Operation which a SKU pricing rule is modifying",
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "^\\S+$"
            },
            "AssociatedPricingPlanCount": {
                "description": "The number of pricing plans associated with pricing rule",
                "type": "integer",
                "minimum": 0
            },
            "CreationTime": {
                "description": "Creation timestamp in UNIX epoch time format",
                "type": "integer"
            },
            "LastModifiedTime": {
                "description": "Latest modified timestamp in UNIX epoch time format",
                "type": "integer"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::CodeArtifact::Domain": {
        "properties": {
            "DomainName": {
                "description": "The name of the domain.",
                "type": "string",
                "pattern": "^([a-z][a-z0-9\\-]{0,48}[a-z0-9])$",
                "minLength": 2,
                "maxLength": 50
            },
            "Name": {
                "description": "The name of the domain. This field is used for GetAtt",
                "type": "string",
                "pattern": "^([a-z][a-z0-9\\-]{0,48}[a-z0-9])$",
                "minLength": 2,
                "maxLength": 50
            },
            "Owner": {
                "description": "The 12-digit account ID of the AWS account that owns the domain. This field is used for GetAtt",
                "pattern": "[0-9]{12}",
                "type": "string"
            },
            "EncryptionKey": {
                "description": "The ARN of an AWS Key Management Service (AWS KMS) key associated with a domain.",
                "type": "string"
            },
            "PermissionsPolicyDocument": {
                "description": "The access control resource policy on the provided domain.",
                "type": "object",
                "minLength": 2,
                "maxLength": 5120
            },
            "Tags": {
                "type": "array",
                "description": "An array of key-value pairs to apply to this resource.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Arn": {
                "description": "The ARN of the domain.",
                "type": "string",
                "minLength": 1,
                "maxLength": 2048
            }
        }
    },
    "AWS::CodeArtifact::Repository": {
        "properties": {
            "RepositoryName": {
                "description": "The name of the repository.",
                "type": "string",
                "pattern": "^([A-Za-z0-9][A-Za-z0-9._\\-]{1,99})$",
                "minLength": 2,
                "maxLength": 100
            },
            "Name": {
                "description": "The name of the repository. This is used for GetAtt",
                "type": "string",
                "pattern": "^([A-Za-z0-9][A-Za-z0-9._\\-]{1,99})$",
                "minLength": 2,
                "maxLength": 100
            },
            "DomainName": {
                "description": "The name of the domain that contains the repository.",
                "type": "string",
                "pattern": "^([a-z][a-z0-9\\-]{0,48}[a-z0-9])$",
                "minLength": 2,
                "maxLength": 50
            },
            "DomainOwner": {
                "description": "The 12-digit account ID of the AWS account that owns the domain.",
                "pattern": "[0-9]{12}",
                "type": "string"
            },
            "Description": {
                "description": "A text description of the repository.",
                "type": "string",
                "maxLength": 1000
            },
            "Arn": {
                "description": "The ARN of the repository.",
                "type": "string",
                "minLength": 1,
                "maxLength": 2048
            },
            "ExternalConnections": {
                "description": "A list of external connections associated with the repository.",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "Upstreams": {
                "description": "A list of upstream repositories associated with the repository.",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "PermissionsPolicyDocument": {
                "description": "The access control resource policy on the provided repository.",
                "type": "object",
                "minLength": 2,
                "maxLength": 5120
            },
            "Tags": {
                "type": "array",
                "description": "An array of key-value pairs to apply to this resource.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::CodeGuruReviewer::RepositoryAssociation": {
        "properties": {
            "Name": {
                "description": "Name of the repository to be associated.",
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^\\S[\\w.-]*$"
            },
            "Type": {
                "description": "The type of repository to be associated.",
                "type": "string",
                "enum": [
                    "CodeCommit",
                    "Bitbucket",
                    "GitHubEnterpriseServer",
                    "S3Bucket"
                ]
            },
            "Owner": {
                "description": "The owner of the repository. For a Bitbucket repository, this is the username for the account that owns the repository.",
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^\\S(.*\\S)?$"
            },
            "BucketName": {
                "description": "The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`.",
                "type": "string",
                "minLength": 3,
                "maxLength": 63,
                "pattern": "^\\S(.*\\S)?$"
            },
            "ConnectionArn": {
                "description": "The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.",
                "type": "string",
                "minLength": 0,
                "maxLength": 256,
                "pattern": "arn:aws(-[\\w]+)*:.+:.+:[0-9]{12}:.+"
            },
            "AssociationArn": {
                "description": "The Amazon Resource Name (ARN) of the repository association.",
                "type": "string",
                "minLength": 0,
                "maxLength": 256,
                "pattern": "arn:aws(-[\\w]+)*:.+:.+:[0-9]{12}:.+"
            },
            "Tags": {
                "description": "The tags associated with a repository association.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 50,
                "uniqueItems": false
            }
        }
    },
    "AWS::CodeStarNotifications::NotificationRule": {
        "properties": {
            "EventTypeId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 2048
            },
            "CreatedBy": {
                "type": "string",
                "minLength": 1,
                "maxLength": 2048
            },
            "TargetAddress": {
                "type": "string",
                "minLength": 1,
                "maxLength": 2048
            },
            "EventTypeIds": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 200
                }
            },
            "Status": {
                "type": "string",
                "enum": [
                    "ENABLED",
                    "DISABLED"
                ]
            },
            "DetailType": {
                "type": "string",
                "enum": [
                    "BASIC",
                    "FULL"
                ]
            },
            "Resource": {
                "type": "string",
                "pattern": "^arn:aws[^:\\s]*:[^:\\s]*:[^:\\s]*:[0-9]{12}:[^\\s]+$"
            },
            "Targets": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/Target"
                },
                "maxItems": 10
            },
            "Tags": {
                "type": "object"
            },
            "Name": {
                "type": "string",
                "pattern": "[A-Za-z0-9\\-_ ]+$",
                "minLength": 1,
                "maxLength": 64
            },
            "Arn": {
                "type": "string",
                "pattern": "^arn:aws[^:\\s]*:codestar-notifications:[^:\\s]+:\\d{12}:notificationrule\\/(.*\\S)?$"
            }
        }
    },
    "AWS::Connect::ContactFlowModule": {
        "properties": {
            "InstanceArn": {
                "description": "The identifier of the Amazon Connect instance (ARN).",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$",
                "minLength": 1,
                "maxLength": 256
            },
            "ContactFlowModuleArn": {
                "description": "The identifier of the contact flow module (ARN).",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*/flow-module/[-a-zA-Z0-9]*$",
                "minLength": 1,
                "maxLength": 256
            },
            "Name": {
                "description": "The name of the contact flow module.",
                "type": "string",
                "minLength": 1,
                "maxLength": 127,
                "pattern": ".*\\S.*"
            },
            "Content": {
                "description": "The content of the contact flow module in JSON format.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256000
            },
            "Description": {
                "description": "The description of the contact flow module.",
                "type": "string",
                "maxLength": 500,
                "pattern": ".*\\S.*"
            },
            "State": {
                "type": "string",
                "description": "The state of the contact flow module.",
                "enum": [
                    "ACTIVE",
                    "ARCHIVED"
                ]
            },
            "Status": {
                "type": "string",
                "description": "The status of the contact flow module.",
                "enum": [
                    "PUBLISHED",
                    "SAVED"
                ]
            },
            "Tags": {
                "description": "One or more tags.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Connect::Rule": {
        "properties": {
            "Name": {
                "description": "The name of the rule.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9._-]{1,200}$"
            },
            "RuleArn": {
                "description": "The Amazon Resource Name (ARN) of the rule.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*/rule/[-a-zA-Z0-9]*$"
            },
            "InstanceArn": {
                "description": "The Amazon Resource Name (ARN) of the instance.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$"
            },
            "TriggerEventSource": {
                "description": "The event source that triggers the rule.",
                "$ref": "#/definitions/RuleTriggerEventSource"
            },
            "Function": {
                "description": "The conditions of a rule.",
                "type": "string"
            },
            "Actions": {
                "description": "The list of actions that will be executed when a rule is triggered.",
                "$ref": "#/definitions/Actions"
            },
            "PublishStatus": {
                "description": "The publish status of a rule, either draft or published.",
                "type": "string",
                "enum": [
                    "DRAFT",
                    "PUBLISHED"
                ]
            },
            "Tags": {
                "description": "One or more tags.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::DataSync::Task": {
        "properties": {
            "Excludes": {
                "type": "array",
                "minItems": 0,
                "maxItems": 1,
                "items": {
                    "$ref": "#/definitions/FilterRule"
                },
                "insertionOrder": false
            },
            "Includes": {
                "type": "array",
                "minItems": 0,
                "maxItems": 1,
                "items": {
                    "$ref": "#/definitions/FilterRule"
                },
                "insertionOrder": false
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "CloudWatchLogGroupArn": {
                "description": "The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.",
                "type": "string",
                "maxLength": 562,
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):logs:[a-z\\-0-9]*:[0-9]{12}:log-group:([^:\\*]*)(:\\*)?$"
            },
            "DestinationLocationArn": {
                "description": "The ARN of an AWS storage resource's location.",
                "type": "string",
                "maxLength": 128,
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$"
            },
            "Name": {
                "description": "The name of a task. This value is a text reference that is used to identify the task in the console.",
                "type": "string",
                "maxLength": 256,
                "minLength": 1,
                "pattern": "^[a-zA-Z0-9\\s+=._:@/-]+$"
            },
            "Options": {
                "$ref": "#/definitions/Options"
            },
            "Schedule": {
                "$ref": "#/definitions/TaskSchedule"
            },
            "SourceLocationArn": {
                "description": "The ARN of the source location for the task.",
                "type": "string",
                "maxLength": 128,
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$"
            },
            "TaskArn": {
                "description": "The ARN of the task.",
                "type": "string",
                "maxLength": 128,
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]*:[0-9]{12}:task/task-[0-9a-f]{17}$"
            },
            "Status": {
                "description": "The status of the task that was described.",
                "type": "string",
                "enum": [
                    "AVAILABLE",
                    "CREATING",
                    "QUEUED",
                    "RUNNING",
                    "UNAVAILABLE"
                ]
            },
            "SourceNetworkInterfaceArns": {
                "$ref": "#/definitions/SourceNetworkInterfaceArns"
            },
            "DestinationNetworkInterfaceArns": {
                "$ref": "#/definitions/DestinationNetworkInterfaceArns"
            }
        }
    },
    "AWS::EKS::Cluster": {
        "properties": {
            "EncryptionConfig": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/EncryptionConfig",
                    "maxItems": 1
                }
            },
            "KubernetesNetworkConfig": {
                "$ref": "#/definitions/KubernetesNetworkConfig"
            },
            "Logging": {
                "$ref": "#/definitions/Logging"
            },
            "Name": {
                "description": "The unique name to give to your cluster.",
                "type": "string",
                "pattern": "^[0-9A-Za-z][A-Za-z0-9\\-_]*",
                "minLength": 1,
                "maxLength": 100
            },
            "Id": {
                "description": "The unique ID given to your cluster.",
                "type": "string"
            },
            "ResourcesVpcConfig": {
                "$ref": "#/definitions/ResourcesVpcConfig"
            },
            "OutpostConfig": {
                "$ref": "#/definitions/OutpostConfig"
            },
            "RoleArn": {
                "description": "The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.",
                "type": "string"
            },
            "Version": {
                "description": "The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used.",
                "type": "string",
                "pattern": "1\\.\\d\\d"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Arn": {
                "description": "The ARN of the cluster, such as arn:aws:eks:us-west-2:666666666666:cluster/prod.",
                "type": "string"
            },
            "Endpoint": {
                "description": "The endpoint for your Kubernetes API server, such as https://5E1D0CEXAMPLEA591B746AFC5AB30262.yl4.us-west-2.eks.amazonaws.com.",
                "type": "string"
            },
            "CertificateAuthorityData": {
                "description": "The certificate-authority-data for your cluster.",
                "type": "string"
            },
            "ClusterSecurityGroupId": {
                "description": "The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control plane to data plane communication.",
                "type": "string"
            },
            "EncryptionConfigKeyArn": {
                "description": "Amazon Resource Name (ARN) or alias of the customer master key (CMK).",
                "type": "string"
            },
            "OpenIdConnectIssuerUrl": {
                "description": "The issuer URL for the cluster's OIDC identity provider, such as https://oidc.eks.us-west-2.amazonaws.com/id/EXAMPLED539D4633E53DE1B716D3041E. If you need to remove https:// from this output value, you can include the following code in your template.",
                "type": "string"
            }
        }
    },
    "AWS::EMR::Studio": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the EMR Studio.",
                "$ref": "#/definitions/Arn"
            },
            "AuthMode": {
                "type": "string",
                "description": "Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. Amazon EMR Studio currently only supports SSO authentication.",
                "enum": [
                    "SSO",
                    "IAM"
                ]
            },
            "DefaultS3Location": {
                "description": "The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. A Studio user can select an alternative Amazon S3 location when creating a Workspace.",
                "type": "string",
                "minLength": 6,
                "maxLength": 10280,
                "pattern": "^s3://.*"
            },
            "Description": {
                "description": "A detailed description of the Studio.",
                "type": "string",
                "minLength": 0,
                "maxLength": 256
            },
            "EngineSecurityGroupId": {
                "description": "The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.",
                "type": "string",
                "minLength": 4,
                "maxLength": 256,
                "pattern": "^sg-[a-zA-Z0-9\\-._]+$"
            },
            "Name": {
                "description": "A descriptive name for the Amazon EMR Studio.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "[a-zA-Z0-9_-]+"
            },
            "ServiceRole": {
                "description": "The IAM role that will be assumed by the Amazon EMR Studio. The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.",
                "$ref": "#/definitions/Arn"
            },
            "StudioId": {
                "description": "The ID of the EMR Studio.",
                "type": "string",
                "pattern": "^es-[0-9A-Z]+",
                "minLength": 4,
                "maxLength": 256
            },
            "SubnetIds": {
                "description": "A list of up to 5 subnet IDs to associate with the Studio. The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.",
                "type": "array",
                "minItems": 1,
                "items": {
                    "$ref": "#/definitions/SubnetId"
                }
            },
            "Tags": {
                "description": "A list of tags to associate with the Studio. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.",
                "$ref": "#/definitions/Tags"
            },
            "Url": {
                "description": "The unique Studio access URL.",
                "type": "string",
                "pattern": "^https://[0-9a-zA-Z]([-.\\w]*[0-9a-zA-Z])(:[0-9]*)*([?/#].*)?$",
                "maxLength": 4096
            },
            "UserRole": {
                "description": "The IAM user role that will be assumed by users and groups logged in to a Studio. The permissions attached to this IAM role can be scoped down for each user or group using session policies.",
                "$ref": "#/definitions/Arn"
            },
            "VpcId": {
                "description": "The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.",
                "type": "string",
                "pattern": "^(vpc-[0-9a-f]{8}|vpc-[0-9a-f]{17})$"
            },
            "WorkspaceSecurityGroupId": {
                "description": "The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.",
                "type": "string",
                "pattern": "^sg-[a-zA-Z0-9\\-._]+$"
            },
            "IdpAuthUrl": {
                "description": "Your identity provider's authentication endpoint. Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.",
                "type": "string",
                "pattern": "^https://[0-9a-zA-Z]([-.\\w]*[0-9a-zA-Z])(:[0-9]*)*([?/#].*)?$",
                "maxLength": 4096
            },
            "IdpRelayStateParameterName": {
                "description": "The name of relay state parameter for external Identity Provider.",
                "type": "string",
                "minLength": 0,
                "maxLength": 256
            }
        }
    },
    "AWS::EMRServerless::Application": {
        "properties": {
            "Architecture": {
                "$ref": "#/definitions/Architecture"
            },
            "Name": {
                "description": "User friendly Application name.",
                "type": "string",
                "minLength": 1,
                "maxLength": 64,
                "pattern": "^[A-Za-z0-9._\\/#-]+$"
            },
            "ReleaseLabel": {
                "description": "EMR release label.",
                "type": "string",
                "minLength": 1,
                "maxLength": 64,
                "pattern": "^[A-Za-z0-9._/-]+$"
            },
            "Type": {
                "description": "The type of the application",
                "type": "string"
            },
            "InitialCapacity": {
                "description": "Initial capacity initialized when an Application is started.",
                "$ref": "#/definitions/InitialCapacityConfigMap"
            },
            "MaximumCapacity": {
                "description": "Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit.",
                "$ref": "#/definitions/MaximumAllowedResources"
            },
            "Tags": {
                "description": "Tag map with key and value",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "AutoStartConfiguration": {
                "description": "Configuration for Auto Start of Application.",
                "$ref": "#/definitions/AutoStartConfiguration"
            },
            "AutoStopConfiguration": {
                "description": "Configuration for Auto Stop of Application.",
                "$ref": "#/definitions/AutoStopConfiguration"
            },
            "ImageConfiguration": {
                "$ref": "#/definitions/ImageConfigurationInput"
            },
            "NetworkConfiguration": {
                "description": "Network Configuration for customer VPC connectivity.",
                "$ref": "#/definitions/NetworkConfiguration"
            },
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the EMR Serverless Application.",
                "type": "string"
            },
            "ApplicationId": {
                "description": "The ID of the EMR Serverless Application.",
                "type": "string",
                "minLength": 1,
                "maxLength": 64
            },
            "WorkerTypeSpecifications": {
                "$ref": "#/definitions/WorkerTypeSpecificationInputMap"
            }
        }
    },
    "AWS::EMRContainers::VirtualCluster": {
        "properties": {
            "Arn": {
                "type": "string"
            },
            "ContainerProvider": {
                "description": "Container provider of the virtual cluster.",
                "$ref": "#/definitions/ContainerProvider"
            },
            "Id": {
                "description": "Id of the virtual cluster.",
                "type": "string",
                "minLength": 1,
                "maxLength": 64
            },
            "Name": {
                "description": "Name of the virtual cluster.",
                "type": "string",
                "minLength": 1,
                "maxLength": 64,
                "pattern": "[\\.\\-_/#A-Za-z0-9]+"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this virtual cluster.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Events::Endpoint": {
        "properties": {
            "Name": {
                "type": "string",
                "minLength": 1,
                "maxLength": 64,
                "pattern": "^[\\.\\-_A-Za-z0-9]+$"
            },
            "Arn": {
                "type": "string",
                "minLength": 1,
                "maxLength": 1600,
                "pattern": "^arn:aws([a-z]|\\-)*:events:([a-z]|\\d|\\-)*:([0-9]{12})?:endpoint\\/[/\\.\\-_A-Za-z0-9]+$"
            },
            "RoleArn": {
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "^arn:aws[a-z-]*:iam::\\d{12}:role\\/[\\w+=,.@/-]+$"
            },
            "Description": {
                "type": "string",
                "maxLength": 512,
                "pattern": ".*"
            },
            "RoutingConfig": {
                "$ref": "#/definitions/RoutingConfig"
            },
            "ReplicationConfig": {
                "$ref": "#/definitions/ReplicationConfig"
            },
            "EventBuses": {
                "$ref": "#/definitions/EventBuses"
            },
            "EndpointId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 50,
                "pattern": "^[A-Za-z0-9\\-]+[\\.][A-Za-z0-9\\-]+$"
            },
            "EndpointUrl": {
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "^(https://)?[\\.\\-a-z0-9]+$"
            },
            "State": {
                "type": "string",
                "enum": [
                    "ACTIVE",
                    "CREATING",
                    "UPDATING",
                    "DELETING",
                    "CREATE_FAILED",
                    "UPDATE_FAILED"
                ]
            },
            "StateReason": {
                "type": "string",
                "minLength": 1,
                "maxLength": 512,
                "pattern": "^.*$"
            }
        }
    },
    "AWS::Evidently::Experiment": {
        "properties": {
            "Arn": {
                "type": "string",
                "pattern": "arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]*/experiment/[-a-zA-Z0-9._]*"
            },
            "Name": {
                "type": "string",
                "pattern": "[-a-zA-Z0-9._]*",
                "minLength": 1,
                "maxLength": 127
            },
            "Project": {
                "type": "string",
                "pattern": "([-a-zA-Z0-9._]*)|(arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]*)",
                "minLength": 0,
                "maxLength": 2048
            },
            "Description": {
                "type": "string",
                "minLength": 0,
                "maxLength": 160
            },
            "RunningStatus": {
                "description": "Start Experiment. Default is False",
                "$ref": "#/definitions/RunningStatusObject"
            },
            "RandomizationSalt": {
                "type": "string",
                "minLength": 0,
                "maxLength": 127,
                "pattern": ".*"
            },
            "Treatments": {
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": true,
                "items": {
                    "$ref": "#/definitions/TreatmentObject"
                },
                "minItems": 2,
                "maxItems": 5
            },
            "MetricGoals": {
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": true,
                "items": {
                    "$ref": "#/definitions/MetricGoalObject"
                },
                "minItems": 1,
                "maxItems": 3
            },
            "SamplingRate": {
                "type": "integer",
                "minimum": 0,
                "maximum": 100000
            },
            "OnlineAbConfig": {
                "$ref": "#/definitions/OnlineAbConfigObject"
            },
            "Segment": {
                "type": "string",
                "minLength": 0,
                "maxLength": 2048,
                "pattern": "([-a-zA-Z0-9._]*)|(arn:[^:]*:[^:]*:[^:]*:[^:]*:segment/[-a-zA-Z0-9._]*)"
            },
            "RemoveSegment": {
                "type": "boolean"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Evidently::Feature": {
        "properties": {
            "Arn": {
                "type": "string",
                "pattern": "arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]*/feature/[-a-zA-Z0-9._]*",
                "minLength": 0,
                "maxLength": 2048
            },
            "Project": {
                "type": "string",
                "pattern": "([-a-zA-Z0-9._]*)|(arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]*)",
                "minLength": 0,
                "maxLength": 2048
            },
            "Name": {
                "type": "string",
                "pattern": "[-a-zA-Z0-9._]*",
                "minLength": 1,
                "maxLength": 127
            },
            "Description": {
                "type": "string",
                "minLength": 0,
                "maxLength": 160
            },
            "EvaluationStrategy": {
                "type": "string",
                "enum": [
                    "ALL_RULES",
                    "DEFAULT_VARIATION"
                ]
            },
            "Variations": {
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": true,
                "items": {
                    "$ref": "#/definitions/VariationObject"
                },
                "minItems": 1,
                "maxItems": 5
            },
            "DefaultVariation": {
                "type": "string",
                "pattern": "[-a-zA-Z0-9._]*",
                "minLength": 1,
                "maxLength": 127
            },
            "EntityOverrides": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/EntityOverride"
                },
                "insertionOrder": false,
                "uniqueItems": true,
                "minItems": 0,
                "maxItems": 20
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Evidently::Project": {
        "properties": {
            "Arn": {
                "type": "string",
                "pattern": "arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]*",
                "minLength": 0,
                "maxLength": 2048
            },
            "Name": {
                "type": "string",
                "pattern": "[-a-zA-Z0-9._]*",
                "minLength": 1,
                "maxLength": 127
            },
            "Description": {
                "type": "string",
                "minLength": 0,
                "maxLength": 160
            },
            "DataDelivery": {
                "$ref": "#/definitions/DataDeliveryObject"
            },
            "AppConfigResource": {
                "$ref": "#/definitions/AppConfigResourceObject"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Evidently::Launch": {
        "properties": {
            "Arn": {
                "type": "string",
                "pattern": "arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]*/launch/[-a-zA-Z0-9._]*"
            },
            "Name": {
                "type": "string",
                "pattern": "[-a-zA-Z0-9._]*",
                "minLength": 1,
                "maxLength": 127
            },
            "Project": {
                "type": "string",
                "pattern": "([-a-zA-Z0-9._]*)|(arn:[^:]*:[^:]*:[^:]*:[^:]*:project/[-a-zA-Z0-9._]*)",
                "minLength": 0,
                "maxLength": 2048
            },
            "Description": {
                "type": "string",
                "minLength": 0,
                "maxLength": 160
            },
            "RandomizationSalt": {
                "type": "string",
                "minLength": 0,
                "maxLength": 127,
                "pattern": ".*"
            },
            "ScheduledSplitsConfig": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/StepConfig"
                },
                "uniqueItems": true,
                "insertionOrder": true,
                "minItems": 1,
                "maxItems": 6
            },
            "Groups": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/LaunchGroupObject"
                },
                "uniqueItems": true,
                "insertionOrder": true,
                "minItems": 1,
                "maxItems": 5
            },
            "MetricMonitors": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/MetricDefinitionObject"
                },
                "uniqueItems": true,
                "insertionOrder": true,
                "minItems": 0,
                "maxItems": 3
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "ExecutionStatus": {
                "description": "Start or Stop Launch Launch. Default is not started.",
                "$ref": "#/definitions/ExecutionStatusObject"
            }
        }
    },
    "AWS::Evidently::Segment": {
        "properties": {
            "Arn": {
                "type": "string",
                "pattern": "arn:[^:]*:[^:]*:[^:]*:[^:]*:segment/[-a-zA-Z0-9._]*",
                "minLength": 0,
                "maxLength": 2048
            },
            "Name": {
                "type": "string",
                "pattern": "[-a-zA-Z0-9._]*",
                "minLength": 1,
                "maxLength": 127
            },
            "Description": {
                "type": "string",
                "minLength": 0,
                "maxLength": 160
            },
            "Pattern": {
                "type": "string",
                "minLength": 1,
                "maxLength": 1024
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::FinSpace::Environment": {
        "properties": {
            "EnvironmentId": {
                "description": "Unique identifier for representing FinSpace Environment",
                "type": "string",
                "pattern": "^[a-zA-Z0-9]{1,26}$"
            },
            "Name": {
                "description": "Name of the Environment",
                "type": "string",
                "pattern": "^[a-zA-Z0-9]+[a-zA-Z0-9-]*[a-zA-Z0-9]{1,255}$"
            },
            "AwsAccountId": {
                "description": "AWS account ID associated with the Environment",
                "type": "string",
                "pattern": "^[a-zA-Z0-9]{1,26}$"
            },
            "Description": {
                "description": "Description of the Environment",
                "type": "string",
                "pattern": "^[a-zA-Z0-9. ]{1,1000}$"
            },
            "Status": {
                "description": "State of the Environment",
                "type": "string",
                "enum": [
                    "CREATE_REQUESTED",
                    "CREATING",
                    "CREATED",
                    "DELETE_REQUESTED",
                    "DELETING",
                    "DELETED",
                    "FAILED_CREATION",
                    "FAILED_DELETION",
                    "RETRY_DELETION",
                    "SUSPENDED"
                ]
            },
            "EnvironmentUrl": {
                "description": "URL used to login to the Environment",
                "type": "string",
                "pattern": "^[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]{1,1000}"
            },
            "EnvironmentArn": {
                "description": "ARN of the Environment",
                "type": "string",
                "pattern": "^arn:aws:finspace:[A-Za-z0-9_/.-]{0,63}:\\d+:environment/[0-9A-Za-z_-]{1,128}$"
            },
            "SageMakerStudioDomainUrl": {
                "description": "SageMaker Studio Domain URL associated with the Environment",
                "type": "string",
                "pattern": "^[a-zA-Z-0-9-:\\/.]*{1,1000}$"
            },
            "KmsKeyId": {
                "description": "KMS key used to encrypt customer data within FinSpace Environment infrastructure",
                "type": "string",
                "pattern": "^[a-zA-Z-0-9-:\\/]*{1,1000}$"
            },
            "DedicatedServiceAccountId": {
                "description": "ID for FinSpace created account used to store Environment artifacts",
                "type": "string",
                "pattern": "^[a-zA-Z0-9]{1,26}$"
            },
            "FederationMode": {
                "description": "Federation mode used with the Environment",
                "type": "string",
                "enum": [
                    "LOCAL",
                    "FEDERATED"
                ]
            },
            "FederationParameters": {
                "$ref": "#/definitions/FederationParameters"
            },
            "SuperuserParameters": {
                "$ref": "#/definitions/SuperuserParameters"
            },
            "DataBundles": {
                "description": "ARNs of FinSpace Data Bundles to install",
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/DataBundleArn"
                }
            }
        }
    },
    "AWS::FraudDetector::EntityType": {
        "properties": {
            "Name": {
                "description": "The name of the entity type.",
                "type": "string",
                "pattern": "^[0-9a-z_-]+$",
                "minLength": 1,
                "maxLength": 64
            },
            "Tags": {
                "description": "Tags associated with this entity type.",
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "maxItems": 200,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Description": {
                "description": "The entity type description.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128
            },
            "Arn": {
                "description": "The entity type ARN.",
                "type": "string"
            },
            "CreatedTime": {
                "description": "The timestamp when the entity type was created.",
                "type": "string"
            },
            "LastUpdatedTime": {
                "description": "The timestamp when the entity type was last updated.",
                "type": "string"
            }
        }
    },
    "AWS::FraudDetector::EventType": {
        "properties": {
            "Name": {
                "description": "The name for the event type",
                "type": "string",
                "pattern": "^[0-9a-z_-]+$",
                "minLength": 1,
                "maxLength": 64
            },
            "Tags": {
                "description": "Tags associated with this event type.",
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "maxItems": 200,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Description": {
                "description": "The description of the event type.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128
            },
            "EventVariables": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 1,
                "items": {
                    "$ref": "#/definitions/EventVariable"
                }
            },
            "Labels": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 2,
                "items": {
                    "$ref": "#/definitions/Label"
                }
            },
            "EntityTypes": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 1,
                "items": {
                    "$ref": "#/definitions/EntityType"
                }
            },
            "Arn": {
                "description": "The ARN of the event type.",
                "type": "string"
            },
            "CreatedTime": {
                "description": "The time when the event type was created.",
                "type": "string"
            },
            "LastUpdatedTime": {
                "description": "The time when the event type was last updated.",
                "type": "string"
            }
        }
    },
    "AWS::FraudDetector::Label": {
        "properties": {
            "Name": {
                "description": "The name of the label.",
                "type": "string",
                "pattern": "^[0-9a-z_-]+$",
                "minLength": 1,
                "maxLength": 64
            },
            "Tags": {
                "description": "Tags associated with this label.",
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "maxItems": 200,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Description": {
                "description": "The label description.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128
            },
            "Arn": {
                "description": "The label ARN.",
                "type": "string"
            },
            "CreatedTime": {
                "description": "The timestamp when the label was created.",
                "type": "string"
            },
            "LastUpdatedTime": {
                "description": "The timestamp when the label was last updated.",
                "type": "string"
            }
        }
    },
    "AWS::FraudDetector::Outcome": {
        "properties": {
            "Name": {
                "description": "The name of the outcome.",
                "type": "string",
                "pattern": "^[0-9a-z_-]+$",
                "minLength": 1,
                "maxLength": 64
            },
            "Tags": {
                "description": "Tags associated with this outcome.",
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "maxItems": 200,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Description": {
                "description": "The outcome description.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128
            },
            "Arn": {
                "description": "The outcome ARN.",
                "type": "string"
            },
            "CreatedTime": {
                "description": "The timestamp when the outcome was created.",
                "type": "string"
            },
            "LastUpdatedTime": {
                "description": "The timestamp when the outcome was last updated.",
                "type": "string"
            }
        }
    },
    "AWS::FraudDetector::Variable": {
        "properties": {
            "Name": {
                "description": "The name of the variable.",
                "type": "string",
                "pattern": "^[a-z_][a-z0-9_]{0,99}?$"
            },
            "DataSource": {
                "description": "The source of the data.",
                "type": "string",
                "enum": [
                    "EVENT",
                    "EXTERNAL_MODEL_SCORE"
                ]
            },
            "DataType": {
                "description": "The data type.",
                "type": "string",
                "enum": [
                    "STRING",
                    "INTEGER",
                    "FLOAT",
                    "BOOLEAN"
                ]
            },
            "DefaultValue": {
                "description": "The default value for the variable when no value is received.",
                "type": "string"
            },
            "Description": {
                "description": "The description.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256
            },
            "Tags": {
                "description": "Tags associated with this variable.",
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "maxItems": 200,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "VariableType": {
                "description": "The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types",
                "type": "string",
                "enum": [
                    "AUTH_CODE",
                    "AVS",
                    "BILLING_ADDRESS_L1",
                    "BILLING_ADDRESS_L2",
                    "BILLING_CITY",
                    "BILLING_COUNTRY",
                    "BILLING_NAME",
                    "BILLING_PHONE",
                    "BILLING_STATE",
                    "BILLING_ZIP",
                    "CARD_BIN",
                    "CATEGORICAL",
                    "CURRENCY_CODE",
                    "EMAIL_ADDRESS",
                    "FINGERPRINT",
                    "FRAUD_LABEL",
                    "FREE_FORM_TEXT",
                    "IP_ADDRESS",
                    "NUMERIC",
                    "ORDER_ID",
                    "PAYMENT_TYPE",
                    "PHONE_NUMBER",
                    "PRICE",
                    "PRODUCT_CATEGORY",
                    "SHIPPING_ADDRESS_L1",
                    "SHIPPING_ADDRESS_L2",
                    "SHIPPING_CITY",
                    "SHIPPING_COUNTRY",
                    "SHIPPING_NAME",
                    "SHIPPING_PHONE",
                    "SHIPPING_STATE",
                    "SHIPPING_ZIP",
                    "USERAGENT"
                ]
            },
            "Arn": {
                "description": "The ARN of the variable.",
                "type": "string"
            },
            "CreatedTime": {
                "description": "The time when the variable was created.",
                "type": "string"
            },
            "LastUpdatedTime": {
                "description": "The time when the variable was last updated.",
                "type": "string"
            }
        }
    },
    "AWS::GameLift::Alias": {
        "properties": {
            "Description": {
                "description": "A human-readable description of the alias.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1024
            },
            "Name": {
                "description": "A descriptive label that is associated with an alias. Alias names do not need to be unique.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1024,
                "pattern": ".*\\S.*"
            },
            "RoutingStrategy": {
                "description": "A routing configuration that specifies where traffic is directed for this alias, such as to a fleet or to a message.",
                "$ref": "#/definitions/RoutingStrategy"
            },
            "AliasId": {
                "description": "Unique alias ID",
                "type": "string"
            }
        }
    },
    "AWS::GlobalAccelerator::Accelerator": {
        "properties": {
            "Name": {
                "description": "Name of accelerator.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_-]{0,64}$",
                "minLength": 1,
                "maxLength": 64
            },
            "IpAddressType": {
                "description": "IP Address type.",
                "type": "string",
                "default": "IPV4",
                "enum": [
                    "IPV4",
                    "DUAL_STACK"
                ]
            },
            "IpAddresses": {
                "description": "The IP addresses from BYOIP Prefix pool.",
                "default": null,
                "type": "array",
                "items": {
                    "$ref": "#/definitions/IpAddress"
                }
            },
            "Enabled": {
                "description": "Indicates whether an accelerator is enabled. The value is true or false.",
                "default": true,
                "type": "boolean"
            },
            "DnsName": {
                "description": "The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 addresses.",
                "type": "string"
            },
            "Ipv4Addresses": {
                "description": "The IPv4 addresses assigned to the accelerator.",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "Ipv6Addresses": {
                "description": "The IPv6 addresses assigned if the accelerator is dualstack",
                "default": null,
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "DualStackDnsName": {
                "description": "The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 and IPv6 addresses.",
                "type": "string"
            },
            "AcceleratorArn": {
                "description": "The Amazon Resource Name (ARN) of the accelerator.",
                "type": "string"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::GroundStation::Config": {
        "properties": {
            "Name": {
                "type": "string",
                "pattern": "^[ a-zA-Z0-9_:-]{1,256}$"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Type": {
                "type": "string"
            },
            "ConfigData": {
                "$ref": "#/definitions/ConfigData"
            },
            "Arn": {
                "type": "string"
            },
            "Id": {
                "type": "string"
            }
        }
    },
    "AWS::IAM::SAMLProvider": {
        "properties": {
            "Name": {
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[\\w._-]+",
                "type": "string"
            },
            "SamlMetadataDocument": {
                "minLength": 1000,
                "maxLength": 10000000,
                "type": "string"
            },
            "Arn": {
                "description": "Amazon Resource Name (ARN) of the SAML provider",
                "minLength": 1,
                "maxLength": 1600,
                "type": "string"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::GroundStation::MissionProfile": {
        "properties": {
            "Name": {
                "description": "A name used to identify a mission profile.",
                "type": "string",
                "pattern": "^[ a-zA-Z0-9_:-]{1,256}$"
            },
            "ContactPrePassDurationSeconds": {
                "description": "Pre-pass time needed before the contact.",
                "type": "integer"
            },
            "ContactPostPassDurationSeconds": {
                "description": "Post-pass time needed after the contact.",
                "type": "integer"
            },
            "MinimumViableContactDurationSeconds": {
                "description": "Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.",
                "type": "integer"
            },
            "DataflowEdges": {
                "description": "",
                "type": "array",
                "minItems": 1,
                "items": {
                    "$ref": "#/definitions/DataflowEdge"
                }
            },
            "TrackingConfigArn": {
                "type": "string"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Id": {
                "type": "string"
            },
            "Arn": {
                "type": "string"
            },
            "Region": {
                "type": "string"
            }
        }
    },
    "AWS::IoT::Dimension": {
        "properties": {
            "Name": {
                "description": "A unique identifier for the dimension.",
                "type": "string",
                "pattern": "[a-zA-Z0-9:_-]+",
                "minLength": 1,
                "maxLength": 128
            },
            "Type": {
                "description": "Specifies the type of the dimension.",
                "type": "string",
                "enum": [
                    "TOPIC_FILTER"
                ]
            },
            "StringValues": {
                "description": "Specifies the value or list of values for the dimension.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 256
                },
                "minItems": 1,
                "maxItems": 5
            },
            "Tags": {
                "description": "Metadata that can be used to manage the dimension.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Arn": {
                "description": "The ARN (Amazon resource name) of the created dimension.",
                "type": "string"
            }
        }
    },
    "AWS::IoTFleetWise::Campaign": {
        "properties": {
            "Status": {
                "$ref": "#/definitions/CampaignStatus"
            },
            "Action": {
                "$ref": "#/definitions/UpdateCampaignAction"
            },
            "CreationTime": {
                "type": "string",
                "format": "date-time"
            },
            "Compression": {
                "$ref": "#/definitions/Compression"
            },
            "Description": {
                "minLength": 1,
                "pattern": "^[^\\u0000-\\u001F\\u007F]+$",
                "type": "string",
                "maxLength": 2048
            },
            "Priority": {
                "type": "integer",
                "minimum": 0,
                "default": 0
            },
            "SignalsToCollect": {
                "minItems": 0,
                "maxItems": 1000,
                "insertionOrder": false,
                "type": "array",
                "items": {
                    "$ref": "#/definitions/SignalInformation"
                }
            },
            "StartTime": {
                "format": "date-time",
                "type": "string",
                "default": "0"
            },
            "Name": {
                "minLength": 1,
                "pattern": "^[a-zA-Z\\d\\-_:]+$",
                "type": "string",
                "maxLength": 100
            },
            "ExpiryTime": {
                "format": "date-time",
                "type": "string",
                "default": "253402214400"
            },
            "LastModificationTime": {
                "type": "string",
                "format": "date-time"
            },
            "SpoolingMode": {
                "$ref": "#/definitions/SpoolingMode"
            },
            "SignalCatalogArn": {
                "type": "string"
            },
            "PostTriggerCollectionDuration": {
                "maximum": 4294967295,
                "type": "number",
                "minimum": 0,
                "default": 0
            },
            "DataExtraDimensions": {
                "minItems": 0,
                "maxItems": 5,
                "insertionOrder": false,
                "type": "array",
                "items": {
                    "minLength": 1,
                    "pattern": "^[a-zA-Z0-9_.]+$",
                    "type": "string",
                    "maxLength": 150
                }
            },
            "DiagnosticsMode": {
                "$ref": "#/definitions/DiagnosticsMode"
            },
            "TargetArn": {
                "type": "string"
            },
            "Arn": {
                "type": "string"
            },
            "CollectionScheme": {
                "$ref": "#/definitions/CollectionScheme"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "insertionOrder": false,
                "uniqueItems": true,
                "maxItems": 50,
                "minItems": 0
            }
        }
    },
    "AWS::IoTFleetWise::DecoderManifest": {
        "properties": {
            "Arn": {
                "type": "string"
            },
            "CreationTime": {
                "type": "string",
                "format": "date-time"
            },
            "Description": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "^[^\\u0000-\\u001F\\u007F]+$"
            },
            "LastModificationTime": {
                "type": "string",
                "format": "date-time"
            },
            "ModelManifestArn": {
                "type": "string"
            },
            "Name": {
                "type": "string",
                "maxLength": 100,
                "minLength": 1,
                "pattern": "^[a-zA-Z\\d\\-_:]+$"
            },
            "NetworkInterfaces": {
                "insertionOrder": false,
                "type": "array",
                "items": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/CanNetworkInterface"
                        },
                        {
                            "$ref": "#/definitions/ObdNetworkInterface"
                        }
                    ]
                },
                "maxItems": 500,
                "minItems": 1
            },
            "SignalDecoders": {
                "insertionOrder": false,
                "type": "array",
                "items": {
                    "oneOf": [
                        {
                            "$ref": "#/definitions/CanSignalDecoder"
                        },
                        {
                            "$ref": "#/definitions/ObdSignalDecoder"
                        }
                    ]
                },
                "maxItems": 500,
                "minItems": 1
            },
            "Status": {
                "$ref": "#/definitions/ManifestStatus"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 50,
                "minItems": 0,
                "insertionOrder": false,
                "uniqueItems": true
            }
        }
    },
    "AWS::IoTFleetWise::Vehicle": {
        "properties": {
            "Arn": {
                "type": "string"
            },
            "AssociationBehavior": {
                "$ref": "#/definitions/VehicleAssociationBehavior"
            },
            "Attributes": {
                "$ref": "#/definitions/attributesMap"
            },
            "CreationTime": {
                "type": "string",
                "format": "date-time"
            },
            "DecoderManifestArn": {
                "type": "string"
            },
            "Name": {
                "type": "string",
                "maxLength": 100,
                "minLength": 1,
                "pattern": "^[a-zA-Z\\d\\-_:]+$"
            },
            "LastModificationTime": {
                "type": "string",
                "format": "date-time"
            },
            "ModelManifestArn": {
                "type": "string"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "insertionOrder": false,
                "uniqueItems": true,
                "maxItems": 50,
                "minItems": 0
            }
        }
    },
    "AWS::IoTFleetWise::ModelManifest": {
        "properties": {
            "Arn": {
                "type": "string"
            },
            "CreationTime": {
                "type": "string",
                "format": "date-time"
            },
            "Description": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "^[^\\u0000-\\u001F\\u007F]+$"
            },
            "LastModificationTime": {
                "type": "string",
                "format": "date-time"
            },
            "Name": {
                "type": "string",
                "maxLength": 100,
                "minLength": 1,
                "pattern": "^[a-zA-Z\\d\\-_:]+$"
            },
            "Nodes": {
                "insertionOrder": false,
                "uniqueItems": true,
                "minItems": 1,
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "SignalCatalogArn": {
                "type": "string"
            },
            "Status": {
                "$ref": "#/definitions/ManifestStatus"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "insertionOrder": false,
                "uniqueItems": true,
                "maxItems": 50,
                "minItems": 0
            }
        }
    },
    "AWS::IoTFleetWise::SignalCatalog": {
        "properties": {
            "Arn": {
                "type": "string"
            },
            "CreationTime": {
                "format": "date-time",
                "type": "string"
            },
            "Description": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "^[^\\u0000-\\u001F\\u007F]+$"
            },
            "LastModificationTime": {
                "format": "date-time",
                "type": "string"
            },
            "Name": {
                "type": "string",
                "maxLength": 100,
                "minLength": 1,
                "pattern": "^[a-zA-Z\\d\\-_:]+$"
            },
            "NodeCounts": {
                "$ref": "#/definitions/NodeCounts"
            },
            "Nodes": {
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Node"
                },
                "maxItems": 500,
                "minItems": 1
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "insertionOrder": false,
                "uniqueItems": true,
                "maxItems": 50,
                "minItems": 0
            }
        }
    },
    "AWS::IoTWireless::Destination": {
        "properties": {
            "Name": {
                "description": "Unique name of destination",
                "type": "string",
                "pattern": "[a-zA-Z0-9:_-]+",
                "maxLength": 128
            },
            "Expression": {
                "description": "Destination expression",
                "type": "string"
            },
            "ExpressionType": {
                "description": "Must be RuleName",
                "type": "string",
                "enum": [
                    "RuleName",
                    "MqttTopic"
                ]
            },
            "Description": {
                "description": "Destination description",
                "type": "string",
                "maxLength": 2048
            },
            "Tags": {
                "description": "A list of key-value pairs that contain metadata for the destination.",
                "type": "array",
                "uniqueItems": true,
                "maxItems": 200,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "RoleArn": {
                "description": "AWS role ARN that grants access",
                "type": "string",
                "minLength": 20,
                "maxLength": 2048
            },
            "Arn": {
                "description": "Destination arn. Returned after successful create.",
                "type": "string"
            }
        }
    },
    "AWS::IoTWireless::NetworkAnalyzerConfiguration": {
        "properties": {
            "Name": {
                "description": "Name of the network analyzer configuration",
                "type": "string",
                "pattern": "^[a-zA-Z0-9-_]+$",
                "maxLength": 1024
            },
            "Description": {
                "description": "The description of the new resource",
                "type": "string",
                "maxLength": 2048
            },
            "TraceContent": {
                "description": "Trace content for your wireless gateway and wireless device resources",
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "WirelessDeviceFrameInfo": {
                        "$ref": "#/definitions/WirelessDeviceFrameInfo"
                    },
                    "LogLevel": {
                        "$ref": "#/definitions/LogLevel"
                    }
                }
            },
            "WirelessDevices": {
                "description": "List of wireless gateway resources that have been added to the network analyzer configuration",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string"
                },
                "maxItems": 250
            },
            "WirelessGateways": {
                "description": "List of wireless gateway resources that have been added to the network analyzer configuration",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string"
                },
                "maxItems": 250
            },
            "Arn": {
                "description": "Arn for network analyzer configuration, Returned upon successful create.",
                "type": "string"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "maxItems": 200,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::IVS::Channel": {
        "properties": {
            "Arn": {
                "description": "Channel ARN is automatically generated on creation and assigned as the unique identifier.",
                "type": "string",
                "pattern": "^arn:aws:ivs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$",
                "minLength": 1,
                "maxLength": 128
            },
            "Name": {
                "description": "Channel",
                "type": "string",
                "minLength": 0,
                "maxLength": 128,
                "pattern": "^[a-zA-Z0-9-_]*$",
                "default": "-"
            },
            "Authorized": {
                "description": "Whether the channel is authorized.",
                "type": "boolean",
                "default": false
            },
            "LatencyMode": {
                "description": "Channel latency mode.",
                "type": "string",
                "enum": [
                    "NORMAL",
                    "LOW"
                ],
                "default": "LOW"
            },
            "Type": {
                "description": "Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.",
                "type": "string",
                "enum": [
                    "STANDARD",
                    "BASIC"
                ],
                "default": "STANDARD"
            },
            "Tags": {
                "description": "A list of key-value pairs that contain metadata for the asset model.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "PlaybackUrl": {
                "description": "Channel Playback URL.",
                "type": "string"
            },
            "IngestEndpoint": {
                "description": "Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software.",
                "type": "string"
            },
            "RecordingConfigurationArn": {
                "description": "Recording Configuration ARN. A value other than an empty string indicates that recording is enabled. Default: \"\" (recording is disabled).",
                "type": "string",
                "default": "",
                "pattern": "^$|arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration/[a-zA-Z0-9-]+$",
                "minLength": 0,
                "maxLength": 128
            }
        }
    },
    "AWS::IVS::RecordingConfiguration": {
        "properties": {
            "Arn": {
                "description": "Recording Configuration ARN is automatically generated on creation and assigned as the unique identifier.",
                "type": "string",
                "pattern": "^arn:aws[-a-z]*:ivs:[a-z0-9-]+:[0-9]+:recording-configuration/[a-zA-Z0-9-]+$",
                "minLength": 1,
                "maxLength": 128
            },
            "Name": {
                "description": "Recording Configuration Name.",
                "type": "string",
                "minLength": 0,
                "maxLength": 128,
                "pattern": "^[a-zA-Z0-9-_]*$"
            },
            "State": {
                "description": "Recording Configuration State.",
                "type": "string",
                "enum": [
                    "CREATING",
                    "CREATE_FAILED",
                    "ACTIVE"
                ]
            },
            "RecordingReconnectWindowSeconds": {
                "description": "Recording Reconnect Window Seconds. (0 means disabled)",
                "type": "integer",
                "default": 0,
                "minimum": 0,
                "maximum": 300
            },
            "DestinationConfiguration": {
                "$ref": "#/definitions/DestinationConfiguration"
            },
            "Tags": {
                "description": "A list of key-value pairs that contain metadata for the asset model.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "ThumbnailConfiguration": {
                "$ref": "#/definitions/ThumbnailConfiguration"
            }
        }
    },
    "AWS::IVS::PlaybackKeyPair": {
        "properties": {
            "Name": {
                "description": "An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9-_]*$",
                "minLength": 0,
                "maxLength": 128
            },
            "PublicKeyMaterial": {
                "description": "The public portion of a customer-generated key pair.",
                "type": "string"
            },
            "Fingerprint": {
                "description": "Key-pair identifier.",
                "type": "string"
            },
            "Arn": {
                "description": "Key-pair identifier.",
                "type": "string",
                "pattern": "^arn:aws:ivs:[a-z0-9-]+:[0-9]+:playback-key/[a-zA-Z0-9-]+$",
                "minLength": 1,
                "maxLength": 128
            },
            "Tags": {
                "description": "A list of key-value pairs that contain metadata for the asset model.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Kinesis::Stream": {
        "properties": {
            "StreamModeDetails": {
                "default": {
                    "StreamMode": "PROVISIONED"
                },
                "description": "The mode in which the stream is running.",
                "$ref": "#/definitions/StreamModeDetails"
            },
            "StreamEncryption": {
                "description": "When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream.",
                "$ref": "#/definitions/StreamEncryption"
            },
            "Arn": {
                "description": "The Amazon resource name (ARN) of the Kinesis stream",
                "type": "string"
            },
            "RetentionPeriodHours": {
                "description": "The number of hours for the data records that are stored in shards to remain accessible.",
                "type": "integer",
                "minimum": 24
            },
            "Tags": {
                "uniqueItems": false,
                "description": "An arbitrary set of tags (key\u2013value pairs) to associate with the Kinesis stream.",
                "insertionOrder": false,
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Name": {
                "minLength": 1,
                "pattern": "^[a-zA-Z0-9_.-]+$",
                "description": "The name of the Kinesis stream.",
                "type": "string",
                "maxLength": 128
            },
            "ShardCount": {
                "description": "The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed.",
                "type": "integer",
                "minimum": 1
            }
        }
    },
    "AWS::KinesisVideo::SignalingChannel": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the Kinesis Video Signaling Channel.",
                "type": "string"
            },
            "Name": {
                "description": "The name of the Kinesis Video Signaling Channel.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "[a-zA-Z0-9_.-]+"
            },
            "Type": {
                "description": "The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type.",
                "type": "string",
                "enum": [
                    "SINGLE_MASTER"
                ]
            },
            "MessageTtlSeconds": {
                "description": "The period of time a signaling channel retains undelivered messages before they are discarded.",
                "type": "integer",
                "minimum": 5,
                "maximum": 120
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 1,
                "maxItems": 50
            }
        }
    },
    "AWS::KinesisVideo::Stream": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the Kinesis Video stream.",
                "type": "string"
            },
            "Name": {
                "description": "The name of the Kinesis Video stream.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "[a-zA-Z0-9_.-]+"
            },
            "DataRetentionInHours": {
                "description": "The number of hours till which Kinesis Video will retain the data in the stream",
                "type": "integer",
                "minimum": 0,
                "maximum": 87600
            },
            "DeviceName": {
                "description": "The name of the device that is writing to the stream.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z0-9_.-]+"
            },
            "KmsKeyId": {
                "description": "AWS KMS key ID that Kinesis Video Streams uses to encrypt stream data.",
                "type": "string",
                "minLength": 1,
                "maxLength": 2048,
                "pattern": ".+"
            },
            "MediaType": {
                "description": "The media type of the stream. Consumers of the stream can use this information when processing the stream.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[\\w\\-\\.\\+]+/[\\w\\-\\.\\+]+(,[\\w\\-\\.\\+]+/[\\w\\-\\.\\+]+)*"
            },
            "Tags": {
                "description": "An array of key-value pairs associated with the Kinesis Video Stream.",
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 1,
                "maxItems": 50
            }
        }
    },
    "AWS::Logs::QueryDefinition": {
        "properties": {
            "Name": {
                "description": "A name for the saved query definition",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "QueryString": {
                "description": "The query string to use for this definition",
                "type": "string",
                "minLength": 1,
                "maxLength": 10000
            },
            "LogGroupNames": {
                "description": "Optionally define specific log groups as part of your query definition",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "description": "LogGroup name",
                    "$ref": "#/definitions/LogGroup"
                }
            },
            "QueryDefinitionId": {
                "description": "Unique identifier of a query definition",
                "type": "string",
                "minLength": 0,
                "maxLength": 256
            }
        }
    },
    "AWS::M2::Application": {
        "properties": {
            "ApplicationArn": {
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+=,@.-]{0,1023}$"
            },
            "ApplicationId": {
                "type": "string",
                "pattern": "^\\S{1,80}$"
            },
            "Definition": {
                "$ref": "#/definitions/Definition"
            },
            "Description": {
                "type": "string",
                "maxLength": 500,
                "minLength": 0
            },
            "EngineType": {
                "$ref": "#/definitions/EngineType"
            },
            "KmsKeyId": {
                "type": "string",
                "maxLength": 2048,
                "description": "The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting application-related resources."
            },
            "Name": {
                "type": "string",
                "pattern": "^[A-Za-z0-9][A-Za-z0-9_\\-]{1,59}$"
            },
            "Tags": {
                "$ref": "#/definitions/TagMap"
            }
        }
    },
    "AWS::M2::Environment": {
        "properties": {
            "Description": {
                "type": "string",
                "description": "The description of the environment.",
                "maxLength": 500,
                "minLength": 0
            },
            "EngineType": {
                "$ref": "#/definitions/EngineType"
            },
            "EngineVersion": {
                "type": "string",
                "description": "The version of the runtime engine for the environment.",
                "pattern": "^\\S{1,10}$"
            },
            "EnvironmentArn": {
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the runtime environment.",
                "pattern": "^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+=,@.-]{0,1023}$"
            },
            "EnvironmentId": {
                "type": "string",
                "description": "The unique identifier of the environment.",
                "pattern": "^\\S{1,80}$"
            },
            "HighAvailabilityConfig": {
                "$ref": "#/definitions/HighAvailabilityConfig"
            },
            "InstanceType": {
                "type": "string",
                "description": "The type of instance underlying the environment.",
                "pattern": "^\\S{1,20}$"
            },
            "KmsKeyId": {
                "type": "string",
                "maxLength": 2048,
                "description": "The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting environment-related resources."
            },
            "Name": {
                "type": "string",
                "description": "The name of the environment.",
                "pattern": "^[A-Za-z0-9][A-Za-z0-9_\\-]{1,59}$"
            },
            "PreferredMaintenanceWindow": {
                "type": "string",
                "description": "Configures a desired maintenance window for the environment. If you do not provide a value, a random system-generated value will be assigned.",
                "pattern": "^\\S{1,50}$"
            },
            "PubliclyAccessible": {
                "type": "boolean",
                "description": "Specifies whether the environment is publicly accessible."
            },
            "SecurityGroupIds": {
                "type": "array",
                "description": "The list of security groups for the VPC associated with this environment.",
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "pattern": "^\\S{1,50}$"
                }
            },
            "StorageConfigurations": {
                "type": "array",
                "description": "The storage configurations defined for the runtime environment.",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/StorageConfiguration"
                }
            },
            "SubnetIds": {
                "type": "array",
                "description": "The unique identifiers of the subnets assigned to this runtime environment.",
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "pattern": "^\\S{1,50}$"
                }
            },
            "Tags": {
                "description": "Tags associated to this environment.",
                "$ref": "#/definitions/TagMap"
            }
        }
    },
    "AWS::MediaTailor::PlaybackConfiguration": {
        "properties": {
            "AdDecisionServerUrl": {
                "description": "The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.",
                "type": "string"
            },
            "AvailSuppression": {
                "description": "The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see Ad Suppression (https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).",
                "$ref": "#/definitions/AvailSuppression"
            },
            "Bumper": {
                "description": "The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see Bumpers (https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html).",
                "$ref": "#/definitions/Bumper"
            },
            "CdnConfiguration": {
                "description": "The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.",
                "$ref": "#/definitions/CdnConfiguration"
            },
            "ConfigurationAliases": {
                "description": "The player parameters and aliases used as dynamic variables during session initialization. For more information, see Domain Variables. ",
                "$ref": "#/definitions/ConfigurationAliases"
            },
            "DashConfiguration": {
                "description": "The configuration for DASH content.",
                "$ref": "#/definitions/DashConfiguration"
            },
            "LivePreRollConfiguration": {
                "description": "The configuration for pre-roll ad insertion.",
                "$ref": "#/definitions/LivePreRollConfiguration"
            },
            "ManifestProcessingRules": {
                "description": "The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.",
                "$ref": "#/definitions/ManifestProcessingRules"
            },
            "Name": {
                "description": "The identifier for the playback configuration.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_-]+$",
                "maxLength": 64,
                "minLength": 1
            },
            "PersonalizationThresholdSeconds": {
                "description": "Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to ad replacement in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see Ad Behavior in AWS Elemental MediaTailor (https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).",
                "type": "integer"
            },
            "SessionInitializationEndpointPrefix": {
                "description": "The URL that the player uses to initialize a session that uses client-side reporting.",
                "type": "string"
            },
            "HlsConfiguration": {
                "description": "The configuration for HLS content.",
                "$ref": "#/definitions/HlsConfiguration"
            },
            "PlaybackConfigurationArn": {
                "description": "The Amazon Resource Name (ARN) for the playback configuration.",
                "type": "string"
            },
            "PlaybackEndpointPrefix": {
                "description": "The URL that the player accesses to get a manifest from MediaTailor. This session will use server-side reporting.",
                "type": "string"
            },
            "SlateAdUrl": {
                "description": "The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.",
                "type": "string"
            },
            "Tags": {
                "description": "The tags to assign to the playback configuration.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "TranscodeProfileName": {
                "description": "The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.",
                "type": "string"
            },
            "VideoContentSourceUrl": {
                "description": "The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.",
                "type": "string"
            }
        }
    },
    "AWS::Oam::Sink": {
        "properties": {
            "Arn": {
                "description": "The Amazon resource name (ARN) of the ObservabilityAccessManager Sink",
                "type": "string",
                "maxLength": 2048
            },
            "Name": {
                "description": "The name of the ObservabilityAccessManager Sink.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255,
                "pattern": "^[a-zA-Z0-9_.-]+$"
            },
            "Policy": {
                "description": "The policy of this ObservabilityAccessManager Sink.",
                "type": "object"
            },
            "Tags": {
                "description": "Tags to apply to the sink",
                "type": "object",
                "additionalProperties": false,
                "patternProperties": {
                    "^(?!aws:.*)[a-zA-Z0-9\\s\\_\\.\\/\\=\\+\\-]{1,128}$": {
                        "type": "string",
                        "description": "The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.",
                        "pattern": "^(?!aws:.*)[a-zA-Z0-9\\s\\_\\.\\/\\=\\+\\-]{0,256}$",
                        "minLength": 0,
                        "maxLength": 256
                    }
                }
            }
        }
    },
    "AWS::OpenSearchServerless::AccessPolicy": {
        "properties": {
            "Name": {
                "type": "string",
                "maxLength": 32,
                "minLength": 3,
                "pattern": "^[a-z][a-z0-9-]{2,31}$",
                "description": "The name of the policy"
            },
            "Type": {
                "$ref": "#/definitions/AccessPolicyType"
            },
            "Description": {
                "type": "string",
                "maxLength": 1000,
                "minLength": 1,
                "description": "The description of the policy"
            },
            "Policy": {
                "type": "string",
                "minLength": 1,
                "maxLength": 20480,
                "pattern": "[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u00A1-\\u00FF]+",
                "description": "The JSON policy document that is the content for the policy"
            }
        }
    },
    "AWS::OpenSearchServerless::SecurityPolicy": {
        "properties": {
            "Description": {
                "type": "string",
                "maxLength": 1000,
                "minLength": 1,
                "description": "The description of the policy"
            },
            "Policy": {
                "type": "string",
                "maxLength": 20480,
                "minLength": 1,
                "pattern": "[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u00A1-\\u00FF]+",
                "description": "The JSON policy document that is the content for the policy"
            },
            "Name": {
                "type": "string",
                "maxLength": 32,
                "minLength": 3,
                "pattern": "^[a-z][a-z0-9-]{2,31}$",
                "description": "The name of the policy"
            },
            "Type": {
                "$ref": "#/definitions/SecurityPolicyType"
            }
        }
    },
    "AWS::OpenSearchServerless::Collection": {
        "properties": {
            "Description": {
                "type": "string",
                "maxLength": 1000,
                "description": "The description of the collection"
            },
            "Id": {
                "type": "string",
                "maxLength": 40,
                "minLength": 3,
                "description": "The identifier of the collection"
            },
            "Name": {
                "type": "string",
                "maxLength": 32,
                "minLength": 3,
                "pattern": "^[a-z][a-z0-9-]{2,31}$",
                "description": "The name of the collection.\n\nThe name must meet the following criteria:\nUnique to your account and AWS Region\nStarts with a lowercase letter\nContains only lowercase letters a-z, the numbers 0-9 and the hyphen (-)\nContains between 3 and 32 characters\n"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 50,
                "minItems": 0,
                "insertionOrder": false,
                "description": "List of tags to be added to the resource"
            },
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the collection.",
                "type": "string"
            },
            "CollectionEndpoint": {
                "description": "The endpoint for the collection.",
                "type": "string"
            },
            "DashboardEndpoint": {
                "description": "The OpenSearch Dashboards endpoint for the collection.",
                "type": "string"
            },
            "Type": {
                "$ref": "#/definitions/CollectionType"
            }
        }
    },
    "AWS::OpenSearchServerless::SecurityConfig": {
        "properties": {
            "Description": {
                "type": "string",
                "maxLength": 1000,
                "minLength": 1,
                "description": "Security config description"
            },
            "Id": {
                "type": "string",
                "maxLength": 100,
                "minLength": 1,
                "description": "The identifier of the security config"
            },
            "Name": {
                "type": "string",
                "maxLength": 32,
                "minLength": 3,
                "pattern": "^[a-z][a-z0-9-]{2,31}$",
                "description": "The friendly name of the security config"
            },
            "SamlOptions": {
                "$ref": "#/definitions/SamlConfigOptions"
            },
            "Type": {
                "$ref": "#/definitions/SecurityConfigType"
            }
        }
    },
    "AWS::Personalize::Dataset": {
        "properties": {
            "Name": {
                "description": "The name for the dataset",
                "type": "string",
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9\\-_]*",
                "minLength": 1,
                "maxLength": 63
            },
            "DatasetArn": {
                "description": "The ARN of the dataset",
                "type": "string",
                "pattern": "arn:([a-z\\d-]+):personalize:.*:.*:.+",
                "maxLength": 256
            },
            "DatasetType": {
                "description": "The type of dataset",
                "type": "string",
                "enum": [
                    "Interactions",
                    "Items",
                    "Users"
                ],
                "maxLength": 256
            },
            "DatasetGroupArn": {
                "description": "The Amazon Resource Name (ARN) of the dataset group to add the dataset to",
                "type": "string",
                "maxLength": 256,
                "pattern": "arn:([a-z\\d-]+):personalize:.*:.*:.+"
            },
            "SchemaArn": {
                "description": "The ARN of the schema to associate with the dataset. The schema defines the dataset fields.",
                "type": "string",
                "maxLength": 256,
                "pattern": "arn:([a-z\\d-]+):personalize:.*:.*:.+"
            },
            "DatasetImportJob": {
                "$ref": "#/definitions/DatasetImportJob"
            }
        }
    },
    "AWS::Personalize::DatasetGroup": {
        "properties": {
            "DatasetGroupArn": {
                "description": "The Amazon Resource Name (ARN) of the dataset group.",
                "type": "string",
                "pattern": "arn:([a-z\\d-]+):personalize:.*:.*:.+",
                "maxLength": 256
            },
            "Name": {
                "description": "The name for the new dataset group.",
                "type": "string",
                "minLength": 1,
                "maxLength": 63,
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9\\-_]*"
            },
            "KmsKeyArn": {
                "description": "The Amazon Resource Name(ARN) of a AWS Key Management Service (KMS) key used to encrypt the datasets.",
                "type": "string",
                "maxLength": 2048,
                "pattern": "arn:aws.*:kms:.*:[0-9]{12}:key/.*"
            },
            "RoleArn": {
                "description": "The ARN of the AWS Identity and Access Management (IAM) role that has permissions to access the AWS Key Management Service (KMS) key. Supplying an IAM role is only valid when also specifying a KMS key.",
                "type": "string",
                "pattern": "arn:([a-z\\d-]+):iam::\\d{12}:role/?[a-zA-Z_0-9+=,.@\\-_/]+",
                "minLength": 0,
                "maxLength": 256
            },
            "Domain": {
                "description": "The domain of a Domain dataset group.",
                "type": "string",
                "enum": [
                    "ECOMMERCE",
                    "VIDEO_ON_DEMAND"
                ]
            }
        }
    },
    "AWS::Personalize::Solution": {
        "properties": {
            "Name": {
                "description": "The name for the solution",
                "type": "string",
                "minLength": 1,
                "maxLength": 63,
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9\\-_]*"
            },
            "SolutionArn": {
                "$ref": "#/definitions/SolutionArn"
            },
            "EventType": {
                "description": "When your have multiple event types (using an EVENT_TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model. If you do not provide an eventType, Amazon Personalize will use all interactions for training with equal weight regardless of type.",
                "type": "string",
                "maxLength": 256
            },
            "DatasetGroupArn": {
                "description": "The ARN of the dataset group that provides the training data.",
                "type": "string",
                "maxLength": 256,
                "pattern": "arn:([a-z\\d-]+):personalize:.*:.*:.+"
            },
            "PerformAutoML": {
                "description": "Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn.",
                "type": "boolean"
            },
            "PerformHPO": {
                "description": "Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. The default is false. When performing AutoML, this parameter is always true and you should not set it to false.",
                "type": "boolean"
            },
            "RecipeArn": {
                "description": "The ARN of the recipe to use for model training. Only specified when performAutoML is false.",
                "type": "string",
                "maxLength": 256,
                "pattern": "arn:([a-z\\d-]+):personalize:.*:.*:.+"
            },
            "SolutionConfig": {
                "$ref": "#/definitions/SolutionConfig"
            }
        }
    },
    "AWS::Personalize::Schema": {
        "properties": {
            "Name": {
                "description": "Name for the schema.",
                "type": "string",
                "minLength": 1,
                "maxLength": 63,
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9\\-_]*"
            },
            "SchemaArn": {
                "description": "Arn for the schema.",
                "type": "string",
                "maxLength": 256,
                "pattern": "arn:([a-z\\d-]+):personalize:.*:.*:.+"
            },
            "Schema": {
                "description": "A schema in Avro JSON format.",
                "type": "string",
                "maxLength": 10000
            },
            "Domain": {
                "description": "The domain of a Domain dataset group.",
                "type": "string",
                "enum": [
                    "ECOMMERCE",
                    "VIDEO_ON_DEMAND"
                ]
            }
        }
    },
    "AWS::Pipes::Pipe": {
        "properties": {
            "Arn": {
                "type": "string",
                "maxLength": 1600,
                "minLength": 1
            },
            "CreationTime": {
                "type": "string",
                "format": "date-time"
            },
            "CurrentState": {
                "$ref": "#/definitions/PipeState"
            },
            "Description": {
                "type": "string",
                "maxLength": 512,
                "minLength": 0,
                "pattern": "^.*$"
            },
            "DesiredState": {
                "$ref": "#/definitions/RequestedPipeState"
            },
            "Enrichment": {
                "type": "string",
                "maxLength": 1600,
                "minLength": 0
            },
            "EnrichmentParameters": {
                "$ref": "#/definitions/PipeEnrichmentParameters"
            },
            "LastModifiedTime": {
                "type": "string",
                "format": "date-time"
            },
            "Name": {
                "type": "string",
                "maxLength": 64,
                "minLength": 1,
                "pattern": "^[\\.\\-_A-Za-z0-9]+$"
            },
            "RoleArn": {
                "type": "string",
                "maxLength": 1600,
                "minLength": 1
            },
            "Source": {
                "type": "string",
                "maxLength": 1600,
                "minLength": 1
            },
            "SourceParameters": {
                "$ref": "#/definitions/PipeSourceParameters"
            },
            "StateReason": {
                "type": "string",
                "maxLength": 512,
                "minLength": 0,
                "pattern": "^.*$"
            },
            "Tags": {
                "$ref": "#/definitions/TagMap"
            },
            "Target": {
                "type": "string",
                "maxLength": 1600,
                "minLength": 1
            },
            "TargetParameters": {
                "$ref": "#/definitions/PipeTargetParameters"
            }
        }
    },
    "AWS::QuickSight::Dashboard": {
        "properties": {
            "Arn": {
                "type": "string",
                "description": "<p>The Amazon Resource Name (ARN) of the resource.</p>"
            },
            "AwsAccountId": {
                "type": "string",
                "maxLength": 12,
                "minLength": 12,
                "pattern": "^[0-9]{12}$"
            },
            "CreatedTime": {
                "type": "string",
                "description": "<p>The time that this dataset was created.</p>",
                "format": "date-time"
            },
            "DashboardId": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "[\\w\\-]+"
            },
            "DashboardPublishOptions": {
                "$ref": "#/definitions/DashboardPublishOptions"
            },
            "LastPublishedTime": {
                "type": "string",
                "description": "<p>The last time that this dataset was published.</p>",
                "format": "string"
            },
            "LastUpdatedTime": {
                "type": "string",
                "description": "<p>The last time that this dataset was updated.</p>",
                "format": "string"
            },
            "Name": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "[\\u0020-\\u00FF]+",
                "description": "<p>The display name of the dashboard.</p>"
            },
            "Parameters": {
                "$ref": "#/definitions/Parameters"
            },
            "Permissions": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ResourcePermission"
                },
                "maxItems": 64,
                "minItems": 1,
                "description": "<p>A structure that contains the permissions of the dashboard. You can use this structure\n            for granting permissions by providing a list of IAM action information for each\n            principal ARN. </p>\n\n        <p>To specify no permissions, omit the permissions list.</p>"
            },
            "SourceEntity": {
                "$ref": "#/definitions/DashboardSourceEntity"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 200,
                "minItems": 1,
                "description": "<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the\n            dashboard.</p>"
            },
            "ThemeArn": {
                "type": "string",
                "description": "<p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If\n            you add a value for this field, it overrides the value that is used in the source\n            entity. The theme ARN must exist in the same AWS account where you create the\n            dashboard.</p>"
            },
            "Version": {
                "$ref": "#/definitions/DashboardVersion"
            },
            "VersionDescription": {
                "type": "string",
                "maxLength": 512,
                "minLength": 1,
                "description": "<p>A description for the first version of the dashboard being created.</p>"
            }
        }
    },
    "AWS::QuickSight::Template": {
        "properties": {
            "Arn": {
                "type": "string",
                "description": "<p>The Amazon Resource Name (ARN) of the template.</p>"
            },
            "AwsAccountId": {
                "type": "string",
                "maxLength": 12,
                "minLength": 12,
                "pattern": "^[0-9]{12}$"
            },
            "CreatedTime": {
                "type": "string",
                "description": "<p>Time when this was created.</p>",
                "format": "string"
            },
            "LastUpdatedTime": {
                "type": "string",
                "description": "<p>Time when this was last updated.</p>",
                "format": "string"
            },
            "Name": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "[\\u0020-\\u00FF]+",
                "description": "<p>A display name for the template.</p>"
            },
            "Permissions": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ResourcePermission"
                },
                "maxItems": 64,
                "minItems": 1,
                "description": "<p>A list of resource permissions to be set on the template. </p>"
            },
            "SourceEntity": {
                "$ref": "#/definitions/TemplateSourceEntity"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 200,
                "minItems": 1,
                "description": "<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>"
            },
            "TemplateId": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "[\\w\\-]+"
            },
            "Version": {
                "$ref": "#/definitions/TemplateVersion"
            },
            "VersionDescription": {
                "type": "string",
                "maxLength": 512,
                "minLength": 1,
                "description": "<p>A description of the current template version being created. This API operation creates the\n\t\t\tfirst version of the template. Every time <code>UpdateTemplate</code> is called, a new\n\t\t\tversion is created. Each version of the template maintains a description of the version\n\t\t\tin the <code>VersionDescription</code> field.</p>"
            }
        }
    },
    "AWS::QuickSight::Analysis": {
        "properties": {
            "AnalysisId": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "[\\w\\-]+"
            },
            "Arn": {
                "type": "string",
                "description": "<p>The Amazon Resource Name (ARN) of the analysis.</p>"
            },
            "AwsAccountId": {
                "type": "string",
                "maxLength": 12,
                "minLength": 12,
                "pattern": "^[0-9]{12}$"
            },
            "CreatedTime": {
                "type": "string",
                "description": "<p>The time that the analysis was created.</p>",
                "format": "string"
            },
            "DataSetArns": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "maxItems": 100,
                "minItems": 0,
                "description": "<p>The ARNs of the datasets of the analysis.</p>"
            },
            "Errors": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/AnalysisError"
                },
                "minItems": 1,
                "description": "<p>Errors associated with the analysis.</p>"
            },
            "LastUpdatedTime": {
                "type": "string",
                "description": "<p>The time that the analysis was last updated.</p>",
                "format": "string"
            },
            "Name": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "[\\u0020-\\u00FF]+",
                "description": "<p>The descriptive name of the analysis.</p>"
            },
            "Parameters": {
                "$ref": "#/definitions/Parameters"
            },
            "Permissions": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ResourcePermission"
                },
                "maxItems": 64,
                "minItems": 1,
                "description": "<p>A structure that describes the principals and the resource-level permissions on an\n            analysis. You can use the <code>Permissions</code> structure to grant permissions by\n            providing a list of AWS Identity and Access Management (IAM) action information for each\n            principal listed by Amazon Resource Name (ARN). </p>\n\n        <p>To specify no permissions, omit <code>Permissions</code>.</p>"
            },
            "Sheets": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Sheet"
                },
                "maxItems": 20,
                "minItems": 0,
                "description": "<p>A list of the associated sheets with the unique identifier and name of each sheet.</p>"
            },
            "SourceEntity": {
                "$ref": "#/definitions/AnalysisSourceEntity"
            },
            "Status": {
                "$ref": "#/definitions/ResourceStatus"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 200,
                "minItems": 1,
                "description": "<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the\n            analysis.</p>"
            },
            "ThemeArn": {
                "type": "string",
                "description": "<p>The ARN of the theme of the analysis.</p>"
            }
        }
    },
    "AWS::RefactorSpaces::Application": {
        "properties": {
            "ApiGatewayProxy": {
                "$ref": "#/definitions/ApiGatewayProxyInput"
            },
            "Arn": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 20,
                "pattern": "^arn:(aws[a-zA-Z-]*)?:refactor-spaces:[a-zA-Z0-9\\-]+:\\w{12}:[a-zA-Z_0-9+=,.@\\-_/]+$"
            },
            "ApiGatewayId": {
                "type": "string",
                "maxLength": 10,
                "minLength": 10,
                "pattern": "^[a-z0-9]{10}$"
            },
            "VpcLinkId": {
                "type": "string",
                "maxLength": 10,
                "minLength": 10,
                "pattern": "^[a-z0-9]{10}$"
            },
            "NlbArn": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 20,
                "pattern": "^arn:(aws[a-zA-Z-]*)?:elasticloadbalancing:[a-zA-Z0-9\\\\-]+:\\\\w{12}:[a-zA-Z_0-9+=,.@\\\\-_\\/]+$"
            },
            "NlbName": {
                "type": "string",
                "maxLength": 32,
                "minLength": 1,
                "pattern": "^(?!internal-)[a-zA-Z0-9]+[a-zA-Z0-9-_ ]+.*[^-]$"
            },
            "ApplicationIdentifier": {
                "type": "string",
                "maxLength": 14,
                "minLength": 14,
                "pattern": "^app-([0-9A-Za-z]{10}$)"
            },
            "EnvironmentIdentifier": {
                "type": "string",
                "maxLength": 14,
                "minLength": 14,
                "pattern": "^env-([0-9A-Za-z]{10}$)"
            },
            "Name": {
                "type": "string",
                "maxLength": 63,
                "minLength": 3,
                "pattern": "^(?!app-)[a-zA-Z0-9]+[a-zA-Z0-9-_ ]+$"
            },
            "ProxyType": {
                "$ref": "#/definitions/ProxyType"
            },
            "VpcId": {
                "type": "string",
                "maxLength": 21,
                "minLength": 12,
                "pattern": "^vpc-[-a-f0-9]{8}([-a-f0-9]{9})?$"
            },
            "StageName": {
                "type": "string",
                "maxLength": 128,
                "minLength": 1,
                "pattern": "^[-a-zA-Z0-9_]*$"
            },
            "ProxyUrl": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "^http://[-a-zA-Z0-9+\\x38@#/%?=~_|!:,.;]*[-a-zA-Z0-9+\\x38@#/%=~_|]$"
            },
            "Tags": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "description": "Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair."
            }
        }
    },
    "AWS::RefactorSpaces::Environment": {
        "properties": {
            "Description": {
                "type": "string",
                "maxLength": 256,
                "minLength": 1,
                "pattern": "^[a-zA-Z0-9-_\\s\\.\\!\\*\\#\\@\\']+$"
            },
            "EnvironmentIdentifier": {
                "type": "string",
                "maxLength": 14,
                "minLength": 14,
                "pattern": "^env-([0-9A-Za-z]{10}$)"
            },
            "Name": {
                "type": "string",
                "maxLength": 63,
                "minLength": 3,
                "pattern": "^(?!env-)[a-zA-Z0-9]+[a-zA-Z0-9-_ ]+$"
            },
            "NetworkFabricType": {
                "$ref": "#/definitions/NetworkFabricType"
            },
            "Arn": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 20,
                "pattern": "^arn:(aws[a-zA-Z-]*)?:refactor-spaces:[a-zA-Z0-9\\-]+:\\w{12}:[a-zA-Z_0-9+=,.@\\-_/]+$"
            },
            "TransitGatewayId": {
                "type": "string",
                "maxLength": 21,
                "minLength": 21,
                "pattern": "^tgw-[-a-f0-9]{17}$"
            },
            "Tags": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "description": "Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair."
            }
        }
    },
    "AWS::RefactorSpaces::Service": {
        "properties": {
            "Arn": {
                "type": "string",
                "minLength": 20,
                "maxLength": 2048,
                "pattern": "^arn:(aws[a-zA-Z-]*)?:refactor-spaces:[a-zA-Z0-9\\-]+:\\w{12}:[a-zA-Z_0-9+=,.@\\-_/]+$"
            },
            "ApplicationIdentifier": {
                "type": "string",
                "maxLength": 14,
                "minLength": 14,
                "pattern": "^app-([0-9A-Za-z]{10}$)"
            },
            "Description": {
                "type": "string",
                "maxLength": 256,
                "minLength": 1,
                "pattern": "^[a-zA-Z0-9-_\\s\\.\\!\\*\\#\\@\\']+$"
            },
            "EndpointType": {
                "$ref": "#/definitions/ServiceEndpointType"
            },
            "EnvironmentIdentifier": {
                "type": "string",
                "maxLength": 14,
                "minLength": 14,
                "pattern": "^env-([0-9A-Za-z]{10}$)"
            },
            "LambdaEndpoint": {
                "$ref": "#/definitions/LambdaEndpointInput"
            },
            "Name": {
                "type": "string",
                "maxLength": 63,
                "minLength": 3,
                "pattern": "^(?!svc-)[a-zA-Z0-9]+[a-zA-Z0-9-_ ]+$"
            },
            "ServiceIdentifier": {
                "type": "string",
                "maxLength": 14,
                "minLength": 14,
                "pattern": "^svc-([0-9A-Za-z]{10}$)"
            },
            "UrlEndpoint": {
                "$ref": "#/definitions/UrlEndpointInput"
            },
            "VpcId": {
                "type": "string",
                "maxLength": 21,
                "minLength": 12,
                "pattern": "^vpc-[-a-f0-9]{8}([-a-f0-9]{9})?$"
            },
            "Tags": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "description": "Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair."
            }
        }
    },
    "AWS::ResilienceHub::App": {
        "properties": {
            "Name": {
                "description": "Name of the app.",
                "type": "string",
                "pattern": "^[A-Za-z0-9][A-Za-z0-9_\\-]{1,59}$"
            },
            "Description": {
                "description": "App description.",
                "type": "string",
                "minLength": 0,
                "maxLength": 500
            },
            "AppArn": {
                "type": "string",
                "description": "Amazon Resource Name (ARN) of the App.",
                "pattern": "^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$"
            },
            "ResiliencyPolicyArn": {
                "type": "string",
                "description": "Amazon Resource Name (ARN) of the Resiliency Policy.",
                "pattern": "^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$"
            },
            "Tags": {
                "$ref": "#/definitions/TagMap"
            },
            "AppTemplateBody": {
                "description": "A string containing full ResilienceHub app template body.",
                "type": "string",
                "minLength": 0,
                "maxLength": 5000,
                "pattern": "^[\\w\\s:,-\\.'{}\\[\\]:\"]+$"
            },
            "ResourceMappings": {
                "description": "An array of ResourceMapping objects.",
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/ResourceMapping"
                }
            },
            "AppAssessmentSchedule": {
                "description": "Assessment execution schedule.",
                "type": "string",
                "enum": [
                    "Disabled",
                    "Daily"
                ]
            }
        }
    },
    "AWS::Rekognition::StreamProcessor": {
        "properties": {
            "Arn": {
                "$ref": "#/definitions/Arn"
            },
            "Name": {
                "description": "Name of the stream processor. It's an identifier you assign to the stream processor. You can use it to manage the stream processor.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z0-9_.\\-]+"
            },
            "KmsKeyId": {
                "description": "The KMS key that is used by Rekognition to encrypt any intermediate customer metadata and store in the customer's S3 bucket.",
                "type": "string"
            },
            "RoleArn": {
                "description": "ARN of the IAM role that allows access to the stream processor, and provides Rekognition read permissions for KVS stream and write permissions to S3 bucket and SNS topic.",
                "type": "string",
                "maxLength": 2048,
                "pattern": "arn:aws(-[\\w]+)*:iam::[0-9]{12}:role/.*"
            },
            "KinesisVideoStream": {
                "$ref": "#/definitions/KinesisVideoStream"
            },
            "FaceSearchSettings": {
                "$ref": "#/definitions/FaceSearchSettings"
            },
            "ConnectedHomeSettings": {
                "$ref": "#/definitions/ConnectedHomeSettings"
            },
            "KinesisDataStream": {
                "$ref": "#/definitions/KinesisDataStream"
            },
            "S3Destination": {
                "$ref": "#/definitions/S3Destination"
            },
            "NotificationChannel": {
                "$ref": "#/definitions/NotificationChannel"
            },
            "DataSharingPreference": {
                "$ref": "#/definitions/DataSharingPreference"
            },
            "PolygonRegionsOfInterest": {
                "description": "The PolygonRegionsOfInterest specifies a set of polygon areas of interest in the video frames to analyze, as part of connected home feature. Each polygon is in turn, an ordered list of Point",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "minItems": 0,
                "items": {
                    "$ref": "#/definitions/Polygon"
                }
            },
            "BoundingBoxRegionsOfInterest": {
                "description": "The BoundingBoxRegionsOfInterest specifies an array of bounding boxes of interest in the video frames to analyze, as part of connected home feature. If an object is partially in a region of interest, Rekognition will tag it as detected if the overlap of the object with the region-of-interest is greater than 20%.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "minItems": 0,
                "items": {
                    "$ref": "#/definitions/BoundingBox"
                }
            },
            "Status": {
                "description": "Current status of the stream processor.",
                "type": "string"
            },
            "StatusMessage": {
                "description": "Detailed status message about the stream processor.",
                "type": "string"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "minItems": 0,
                "maxItems": 200,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::RoboMaker::Fleet": {
        "properties": {
            "Arn": {
                "$ref": "#/definitions/Arn"
            },
            "Tags": {
                "$ref": "#/definitions/Tags"
            },
            "Name": {
                "description": "The name of the fleet.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255,
                "pattern": "[a-zA-Z0-9_\\-]{1,255}$"
            }
        }
    },
    "AWS::RoboMaker::SimulationApplication": {
        "properties": {
            "Arn": {
                "$ref": "#/definitions/Arn"
            },
            "Name": {
                "description": "The name of the simulation application.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255,
                "pattern": "[a-zA-Z0-9_\\-]*"
            },
            "CurrentRevisionId": {
                "description": "The current revision id.",
                "type": "string"
            },
            "RenderingEngine": {
                "description": "The rendering engine for the simulation application.",
                "$ref": "#/definitions/RenderingEngine"
            },
            "RobotSoftwareSuite": {
                "description": "The robot software suite used by the simulation application.",
                "$ref": "#/definitions/RobotSoftwareSuite"
            },
            "SimulationSoftwareSuite": {
                "description": "The simulation software suite used by the simulation application.",
                "$ref": "#/definitions/SimulationSoftwareSuite"
            },
            "Sources": {
                "description": "The sources of the simulation application.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/SourceConfig"
                }
            },
            "Environment": {
                "description": "The URI of the Docker image for the robot application.",
                "type": "string"
            },
            "Tags": {
                "$ref": "#/definitions/Tags"
            }
        }
    },
    "AWS::Route53::CidrCollection": {
        "properties": {
            "Id": {
                "description": "UUID of the CIDR collection.",
                "type": "string"
            },
            "Name": {
                "description": "A unique name for the CIDR collection.",
                "type": "string",
                "pattern": "^[0-9A-Za-z_\\-]+$",
                "minLength": 1,
                "maxLength": 64
            },
            "Arn": {
                "description": "The Amazon resource name (ARN) to uniquely identify the AWS resource.",
                "type": "string"
            },
            "Locations": {
                "description": "A complex type that contains information about the list of CIDR locations.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Location"
                }
            }
        }
    },
    "AWS::Route53::KeySigningKey": {
        "properties": {
            "HostedZoneId": {
                "description": "The unique string (ID) used to identify a hosted zone.",
                "type": "string",
                "pattern": "^[A-Z0-9]{1,32}$"
            },
            "Status": {
                "description": "A string specifying the initial status of the key signing key (KSK). You can set the value to ACTIVE or INACTIVE.",
                "type": "string",
                "enum": [
                    "ACTIVE",
                    "INACTIVE"
                ]
            },
            "Name": {
                "description": "An alphanumeric string used to identify a key signing key (KSK). Name must be unique for each key signing key in the same hosted zone.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_]{3,128}$"
            },
            "KeyManagementServiceArn": {
                "description": "The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS). The KeyManagementServiceArn must be unique for each key signing key (KSK) in a single hosted zone.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256
            }
        }
    },
    "AWS::Route53Resolver::FirewallDomainList": {
        "properties": {
            "Id": {
                "description": "ResourceId",
                "type": "string",
                "minLength": 1,
                "maxLength": 64
            },
            "Arn": {
                "description": "Arn",
                "type": "string",
                "minLength": 1,
                "maxLength": 600
            },
            "Name": {
                "description": "FirewallDomainListName",
                "type": "string",
                "pattern": "(?!^[0-9]+$)([a-zA-Z0-9\\-_' ']+)",
                "minLength": 1,
                "maxLength": 64
            },
            "DomainCount": {
                "description": "Count",
                "type": "integer",
                "minimum": 0
            },
            "Status": {
                "description": "ResolverFirewallDomainList, possible values are COMPLETE, DELETING, UPDATING, COMPLETE_IMPORT_FAILED, IMPORTING, and INACTIVE_OWNER_ACCOUNT_CLOSED.",
                "type": "string",
                "enum": [
                    "COMPLETE",
                    "DELETING",
                    "UPDATING",
                    "COMPLETE_IMPORT_FAILED",
                    "IMPORTING",
                    "INACTIVE_OWNER_ACCOUNT_CLOSED"
                ]
            },
            "StatusMessage": {
                "description": "FirewallDomainListAssociationStatus",
                "type": "string"
            },
            "ManagedOwnerName": {
                "description": "ServicePrincipal",
                "type": "string",
                "minLength": 1,
                "maxLength": 512
            },
            "CreatorRequestId": {
                "description": "The id of the creator request.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "CreationTime": {
                "description": "Rfc3339TimeString",
                "type": "string",
                "minLength": 20,
                "maxLength": 40
            },
            "ModificationTime": {
                "description": "Rfc3339TimeString",
                "type": "string",
                "minLength": 20,
                "maxLength": 40
            },
            "Domains": {
                "$ref": "#/definitions/Domains"
            },
            "DomainFileUrl": {
                "description": "S3 URL to import domains from.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1024
            },
            "Tags": {
                "description": "Tags",
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Route53Resolver::FirewallRuleGroup": {
        "properties": {
            "Id": {
                "description": "ResourceId",
                "type": "string",
                "minLength": 1,
                "maxLength": 64
            },
            "Arn": {
                "description": "Arn",
                "type": "string",
                "minLength": 1,
                "maxLength": 600
            },
            "Name": {
                "description": "FirewallRuleGroupName",
                "type": "string",
                "pattern": "(?!^[0-9]+$)([a-zA-Z0-9\\-_' ']+)",
                "minLength": 1,
                "maxLength": 64
            },
            "RuleCount": {
                "description": "Count",
                "type": "integer"
            },
            "Status": {
                "description": "ResolverFirewallRuleGroupAssociation, possible values are COMPLETE, DELETING, UPDATING, and INACTIVE_OWNER_ACCOUNT_CLOSED.",
                "type": "string",
                "enum": [
                    "COMPLETE",
                    "DELETING",
                    "UPDATING",
                    "INACTIVE_OWNER_ACCOUNT_CLOSED"
                ]
            },
            "StatusMessage": {
                "description": "FirewallRuleGroupStatus",
                "type": "string"
            },
            "OwnerId": {
                "description": "AccountId",
                "type": "string",
                "minLength": 12,
                "maxLength": 32
            },
            "ShareStatus": {
                "description": "ShareStatus, possible values are NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME.",
                "type": "string",
                "enum": [
                    "NOT_SHARED",
                    "SHARED_WITH_ME",
                    "SHARED_BY_ME"
                ]
            },
            "CreatorRequestId": {
                "description": "The id of the creator request.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "CreationTime": {
                "description": "Rfc3339TimeString",
                "type": "string",
                "minLength": 20,
                "maxLength": 40
            },
            "ModificationTime": {
                "description": "Rfc3339TimeString",
                "type": "string",
                "minLength": 20,
                "maxLength": 40
            },
            "FirewallRules": {
                "description": "FirewallRules",
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/FirewallRule"
                }
            },
            "Tags": {
                "description": "Tags",
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Route53Resolver::FirewallRuleGroupAssociation": {
        "properties": {
            "Id": {
                "description": "Id",
                "type": "string",
                "minLength": 1,
                "maxLength": 64
            },
            "Arn": {
                "description": "Arn",
                "type": "string",
                "minLength": 1,
                "maxLength": 600
            },
            "FirewallRuleGroupId": {
                "description": "FirewallRuleGroupId",
                "type": "string",
                "minLength": 1,
                "maxLength": 64
            },
            "VpcId": {
                "description": "VpcId",
                "type": "string",
                "minLength": 1,
                "maxLength": 64
            },
            "Name": {
                "description": "FirewallRuleGroupAssociationName",
                "type": "string",
                "pattern": "(?!^[0-9]+$)([a-zA-Z0-9\\-_' ']+)",
                "minLength": 0,
                "maxLength": 64
            },
            "Priority": {
                "description": "Priority",
                "type": "integer"
            },
            "MutationProtection": {
                "description": "MutationProtectionStatus",
                "type": "string",
                "enum": [
                    "ENABLED",
                    "DISABLED"
                ]
            },
            "ManagedOwnerName": {
                "description": "ServicePrincipal",
                "type": "string",
                "minLength": 1,
                "maxLength": 512
            },
            "Status": {
                "description": "ResolverFirewallRuleGroupAssociation, possible values are COMPLETE, DELETING, UPDATING, and INACTIVE_OWNER_ACCOUNT_CLOSED.",
                "type": "string",
                "enum": [
                    "COMPLETE",
                    "DELETING",
                    "UPDATING",
                    "INACTIVE_OWNER_ACCOUNT_CLOSED"
                ]
            },
            "StatusMessage": {
                "description": "FirewallDomainListAssociationStatus",
                "type": "string"
            },
            "CreatorRequestId": {
                "description": "The id of the creator request.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "CreationTime": {
                "description": "Rfc3339TimeString",
                "type": "string",
                "minLength": 20,
                "maxLength": 40
            },
            "ModificationTime": {
                "description": "Rfc3339TimeString",
                "type": "string",
                "minLength": 20,
                "maxLength": 40
            },
            "Tags": {
                "description": "Tags",
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Route53Resolver::ResolverQueryLoggingConfig": {
        "properties": {
            "Id": {
                "description": "ResourceId",
                "type": "string",
                "minLength": 1,
                "maxLength": 64
            },
            "OwnerId": {
                "description": "AccountId",
                "type": "string",
                "minLength": 12,
                "maxLength": 32
            },
            "Status": {
                "description": "ResolverQueryLogConfigStatus, possible values are CREATING, CREATED, DELETED AND FAILED.",
                "type": "string",
                "enum": [
                    "CREATING",
                    "CREATED",
                    "DELETING",
                    "FAILED"
                ]
            },
            "ShareStatus": {
                "description": "ShareStatus, possible values are NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME.",
                "type": "string",
                "enum": [
                    "NOT_SHARED",
                    "SHARED_WITH_ME",
                    "SHARED_BY_ME"
                ]
            },
            "AssociationCount": {
                "description": "Count",
                "type": "integer"
            },
            "Arn": {
                "description": "Arn",
                "type": "string",
                "minLength": 1,
                "maxLength": 600
            },
            "Name": {
                "description": "ResolverQueryLogConfigName",
                "type": "string",
                "pattern": "(?!^[0-9]+$)([a-zA-Z0-9\\-_' ']+)",
                "minLength": 1,
                "maxLength": 64
            },
            "CreatorRequestId": {
                "description": "The id of the creator request.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "DestinationArn": {
                "description": "destination arn",
                "type": "string",
                "minLength": 1,
                "maxLength": 600
            },
            "CreationTime": {
                "description": "Rfc3339TimeString",
                "type": "string",
                "minLength": 20,
                "maxLength": 40
            }
        }
    },
    "AWS::RUM::AppMonitor": {
        "properties": {
            "Name": {
                "description": "A name for the app monitor",
                "type": "string",
                "pattern": "[\\.\\-_/#A-Za-z0-9]+",
                "minLength": 1,
                "maxLength": 255
            },
            "Domain": {
                "description": "The top-level internet domain name for which your application has administrative authority.",
                "type": "string",
                "pattern": "^(localhost)|^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(?![-.])([A-Za-z0-9-\\.\\-]{0,63})((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))\\.(?![-])[A-Za-z-0-9]{1,63}((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))|^(\\*\\.)(?![-.])([A-Za-z0-9-\\.\\-]{0,63})((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))\\.(?![-])[A-Za-z-0-9]{1,63}((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))",
                "minLength": 1,
                "maxLength": 253
            },
            "CwLogEnabled": {
                "description": "Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to CWLlong in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur CWLlong charges. If you omit this parameter, the default is false",
                "type": "boolean"
            },
            "Tags": {
                "$ref": "#/definitions/TagDef"
            },
            "AppMonitorConfiguration": {
                "$ref": "#/definitions/AppMonitorConfiguration"
            },
            "CustomEvents": {
                "$ref": "#/definitions/CustomEvents"
            }
        }
    },
    "AWS::S3::AccessPoint": {
        "properties": {
            "Name": {
                "description": "The name you want to assign to this Access Point. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the access point name.",
                "type": "string",
                "pattern": "^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$",
                "minLength": 3,
                "maxLength": 50
            },
            "Alias": {
                "description": "The alias of this Access Point. This alias can be used for compatibility purposes with other AWS services and third-party applications.",
                "type": "string",
                "pattern": "^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$",
                "minLength": 3,
                "maxLength": 63
            },
            "Bucket": {
                "description": "The name of the bucket that you want to associate this Access Point with.",
                "type": "string",
                "minLength": 3,
                "maxLength": 255
            },
            "BucketAccountId": {
                "description": "The AWS account ID associated with the S3 bucket associated with this access point.",
                "type": "string",
                "pattern": "^\\d{12}$",
                "maxLength": 64
            },
            "VpcConfiguration": {
                "description": "If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC).",
                "$ref": "#/definitions/VpcConfiguration"
            },
            "PublicAccessBlockConfiguration": {
                "description": "The PublicAccessBlock configuration that you want to apply to this Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.",
                "$ref": "#/definitions/PublicAccessBlockConfiguration"
            },
            "Policy": {
                "description": "The Access Point Policy you want to apply to this access point.",
                "type": "object"
            },
            "PolicyStatus": {
                "type": "object",
                "properties": {
                    "IsPublic": {
                        "type": "string",
                        "description": "Specifies whether the policy is public or not.",
                        "enum": [
                            "true",
                            "false"
                        ]
                    }
                }
            },
            "NetworkOrigin": {
                "description": "Indicates whether this Access Point allows access from the public Internet. If VpcConfiguration is specified for this Access Point, then NetworkOrigin is VPC, and the Access Point doesn't allow access from the public Internet. Otherwise, NetworkOrigin is Internet, and the Access Point allows access from the public Internet, subject to the Access Point and bucket access policies.",
                "type": "string",
                "enum": [
                    "Internet",
                    "VPC"
                ]
            },
            "Arn": {
                "$ref": "#/definitions/Arn",
                "description": "The Amazon Resource Name (ARN) of the specified accesspoint.",
                "examples": [
                    "arn:aws:s3:us-west-2:123456789012:accesspoint/test"
                ]
            }
        }
    },
    "AWS::S3::MultiRegionAccessPoint": {
        "properties": {
            "PublicAccessBlockConfiguration": {
                "description": "The PublicAccessBlock configuration that you want to apply to this Multi Region Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.",
                "$ref": "#/definitions/PublicAccessBlockConfiguration"
            },
            "Alias": {
                "description": "The alias is a unique identifier to, and is part of the public DNS name for this Multi Region Access Point",
                "type": "string"
            },
            "CreatedAt": {
                "description": "The timestamp of the when the Multi Region Access Point is created",
                "type": "string"
            },
            "Regions": {
                "minItems": 1,
                "uniqueItems": true,
                "description": "The list of buckets that you want to associate this Multi Region Access Point with.",
                "type": "array",
                "items": {
                    "description": "The name of the bucket that represents of the region belonging to this Multi Region Access Point.",
                    "$ref": "#/definitions/Region"
                }
            },
            "Name": {
                "minLength": 3,
                "pattern": "^[a-z0-9][-a-z0-9]{1,48}[a-z0-9]$",
                "description": "The name you want to assign to this Multi Region Access Point.",
                "type": "string",
                "maxLength": 50
            }
        }
    },
    "AWS::S3ObjectLambda::AccessPoint": {
        "properties": {
            "Name": {
                "description": "The name you want to assign to this Object lambda Access Point.",
                "type": "string",
                "pattern": "^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$",
                "minLength": 3,
                "maxLength": 45
            },
            "Arn": {
                "type": "string",
                "pattern": "arn:[^:]+:s3-object-lambda:[^:]*:\\d{12}:accesspoint/.*"
            },
            "CreationDate": {
                "description": "The date and time when the Object lambda Access Point was created.",
                "type": "string"
            },
            "PublicAccessBlockConfiguration": {
                "description": "The PublicAccessBlock configuration that you want to apply to this Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.",
                "$ref": "#/definitions/PublicAccessBlockConfiguration"
            },
            "PolicyStatus": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "IsPublic": {
                        "type": "boolean",
                        "description": "Specifies whether the Object lambda Access Point Policy is Public or not. Object lambda Access Points are private by default."
                    }
                }
            },
            "ObjectLambdaConfiguration": {
                "description": "The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions",
                "$ref": "#/definitions/ObjectLambdaConfiguration"
            }
        }
    },
    "AWS::S3Outposts::AccessPoint": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the specified AccessPoint.",
                "maxLength": 2048,
                "minLength": 20,
                "pattern": "^arn:[^:]+:s3-outposts:[a-zA-Z0-9\\-]+:\\d{12}:outpost\\/[^:]+\\/accesspoint\\/[^:]+$",
                "type": "string"
            },
            "Bucket": {
                "description": "The Amazon Resource Name (ARN) of the bucket you want to associate this AccessPoint with.",
                "maxLength": 2048,
                "minLength": 20,
                "pattern": "^arn:[^:]+:s3-outposts:[a-zA-Z0-9\\-]+:\\d{12}:outpost\\/[^:]+\\/bucket\\/[^:]+$",
                "type": "string"
            },
            "Name": {
                "description": "A name for the AccessPoint.",
                "maxLength": 50,
                "minLength": 3,
                "pattern": "^[a-z0-9]([a-z0-9\\\\-]*[a-z0-9])?$",
                "type": "string"
            },
            "VpcConfiguration": {
                "description": "Virtual Private Cloud (VPC) from which requests can be made to the AccessPoint.",
                "$ref": "#/definitions/VpcConfiguration"
            },
            "Policy": {
                "description": "The access point policy associated with this access point.",
                "type": "object"
            }
        }
    },
    "AWS::Scheduler::ScheduleGroup": {
        "properties": {
            "Arn": {
                "type": "string",
                "maxLength": 1224,
                "minLength": 1,
                "pattern": "^arn:aws(-[a-z]+)?:scheduler:[a-z0-9\\-]+:\\d{12}:schedule-group\\/[0-9a-zA-Z-_.]+$",
                "description": "The Amazon Resource Name (ARN) of the schedule group."
            },
            "CreationDate": {
                "type": "string",
                "description": "The time at which the schedule group was created.",
                "format": "date-time"
            },
            "LastModificationDate": {
                "type": "string",
                "description": "The time at which the schedule group was last modified.",
                "format": "date-time"
            },
            "Name": {
                "type": "string",
                "maxLength": 64,
                "minLength": 1,
                "pattern": "^[0-9a-zA-Z-_.]+$"
            },
            "State": {
                "$ref": "#/definitions/ScheduleGroupState"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 200,
                "minItems": 0,
                "description": "The list of tags to associate with the schedule group.",
                "insertionOrder": false
            }
        }
    },
    "AWS::Scheduler::Schedule": {
        "properties": {
            "Arn": {
                "type": "string",
                "maxLength": 1224,
                "minLength": 1,
                "pattern": "^arn:aws(-[a-z]+)?:scheduler:[a-z0-9\\-]+:\\d{12}:schedule\\/[0-9a-zA-Z-_.]+\\/[0-9a-zA-Z-_.]+$",
                "description": "The Amazon Resource Name (ARN) of the schedule."
            },
            "Description": {
                "type": "string",
                "maxLength": 512,
                "minLength": 0,
                "description": "The description of the schedule."
            },
            "EndDate": {
                "type": "string",
                "description": "The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify.",
                "format": "date-time"
            },
            "FlexibleTimeWindow": {
                "$ref": "#/definitions/FlexibleTimeWindow"
            },
            "GroupName": {
                "type": "string",
                "maxLength": 64,
                "minLength": 1,
                "pattern": "^[0-9a-zA-Z-_.]+$",
                "description": "The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used."
            },
            "KmsKeyArn": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "^arn:aws(-[a-z]+)?:kms:[a-z0-9\\-]+:\\d{12}:(key|alias)\\/[0-9a-zA-Z-_]*$",
                "description": "The ARN for a KMS Key that will be used to encrypt customer data."
            },
            "Name": {
                "type": "string",
                "maxLength": 64,
                "minLength": 1,
                "pattern": "^[0-9a-zA-Z-_.]+$"
            },
            "ScheduleExpression": {
                "type": "string",
                "maxLength": 256,
                "minLength": 1,
                "description": "The scheduling expression."
            },
            "ScheduleExpressionTimezone": {
                "type": "string",
                "maxLength": 50,
                "minLength": 1,
                "description": "The timezone in which the scheduling expression is evaluated."
            },
            "StartDate": {
                "type": "string",
                "description": "The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify.",
                "format": "date-time"
            },
            "State": {
                "$ref": "#/definitions/ScheduleState"
            },
            "Target": {
                "$ref": "#/definitions/Target"
            }
        }
    },
    "AWS::SES::ConfigurationSet": {
        "properties": {
            "Name": {
                "description": "The name of the configuration set.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_-]{1,64}$"
            },
            "TrackingOptions": {
                "$ref": "#/definitions/TrackingOptions"
            },
            "DeliveryOptions": {
                "$ref": "#/definitions/DeliveryOptions"
            },
            "ReputationOptions": {
                "$ref": "#/definitions/ReputationOptions"
            },
            "SendingOptions": {
                "$ref": "#/definitions/SendingOptions"
            },
            "SuppressionOptions": {
                "$ref": "#/definitions/SuppressionOptions"
            },
            "VdmOptions": {
                "$ref": "#/definitions/VdmOptions"
            }
        }
    },
    "AWS::SSM::Association": {
        "properties": {
            "AssociationId": {
                "description": "Unique identifier of the association.",
                "type": "string",
                "pattern": "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}",
                "examples": [
                    "88df7b09-95e8-48c4-a3cb-08c2c20d5110",
                    "203dd0ec-0055-4bf0-a872-707f72ef06aa"
                ]
            },
            "AssociationName": {
                "description": "The name of the association.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_\\-.]{3,128}$"
            },
            "DocumentVersion": {
                "description": "The version of the SSM document to associate with the target.",
                "type": "string",
                "pattern": "([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)"
            },
            "InstanceId": {
                "description": "The ID of the instance that the SSM document is associated with.",
                "type": "string",
                "pattern": "(^i-(\\w{8}|\\w{17})$)|(^mi-\\w{17}$)",
                "examples": [
                    "i-0e60836d21cf313c4",
                    "mi-0532c22e49636ee13"
                ]
            },
            "Name": {
                "description": "The name of the SSM document.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_\\-.:/]{3,200}$",
                "examples": [
                    "AWS-GatherSoftwareInventory",
                    "MyCustomSSMDocument"
                ]
            },
            "Parameters": {
                "description": "Parameter values that the SSM document uses at runtime.",
                "type": "object",
                "patternProperties": {
                    ".*{1,255}": {
                        "$ref": "#/definitions/ParameterValues"
                    }
                },
                "additionalProperties": false
            },
            "ScheduleExpression": {
                "description": "A Cron or Rate expression that specifies when the association is applied to the target.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "examples": [
                    "cron(0 0 */1 * * ? *)",
                    "cron(0 16 ? * TUE *)",
                    "rate(30 minutes)",
                    "rate(7 days)"
                ]
            },
            "Targets": {
                "description": "The targets that the SSM document sends commands to.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Target"
                },
                "minItems": 0,
                "maxItems": 5
            },
            "OutputLocation": {
                "$ref": "#/definitions/InstanceAssociationOutputLocation"
            },
            "AutomationTargetParameterName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 50
            },
            "MaxErrors": {
                "type": "string",
                "pattern": "^([1-9][0-9]{0,6}|[0]|[1-9][0-9]%|[0-9]%|100%)$",
                "examples": [
                    "1%",
                    "10%",
                    "50%",
                    "1"
                ]
            },
            "MaxConcurrency": {
                "type": "string",
                "pattern": "^([1-9][0-9]{0,6}|[1-9][0-9]%|[1-9]%|100%)$",
                "examples": [
                    "1%",
                    "10%",
                    "50%",
                    "1"
                ]
            },
            "ComplianceSeverity": {
                "type": "string",
                "enum": [
                    "CRITICAL",
                    "HIGH",
                    "MEDIUM",
                    "LOW",
                    "UNSPECIFIED"
                ]
            },
            "SyncCompliance": {
                "type": "string",
                "enum": [
                    "AUTO",
                    "MANUAL"
                ]
            },
            "WaitForSuccessTimeoutSeconds": {
                "type": "integer",
                "minimum": 15,
                "maximum": 172800
            },
            "ApplyOnlyAtCronInterval": {
                "type": "boolean"
            },
            "CalendarNames": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "examples": [
                    [
                        "calendar1",
                        "calendar2"
                    ],
                    [
                        "calendar3"
                    ]
                ]
            },
            "ScheduleOffset": {
                "type": "integer",
                "minimum": 1,
                "maximum": 6
            }
        }
    },
    "AWS::SSM::Document": {
        "properties": {
            "Content": {
                "description": "The content for the Systems Manager document in JSON, YAML or String format.",
                "type": [
                    "object",
                    "string"
                ]
            },
            "Attachments": {
                "description": "A list of key and value pairs that describe attachments to a version of a document.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/AttachmentsSource"
                },
                "minItems": 0,
                "maxItems": 20,
                "insertionOrder": false
            },
            "Name": {
                "description": "A name for the Systems Manager document.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_\\-.]{3,128}$"
            },
            "VersionName": {
                "description": "An optional field specifying the version of the artifact you are creating with the document. This value is unique across all versions of a document, and cannot be changed.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_\\-.]{1,128}$"
            },
            "DocumentType": {
                "description": "The type of document to create.",
                "type": "string",
                "enum": [
                    "ApplicationConfiguration",
                    "ApplicationConfigurationSchema",
                    "Automation",
                    "Automation.ChangeTemplate",
                    "ChangeCalendar",
                    "CloudFormation",
                    "Command",
                    "DeploymentStrategy",
                    "Package",
                    "Policy",
                    "ProblemAnalysis",
                    "ProblemAnalysisTemplate",
                    "Session"
                ]
            },
            "DocumentFormat": {
                "description": "Specify the document format for the request. The document format can be either JSON or YAML. JSON is the default format.",
                "type": "string",
                "enum": [
                    "YAML",
                    "JSON",
                    "TEXT"
                ],
                "default": "JSON"
            },
            "TargetType": {
                "description": "Specify a target type to define the kinds of resources the document can run on.",
                "type": "string",
                "pattern": "^\\/[\\w\\.\\-\\:\\/]*$"
            },
            "Tags": {
                "description": "Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 1000,
                "insertionOrder": false
            },
            "Requires": {
                "description": "A list of SSM documents required by a document. For example, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/DocumentRequires"
                },
                "minItems": 1,
                "insertionOrder": false
            },
            "UpdateMethod": {
                "description": "Update method - when set to 'Replace', the update will replace the existing document; when set to 'NewVersion', the update will create a new version.",
                "type": "string",
                "enum": [
                    "Replace",
                    "NewVersion"
                ],
                "default": "Replace"
            }
        }
    },
    "AWS::SSMIncidents::ResponsePlan": {
        "properties": {
            "Arn": {
                "description": "The ARN of the response plan.",
                "type": "string",
                "pattern": "^arn:aws(-(cn|us-gov))?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$",
                "maxLength": 1000
            },
            "Name": {
                "description": "The name of the response plan.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_-]*$",
                "maxLength": 200,
                "minLength": 1
            },
            "DisplayName": {
                "description": "The display name of the response plan.",
                "type": "string",
                "maxLength": 200,
                "minLength": 1
            },
            "ChatChannel": {
                "$ref": "#/definitions/ChatChannel"
            },
            "Engagements": {
                "description": "The list of engagements to use.",
                "type": "array",
                "default": [],
                "maxItems": 5,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/SSMContact"
                }
            },
            "Actions": {
                "description": "The list of actions.",
                "type": "array",
                "default": [],
                "uniqueItems": true,
                "insertionOrder": true,
                "maxItems": 1,
                "items": {
                    "$ref": "#/definitions/Action"
                }
            },
            "Integrations": {
                "description": "The list of integrations.",
                "type": "array",
                "default": [],
                "uniqueItems": true,
                "insertionOrder": true,
                "maxItems": 1,
                "items": {
                    "$ref": "#/definitions/Integration"
                }
            },
            "Tags": {
                "description": "The tags to apply to the response plan.",
                "type": "array",
                "default": [],
                "uniqueItems": true,
                "insertionOrder": false,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "IncidentTemplate": {
                "$ref": "#/definitions/IncidentTemplate"
            }
        }
    },
    "AWS::SSO::PermissionSet": {
        "properties": {
            "Name": {
                "description": "The name you want to assign to this permission set.",
                "type": "string",
                "pattern": "[\\w+=,.@-]+",
                "minLength": 1,
                "maxLength": 32
            },
            "PermissionSetArn": {
                "description": "The permission set that the policy will be attached to",
                "type": "string",
                "pattern": "arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::permissionSet/(sso)?ins-[a-zA-Z0-9-.]{16}/ps-[a-zA-Z0-9-./]{16}",
                "minLength": 10,
                "maxLength": 1224
            },
            "Description": {
                "description": "The permission set description.",
                "type": "string",
                "pattern": "[\\u0009\\u000A\\u000D\\u0020-\\u007E\\u00A1-\\u00FF]*",
                "minLength": 1,
                "maxLength": 700
            },
            "InstanceArn": {
                "description": "The sso instance arn that the permission set is owned.",
                "type": "string",
                "pattern": "arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}",
                "minLength": 10,
                "maxLength": 1224
            },
            "SessionDuration": {
                "description": "The length of time that a user can be signed in to an AWS account.",
                "type": "string",
                "pattern": "^(-?)P(?=\\d|T\\d)(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)([DW]))?(?:T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$",
                "minLength": 1,
                "maxLength": 100
            },
            "RelayStateType": {
                "description": "The relay state URL that redirect links to any service in the AWS Management Console.",
                "type": "string",
                "pattern": "[a-zA-Z0-9&amp;$@#\\/%?=~\\-_'&quot;|!:,.;*+\\[\\]\\ \\(\\)\\{\\}]+",
                "minLength": 1,
                "maxLength": 240
            },
            "ManagedPolicies": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/ManagedPolicyArn"
                },
                "maxItems": 20,
                "default": []
            },
            "InlinePolicy": {
                "description": "The inline policy to put in permission set.",
                "type": [
                    "object",
                    "string"
                ]
            },
            "Tags": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 50
            },
            "CustomerManagedPolicyReferences": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/CustomerManagedPolicyReference"
                },
                "maxItems": 20,
                "default": []
            },
            "PermissionsBoundary": {
                "$ref": "#/definitions/PermissionsBoundary"
            }
        }
    },
    "AWS::Synthetics::Canary": {
        "properties": {
            "Name": {
                "description": "Name of the canary.",
                "type": "string",
                "pattern": "^[0-9a-z_\\-]{1,21}$"
            },
            "Id": {
                "description": "Id of the canary",
                "type": "string"
            },
            "State": {
                "description": "State of the canary",
                "type": "string"
            },
            "Code": {
                "description": "Provide the canary script source",
                "$ref": "#/definitions/Code"
            },
            "ArtifactS3Location": {
                "description": "Provide the s3 bucket output location for test results",
                "type": "string",
                "pattern": "^(s3|S3)://"
            },
            "ArtifactConfig": {
                "description": "Provide artifact configuration",
                "$ref": "#/definitions/ArtifactConfig"
            },
            "Schedule": {
                "description": "Frequency to run your canaries",
                "$ref": "#/definitions/Schedule"
            },
            "ExecutionRoleArn": {
                "description": "Lambda Execution role used to run your canaries",
                "type": "string"
            },
            "RuntimeVersion": {
                "description": "Runtime version of Synthetics Library",
                "type": "string"
            },
            "SuccessRetentionPeriod": {
                "description": "Retention period of successful canary runs represented in number of days",
                "type": "integer"
            },
            "FailureRetentionPeriod": {
                "description": "Retention period of failed canary runs represented in number of days",
                "type": "integer"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "VPCConfig": {
                "description": "Provide VPC Configuration if enabled.",
                "$ref": "#/definitions/VPCConfig"
            },
            "RunConfig": {
                "description": "Provide canary run configuration",
                "$ref": "#/definitions/RunConfig"
            },
            "StartCanaryAfterCreation": {
                "description": "Runs canary if set to True. Default is False",
                "type": "boolean"
            },
            "VisualReference": {
                "description": "Visual reference configuration for visual testing",
                "$ref": "#/definitions/VisualReference"
            },
            "DeleteLambdaResourcesOnCanaryDeletion": {
                "description": "Deletes associated lambda resources created by Synthetics if set to True. Default is False",
                "type": "boolean"
            }
        }
    },
    "AWS::Synthetics::Group": {
        "properties": {
            "Name": {
                "description": "Name of the group.",
                "type": "string",
                "pattern": "^[0-9a-z_\\-]{1,64}$"
            },
            "Id": {
                "description": "Id of the group.",
                "type": "string"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 0
            },
            "ResourceArns": {
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/ResourceArn"
                },
                "maxItems": 10
            }
        }
    },
    "AWS::VoiceID::Domain": {
        "properties": {
            "Description": {
                "type": "string",
                "maxLength": 1024,
                "minLength": 1,
                "pattern": "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-%@]*)$"
            },
            "DomainId": {
                "type": "string",
                "maxLength": 22,
                "minLength": 22,
                "pattern": "^[a-zA-Z0-9]{22}$"
            },
            "Name": {
                "type": "string",
                "maxLength": 256,
                "minLength": 1,
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_-]*$"
            },
            "ServerSideEncryptionConfiguration": {
                "$ref": "#/definitions/ServerSideEncryptionConfiguration"
            },
            "Tags": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 200,
                "minItems": 0
            }
        }
    },
    "AWS::Amplify::Domain": {
        "properties": {
            "AppId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 20,
                "pattern": "d[a-z0-9]+"
            },
            "Arn": {
                "type": "string",
                "maxLength": 1000,
                "pattern": "(?s).*"
            },
            "AutoSubDomainCreationPatterns": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 2048,
                    "pattern": "(?s).+"
                }
            },
            "AutoSubDomainIAMRole": {
                "type": "string",
                "pattern": "^$|^arn:.+:iam::\\d{12}:role.+",
                "maxLength": 1000
            },
            "CertificateRecord": {
                "type": "string",
                "maxLength": 1000
            },
            "DomainName": {
                "type": "string",
                "pattern": "^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\\.)?$",
                "maxLength": 255
            },
            "DomainStatus": {
                "type": "string"
            },
            "EnableAutoSubDomain": {
                "type": "boolean"
            },
            "StatusReason": {
                "type": "string",
                "maxLength": 1000
            },
            "SubDomainSettings": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/SubDomainSetting"
                },
                "maxItems": 255
            }
        }
    },
    "AWS::Amplify::Branch": {
        "properties": {
            "AppId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 20,
                "pattern": "d[a-z0-9]+"
            },
            "Arn": {
                "type": "string",
                "maxLength": 1000,
                "pattern": "(?s).*"
            },
            "BasicAuthConfig": {
                "$ref": "#/definitions/BasicAuthConfig"
            },
            "BranchName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 255,
                "pattern": "(?s).+"
            },
            "BuildSpec": {
                "type": "string",
                "minLength": 1,
                "maxLength": 25000,
                "pattern": "(?s).+"
            },
            "Description": {
                "type": "string",
                "maxLength": 1000,
                "pattern": "(?s).*"
            },
            "EnableAutoBuild": {
                "type": "boolean"
            },
            "EnablePerformanceMode": {
                "type": "boolean"
            },
            "EnablePullRequestPreview": {
                "type": "boolean"
            },
            "EnvironmentVariables": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/EnvironmentVariable"
                }
            },
            "Framework": {
                "type": "string",
                "maxLength": 255,
                "pattern": "(?s).*"
            },
            "PullRequestEnvironmentName": {
                "type": "string",
                "maxLength": 20,
                "pattern": "(?s).*"
            },
            "Stage": {
                "type": "string",
                "enum": [
                    "EXPERIMENTAL",
                    "BETA",
                    "PULL_REQUEST",
                    "PRODUCTION",
                    "DEVELOPMENT"
                ]
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::APS::Workspace": {
        "properties": {
            "WorkspaceId": {
                "description": "Required to identify a specific APS Workspace.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_-]{1,99}$",
                "minLength": 1,
                "maxLength": 100
            },
            "Alias": {
                "description": "AMP Workspace alias.",
                "type": "string",
                "minLength": 0,
                "maxLength": 100
            },
            "Arn": {
                "description": "Workspace arn.",
                "type": "string",
                "pattern": "^arn:(aws|aws-us-gov|aws-cn):aps:[a-z0-9-]+:[0-9]+:workspace/[a-zA-Z0-9-]+$",
                "minLength": 1,
                "maxLength": 128
            },
            "AlertManagerDefinition": {
                "description": "The AMP Workspace alert manager definition data",
                "type": "string"
            },
            "PrometheusEndpoint": {
                "description": "AMP Workspace prometheus endpoint",
                "type": "string"
            },
            "LoggingConfiguration": {
                "$ref": "#/definitions/LoggingConfiguration"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::APS::RuleGroupsNamespace": {
        "properties": {
            "Workspace": {
                "description": "Required to identify a specific APS Workspace associated with this RuleGroupsNamespace.",
                "type": "string",
                "pattern": "^arn:(aws|aws-us-gov|aws-cn):aps:[a-z0-9-]+:[0-9]+:workspace/[a-zA-Z0-9-]+$"
            },
            "Name": {
                "description": "The RuleGroupsNamespace name.",
                "type": "string",
                "minLength": 1,
                "maxLength": 64
            },
            "Data": {
                "description": "The RuleGroupsNamespace data.",
                "type": "string"
            },
            "Arn": {
                "description": "The RuleGroupsNamespace ARN.",
                "type": "string",
                "pattern": "^arn:(aws|aws-us-gov|aws-cn):aps:[a-z0-9-]+:[0-9]+:rulegroupsnamespace/[a-zA-Z0-9-]+/[0-9A-Za-z][-.0-9A-Z_a-z]*$"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::CE::CostCategory": {
        "properties": {
            "Arn": {
                "description": "Cost category ARN",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:[a-z0-9]+:[-a-z0-9]*:[0-9]{12}:[-a-zA-Z0-9/:_]+$"
            },
            "EffectiveStart": {
                "$ref": "#/definitions/ZonedDateTime"
            },
            "Name": {
                "type": "string",
                "minLength": 1,
                "maxLength": 50
            },
            "RuleVersion": {
                "type": "string",
                "enum": [
                    "CostCategoryExpression.v1"
                ]
            },
            "Rules": {
                "type": "string",
                "description": "JSON array format of Expression in Billing and Cost Management API"
            },
            "SplitChargeRules": {
                "type": "string",
                "description": "Json array format of CostCategorySplitChargeRule in Billing and Cost Management API"
            },
            "DefaultValue": {
                "type": "string",
                "description": "The default value for the cost category",
                "minLength": 1,
                "maxLength": 50
            }
        }
    },
    "AWS::Chatbot::SlackChannelConfiguration": {
        "properties": {
            "SlackWorkspaceId": {
                "description": "The id of the Slack workspace",
                "type": "string",
                "pattern": "^[0-9A-Z]{1,255}$",
                "minLength": 1,
                "maxLength": 256
            },
            "SlackChannelId": {
                "description": "The id of the Slack channel",
                "type": "string",
                "pattern": "^[A-Za-z0-9]+$",
                "minLength": 1,
                "maxLength": 256
            },
            "ConfigurationName": {
                "description": "The name of the configuration",
                "type": "string",
                "pattern": "^[A-Za-z0-9-_]+$",
                "minLength": 1,
                "maxLength": 128
            },
            "IamRoleArn": {
                "description": "The ARN of the IAM role that defines the permissions for AWS Chatbot",
                "type": "string",
                "pattern": "^arn:(aws[a-zA-Z-]*)?:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$"
            },
            "SnsTopicArns": {
                "description": "ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "pattern": "^arn:(aws[a-zA-Z-]*)?:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$"
                }
            },
            "LoggingLevel": {
                "description": "Specifies the logging level for this configuration:ERROR,INFO or NONE. This property affects the log entries pushed to Amazon CloudWatch logs",
                "type": "string",
                "pattern": "^(ERROR|INFO|NONE)$",
                "default": "NONE"
            },
            "Arn": {
                "description": "Amazon Resource Name (ARN) of the configuration",
                "type": "string",
                "pattern": "^arn:(aws[a-zA-Z-]*)?:chatbot:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$"
            },
            "GuardrailPolicies": {
                "description": "The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "pattern": "^(^$|arn:aws:iam:[A-Za-z0-9_\\/.-]{0,63}:[A-Za-z0-9_\\/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_\\/+=,@.-]{0,1023})$"
                }
            },
            "UserRoleRequired": {
                "description": "Enables use of a user role requirement in your chat configuration",
                "type": "boolean",
                "default": false
            }
        }
    },
    "AWS::CloudFormation::HookDefaultVersion": {
        "properties": {
            "TypeVersionArn": {
                "description": "The Amazon Resource Name (ARN) of the type version.",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$",
                "type": "string"
            },
            "TypeName": {
                "description": "The name of the type being registered.\n\nWe recommend that type names adhere to the following pattern: company_or_organization::service::type.",
                "pattern": "^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$",
                "type": "string"
            },
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a HookDefaultVersion",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$",
                "type": "string"
            },
            "VersionId": {
                "description": "The ID of an existing version of the hook to set as the default.",
                "pattern": "^[A-Za-z0-9-]{1,128}$",
                "type": "string"
            }
        }
    },
    "AWS::CloudFormation::ModuleDefaultVersion": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the module version to set as the default version.",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/module/.+/[0-9]{8}$",
                "type": "string"
            },
            "ModuleName": {
                "description": "The name of a module existing in the registry.",
                "pattern": "^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::MODULE",
                "type": "string"
            },
            "VersionId": {
                "description": "The ID of an existing version of the named module to set as the default.",
                "pattern": "^[0-9]{8}$",
                "type": "string"
            }
        }
    },
    "AWS::CloudFormation::ModuleVersion": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the module.",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/module/.+$",
                "type": "string"
            },
            "Description": {
                "description": "The description of the registered module.",
                "maxLength": 1024,
                "minLength": 1,
                "type": "string"
            },
            "DocumentationUrl": {
                "description": "The URL of a page providing detailed documentation for this module.",
                "maxLength": 4096,
                "type": "string"
            },
            "ModuleName": {
                "description": "The name of the module being registered.\n\nRecommended module naming pattern: company_or_organization::service::type::MODULE.",
                "pattern": "^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::MODULE",
                "type": "string"
            },
            "ModulePackage": {
                "description": "The url to the S3 bucket containing the schema and template fragment for the module you want to register.",
                "type": "string"
            },
            "IsDefaultVersion": {
                "description": "Indicator of whether this module version is the current default version",
                "type": "boolean"
            },
            "Schema": {
                "description": "The schema defining input parameters to and resources generated by the module.",
                "maxLength": 16777216,
                "minLength": 1,
                "type": "string"
            },
            "TimeCreated": {
                "description": "The time that the specified module version was registered.",
                "type": "string"
            },
            "VersionId": {
                "description": "The version ID of the module represented by this module instance.",
                "pattern": "^[0-9]{8}$",
                "type": "string"
            },
            "Visibility": {
                "description": "The scope at which the type is visible and usable in CloudFormation operations.\n\nThe only allowed value at present is:\n\nPRIVATE: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you register as PRIVATE.",
                "enum": [
                    "PRIVATE"
                ],
                "type": "string"
            }
        }
    },
    "AWS::CloudFormation::PublicTypeVersion": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Number (ARN) of the extension.",
                "pattern": "arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:[0-9]{12}:type/.+",
                "type": "string"
            },
            "TypeVersionArn": {
                "description": "The Amazon Resource Number (ARN) of the extension with the versionId.",
                "pattern": "arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:[0-9]{12}:type/.+",
                "type": "string"
            },
            "PublicVersionNumber": {
                "description": "The version number of a public third-party extension",
                "type": "string",
                "minLength": 5,
                "maxLength": 64
            },
            "PublisherId": {
                "description": "The publisher id assigned by CloudFormation for publishing in this region.",
                "pattern": "[0-9a-zA-Z]{40}",
                "type": "string",
                "minLength": 1,
                "maxLength": 40
            },
            "PublicTypeArn": {
                "description": "The Amazon Resource Number (ARN) assigned to the public extension upon publication",
                "pattern": "arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+",
                "type": "string",
                "maxLength": 1024
            },
            "TypeName": {
                "description": "The name of the type being registered.\n\nWe recommend that type names adhere to the following pattern: company_or_organization::service::type.",
                "pattern": "[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}(::MODULE){0,1}",
                "type": "string"
            },
            "LogDeliveryBucket": {
                "description": "A url to the S3 bucket where logs for the testType run will be available",
                "type": "string"
            },
            "Type": {
                "description": "The kind of extension",
                "enum": [
                    "RESOURCE",
                    "MODULE",
                    "HOOK"
                ],
                "type": "string"
            }
        }
    },
    "AWS::CloudFormation::ResourceDefaultVersion": {
        "properties": {
            "TypeVersionArn": {
                "description": "The Amazon Resource Name (ARN) of the type version.",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/resource/.+$",
                "type": "string"
            },
            "TypeName": {
                "description": "The name of the type being registered.\n\nWe recommend that type names adhere to the following pattern: company_or_organization::service::type.",
                "pattern": "^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$",
                "type": "string"
            },
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a ResourceDefaultVersion",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/resource/.+$",
                "type": "string"
            },
            "VersionId": {
                "description": "The ID of an existing version of the resource to set as the default.",
                "pattern": "^[A-Za-z0-9-]{1,128}$",
                "type": "string"
            }
        }
    },
    "AWS::CloudFormation::ResourceVersion": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the type, here the ResourceVersion. This is used to uniquely identify a ResourceVersion resource",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/resource/.+$",
                "type": "string"
            },
            "TypeArn": {
                "description": "The Amazon Resource Name (ARN) of the type without the versionID.",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/resource/.+$",
                "type": "string"
            },
            "ExecutionRoleArn": {
                "description": "The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.",
                "type": "string"
            },
            "IsDefaultVersion": {
                "description": "Indicates if this type version is the current default version",
                "type": "boolean"
            },
            "LoggingConfig": {
                "$ref": "#/definitions/LoggingConfig",
                "description": "Specifies logging configuration information for a type."
            },
            "ProvisioningType": {
                "description": "The provisioning behavior of the type. AWS CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted.",
                "enum": [
                    "NON_PROVISIONABLE",
                    "IMMUTABLE",
                    "FULLY_MUTABLE"
                ],
                "type": "string"
            },
            "SchemaHandlerPackage": {
                "description": "A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.\n\nFor information on generating a schema handler package for the type you want to register, see submit in the CloudFormation CLI User Guide.",
                "type": "string"
            },
            "TypeName": {
                "description": "The name of the type being registered.\n\nWe recommend that type names adhere to the following pattern: company_or_organization::service::type.",
                "pattern": "^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$",
                "type": "string"
            },
            "VersionId": {
                "description": "The ID of the version of the type represented by this resource instance.",
                "pattern": "^[A-Za-z0-9-]{1,128}$",
                "type": "string"
            },
            "Visibility": {
                "description": "The scope at which the type is visible and usable in CloudFormation operations.\n\nValid values include:\n\nPRIVATE: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you register as PRIVATE.\n\nPUBLIC: The type is publically visible and usable within any Amazon account.",
                "enum": [
                    "PUBLIC",
                    "PRIVATE"
                ],
                "type": "string"
            }
        }
    },
    "AWS::CloudFormation::HookVersion": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the type, here the HookVersion. This is used to uniquely identify a HookVersion resource",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$",
                "type": "string"
            },
            "TypeArn": {
                "description": "The Amazon Resource Name (ARN) of the type without the versionID.",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$",
                "type": "string"
            },
            "ExecutionRoleArn": {
                "description": "The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.",
                "pattern": "arn:.+:iam::[0-9]{12}:role/.+",
                "maxLength": 256,
                "type": "string"
            },
            "IsDefaultVersion": {
                "description": "Indicates if this type version is the current default version",
                "type": "boolean"
            },
            "LoggingConfig": {
                "$ref": "#/definitions/LoggingConfig",
                "description": "Specifies logging configuration information for a type."
            },
            "SchemaHandlerPackage": {
                "description": "A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.\n\nFor information on generating a schema handler package for the type you want to register, see submit in the CloudFormation CLI User Guide.",
                "maxLength": 4096,
                "type": "string"
            },
            "TypeName": {
                "description": "The name of the type being registered.\n\nWe recommend that type names adhere to the following pattern: company_or_organization::service::type.",
                "pattern": "^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$",
                "type": "string"
            },
            "VersionId": {
                "description": "The ID of the version of the type represented by this hook instance.",
                "pattern": "^[A-Za-z0-9-]{1,128}$",
                "type": "string"
            },
            "Visibility": {
                "description": "The scope at which the type is visible and usable in CloudFormation operations.\n\nValid values include:\n\nPRIVATE: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you register as PRIVATE.\n\nPUBLIC: The type is publically visible and usable within any Amazon account.",
                "enum": [
                    "PUBLIC",
                    "PRIVATE"
                ],
                "type": "string"
            }
        }
    },
    "AWS::CloudFormation::TypeActivation": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the extension.",
                "pattern": "arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+",
                "type": "string"
            },
            "ExecutionRoleArn": {
                "description": "The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.",
                "type": "string"
            },
            "PublisherId": {
                "description": "The publisher id assigned by CloudFormation for publishing in this region.",
                "pattern": "[0-9a-zA-Z]{40}",
                "type": "string",
                "minLength": 1,
                "maxLength": 40
            },
            "LoggingConfig": {
                "$ref": "#/definitions/LoggingConfig",
                "description": "Specifies logging configuration information for a type."
            },
            "PublicTypeArn": {
                "description": "The Amazon Resource Number (ARN) assigned to the public extension upon publication",
                "pattern": "arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+",
                "type": "string",
                "maxLength": 1024
            },
            "AutoUpdate": {
                "description": "Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. Major versions released by the publisher must be manually updated.",
                "type": "boolean"
            },
            "TypeNameAlias": {
                "description": "An alias to assign to the public extension in this account and region. If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.",
                "pattern": "[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}(::MODULE){0,1}",
                "type": "string",
                "minLength": 10,
                "maxLength": 204
            },
            "VersionBump": {
                "description": "Manually updates a previously-enabled type to a new major or minor version, if available. You can also use this parameter to update the value of AutoUpdateEnabled",
                "type": "string",
                "enum": [
                    "MAJOR",
                    "MINOR"
                ]
            },
            "MajorVersion": {
                "description": "The Major Version of the type you want to enable",
                "type": "string",
                "minLength": 1,
                "maxLength": 100000
            },
            "TypeName": {
                "description": "The name of the type being registered.\n\nWe recommend that type names adhere to the following pattern: company_or_organization::service::type.",
                "pattern": "[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}(::MODULE){0,1}",
                "type": "string"
            },
            "Type": {
                "description": "The kind of extension",
                "enum": [
                    "RESOURCE",
                    "MODULE",
                    "HOOK"
                ],
                "type": "string"
            }
        }
    },
    "AWS::Connect::Instance": {
        "properties": {
            "Id": {
                "description": "An instanceId is automatically generated on creation and assigned as the unique identifier.",
                "type": "string"
            },
            "Arn": {
                "description": "An instanceArn is automatically generated on creation based on instanceId.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$"
            },
            "IdentityManagementType": {
                "description": "Specifies the type of directory integration for new instance.",
                "type": "string",
                "enum": [
                    "SAML",
                    "CONNECT_MANAGED",
                    "EXISTING_DIRECTORY"
                ]
            },
            "InstanceAlias": {
                "description": "Alias of the new directory created as part of new instance creation.",
                "type": "string",
                "pattern": "^(?!d-)([\\da-zA-Z]+)([-]*[\\da-zA-Z])*$",
                "minLength": 1,
                "maxLength": 62
            },
            "CreatedTime": {
                "description": "Timestamp of instance creation logged as part of instance creation.",
                "type": "string",
                "format": "date-time"
            },
            "ServiceRole": {
                "description": "Service linked role created as part of instance creation.",
                "type": "string"
            },
            "InstanceStatus": {
                "description": "Specifies the creation status of new instance.",
                "type": "string",
                "enum": [
                    "CREATION_IN_PROGRESS",
                    "CREATION_FAILED",
                    "ACTIVE"
                ]
            },
            "DirectoryId": {
                "description": "Existing directoryId user wants to map to the new Connect instance.",
                "type": "string",
                "pattern": "^d-[0-9a-f]{10}$",
                "minLength": 12,
                "maxLength": 12
            },
            "Attributes": {
                "description": "The attributes for the instance.",
                "$ref": "#/definitions/Attributes"
            }
        }
    },
    "AWS::Connect::TaskTemplate": {
        "properties": {
            "Arn": {
                "description": "The identifier (arn) of the task template.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*/task-template/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$"
            },
            "InstanceArn": {
                "description": "The identifier (arn) of the instance.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$"
            },
            "Name": {
                "description": "The name of the task template.",
                "type": "string",
                "minLength": 1,
                "maxLength": 100
            },
            "Description": {
                "description": "The description of the task template.",
                "type": "string",
                "minLength": 0,
                "maxLength": 255
            },
            "ContactFlowArn": {
                "description": "The identifier of the contact flow.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*/contact-flow/[-a-zA-Z0-9]*$"
            },
            "Constraints": {
                "description": "The constraints for the task template",
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "InvisibleFields": {
                        "$ref": "#/definitions/InvisibleTaskTemplateFields"
                    },
                    "RequiredFields": {
                        "$ref": "#/definitions/RequiredTaskTemplateFields"
                    },
                    "ReadOnlyFields": {
                        "$ref": "#/definitions/ReadOnlyTaskTemplateFields"
                    }
                }
            },
            "Defaults": {
                "description": "",
                "type": "array",
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/DefaultFieldValue"
                }
            },
            "Fields": {
                "description": "The list of task template's fields",
                "type": "array",
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Field"
                }
            },
            "Status": {
                "$ref": "#/definitions/Status"
            },
            "ClientToken": {
                "$ref": "#/definitions/ClientToken"
            },
            "Tags": {
                "description": "One or more tags.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::ConnectCampaigns::Campaign": {
        "properties": {
            "ConnectInstanceArn": {
                "type": "string",
                "maxLength": 256,
                "minLength": 0,
                "description": "Amazon Connect Instance Arn",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$"
            },
            "DialerConfig": {
                "$ref": "#/definitions/DialerConfig"
            },
            "Arn": {
                "type": "string",
                "maxLength": 256,
                "minLength": 0,
                "description": "Amazon Connect Campaign Arn",
                "pattern": "^arn:aws[-a-z0-9]*:connect-campaigns:[-a-z0-9]*:[0-9]{12}:campaign/[-a-zA-Z0-9]*$"
            },
            "Name": {
                "type": "string",
                "maxLength": 127,
                "minLength": 1,
                "description": "Amazon Connect Campaign Name"
            },
            "OutboundCallConfig": {
                "$ref": "#/definitions/OutboundCallConfig"
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "description": "One or more tags.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Forecast::Dataset": {
        "properties": {
            "Arn": {
                "type": "string",
                "maxLength": 256,
                "pattern": "^[a-zA-Z0-9\\-\\_\\.\\/\\:]+$"
            },
            "DatasetName": {
                "description": "A name for the dataset",
                "type": "string",
                "minLength": 1,
                "maxLength": 63,
                "pattern": "^[a-zA-Z][a-zA-Z0-9_]*"
            },
            "DatasetType": {
                "description": "The dataset type",
                "type": "string",
                "enum": [
                    "TARGET_TIME_SERIES",
                    "RELATED_TIME_SERIES",
                    "ITEM_METADATA"
                ]
            },
            "DataFrequency": {
                "description": "Frequency of data collection. This parameter is required for RELATED_TIME_SERIES",
                "type": "string",
                "pattern": "^Y|M|W|D|H|30min|15min|10min|5min|1min$"
            },
            "Domain": {
                "description": "The domain associated with the dataset",
                "type": "string",
                "enum": [
                    "RETAIL",
                    "CUSTOM",
                    "INVENTORY_PLANNING",
                    "EC2_CAPACITY",
                    "WORK_FORCE",
                    "WEB_TRAFFIC",
                    "METRICS"
                ]
            },
            "EncryptionConfig": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "KmsKeyArn": {
                        "$ref": "#/definitions/KmsKeyArn"
                    },
                    "RoleArn": {
                        "$ref": "#/definitions/RoleArn"
                    }
                }
            },
            "Schema": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "Attributes": {
                        "$ref": "#/definitions/Attributes"
                    }
                }
            },
            "Tags": {
                "type": "array",
                "insertionOrder": true,
                "items": {
                    "description": "A key-value pair to associate with a resource.",
                    "type": "object",
                    "properties": {
                        "Key": {
                            "$ref": "#/definitions/Key"
                        },
                        "Value": {
                            "$ref": "#/definitions/Value"
                        }
                    },
                    "required": [
                        "Key",
                        "Value"
                    ],
                    "additionalProperties": false
                },
                "minItems": 0,
                "maxItems": 200
            }
        }
    },
    "AWS::Glue::Registry": {
        "properties": {
            "Arn": {
                "description": "Amazon Resource Name for the created Registry.",
                "type": "string",
                "pattern": "arn:(aws|aws-us-gov|aws-cn):glue:.*"
            },
            "Name": {
                "description": "Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark.  No whitespace.",
                "type": "string",
                "maxLength": 255,
                "minLength": 1
            },
            "Description": {
                "description": "A description of the registry. If description is not provided, there will not be any default value for this.",
                "type": "string",
                "maxLength": 1000,
                "minLength": 0
            },
            "Tags": {
                "description": "List of tags to tag the Registry",
                "type": "array",
                "minItems": 0,
                "maxItems": 10,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Glue::Schema": {
        "properties": {
            "Arn": {
                "description": "Amazon Resource Name for the Schema.",
                "type": "string",
                "pattern": "arn:(aws|aws-us-gov|aws-cn):glue:.*"
            },
            "Registry": {
                "$ref": "#/definitions/Registry"
            },
            "Name": {
                "description": "Name of the schema.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "Description": {
                "description": "A description of the schema. If description is not provided, there will not be any default value for this.",
                "type": "string",
                "minLength": 0,
                "maxLength": 1000
            },
            "DataFormat": {
                "description": "Data format name to use for the schema. Accepted values: 'AVRO', 'JSON', 'PROTOBUF'",
                "type": "string",
                "enum": [
                    "AVRO",
                    "JSON",
                    "PROTOBUF"
                ]
            },
            "Compatibility": {
                "description": "Compatibility setting for the schema.",
                "type": "string",
                "enum": [
                    "NONE",
                    "DISABLED",
                    "BACKWARD",
                    "BACKWARD_ALL",
                    "FORWARD",
                    "FORWARD_ALL",
                    "FULL",
                    "FULL_ALL"
                ]
            },
            "SchemaDefinition": {
                "description": "Definition for the initial schema version in plain-text.",
                "type": "string",
                "minLength": 1,
                "maxLength": 170000
            },
            "CheckpointVersion": {
                "$ref": "#/definitions/SchemaVersion"
            },
            "Tags": {
                "description": "List of tags to tag the schema",
                "type": "array",
                "minItems": 0,
                "maxItems": 10,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "InitialSchemaVersionId": {
                "type": "string",
                "description": "Represents the version ID associated with the initial schema version.",
                "pattern": "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}"
            }
        }
    },
    "AWS::IoTTwinMaker::ComponentType": {
        "properties": {
            "WorkspaceId": {
                "description": "The ID of the workspace that contains the component type.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z_0-9][a-zA-Z_\\-0-9]*[a-zA-Z0-9]+"
            },
            "ComponentTypeId": {
                "description": "The ID of the component type.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "[a-zA-Z_\\.\\-0-9:]+"
            },
            "Description": {
                "description": "The description of the component type.",
                "type": "string",
                "minLength": 0,
                "maxLength": 512
            },
            "ExtendsFrom": {
                "description": "Specifies the parent component type to extend.",
                "type": "array",
                "minItems": 1,
                "maxItems": 256,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/ParentComponentType"
                }
            },
            "Functions": {
                "description": "a Map of functions in the component type. Each function's key must be unique to this map.",
                "type": "object",
                "additionalProperties": false,
                "patternProperties": {
                    "[a-zA-Z_\\-0-9]+": {
                        "$ref": "#/definitions/Function"
                    }
                }
            },
            "IsSingleton": {
                "description": "A Boolean value that specifies whether an entity can have more than one component of this type.\n\n",
                "type": "boolean"
            },
            "PropertyDefinitions": {
                "description": "An map of the property definitions in the component type. Each property definition's key must be unique to this map.",
                "type": "object",
                "patternProperties": {
                    "[a-zA-Z_\\-0-9]+": {
                        "$ref": "#/definitions/PropertyDefinition"
                    }
                },
                "additionalProperties": false
            },
            "PropertyGroups": {
                "description": "An map of the property groups in the component type. Each property group's key must be unique to this map.",
                "type": "object",
                "patternProperties": {
                    "[a-zA-Z_\\-0-9]+": {
                        "$ref": "#/definitions/PropertyGroup"
                    }
                },
                "additionalProperties": false
            },
            "Arn": {
                "description": "The ARN of the component type.",
                "type": "string",
                "minLength": 20,
                "maxLength": 2048,
                "pattern": "arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:[a-z0-9-]+:[0-9]{12}:[\\/a-zA-Z0-9_\\-\\.:]+"
            },
            "CreationDateTime": {
                "description": "The date and time when the component type was created.",
                "$ref": "#/definitions/DateTimeFormat"
            },
            "UpdateDateTime": {
                "description": "The last date and time when the component type was updated.",
                "$ref": "#/definitions/DateTimeFormat"
            },
            "Status": {
                "description": "The current status of the component type.",
                "$ref": "#/definitions/Status"
            },
            "IsAbstract": {
                "description": "A Boolean value that specifies whether the component type is abstract.",
                "type": "boolean"
            },
            "IsSchemaInitialized": {
                "description": "A Boolean value that specifies whether the component type has a schema initializer and that the schema initializer has run.",
                "type": "boolean"
            },
            "Tags": {
                "type": "object",
                "description": "A map of key-value pairs to associate with a resource.",
                "patternProperties": {
                    "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 256
                    }
                },
                "maxProperties": 50,
                "additionalProperties": false
            }
        }
    },
    "AWS::IoTTwinMaker::Scene": {
        "properties": {
            "SceneId": {
                "description": "The ID of the scene.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z_0-9][a-zA-Z_\\-0-9]*[a-zA-Z0-9]+"
            },
            "Arn": {
                "description": "The ARN of the scene.",
                "type": "string",
                "minLength": 20,
                "maxLength": 2048,
                "pattern": "arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:[a-z0-9-]+:[0-9]{12}:[\\/a-zA-Z0-9_\\-\\.:]+"
            },
            "Description": {
                "description": "The description of the scene.",
                "type": "string",
                "minLength": 0,
                "maxLength": 512
            },
            "ContentLocation": {
                "description": "The relative path that specifies the location of the content definition file.",
                "type": "string",
                "minLength": 0,
                "maxLength": 256,
                "pattern": "[sS]3://[A-Za-z0-9._/-]+"
            },
            "CreationDateTime": {
                "description": "The date and time when the scene was created.",
                "$ref": "#/definitions/DateTimeFormat"
            },
            "UpdateDateTime": {
                "description": "The date and time of the current update.",
                "$ref": "#/definitions/DateTimeFormat"
            },
            "Tags": {
                "type": "object",
                "description": "A key-value pair to associate with a resource.",
                "patternProperties": {
                    "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 256
                    }
                },
                "additionalProperties": false
            },
            "WorkspaceId": {
                "description": "The ID of the scene.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z_0-9][a-zA-Z_\\-0-9]*[a-zA-Z0-9]+"
            },
            "Capabilities": {
                "description": "A list of capabilities that the scene uses to render.",
                "type": "array",
                "minItems": 0,
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "minLength": 0,
                    "maxLength": 256,
                    "pattern": ".*"
                }
            }
        }
    },
    "AWS::IoTTwinMaker::Entity": {
        "properties": {
            "EntityId": {
                "description": "The ID of the entity.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|^[a-zA-Z0-9][a-zA-Z_\\-0-9.:]*[a-zA-Z0-9]+"
            },
            "EntityName": {
                "description": "The name of the entity.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "[a-zA-Z_0-9-.][a-zA-Z_0-9-. ]*[a-zA-Z0-9]+"
            },
            "Status": {
                "description": "The current status of the entity.",
                "$ref": "#/definitions/Status"
            },
            "HasChildEntities": {
                "description": "A Boolean value that specifies whether the entity has child entities or not.",
                "type": "boolean"
            },
            "ParentEntityId": {
                "description": "The ID of the parent entity.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "\\$ROOT|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|^[a-zA-Z0-9][a-zA-Z_\\-0-9.:]*[a-zA-Z0-9]+"
            },
            "Arn": {
                "description": "The ARN of the entity.",
                "type": "string",
                "minLength": 20,
                "maxLength": 2048,
                "pattern": "arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:[a-z0-9-]+:[0-9]{12}:[\\/a-zA-Z0-9_\\-\\.:]+"
            },
            "Description": {
                "description": "The description of the entity.",
                "type": "string",
                "minLength": 0,
                "maxLength": 512
            },
            "CreationDateTime": {
                "description": "The date and time when the entity was created.",
                "$ref": "#/definitions/DateTimeFormat"
            },
            "UpdateDateTime": {
                "description": "The last date and time when the entity was updated.",
                "$ref": "#/definitions/DateTimeFormat"
            },
            "Tags": {
                "type": "object",
                "description": "A key-value pair to associate with a resource.",
                "patternProperties": {
                    "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 256
                    }
                },
                "additionalProperties": false
            },
            "WorkspaceId": {
                "description": "The ID of the workspace.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z_0-9][a-zA-Z_\\-0-9]*[a-zA-Z0-9]+"
            },
            "Components": {
                "description": "A map that sets information about a component type.",
                "type": "object",
                "patternProperties": {
                    "[a-zA-Z_\\-0-9]+": {
                        "$ref": "#/definitions/Component"
                    }
                },
                "additionalProperties": false
            }
        }
    },
    "AWS::IoTTwinMaker::SyncJob": {
        "properties": {
            "WorkspaceId": {
                "description": "The ID of the workspace.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z_0-9][a-zA-Z_\\-0-9]*[a-zA-Z0-9]+"
            },
            "SyncSource": {
                "description": "The source of the SyncJob.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128
            },
            "SyncRole": {
                "description": "The IAM Role that execute SyncJob.",
                "type": "string",
                "minLength": 20,
                "maxLength": 2048,
                "pattern": "arn:((aws)|(aws-cn)|(aws-us-gov)):iam::[0-9]{12}:role/.*"
            },
            "CreationDateTime": {
                "description": "The date and time when the sync job was created.",
                "$ref": "#/definitions/DateTimeFormat"
            },
            "UpdateDateTime": {
                "description": "The date and time when the sync job was updated.",
                "$ref": "#/definitions/DateTimeFormat"
            },
            "Arn": {
                "description": "The ARN of the SyncJob.",
                "type": "string",
                "minLength": 20,
                "maxLength": 2048,
                "pattern": "arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:[a-z0-9-]+:[0-9]{12}:[\\/a-zA-Z0-9_\\-\\.:]+"
            },
            "State": {
                "description": "The state of SyncJob.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z_\\-0-9]+"
            },
            "Tags": {
                "type": "object",
                "description": "A key-value pair to associate with a resource.",
                "patternProperties": {
                    "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 256
                    }
                },
                "additionalProperties": false
            }
        }
    },
    "AWS::IoTTwinMaker::Workspace": {
        "properties": {
            "WorkspaceId": {
                "description": "The ID of the workspace.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z_0-9][a-zA-Z_\\-0-9]*[a-zA-Z0-9]+"
            },
            "Arn": {
                "description": "The ARN of the workspace.",
                "type": "string",
                "minLength": 20,
                "maxLength": 2048,
                "pattern": "arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:[a-z0-9-]+:[0-9]{12}:[\\/a-zA-Z0-9_\\-\\.:]+"
            },
            "Description": {
                "description": "The description of the workspace.",
                "type": "string",
                "minLength": 0,
                "maxLength": 512
            },
            "Role": {
                "description": "The ARN of the execution role associated with the workspace.",
                "type": "string",
                "minLength": 20,
                "maxLength": 2048,
                "pattern": "arn:((aws)|(aws-cn)|(aws-us-gov)):iam::[0-9]{12}:role/.*"
            },
            "S3Location": {
                "description": "The ARN of the S3 bucket where resources associated with the workspace are stored.",
                "type": "string"
            },
            "CreationDateTime": {
                "description": "The date and time when the workspace was created.",
                "$ref": "#/definitions/DateTimeFormat"
            },
            "UpdateDateTime": {
                "description": "The date and time of the current update.",
                "$ref": "#/definitions/DateTimeFormat"
            },
            "Tags": {
                "type": "object",
                "description": "A map of key-value pairs to associate with a resource.",
                "patternProperties": {
                    "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 256
                    }
                },
                "maxProperties": 50,
                "additionalProperties": false
            }
        }
    },
    "AWS::IVS::StreamKey": {
        "properties": {
            "Arn": {
                "description": "Stream Key ARN is automatically generated on creation and assigned as the unique identifier.",
                "type": "string",
                "pattern": "^arn:aws:ivs:[a-z0-9-]+:[0-9]+:stream-key/[a-zA-Z0-9-]+$",
                "minLength": 1,
                "maxLength": 128
            },
            "ChannelArn": {
                "description": "Channel ARN for the stream.",
                "type": "string",
                "pattern": "^arn:aws:ivs:[a-z0-9-]+:[0-9]+:channel/[a-zA-Z0-9-]+$"
            },
            "Tags": {
                "description": "A list of key-value pairs that contain metadata for the asset model.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Value": {
                "description": "Stream-key value.",
                "type": "string"
            }
        }
    },
    "AWS::Location::Map": {
        "properties": {
            "Configuration": {
                "$ref": "#/definitions/MapConfiguration"
            },
            "CreateTime": {
                "$ref": "#/definitions/iso8601UTC"
            },
            "DataSource": {
                "type": "string"
            },
            "Description": {
                "type": "string",
                "maxLength": 1000,
                "minLength": 0
            },
            "MapArn": {
                "type": "string",
                "maxLength": 1600,
                "pattern": "^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$"
            },
            "Arn": {
                "type": "string",
                "maxLength": 1600,
                "pattern": "^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$"
            },
            "MapName": {
                "type": "string",
                "maxLength": 100,
                "minLength": 1,
                "pattern": "^[-._\\w]+$"
            },
            "PricingPlan": {
                "$ref": "#/definitions/PricingPlan"
            },
            "UpdateTime": {
                "$ref": "#/definitions/iso8601UTC"
            }
        }
    },
    "AWS::Location::GeofenceCollection": {
        "properties": {
            "CollectionArn": {
                "type": "string",
                "maxLength": 1600,
                "pattern": "^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$"
            },
            "Arn": {
                "type": "string",
                "maxLength": 1600,
                "pattern": "^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$"
            },
            "CollectionName": {
                "type": "string",
                "maxLength": 100,
                "minLength": 1,
                "pattern": "^[-._\\w]+$"
            },
            "CreateTime": {
                "$ref": "#/definitions/iso8601UTC"
            },
            "Description": {
                "type": "string",
                "maxLength": 1000,
                "minLength": 0
            },
            "KmsKeyId": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1
            },
            "PricingPlan": {
                "$ref": "#/definitions/PricingPlan"
            },
            "PricingPlanDataSource": {
                "type": "string"
            },
            "UpdateTime": {
                "$ref": "#/definitions/iso8601UTC"
            }
        }
    },
    "AWS::Location::PlaceIndex": {
        "properties": {
            "CreateTime": {
                "$ref": "#/definitions/iso8601UTC"
            },
            "DataSource": {
                "type": "string"
            },
            "DataSourceConfiguration": {
                "$ref": "#/definitions/DataSourceConfiguration"
            },
            "Description": {
                "type": "string",
                "maxLength": 1000,
                "minLength": 0
            },
            "IndexArn": {
                "type": "string",
                "maxLength": 1600,
                "pattern": "^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$"
            },
            "Arn": {
                "type": "string",
                "maxLength": 1600,
                "pattern": "^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$"
            },
            "IndexName": {
                "type": "string",
                "maxLength": 100,
                "minLength": 1,
                "pattern": "^[-._\\w]+$"
            },
            "PricingPlan": {
                "$ref": "#/definitions/PricingPlan"
            },
            "UpdateTime": {
                "$ref": "#/definitions/iso8601UTC"
            }
        }
    },
    "AWS::Location::Tracker": {
        "properties": {
            "CreateTime": {
                "$ref": "#/definitions/iso8601UTC"
            },
            "Description": {
                "type": "string",
                "maxLength": 1000,
                "minLength": 0
            },
            "KmsKeyId": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1
            },
            "PricingPlan": {
                "$ref": "#/definitions/PricingPlan"
            },
            "PricingPlanDataSource": {
                "type": "string"
            },
            "PositionFiltering": {
                "$ref": "#/definitions/PositionFiltering"
            },
            "TrackerArn": {
                "type": "string",
                "maxLength": 1600,
                "pattern": "^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$"
            },
            "Arn": {
                "type": "string",
                "maxLength": 1600,
                "pattern": "^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$"
            },
            "TrackerName": {
                "type": "string",
                "maxLength": 100,
                "minLength": 1,
                "pattern": "^[-._\\w]+$"
            },
            "UpdateTime": {
                "$ref": "#/definitions/iso8601UTC"
            }
        }
    },
    "AWS::Location::RouteCalculator": {
        "properties": {
            "CalculatorArn": {
                "type": "string",
                "maxLength": 1600,
                "pattern": "^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$"
            },
            "Arn": {
                "type": "string",
                "maxLength": 1600,
                "pattern": "^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$"
            },
            "CalculatorName": {
                "type": "string",
                "maxLength": 100,
                "minLength": 1,
                "pattern": "^[-._\\w]+$"
            },
            "CreateTime": {
                "$ref": "#/definitions/iso8601UTC"
            },
            "DataSource": {
                "type": "string"
            },
            "Description": {
                "type": "string",
                "maxLength": 1000,
                "minLength": 0
            },
            "PricingPlan": {
                "$ref": "#/definitions/PricingPlan"
            },
            "UpdateTime": {
                "$ref": "#/definitions/iso8601UTC"
            }
        }
    },
    "AWS::Organizations::Account": {
        "properties": {
            "AccountName": {
                "description": "The friendly name of the member account.",
                "type": "string",
                "pattern": "[\\u0020-\\u007E]+",
                "minLength": 1,
                "maxLength": 50
            },
            "Email": {
                "description": "The email address of the owner to assign to the new member account.",
                "type": "string",
                "pattern": "[^\\s@]+@[^\\s@]+\\.[^\\s@]+",
                "minLength": 6,
                "maxLength": 64
            },
            "RoleName": {
                "description": "The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. Default name is OrganizationAccountAccessRole if not specified.",
                "type": "string",
                "default": "OrganizationAccountAccessRole",
                "pattern": "[\\w+=,.@-]{1,64}",
                "minLength": 1,
                "maxLength": 64
            },
            "ParentIds": {
                "description": "List of parent nodes for the member account. Currently only one parent at a time is supported. Default is root.",
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "type": "string",
                    "pattern": "^(r-[0-9a-z]{4,32})|(ou-[0-9a-z]{4,32}-[a-z0-9]{8,32})$"
                }
            },
            "Tags": {
                "description": "A list of tags that you want to attach to the newly created account. For each tag in the list, you must specify both a tag key and a value.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "AccountId": {
                "description": "If the account was created successfully, the unique identifier (ID) of the new account.",
                "type": "string",
                "pattern": "^\\d{12}$",
                "maxLength": 12
            },
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the account.",
                "type": "string",
                "pattern": "^arn:aws.*:organizations::\\d{12}:account\\/o-[a-z0-9]{10,32}\\/\\d{12}"
            },
            "JoinedMethod": {
                "description": "The method by which the account joined the organization.",
                "type": "string",
                "enum": [
                    "INVITED",
                    "CREATED"
                ]
            },
            "JoinedTimestamp": {
                "description": "The date the account became a part of the organization.",
                "type": "string"
            },
            "Status": {
                "description": "The status of the account in the organization.",
                "type": "string",
                "enum": [
                    "ACTIVE",
                    "SUSPENDED",
                    "PENDING_CLOSURE"
                ]
            }
        }
    },
    "AWS::RefactorSpaces::Route": {
        "properties": {
            "PathResourceToId": {
                "type": "string"
            },
            "Arn": {
                "type": "string",
                "minLength": 20,
                "maxLength": 2048,
                "pattern": "^arn:(aws[a-zA-Z-]*)?:refactor-spaces:[a-zA-Z0-9\\-]+:\\w{12}:[a-zA-Z_0-9+=,.@\\-_/]+$"
            },
            "ApplicationIdentifier": {
                "type": "string",
                "maxLength": 14,
                "minLength": 14,
                "pattern": "^app-([0-9A-Za-z]{10}$)"
            },
            "EnvironmentIdentifier": {
                "type": "string",
                "maxLength": 14,
                "minLength": 14,
                "pattern": "^env-([0-9A-Za-z]{10}$)"
            },
            "RouteIdentifier": {
                "type": "string",
                "maxLength": 14,
                "minLength": 14,
                "pattern": "^rte-([0-9A-Za-z]{10}$)"
            },
            "RouteType": {
                "$ref": "#/definitions/RouteType"
            },
            "ServiceIdentifier": {
                "type": "string",
                "maxLength": 14,
                "minLength": 14,
                "pattern": "^svc-([0-9A-Za-z]{10}$)"
            },
            "DefaultRoute": {
                "$ref": "#/definitions/DefaultRouteInput"
            },
            "UriPathRoute": {
                "$ref": "#/definitions/UriPathRouteInput"
            },
            "Tags": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "description": "Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair."
            }
        }
    },
    "AWS::S3Outposts::Bucket": {
        "properties": {
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the specified bucket.",
                "maxLength": 2048,
                "minLength": 20,
                "pattern": "^arn:[^:]+:s3-outposts:[a-zA-Z0-9\\-]+:\\d{12}:outpost\\/[^:]+\\/bucket\\/[^:]+$",
                "type": "string"
            },
            "BucketName": {
                "description": "A name for the bucket.",
                "maxLength": 63,
                "minLength": 3,
                "pattern": "(?=^.{3,63}$)(?!^(\\d+\\.)+\\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9\\-]*[a-z0-9])\\.)*([a-z0-9]|[a-z0-9][a-z0-9\\-]*[a-z0-9])$)",
                "type": "string"
            },
            "OutpostId": {
                "description": "The id of the customer outpost on which the bucket resides.",
                "pattern": "^(op-[a-f0-9]{17}|\\d{12}|ec2)$",
                "type": "string"
            },
            "Tags": {
                "description": "An arbitrary set of tags (key-value pairs) for this S3Outposts bucket.",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true
            },
            "LifecycleConfiguration": {
                "description": "Rules that define how Amazon S3Outposts manages objects during their lifetime.",
                "$ref": "#/definitions/LifecycleConfiguration"
            }
        }
    },
    "AWS::Transfer::Agreement": {
        "properties": {
            "Description": {
                "description": "A textual description for the agreement.",
                "type": "string",
                "pattern": "^[\\w\\- ]*$",
                "minLength": 1,
                "maxLength": 200
            },
            "ServerId": {
                "description": "A unique identifier for the server.",
                "type": "string",
                "pattern": "^s-([0-9a-f]{17})$",
                "minLength": 19,
                "maxLength": 19
            },
            "LocalProfileId": {
                "description": "A unique identifier for the local profile.",
                "type": "string",
                "pattern": "^p-([0-9a-f]{17})$",
                "minLength": 19,
                "maxLength": 19
            },
            "PartnerProfileId": {
                "description": "A unique identifier for the partner profile.",
                "type": "string",
                "pattern": "^p-([0-9a-f]{17})$",
                "minLength": 19,
                "maxLength": 19
            },
            "BaseDirectory": {
                "description": "Specifies the base directory for the agreement.",
                "type": "string",
                "pattern": "^$|/.*",
                "maxLength": 1024
            },
            "AccessRole": {
                "description": "Specifies the access role for the agreement.",
                "type": "string",
                "pattern": "arn:.*role/.*",
                "minLength": 20,
                "maxLength": 2048
            },
            "Status": {
                "description": "Specifies the status of the agreement.",
                "type": "string",
                "enum": [
                    "ACTIVE",
                    "INACTIVE"
                ]
            },
            "Tags": {
                "description": "Key-value pairs that can be used to group and search for agreements. Tags are metadata attached to agreements for any purpose.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "AgreementId": {
                "description": "A unique identifier for the agreement.",
                "type": "string",
                "pattern": "^a-([0-9a-f]{17})$",
                "minLength": 19,
                "maxLength": 19
            },
            "Arn": {
                "description": "Specifies the unique Amazon Resource Name (ARN) for the agreement.",
                "type": "string",
                "pattern": "arn:.*",
                "minLength": 20,
                "maxLength": 1600
            }
        }
    },
    "AWS::Transfer::Certificate": {
        "properties": {
            "Usage": {
                "description": "Specifies the usage type for the certificate.",
                "type": "string",
                "enum": [
                    "SIGNING",
                    "ENCRYPTION"
                ]
            },
            "Certificate": {
                "description": "Specifies the certificate body to be imported.",
                "type": "string",
                "pattern": "^[\t\n\r -\u00ff]*",
                "minLength": 1,
                "maxLength": 16384
            },
            "CertificateChain": {
                "description": "Specifies the certificate chain to be imported.",
                "type": "string",
                "pattern": "^[\t\n\r -\u00ff]*",
                "minLength": 1,
                "maxLength": 2097152
            },
            "PrivateKey": {
                "description": "Specifies the private key for the certificate.",
                "type": "string",
                "pattern": "^[\t\n\r -\u00ff]*",
                "minLength": 1,
                "maxLength": 16384
            },
            "ActiveDate": {
                "description": "Specifies the active date for the certificate.",
                "type": "string"
            },
            "InactiveDate": {
                "description": "Specifies the inactive date for the certificate.",
                "type": "string"
            },
            "Description": {
                "description": "A textual description for the certificate.",
                "type": "string",
                "pattern": "^[\\w\\- ]*$",
                "minLength": 1,
                "maxLength": 200
            },
            "Tags": {
                "description": "Key-value pairs that can be used to group and search for certificates. Tags are metadata attached to certificates for any purpose.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Arn": {
                "description": "Specifies the unique Amazon Resource Name (ARN) for the agreement.",
                "type": "string",
                "pattern": "arn:.*",
                "minLength": 20,
                "maxLength": 1600
            },
            "CertificateId": {
                "description": "A unique identifier for the certificate.",
                "type": "string",
                "pattern": "^cert-([0-9a-f]{17})$",
                "minLength": 22,
                "maxLength": 22
            },
            "Status": {
                "description": "A status description for the certificate.",
                "type": "string",
                "enum": [
                    "ACTIVE",
                    "PENDING",
                    "INACTIVE"
                ]
            },
            "Type": {
                "description": "Describing the type of certificate. With or without a private key.",
                "type": "string",
                "enum": [
                    "CERTIFICATE",
                    "CERTIFICATE_WITH_PRIVATE_KEY"
                ]
            },
            "Serial": {
                "description": "Specifies Certificate's serial.",
                "type": "string",
                "pattern": "^[\\p{XDigit}{2}:?]*",
                "minLength": 0,
                "maxLength": 48
            },
            "NotBeforeDate": {
                "description": "Specifies the not before date for the certificate.",
                "type": "string"
            },
            "NotAfterDate": {
                "description": "Specifies the not after date for the certificate.",
                "type": "string"
            }
        }
    },
    "AWS::Transfer::Profile": {
        "properties": {
            "As2Id": {
                "description": "AS2 identifier agreed with a trading partner.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128
            },
            "ProfileType": {
                "description": "Enum specifying whether the profile is local or associated with a trading partner.",
                "type": "string",
                "enum": [
                    "LOCAL",
                    "PARTNER"
                ]
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "maxItems": 50,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "CertificateIds": {
                "description": "List of the certificate IDs associated with this profile to be used for encryption and signing of AS2 messages.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/CertificateId"
                }
            },
            "Arn": {
                "description": "Specifies the unique Amazon Resource Name (ARN) for the profile.",
                "type": "string",
                "pattern": "arn:.*",
                "minLength": 20,
                "maxLength": 1600
            },
            "ProfileId": {
                "description": "A unique identifier for the profile",
                "type": "string",
                "pattern": "^p-([0-9a-f]{17})$",
                "minLength": 19,
                "maxLength": 19
            }
        }
    },
    "AWS::Transfer::Workflow": {
        "properties": {
            "OnExceptionSteps": {
                "description": "Specifies the steps (actions) to take if any errors are encountered during execution of the workflow.",
                "type": "array",
                "maxItems": 8,
                "uniqueItems": true,
                "insertionOrder": true,
                "items": {
                    "$ref": "#/definitions/WorkflowStep"
                }
            },
            "Steps": {
                "description": "Specifies the details for the steps that are in the specified workflow.",
                "type": "array",
                "maxItems": 8,
                "uniqueItems": true,
                "insertionOrder": true,
                "items": {
                    "$ref": "#/definitions/WorkflowStep"
                }
            },
            "Tags": {
                "description": "Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Description": {
                "description": "A textual description for the workflow.",
                "type": "string",
                "pattern": "^[\\w\\- ]*$",
                "minLength": 0,
                "maxLength": 256
            },
            "WorkflowId": {
                "description": "A unique identifier for the workflow.",
                "type": "string",
                "pattern": "^w-([a-z0-9]{17})$",
                "minLength": 19,
                "maxLength": 19
            },
            "Arn": {
                "description": "Specifies the unique Amazon Resource Name (ARN) for the workflow.",
                "type": "string",
                "pattern": "arn:.*",
                "minLength": 20,
                "maxLength": 1600
            }
        }
    },
    "AWS::Transfer::Connector": {
        "properties": {
            "AccessRole": {
                "description": "Specifies the access role for the connector.",
                "type": "string",
                "pattern": "arn:.*role/.*",
                "minLength": 20,
                "maxLength": 2048
            },
            "As2Config": {
                "description": "Configuration for an AS2 connector.",
                "type": "object",
                "properties": {
                    "LocalProfileId": {
                        "type": "string",
                        "description": "A unique identifier for the local profile.",
                        "pattern": "^p-([0-9a-f]{17})$",
                        "minLength": 19,
                        "maxLength": 19
                    },
                    "PartnerProfileId": {
                        "type": "string",
                        "description": "A unique identifier for the partner profile.",
                        "pattern": "^p-([0-9a-f]{17})$",
                        "minLength": 19,
                        "maxLength": 19
                    },
                    "MessageSubject": {
                        "type": "string",
                        "description": "The message subject for this AS2 connector configuration.",
                        "pattern": "^[\\p{Print}\\p{Blank}]+",
                        "minLength": 1,
                        "maxLength": 1024
                    },
                    "Compression": {
                        "type": "string",
                        "description": "Compression setting for this AS2 connector configuration.",
                        "enum": [
                            "ZLIB",
                            "DISABLED"
                        ]
                    },
                    "EncryptionAlgorithm": {
                        "type": "string",
                        "description": "Encryption algorithm for this AS2 connector configuration.",
                        "enum": [
                            "AES128_CBC",
                            "AES192_CBC",
                            "AES256_CBC",
                            "NONE"
                        ]
                    },
                    "SigningAlgorithm": {
                        "type": "string",
                        "description": "Signing algorithm for this AS2 connector configuration.",
                        "enum": [
                            "SHA256",
                            "SHA384",
                            "SHA512",
                            "SHA1",
                            "NONE"
                        ]
                    },
                    "MdnSigningAlgorithm": {
                        "type": "string",
                        "description": "MDN Signing algorithm for this AS2 connector configuration.",
                        "enum": [
                            "SHA256",
                            "SHA384",
                            "SHA512",
                            "SHA1",
                            "NONE",
                            "DEFAULT"
                        ]
                    },
                    "MdnResponse": {
                        "type": "string",
                        "description": "MDN Response setting for this AS2 connector configuration.",
                        "enum": [
                            "SYNC",
                            "NONE"
                        ]
                    }
                },
                "additionalProperties": false
            },
            "Arn": {
                "description": "Specifies the unique Amazon Resource Name (ARN) for the workflow.",
                "type": "string",
                "pattern": "arn:.*",
                "minLength": 20,
                "maxLength": 1600
            },
            "ConnectorId": {
                "description": "A unique identifier for the connector.",
                "type": "string",
                "pattern": "^c-([0-9a-f]{17})$",
                "minLength": 19,
                "maxLength": 19
            },
            "LoggingRole": {
                "description": "Specifies the logging role for the connector.",
                "type": "string",
                "pattern": "arn:.*role/.*",
                "minLength": 20,
                "maxLength": 2048
            },
            "Tags": {
                "description": "Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Url": {
                "description": "URL for Connector",
                "type": "string",
                "maxLength": 255
            }
        }
    },
    "AWS::AppFlow::Flow": {
        "properties": {
            "FlowArn": {
                "description": "ARN identifier of the flow.",
                "type": "string",
                "pattern": "arn:aws:appflow:.*:[0-9]+:.*",
                "maxLength": 512
            },
            "FlowName": {
                "description": "Name of the flow.",
                "type": "string",
                "pattern": "[a-zA-Z0-9][\\w!@#.-]+",
                "maxLength": 256,
                "minLength": 1
            },
            "Description": {
                "description": "Description of the flow.",
                "type": "string",
                "pattern": "[\\w!@#\\-.?,\\s]*",
                "maxLength": 2048
            },
            "KMSArn": {
                "description": "The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.",
                "type": "string",
                "pattern": "arn:aws:kms:.*:[0-9]+:.*",
                "maxLength": 2048,
                "minLength": 20
            },
            "TriggerConfig": {
                "description": "Trigger settings of the flow.",
                "$ref": "#/definitions/TriggerConfig"
            },
            "SourceFlowConfig": {
                "description": "Configurations of Source connector of the flow.",
                "$ref": "#/definitions/SourceFlowConfig"
            },
            "DestinationFlowConfigList": {
                "description": "List of Destination connectors of the flow.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/DestinationFlowConfig"
                }
            },
            "Tasks": {
                "description": "List of tasks for the flow.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Task"
                }
            },
            "Tags": {
                "description": "List of Tags.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "MetadataCatalogConfig": {
                "description": "Configurations of metadata catalog of the flow.",
                "$ref": "#/definitions/MetadataCatalogConfig"
            }
        }
    },
    "AWS::AppFlow::Connector": {
        "properties": {
            "ConnectorLabel": {
                "description": " The name of the connector. The name is unique for each ConnectorRegistration in your AWS account.",
                "type": "string",
                "pattern": "[a-zA-Z0-9][\\w!@#.-]+",
                "maxLength": 512
            },
            "ConnectorArn": {
                "description": " The arn of the connector. The arn is unique for each ConnectorRegistration in your AWS account.",
                "type": "string",
                "pattern": "arn:*:appflow:.*:[0-9]+:.*",
                "maxLength": 512
            },
            "ConnectorProvisioningType": {
                "description": "The provisioning type of the connector. Currently the only supported value is LAMBDA. ",
                "type": "string",
                "pattern": "[a-zA-Z0-9][\\w!@#.-]+",
                "maxLength": 256,
                "minLength": 1
            },
            "ConnectorProvisioningConfig": {
                "description": "Contains information about the configuration of the connector being registered.",
                "$ref": "#/definitions/ConnectorProvisioningConfig"
            },
            "Description": {
                "description": "A description about the connector that's being registered.",
                "type": "string",
                "pattern": "[\\s\\w/!@#+=.-]*",
                "maxLength": 2048
            }
        }
    },
    "AWS::IdentityStore::Group": {
        "properties": {
            "Description": {
                "description": "A string containing the description of the group.",
                "type": "string",
                "maxLength": 1024,
                "minLength": 1,
                "pattern": "^[\\p{L}\\p{M}\\p{S}\\p{N}\\p{P}\\t\\n\\r  \u3000]+$"
            },
            "DisplayName": {
                "description": "A string containing the name of the group. This value is commonly displayed when the group is referenced.",
                "type": "string",
                "maxLength": 1024,
                "minLength": 1,
                "pattern": "^[\\p{L}\\p{M}\\p{S}\\p{N}\\p{P}\\t\\n\\r  ]+$"
            },
            "GroupId": {
                "description": "The unique identifier for a group in the identity store.",
                "type": "string",
                "maxLength": 47,
                "minLength": 1,
                "pattern": "^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$"
            },
            "IdentityStoreId": {
                "description": "The globally unique identifier for the identity store.",
                "type": "string",
                "maxLength": 36,
                "minLength": 1,
                "pattern": "^d-[0-9a-f]{10}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"
            }
        }
    },
    "AWS::IoT::JobTemplate": {
        "properties": {
            "TimeoutConfig": {
                "description": "Specifies the amount of time each device has to finish its execution of the job.",
                "additionalProperties": false,
                "type": "object",
                "properties": {
                    "InProgressTimeoutInMinutes": {
                        "$ref": "#/definitions/InProgressTimeoutInMinutes"
                    }
                },
                "required": [
                    "InProgressTimeoutInMinutes"
                ]
            },
            "Description": {
                "pattern": "[^\\p{C}]+",
                "description": "A description of the Job Template.",
                "type": "string",
                "maxLength": 2028
            },
            "JobExecutionsRetryConfig": {
                "additionalProperties": false,
                "type": "object",
                "properties": {
                    "RetryCriteriaList": {
                        "minItems": 1,
                        "maxItems": 2,
                        "insertionOrder": false,
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/RetryCriteria"
                        }
                    }
                }
            },
            "AbortConfig": {
                "description": "The criteria that determine when and how a job abort takes place.",
                "additionalProperties": false,
                "type": "object",
                "properties": {
                    "CriteriaList": {
                        "minItems": 1,
                        "insertionOrder": false,
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/AbortCriteria"
                        }
                    }
                },
                "required": [
                    "CriteriaList"
                ]
            },
            "JobTemplateId": {
                "minLength": 1,
                "pattern": "[a-zA-Z0-9_-]+",
                "type": "string",
                "maxLength": 64
            },
            "Document": {
                "description": "The job document. Required if you don't specify a value for documentSource.",
                "type": "string",
                "maxLength": 32768
            },
            "JobArn": {
                "description": "Optional for copying a JobTemplate from a pre-existing Job configuration.",
                "type": "string"
            },
            "JobExecutionsRolloutConfig": {
                "description": "Allows you to create a staged rollout of a job.",
                "additionalProperties": false,
                "type": "object",
                "properties": {
                    "MaximumPerMinute": {
                        "description": "The maximum number of things that will be notified of a pending job, per minute. This parameter allows you to create a staged rollout.",
                        "$ref": "#/definitions/MaximumPerMinute"
                    },
                    "ExponentialRolloutRate": {
                        "description": "The rate of increase for a job rollout. This parameter allows you to define an exponential rate for a job rollout.",
                        "$ref": "#/definitions/ExponentialRolloutRate"
                    }
                }
            },
            "DocumentSource": {
                "minLength": 1,
                "description": "An S3 link to the job document to use in the template. Required if you don't specify a value for document.",
                "type": "string",
                "maxLength": 1350
            },
            "Arn": {
                "type": "string"
            },
            "PresignedUrlConfig": {
                "description": "Configuration for pre-signed S3 URLs.",
                "additionalProperties": false,
                "type": "object",
                "properties": {
                    "ExpiresInSec": {
                        "$ref": "#/definitions/ExpiresInSec"
                    },
                    "RoleArn": {
                        "$ref": "#/definitions/RoleArn"
                    }
                },
                "required": [
                    "RoleArn"
                ]
            },
            "Tags": {
                "maxItems": 50,
                "uniqueItems": true,
                "description": "Metadata that can be used to manage the JobTemplate.",
                "insertionOrder": false,
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::NetworkFirewall::Firewall": {
        "properties": {
            "FirewallName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "^[a-zA-Z0-9-]+$"
            },
            "FirewallArn": {
                "$ref": "#/definitions/ResourceArn"
            },
            "FirewallId": {
                "type": "string",
                "minLength": 36,
                "maxLength": 36,
                "pattern": "^([0-9a-f]{8})-([0-9a-f]{4}-){3}([0-9a-f]{12})$"
            },
            "FirewallPolicyArn": {
                "$ref": "#/definitions/ResourceArn"
            },
            "VpcId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "^vpc-[0-9a-f]+$"
            },
            "SubnetMappings": {
                "type": "array",
                "minItems": 1,
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/SubnetMapping"
                }
            },
            "DeleteProtection": {
                "type": "boolean"
            },
            "SubnetChangeProtection": {
                "type": "boolean"
            },
            "FirewallPolicyChangeProtection": {
                "type": "boolean"
            },
            "Description": {
                "type": "string",
                "maxLength": 512,
                "pattern": "^.*$"
            },
            "EndpointIds": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/EndpointId"
                }
            },
            "Tags": {
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::NetworkFirewall::FirewallPolicy": {
        "properties": {
            "FirewallPolicyName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "^[a-zA-Z0-9-]+$"
            },
            "FirewallPolicyArn": {
                "$ref": "#/definitions/ResourceArn"
            },
            "FirewallPolicy": {
                "$ref": "#/definitions/FirewallPolicy"
            },
            "FirewallPolicyId": {
                "type": "string",
                "minLength": 36,
                "maxLength": 36,
                "pattern": "^([0-9a-f]{8})-([0-9a-f]{4}-){3}([0-9a-f]{12})$"
            },
            "Description": {
                "type": "string",
                "minLength": 1,
                "maxLength": 512,
                "pattern": "^.*$"
            },
            "Tags": {
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::NetworkFirewall::RuleGroup": {
        "properties": {
            "RuleGroupName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "^[a-zA-Z0-9-]+$"
            },
            "RuleGroupArn": {
                "$ref": "#/definitions/ResourceArn"
            },
            "RuleGroupId": {
                "type": "string",
                "minLength": 36,
                "maxLength": 36,
                "pattern": "^([0-9a-f]{8})-([0-9a-f]{4}-){3}([0-9a-f]{12})$"
            },
            "RuleGroup": {
                "$ref": "#/definitions/RuleGroup"
            },
            "Type": {
                "type": "string",
                "enum": [
                    "STATELESS",
                    "STATEFUL"
                ]
            },
            "Capacity": {
                "type": "integer"
            },
            "Description": {
                "type": "string",
                "minLength": 1,
                "maxLength": 512,
                "pattern": "^.*$"
            },
            "Tags": {
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::SageMaker::DeviceFleet": {
        "properties": {
            "Description": {
                "description": "Description for the edge device fleet",
                "type": "string",
                "pattern": "[\\S\\s]+",
                "minLength": 0,
                "maxLength": 800
            },
            "DeviceFleetName": {
                "description": "The name of the edge device fleet",
                "type": "string",
                "pattern": "^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$",
                "minLength": 1,
                "maxLength": 63
            },
            "OutputConfig": {
                "description": "S3 bucket and an ecryption key id (if available) to store outputs for the fleet",
                "$ref": "#/definitions/EdgeOutputConfig"
            },
            "RoleArn": {
                "description": "Role associated with the device fleet",
                "type": "string",
                "pattern": "^arn:aws[a-z\\-]*:iam::\\d{12}:role/?[a-zA-Z_0-9+=,.@\\-_/]+$",
                "minLength": 20,
                "maxLength": 2048
            },
            "Tags": {
                "description": "Associate tags with the resource",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Connect::PhoneNumber": {
        "properties": {
            "TargetArn": {
                "description": "The ARN of the target the phone number is claimed to.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:(instance|traffic-distribution-group)/[-a-zA-Z0-9]*$"
            },
            "PhoneNumberArn": {
                "description": "The phone number ARN",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:phone-number/[-a-zA-Z0-9]*$"
            },
            "Description": {
                "description": "The description of the phone number.",
                "type": "string",
                "minLength": 1,
                "maxLength": 500
            },
            "Type": {
                "description": "The phone number type, either TOLL_FREE or DID.",
                "type": "string",
                "pattern": "TOLL_FREE|DID"
            },
            "CountryCode": {
                "description": "The phone number country code.",
                "type": "string",
                "pattern": "^[A-Z]{2}"
            },
            "Prefix": {
                "description": "The phone number prefix.",
                "type": "string",
                "pattern": "^\\+[0-9]{1,15}"
            },
            "Address": {
                "description": "The phone number e164 address.",
                "type": "string",
                "pattern": "^\\+[0-9]{2,15}"
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "description": "One or more tags.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::EC2::EnclaveCertificateIamRoleAssociation": {
        "properties": {
            "CertificateArn": {
                "description": "The Amazon Resource Name (ARN) of the ACM certificate with which to associate the IAM role.",
                "type": "string",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:acm:[A-Za-z0-9-]{1,64}:([0-9]{12})?:certificate/.+$",
                "minLength": 1,
                "maxLength": 1283
            },
            "RoleArn": {
                "description": "The Amazon Resource Name (ARN) of the IAM role to associate with the ACM certificate. You can associate up to 16 IAM roles with an ACM certificate.",
                "type": "string",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:iam:.*:([0-9]{12})?:role/.+$",
                "minLength": 1,
                "maxLength": 1283
            },
            "CertificateS3BucketName": {
                "description": "The name of the Amazon S3 bucket to which the certificate was uploaded.",
                "type": "string"
            },
            "CertificateS3ObjectKey": {
                "description": "The Amazon S3 object key where the certificate, certificate chain, and encrypted private key bundle are stored.",
                "type": "string"
            },
            "EncryptionKmsKeyId": {
                "description": "The ID of the AWS KMS CMK used to encrypt the private key of the certificate.",
                "type": "string"
            }
        }
    },
    "AWS::IoT::RoleAlias": {
        "properties": {
            "RoleAlias": {
                "type": "string",
                "pattern": "[\\w=,@-]+",
                "minLength": 1,
                "maxLength": 128
            },
            "RoleAliasArn": {
                "type": "string",
                "pattern": "[\\w=,@-]+",
                "minLength": 1,
                "maxLength": 128
            },
            "RoleArn": {
                "type": "string",
                "pattern": "arn:(aws[a-zA-Z-]*)?:iam::\\d{12}:role/?[a-zA-Z_0-9+=,.@\\-_/]+",
                "minLength": 20,
                "maxLength": 2048
            },
            "CredentialDurationSeconds": {
                "type": "integer",
                "minimum": 900,
                "maximum": 43200,
                "default": 3600
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::IoTFleetHub::Application": {
        "properties": {
            "ApplicationId": {
                "description": "The ID of the application.",
                "type": "string",
                "pattern": "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
                "minLength": 36,
                "maxLength": 36
            },
            "ApplicationArn": {
                "description": "The ARN of the application.",
                "type": "string",
                "pattern": "^arn:[!-~]+$",
                "minLength": 1,
                "maxLength": 1600
            },
            "ApplicationName": {
                "description": "Application Name, should be between 1 and 256 characters.",
                "type": "string",
                "pattern": "^[ -~]*$",
                "minLength": 1,
                "maxLength": 256
            },
            "ApplicationDescription": {
                "description": "Application Description, should be between 1 and 2048 characters.",
                "type": "string",
                "pattern": "^[ -~]*$",
                "minLength": 1,
                "maxLength": 2048
            },
            "ApplicationUrl": {
                "description": "The URL of the application.",
                "type": "string"
            },
            "ApplicationState": {
                "description": "The current state of the application.",
                "type": "string"
            },
            "ApplicationCreationDate": {
                "description": "When the Application was created",
                "type": "integer"
            },
            "ApplicationLastUpdateDate": {
                "description": "When the Application was last updated",
                "type": "integer"
            },
            "RoleArn": {
                "description": "The ARN of the role that the web application assumes when it interacts with AWS IoT Core. For more info on configuring this attribute, see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_CreateApplication.html#API_iotfleethub_CreateApplication_RequestSyntax",
                "type": "string",
                "pattern": "^arn:[!-~]+$",
                "minLength": 1,
                "maxLength": 1600
            },
            "SsoClientId": {
                "description": "The AWS SSO application generated client ID (used with AWS SSO APIs).",
                "type": "string"
            },
            "ErrorMessage": {
                "description": "A message indicating why Create or Delete Application failed.",
                "type": "string"
            },
            "Tags": {
                "description": "A list of key-value pairs that contain metadata for the application.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 0,
                "maxItems": 50
            }
        }
    },
    "AWS::LookoutEquipment::InferenceScheduler": {
        "properties": {
            "DataDelayOffsetInMinutes": {
                "description": "A period of time (in minutes) by which inference on the data is delayed after the data starts.",
                "type": "integer",
                "minimum": 0,
                "maximum": 60
            },
            "DataInputConfiguration": {
                "description": "Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.",
                "type": "object",
                "properties": {
                    "InputTimeZoneOffset": {
                        "description": "Indicates the difference between your time zone and Greenwich Mean Time (GMT).",
                        "type": "string",
                        "pattern": "^(\\+|\\-)[0-9]{2}\\:[0-9]{2}$"
                    },
                    "InferenceInputNameConfiguration": {
                        "$ref": "#/definitions/InputNameConfiguration"
                    },
                    "S3InputConfiguration": {
                        "$ref": "#/definitions/S3InputConfiguration"
                    }
                },
                "required": [
                    "S3InputConfiguration"
                ],
                "additionalProperties": false
            },
            "DataOutputConfiguration": {
                "description": "Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.",
                "type": "object",
                "properties": {
                    "KmsKeyId": {
                        "description": "The ID number for the AWS KMS key used to encrypt the inference output.",
                        "type": "string",
                        "pattern": "^[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,2048}$",
                        "minLength": 1,
                        "maxLength": 2048
                    },
                    "S3OutputConfiguration": {
                        "$ref": "#/definitions/S3OutputConfiguration"
                    }
                },
                "required": [
                    "S3OutputConfiguration"
                ],
                "additionalProperties": false
            },
            "DataUploadFrequency": {
                "description": "How often data is uploaded to the source S3 bucket for the input data.",
                "type": "string",
                "enum": [
                    "PT5M",
                    "PT10M",
                    "PT15M",
                    "PT30M",
                    "PT1H"
                ]
            },
            "InferenceSchedulerName": {
                "description": "The name of the inference scheduler being created.",
                "type": "string",
                "pattern": "^[0-9a-zA-Z_-]{1,200}$",
                "minLength": 1,
                "maxLength": 200
            },
            "ModelName": {
                "description": "The name of the previously trained ML model being used to create the inference scheduler.",
                "type": "string",
                "pattern": "^[0-9a-zA-Z_-]{1,200}$",
                "minLength": 1,
                "maxLength": 200
            },
            "RoleArn": {
                "description": "The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.",
                "type": "string",
                "pattern": "arn:aws(-[^:]+)?:iam::[0-9]{12}:role/.+",
                "minLength": 20,
                "maxLength": 2048
            },
            "ServerSideKmsKeyId": {
                "description": "Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment.",
                "type": "string",
                "pattern": "^[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,2048}$",
                "minLength": 1,
                "maxLength": 2048
            },
            "Tags": {
                "description": "Any tags associated with the inference scheduler.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "maxItems": 200,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "InferenceSchedulerArn": {
                "description": "The Amazon Resource Name (ARN) of the inference scheduler being created.",
                "type": "string",
                "pattern": "arn:aws(-[^:]+)?:lookoutequipment:[a-zA-Z0-9\\-]*:[0-9]{12}:inference-scheduler\\/.+",
                "minLength": 1,
                "maxLength": 200
            }
        }
    },
    "AWS::SageMaker::DataQualityJobDefinition": {
        "properties": {
            "JobDefinitionArn": {
                "description": "The Amazon Resource Name (ARN) of job definition.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256
            },
            "JobDefinitionName": {
                "$ref": "#/definitions/JobDefinitionName"
            },
            "DataQualityBaselineConfig": {
                "$ref": "#/definitions/DataQualityBaselineConfig"
            },
            "DataQualityAppSpecification": {
                "$ref": "#/definitions/DataQualityAppSpecification"
            },
            "DataQualityJobInput": {
                "$ref": "#/definitions/DataQualityJobInput"
            },
            "DataQualityJobOutputConfig": {
                "$ref": "#/definitions/MonitoringOutputConfig"
            },
            "JobResources": {
                "$ref": "#/definitions/MonitoringResources"
            },
            "NetworkConfig": {
                "$ref": "#/definitions/NetworkConfig"
            },
            "EndpointName": {
                "$ref": "#/definitions/EndpointName"
            },
            "RoleArn": {
                "description": "The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.",
                "type": "string",
                "pattern": "^arn:aws[a-z\\-]*:iam::\\d{12}:role/?[a-zA-Z_0-9+=,.@\\-_/]+$",
                "minLength": 20,
                "maxLength": 2048
            },
            "StoppingCondition": {
                "$ref": "#/definitions/StoppingCondition"
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "description": "An array of key-value pairs to apply to this resource.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "CreationTime": {
                "description": "The time at which the job definition was created.",
                "type": "string"
            }
        }
    },
    "AWS::SageMaker::FeatureGroup": {
        "properties": {
            "FeatureGroupName": {
                "type": "string",
                "description": "The Name of the FeatureGroup.",
                "minLength": 1,
                "maxLength": 64,
                "pattern": "^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,63}"
            },
            "RecordIdentifierFeatureName": {
                "type": "string",
                "description": "The Record Identifier Feature Name.",
                "minLength": 1,
                "maxLength": 64,
                "pattern": "^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,63}"
            },
            "EventTimeFeatureName": {
                "type": "string",
                "description": "The Event Time Feature Name.",
                "minLength": 1,
                "maxLength": 64,
                "pattern": "^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,63}"
            },
            "FeatureDefinitions": {
                "type": "array",
                "description": "An Array of Feature Definition",
                "uniqueItems": false,
                "minItems": 1,
                "maxItems": 2500,
                "items": {
                    "$ref": "#/definitions/FeatureDefinition"
                }
            },
            "OnlineStoreConfig": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "SecurityConfig": {
                        "$ref": "#/definitions/OnlineStoreSecurityConfig"
                    },
                    "EnableOnlineStore": {
                        "type": "boolean"
                    }
                }
            },
            "OfflineStoreConfig": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "S3StorageConfig": {
                        "$ref": "#/definitions/S3StorageConfig"
                    },
                    "DisableGlueTableCreation": {
                        "type": "boolean"
                    },
                    "DataCatalogConfig": {
                        "$ref": "#/definitions/DataCatalogConfig"
                    },
                    "TableFormat": {
                        "$ref": "#/definitions/TableFormat"
                    }
                },
                "required": [
                    "S3StorageConfig"
                ]
            },
            "RoleArn": {
                "type": "string",
                "description": "Role Arn",
                "minLength": 20,
                "maxLength": 2048,
                "pattern": "^arn:aws[a-z\\-]*:iam::\\d{12}:role/?[a-zA-Z_0-9+=,.@\\-_/]+$"
            },
            "Description": {
                "type": "string",
                "description": "Description about the FeatureGroup.",
                "maxLength": 128
            },
            "Tags": {
                "type": "array",
                "description": "An array of key-value pair to apply to this resource.",
                "uniqueItems": false,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::SageMaker::ModelExplainabilityJobDefinition": {
        "properties": {
            "JobDefinitionArn": {
                "description": "The Amazon Resource Name (ARN) of job definition.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256
            },
            "JobDefinitionName": {
                "$ref": "#/definitions/JobDefinitionName"
            },
            "ModelExplainabilityBaselineConfig": {
                "$ref": "#/definitions/ModelExplainabilityBaselineConfig"
            },
            "ModelExplainabilityAppSpecification": {
                "$ref": "#/definitions/ModelExplainabilityAppSpecification"
            },
            "ModelExplainabilityJobInput": {
                "$ref": "#/definitions/ModelExplainabilityJobInput"
            },
            "ModelExplainabilityJobOutputConfig": {
                "$ref": "#/definitions/MonitoringOutputConfig"
            },
            "JobResources": {
                "$ref": "#/definitions/MonitoringResources"
            },
            "NetworkConfig": {
                "$ref": "#/definitions/NetworkConfig"
            },
            "EndpointName": {
                "$ref": "#/definitions/EndpointName"
            },
            "RoleArn": {
                "description": "The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.",
                "type": "string",
                "pattern": "^arn:aws[a-z\\-]*:iam::\\d{12}:role/?[a-zA-Z_0-9+=,.@\\-_/]+$",
                "minLength": 20,
                "maxLength": 2048
            },
            "StoppingCondition": {
                "$ref": "#/definitions/StoppingCondition"
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "description": "An array of key-value pairs to apply to this resource.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "CreationTime": {
                "description": "The time at which the job definition was created.",
                "type": "string"
            }
        }
    },
    "AWS::SageMaker::ModelBiasJobDefinition": {
        "properties": {
            "JobDefinitionArn": {
                "description": "The Amazon Resource Name (ARN) of job definition.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256
            },
            "JobDefinitionName": {
                "$ref": "#/definitions/JobDefinitionName"
            },
            "ModelBiasBaselineConfig": {
                "$ref": "#/definitions/ModelBiasBaselineConfig"
            },
            "ModelBiasAppSpecification": {
                "$ref": "#/definitions/ModelBiasAppSpecification"
            },
            "ModelBiasJobInput": {
                "$ref": "#/definitions/ModelBiasJobInput"
            },
            "ModelBiasJobOutputConfig": {
                "$ref": "#/definitions/MonitoringOutputConfig"
            },
            "JobResources": {
                "$ref": "#/definitions/MonitoringResources"
            },
            "NetworkConfig": {
                "$ref": "#/definitions/NetworkConfig"
            },
            "EndpointName": {
                "$ref": "#/definitions/EndpointName"
            },
            "RoleArn": {
                "description": "The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.",
                "type": "string",
                "pattern": "^arn:aws[a-z\\-]*:iam::\\d{12}:role/?[a-zA-Z_0-9+=,.@\\-_/]+$",
                "minLength": 20,
                "maxLength": 2048
            },
            "StoppingCondition": {
                "$ref": "#/definitions/StoppingCondition"
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "description": "An array of key-value pairs to apply to this resource.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "CreationTime": {
                "description": "The time at which the job definition was created.",
                "type": "string"
            }
        }
    },
    "AWS::SageMaker::ModelQualityJobDefinition": {
        "properties": {
            "JobDefinitionArn": {
                "description": "The Amazon Resource Name (ARN) of job definition.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256
            },
            "JobDefinitionName": {
                "$ref": "#/definitions/JobDefinitionName"
            },
            "ModelQualityBaselineConfig": {
                "$ref": "#/definitions/ModelQualityBaselineConfig"
            },
            "ModelQualityAppSpecification": {
                "$ref": "#/definitions/ModelQualityAppSpecification"
            },
            "ModelQualityJobInput": {
                "$ref": "#/definitions/ModelQualityJobInput"
            },
            "ModelQualityJobOutputConfig": {
                "$ref": "#/definitions/MonitoringOutputConfig"
            },
            "JobResources": {
                "$ref": "#/definitions/MonitoringResources"
            },
            "NetworkConfig": {
                "$ref": "#/definitions/NetworkConfig"
            },
            "EndpointName": {
                "$ref": "#/definitions/EndpointName"
            },
            "RoleArn": {
                "description": "The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.",
                "type": "string",
                "pattern": "^arn:aws[a-z\\-]*:iam::\\d{12}:role/?[a-zA-Z_0-9+=,.@\\-_/]+$",
                "minLength": 20,
                "maxLength": 2048
            },
            "StoppingCondition": {
                "$ref": "#/definitions/StoppingCondition"
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "description": "An array of key-value pairs to apply to this resource.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "CreationTime": {
                "description": "The time at which the job definition was created.",
                "type": "string"
            }
        }
    },
    "AWS::SageMaker::Pipeline": {
        "properties": {
            "PipelineName": {
                "type": "string",
                "description": "The name of the Pipeline.",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "^[a-zA-Z0-9](-*[a-zA-Z0-9])*"
            },
            "PipelineDisplayName": {
                "type": "string",
                "description": "The display name of the Pipeline.",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "^[a-zA-Z0-9](-*[a-zA-Z0-9])*"
            },
            "PipelineDescription": {
                "type": "string",
                "description": "The description of the Pipeline.",
                "minLength": 0,
                "maxLength": 3072
            },
            "PipelineDefinition": {
                "type": "object",
                "oneOf": [
                    {
                        "additionalProperties": false,
                        "properties": {
                            "PipelineDefinitionBody": {
                                "type": "string",
                                "description": "A specification that defines the pipeline in JSON format."
                            }
                        },
                        "required": [
                            "PipelineDefinitionBody"
                        ]
                    },
                    {
                        "additionalProperties": false,
                        "properties": {
                            "PipelineDefinitionS3Location": {
                                "$ref": "#/definitions/S3Location"
                            }
                        },
                        "required": [
                            "PipelineDefinitionS3Location"
                        ]
                    }
                ]
            },
            "RoleArn": {
                "type": "string",
                "description": "Role Arn",
                "minLength": 20,
                "maxLength": 2048,
                "pattern": "^arn:aws[a-z\\-]*:iam::\\d{12}:role/?[a-zA-Z_0-9+=,.@\\-_/]+$"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "ParallelismConfiguration": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "MaxParallelExecutionSteps": {
                        "description": "Maximum parallel execution steps",
                        "type": "integer",
                        "minimum": 1
                    }
                },
                "required": [
                    "MaxParallelExecutionSteps"
                ]
            }
        }
    },
    "AWS::Logs::LogGroup": {
        "properties": {
            "LogGroupName": {
                "description": "The name of the log group. If you don't specify a name, AWS CloudFormation generates a unique ID for the log group.",
                "type": "string",
                "minLength": 1,
                "maxLength": 512,
                "pattern": "^[.\\-_/#A-Za-z0-9]{1,512}\\Z"
            },
            "KmsKeyId": {
                "description": "The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.",
                "type": "string",
                "maxLength": 256,
                "pattern": "^arn:[a-z0-9-]+:kms:[a-z0-9-]+:\\d{12}:(key|alias)/.+\\Z"
            },
            "DataProtectionPolicy": {
                "description": "The body of the policy document you want to use for this topic.\n\nYou can only add one policy per topic.\n\nThe policy must be in JSON string format.\n\nLength Constraints: Maximum length of 30720",
                "type": "object"
            },
            "RetentionInDays": {
                "description": "The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.",
                "type": "integer",
                "enum": [
                    1,
                    3,
                    5,
                    7,
                    14,
                    30,
                    60,
                    90,
                    120,
                    150,
                    180,
                    365,
                    400,
                    545,
                    731,
                    1827,
                    2192,
                    2557,
                    2922,
                    3288,
                    3653
                ]
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Arn": {
                "description": "The CloudWatch log group ARN.",
                "type": "string"
            }
        }
    },
    "AWS::SageMaker::Domain": {
        "properties": {
            "DomainArn": {
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the created domain.",
                "maxLength": 256,
                "pattern": "arn:aws[a-z\\-]*:sagemaker:[a-z0-9\\-]*:[0-9]{12}:domain/.*"
            },
            "Url": {
                "type": "string",
                "description": "The URL to the created domain.",
                "maxLength": 1024
            },
            "AppNetworkAccessType": {
                "type": "string",
                "description": "Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly.",
                "enum": [
                    "PublicInternetOnly",
                    "VpcOnly"
                ]
            },
            "AuthMode": {
                "type": "string",
                "description": "The mode of authentication that members use to access the domain.",
                "enum": [
                    "SSO",
                    "IAM"
                ]
            },
            "DefaultUserSettings": {
                "$ref": "#/definitions/UserSettings",
                "description": "The default user settings."
            },
            "DefaultSpaceSettings": {
                "$ref": "#/definitions/DefaultSpaceSettings",
                "description": "The default space settings."
            },
            "DomainName": {
                "type": "string",
                "description": "A name for the domain.",
                "maxLength": 63,
                "pattern": "^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}"
            },
            "KmsKeyId": {
                "type": "string",
                "description": "SageMaker uses AWS KMS to encrypt the EFS volume attached to the domain with an AWS managed customer master key (CMK) by default.",
                "maxLength": 2048,
                "pattern": ".*"
            },
            "SubnetIds": {
                "type": "array",
                "description": "The VPC subnets that Studio uses for communication.",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 1,
                "maxItems": 16,
                "items": {
                    "type": "string",
                    "maxLength": 32,
                    "pattern": "[-0-9a-zA-Z]+"
                }
            },
            "Tags": {
                "type": "array",
                "description": "A list of tags to apply to the user profile.",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 0,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "VpcId": {
                "type": "string",
                "description": "The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.",
                "maxLength": 32,
                "pattern": "[-0-9a-zA-Z]+"
            },
            "DomainId": {
                "type": "string",
                "description": "The domain name.",
                "maxLength": 63,
                "pattern": "^d-(-*[a-z0-9])+"
            },
            "HomeEfsFileSystemId": {
                "type": "string",
                "description": "The ID of the Amazon Elastic File System (EFS) managed by this Domain.",
                "maxLength": 32
            },
            "SingleSignOnManagedApplicationInstanceId": {
                "type": "string",
                "description": "The SSO managed application instance ID.",
                "maxLength": 256
            },
            "DomainSettings": {
                "$ref": "#/definitions/DomainSettings"
            },
            "AppSecurityGroupManagement": {
                "type": "string",
                "description": "The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided.",
                "enum": [
                    "Service",
                    "Customer"
                ]
            },
            "SecurityGroupIdForDomainBoundary": {
                "type": "string",
                "description": "The ID of the security group that authorizes traffic between the RSessionGateway apps and the RStudioServerPro app.",
                "maxLength": 32,
                "pattern": "[-0-9a-zA-Z]+"
            }
        }
    },
    "AWS::AppRunner::VpcIngressConnection": {
        "properties": {
            "VpcIngressConnectionArn": {
                "description": "The Amazon Resource Name (ARN) of the VpcIngressConnection.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1011,
                "pattern": "arn:aws(-[\\w]+)*:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[0-9]{12}:(\\w|/|-){1,1011}"
            },
            "VpcIngressConnectionName": {
                "description": "The customer-provided Vpc Ingress Connection name.",
                "type": "string",
                "minLength": 4,
                "maxLength": 40,
                "pattern": "[A-Za-z0-9][A-Za-z0-9\\-_]{3,39}"
            },
            "ServiceArn": {
                "description": "The Amazon Resource Name (ARN) of the service.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1011,
                "pattern": "arn:aws(-[\\w]+)*:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[0-9]{12}:(\\w|/|-){1,1011}"
            },
            "Status": {
                "description": "The current status of the VpcIngressConnection.",
                "type": "string",
                "enum": [
                    "AVAILABLE",
                    "PENDING_CREATION",
                    "PENDING_UPDATE",
                    "PENDING_DELETION",
                    "FAILED_CREATION",
                    "FAILED_UPDATE",
                    "FAILED_DELETION",
                    "DELETED"
                ]
            },
            "DomainName": {
                "description": "The Domain name associated with the VPC Ingress Connection.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255,
                "pattern": "[A-Za-z0-9*.-]{1,255}"
            },
            "IngressVpcConfiguration": {
                "$ref": "#/definitions/IngressVpcConfiguration"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::AppSync::DomainNameApiAssociation": {
        "properties": {
            "DomainName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 253,
                "pattern": "^(\\*[a-z\\d-]*\\.)?([a-z\\d-]+\\.)+[a-z\\d-]+$"
            },
            "ApiId": {
                "type": "string"
            },
            "ApiAssociationIdentifier": {
                "type": "string"
            }
        }
    },
    "AWS::AppSync::DomainName": {
        "properties": {
            "DomainName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 253,
                "pattern": "^(\\*[a-z\\d-]*\\.)?([a-z\\d-]+\\.)+[a-z\\d-]+$"
            },
            "Description": {
                "type": "string",
                "minLength": 0,
                "maxLength": 255
            },
            "CertificateArn": {
                "type": "string",
                "minLength": 3,
                "maxLength": 2048,
                "pattern": "^arn:[a-z-]*:acm:[a-z0-9-]*:\\d{12}:certificate/[0-9A-Za-z_/-]*$"
            },
            "AppSyncDomainName": {
                "type": "string"
            },
            "HostedZoneId": {
                "type": "string"
            }
        }
    },
    "AWS::CustomerProfiles::Domain": {
        "properties": {
            "DomainName": {
                "description": "The unique name of the domain.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_-]+$",
                "minLength": 1,
                "maxLength": 64
            },
            "DeadLetterQueueUrl": {
                "description": "The URL of the SQS dead letter queue",
                "type": "string",
                "minLength": 0,
                "maxLength": 255
            },
            "DefaultEncryptionKey": {
                "description": "The default encryption key",
                "type": "string",
                "minLength": 0,
                "maxLength": 255
            },
            "DefaultExpirationDays": {
                "description": "The default number of days until the data within the domain expires.",
                "type": "integer",
                "minimum": 1,
                "maximum": 1098
            },
            "Tags": {
                "description": "The tags (keys and values) associated with the domain",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 0,
                "maxItems": 50
            },
            "CreatedAt": {
                "description": "The time of this integration got created",
                "type": "string"
            },
            "LastUpdatedAt": {
                "description": "The time of this integration got last updated at",
                "type": "string"
            }
        }
    },
    "AWS::CustomerProfiles::ObjectType": {
        "properties": {
            "DomainName": {
                "description": "The unique name of the domain.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_-]+$",
                "minLength": 1,
                "maxLength": 64
            },
            "ObjectTypeName": {
                "description": "The name of the profile object type.",
                "type": "string",
                "pattern": "^[a-zA-Z_][a-zA-Z_0-9-]*$",
                "minLength": 1,
                "maxLength": 255
            },
            "AllowProfileCreation": {
                "description": "Indicates whether a profile should be created when data is received.",
                "type": "boolean"
            },
            "Description": {
                "description": "Description of the profile object type.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1000
            },
            "EncryptionKey": {
                "description": "The default encryption key",
                "type": "string",
                "minLength": 0,
                "maxLength": 255
            },
            "ExpirationDays": {
                "description": "The default number of days until the data within the domain expires.",
                "type": "integer",
                "minimum": 1,
                "maximum": 1098
            },
            "Fields": {
                "description": "A list of the name and ObjectType field.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/FieldMap"
                }
            },
            "Keys": {
                "description": "A list of unique keys that can be used to map data to the profile.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/KeyMap"
                }
            },
            "CreatedAt": {
                "description": "The time of this integration got created.",
                "type": "string"
            },
            "LastUpdatedAt": {
                "description": "The time of this integration got last updated at.",
                "type": "string"
            },
            "Tags": {
                "description": "The tags (keys and values) associated with the integration.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 0,
                "maxItems": 50
            },
            "TemplateId": {
                "description": "A unique identifier for the object template.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_-]+$",
                "minLength": 1,
                "maxLength": 64
            }
        }
    },
    "AWS::CustomerProfiles::Integration": {
        "properties": {
            "DomainName": {
                "description": "The unique name of the domain.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_-]+$",
                "minLength": 1,
                "maxLength": 64
            },
            "Uri": {
                "description": "The URI of the S3 bucket or any other type of data source.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "FlowDefinition": {
                "$ref": "#/definitions/FlowDefinition"
            },
            "ObjectTypeName": {
                "description": "The name of the ObjectType defined for the 3rd party data in Profile Service",
                "type": "string",
                "pattern": "^[a-zA-Z_][a-zA-Z_0-9-]*$",
                "minLength": 1,
                "maxLength": 255
            },
            "CreatedAt": {
                "description": "The time of this integration got created",
                "type": "string"
            },
            "LastUpdatedAt": {
                "description": "The time of this integration got last updated at",
                "type": "string"
            },
            "Tags": {
                "description": "The tags (keys and values) associated with the integration",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 0,
                "maxItems": 50
            },
            "ObjectTypeNames": {
                "description": "The mapping between 3rd party event types and ObjectType names",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ObjectTypeMapping"
                }
            }
        }
    },
    "AWS::OpsWorksCM::Server": {
        "properties": {
            "KeyPair": {
                "type": "string",
                "pattern": ".*",
                "maxLength": 10000
            },
            "EngineVersion": {
                "type": "string",
                "maxLength": 10000
            },
            "ServiceRoleArn": {
                "type": "string",
                "pattern": "arn:aws:iam::[0-9]{12}:role/.*",
                "maxLength": 10000
            },
            "DisableAutomatedBackup": {
                "type": "boolean"
            },
            "BackupId": {
                "type": "string",
                "pattern": "[a-zA-Z][a-zA-Z0-9\\-\\.\\:]*",
                "maxLength": 79
            },
            "EngineModel": {
                "type": "string",
                "maxLength": 10000
            },
            "PreferredMaintenanceWindow": {
                "type": "string",
                "pattern": "^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$",
                "maxLength": 10000
            },
            "AssociatePublicIpAddress": {
                "type": "boolean"
            },
            "InstanceProfileArn": {
                "type": "string",
                "pattern": "arn:aws:iam::[0-9]{12}:instance-profile/.*",
                "maxLength": 10000
            },
            "CustomCertificate": {
                "type": "string",
                "pattern": "(?s)\\s*-----BEGIN CERTIFICATE-----.+-----END CERTIFICATE-----\\s*",
                "maxLength": 2097152
            },
            "PreferredBackupWindow": {
                "type": "string",
                "pattern": "^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$",
                "maxLength": 10000
            },
            "SecurityGroupIds": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "type": "string",
                    "maxLength": 10000
                }
            },
            "SubnetIds": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "type": "string",
                    "maxLength": 10000
                }
            },
            "CustomDomain": {
                "type": "string",
                "pattern": "^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])$",
                "maxLength": 253
            },
            "Endpoint": {
                "type": "string",
                "maxLength": 10000
            },
            "CustomPrivateKey": {
                "type": "string",
                "pattern": "(?ms)\\s*^-----BEGIN (?-s:.*)PRIVATE KEY-----$.*?^-----END (?-s:.*)PRIVATE KEY-----$\\s*",
                "maxLength": 4096
            },
            "ServerName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 40,
                "pattern": "[a-zA-Z][a-zA-Z0-9\\-]*"
            },
            "EngineAttributes": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/EngineAttribute"
                }
            },
            "BackupRetentionCount": {
                "type": "integer",
                "minLength": 1
            },
            "Arn": {
                "type": "string",
                "maxLength": 10000
            },
            "InstanceType": {
                "type": "string",
                "maxLength": 10000
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Engine": {
                "type": "string",
                "maxLength": 10000
            }
        }
    },
    "AWS::RDS::DBInstance": {
        "properties": {
            "AllocatedStorage": {
                "type": "string",
                "description": "The amount of storage (in gigabytes) to be initially allocated for the database instance.",
                "pattern": "^[0-9]*$"
            },
            "AllowMajorVersionUpgrade": {
                "type": "boolean",
                "description": "A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible."
            },
            "AssociatedRoles": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/DBInstanceRole"
                },
                "description": "The AWS Identity and Access Management (IAM) roles associated with the DB instance."
            },
            "AutoMinorVersionUpgrade": {
                "type": "boolean",
                "description": "A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically."
            },
            "AvailabilityZone": {
                "type": "string",
                "description": "The Availability Zone (AZ) where the database will be created. For information on AWS Regions and Availability Zones."
            },
            "BackupRetentionPeriod": {
                "type": "integer",
                "minimum": 0,
                "default": 1,
                "description": "The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups."
            },
            "CACertificateIdentifier": {
                "type": "string",
                "description": "The identifier of the CA certificate for this DB instance."
            },
            "CertificateDetails": {
                "$ref": "#/definitions/CertificateDetails",
                "description": "Returns the details of the DB instance's server certificate."
            },
            "CertificateRotationRestart": {
                "type": "boolean",
                "description": "A value that indicates whether the DB instance is restarted when you rotate your SSL/TLS certificate.\nBy default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.\nIf you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate\nThis setting doesn't apply to RDS Custom."
            },
            "CharacterSetName": {
                "type": "string",
                "description": "For supported engines, indicates that the DB instance should be associated with the specified character set."
            },
            "CopyTagsToSnapshot": {
                "type": "boolean",
                "description": "A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied."
            },
            "CustomIAMInstanceProfile": {
                "type": "string",
                "description": "The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements:\n * The profile must exist in your account.\n * The profile must have an IAM role that Amazon EC2 has permissions to assume.\n * The instance profile name and the associated IAM role name must start with the prefix AWSRDSCustom .\nFor the list of permissions required for the IAM role, see Configure IAM and your VPC in the Amazon RDS User Guide .\n\nThis setting is required for RDS Custom."
            },
            "DBClusterIdentifier": {
                "type": "string",
                "description": "The identifier of the DB cluster that the instance will belong to."
            },
            "DBClusterSnapshotIdentifier": {
                "type": "string",
                "description": "The identifier for the RDS for MySQL Multi-AZ DB cluster snapshot to restore from. For more information on Multi-AZ DB clusters, see Multi-AZ deployments with two readable standby DB instances in the Amazon RDS User Guide .\n\nConstraints:\n * Must match the identifier of an existing Multi-AZ DB cluster snapshot.\n * Can't be specified when DBSnapshotIdentifier is specified.\n * Must be specified when DBSnapshotIdentifier isn't specified.\n * If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the DBClusterSnapshotIdentifier must be the ARN of the shared snapshot.\n * Can't be the identifier of an Aurora DB cluster snapshot.\n * Can't be the identifier of an RDS for PostgreSQL Multi-AZ DB cluster snapshot."
            },
            "DBInstanceArn": {
                "type": "string",
                "description": "The Amazon Resource Name (ARN) for the DB instance."
            },
            "DBInstanceClass": {
                "type": "string",
                "description": "The compute and memory capacity of the DB instance, for example, db.m4.large. Not all DB instance classes are available in all AWS Regions, or for all database engines."
            },
            "DBInstanceIdentifier": {
                "type": "string",
                "pattern": "^$|^[a-zA-Z]{1}(?:-?[a-zA-Z0-9]){0,62}$",
                "minLength": 1,
                "maxLength": 63,
                "description": "A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance."
            },
            "DbiResourceId": {
                "type": "string",
                "description": "The AWS Region-unique, immutable identifier for the DB instance. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is accessed."
            },
            "DBName": {
                "type": "string",
                "pattern": "^$|^[_a-zA-Z][a-zA-Z0-9_]{0,63}$",
                "description": "The meaning of this parameter differs according to the database engine you use."
            },
            "DBParameterGroupName": {
                "type": "string",
                "description": "The name of an existing DB parameter group or a reference to an AWS::RDS::DBParameterGroup resource created in the template."
            },
            "DBSecurityGroups": {
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "string"
                },
                "description": "A list of the DB security groups to assign to the DB instance. The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template."
            },
            "DBSnapshotIdentifier": {
                "type": "string",
                "description": "The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot."
            },
            "DBSubnetGroupName": {
                "type": "string",
                "description": "A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new VPC."
            },
            "DBSystemId": {
                "type": "string",
                "description": "The Oracle system ID (Oracle SID) for a container database (CDB). The Oracle SID is also the name of the CDB. This setting is valid for RDS Custom only."
            },
            "DeleteAutomatedBackups": {
                "type": "boolean",
                "description": "A value that indicates whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted."
            },
            "DeletionProtection": {
                "type": "boolean",
                "description": "A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled."
            },
            "Domain": {
                "type": "string",
                "description": "The Active Directory directory ID to create the DB instance in. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain."
            },
            "DomainIAMRoleName": {
                "type": "string",
                "description": "Specify the name of the IAM role to be used when making API calls to the Directory Service."
            },
            "EnableCloudwatchLogsExports": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "description": "The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used."
            },
            "EnableIAMDatabaseAuthentication": {
                "type": "boolean",
                "description": "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled."
            },
            "EnablePerformanceInsights": {
                "type": "boolean",
                "description": "A value that indicates whether to enable Performance Insights for the DB instance."
            },
            "Endpoint": {
                "$ref": "#/definitions/Endpoint",
                "description": "Specifies the connection endpoint."
            },
            "Engine": {
                "type": "string",
                "description": "The name of the database engine that you want to use for this DB instance."
            },
            "EngineVersion": {
                "type": "string",
                "description": "The version number of the database engine to use."
            },
            "ManageMasterUserPassword": {
                "type": "boolean",
                "description": "A value that indicates whether to manage the master user password with AWS Secrets Manager."
            },
            "Iops": {
                "type": "integer",
                "description": "The number of I/O operations per second (IOPS) that the database provisions."
            },
            "KmsKeyId": {
                "type": "string",
                "description": "The ARN of the AWS Key Management Service (AWS KMS) master key that's used to encrypt the DB instance."
            },
            "LicenseModel": {
                "type": "string",
                "description": "License model information for this DB instance."
            },
            "MasterUsername": {
                "type": "string",
                "pattern": "^[a-zA-Z][a-zA-Z0-9_]{0,127}$",
                "description": "The master user name for the DB instance.",
                "minLength": 1,
                "maxLength": 128
            },
            "MasterUserPassword": {
                "type": "string",
                "description": "The password for the master user."
            },
            "MasterUserSecret": {
                "$ref": "#/definitions/MasterUserSecret",
                "description": "Contains the secret managed by RDS in AWS Secrets Manager for the master user password."
            },
            "MaxAllocatedStorage": {
                "type": "integer",
                "description": "The upper limit to which Amazon RDS can automatically scale the storage of the DB instance."
            },
            "MonitoringInterval": {
                "type": "integer",
                "default": 0,
                "description": "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0."
            },
            "MonitoringRoleArn": {
                "type": "string",
                "description": "The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs."
            },
            "MultiAZ": {
                "type": "boolean",
                "description": "Specifies whether the database instance is a multiple Availability Zone deployment."
            },
            "NcharCharacterSetName": {
                "type": "string",
                "description": "The name of the NCHAR character set for the Oracle DB instance. This parameter doesn't apply to RDS Custom."
            },
            "NetworkType": {
                "description": "The network type of the DB cluster.",
                "type": "string"
            },
            "OptionGroupName": {
                "type": "string",
                "description": "Indicates that the DB instance should be associated with the specified option group."
            },
            "PerformanceInsightsKMSKeyId": {
                "type": "string",
                "description": "The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key."
            },
            "PerformanceInsightsRetentionPeriod": {
                "type": "integer",
                "description": "The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years)."
            },
            "Port": {
                "type": "string",
                "description": "The port number on which the database accepts connections.",
                "pattern": "^\\d*$"
            },
            "PreferredBackupWindow": {
                "type": "string",
                "description": "The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter."
            },
            "PreferredMaintenanceWindow": {
                "type": "string",
                "description": "he weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC)."
            },
            "ProcessorFeatures": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ProcessorFeature"
                },
                "description": "The number of CPU cores and the number of threads per core for the DB instance class of the DB instance."
            },
            "PromotionTier": {
                "type": "integer",
                "minimum": 0,
                "default": 1,
                "description": "A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance."
            },
            "PubliclyAccessible": {
                "type": "boolean",
                "description": "Indicates whether the DB instance is an internet-facing instance. If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address."
            },
            "ReplicaMode": {
                "description": "The open mode of an Oracle read replica. The default is open-read-only.",
                "type": "string"
            },
            "RestoreTime": {
                "description": "The date and time to restore from.",
                "type": "string",
                "format": "date-time"
            },
            "SourceDbiResourceId": {
                "type": "string",
                "description": "The resource ID of the source DB instance from which to restore."
            },
            "SourceDBInstanceAutomatedBackupsArn": {
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the replicated automated backups from which to restore."
            },
            "SourceDBInstanceIdentifier": {
                "type": "string",
                "description": "If you want to create a Read Replica DB instance, specify the ID of the source DB instance. Each DB instance can have a limited number of Read Replicas."
            },
            "SourceRegion": {
                "type": "string",
                "description": "The ID of the region that contains the source DB instance for the Read Replica."
            },
            "StorageEncrypted": {
                "type": "boolean",
                "description": "A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted."
            },
            "StorageType": {
                "type": "string",
                "description": "Specifies the storage type to be associated with the DB instance."
            },
            "StorageThroughput": {
                "type": "integer",
                "description": "Specifies the storage throughput for the DB instance."
            },
            "Tags": {
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "description": "Tags to assign to the DB instance."
            },
            "TdeCredentialArn": {
                "type": "string",
                "description": "The ARN from the key store with which to associate the instance for TDE encryption."
            },
            "TdeCredentialPassword": {
                "type": "string",
                "description": "The password for the given ARN from the key store in order to access the device."
            },
            "Timezone": {
                "type": "string",
                "description": "The time zone of the DB instance. The time zone parameter is currently supported only by Microsoft SQL Server."
            },
            "UseDefaultProcessorFeatures": {
                "type": "boolean",
                "description": "A value that indicates whether the DB instance class of the DB instance uses its default processor features."
            },
            "UseLatestRestorableTime": {
                "type": "boolean",
                "description": "A value that indicates whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time."
            },
            "VPCSecurityGroups": {
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "string"
                },
                "description": "A list of the VPC security group IDs to assign to the DB instance. The list can include both the physical IDs of existing VPC security groups and references to AWS::EC2::SecurityGroup resources created in the template."
            }
        }
    },
    "AWS::KinesisAnalyticsV2::Application": {
        "properties": {
            "ApplicationConfiguration": {
                "description": "Use this parameter to configure the application.",
                "$ref": "#/definitions/ApplicationConfiguration"
            },
            "ApplicationDescription": {
                "description": "The description of the application.",
                "type": "string",
                "default": "",
                "minLength": 0,
                "maxLength": 1024
            },
            "ApplicationMode": {
                "description": "To create a Kinesis Data Analytics Studio notebook, you must set the mode to `INTERACTIVE`. However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional.",
                "type": "string",
                "enum": [
                    "INTERACTIVE",
                    "STREAMING"
                ]
            },
            "ApplicationName": {
                "description": "The name of the application.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "^[a-zA-Z0-9_.-]+$"
            },
            "RuntimeEnvironment": {
                "description": "The runtime environment for the application.",
                "type": "string"
            },
            "ServiceExecutionRole": {
                "description": "Specifies the IAM role that the application uses to access external resources.",
                "$ref": "#/definitions/Arn"
            },
            "RunConfiguration": {
                "description": "Specifies run configuration (start parameters) of a Kinesis Data Analytics application. Evaluated on update for RUNNING applications an only.",
                "$ref": "#/definitions/RunConfiguration"
            },
            "ApplicationMaintenanceConfiguration": {
                "description": "Used to configure start of maintenance window.",
                "$ref": "#/definitions/ApplicationMaintenanceConfiguration"
            },
            "Tags": {
                "description": "A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.",
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 1,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::DataSync::LocationFSxWindows": {
        "properties": {
            "Domain": {
                "description": "The name of the Windows domain that the FSx for Windows server belongs to.",
                "type": "string",
                "maxLength": 253,
                "pattern": "^([A-Za-z0-9]+[A-Za-z0-9-.]*)*[A-Za-z0-9-]*[A-Za-z0-9]$"
            },
            "FsxFilesystemArn": {
                "description": "The Amazon Resource Name (ARN) for the FSx for Windows file system.",
                "type": "string",
                "maxLength": 128,
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\\-0-9]*:[0-9]{12}:file-system/fs-.*$"
            },
            "Password": {
                "description": "The password of the user who has the permissions to access files and folders in the FSx for Windows file system.",
                "type": "string",
                "maxLength": 104,
                "pattern": "^.{0,104}$"
            },
            "SecurityGroupArns": {
                "description": "The ARNs of the security groups that are to use to configure the FSx for Windows file system.",
                "type": "array",
                "items": {
                    "type": "string",
                    "maxLength": 128,
                    "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\\-0-9]*:[0-9]{12}:security-group/.*$"
                },
                "insertionOrder": false
            },
            "Subdirectory": {
                "description": "A subdirectory in the location's path.",
                "type": "string",
                "maxLength": 4096,
                "pattern": "^[a-zA-Z0-9_\\-\\+\\./\\(\\)\\$\\p{Zs}]+$"
            },
            "User": {
                "description": "The user who has the permissions to access files and folders in the FSx for Windows file system.",
                "type": "string",
                "maxLength": 104,
                "pattern": "^[^\\x5B\\x5D\\\\/:;|=,+*?]{1,104}$"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "LocationArn": {
                "description": "The Amazon Resource Name (ARN) of the Amazon FSx for Windows file system location that is created.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$",
                "maxLength": 128
            },
            "LocationUri": {
                "description": "The URL of the FSx for Windows location that was described.",
                "type": "string",
                "pattern": "^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9./\\-]+$",
                "maxLength": 4356
            }
        }
    },
    "AWS::DataSync::LocationSMB": {
        "properties": {
            "AgentArns": {
                "description": "The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.",
                "type": "array",
                "items": {
                    "type": "string",
                    "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:agent/agent-[0-9a-z]{17}$",
                    "maxLength": 128
                },
                "minItems": 1,
                "maxItems": 4,
                "insertionOrder": false
            },
            "Domain": {
                "description": "The name of the Windows domain that the SMB server belongs to.",
                "type": "string",
                "maxLength": 253,
                "pattern": "^([A-Za-z0-9]+[A-Za-z0-9-.]*)*[A-Za-z0-9-]*[A-Za-z0-9]$"
            },
            "MountOptions": {
                "$ref": "#/definitions/MountOptions",
                "default": {
                    "Version": "AUTOMATIC"
                }
            },
            "Password": {
                "description": "The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.",
                "type": "string",
                "maxLength": 104,
                "pattern": "^.{0,104}$"
            },
            "ServerHostname": {
                "description": "The name of the SMB server. This value is the IP address or Domain Name Service (DNS) name of the SMB server.",
                "type": "string",
                "maxLength": 255,
                "pattern": "^(([a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9\\-]*[A-Za-z0-9])$"
            },
            "Subdirectory": {
                "description": "The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination",
                "type": "string",
                "maxLength": 4096,
                "pattern": "^[a-zA-Z0-9_\\-\\+\\./\\(\\)\\$\\p{Zs}]+$"
            },
            "User": {
                "description": "The user who can mount the share, has the permissions to access files and folders in the SMB share.",
                "type": "string",
                "maxLength": 104,
                "pattern": "^[^\\x5B\\x5D\\\\/:;|=,+*?]{1,104}$"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "LocationArn": {
                "description": "The Amazon Resource Name (ARN) of the SMB location that is created.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$",
                "maxLength": 128
            },
            "LocationUri": {
                "description": "The URL of the SMB location that was described.",
                "type": "string",
                "pattern": "^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9./\\-]+$",
                "maxLength": 4356
            }
        }
    },
    "AWS::Connect::ContactFlow": {
        "properties": {
            "InstanceArn": {
                "description": "The identifier of the Amazon Connect instance (ARN).",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$",
                "minLength": 1,
                "maxLength": 256
            },
            "ContactFlowArn": {
                "description": "The identifier of the contact flow (ARN).",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*/contact-flow/[-a-zA-Z0-9]*$",
                "minLength": 1,
                "maxLength": 500
            },
            "Name": {
                "description": "The name of the contact flow.",
                "type": "string",
                "minLength": 1,
                "maxLength": 127
            },
            "Content": {
                "description": "The content of the contact flow in JSON format.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256000
            },
            "Description": {
                "description": "The description of the contact flow.",
                "type": "string",
                "maxLength": 500
            },
            "State": {
                "type": "string",
                "description": "The state of the contact flow.",
                "enum": [
                    "ACTIVE",
                    "ARCHIVED"
                ]
            },
            "Type": {
                "description": "The type of the contact flow.",
                "type": "string",
                "enum": [
                    "CONTACT_FLOW",
                    "CUSTOMER_QUEUE",
                    "CUSTOMER_HOLD",
                    "CUSTOMER_WHISPER",
                    "AGENT_HOLD",
                    "AGENT_WHISPER",
                    "OUTBOUND_WHISPER",
                    "AGENT_TRANSFER",
                    "QUEUE_TRANSFER"
                ]
            },
            "Tags": {
                "description": "One or more tags.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Connect::HoursOfOperation": {
        "properties": {
            "InstanceArn": {
                "description": "The identifier of the Amazon Connect instance.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$"
            },
            "Name": {
                "description": "The name of the hours of operation.",
                "type": "string",
                "minLength": 1,
                "maxLength": 127
            },
            "Description": {
                "description": "The description of the hours of operation.",
                "type": "string",
                "minLength": 1,
                "maxLength": 250
            },
            "TimeZone": {
                "description": "The time zone of the hours of operation.",
                "type": "string"
            },
            "Config": {
                "description": "Configuration information for the hours of operation: day, start time, and end time.",
                "type": "array",
                "maxItems": 100,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/HoursOfOperationConfig"
                }
            },
            "HoursOfOperationArn": {
                "description": "The Amazon Resource Name (ARN) for the hours of operation.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*/operating-hours/[-a-zA-Z0-9]*$"
            },
            "Tags": {
                "description": "One or more tags.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Connect::InstanceStorageConfig": {
        "properties": {
            "InstanceArn": {
                "description": "Connect Instance ID with which the storage config will be associated",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$"
            },
            "ResourceType": {
                "$ref": "#/definitions/InstanceStorageResourceType"
            },
            "AssociationId": {
                "$ref": "#/definitions/AssociationId"
            },
            "StorageType": {
                "$ref": "#/definitions/StorageType"
            },
            "S3Config": {
                "$ref": "#/definitions/S3Config"
            },
            "KinesisVideoStreamConfig": {
                "$ref": "#/definitions/KinesisVideoStreamConfig"
            },
            "KinesisStreamConfig": {
                "$ref": "#/definitions/KinesisStreamConfig"
            },
            "KinesisFirehoseConfig": {
                "$ref": "#/definitions/KinesisFirehoseConfig"
            }
        }
    },
    "AWS::Connect::QuickConnect": {
        "properties": {
            "InstanceArn": {
                "description": "The identifier of the Amazon Connect instance.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$"
            },
            "Name": {
                "description": "The name of the quick connect.",
                "type": "string",
                "minLength": 1,
                "maxLength": 127
            },
            "Description": {
                "description": "The description of the quick connect.",
                "type": "string",
                "minLength": 1,
                "maxLength": 250
            },
            "QuickConnectConfig": {
                "description": "Configuration settings for the quick connect.",
                "$ref": "#/definitions/QuickConnectConfig"
            },
            "QuickConnectArn": {
                "description": "The Amazon Resource Name (ARN) for the quick connect.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*/transfer-destination/[-a-zA-Z0-9]*$"
            },
            "Tags": {
                "type": "array",
                "maxItems": 200,
                "uniqueItems": true,
                "insertionOrder": false,
                "description": "One or more tags.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Connect::User": {
        "properties": {
            "InstanceArn": {
                "description": "The identifier of the Amazon Connect instance.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$"
            },
            "DirectoryUserId": {
                "description": "The identifier of the user account in the directory used for identity management.",
                "type": "string"
            },
            "HierarchyGroupArn": {
                "description": "The identifier of the hierarchy group for the user.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*/agent-group/[-a-zA-Z0-9]*$"
            },
            "Username": {
                "description": "The user name for the account.",
                "type": "string",
                "minLength": 1,
                "maxLength": 64,
                "pattern": "[a-zA-Z0-9\\_\\-\\.\\@]+"
            },
            "Password": {
                "description": "The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.",
                "type": "string",
                "pattern": "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d\\S]{8,64}$"
            },
            "RoutingProfileArn": {
                "description": "The identifier of the routing profile for the user.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*/routing-profile/[-a-zA-Z0-9]*$"
            },
            "IdentityInfo": {
                "description": "The information about the identity of the user.",
                "$ref": "#/definitions/UserIdentityInfo"
            },
            "PhoneConfig": {
                "description": "The phone settings for the user.",
                "$ref": "#/definitions/UserPhoneConfig"
            },
            "SecurityProfileArns": {
                "type": "array",
                "minItems": 1,
                "maxItems": 10,
                "uniqueItems": true,
                "insertionOrder": false,
                "description": "One or more security profile arns for the user",
                "items": {
                    "$ref": "#/definitions/SecurityProfileArn"
                }
            },
            "UserArn": {
                "description": "The Amazon Resource Name (ARN) for the user.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*/agent/[-a-zA-Z0-9]*$"
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "description": "One or more tags.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Connect::UserHierarchyGroup": {
        "properties": {
            "InstanceArn": {
                "description": "The identifier of the Amazon Connect instance.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$"
            },
            "UserHierarchyGroupArn": {
                "description": "The Amazon Resource Name (ARN) for the user hierarchy group.",
                "$ref": "#/definitions/UserHierarchyGroupArn"
            },
            "ParentGroupArn": {
                "description": "The Amazon Resource Name (ARN) for the parent user hierarchy group.",
                "$ref": "#/definitions/UserHierarchyGroupArn"
            },
            "Name": {
                "description": "The name of the user hierarchy group.",
                "type": "string",
                "minLength": 1,
                "maxLength": 100
            }
        }
    },
    "AWS::SSO::Assignment": {
        "properties": {
            "InstanceArn": {
                "description": "The sso instance that the permission set is owned.",
                "type": "string",
                "pattern": "arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}",
                "minLength": 10,
                "maxLength": 1224
            },
            "TargetId": {
                "description": "The account id to be provisioned.",
                "type": "string",
                "pattern": "\\d{12}"
            },
            "TargetType": {
                "description": "The type of resource to be provsioned to, only aws account now",
                "type": "string",
                "enum": [
                    "AWS_ACCOUNT"
                ]
            },
            "PermissionSetArn": {
                "description": "The permission set that the assignemt will be assigned",
                "type": "string",
                "pattern": "arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::permissionSet/(sso)?ins-[a-zA-Z0-9-.]{16}/ps-[a-zA-Z0-9-./]{16}",
                "minLength": 10,
                "maxLength": 1224
            },
            "PrincipalType": {
                "description": "The assignee's type, user/group",
                "type": "string",
                "enum": [
                    "USER",
                    "GROUP"
                ]
            },
            "PrincipalId": {
                "description": "The assignee's identifier, user id/group id",
                "type": "string",
                "pattern": "^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$",
                "minLength": 1,
                "maxLength": 47
            }
        }
    },
    "AWS::SSO::InstanceAccessControlAttributeConfiguration": {
        "properties": {
            "InstanceArn": {
                "description": "The ARN of the AWS SSO instance under which the operation will be executed.",
                "type": "string",
                "pattern": "arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}",
                "minLength": 10,
                "maxLength": 1224
            },
            "InstanceAccessControlAttributeConfiguration": {
                "description": "The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. We recomend that you use  AccessControlAttributes property instead.",
                "type": "object",
                "properties": {
                    "AccessControlAttributes": {
                        "$ref": "#/definitions/AccessControlAttributeList"
                    }
                },
                "required": [
                    "AccessControlAttributes"
                ],
                "additionalProperties": false
            },
            "AccessControlAttributes": {
                "$ref": "#/definitions/AccessControlAttributeList"
            }
        }
    },
    "AWS::SSMContacts::Contact": {
        "properties": {
            "Alias": {
                "description": "Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255,
                "pattern": "^[a-z0-9_\\-\\.]*$"
            },
            "DisplayName": {
                "description": "Name of the contact. String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255,
                "pattern": "^[a-zA-Z0-9_\\-\\s]*$"
            },
            "Type": {
                "description": "Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?.",
                "type": "string",
                "enum": [
                    "PERSONAL",
                    "CUSTOM",
                    "SERVICE",
                    "ESCALATION"
                ]
            },
            "Plan": {
                "description": "The stages that an escalation plan or engagement plan engages contacts and contact methods in.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Stage"
                }
            },
            "Arn": {
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the contact."
            }
        }
    },
    "AWS::Logs::ResourcePolicy": {
        "properties": {
            "PolicyName": {
                "description": "A name for resource policy",
                "type": "string",
                "pattern": "^([^:*\\/]+\\/?)*[^:*\\/]+$",
                "minLength": 1,
                "maxLength": 255
            },
            "PolicyDocument": {
                "description": "The policy document",
                "type": "string",
                "pattern": "[\\u0009\\u000A\\u000D\\u0020-\\u00FF]+",
                "minLength": 1,
                "maxLength": 5120
            }
        }
    },
    "AWS::CloudFormation::HookTypeConfig": {
        "properties": {
            "TypeArn": {
                "description": "The Amazon Resource Name (ARN) of the type without version number.",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$",
                "type": "string"
            },
            "TypeName": {
                "description": "The name of the type being registered.\n\nWe recommend that type names adhere to the following pattern: company_or_organization::service::type.",
                "pattern": "^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$",
                "type": "string"
            },
            "ConfigurationArn": {
                "description": "The Amazon Resource Name (ARN) for the configuration data, in this account and region.",
                "pattern": "^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type(-configuration)?/hook/.+$",
                "type": "string"
            },
            "Configuration": {
                "description": "The configuration data for the extension, in this account and region.",
                "pattern": "[\\s\\S]+",
                "type": "string"
            },
            "ConfigurationAlias": {
                "description": "An alias by which to refer to this extension configuration data.",
                "pattern": "^[a-zA-Z0-9]{1,256}$",
                "default": "default",
                "enum": [
                    "default"
                ],
                "type": "string"
            }
        }
    },
    "AWS::DataSync::LocationEFS": {
        "properties": {
            "Ec2Config": {
                "$ref": "#/definitions/Ec2Config"
            },
            "EfsFilesystemArn": {
                "description": "The Amazon Resource Name (ARN) for the Amazon EFS file system.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):elasticfilesystem:[a-z\\-0-9]*:[0-9]{12}:file-system/fs-.*$",
                "maxLength": 128
            },
            "AccessPointArn": {
                "description": "The Amazon Resource Name (ARN) for the Amazon EFS Access point that DataSync uses when accessing the EFS file system.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):elasticfilesystem:[a-z\\-0-9]+:[0-9]{12}:access-point/fsap-[0-9a-f]{8,40}$",
                "maxLength": 128
            },
            "FileSystemAccessRoleArn": {
                "description": "The Amazon Resource Name (ARN) of the AWS IAM role that the DataSync will assume when mounting the EFS file system.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):iam::[0-9]{12}:role/.*$",
                "maxLength": 128
            },
            "InTransitEncryption": {
                "description": "Protocol that is used for encrypting the traffic exchanged between the DataSync Agent and the EFS file system.",
                "type": "string",
                "enum": [
                    "NONE",
                    "TLS1_2"
                ]
            },
            "Subdirectory": {
                "description": "A subdirectory in the location's path. This subdirectory in the EFS file system is used to read data from the EFS source location or write data to the EFS destination.",
                "type": "string",
                "maxLength": 4096,
                "pattern": "^[a-zA-Z0-9_\\-\\+\\./\\(\\)\\$\\p{Zs}]+$"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "LocationArn": {
                "description": "The Amazon Resource Name (ARN) of the Amazon EFS file system location that is created.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$",
                "maxLength": 128
            },
            "LocationUri": {
                "description": "The URL of the EFS location that was described.",
                "type": "string",
                "pattern": "^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9.\\-/]+$",
                "maxLength": 4356
            }
        }
    },
    "AWS::DataSync::LocationFSxLustre": {
        "properties": {
            "FsxFilesystemArn": {
                "description": "The Amazon Resource Name (ARN) for the FSx for Lustre file system.",
                "type": "string",
                "maxLength": 128,
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\\-0-9]+:[0-9]{12}:file-system/fs-[0-9a-f]+$"
            },
            "SecurityGroupArns": {
                "description": "The ARNs of the security groups that are to use to configure the FSx for Lustre file system.",
                "type": "array",
                "items": {
                    "type": "string",
                    "maxLength": 128,
                    "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\\-0-9]*:[0-9]{12}:security-group/sg-[a-f0-9]+$"
                },
                "maxItems": 5,
                "minItems": 1,
                "insertionOrder": false
            },
            "Subdirectory": {
                "description": "A subdirectory in the location's path.",
                "type": "string",
                "maxLength": 4096,
                "pattern": "^[a-zA-Z0-9_\\-\\+\\./\\(\\)\\$\\p{Zs}]+$"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 50,
                "minItems": 0,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "LocationArn": {
                "description": "The Amazon Resource Name (ARN) of the Amazon FSx for Lustre file system location that is created.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$",
                "maxLength": 128
            },
            "LocationUri": {
                "description": "The URL of the FSx for Lustre location that was described.",
                "type": "string",
                "pattern": "^(efs|nfs|s3|smb|fsxw|hdfs|fsxl)://[a-zA-Z0-9.:/\\-]+$",
                "maxLength": 4356
            }
        }
    },
    "AWS::DataSync::LocationFSxONTAP": {
        "properties": {
            "StorageVirtualMachineArn": {
                "description": "The Amazon Resource Name (ARN) for the FSx ONTAP SVM.",
                "type": "string",
                "maxLength": 162,
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\\-0-9]+:[0-9]{12}:storage-virtual-machine/fs-[0-9a-f]+/svm-[0-9a-f]{17,}$"
            },
            "FsxFilesystemArn": {
                "description": "The Amazon Resource Name (ARN) for the FSx ONAP file system.",
                "type": "string",
                "maxLength": 128,
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\\-0-9]+:[0-9]{12}:file-system/fs-[0-9a-f]+$"
            },
            "SecurityGroupArns": {
                "description": "The ARNs of the security groups that are to use to configure the FSx ONTAP file system.",
                "type": "array",
                "items": {
                    "type": "string",
                    "maxLength": 128,
                    "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\\-0-9]*:[0-9]{12}:security-group/sg-[a-f0-9]+$"
                },
                "maxItems": 5,
                "minItems": 1,
                "insertionOrder": false
            },
            "Protocol": {
                "$ref": "#/definitions/Protocol"
            },
            "Subdirectory": {
                "description": "A subdirectory in the location's path.",
                "type": "string",
                "maxLength": 4096,
                "pattern": "^[a-zA-Z0-9_\\-\\+\\./\\(\\)\\$\\p{Zs}]+$"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 50,
                "minItems": 0,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "LocationArn": {
                "description": "The Amazon Resource Name (ARN) of the Amazon FSx ONTAP file system location that is created.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$",
                "maxLength": 128
            },
            "LocationUri": {
                "description": "The URL of the FSx ONTAP file system that was described.",
                "type": "string",
                "pattern": "^(efs|nfs|s3|smb|hdfs|fsx[a-z0-9-]+)://[a-zA-Z0-9.:/\\-]+$",
                "maxLength": 4360
            }
        }
    },
    "AWS::DataSync::LocationFSxOpenZFS": {
        "properties": {
            "FsxFilesystemArn": {
                "description": "The Amazon Resource Name (ARN) for the FSx OpenZFS file system.",
                "type": "string",
                "maxLength": 128,
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\\-0-9]+:[0-9]{12}:file-system/fs-[0-9a-f]+$"
            },
            "SecurityGroupArns": {
                "description": "The ARNs of the security groups that are to use to configure the FSx OpenZFS file system.",
                "type": "array",
                "items": {
                    "type": "string",
                    "maxLength": 128,
                    "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\\-0-9]*:[0-9]{12}:security-group/sg-[a-f0-9]+$"
                },
                "maxItems": 5,
                "minItems": 1,
                "insertionOrder": false
            },
            "Protocol": {
                "$ref": "#/definitions/Protocol"
            },
            "Subdirectory": {
                "description": "A subdirectory in the location's path.",
                "type": "string",
                "maxLength": 4096,
                "pattern": "^[a-zA-Z0-9_\\-\\+\\./\\(\\)\\$\\p{Zs}]+$"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 50,
                "minItems": 0,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "LocationArn": {
                "description": "The Amazon Resource Name (ARN) of the Amazon FSx OpenZFS file system location that is created.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$",
                "maxLength": 128
            },
            "LocationUri": {
                "description": "The URL of the FSx OpenZFS that was described.",
                "type": "string",
                "pattern": "^(efs|nfs|s3|smb|fsxw|hdfs|fsxl|fsxz)://[a-zA-Z0-9.:/\\-]+$",
                "maxLength": 4356
            }
        }
    },
    "AWS::DataSync::LocationHDFS": {
        "properties": {
            "NameNodes": {
                "description": "An array of Name Node(s) of the HDFS location.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/NameNode"
                },
                "minItems": 1,
                "insertionOrder": false
            },
            "BlockSize": {
                "description": "Size of chunks (blocks) in bytes that the data is divided into when stored in the HDFS cluster.",
                "type": "integer",
                "format": "int64",
                "minimum": 1048576,
                "maximum": 1073741824
            },
            "ReplicationFactor": {
                "description": "Number of copies of each block that exists inside the HDFS cluster.",
                "type": "integer",
                "format": "int64",
                "default": 3,
                "minimum": 1,
                "maximum": 512
            },
            "KmsKeyProviderUri": {
                "description": "The identifier for the Key Management Server where the encryption keys that encrypt data inside HDFS clusters are stored.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255,
                "pattern": "^kms:\\/\\/http[s]?@(([a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9\\-]*[A-Za-z0-9])(;(([a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9\\-]*[A-Za-z0-9]))*:[0-9]{1,5}\\/kms$"
            },
            "QopConfiguration": {
                "$ref": "#/definitions/QopConfiguration"
            },
            "AuthenticationType": {
                "description": "The authentication mode used to determine identity of user.",
                "type": "string",
                "enum": [
                    "SIMPLE",
                    "KERBEROS"
                ]
            },
            "SimpleUser": {
                "description": "The user name that has read and write permissions on the specified HDFS cluster.",
                "type": "string",
                "pattern": "^[_.A-Za-z0-9][-_.A-Za-z0-9]*$",
                "minLength": 1,
                "maxLength": 256
            },
            "KerberosPrincipal": {
                "description": "The unique identity, or principal, to which Kerberos can assign tickets.",
                "type": "string",
                "pattern": "^.+$",
                "minLength": 1,
                "maxLength": 256
            },
            "KerberosKeytab": {
                "description": "The Base64 string representation of the Keytab file.",
                "type": "string"
            },
            "KerberosKrb5Conf": {
                "description": "The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket.",
                "type": "string"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "AgentArns": {
                "description": "ARN(s) of the agent(s) to use for an HDFS location.",
                "type": "array",
                "items": {
                    "type": "string",
                    "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:agent/agent-[0-9a-z]{17}$",
                    "maxLength": 128
                },
                "minItems": 1,
                "maxItems": 4,
                "insertionOrder": false
            },
            "Subdirectory": {
                "description": "The subdirectory in HDFS that is used to read data from the HDFS source location or write data to the HDFS destination.",
                "type": "string",
                "maxLength": 4096,
                "pattern": "^[a-zA-Z0-9_\\-\\+\\./\\(\\)\\$\\p{Zs}]+$"
            },
            "LocationArn": {
                "description": "The Amazon Resource Name (ARN) of the HDFS location.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$",
                "maxLength": 128
            },
            "LocationUri": {
                "description": "The URL of the HDFS location that was described.",
                "type": "string",
                "pattern": "^(efs|nfs|s3|smb|fsxw|hdfs)://[a-zA-Z0-9.:/\\-]+$",
                "maxLength": 4356
            }
        }
    },
    "AWS::DataSync::LocationNFS": {
        "properties": {
            "MountOptions": {
                "$ref": "#/definitions/MountOptions",
                "default": {
                    "Version": "AUTOMATIC"
                }
            },
            "OnPremConfig": {
                "$ref": "#/definitions/OnPremConfig"
            },
            "ServerHostname": {
                "description": "The name of the NFS server. This value is the IP address or DNS name of the NFS server.",
                "type": "string",
                "pattern": "^(([a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9\\-]*[A-Za-z0-9])$",
                "maxLength": 255
            },
            "Subdirectory": {
                "description": "The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination.",
                "type": "string",
                "maxLength": 4096,
                "pattern": "^[a-zA-Z0-9_\\-\\+\\./\\(\\)\\$\\p{Zs}]+$"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "LocationArn": {
                "description": "The Amazon Resource Name (ARN) of the NFS location.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$",
                "maxLength": 128
            },
            "LocationUri": {
                "description": "The URL of the NFS location that was described.",
                "type": "string",
                "pattern": "^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9./\\-]+$",
                "maxLength": 4356
            }
        }
    },
    "AWS::DataSync::LocationObjectStorage": {
        "properties": {
            "AccessKey": {
                "description": "Optional. The access key is used if credentials are required to access the self-managed object storage server.",
                "type": "string",
                "minLength": 8,
                "maxLength": 200,
                "pattern": "^.+$"
            },
            "AgentArns": {
                "description": "The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.",
                "type": "array",
                "items": {
                    "type": "string",
                    "maxLength": 128,
                    "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:agent/agent-[0-9a-z]{17}$"
                },
                "minItems": 1,
                "maxItems": 4,
                "insertionOrder": false
            },
            "BucketName": {
                "description": "The name of the bucket on the self-managed object storage server.",
                "type": "string",
                "maxLength": 63,
                "minLength": 3,
                "pattern": "^[a-zA-Z0-9_\\-\\+\\./\\(\\)\\$\\p{Zs}]+$"
            },
            "SecretKey": {
                "description": "Optional. The secret key is used if credentials are required to access the self-managed object storage server.",
                "type": "string",
                "minLength": 8,
                "maxLength": 200,
                "pattern": "^.+$"
            },
            "ServerHostname": {
                "description": "The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server.",
                "type": "string",
                "maxLength": 255,
                "pattern": "^(([a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9\\-]*[A-Za-z0-9])$"
            },
            "ServerPort": {
                "description": "The port that your self-managed server accepts inbound network traffic on.",
                "type": "integer",
                "minimum": 1,
                "maximum": 65536
            },
            "ServerProtocol": {
                "description": "The protocol that the object storage server uses to communicate.",
                "type": "string",
                "enum": [
                    "HTTPS",
                    "HTTP"
                ]
            },
            "Subdirectory": {
                "description": "The subdirectory in the self-managed object storage server that is used to read data from.",
                "type": "string",
                "maxLength": 4096,
                "pattern": "^[a-zA-Z0-9_\\-\\+\\./\\(\\)\\p{Zs}]*$"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "LocationArn": {
                "description": "The Amazon Resource Name (ARN) of the location that is created.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$",
                "maxLength": 128
            },
            "LocationUri": {
                "description": "The URL of the object storage location that was described.",
                "type": "string",
                "pattern": "^(efs|nfs|s3|smb|fsxw|object-storage)://[a-zA-Z0-9./\\-]+$",
                "maxLength": 4356
            }
        }
    },
    "AWS::DataSync::LocationS3": {
        "properties": {
            "S3Config": {
                "$ref": "#/definitions/S3Config"
            },
            "S3BucketArn": {
                "description": "The Amazon Resource Name (ARN) of the Amazon S3 bucket.",
                "type": "string",
                "maxLength": 156,
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):s3:[a-z\\-0-9]*:[0-9]*:.*$"
            },
            "Subdirectory": {
                "description": "A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.",
                "type": "string",
                "maxLength": 1024,
                "pattern": "^[\\p{L}\\p{M}\\p{Z}\\p{S}\\p{N}\\p{P}\\p{C}]*$"
            },
            "S3StorageClass": {
                "description": "The Amazon S3 storage class you want to store your files in when this location is used as a task destination.",
                "type": "string",
                "enum": [
                    "STANDARD",
                    "STANDARD_IA",
                    "ONEZONE_IA",
                    "INTELLIGENT_TIERING",
                    "GLACIER",
                    "GLACIER_INSTANT_RETRIEVAL",
                    "DEEP_ARCHIVE"
                ],
                "default": "STANDARD"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "LocationArn": {
                "description": "The Amazon Resource Name (ARN) of the Amazon S3 bucket location.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$",
                "maxLength": 128
            },
            "LocationUri": {
                "description": "The URL of the S3 location that was described.",
                "type": "string",
                "pattern": "^(efs|nfs|s3|smb|fsxw)://[a-zA-Z0-9.\\-/]+$",
                "maxLength": 4356
            }
        }
    },
    "AWS::GameLift::Location": {
        "properties": {
            "LocationName": {
                "type": "string",
                "minLength": 8,
                "maxLength": 64,
                "pattern": "^custom-[A-Za-z0-9\\-]+"
            },
            "LocationArn": {
                "type": "string",
                "pattern": "^arn:.*:location/custom-\\S+"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "maxItems": 200,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::DocDBElastic::Cluster": {
        "properties": {
            "ClusterName": {
                "type": "string",
                "pattern": "[a-zA-z][a-zA-Z0-9]*(-[a-zA-Z0-9]+)*",
                "maxLength": 50,
                "minLength": 1
            },
            "ClusterArn": {
                "type": "string"
            },
            "AdminUserName": {
                "type": "string"
            },
            "AdminUserPassword": {
                "type": "string"
            },
            "ShardCapacity": {
                "type": "integer"
            },
            "ShardCount": {
                "type": "integer"
            },
            "VpcSecurityGroupIds": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "SubnetIds": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "PreferredMaintenanceWindow": {
                "type": "string"
            },
            "KmsKeyId": {
                "type": "string"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "insertionOrder": false,
                "uniqueItems": true,
                "maxItems": 50,
                "minItems": 0
            },
            "AuthType": {
                "type": "string"
            }
        }
    },
    "AWS::MemoryDB::Cluster": {
        "properties": {
            "ClusterName": {
                "description": "The name of the cluster. This value must be unique as it also serves as the cluster identifier.",
                "pattern": "[a-z][a-z0-9\\-]*",
                "type": "string"
            },
            "Description": {
                "description": "An optional description of the cluster.",
                "type": "string"
            },
            "Status": {
                "description": "The status of the cluster. For example, Available, Updating, Creating.",
                "type": "string"
            },
            "NodeType": {
                "description": "The compute and memory capacity of the nodes in the cluster.",
                "type": "string"
            },
            "NumShards": {
                "description": "The number of shards the cluster will contain.",
                "type": "integer"
            },
            "NumReplicasPerShard": {
                "description": "The number of replicas to apply to each shard. The limit is 5.",
                "type": "integer"
            },
            "SubnetGroupName": {
                "description": "The name of the subnet group to be used for the cluster.",
                "type": "string"
            },
            "SecurityGroupIds": {
                "description": "One or more Amazon VPC security groups associated with this cluster.",
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "MaintenanceWindow": {
                "description": "Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.",
                "type": "string"
            },
            "ParameterGroupName": {
                "description": "The name of the parameter group associated with the cluster.",
                "type": "string"
            },
            "ParameterGroupStatus": {
                "description": "The status of the parameter group used by the cluster.",
                "type": "string"
            },
            "Port": {
                "description": "The port number on which each member of the cluster accepts connections.",
                "type": "integer"
            },
            "SnapshotRetentionLimit": {
                "description": "The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.",
                "type": "integer"
            },
            "SnapshotWindow": {
                "description": "The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.",
                "type": "string"
            },
            "ACLName": {
                "description": "The name of the Access Control List to associate with the cluster.",
                "type": "string",
                "pattern": "[a-zA-Z][a-zA-Z0-9\\-]*"
            },
            "SnsTopicArn": {
                "description": "The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.",
                "type": "string"
            },
            "SnsTopicStatus": {
                "description": "The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled.",
                "type": "string"
            },
            "TLSEnabled": {
                "description": "A flag that enables in-transit encryption when set to true.\n\nYou cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.",
                "type": "boolean"
            },
            "DataTiering": {
                "type": "object",
                "description": "Enables data tiering. Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes.",
                "$ref": "#/definitions/DataTieringStatus"
            },
            "KmsKeyId": {
                "description": "The ID of the KMS key used to encrypt the cluster.",
                "type": "string"
            },
            "SnapshotArns": {
                "description": "A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.",
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "SnapshotName": {
                "description": "The name of a snapshot from which to restore data into the new cluster. The snapshot status changes to restoring while the new cluster is being created.",
                "type": "string"
            },
            "FinalSnapshotName": {
                "description": "The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.",
                "type": "string"
            },
            "ARN": {
                "description": "The Amazon Resource Name (ARN) of the cluster.",
                "type": "string"
            },
            "EngineVersion": {
                "description": "The Redis engine version used by the cluster.",
                "type": "string"
            },
            "ClusterEndpoint": {
                "description": "The cluster endpoint.",
                "$ref": "#/definitions/Endpoint"
            },
            "AutoMinorVersionUpgrade": {
                "description": "A flag that enables automatic minor version upgrade when set to true.\n\nYou cannot modify the value of AutoMinorVersionUpgrade after the cluster is created. To enable AutoMinorVersionUpgrade on a cluster you must set AutoMinorVersionUpgrade to true when you create a cluster.",
                "type": "boolean"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this cluster.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::IoT::CustomMetric": {
        "properties": {
            "MetricName": {
                "description": "The name of the custom metric. This will be used in the metric report submitted from the device/thing. Shouldn't begin with aws: . Cannot be updated once defined.",
                "type": "string",
                "pattern": "[a-zA-Z0-9:_-]+",
                "minLength": 1,
                "maxLength": 128
            },
            "DisplayName": {
                "description": "Field represents a friendly name in the console for the custom metric; it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated once defined.",
                "type": "string",
                "maxLength": 128
            },
            "MetricType": {
                "description": "The type of the custom metric. Types include string-list, ip-address-list, number-list, and number.",
                "type": "string",
                "enum": [
                    "string-list",
                    "ip-address-list",
                    "number-list",
                    "number"
                ]
            },
            "MetricArn": {
                "description": "The Amazon Resource Number (ARN) of the custom metric.",
                "type": "string",
                "minLength": 20,
                "maxLength": 2048
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "description": "An array of key-value pairs to apply to this resource.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::ServiceCatalogAppRegistry::ResourceAssociation": {
        "properties": {
            "Application": {
                "type": "string",
                "description": "The name or the Id of the Application.",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "\\w+|[a-z0-9]{12}"
            },
            "Resource": {
                "type": "string",
                "description": "The name or the Id of the Resource.",
                "pattern": "\\w+|arn:aws[-a-z]*:cloudformation:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:stack/[a-zA-Z][-A-Za-z0-9]{0,127}/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}"
            },
            "ResourceType": {
                "type": "string",
                "description": "The type of the CFN Resource for now it's enum CFN_STACK.",
                "enum": [
                    "CFN_STACK"
                ]
            },
            "ApplicationArn": {
                "type": "string",
                "pattern": "arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[a-z0-9]+"
            },
            "ResourceArn": {
                "type": "string",
                "pattern": "arn:aws[-a-z]*:cloudformation:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:stack/[a-zA-Z][-A-Za-z0-9]{0,127}/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}"
            },
            "Id": {
                "type": "string"
            }
        }
    },
    "AWS::ResilienceHub::ResiliencyPolicy": {
        "properties": {
            "PolicyName": {
                "description": "Name of Resiliency Policy.",
                "type": "string",
                "pattern": "^[A-Za-z0-9][A-Za-z0-9_\\-]{1,59}$"
            },
            "PolicyDescription": {
                "description": "Description of Resiliency Policy.",
                "type": "string",
                "maxLength": 500
            },
            "DataLocationConstraint": {
                "type": "string",
                "description": "Data Location Constraint of the Policy.",
                "enum": [
                    "AnyLocation",
                    "SameContinent",
                    "SameCountry"
                ]
            },
            "Tier": {
                "type": "string",
                "description": "Resiliency Policy Tier.",
                "enum": [
                    "MissionCritical",
                    "Critical",
                    "Important",
                    "CoreServices",
                    "NonCritical"
                ]
            },
            "Policy": {
                "$ref": "#/definitions/PolicyMap"
            },
            "PolicyArn": {
                "type": "string",
                "description": "Amazon Resource Name (ARN) of the Resiliency Policy.",
                "pattern": "^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$"
            },
            "Tags": {
                "$ref": "#/definitions/TagMap"
            }
        }
    },
    "AWS::XRay::ResourcePolicy": {
        "properties": {
            "PolicyName": {
                "description": "The name of the resource policy. Must be unique within a specific AWS account.",
                "type": "string",
                "pattern": "[\\w+=,.@-]+",
                "minLength": 1,
                "maxLength": 128
            },
            "PolicyDocument": {
                "description": "The resource policy document, which can be up to 5kb in size.",
                "type": "string",
                "minLength": 1,
                "maxLength": 5120
            },
            "BypassPolicyLockoutCheck": {
                "description": "A flag to indicate whether to bypass the resource policy lockout safety check",
                "type": "boolean"
            }
        }
    },
    "AWS::MemoryDB::User": {
        "properties": {
            "Status": {
                "description": "Indicates the user status. Can be \"active\", \"modifying\" or \"deleting\".",
                "type": "string"
            },
            "UserName": {
                "description": "The name of the user.",
                "pattern": "[a-z][a-z0-9\\\\-]*",
                "type": "string"
            },
            "AccessString": {
                "description": "Access permissions string used for this user account.",
                "type": "string"
            },
            "AuthenticationMode": {
                "type": "object",
                "properties": {
                    "Type": {
                        "type": "string",
                        "description": "Type of authentication strategy for this user.",
                        "enum": [
                            "password"
                        ]
                    },
                    "Passwords": {
                        "type": "array",
                        "$comment": "List of passwords.",
                        "uniqueItems": true,
                        "insertionOrder": true,
                        "maxItems": 2,
                        "minItems": 1,
                        "items": {
                            "type": "string"
                        },
                        "description": "Passwords used for this user account. You can create up to two passwords for each user."
                    }
                },
                "additionalProperties": false
            },
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the user account.",
                "type": "string"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this user.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Glue::SchemaVersion": {
        "properties": {
            "Schema": {
                "$ref": "#/definitions/Schema"
            },
            "SchemaDefinition": {
                "type": "string",
                "description": "Complete definition of the schema in plain-text.",
                "minLength": 1,
                "maxLength": 170000
            },
            "VersionId": {
                "type": "string",
                "description": "Represents the version ID associated with the schema version.",
                "pattern": "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}"
            }
        }
    },
    "AWS::SupportApp::SlackWorkspaceConfiguration": {
        "properties": {
            "TeamId": {
                "description": "The team ID in Slack, which uniquely identifies a workspace.",
                "type": "string",
                "pattern": "^\\S+$",
                "minLength": 1,
                "maxLength": 256
            },
            "VersionId": {
                "description": "An identifier used to update an existing Slack workspace configuration in AWS CloudFormation.",
                "type": "string",
                "pattern": "^[0-9]+$",
                "minLength": 1,
                "maxLength": 256
            }
        }
    },
    "AWS::QuickSight::DataSet": {
        "properties": {
            "Arn": {
                "type": "string",
                "description": "<p>The Amazon Resource Name (ARN) of the resource.</p>"
            },
            "AwsAccountId": {
                "type": "string",
                "maxLength": 12,
                "minLength": 12,
                "pattern": "^[0-9]{12}$"
            },
            "ColumnGroups": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ColumnGroup"
                },
                "maxItems": 8,
                "minItems": 1,
                "description": "<p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>"
            },
            "ColumnLevelPermissionRules": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ColumnLevelPermissionRule"
                },
                "minItems": 1
            },
            "ConsumedSpiceCapacityInBytes": {
                "type": "number",
                "description": "<p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't\n            imported into SPICE.</p>"
            },
            "CreatedTime": {
                "type": "string",
                "description": "<p>The time that this dataset was created.</p>",
                "format": "string"
            },
            "DataSetId": {
                "type": "string"
            },
            "FieldFolders": {
                "$ref": "#/definitions/FieldFolderMap"
            },
            "ImportMode": {
                "$ref": "#/definitions/DataSetImportMode"
            },
            "LastUpdatedTime": {
                "type": "string",
                "description": "<p>The last time that this dataset was updated.</p>",
                "format": "string"
            },
            "LogicalTableMap": {
                "$ref": "#/definitions/LogicalTableMap"
            },
            "Name": {
                "type": "string",
                "maxLength": 128,
                "minLength": 1,
                "description": "<p>The display name for the dataset.</p>"
            },
            "OutputColumns": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/OutputColumn"
                },
                "description": "<p>The list of columns after all transforms. These columns are available in templates,\n            analyses, and dashboards.</p>"
            },
            "Permissions": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ResourcePermission"
                },
                "maxItems": 64,
                "minItems": 1,
                "description": "<p>A list of resource permissions on the dataset.</p>"
            },
            "PhysicalTableMap": {
                "$ref": "#/definitions/PhysicalTableMap"
            },
            "RowLevelPermissionDataSet": {
                "$ref": "#/definitions/RowLevelPermissionDataSet"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 200,
                "minItems": 1,
                "description": "<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>"
            },
            "IngestionWaitPolicy": {
                "$ref": "#/definitions/IngestionWaitPolicy"
            },
            "DataSetUsageConfiguration": {
                "$ref": "#/definitions/DataSetUsageConfiguration"
            }
        }
    },
    "AWS::QuickSight::DataSource": {
        "properties": {
            "AlternateDataSourceParameters": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/DataSourceParameters"
                },
                "maxItems": 50,
                "minItems": 1,
                "description": "<p>A set of alternate data source parameters that you want to share for the credentials\n            stored with this data source. The credentials are applied in tandem with the data source\n            parameters when you copy a data source by using a create or update request. The API\n            operation compares the <code>DataSourceParameters</code> structure that's in the request\n            with the structures in the <code>AlternateDataSourceParameters</code> allow list. If the\n            structures are an exact match, the request is allowed to use the credentials from this\n            existing data source. If the <code>AlternateDataSourceParameters</code> list is null,\n            the <code>Credentials</code> originally used with this <code>DataSourceParameters</code>\n            are automatically allowed.</p>"
            },
            "Arn": {
                "type": "string",
                "description": "<p>The Amazon Resource Name (ARN) of the data source.</p>"
            },
            "AwsAccountId": {
                "type": "string",
                "maxLength": 12,
                "minLength": 12,
                "pattern": "^[0-9]{12}$"
            },
            "CreatedTime": {
                "type": "string",
                "description": "<p>The time that this data source was created.</p>",
                "format": "date-time"
            },
            "Credentials": {
                "$ref": "#/definitions/DataSourceCredentials"
            },
            "DataSourceId": {
                "type": "string"
            },
            "DataSourceParameters": {
                "$ref": "#/definitions/DataSourceParameters"
            },
            "ErrorInfo": {
                "$ref": "#/definitions/DataSourceErrorInfo"
            },
            "LastUpdatedTime": {
                "type": "string",
                "description": "<p>The last time that this data source was updated.</p>",
                "format": "date-time"
            },
            "Name": {
                "type": "string",
                "maxLength": 128,
                "minLength": 1,
                "description": "<p>A display name for the data source.</p>"
            },
            "Permissions": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ResourcePermission"
                },
                "maxItems": 64,
                "minItems": 1,
                "description": "<p>A list of resource permissions on the data source.</p>"
            },
            "SslProperties": {
                "$ref": "#/definitions/SslProperties"
            },
            "Status": {
                "$ref": "#/definitions/ResourceStatus"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 200,
                "minItems": 1,
                "description": "<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.</p>"
            },
            "Type": {
                "$ref": "#/definitions/DataSourceType"
            },
            "VpcConnectionProperties": {
                "$ref": "#/definitions/VpcConnectionProperties"
            }
        }
    },
    "AWS::QuickSight::Theme": {
        "properties": {
            "Arn": {
                "type": "string",
                "description": "<p>The Amazon Resource Name (ARN) of the theme.</p>"
            },
            "AwsAccountId": {
                "type": "string",
                "maxLength": 12,
                "minLength": 12,
                "pattern": "^[0-9]{12}$"
            },
            "BaseThemeId": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "[\\w\\-]+",
                "description": "<p>The ID of the theme that a custom theme will inherit from. All themes inherit from one of\n\t\t\tthe starting themes defined by Amazon QuickSight. For a list of the starting themes, use\n\t\t\t\t<code>ListThemes</code> or choose <b>Themes</b> from\n\t\t\twithin a QuickSight analysis. </p>"
            },
            "Configuration": {
                "$ref": "#/definitions/ThemeConfiguration"
            },
            "CreatedTime": {
                "type": "string",
                "description": "<p>The date and time that the theme was created.</p>",
                "format": "string"
            },
            "LastUpdatedTime": {
                "type": "string",
                "description": "<p>The date and time that the theme was last updated.</p>",
                "format": "string"
            },
            "Name": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "description": "<p>A display name for the theme.</p>"
            },
            "Permissions": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ResourcePermission"
                },
                "maxItems": 64,
                "minItems": 1,
                "description": "<p>A valid grouping of resource permissions to apply to the new theme.\n\t\t\t</p>"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 200,
                "minItems": 1,
                "description": "<p>A map of the key-value pairs for the resource tag or tags that you want to add to the\n\t\t\tresource.</p>"
            },
            "ThemeId": {
                "type": "string",
                "maxLength": 2048,
                "minLength": 1,
                "pattern": "[\\w\\-]+"
            },
            "Type": {
                "$ref": "#/definitions/ThemeType"
            },
            "Version": {
                "$ref": "#/definitions/ThemeVersion"
            },
            "VersionDescription": {
                "type": "string",
                "maxLength": 512,
                "minLength": 1,
                "description": "<p>A description of the first version of the theme that you're creating. Every time\n\t\t\t\t<code>UpdateTheme</code> is called, a new version is created. Each version of the\n\t\t\ttheme has a description of the version in the <code>VersionDescription</code>\n\t\t\tfield.</p>"
            }
        }
    },
    "AWS::Redshift::EndpointAccess": {
        "properties": {
            "Address": {
                "description": "The DNS address of the endpoint.",
                "type": "string"
            },
            "ClusterIdentifier": {
                "description": "A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account",
                "type": "string"
            },
            "VpcSecurityGroups": {
                "description": "A list of Virtual Private Cloud (VPC) security groups to be associated with the endpoint.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/VpcSecurityGroup"
                }
            },
            "ResourceOwner": {
                "description": "The AWS account ID of the owner of the cluster.",
                "type": "string",
                "pattern": "^\\d{12}$"
            },
            "EndpointStatus": {
                "description": "The status of the endpoint.",
                "type": "string"
            },
            "EndpointName": {
                "description": "The name of the endpoint.",
                "type": "string",
                "pattern": "^(?=^[a-z][a-z0-9]*(-[a-z0-9]+)*$).{1,30}$"
            },
            "EndpointCreateTime": {
                "description": "The time (UTC) that the endpoint was created.",
                "type": "string"
            },
            "SubnetGroupName": {
                "description": "The subnet group name where Amazon Redshift chooses to deploy the endpoint.",
                "type": "string",
                "pattern": "^(?=^[a-zA-Z0-9-]+$).{1,255}$"
            },
            "Port": {
                "description": "The port number on which the cluster accepts incoming connections.",
                "type": "integer"
            },
            "VpcSecurityGroupIds": {
                "description": "A list of vpc security group ids to apply to the created endpoint access.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "VpcEndpoint": {
                "description": "The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.",
                "type": "object",
                "properties": {
                    "VpcEndpointId": {
                        "type": "string",
                        "description": "The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy."
                    },
                    "VpcId": {
                        "type": "string",
                        "description": "The VPC identifier that the endpoint is associated."
                    },
                    "NetworkInterfaces": {
                        "type": "array",
                        "insertionOrder": false,
                        "description": "One or more network interfaces of the endpoint. Also known as an interface endpoint.",
                        "items": {
                            "$ref": "#/definitions/NetworkInterface"
                        }
                    }
                },
                "additionalProperties": false
            }
        }
    },
    "AWS::Timestream::Database": {
        "properties": {
            "Arn": {
                "type": "string"
            },
            "DatabaseName": {
                "description": "The name for the database. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the database name.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_.-]{3,256}$"
            },
            "KmsKeyId": {
                "description": "The KMS key for the database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account.",
                "type": "string",
                "minLength": 1,
                "maxLength": 2048
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 200,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Timestream::Table": {
        "properties": {
            "Arn": {
                "type": "string"
            },
            "Name": {
                "description": "The table name exposed as a read-only attribute.",
                "type": "string"
            },
            "DatabaseName": {
                "description": "The name for the database which the table to be created belongs to.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_.-]{3,256}$"
            },
            "TableName": {
                "description": "The name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_.-]{3,256}$"
            },
            "RetentionProperties": {
                "description": "The retention duration of the memory store and the magnetic store.",
                "type": "object",
                "properties": {
                    "MemoryStoreRetentionPeriodInHours": {
                        "description": "The duration for which data must be stored in the memory store.",
                        "type": "string"
                    },
                    "MagneticStoreRetentionPeriodInDays": {
                        "description": "The duration for which data must be stored in the magnetic store.",
                        "type": "string"
                    }
                },
                "additionalProperties": false
            },
            "MagneticStoreWriteProperties": {
                "description": "The properties that determine whether magnetic store writes are enabled.",
                "type": "object",
                "properties": {
                    "EnableMagneticStoreWrites": {
                        "description": "Boolean flag indicating whether magnetic store writes are enabled.",
                        "type": "boolean"
                    },
                    "MagneticStoreRejectedDataLocation": {
                        "description": "Location to store information about records that were asynchronously rejected during magnetic store writes.",
                        "type": "object",
                        "properties": {
                            "S3Configuration": {
                                "description": "S3 configuration for location to store rejections from magnetic store writes",
                                "type": "object",
                                "properties": {
                                    "BucketName": {
                                        "description": "The bucket name used to store the data.",
                                        "type": "string"
                                    },
                                    "ObjectKeyPrefix": {
                                        "description": "String used to prefix all data in the bucket.",
                                        "type": "string"
                                    },
                                    "EncryptionOption": {
                                        "description": "Either SSE_KMS or SSE_S3.",
                                        "type": "string"
                                    },
                                    "KmsKeyId": {
                                        "description": "Must be provided if SSE_KMS is specified as the encryption option",
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "EncryptionOption",
                                    "BucketName"
                                ],
                                "additionalProperties": false
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "required": [
                    "EnableMagneticStoreWrites"
                ],
                "additionalProperties": false
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 200,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::RDS::DBSubnetGroup": {
        "properties": {
            "DBSubnetGroupDescription": {
                "type": "string"
            },
            "DBSubnetGroupName": {
                "type": "string",
                "pattern": "^(?!default$)[a-zA-Z]{1}[a-zA-Z0-9-_\\.\\s]{0,254}$"
            },
            "SubnetIds": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "type": "string"
                }
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "uniqueItems": false,
                "insertionOrder": false,
                "description": "An array of key-value pairs to apply to this resource.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::IAM::ServerCertificate": {
        "properties": {
            "CertificateBody": {
                "minLength": 1,
                "maxLength": 16384,
                "pattern": "[\\u0009\\u000A\\u000D\\u0020-\\u00FF]+",
                "type": "string"
            },
            "CertificateChain": {
                "minLength": 1,
                "maxLength": 2097152,
                "pattern": "[\\u0009\\u000A\\u000D\\u0020-\\u00FF]+",
                "type": "string"
            },
            "ServerCertificateName": {
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[\\w+=,.@-]+",
                "type": "string"
            },
            "Path": {
                "minLength": 1,
                "maxLength": 512,
                "pattern": "(\\u002F)|(\\u002F[\\u0021-\\u007F]+\\u002F)",
                "type": "string"
            },
            "PrivateKey": {
                "minLength": 1,
                "maxLength": 16384,
                "pattern": "[\\u0009\\u000A\\u000D\\u0020-\\u00FF]+",
                "type": "string"
            },
            "Arn": {
                "description": "Amazon Resource Name (ARN) of the server certificate",
                "minLength": 1,
                "maxLength": 1600,
                "type": "string"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::IAM::VirtualMFADevice": {
        "properties": {
            "VirtualMfaDeviceName": {
                "minLength": 1,
                "maxLength": 226,
                "pattern": "[\\w+=,.@-]+",
                "type": "string"
            },
            "Path": {
                "minLength": 1,
                "maxLength": 512,
                "pattern": "(\\u002F)|(\\u002F[\\u0021-\\u007F]+\\u002F)",
                "type": "string"
            },
            "SerialNumber": {
                "minLength": 9,
                "maxLength": 256,
                "pattern": "[\\w+=/:,.@-]+",
                "type": "string"
            },
            "Users": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "type": "string"
                }
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::ServiceCatalog::ServiceActionAssociation": {
        "properties": {
            "ProductId": {
                "type": "string",
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_-]{1,99}\\Z",
                "minLength": 1,
                "maxLength": 100
            },
            "ProvisioningArtifactId": {
                "type": "string",
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_-]{1,99}\\Z",
                "minLength": 1,
                "maxLength": 100
            },
            "ServiceActionId": {
                "type": "string",
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_-]{1,99}\\Z",
                "minLength": 1,
                "maxLength": 100
            }
        }
    },
    "AWS::Route53::DNSSEC": {
        "properties": {
            "HostedZoneId": {
                "description": "The unique string (ID) used to identify a hosted zone.",
                "type": "string",
                "pattern": "^[A-Z0-9]{1,32}$"
            }
        }
    },
    "AWS::Lambda::Function": {
        "properties": {
            "Description": {
                "description": "A description of the function.",
                "type": "string",
                "maxLength": 256
            },
            "TracingConfig": {
                "description": "Set Mode to Active to sample and trace a subset of incoming requests with AWS X-Ray.",
                "$ref": "#/definitions/TracingConfig"
            },
            "VpcConfig": {
                "description": "For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC.",
                "$ref": "#/definitions/VpcConfig"
            },
            "RuntimeManagementConfig": {
                "description": "RuntimeManagementConfig",
                "$ref": "#/definitions/RuntimeManagementConfig"
            },
            "ReservedConcurrentExecutions": {
                "description": "The number of simultaneous executions to reserve for the function.",
                "type": "integer",
                "minimum": 0
            },
            "SnapStart": {
                "description": "The SnapStart setting of your function",
                "$ref": "#/definitions/SnapStart"
            },
            "FileSystemConfigs": {
                "maxItems": 1,
                "description": "Connection settings for an Amazon EFS file system. To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an AWS::EFS::MountTarget resource, you must also specify a DependsOn attribute to ensure that the mount target is created or updated before the function.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/FileSystemConfig"
                }
            },
            "FunctionName": {
                "minLength": 1,
                "description": "The name of the Lambda function, up to 64 characters in length. If you don't specify a name, AWS CloudFormation generates one.",
                "type": "string",
                "m_pattern": "^[a-zA-Z0-9-_]{1,64}",
                "m_alt_english": "Use only letters, numbers, hyphens, or underscores with no spaces."
            },
            "Runtime": {
                "description": "The identifier of the function's runtime.",
                "type": "string"
            },
            "KmsKeyArn": {
                "pattern": "^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$",
                "description": "The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.",
                "type": "string"
            },
            "PackageType": {
                "description": "PackageType.",
                "type": "string",
                "enum": [
                    "Image",
                    "Zip"
                ]
            },
            "CodeSigningConfigArn": {
                "pattern": "arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1}:\\d{12}:code-signing-config:csc-[a-z0-9]{17}",
                "description": "A unique Arn for CodeSigningConfig resource",
                "type": "string"
            },
            "Layers": {
                "uniqueItems": false,
                "description": "A list of function layers to add to the function's execution environment. Specify each layer by its ARN, including the version.",
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "Tags": {
                "uniqueItems": true,
                "description": "A list of tags to apply to the function.",
                "insertionOrder": false,
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "ImageConfig": {
                "description": "ImageConfig",
                "$ref": "#/definitions/ImageConfig"
            },
            "MemorySize": {
                "description": "The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.",
                "type": "integer"
            },
            "DeadLetterConfig": {
                "description": "A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing.",
                "$ref": "#/definitions/DeadLetterConfig"
            },
            "Timeout": {
                "description": "The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.",
                "type": "integer",
                "minimum": 1
            },
            "Handler": {
                "pattern": "^[^\\s]+$",
                "description": "The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime",
                "type": "string",
                "maxLength": 128
            },
            "SnapStartResponse": {
                "description": "The SnapStart response of your function",
                "$ref": "#/definitions/SnapStartResponse"
            },
            "Code": {
                "description": "The code for the function.",
                "$ref": "#/definitions/Code"
            },
            "Role": {
                "pattern": "^arn:(aws[a-zA-Z-]*)?:iam::\\d{12}:role/?[a-zA-Z_0-9+=,.@\\-_/]+$",
                "description": "The Amazon Resource Name (ARN) of the function's execution role.",
                "type": "string"
            },
            "Environment": {
                "description": "Environment variables that are accessible from function code during execution.",
                "$ref": "#/definitions/Environment"
            },
            "Arn": {
                "description": "Unique identifier for function resources",
                "type": "string"
            },
            "EphemeralStorage": {
                "description": "A function's ephemeral storage settings.",
                "$ref": "#/definitions/EphemeralStorage"
            },
            "Architectures": {
                "minItems": 1,
                "maxItems": 1,
                "uniqueItems": true,
                "type": "array",
                "items": {
                    "type": "string",
                    "enum": [
                        "x86_64",
                        "arm64"
                    ]
                }
            }
        }
    },
    "AWS::IoT::ProvisioningTemplate": {
        "properties": {
            "TemplateArn": {
                "type": "string"
            },
            "TemplateName": {
                "type": "string",
                "pattern": "^[0-9A-Za-z_-]+$",
                "minLength": 1,
                "maxLength": 36
            },
            "Description": {
                "type": "string",
                "maxLength": 500
            },
            "Enabled": {
                "type": "boolean"
            },
            "ProvisioningRoleArn": {
                "type": "string"
            },
            "TemplateBody": {
                "type": "string"
            },
            "TemplateType": {
                "type": "string",
                "enum": [
                    "FLEET_PROVISIONING",
                    "JITP"
                ]
            },
            "PreProvisioningHook": {
                "$ref": "#/definitions/ProvisioningHook"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Cassandra::Table": {
        "properties": {
            "KeyspaceName": {
                "description": "Name for Cassandra keyspace",
                "type": "string",
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$"
            },
            "TableName": {
                "description": "Name for Cassandra table",
                "type": "string",
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$"
            },
            "RegularColumns": {
                "description": "Non-key columns of the table",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Column"
                }
            },
            "PartitionKeyColumns": {
                "description": "Partition key columns of the table",
                "type": "array",
                "minItems": 1,
                "uniqueItems": true,
                "insertionOrder": true,
                "items": {
                    "$ref": "#/definitions/Column"
                }
            },
            "ClusteringKeyColumns": {
                "description": "Clustering key columns of the table",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": true,
                "items": {
                    "$ref": "#/definitions/ClusteringKeyColumn"
                }
            },
            "BillingMode": {
                "$ref": "#/definitions/BillingMode"
            },
            "PointInTimeRecoveryEnabled": {
                "description": "Indicates whether point in time recovery is enabled (true) or disabled (false) on the table",
                "type": "boolean"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 0,
                "maxItems": 50
            },
            "DefaultTimeToLive": {
                "description": "Default TTL (Time To Live) in seconds, where zero is disabled. If the value is greater than zero, TTL is enabled for the entire table and an expiration timestamp is added to each column.",
                "type": "integer",
                "minimum": 0
            },
            "EncryptionSpecification": {
                "$ref": "#/definitions/EncryptionSpecification"
            }
        }
    },
    "AWS::IoT::Logging": {
        "properties": {
            "AccountId": {
                "description": "Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).",
                "type": "string",
                "minLength": 12,
                "maxLength": 12,
                "pattern": "^[0-9]{12}$"
            },
            "RoleArn": {
                "description": "The ARN of the role that allows IoT to write to Cloudwatch logs.",
                "type": "string",
                "minLength": 20,
                "maxLength": 2048
            },
            "DefaultLogLevel": {
                "description": "The log level to use. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.",
                "type": "string",
                "enum": [
                    "ERROR",
                    "WARN",
                    "INFO",
                    "DEBUG",
                    "DISABLED"
                ]
            }
        }
    },
    "AWS::Logs::MetricFilter": {
        "properties": {
            "FilterName": {
                "description": "A name for the metric filter.",
                "type": "string",
                "minLength": 1,
                "maxLength": 512,
                "pattern": "^[^:*]{1,512}"
            },
            "FilterPattern": {
                "description": "Pattern that Logs follows to interpret each entry in a log.",
                "type": "string",
                "maxLength": 1024
            },
            "LogGroupName": {
                "description": "Existing log group that you want to associate with this filter.",
                "type": "string",
                "minLength": 1,
                "maxLength": 512,
                "pattern": "^[.\\-_/#A-Za-z0-9]{1,512}"
            },
            "MetricTransformations": {
                "description": "A collection of information that defines how metric data gets emitted.",
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/MetricTransformation"
                }
            }
        }
    },
    "AWS::Lightsail::Bucket": {
        "properties": {
            "BucketName": {
                "description": "The name for the bucket.",
                "type": "string",
                "pattern": "^[a-z0-9][a-z0-9-]{1,52}[a-z0-9]$",
                "minLength": 3,
                "maxLength": 54
            },
            "BundleId": {
                "description": "The ID of the bundle to use for the bucket.",
                "type": "string"
            },
            "BucketArn": {
                "type": "string"
            },
            "ObjectVersioning": {
                "description": "Specifies whether to enable or disable versioning of objects in the bucket.",
                "type": "boolean"
            },
            "AccessRules": {
                "$ref": "#/definitions/AccessRules"
            },
            "ResourcesReceivingAccess": {
                "description": "The names of the Lightsail resources for which to set bucket access.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "ReadOnlyAccessAccounts": {
                "description": "An array of strings to specify the AWS account IDs that can access the bucket.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Url": {
                "description": "The URL of the bucket.",
                "type": "string"
            },
            "AbleToUpdateBundle": {
                "description": "Indicates whether the bundle that is currently applied to a bucket can be changed to another bundle. You can update a bucket's bundle only one time within a monthly AWS billing cycle.",
                "type": "boolean"
            }
        }
    },
    "AWS::S3::Bucket": {
        "properties": {
            "AccelerateConfiguration": {
                "$ref": "#/definitions/AccelerateConfiguration",
                "description": "Configuration for the transfer acceleration state."
            },
            "AccessControl": {
                "description": "A canned access control list (ACL) that grants predefined permissions to the bucket.",
                "enum": [
                    "AuthenticatedRead",
                    "AwsExecRead",
                    "BucketOwnerFullControl",
                    "BucketOwnerRead",
                    "LogDeliveryWrite",
                    "Private",
                    "PublicRead",
                    "PublicReadWrite"
                ],
                "type": "string"
            },
            "AnalyticsConfigurations": {
                "description": "The configuration and any analyses for the analytics filter of an Amazon S3 bucket.",
                "items": {
                    "$ref": "#/definitions/AnalyticsConfiguration"
                },
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": true
            },
            "BucketEncryption": {
                "$ref": "#/definitions/BucketEncryption"
            },
            "BucketName": {
                "description": "A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.",
                "maxLength": 63,
                "minLength": 3,
                "pattern": "^[a-z0-9][a-z0-9//.//-]*[a-z0-9]$",
                "type": "string",
                "m_pattern": "(?!(^xn--|.+-s3alias$))^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$",
                "m_alt_pattern": "(?!(^((2(5[0-5]|[0-4][0-9])|[01]?[0-9]{1,2})\\.){3}(2(5[0-5]|[0-4][0-9])|[01]?[0-9]{1,2})$|^xn--|.+-s3alias$))^[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$ ",
                "m_delete_possible": "FALSE"
            },
            "CorsConfiguration": {
                "$ref": "#/definitions/CorsConfiguration",
                "description": "Rules that define cross-origin resource sharing of objects in this bucket."
            },
            "IntelligentTieringConfigurations": {
                "description": "Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.",
                "items": {
                    "$ref": "#/definitions/IntelligentTieringConfiguration"
                },
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": true
            },
            "InventoryConfigurations": {
                "description": "The inventory configuration for an Amazon S3 bucket.",
                "items": {
                    "$ref": "#/definitions/InventoryConfiguration"
                },
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": true
            },
            "LifecycleConfiguration": {
                "$ref": "#/definitions/LifecycleConfiguration",
                "description": "Rules that define how Amazon S3 manages objects during their lifetime."
            },
            "LoggingConfiguration": {
                "$ref": "#/definitions/LoggingConfiguration",
                "description": "Settings that define where logs are stored."
            },
            "MetricsConfigurations": {
                "description": "Settings that define a metrics configuration for the CloudWatch request metrics from the bucket.",
                "items": {
                    "$ref": "#/definitions/MetricsConfiguration"
                },
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": true
            },
            "NotificationConfiguration": {
                "$ref": "#/definitions/NotificationConfiguration",
                "description": "Configuration that defines how Amazon S3 handles bucket notifications."
            },
            "ObjectLockConfiguration": {
                "$ref": "#/definitions/ObjectLockConfiguration",
                "description": "Places an Object Lock configuration on the specified bucket."
            },
            "ObjectLockEnabled": {
                "description": "Indicates whether this bucket has an Object Lock configuration enabled.",
                "type": "boolean"
            },
            "OwnershipControls": {
                "description": "Specifies the container element for object ownership rules.",
                "$ref": "#/definitions/OwnershipControls"
            },
            "PublicAccessBlockConfiguration": {
                "$ref": "#/definitions/PublicAccessBlockConfiguration"
            },
            "ReplicationConfiguration": {
                "$ref": "#/definitions/ReplicationConfiguration",
                "description": "Configuration for replicating objects in an S3 bucket."
            },
            "Tags": {
                "description": "An arbitrary set of tags (key-value pairs) for this S3 bucket.",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "type": "array"
            },
            "VersioningConfiguration": {
                "$ref": "#/definitions/VersioningConfiguration"
            },
            "WebsiteConfiguration": {
                "$ref": "#/definitions/WebsiteConfiguration"
            },
            "Arn": {
                "$ref": "#/definitions/Arn",
                "description": "The Amazon Resource Name (ARN) of the specified bucket.",
                "examples": [
                    "arn:aws:s3:::mybucket"
                ]
            },
            "DomainName": {
                "description": "The IPv4 DNS name of the specified bucket.",
                "examples": [
                    "mystack-mybucket-kdwwxmddtr2g.s3.amazonaws.com"
                ],
                "type": "string"
            },
            "DualStackDomainName": {
                "description": "The IPv6 DNS name of the specified bucket. For more information about dual-stack endpoints, see [Using Amazon S3 Dual-Stack Endpoints](https://docs.aws.amazon.com/AmazonS3/latest/dev/dual-stack-endpoints.html).",
                "examples": [
                    "mystack-mybucket-kdwwxmddtr2g.s3.dualstack.us-east-2.amazonaws.com"
                ],
                "type": "string"
            },
            "RegionalDomainName": {
                "description": "Returns the regional domain name of the specified bucket.",
                "examples": [
                    "mystack-mybucket-kdwwxmddtr2g.s3.us-east-2.amazonaws.com"
                ],
                "type": "string"
            },
            "WebsiteURL": {
                "description": "The Amazon S3 website endpoint for the specified bucket.",
                "examples": [
                    "Example (IPv4): http://mystack-mybucket-kdwwxmddtr2g.s3-website-us-east-2.amazonaws.com/",
                    "Example (IPv6): http://mystack-mybucket-kdwwxmddtr2g.s3.dualstack.us-east-2.amazonaws.com/"
                ],
                "format": "uri",
                "type": "string"
            }
        }
    },
    "AWS::RDS::DBCluster": {
        "properties": {
            "Endpoint": {
                "$ref": "#/definitions/Endpoint"
            },
            "ReadEndpoint": {
                "$ref": "#/definitions/ReadEndpoint"
            },
            "AllocatedStorage": {
                "description": "The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.",
                "type": "integer"
            },
            "AssociatedRoles": {
                "description": "Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/DBClusterRole"
                }
            },
            "AvailabilityZones": {
                "description": "A list of Availability Zones (AZs) where instances in the DB cluster can be created. For information on AWS Regions and Availability Zones, see Choosing the Regions and Availability Zones in the Amazon Aurora User Guide.",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "string"
                }
            },
            "AutoMinorVersionUpgrade": {
                "description": "A value that indicates whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically.",
                "type": "boolean"
            },
            "BacktrackWindow": {
                "description": "The target backtrack window, in seconds. To disable backtracking, set this value to 0.",
                "default": 0,
                "minimum": 0,
                "type": "integer"
            },
            "BackupRetentionPeriod": {
                "description": "The number of days for which automated backups are retained.",
                "default": 1,
                "minimum": 1,
                "type": "integer"
            },
            "CopyTagsToSnapshot": {
                "description": "A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.",
                "type": "boolean"
            },
            "DatabaseName": {
                "description": "The name of your database. If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see Naming Constraints in the Amazon RDS User Guide.",
                "type": "string"
            },
            "DBClusterArn": {
                "type": "string",
                "description": "The Amazon Resource Name (ARN) for the DB cluster."
            },
            "DBClusterInstanceClass": {
                "description": "The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example db.m6g.xlarge.",
                "type": "string"
            },
            "DBClusterResourceId": {
                "description": "The AWS Region-unique, immutable identifier for the DB cluster.",
                "type": "string"
            },
            "DBInstanceParameterGroupName": {
                "description": "The name of the DB parameter group to apply to all instances of the DB cluster.",
                "type": "string"
            },
            "DBSystemId": {
                "description": "Reserved for future use.",
                "type": "string"
            },
            "GlobalClusterIdentifier": {
                "description": "If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. To define the primary database cluster of the global cluster, use the AWS::RDS::GlobalCluster resource.\n\nIf you aren't configuring a global database cluster, don't specify this property.",
                "type": "string",
                "pattern": "^$|^[a-zA-Z]{1}(?:-?[a-zA-Z0-9]){0,62}$",
                "minLength": 0,
                "maxLength": 63
            },
            "DBClusterIdentifier": {
                "description": "The DB cluster identifier. This parameter is stored as a lowercase string.",
                "type": "string",
                "pattern": "^[a-zA-Z]{1}(?:-?[a-zA-Z0-9]){0,62}$",
                "minLength": 1,
                "maxLength": 63
            },
            "DBClusterParameterGroupName": {
                "description": "The name of the DB cluster parameter group to associate with this DB cluster.",
                "type": "string",
                "default": "default.aurora5.6"
            },
            "DBSubnetGroupName": {
                "description": "A DB subnet group that you want to associate with this DB cluster.",
                "type": "string"
            },
            "DeletionProtection": {
                "description": "A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.",
                "type": "boolean"
            },
            "Domain": {
                "description": "The Active Directory directory ID to create the DB cluster in.",
                "type": "string"
            },
            "DomainIAMRoleName": {
                "description": "Specify the name of the IAM role to be used when making API calls to the Directory Service.",
                "type": "string"
            },
            "EnableCloudwatchLogsExports": {
                "description": "The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide.",
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "type": "string"
                }
            },
            "EnableHttpEndpoint": {
                "description": "A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint is disabled.",
                "type": "boolean"
            },
            "EnableIAMDatabaseAuthentication": {
                "description": "A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.",
                "type": "boolean"
            },
            "Engine": {
                "description": "The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora), and aurora-postgresql",
                "type": "string"
            },
            "EngineMode": {
                "description": "The DB engine mode of the DB cluster, either provisioned, serverless, parallelquery, global, or multimaster.",
                "type": "string"
            },
            "EngineVersion": {
                "description": "The version number of the database engine to use.",
                "type": "string"
            },
            "ManageMasterUserPassword": {
                "description": "A value that indicates whether to manage the master user password with AWS Secrets Manager.",
                "type": "boolean"
            },
            "Iops": {
                "description": "The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.",
                "type": "integer"
            },
            "KmsKeyId": {
                "description": "The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. If you enable the StorageEncrypted property but don't specify this property, the default master key is used. If you specify this property, you must set the StorageEncrypted property to true.",
                "type": "string"
            },
            "MasterUsername": {
                "description": "The name of the master user for the DB cluster. You must specify MasterUsername, unless you specify SnapshotIdentifier. In that case, don't specify MasterUsername.",
                "type": "string",
                "pattern": "^[a-zA-Z]{1}[a-zA-Z0-9_]*$",
                "minLength": 1
            },
            "MasterUserPassword": {
                "description": "The master password for the DB instance.",
                "type": "string"
            },
            "MasterUserSecret": {
                "$ref": "#/definitions/MasterUserSecret",
                "description": "Contains the secret managed by RDS in AWS Secrets Manager for the master user password."
            },
            "MonitoringInterval": {
                "description": "The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify 0. The default is 0.",
                "type": "integer",
                "default": 0
            },
            "MonitoringRoleArn": {
                "description": "The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.",
                "type": "string"
            },
            "NetworkType": {
                "description": "The network type of the DB cluster.",
                "type": "string"
            },
            "PerformanceInsightsEnabled": {
                "description": "A value that indicates whether to turn on Performance Insights for the DB cluster.",
                "type": "boolean"
            },
            "PerformanceInsightsKmsKeyId": {
                "description": "The Amazon Web Services KMS key identifier for encryption of Performance Insights data.",
                "type": "string"
            },
            "PerformanceInsightsRetentionPeriod": {
                "description": "The amount of time, in days, to retain Performance Insights data.",
                "type": "integer"
            },
            "Port": {
                "description": "The port number on which the instances in the DB cluster accept connections. Default: 3306 if engine is set as aurora or 5432 if set to aurora-postgresql.",
                "type": "integer"
            },
            "PreferredBackupWindow": {
                "description": "The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide.",
                "type": "string"
            },
            "PreferredMaintenanceWindow": {
                "description": "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide.",
                "type": "string"
            },
            "PubliclyAccessible": {
                "description": "A value that indicates whether the DB cluster is publicly accessible.",
                "type": "boolean"
            },
            "ReplicationSourceIdentifier": {
                "description": "The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.",
                "type": "string"
            },
            "RestoreType": {
                "description": "The type of restore to be performed. You can specify one of the following values:\nfull-copy - The new DB cluster is restored as a full copy of the source DB cluster.\ncopy-on-write - The new DB cluster is restored as a clone of the source DB cluster.",
                "type": "string",
                "default": "full-copy"
            },
            "ServerlessV2ScalingConfiguration": {
                "description": "Contains the scaling configuration of an Aurora Serverless v2 DB cluster.",
                "$ref": "#/definitions/ServerlessV2ScalingConfiguration"
            },
            "ScalingConfiguration": {
                "description": "The ScalingConfiguration property type specifies the scaling configuration of an Aurora Serverless DB cluster.",
                "$ref": "#/definitions/ScalingConfiguration"
            },
            "SnapshotIdentifier": {
                "description": "The identifier for the DB snapshot or DB cluster snapshot to restore from.\nYou can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.\nAfter you restore a DB cluster with a SnapshotIdentifier property, you must specify the same SnapshotIdentifier property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the SnapshotIdentifier property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the specified SnapshotIdentifier property, and the original DB cluster is deleted.",
                "type": "string"
            },
            "SourceDBClusterIdentifier": {
                "description": "The identifier of the source DB cluster from which to restore.",
                "type": "string"
            },
            "SourceRegion": {
                "description": "The AWS Region which contains the source DB cluster when replicating a DB cluster. For example, us-east-1.",
                "type": "string"
            },
            "StorageEncrypted": {
                "description": "Indicates whether the DB instance is encrypted.\nIf you specify the DBClusterIdentifier, SnapshotIdentifier, or SourceDBInstanceIdentifier property, don't specify this property. The value is inherited from the cluster, snapshot, or source DB instance.",
                "type": "boolean"
            },
            "StorageType": {
                "description": "Specifies the storage type to be associated with the DB cluster.",
                "type": "string"
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "description": "An array of key-value pairs to apply to this resource.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "UseLatestRestorableTime": {
                "description": "A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster is not restored to the latest restorable backup time.",
                "type": "boolean"
            },
            "VpcSecurityGroupIds": {
                "description": "A list of EC2 VPC security groups to associate with this DB cluster.",
                "uniqueItems": true,
                "items": {
                    "type": "string"
                },
                "type": "array"
            }
        }
    },
    "AWS::IdentityStore::GroupMembership": {
        "properties": {
            "GroupId": {
                "description": "The unique identifier for a group in the identity store.",
                "type": "string",
                "maxLength": 47,
                "minLength": 1,
                "pattern": "^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$"
            },
            "IdentityStoreId": {
                "description": "The globally unique identifier for the identity store.",
                "type": "string",
                "maxLength": 36,
                "minLength": 1,
                "pattern": "^d-[0-9a-f]{10}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"
            },
            "MemberId": {
                "description": "An object containing the identifier of a group member.",
                "$ref": "#/definitions/MemberId"
            },
            "MembershipId": {
                "description": "The identifier for a GroupMembership in the identity store.",
                "type": "string",
                "maxLength": 47,
                "minLength": 1,
                "pattern": "^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$"
            }
        }
    },
    "AWS::EMR::StudioSessionMapping": {
        "properties": {
            "IdentityName": {
                "type": "string",
                "description": "The name of the user or group. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified."
            },
            "IdentityType": {
                "type": "string",
                "description": "Specifies whether the identity to map to the Studio is a user or a group.",
                "enum": [
                    "USER",
                    "GROUP"
                ]
            },
            "SessionPolicyArn": {
                "description": "The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. Session policies refine Studio user permissions without the need to use multiple IAM user roles.",
                "$ref": "#/definitions/IamPolicyArn"
            },
            "StudioId": {
                "description": "The ID of the Amazon EMR Studio to which the user or group will be mapped.",
                "type": "string",
                "pattern": "^es-[0-9A-Z]+",
                "minLength": 4,
                "maxLength": 256
            }
        }
    },
    "AWS::FraudDetector::Detector": {
        "properties": {
            "DetectorId": {
                "description": "The ID of the detector",
                "type": "string",
                "pattern": "^[0-9a-z_-]+$",
                "minLength": 1,
                "maxLength": 64
            },
            "DetectorVersionStatus": {
                "description": "The desired detector version status for the detector",
                "type": "string",
                "enum": [
                    "DRAFT",
                    "ACTIVE"
                ]
            },
            "DetectorVersionId": {
                "description": "The active version ID of the detector",
                "type": "string"
            },
            "RuleExecutionMode": {
                "type": "string",
                "enum": [
                    "FIRST_MATCHED",
                    "ALL_MATCHED"
                ]
            },
            "Tags": {
                "description": "Tags associated with this detector.",
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "maxItems": 200,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Description": {
                "description": "The description of the detector.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128
            },
            "Rules": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 1,
                "items": {
                    "$ref": "#/definitions/Rule"
                }
            },
            "EventType": {
                "description": "The event type to associate this detector with.",
                "$ref": "#/definitions/EventType"
            },
            "Arn": {
                "description": "The ARN of the detector.",
                "type": "string"
            },
            "CreatedTime": {
                "description": "The time when the detector was created.",
                "type": "string"
            },
            "LastUpdatedTime": {
                "description": "The time when the detector was last updated.",
                "type": "string"
            },
            "AssociatedModels": {
                "description": "The models to associate with this detector.",
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "maxItems": 10,
                "items": {
                    "$ref": "#/definitions/Model"
                }
            }
        }
    },
    "AWS::SupportApp::SlackChannelConfiguration": {
        "properties": {
            "TeamId": {
                "description": "The team ID in Slack, which uniquely identifies a workspace.",
                "type": "string",
                "pattern": "^\\S+$",
                "minLength": 1,
                "maxLength": 256
            },
            "ChannelId": {
                "description": "The channel ID in Slack, which identifies a channel within a workspace.",
                "type": "string",
                "pattern": "^\\S+$",
                "minLength": 1,
                "maxLength": 256
            },
            "ChannelName": {
                "description": "The channel name in Slack.",
                "type": "string",
                "pattern": "^.+$",
                "minLength": 1,
                "maxLength": 256
            },
            "NotifyOnCreateOrReopenCase": {
                "description": "Whether to notify when a case is created or reopened.",
                "type": "boolean"
            },
            "NotifyOnAddCorrespondenceToCase": {
                "description": "Whether to notify when a correspondence is added to a case.",
                "type": "boolean"
            },
            "NotifyOnResolveCase": {
                "description": "Whether to notify when a case is resolved.",
                "type": "boolean"
            },
            "NotifyOnCaseSeverity": {
                "description": "The severity level of a support case that a customer wants to get notified for.",
                "type": "string",
                "enum": [
                    "none",
                    "all",
                    "high"
                ]
            },
            "ChannelRoleArn": {
                "description": "The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services.",
                "type": "string",
                "pattern": "^arn:aws[-a-z0-9]*:iam::[0-9]{12}:role\\/(.+)$",
                "minLength": 31,
                "maxLength": 2048
            }
        }
    },
    "AWS::GreengrassV2::Deployment": {
        "properties": {
            "TargetArn": {
                "type": "string",
                "pattern": "arn:[^:]*:iot:[^:]*:[0-9]+:(thing|thinggroup)/.+"
            },
            "DeploymentId": {
                "type": "string",
                "pattern": ".+"
            },
            "DeploymentName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 256
            },
            "Components": {
                "type": "object",
                "patternProperties": {
                    ".+": {
                        "$ref": "#/definitions/ComponentDeploymentSpecification"
                    }
                },
                "additionalProperties": false
            },
            "IotJobConfiguration": {
                "$ref": "#/definitions/DeploymentIoTJobConfiguration"
            },
            "DeploymentPolicies": {
                "$ref": "#/definitions/DeploymentPolicies"
            },
            "Tags": {
                "type": "object",
                "patternProperties": {
                    ".*": {
                        "type": "string",
                        "maxLength": 256
                    }
                },
                "maxProperties": 200,
                "additionalProperties": false
            }
        }
    },
    "AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation": {
        "properties": {
            "Application": {
                "type": "string",
                "description": "The name or the Id of the Application.",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "\\w+|[a-z0-9]{12}"
            },
            "AttributeGroup": {
                "type": "string",
                "description": "The name or the Id of the AttributeGroup.",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "\\w+|[a-z0-9]{12}"
            },
            "ApplicationArn": {
                "type": "string",
                "pattern": "arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/applications/[a-z0-9]+"
            },
            "AttributeGroupArn": {
                "type": "string",
                "pattern": "arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\\d:\\d{12}:/attribute-groups/[a-z0-9]+"
            },
            "Id": {
                "type": "string"
            }
        }
    },
    "AWS::CE::AnomalyMonitor": {
        "properties": {
            "MonitorArn": {
                "$ref": "#/definitions/Arn"
            },
            "MonitorType": {
                "type": "string",
                "enum": [
                    "DIMENSIONAL",
                    "CUSTOM"
                ]
            },
            "MonitorName": {
                "description": "The name of the monitor.",
                "type": "string",
                "pattern": "[\\S\\s]*",
                "minLength": 0,
                "maxLength": 1024
            },
            "CreationDate": {
                "description": "The date when the monitor was created. ",
                "type": "string",
                "minLength": 0,
                "maxLength": 40,
                "pattern": "(\\d{4}-\\d{2}-\\d{2})(T\\d{2}:\\d{2}:\\d{2}Z)?"
            },
            "LastEvaluatedDate": {
                "description": "The date when the monitor last evaluated for anomalies.",
                "type": "string",
                "minLength": 0,
                "maxLength": 40,
                "pattern": "(\\d{4}-\\d{2}-\\d{2})(T\\d{2}:\\d{2}:\\d{2}Z)?"
            },
            "LastUpdatedDate": {
                "description": "The date when the monitor was last updated.",
                "type": "string",
                "minLength": 0,
                "maxLength": 40,
                "pattern": "(\\d{4}-\\d{2}-\\d{2})(T\\d{2}:\\d{2}:\\d{2}Z)?"
            },
            "MonitorDimension": {
                "description": "The dimensions to evaluate",
                "type": "string",
                "enum": [
                    "SERVICE"
                ]
            },
            "MonitorSpecification": {
                "type": "string"
            },
            "DimensionalValueCount": {
                "description": "The value for evaluated dimensions.",
                "type": "integer",
                "minimum": 0
            },
            "ResourceTags": {
                "type": "array",
                "description": "Tags to assign to monitor.",
                "items": {
                    "$ref": "#/definitions/ResourceTag"
                },
                "minItems": 0,
                "maxItems": 200,
                "insertionOrder": false
            }
        }
    },
    "AWS::CloudFormation::Publisher": {
        "properties": {
            "AcceptTermsAndConditions": {
                "description": "Whether you accept the terms and conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to publish public extensions to the CloudFormation registry. The terms and conditions can be found at https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf",
                "type": "boolean"
            },
            "PublisherId": {
                "description": "The publisher id assigned by CloudFormation for publishing in this region.",
                "pattern": "[0-9a-zA-Z]{40}",
                "type": "string",
                "minLength": 1,
                "maxLength": 40
            },
            "ConnectionArn": {
                "description": "If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.",
                "type": "string",
                "pattern": "arn:aws(-[w]+)*:.+:.+:[0-9]{12}:.+"
            },
            "PublisherStatus": {
                "description": "Whether the publisher is verified.",
                "type": "string",
                "enum": [
                    "VERIFIED",
                    "UNVERIFIED"
                ]
            },
            "PublisherProfile": {
                "description": "The URL to the publisher's profile with the identity provider.",
                "pattern": "(http:|https:)+[^s]+[w]",
                "type": "string",
                "maxLength": 1024
            },
            "IdentityProvider": {
                "description": "The type of account used as the identity provider when registering this publisher with CloudFormation.",
                "type": "string",
                "enum": [
                    "AWS_Marketplace",
                    "GitHub",
                    "Bitbucket"
                ]
            }
        }
    },
    "AWS::CodeStarConnections::Connection": {
        "properties": {
            "ConnectionArn": {
                "description": "The Amazon Resource Name (ARN) of the  connection. The ARN is used as the connection reference when the connection is shared between AWS services.",
                "type": "string",
                "minLength": 0,
                "maxLength": 256,
                "pattern": "arn:aws(-[\\w]+)*:.+:.+:[0-9]{12}:.+"
            },
            "ConnectionName": {
                "description": "The name of the connection. Connection names must be unique in an AWS user account.",
                "type": "string",
                "minLength": 1,
                "maxLength": 32
            },
            "ConnectionStatus": {
                "description": "The current status of the connection.",
                "type": "string"
            },
            "OwnerAccountId": {
                "description": "The name of the external provider where your third-party code repository is configured. For Bitbucket, this is the account ID of the owner of the Bitbucket repository.",
                "type": "string",
                "minLength": 12,
                "maxLength": 12,
                "pattern": "[0-9]{12}"
            },
            "ProviderType": {
                "description": "The name of the external provider where your third-party code repository is configured. You must specify either a ProviderType or a HostArn.",
                "type": "string"
            },
            "HostArn": {
                "description": "The host arn configured to represent the infrastructure where your third-party provider is installed. You must specify either a ProviderType or a HostArn.",
                "type": "string",
                "minLength": 0,
                "maxLength": 256,
                "pattern": "arn:aws(-[\\w]+)*:.+:.+:[0-9]{12}:.+"
            },
            "Tags": {
                "description": "Specifies the tags applied to a connection.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::ECR::PublicRepository": {
        "properties": {
            "RepositoryName": {
                "type": "string",
                "description": "The name to use for the repository. The repository name may be specified on its own (such as nginx-web-app) or it can be prepended with a namespace to group the repository into a category (such as project-a/nginx-web-app). If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the repository name. For more information, see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html.",
                "minLength": 2,
                "maxLength": 256,
                "pattern": "^(?=.{2,256}$)((?:[a-z0-9]+(?:[._-][a-z0-9]+)*/)*[a-z0-9]+(?:[._-][a-z0-9]+)*)$"
            },
            "RepositoryPolicyText": {
                "type": [
                    "object",
                    "string"
                ],
                "description": "The JSON repository policy text to apply to the repository. For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/RepositoryPolicyExamples.html in the Amazon Elastic Container Registry User Guide. "
            },
            "Arn": {
                "type": "string"
            },
            "RepositoryCatalogData": {
                "type": "object",
                "description": "The CatalogData property type specifies Catalog data for ECR Public Repository. For information about Catalog Data, see <link>",
                "properties": {
                    "RepositoryDescription": {
                        "$ref": "#/definitions/RepositoryDescription"
                    },
                    "Architectures": {
                        "$ref": "#/definitions/ArchitectureList"
                    },
                    "OperatingSystems": {
                        "$ref": "#/definitions/OperatingSystemList"
                    },
                    "AboutText": {
                        "$ref": "#/definitions/AboutText"
                    },
                    "UsageText": {
                        "$ref": "#/definitions/UsageText"
                    }
                },
                "additionalProperties": false
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "description": "An array of key-value pairs to apply to this resource.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::ECR::Repository": {
        "properties": {
            "LifecyclePolicy": {
                "$ref": "#/definitions/LifecyclePolicy"
            },
            "RepositoryName": {
                "type": "string",
                "description": "The name to use for the repository. The repository name may be specified on its own (such as nginx-web-app) or it can be prepended with a namespace to group the repository into a category (such as project-a/nginx-web-app). If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the repository name. For more information, see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html.",
                "minLength": 2,
                "maxLength": 256,
                "pattern": "^(?=.{2,256}$)((?:[a-z0-9]+(?:[._-][a-z0-9]+)*/)*[a-z0-9]+(?:[._-][a-z0-9]+)*)$"
            },
            "RepositoryPolicyText": {
                "type": [
                    "object",
                    "string"
                ],
                "description": "The JSON repository policy text to apply to the repository. For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/RepositoryPolicyExamples.html in the Amazon Elastic Container Registry User Guide. "
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "description": "An array of key-value pairs to apply to this resource.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Arn": {
                "type": "string"
            },
            "RepositoryUri": {
                "type": "string"
            },
            "ImageTagMutability": {
                "type": "string",
                "description": "The image tag mutability setting for the repository.",
                "enum": [
                    "MUTABLE",
                    "IMMUTABLE"
                ]
            },
            "ImageScanningConfiguration": {
                "$ref": "#/definitions/ImageScanningConfiguration"
            },
            "EncryptionConfiguration": {
                "$ref": "#/definitions/EncryptionConfiguration"
            }
        }
    },
    "AWS::MemoryDB::SubnetGroup": {
        "properties": {
            "SubnetGroupName": {
                "description": "The name of the subnet group. This value must be unique as it also serves as the subnet group identifier.",
                "pattern": "[a-z][a-z0-9\\-]*",
                "type": "string"
            },
            "Description": {
                "description": "An optional description of the subnet group.",
                "type": "string"
            },
            "SubnetIds": {
                "description": "A list of VPC subnet IDs for the subnet group.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this subnet group.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "ARN": {
                "description": "The Amazon Resource Name (ARN) of the subnet group.",
                "type": "string"
            }
        }
    },
    "AWS::Detective::MemberInvitation": {
        "properties": {
            "GraphArn": {
                "description": "The ARN of the graph to which the member account will be invited",
                "type": "string",
                "pattern": "arn:aws(-[\\w]+)*:detective:(([a-z]+-)+[0-9]+):[0-9]{12}:graph:[0-9a-f]{32}"
            },
            "MemberId": {
                "description": "The AWS account ID to be invited to join the graph as a member",
                "type": "string",
                "pattern": "[0-9]{12}"
            },
            "MemberEmailAddress": {
                "description": "The root email address for the account to be invited, for validation. Updating this field has no effect.",
                "type": "string",
                "pattern": ".*@.*"
            },
            "DisableEmailNotification": {
                "description": "When set to true, invitation emails are not sent to the member accounts. Member accounts must still accept the invitation before they are added to the behavior graph. Updating this field has no effect.",
                "type": "boolean",
                "default": false
            },
            "Message": {
                "description": "A message to be included in the email invitation sent to the invited account. Updating this field has no effect.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1000
            }
        }
    },
    "AWS::NimbleStudio::StreamingImage": {
        "properties": {
            "Description": {
                "type": "string",
                "maxLength": 256,
                "minLength": 0,
                "description": "<p>A human-readable description of the streaming image.</p>"
            },
            "Ec2ImageId": {
                "type": "string",
                "pattern": "^ami-[0-9A-z]+$",
                "description": "<p>The ID of an EC2 machine image with which to create this streaming image.</p>"
            },
            "EncryptionConfiguration": {
                "$ref": "#/definitions/StreamingImageEncryptionConfiguration"
            },
            "EulaIds": {
                "type": "array",
                "items": {
                    "type": "string"
                },
                "description": "<p>The list of EULAs that must be accepted before a Streaming Session can be started using this streaming image.</p>"
            },
            "Name": {
                "type": "string",
                "maxLength": 64,
                "minLength": 0,
                "description": "<p>A friendly name for a streaming image resource.</p>"
            },
            "Owner": {
                "type": "string",
                "description": "<p>The owner of the streaming image, either the studioId that contains the streaming image, or 'amazon' for images that are provided by Amazon Nimble Studio.</p>"
            },
            "Platform": {
                "type": "string",
                "pattern": "^[a-zA-Z]*$",
                "description": "<p>The platform of the streaming image, either WINDOWS or LINUX.</p>"
            },
            "StreamingImageId": {
                "type": "string"
            },
            "StudioId": {
                "type": "string",
                "description": "<p>The studioId. </p>"
            },
            "Tags": {
                "$ref": "#/definitions/Tags"
            }
        }
    },
    "AWS::AppRunner::Service": {
        "properties": {
            "ServiceName": {
                "description": "The AppRunner Service Name.",
                "type": "string",
                "minLength": 4,
                "maxLength": 40,
                "pattern": "[A-Za-z0-9][A-Za-z0-9-_]{3,39}"
            },
            "ServiceId": {
                "description": "The AppRunner Service Id",
                "type": "string",
                "minLength": 32,
                "maxLength": 32
            },
            "ServiceArn": {
                "description": "The Amazon Resource Name (ARN) of the AppRunner Service.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1011,
                "pattern": "arn:aws(-[\\w]+)*:[a-z0-9-\\\\.]{0,63}:[a-z0-9-\\\\.]{0,63}:[0-9]{12}:(\\w|\\/|-){1,1011}"
            },
            "ServiceUrl": {
                "description": "The Service Url of the AppRunner Service.",
                "type": "string"
            },
            "Status": {
                "description": "AppRunner Service status.",
                "type": "string"
            },
            "SourceConfiguration": {
                "$ref": "#/definitions/SourceConfiguration"
            },
            "InstanceConfiguration": {
                "$ref": "#/definitions/InstanceConfiguration"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "EncryptionConfiguration": {
                "$ref": "#/definitions/EncryptionConfiguration"
            },
            "HealthCheckConfiguration": {
                "$ref": "#/definitions/HealthCheckConfiguration"
            },
            "ObservabilityConfiguration": {
                "$ref": "#/definitions/ServiceObservabilityConfiguration"
            },
            "AutoScalingConfigurationArn": {
                "description": "Autoscaling configuration ARN",
                "type": "string",
                "minLength": 1,
                "maxLength": 1011,
                "pattern": "arn:aws(-[\\w]+)*:[a-z0-9-\\\\.]{0,63}:[a-z0-9-\\\\.]{0,63}:[0-9]{12}:(\\w|\\/|-){1,1011}"
            },
            "NetworkConfiguration": {
                "$ref": "#/definitions/NetworkConfiguration"
            }
        }
    },
    "AWS::Lightsail::Container": {
        "properties": {
            "ServiceName": {
                "description": "The name for the container service.",
                "type": "string",
                "pattern": "^[a-z0-9]{1,2}|[a-z0-9][a-z0-9-]+[a-z0-9]$",
                "minLength": 1,
                "maxLength": 63
            },
            "Power": {
                "description": "The power specification for the container service.",
                "type": "string"
            },
            "ContainerArn": {
                "type": "string"
            },
            "Scale": {
                "description": "The scale specification for the container service.",
                "type": "integer",
                "minimum": 1,
                "maximum": 20
            },
            "PublicDomainNames": {
                "description": "The public domain names to use with the container service, such as example.com and www.example.com.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/PublicDomainName"
                }
            },
            "ContainerServiceDeployment": {
                "$ref": "#/definitions/ContainerServiceDeployment",
                "description": "Describes a container deployment configuration of an Amazon Lightsail container service."
            },
            "IsDisabled": {
                "description": "A Boolean value to indicate whether the container service is disabled.",
                "type": "boolean"
            },
            "Url": {
                "description": "The publicly accessible URL of the container service.",
                "type": "string"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::CE::AnomalySubscription": {
        "properties": {
            "SubscriptionArn": {
                "$ref": "#/definitions/Arn"
            },
            "SubscriptionName": {
                "description": "The name of the subscription.",
                "type": "string",
                "pattern": "[\\S\\s]*",
                "minLength": 0,
                "maxLength": 1024
            },
            "AccountId": {
                "description": "The accountId",
                "type": "string",
                "minLength": 0,
                "maxLength": 1024
            },
            "MonitorArnList": {
                "description": "A list of cost anomaly monitors.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Arn"
                }
            },
            "Subscribers": {
                "description": "A list of subscriber",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Subscriber"
                }
            },
            "Threshold": {
                "description": "The dollar value that triggers a notification if the threshold is exceeded. ",
                "type": "number",
                "minimum": 0
            },
            "ThresholdExpression": {
                "description": "An Expression object in JSON String format used to specify the anomalies that you want to generate alerts for.",
                "type": "string"
            },
            "Frequency": {
                "description": "The frequency at which anomaly reports are sent over email. ",
                "type": "string",
                "enum": [
                    "DAILY",
                    "IMMEDIATE",
                    "WEEKLY"
                ]
            },
            "ResourceTags": {
                "type": "array",
                "description": "Tags to assign to subscription.",
                "items": {
                    "$ref": "#/definitions/ResourceTag"
                },
                "minItems": 0,
                "maxItems": 200,
                "insertionOrder": false
            }
        }
    },
    "AWS::Redshift::EventSubscription": {
        "properties": {
            "SubscriptionName": {
                "description": "The name of the Amazon Redshift event notification subscription",
                "type": "string",
                "pattern": "^(?=^[a-z][a-z0-9]*(-[a-z0-9]+)*$).{1,255}$"
            },
            "SnsTopicArn": {
                "description": "The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications.",
                "type": "string"
            },
            "SourceType": {
                "description": "The type of source that will be generating the events.",
                "type": "string",
                "enum": [
                    "cluster",
                    "cluster-parameter-group",
                    "cluster-security-group",
                    "cluster-snapshot",
                    "scheduled-action"
                ]
            },
            "SourceIds": {
                "description": "A list of one or more identifiers of Amazon Redshift source objects.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "EventCategories": {
                "description": "Specifies the Amazon Redshift event categories to be published by the event notification subscription.",
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "type": "string",
                    "enum": [
                        "configuration",
                        "management",
                        "monitoring",
                        "security",
                        "pending"
                    ]
                }
            },
            "Severity": {
                "description": "Specifies the Amazon Redshift event severity to be published by the event notification subscription.",
                "type": "string",
                "enum": [
                    "ERROR",
                    "INFO"
                ]
            },
            "Enabled": {
                "description": "A boolean value; set to true to activate the subscription, and set to false to create the subscription but not activate it.",
                "type": "boolean"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "CustomerAwsId": {
                "description": "The AWS account associated with the Amazon Redshift event notification subscription.",
                "type": "string"
            },
            "CustSubscriptionId": {
                "description": "The name of the Amazon Redshift event notification subscription.",
                "type": "string"
            },
            "Status": {
                "description": "The status of the Amazon Redshift event notification subscription.",
                "type": "string",
                "enum": [
                    "active",
                    "no-permission",
                    "topic-not-exist"
                ]
            },
            "SubscriptionCreationTime": {
                "description": "The date and time the Amazon Redshift event notification subscription was created.",
                "type": "string"
            },
            "SourceIdsList": {
                "description": "A list of the sources that publish events to the Amazon Redshift event notification subscription.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "EventCategoriesList": {
                "description": "The list of Amazon Redshift event categories specified in the event notification subscription.",
                "type": "array",
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "AWS::IoT::ResourceSpecificLogging": {
        "properties": {
            "TargetType": {
                "description": "The target type. Value must be THING_GROUP, CLIENT_ID, SOURCE_IP, PRINCIPAL_ID.",
                "type": "string",
                "enum": [
                    "THING_GROUP",
                    "CLIENT_ID",
                    "SOURCE_IP",
                    "PRINCIPAL_ID"
                ]
            },
            "TargetName": {
                "description": "The target name.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "[a-zA-Z0-9.:_-]+"
            },
            "LogLevel": {
                "description": "The log level for a specific target. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.",
                "type": "string",
                "enum": [
                    "ERROR",
                    "WARN",
                    "INFO",
                    "DEBUG",
                    "DISABLED"
                ]
            },
            "TargetId": {
                "description": "Unique Id for a Target (TargetType:TargetName), this will be internally built to serve as primary identifier for a log target.",
                "type": "string",
                "minLength": 13,
                "maxLength": 140,
                "pattern": "[a-zA-Z0-9.:_-]+"
            }
        }
    },
    "AWS::IoTAnalytics::Dataset": {
        "properties": {
            "Actions": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 1,
                "maxItems": 1,
                "items": {
                    "$ref": "#/definitions/Action"
                }
            },
            "LateDataRules": {
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "uniqueItems": false,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/LateDataRule"
                }
            },
            "DatasetName": {
                "type": "string",
                "pattern": "(^(?!_{2}))(^[a-zA-Z0-9_]+$)",
                "minLength": 1,
                "maxLength": 128
            },
            "ContentDeliveryRules": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 0,
                "maxItems": 20,
                "items": {
                    "$ref": "#/definitions/DatasetContentDeliveryRule"
                }
            },
            "Triggers": {
                "type": "array",
                "minItems": 0,
                "maxItems": 5,
                "uniqueItems": false,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Trigger"
                }
            },
            "VersioningConfiguration": {
                "$ref": "#/definitions/VersioningConfiguration"
            },
            "Id": {
                "type": "string"
            },
            "RetentionPeriod": {
                "$ref": "#/definitions/RetentionPeriod"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 1,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::RDS::DBClusterParameterGroup": {
        "properties": {
            "Description": {
                "description": "A friendly description for this DB cluster parameter group.",
                "type": "string"
            },
            "Family": {
                "description": "The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a DB engine and engine version compatible with that DB cluster parameter group family.",
                "type": "string"
            },
            "Parameters": {
                "description": "An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.",
                "type": "object"
            },
            "DBClusterParameterGroupName": {
                "type": "string",
                "pattern": "^[a-zA-Z]{1}(?:-?[a-zA-Z0-9])*$"
            },
            "Tags": {
                "description": "The list of tags for the cluster parameter group.",
                "type": "array",
                "maxItems": 50,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Lightsail::LoadBalancerTlsCertificate": {
        "properties": {
            "LoadBalancerName": {
                "description": "The name of your load balancer.",
                "type": "string",
                "pattern": "\\w[\\w\\-]*\\w"
            },
            "CertificateName": {
                "description": "The SSL/TLS certificate name.",
                "type": "string"
            },
            "CertificateDomainName": {
                "description": "The domain name (e.g., example.com ) for your SSL/TLS certificate.",
                "type": "string"
            },
            "CertificateAlternativeNames": {
                "description": "An array of strings listing alternative domains and subdomains for your SSL/TLS certificate.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "LoadBalancerTlsCertificateArn": {
                "type": "string"
            },
            "IsAttached": {
                "description": "When true, the SSL/TLS certificate is attached to the Lightsail load balancer.",
                "type": "boolean"
            },
            "HttpsRedirectionEnabled": {
                "description": "A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.",
                "type": "boolean"
            },
            "Status": {
                "description": "The validation status of the SSL/TLS certificate.",
                "type": "string"
            }
        }
    },
    "AWS::Lightsail::LoadBalancer": {
        "properties": {
            "LoadBalancerName": {
                "description": "The name of your load balancer.",
                "type": "string",
                "pattern": "\\w[\\w\\-]*\\w"
            },
            "LoadBalancerArn": {
                "type": "string"
            },
            "InstancePort": {
                "description": "The instance port where you're creating your load balancer.",
                "type": "integer"
            },
            "IpAddressType": {
                "description": "The IP address type for the load balancer. The possible values are ipv4 for IPv4 only, and dualstack for IPv4 and IPv6. The default value is dualstack.",
                "type": "string"
            },
            "AttachedInstances": {
                "description": "The names of the instances attached to the load balancer.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "HealthCheckPath": {
                "description": "The path you provided to perform the load balancer health check. If you didn't specify a health check path, Lightsail uses the root path of your website (e.g., \"/\").",
                "type": "string"
            },
            "SessionStickinessEnabled": {
                "description": "Configuration option to enable session stickiness.",
                "type": "boolean"
            },
            "SessionStickinessLBCookieDurationSeconds": {
                "description": "Configuration option to adjust session stickiness cookie duration parameter.",
                "type": "string"
            },
            "TlsPolicyName": {
                "description": "The name of the TLS policy to apply to the load balancer.",
                "type": "string"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Forecast::DatasetGroup": {
        "properties": {
            "DatasetArns": {
                "description": "An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Arn"
                },
                "insertionOrder": true
            },
            "DatasetGroupName": {
                "description": "A name for the dataset group.",
                "type": "string",
                "pattern": "^[a-zA-Z][a-zA-Z0-9_]*",
                "minLength": 1,
                "maxLength": 63
            },
            "Domain": {
                "description": "The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value specified for the Domain parameter of the CreateDataset operation must match.",
                "type": "string",
                "enum": [
                    "RETAIL",
                    "CUSTOM",
                    "INVENTORY_PLANNING",
                    "EC2_CAPACITY",
                    "WORK_FORCE",
                    "WEB_TRAFFIC",
                    "METRICS"
                ]
            },
            "Tags": {
                "description": "The tags of Application Insights application.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 0,
                "maxItems": 200,
                "insertionOrder": true
            },
            "DatasetGroupArn": {
                "description": "The Amazon Resource Name (ARN) of the dataset group to delete.",
                "type": "string",
                "maxLength": 256,
                "pattern": "^[a-zA-Z0-9\\-\\_\\.\\/\\:]+$"
            }
        }
    },
    "AWS::IoTEvents::DetectorModel": {
        "properties": {
            "DetectorModelDefinition": {
                "$ref": "#/definitions/DetectorModelDefinition"
            },
            "DetectorModelDescription": {
                "type": "string",
                "description": "A brief description of the detector model.",
                "maxLength": 128
            },
            "DetectorModelName": {
                "type": "string",
                "description": "The name of the detector model.",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "^[a-zA-Z0-9_-]+$"
            },
            "EvaluationMethod": {
                "type": "string",
                "description": "Information about the order in which events are evaluated and how actions are executed.",
                "enum": [
                    "BATCH",
                    "SERIAL"
                ]
            },
            "Key": {
                "type": "string",
                "description": "The value used to identify a detector instance. When a device or system sends input, a new detector instance with a unique key value is created. AWS IoT Events can continue to route input to its corresponding detector instance based on this identifying information.\n\nThis parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value.",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "^((`[\\w\\- ]+`)|([\\w\\-]+))(\\.((`[\\w\\- ]+`)|([\\w\\-]+)))*$"
            },
            "RoleArn": {
                "type": "string",
                "description": "The ARN of the role that grants permission to AWS IoT Events to perform its operations.",
                "minLength": 1,
                "maxLength": 2048
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "description": "An array of key-value pairs to apply to this resource.\n\nFor more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::IoTEvents::AlarmModel": {
        "properties": {
            "AlarmModelName": {
                "type": "string",
                "description": "The name of the alarm model.",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "^[a-zA-Z0-9_-]+$"
            },
            "AlarmModelDescription": {
                "type": "string",
                "description": "A brief description of the alarm model.",
                "maxLength": 128
            },
            "RoleArn": {
                "type": "string",
                "description": "The ARN of the role that grants permission to AWS IoT Events to perform its operations.",
                "minLength": 1,
                "maxLength": 2048
            },
            "Key": {
                "type": "string",
                "description": "The value used to identify a alarm instance. When a device or system sends input, a new alarm instance with a unique key value is created. AWS IoT Events can continue to route input to its corresponding alarm instance based on this identifying information.\n\nThis parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct alarm instance, the device must send a message payload that contains the same attribute-value.",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "^((`[\\w\\- ]+`)|([\\w\\-]+))(\\.((`[\\w\\- ]+`)|([\\w\\-]+)))*$"
            },
            "Severity": {
                "type": "integer",
                "description": "A non-negative integer that reflects the severity level of the alarm.\n\n",
                "minimum": 0,
                "maximum": 2147483647
            },
            "AlarmRule": {
                "$ref": "#/definitions/AlarmRule"
            },
            "AlarmEventActions": {
                "$ref": "#/definitions/AlarmEventActions"
            },
            "AlarmCapabilities": {
                "$ref": "#/definitions/AlarmCapabilities"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "description": "An array of key-value pairs to apply to this resource.\n\nFor more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::IoT::Thing": {
        "properties": {
            "Id": {
                "type": "string"
            },
            "Arn": {
                "type": "string"
            },
            "AttributePayload": {
                "$ref": "#/definitions/AttributePayload"
            },
            "ThingName": {
                "type": "string",
                "pattern": "[a-zA-Z0-9:_-]+",
                "minLength": 1,
                "maxLength": 128
            }
        }
    },
    "AWS::LookoutMetrics::AnomalyDetector": {
        "properties": {
            "Arn": {
                "$ref": "#/definitions/Arn"
            },
            "AnomalyDetectorName": {
                "description": "Name for the Amazon Lookout for Metrics Anomaly Detector",
                "type": "string",
                "minLength": 1,
                "maxLength": 63,
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9\\-_]*"
            },
            "AnomalyDetectorDescription": {
                "description": "A description for the AnomalyDetector.",
                "type": "string",
                "maxLength": 256,
                "pattern": ".*\\S.*"
            },
            "AnomalyDetectorConfig": {
                "description": "Configuration options for the AnomalyDetector",
                "$ref": "#/definitions/AnomalyDetectorConfig"
            },
            "MetricSetList": {
                "description": "List of metric sets for anomaly detection",
                "type": "array",
                "minItems": 1,
                "maxItems": 1,
                "items": {
                    "$ref": "#/definitions/MetricSet"
                }
            },
            "KmsKeyArn": {
                "description": "KMS key used to encrypt the AnomalyDetector data",
                "type": "string",
                "minLength": 20,
                "maxLength": 2048,
                "pattern": "arn:aws.*:kms:.*:[0-9]{12}:key/.*"
            }
        }
    },
    "AWS::RoboMaker::RobotApplicationVersion": {
        "properties": {
            "Application": {
                "$ref": "#/definitions/Arn"
            },
            "CurrentRevisionId": {
                "description": "The revision ID of robot application.",
                "type": "string",
                "minLength": 1,
                "maxLength": 40,
                "pattern": "[a-zA-Z0-9_.\\-]*"
            },
            "ApplicationVersion": {
                "type": "string"
            },
            "Arn": {
                "$ref": "#/definitions/Arn"
            }
        }
    },
    "AWS::RoboMaker::SimulationApplicationVersion": {
        "properties": {
            "Application": {
                "$ref": "#/definitions/Arn"
            },
            "CurrentRevisionId": {
                "description": "The revision ID of robot application.",
                "type": "string",
                "minLength": 1,
                "maxLength": 40,
                "pattern": "[a-zA-Z0-9_.\\-]*"
            },
            "ApplicationVersion": {
                "type": "string"
            },
            "Arn": {
                "$ref": "#/definitions/Arn"
            }
        }
    },
    "AWS::S3Outposts::BucketPolicy": {
        "properties": {
            "Bucket": {
                "description": "The Amazon Resource Name (ARN) of the specified bucket.",
                "maxLength": 2048,
                "minLength": 20,
                "pattern": "^arn:[^:]+:s3-outposts:[a-zA-Z0-9\\-]+:\\d{12}:outpost\\/[^:]+\\/bucket\\/[^:]+$",
                "type": "string"
            },
            "PolicyDocument": {
                "description": "A policy document containing permissions to add to the specified bucket.",
                "type": "object"
            }
        }
    },
    "AWS::AppFlow::ConnectorProfile": {
        "properties": {
            "ConnectorProfileArn": {
                "description": "Unique identifier for connector profile resources",
                "type": "string",
                "pattern": "arn:aws:appflow:.*:[0-9]+:.*",
                "maxLength": 512
            },
            "ConnectorLabel": {
                "description": "The label of the connector. The label is unique for each ConnectorRegistration in your AWS account. Only needed if calling for CUSTOMCONNECTOR connector type/.",
                "type": "string",
                "pattern": "[\\w!@#.-]+",
                "maxLength": 256
            },
            "ConnectorProfileName": {
                "description": "The maximum number of items to retrieve in a single batch.",
                "type": "string",
                "pattern": "[\\w/!@#+=.-]+",
                "maxLength": 256
            },
            "KMSArn": {
                "description": "The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.",
                "type": "string",
                "pattern": "arn:aws:kms:.*:[0-9]+:.*",
                "maxLength": 2048,
                "minLength": 20
            },
            "ConnectorType": {
                "description": "List of Saas providers that need connector profile to be created",
                "$ref": "#/definitions/ConnectorType"
            },
            "ConnectionMode": {
                "description": "Mode in which data transfer should be enabled. Private connection mode is currently enabled for Salesforce, Snowflake, Trendmicro and Singular",
                "type": "string",
                "enum": [
                    "Public",
                    "Private"
                ]
            },
            "ConnectorProfileConfig": {
                "description": "Connector specific configurations needed to create connector profile",
                "$ref": "#/definitions/ConnectorProfileConfig"
            },
            "CredentialsArn": {
                "description": "A unique Arn for Connector-Profile resource",
                "type": "string",
                "pattern": "arn:aws:.*:.*:[0-9]+:.*",
                "maxLength": 512
            }
        }
    },
    "AWS::Lightsail::Alarm": {
        "properties": {
            "AlarmName": {
                "description": "The name for the alarm. Specify the name of an existing alarm to update, and overwrite the previous configuration of the alarm.",
                "type": "string",
                "pattern": "\\w[\\w\\-]*\\w"
            },
            "MonitoredResourceName": {
                "description": "The validation status of the SSL/TLS certificate.",
                "type": "string"
            },
            "MetricName": {
                "description": "The name of the metric to associate with the alarm.",
                "type": "string"
            },
            "ComparisonOperator": {
                "description": "The arithmetic operation to use when comparing the specified statistic to the threshold. The specified statistic value is used as the first operand.",
                "type": "string"
            },
            "ContactProtocols": {
                "description": "The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "AlarmArn": {
                "type": "string"
            },
            "DatapointsToAlarm": {
                "description": "The number of data points that must be not within the specified threshold to trigger the alarm. If you are setting an \"M out of N\" alarm, this value (datapointsToAlarm) is the M.",
                "type": "integer"
            },
            "EvaluationPeriods": {
                "description": "The number of most recent periods over which data is compared to the specified threshold. If you are setting an \"M out of N\" alarm, this value (evaluationPeriods) is the N.",
                "type": "integer"
            },
            "NotificationEnabled": {
                "description": "Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter.",
                "type": "boolean"
            },
            "NotificationTriggers": {
                "description": "The alarm states that trigger a notification.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "Threshold": {
                "description": "The value against which the specified statistic is compared.",
                "type": "number"
            },
            "TreatMissingData": {
                "description": "Sets how this alarm will handle missing data points.",
                "type": "string"
            },
            "State": {
                "description": "The current state of the alarm.",
                "type": "string"
            }
        }
    },
    "AWS::IoTAnalytics::Channel": {
        "properties": {
            "ChannelStorage": {
                "$ref": "#/definitions/ChannelStorage"
            },
            "ChannelName": {
                "type": "string",
                "pattern": "(^(?!_{2}))(^[a-zA-Z0-9_]+$)",
                "minLength": 1,
                "maxLength": 128
            },
            "Id": {
                "type": "string"
            },
            "RetentionPeriod": {
                "$ref": "#/definitions/RetentionPeriod"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 1,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::SSMContacts::ContactChannel": {
        "properties": {
            "ContactId": {
                "description": "ARN of the contact resource",
                "type": "string",
                "minLength": 1,
                "maxLength": 2048,
                "pattern": "arn:[-\\w+=\\/,.@]+:[-\\w+=\\/,.@]+:[-\\w+=\\/,.@]*:[0-9]+:([\\w+=\\/,.@:-]+)*"
            },
            "ChannelName": {
                "description": "The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255,
                "pattern": "[a-zA-Z 0-9_\\-+'&amp;\\uD83C-\\uDBFF\\uDC00-\\uDFFF\\u2000-\\u3300]+"
            },
            "ChannelType": {
                "description": "Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT.",
                "type": "string",
                "enum": [
                    "SMS",
                    "VOICE",
                    "EMAIL"
                ]
            },
            "DeferActivation": {
                "type": "boolean",
                "description": "If you want to activate the channel at a later time, you can choose to defer activation. SSM Incident Manager can't engage your contact channel until it has been activated."
            },
            "ChannelAddress": {
                "description": "The details that SSM Incident Manager uses when trying to engage the contact channel.",
                "type": "string"
            },
            "Arn": {
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the engagement to a contact channel."
            }
        }
    },
    "AWS::NimbleStudio::Studio": {
        "properties": {
            "AdminRoleArn": {
                "type": "string",
                "description": "<p>The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.</p>"
            },
            "DisplayName": {
                "type": "string",
                "maxLength": 64,
                "minLength": 0,
                "description": "<p>A friendly name for the studio.</p>"
            },
            "HomeRegion": {
                "type": "string",
                "maxLength": 50,
                "minLength": 0,
                "pattern": "[a-z]{2}-?(iso|gov)?-{1}[a-z]*-{1}[0-9]",
                "description": "<p>The Amazon Web Services Region where the studio resource is located.</p>"
            },
            "SsoClientId": {
                "type": "string",
                "description": "<p>The Amazon Web Services SSO application client ID used to integrate with Amazon Web Services SSO to enable Amazon Web Services SSO users to log in to Nimble Studio portal.</p>"
            },
            "StudioEncryptionConfiguration": {
                "$ref": "#/definitions/StudioEncryptionConfiguration"
            },
            "StudioId": {
                "type": "string"
            },
            "StudioName": {
                "type": "string",
                "maxLength": 64,
                "minLength": 3,
                "pattern": "^[a-z0-9]*$",
                "description": "<p>The studio name that is used in the URL of the Nimble Studio portal when accessed by Nimble Studio users.</p>"
            },
            "StudioUrl": {
                "type": "string",
                "description": "<p>The address of the web page for the studio.</p>"
            },
            "Tags": {
                "$ref": "#/definitions/Tags"
            },
            "UserRoleArn": {
                "type": "string",
                "description": "<p>The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.</p>"
            }
        }
    },
    "AWS::RDS::DBParameterGroup": {
        "properties": {
            "DBParameterGroupName": {
                "description": "Specifies the name of the DB parameter group",
                "type": "string",
                "pattern": "^[a-zA-Z]{1}(?:-?[a-zA-Z0-9])*$"
            },
            "Description": {
                "description": "Provides the customer-specified description for this DB parameter group.",
                "type": "string"
            },
            "Family": {
                "description": "The DB parameter group family name.",
                "type": "string"
            },
            "Parameters": {
                "description": "An array of parameter names and values for the parameter update.",
                "type": "object"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": false,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::RDS::DBProxy": {
        "properties": {
            "Auth": {
                "description": "The authorization mechanism that the proxy uses.",
                "type": "array",
                "insertionOrder": false,
                "minItems": 1,
                "items": {
                    "$ref": "#/definitions/AuthFormat"
                }
            },
            "DBProxyArn": {
                "description": "The Amazon Resource Name (ARN) for the proxy.",
                "type": "string"
            },
            "DBProxyName": {
                "description": "The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.",
                "type": "string",
                "pattern": "[0-z]*",
                "maxLength": 64
            },
            "DebugLogging": {
                "description": "Whether the proxy includes detailed information about SQL statements in its logs.",
                "type": "boolean"
            },
            "Endpoint": {
                "description": "The endpoint that you can use to connect to the proxy. You include the endpoint value in the connection string for a database client application.",
                "type": "string"
            },
            "EngineFamily": {
                "description": "The kinds of databases that the proxy can connect to.",
                "type": "string",
                "enum": [
                    "MYSQL",
                    "POSTGRESQL",
                    "SQLSERVER"
                ]
            },
            "IdleClientTimeout": {
                "description": "The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.",
                "type": "integer"
            },
            "RequireTLS": {
                "description": "A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.",
                "type": "boolean"
            },
            "RoleArn": {
                "description": "The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.",
                "type": "string"
            },
            "Tags": {
                "description": "An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/TagFormat"
                }
            },
            "VpcId": {
                "description": "VPC ID to associate with the new DB proxy.",
                "type": "string"
            },
            "VpcSecurityGroupIds": {
                "description": "VPC security group IDs to associate with the new proxy.",
                "type": "array",
                "insertionOrder": false,
                "minItems": 1,
                "items": {
                    "type": "string"
                }
            },
            "VpcSubnetIds": {
                "description": "VPC subnet IDs to associate with the new proxy.",
                "type": "array",
                "insertionOrder": false,
                "minItems": 2,
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "AWS::RDS::DBProxyTargetGroup": {
        "properties": {
            "DBProxyName": {
                "description": "The identifier for the proxy.",
                "type": "string",
                "pattern": "[A-z][0-z]*",
                "maxLength": 64
            },
            "TargetGroupArn": {
                "description": "The Amazon Resource Name (ARN) representing the target group.",
                "type": "string"
            },
            "TargetGroupName": {
                "description": "The identifier for the DBProxyTargetGroup",
                "type": "string",
                "enum": [
                    "default"
                ]
            },
            "ConnectionPoolConfigurationInfo": {
                "$ref": "#/definitions/ConnectionPoolConfigurationInfoFormat"
            },
            "DBInstanceIdentifiers": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "DBClusterIdentifiers": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "AWS::RDS::DBProxyEndpoint": {
        "properties": {
            "DBProxyEndpointName": {
                "description": "The identifier for the DB proxy endpoint. This name must be unique for all DB proxy endpoints owned by your AWS account in the specified AWS Region.",
                "type": "string",
                "pattern": "[0-z]*",
                "maxLength": 64
            },
            "DBProxyEndpointArn": {
                "description": "The Amazon Resource Name (ARN) for the DB proxy endpoint.",
                "type": "string",
                "pattern": "arn:aws[A-Za-z0-9-]{0,64}:rds:[A-Za-z0-9-]{1,64}:[0-9]{12}:.*"
            },
            "DBProxyName": {
                "description": "The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.",
                "type": "string",
                "pattern": "[0-z]*",
                "maxLength": 64
            },
            "VpcId": {
                "description": "VPC ID to associate with the new DB proxy endpoint.",
                "type": "string"
            },
            "VpcSecurityGroupIds": {
                "description": "VPC security group IDs to associate with the new DB proxy endpoint.",
                "type": "array",
                "insertionOrder": false,
                "minItems": 1,
                "items": {
                    "type": "string"
                }
            },
            "VpcSubnetIds": {
                "description": "VPC subnet IDs to associate with the new DB proxy endpoint.",
                "type": "array",
                "minItems": 2,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "Endpoint": {
                "description": "The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the connection string for a database client application.",
                "type": "string",
                "maxLength": 256
            },
            "TargetRole": {
                "description": "A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.",
                "type": "string",
                "enum": [
                    "READ_WRITE",
                    "READ_ONLY"
                ]
            },
            "IsDefault": {
                "description": "A value that indicates whether this endpoint is the default endpoint for the associated DB proxy. Default DB proxy endpoints always have read/write capability. Other endpoints that you associate with the DB proxy can be either read/write or read-only.",
                "type": "boolean"
            },
            "Tags": {
                "description": "An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/TagFormat"
                }
            }
        }
    },
    "AWS::Redshift::EndpointAuthorization": {
        "properties": {
            "Grantor": {
                "description": "The AWS account ID of the cluster owner.",
                "$ref": "#/definitions/AwsAccount"
            },
            "Grantee": {
                "description": "The AWS account ID of the grantee of the cluster.",
                "$ref": "#/definitions/AwsAccount"
            },
            "ClusterIdentifier": {
                "description": "The cluster identifier.",
                "type": "string",
                "pattern": "^(?=^[a-z][a-z0-9]*(-[a-z0-9]+)*$).{1,63}$"
            },
            "AuthorizeTime": {
                "description": "The time (UTC) when the authorization was created.",
                "type": "string"
            },
            "ClusterStatus": {
                "description": "The status of the cluster.",
                "type": "string"
            },
            "Status": {
                "description": "The status of the authorization action.",
                "type": "string"
            },
            "AllowedAllVPCs": {
                "description": "Indicates whether all VPCs in the grantee account are allowed access to the cluster.",
                "type": "boolean"
            },
            "AllowedVPCs": {
                "description": "The VPCs allowed access to the cluster.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/VpcId"
                }
            },
            "EndpointCount": {
                "description": "The number of Redshift-managed VPC endpoints created for the authorization.",
                "type": "integer"
            },
            "Account": {
                "description": "The target AWS account ID to grant or revoke access for.",
                "$ref": "#/definitions/AwsAccount"
            },
            "VpcIds": {
                "description": "The virtual private cloud (VPC) identifiers to grant or revoke access to.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/VpcId"
                }
            },
            "Force": {
                "description": " Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.",
                "type": "boolean"
            }
        }
    },
    "AWS::SageMaker::App": {
        "properties": {
            "AppArn": {
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the app.",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "arn:aws[a-z\\-]*:sagemaker:[a-z0-9\\-]*:[0-9]{12}:app/.*"
            },
            "AppName": {
                "type": "string",
                "description": "The name of the app.",
                "minLength": 1,
                "maxLength": 63,
                "pattern": "^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}"
            },
            "AppType": {
                "type": "string",
                "description": "The type of app.",
                "enum": [
                    "JupyterServer",
                    "KernelGateway",
                    "RStudioServerPro",
                    "RSessionGateway",
                    "Canvas"
                ]
            },
            "DomainId": {
                "type": "string",
                "description": "The domain ID.",
                "minLength": 1,
                "maxLength": 63
            },
            "ResourceSpec": {
                "$ref": "#/definitions/ResourceSpec",
                "description": "The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance."
            },
            "Tags": {
                "type": "array",
                "description": "A list of tags to apply to the app.",
                "uniqueItems": false,
                "minItems": 0,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "UserProfileName": {
                "type": "string",
                "description": "The user profile name.",
                "minLength": 1,
                "maxLength": 63,
                "pattern": "^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}"
            }
        }
    },
    "AWS::KafkaConnect::Connector": {
        "properties": {
            "Capacity": {
                "$ref": "#/definitions/Capacity"
            },
            "ConnectorArn": {
                "description": "Amazon Resource Name for the created Connector.",
                "type": "string",
                "pattern": "arn:(aws|aws-us-gov|aws-cn):kafkaconnect:.*"
            },
            "ConnectorConfiguration": {
                "description": "The configuration for the connector.",
                "type": "object",
                "additionalProperties": false,
                "patternProperties": {
                    ".*": {
                        "type": "string"
                    }
                }
            },
            "ConnectorDescription": {
                "description": "A summary description of the connector.",
                "type": "string",
                "maxLength": 1024
            },
            "ConnectorName": {
                "description": "The name of the connector.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128
            },
            "KafkaCluster": {
                "$ref": "#/definitions/KafkaCluster"
            },
            "KafkaClusterClientAuthentication": {
                "$ref": "#/definitions/KafkaClusterClientAuthentication"
            },
            "KafkaClusterEncryptionInTransit": {
                "$ref": "#/definitions/KafkaClusterEncryptionInTransit"
            },
            "KafkaConnectVersion": {
                "description": "The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.",
                "type": "string"
            },
            "LogDelivery": {
                "$ref": "#/definitions/LogDelivery"
            },
            "Plugins": {
                "description": "List of plugins to use with the connector.",
                "type": "array",
                "uniqueItems": true,
                "minItems": 1,
                "items": {
                    "$ref": "#/definitions/Plugin"
                },
                "insertionOrder": false
            },
            "ServiceExecutionRoleArn": {
                "description": "The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.",
                "type": "string",
                "pattern": "arn:(aws|aws-us-gov|aws-cn):iam:.*"
            },
            "WorkerConfiguration": {
                "$ref": "#/definitions/WorkerConfiguration"
            }
        }
    },
    "AWS::Lambda::Url": {
        "properties": {
            "TargetFunctionArn": {
                "description": "The Amazon Resource Name (ARN) of the function associated with the Function URL.",
                "type": "string",
                "pattern": "^(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:((?!\\d+)[0-9a-zA-Z_]+))?$"
            },
            "Qualifier": {
                "description": "The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed.",
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "((?!^[0-9]+$)([a-zA-Z0-9-_]+))"
            },
            "AuthType": {
                "description": "Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL.",
                "type": "string",
                "enum": [
                    "AWS_IAM",
                    "NONE"
                ]
            },
            "InvokeMode": {
                "description": "The invocation mode for the function?s URL. Set to BUFFERED if you want to buffer responses before returning them to the client. Set to RESPONSE_STREAM if you want to stream responses, allowing faster time to first byte and larger response payload sizes. If not set, defaults to BUFFERED.",
                "type": "string",
                "enum": [
                    "BUFFERED",
                    "RESPONSE_STREAM"
                ]
            },
            "FunctionArn": {
                "description": "The full Amazon Resource Name (ARN) of the function associated with the Function URL.",
                "type": "string",
                "pattern": "^(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1}:)?(\\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:((?!\\d+)[0-9a-zA-Z_]+))?$"
            },
            "FunctionUrl": {
                "description": "The generated url for this resource.",
                "type": "string"
            },
            "Cors": {
                "$ref": "#/definitions/Cors"
            }
        }
    },
    "AWS::Redshift::ScheduledAction": {
        "properties": {
            "ScheduledActionName": {
                "description": "The name of the scheduled action. The name must be unique within an account.",
                "type": "string",
                "pattern": "^(?=^[a-z][a-z0-9]*(-[a-z0-9]+)*$).{1,60}$"
            },
            "TargetAction": {
                "description": "A JSON format string of the Amazon Redshift API operation with input parameters.",
                "$ref": "#/definitions/ScheduledActionType"
            },
            "Schedule": {
                "description": "The schedule in `at( )` or `cron( )` format.",
                "type": "string"
            },
            "IamRole": {
                "description": "The IAM role to assume to run the target action.",
                "type": "string"
            },
            "ScheduledActionDescription": {
                "description": "The description of the scheduled action.",
                "type": "string",
                "pattern": "^(?=^[\\x09\\x0a\\x0d\\x20-\\xff]*$).{1,255}$"
            },
            "StartTime": {
                "description": "The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger.",
                "$ref": "#/definitions/timestamp"
            },
            "EndTime": {
                "description": "The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger.",
                "$ref": "#/definitions/timestamp"
            },
            "Enable": {
                "description": "If true, the schedule is enabled. If false, the scheduled action does not trigger.",
                "type": "boolean"
            },
            "State": {
                "description": "The state of the scheduled action.",
                "type": "string",
                "enum": [
                    "ACTIVE",
                    "DISABLED"
                ]
            },
            "NextInvocations": {
                "description": "List of times when the scheduled action will run.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/timestamp"
                }
            }
        }
    },
    "AWS::Cassandra::Keyspace": {
        "properties": {
            "KeyspaceName": {
                "description": "Name for Cassandra keyspace",
                "type": "string",
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 0,
                "maxItems": 50
            }
        }
    },
    "AWS::CloudFormation::StackSet": {
        "properties": {
            "StackSetName": {
                "description": "The name to associate with the stack set. The name must be unique in the Region where you create your stack set.",
                "type": "string",
                "pattern": "^[a-zA-Z][a-zA-Z0-9\\-]{0,127}$",
                "maxLength": 128,
                "m_alt_english": "Stack name can include letters (A-Z and a-z), numbers (0-9), and dashes (-)."
            },
            "StackSetId": {
                "description": "The ID of the stack set that you're creating.",
                "type": "string"
            },
            "AdministrationRoleARN": {
                "description": "The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.",
                "type": "string",
                "minLength": 20,
                "maxLength": 2048
            },
            "AutoDeployment": {
                "description": "Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). Specify only if PermissionModel is SERVICE_MANAGED.",
                "$ref": "#/definitions/AutoDeployment"
            },
            "Capabilities": {
                "description": "In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Capability"
                }
            },
            "Description": {
                "description": "A description of the stack set. You can use the description to identify the stack set's purpose or other important information.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1024
            },
            "ExecutionRoleName": {
                "description": "The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation.",
                "type": "string",
                "minLength": 1,
                "maxLength": 64
            },
            "OperationPreferences": {
                "$ref": "#/definitions/OperationPreferences"
            },
            "StackInstancesGroup": {
                "description": "A group of stack instances with parameters in some specific accounts and regions.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/StackInstances"
                }
            },
            "Parameters": {
                "description": "The input parameters for the stack set template.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Parameter"
                }
            },
            "PermissionModel": {
                "description": "Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.",
                "type": "string",
                "enum": [
                    "SERVICE_MANAGED",
                    "SELF_MANAGED"
                ]
            },
            "Tags": {
                "description": "The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "TemplateBody": {
                "description": "The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.",
                "type": "string",
                "minLength": 1,
                "maxLength": 51200
            },
            "TemplateURL": {
                "description": "Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket.",
                "type": "string",
                "minLength": 1,
                "maxLength": 5120
            },
            "CallAs": {
                "description": "Specifies the AWS account that you are acting from. By default, SELF is specified. For self-managed permissions, specify SELF; for service-managed permissions, if you are signed in to the organization's management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN.",
                "type": "string",
                "enum": [
                    "SELF",
                    "DELEGATED_ADMIN"
                ]
            },
            "ManagedExecution": {
                "description": "Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.",
                "type": "object",
                "properties": {
                    "Active": {
                        "$ref": "#/definitions/Active"
                    }
                },
                "additionalProperties": false
            }
        }
    },
    "AWS::Config::ConformancePack": {
        "properties": {
            "ConformancePackName": {
                "description": "Name of the conformance pack which will be assigned as the unique identifier.",
                "type": "string",
                "pattern": "[a-zA-Z][-a-zA-Z0-9]*",
                "minLength": 1,
                "maxLength": 256
            },
            "DeliveryS3Bucket": {
                "description": "AWS Config stores intermediate files while processing conformance pack template.",
                "type": "string",
                "minLength": 0,
                "maxLength": 63
            },
            "DeliveryS3KeyPrefix": {
                "description": "The prefix for delivery S3 bucket.",
                "type": "string",
                "minLength": 0,
                "maxLength": 1024
            },
            "TemplateBody": {
                "description": "A string containing full conformance pack template body. You can only specify one of the template body or template S3Uri fields.",
                "type": "string",
                "minLength": 1,
                "maxLength": 51200
            },
            "TemplateS3Uri": {
                "description": "Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket. You can only specify one of the template body or template S3Uri fields.",
                "type": "string",
                "pattern": "s3://.*",
                "minLength": 1,
                "maxLength": 1024
            },
            "TemplateSSMDocumentDetails": {
                "description": "The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document.",
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "DocumentName": {
                        "type": "string",
                        "minLength": 3,
                        "maxLength": 128
                    },
                    "DocumentVersion": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 128
                    }
                }
            },
            "ConformancePackInputParameters": {
                "description": "A list of ConformancePackInputParameter objects.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ConformancePackInputParameter"
                },
                "minItems": 0,
                "maxItems": 60
            }
        }
    },
    "AWS::Config::OrganizationConformancePack": {
        "properties": {
            "OrganizationConformancePackName": {
                "description": "The name of the organization conformance pack.",
                "type": "string",
                "pattern": "[a-zA-Z][-a-zA-Z0-9]*",
                "minLength": 1,
                "maxLength": 128
            },
            "TemplateS3Uri": {
                "description": "Location of file containing the template body.",
                "type": "string",
                "pattern": "s3://.*",
                "minLength": 1,
                "maxLength": 1024
            },
            "TemplateBody": {
                "description": "A string containing full conformance pack template body.",
                "type": "string",
                "minLength": 1,
                "maxLength": 51200
            },
            "DeliveryS3Bucket": {
                "description": "AWS Config stores intermediate files while processing conformance pack template.",
                "type": "string",
                "minLength": 0,
                "maxLength": 63
            },
            "DeliveryS3KeyPrefix": {
                "description": "The prefix for the delivery S3 bucket.",
                "type": "string",
                "minLength": 0,
                "maxLength": 1024
            },
            "ConformancePackInputParameters": {
                "description": "A list of ConformancePackInputParameter objects.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ConformancePackInputParameter"
                },
                "minItems": 0,
                "maxItems": 60
            },
            "ExcludedAccounts": {
                "description": "A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/AccountId"
                },
                "minItems": 0,
                "maxItems": 1000
            }
        }
    },
    "AWS::DataSync::Agent": {
        "properties": {
            "AgentName": {
                "description": "The name configured for the agent. Text reference used to identify the agent in the console.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9\\s+=._:@/-]+$",
                "maxLength": 256,
                "minLength": 1
            },
            "ActivationKey": {
                "description": "Activation key of the Agent.",
                "type": "string",
                "pattern": "[A-Z0-9]{5}(-[A-Z0-9]{5}){4}",
                "maxLength": 29
            },
            "SecurityGroupArns": {
                "description": "The ARNs of the security group used to protect your data transfer task subnets.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\\-0-9]*:[0-9]{12}:security-group/.*$",
                    "maxLength": 128
                }
            },
            "SubnetArns": {
                "description": "The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\\-0-9]*:[0-9]{12}:subnet/.*$",
                    "maxLength": 128
                }
            },
            "VpcEndpointId": {
                "description": "The ID of the VPC endpoint that the agent has access to.",
                "type": "string",
                "pattern": "^vpce-[0-9a-f]{17}$"
            },
            "EndpointType": {
                "description": "The service endpoints that the agent will connect to.",
                "type": "string",
                "enum": [
                    "FIPS",
                    "PUBLIC",
                    "PRIVATE_LINK"
                ]
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "AgentArn": {
                "description": "The DataSync Agent ARN.",
                "type": "string",
                "pattern": "^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\\-0-9]+:[0-9]{12}:agent/agent-[0-9a-z]{17}$",
                "maxLength": 128
            }
        }
    },
    "AWS::RedshiftServerless::Namespace": {
        "properties": {
            "AdminUserPassword": {
                "description": "The password associated with the admin user for the namespace that is being created. Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit.",
                "type": "string",
                "maxLength": 64,
                "minLength": 8,
                "pattern": "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[^\\x00-\\x20\\x22\\x27\\x2f\\x40\\x5c\\x7f-\\uffff]+"
            },
            "AdminUsername": {
                "description": "The user name associated with the admin user for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.",
                "type": "string",
                "pattern": "[a-zA-Z][a-zA-Z_0-9+.@-]*"
            },
            "DbName": {
                "description": "The database name associated for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.",
                "type": "string",
                "pattern": "[a-zA-Z][a-zA-Z_0-9+.@-]*",
                "maxLength": 127
            },
            "DefaultIamRoleArn": {
                "description": "The default IAM role ARN for the namespace that is being created.",
                "type": "string"
            },
            "IamRoles": {
                "description": "A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "maxLength": 512,
                    "minLength": 0
                }
            },
            "KmsKeyId": {
                "description": "The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace.",
                "type": "string"
            },
            "LogExports": {
                "description": "The collection of log types to be exported provided by the customer. Should only be one of the three supported log types: userlog, useractivitylog and connectionlog",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/LogExport"
                },
                "maxItems": 16,
                "minItems": 0
            },
            "Namespace": {
                "$ref": "#/definitions/Namespace"
            },
            "NamespaceName": {
                "description": "A unique identifier for the namespace. You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account.",
                "type": "string",
                "maxLength": 64,
                "minLength": 3,
                "pattern": "^[a-z0-9-]+$"
            },
            "Tags": {
                "description": "The list of tags for the namespace.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 200,
                "minItems": 0
            },
            "FinalSnapshotName": {
                "description": "The name of the namespace the source snapshot was created from. Please specify the name if needed before deleting namespace",
                "type": "string",
                "pattern": "[a-z][a-z0-9]*(-[a-z0-9]+)*",
                "maxLength": 255
            },
            "FinalSnapshotRetentionPeriod": {
                "description": "The number of days to retain automated snapshot in the destination region after they are copied from the source region. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.",
                "type": "integer"
            }
        }
    },
    "AWS::GameLift::Fleet": {
        "properties": {
            "AnywhereConfiguration": {
                "description": "Configuration for Anywhere fleet.",
                "$ref": "#/definitions/AnywhereConfiguration"
            },
            "CertificateConfiguration": {
                "description": "Indicates whether to generate a TLS/SSL certificate for the new fleet. TLS certificates are used for encrypting traffic between game clients and game servers running on GameLift. If this parameter is not set, certificate generation is disabled. This fleet setting cannot be changed once the fleet is created.",
                "$ref": "#/definitions/CertificateConfiguration"
            },
            "ComputeType": {
                "description": "ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer.",
                "type": "string",
                "enum": [
                    "EC2",
                    "ANYWHERE"
                ]
            },
            "Description": {
                "description": "A human-readable description of a fleet.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1024
            },
            "DesiredEC2Instances": {
                "description": "[DEPRECATED] The number of EC2 instances that you want this fleet to host. When creating a new fleet, GameLift automatically sets this value to \"1\" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.",
                "type": "integer",
                "minimum": 0
            },
            "EC2InboundPermissions": {
                "description": "A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.",
                "type": "array",
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/IpPermission"
                },
                "insertionOrder": false
            },
            "EC2InstanceType": {
                "description": "The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.",
                "type": "string",
                "pattern": "^.*..*$"
            },
            "FleetType": {
                "description": "Indicates whether to use On-Demand instances or Spot instances for this fleet. If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.",
                "type": "string",
                "enum": [
                    "ON_DEMAND",
                    "SPOT"
                ]
            },
            "InstanceRoleARN": {
                "description": "A unique identifier for an AWS IAM role that manages access to your AWS services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.",
                "type": "string",
                "minLength": 1,
                "pattern": "^arn:aws(-.*)?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$"
            },
            "Locations": {
                "type": "array",
                "minItems": 1,
                "maxItems": 100,
                "items": {
                    "$ref": "#/definitions/LocationConfiguration"
                },
                "insertionOrder": false
            },
            "LogPaths": {
                "description": "This parameter is no longer used. When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "insertionOrder": false
            },
            "MaxSize": {
                "description": "[DEPRECATED] The maximum value that is allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to \"1\". Once the fleet is active, you can change this value.",
                "type": "integer",
                "minimum": 0
            },
            "MetricGroups": {
                "description": "The name of an Amazon CloudWatch metric group. A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.",
                "type": "array",
                "maxItems": 1,
                "items": {
                    "type": "string"
                },
                "insertionOrder": false
            },
            "MinSize": {
                "description": "[DEPRECATED] The minimum value allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to \"0\". After the fleet is active, you can change this value.",
                "type": "integer",
                "minimum": 0
            },
            "Name": {
                "description": "A descriptive label that is associated with a fleet. Fleet names do not need to be unique.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1024
            },
            "NewGameSessionProtectionPolicy": {
                "description": "A game session protection policy to apply to all game sessions hosted on instances in this fleet. When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.",
                "type": "string",
                "enum": [
                    "FullProtection",
                    "NoProtection"
                ]
            },
            "PeerVpcAwsAccountId": {
                "description": "A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your account ID in the AWS Management Console under account settings.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1024,
                "pattern": "^[0-9]{12}$"
            },
            "PeerVpcId": {
                "description": "A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1024,
                "pattern": "^vpc-\\S+"
            },
            "ResourceCreationLimitPolicy": {
                "description": "A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.",
                "$ref": "#/definitions/ResourceCreationLimitPolicy"
            },
            "FleetId": {
                "description": "Unique fleet ID",
                "type": "string",
                "pattern": "^fleet-\\S+"
            },
            "BuildId": {
                "description": "A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.",
                "type": "string",
                "pattern": "^build-\\S+|^arn:.*:build/build-\\S+"
            },
            "ScriptId": {
                "description": "A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet. The script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.\n\nNote: It is not currently possible to use the !Ref command to reference a script created with a CloudFormation template for the fleet property ScriptId. Instead, use Fn::GetAtt Script.Arn or Fn::GetAtt Script.Id to retrieve either of these properties as input for ScriptId. Alternatively, enter a ScriptId string manually.",
                "type": "string",
                "pattern": "^script-\\S+|^arn:.*:script/script-\\S+"
            },
            "RuntimeConfiguration": {
                "description": "Instructions for launching server processes on each instance in the fleet. Server processes run either a custom game build executable or a Realtime script. The runtime configuration defines the server executables or launch script file, launch parameters, and the number of processes to run concurrently on each instance. When creating a fleet, the runtime configuration must have at least one server process configuration; otherwise the request fails with an invalid request exception.\n\nThis parameter is required unless the parameters ServerLaunchPath and ServerLaunchParameters are defined. Runtime configuration has replaced these parameters, but fleets that use them will continue to work.",
                "$ref": "#/definitions/RuntimeConfiguration"
            },
            "ServerLaunchParameters": {
                "description": "This parameter is no longer used but is retained for backward compatibility. Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1024
            },
            "ServerLaunchPath": {
                "description": "This parameter is no longer used. Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.",
                "type": "string",
                "minLength": 1,
                "maxLength": 1024
            }
        }
    },
    "AWS::WorkSpaces::ConnectionAlias": {
        "properties": {
            "Associations": {
                "type": "array",
                "maxLength": 25,
                "minLength": 1,
                "items": {
                    "$ref": "#/definitions/ConnectionAliasAssociation"
                }
            },
            "AliasId": {
                "type": "string",
                "pattern": "^wsca-[0-9a-z]{8,63}$",
                "maxLength": 68,
                "minLength": 13
            },
            "ConnectionString": {
                "type": "string",
                "pattern": "^[.0-9a-zA-Z\\-]{1,255}$",
                "minLength": 1,
                "maxLength": 255
            },
            "ConnectionAliasState": {
                "type": "string",
                "enum": [
                    "CREATING",
                    "CREATED",
                    "DELETING"
                ]
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::IoTAnalytics::Datastore": {
        "properties": {
            "DatastoreStorage": {
                "$ref": "#/definitions/DatastoreStorage"
            },
            "DatastoreName": {
                "type": "string",
                "pattern": "[a-zA-Z0-9_]+",
                "minLength": 1,
                "maxLength": 128
            },
            "DatastorePartitions": {
                "$ref": "#/definitions/DatastorePartitions"
            },
            "Id": {
                "type": "string"
            },
            "FileFormatConfiguration": {
                "$ref": "#/definitions/FileFormatConfiguration"
            },
            "RetentionPeriod": {
                "$ref": "#/definitions/RetentionPeriod"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 1,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::IoT::CACertificate": {
        "properties": {
            "CACertificatePem": {
                "type": "string",
                "pattern": "[\\s\\S]*",
                "minLength": 1,
                "maxLength": 65536
            },
            "VerificationCertificatePem": {
                "type": "string",
                "description": "The private key verification certificate.",
                "pattern": "[\\s\\S]*",
                "minLength": 1,
                "maxLength": 65536
            },
            "Status": {
                "type": "string",
                "enum": [
                    "ACTIVE",
                    "INACTIVE"
                ]
            },
            "CertificateMode": {
                "type": "string",
                "enum": [
                    "DEFAULT",
                    "SNI_ONLY"
                ]
            },
            "AutoRegistrationStatus": {
                "type": "string",
                "enum": [
                    "ENABLE",
                    "DISABLE"
                ]
            },
            "RemoveAutoRegistration": {
                "type": "boolean"
            },
            "RegistrationConfig": {
                "$ref": "#/definitions/RegistrationConfig"
            },
            "Id": {
                "type": "string"
            },
            "Arn": {
                "type": "string"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::IoTAnalytics::Pipeline": {
        "properties": {
            "Id": {
                "type": "string"
            },
            "PipelineName": {
                "type": "string",
                "pattern": "[a-zA-Z0-9_]+",
                "minLength": 1,
                "maxLength": 128
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 1,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "PipelineActivities": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "minItems": 1,
                "maxItems": 25,
                "items": {
                    "$ref": "#/definitions/Activity"
                }
            }
        }
    },
    "AWS::IoTWireless::PartnerAccount": {
        "properties": {
            "Sidewalk": {
                "description": "The Sidewalk account credentials.",
                "$ref": "#/definitions/SidewalkAccountInfo"
            },
            "PartnerAccountId": {
                "description": "The partner account ID to disassociate from the AWS account",
                "type": "string",
                "maxLength": 256
            },
            "PartnerType": {
                "description": "The partner type",
                "type": "string",
                "enum": [
                    "Sidewalk"
                ]
            },
            "SidewalkResponse": {
                "description": "The Sidewalk account credentials.",
                "$ref": "#/definitions/SidewalkAccountInfoWithFingerprint"
            },
            "AccountLinked": {
                "description": "Whether the partner account is linked to the AWS account.",
                "type": "boolean"
            },
            "SidewalkUpdate": {
                "description": "The Sidewalk account credentials.",
                "$ref": "#/definitions/SidewalkUpdateAccount"
            },
            "Fingerprint": {
                "description": "The fingerprint of the Sidewalk application server private key.",
                "type": "string"
            },
            "Arn": {
                "description": "PartnerAccount arn. Returned after successful create.",
                "type": "string"
            },
            "Tags": {
                "description": "A list of key-value pairs that contain metadata for the destination.",
                "type": "array",
                "uniqueItems": true,
                "maxItems": 200,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::IoTWireless::WirelessDevice": {
        "properties": {
            "Type": {
                "description": "Wireless device type, currently only Sidewalk and LoRa",
                "type": "string",
                "enum": [
                    "Sidewalk",
                    "LoRaWAN"
                ]
            },
            "Name": {
                "description": "Wireless device name",
                "type": "string",
                "maxLength": 256
            },
            "Description": {
                "description": "Wireless device description",
                "type": "string",
                "maxLength": 2048
            },
            "DestinationName": {
                "description": "Wireless device destination name",
                "type": "string",
                "maxLength": 128
            },
            "LoRaWAN": {
                "description": "The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device.",
                "$ref": "#/definitions/LoRaWANDevice"
            },
            "Tags": {
                "description": "A list of key-value pairs that contain metadata for the device. Currently not supported, will not create if tags are passed.",
                "type": "array",
                "uniqueItems": true,
                "maxItems": 200,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "Arn": {
                "description": "Wireless device arn. Returned after successful create.",
                "type": "string"
            },
            "Id": {
                "description": "Wireless device Id. Returned after successful create.",
                "type": "string",
                "maxLength": 256
            },
            "ThingArn": {
                "description": "Thing arn. Passed into update to associate Thing with Wireless device.",
                "type": "string"
            },
            "ThingName": {
                "description": "Thing Arn. If there is a Thing created, this can be returned with a Get call.",
                "type": "string"
            },
            "LastUplinkReceivedAt": {
                "description": "The date and time when the most recent uplink was received.",
                "type": "string"
            }
        }
    },
    "AWS::Logs::Destination": {
        "properties": {
            "Arn": {
                "type": "string"
            },
            "DestinationName": {
                "description": "The name of the destination resource",
                "type": "string",
                "minLength": 1,
                "maxLength": 512,
                "pattern": "^[^:*]{1,512}$"
            },
            "DestinationPolicy": {
                "description": "An IAM policy document that governs which AWS accounts can create subscription filters against this destination.",
                "type": "string",
                "minLength": 1
            },
            "RoleArn": {
                "description": "The ARN of an IAM role that permits CloudWatch Logs to send data to the specified AWS resource",
                "type": "string",
                "minLength": 1
            },
            "TargetArn": {
                "description": "The ARN of the physical target where the log events are delivered (for example, a Kinesis stream)",
                "type": "string",
                "minLength": 1
            }
        }
    },
    "AWS::Lambda::CodeSigningConfig": {
        "properties": {
            "Description": {
                "description": "A description of the CodeSigningConfig",
                "type": "string",
                "minLength": 0,
                "maxLength": 256
            },
            "AllowedPublishers": {
                "description": "When the CodeSigningConfig is later on attached to a function, the function code will be expected to be signed by profiles from this list",
                "$ref": "#/definitions/AllowedPublishers"
            },
            "CodeSigningPolicies": {
                "description": "Policies to control how to act if a signature is invalid",
                "$ref": "#/definitions/CodeSigningPolicies"
            },
            "CodeSigningConfigId": {
                "description": "A unique identifier for CodeSigningConfig resource",
                "type": "string",
                "pattern": "csc-[a-zA-Z0-9-_\\.]{17}"
            },
            "CodeSigningConfigArn": {
                "description": "A unique Arn for CodeSigningConfig resource",
                "type": "string",
                "pattern": "arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\\d{1}:\\d{12}:code-signing-config:csc-[a-z0-9]{17}"
            }
        }
    },
    "AWS::Location::TrackerConsumer": {
        "properties": {
            "ConsumerArn": {
                "type": "string",
                "maxLength": 1600,
                "pattern": "^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$"
            },
            "TrackerName": {
                "type": "string",
                "maxLength": 100,
                "minLength": 1,
                "pattern": "^[-._\\w]+$"
            }
        }
    },
    "AWS::MemoryDB::ACL": {
        "properties": {
            "Status": {
                "description": "Indicates acl status. Can be \"creating\", \"active\", \"modifying\", \"deleting\".",
                "type": "string"
            },
            "ACLName": {
                "description": "The name of the acl.",
                "pattern": "[a-z][a-z0-9\\\\-]*",
                "type": "string"
            },
            "UserNames": {
                "type": "array",
                "$comment": "List of users.",
                "uniqueItems": true,
                "insertionOrder": true,
                "items": {
                    "type": "string"
                },
                "description": "List of users associated to this acl."
            },
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the acl.",
                "type": "string"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this cluster.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::NetworkFirewall::LoggingConfiguration": {
        "properties": {
            "FirewallName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "^[a-zA-Z0-9-]+$"
            },
            "FirewallArn": {
                "$ref": "#/definitions/ResourceArn"
            },
            "LoggingConfiguration": {
                "$ref": "#/definitions/LoggingConfiguration"
            }
        }
    },
    "AWS::SES::DedicatedIpPool": {
        "properties": {
            "PoolName": {
                "type": "string",
                "description": "The name of the dedicated IP pool.",
                "pattern": "^[a-z0-9_-]{0,64}$"
            },
            "ScalingMode": {
                "type": "string",
                "description": "Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD.",
                "pattern": "^(STANDARD|MANAGED)$"
            }
        }
    },
    "AWS::RDS::GlobalCluster": {
        "properties": {
            "Engine": {
                "description": "The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora).\nIf you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.",
                "type": "string",
                "enum": [
                    "aurora",
                    "aurora-mysql",
                    "aurora-postgresql"
                ]
            },
            "EngineVersion": {
                "description": "The version number of the database engine to use. If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.",
                "type": "string"
            },
            "DeletionProtection": {
                "description": "The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.",
                "type": "boolean"
            },
            "GlobalClusterIdentifier": {
                "description": "The cluster identifier of the new global database cluster. This parameter is stored as a lowercase string.",
                "type": "string",
                "pattern": "^[a-zA-Z]{1}(?:-?[a-zA-Z0-9]){0,62}$"
            },
            "SourceDBClusterIdentifier": {
                "description": "The Amazon Resource Name (ARN) to use as the primary cluster of the global database. This parameter is optional. This parameter is stored as a lowercase string.",
                "type": "string",
                "oneOf": [
                    {
                        "pattern": "^[a-zA-Z]{1}(?:-?[a-zA-Z0-9]){0,62}$"
                    },
                    {
                        "pattern": "^(?=.{40,128}$)arn.*"
                    }
                ]
            },
            "StorageEncrypted": {
                "description": " The storage encryption setting for the new global database cluster.\nIf you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.",
                "type": "boolean"
            }
        }
    },
    "AWS::RedshiftServerless::Workgroup": {
        "properties": {
            "WorkgroupName": {
                "type": "string",
                "pattern": "^(?=^[a-z0-9-]+$).{3,64}$",
                "maxLength": 64,
                "minLength": 3
            },
            "NamespaceName": {
                "type": "string",
                "pattern": "^(?=^[a-z0-9-]+$).{3,64}$",
                "maxLength": 64,
                "minLength": 3
            },
            "BaseCapacity": {
                "type": "integer"
            },
            "EnhancedVpcRouting": {
                "type": "boolean",
                "default": false
            },
            "ConfigParameters": {
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/ConfigParameter"
                },
                "minItems": 1
            },
            "SecurityGroupIds": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "pattern": "^sg-[0-9a-fA-F]{8,}$",
                    "maxLength": 255,
                    "minLength": 0
                },
                "maxItems": 32,
                "minItems": 1
            },
            "SubnetIds": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "type": "string",
                    "pattern": "^subnet-[0-9a-fA-F]{8,}$",
                    "maxLength": 255,
                    "minLength": 0
                },
                "maxItems": 32,
                "minItems": 1
            },
            "PubliclyAccessible": {
                "type": "boolean",
                "default": false
            },
            "Tags": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 200,
                "minItems": 0
            },
            "Workgroup": {
                "$ref": "#/definitions/Workgroup"
            }
        }
    },
    "AWS::RolesAnywhere::CRL": {
        "properties": {
            "CrlData": {
                "type": "string"
            },
            "CrlId": {
                "type": "string",
                "pattern": "[a-f0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}"
            },
            "Enabled": {
                "type": "boolean"
            },
            "Name": {
                "type": "string"
            },
            "TrustAnchorArn": {
                "type": "string",
                "pattern": "^arn:aws(-[^:]+)?:rolesanywhere(:.*){2}(:trust-anchor.*)$"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 200,
                "minItems": 0
            }
        }
    },
    "AWS::RolesAnywhere::TrustAnchor": {
        "properties": {
            "Enabled": {
                "type": "boolean"
            },
            "Name": {
                "type": "string"
            },
            "Source": {
                "$ref": "#/definitions/Source"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 200,
                "minItems": 0
            },
            "TrustAnchorId": {
                "type": "string",
                "pattern": "[a-f0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}"
            },
            "TrustAnchorArn": {
                "type": "string",
                "pattern": "[a-f0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}"
            }
        }
    },
    "AWS::RolesAnywhere::Profile": {
        "properties": {
            "DurationSeconds": {
                "type": "number",
                "maximum": 43200,
                "minimum": 900
            },
            "Enabled": {
                "type": "boolean"
            },
            "ManagedPolicyArns": {
                "type": "array",
                "items": {
                    "type": "string"
                }
            },
            "Name": {
                "type": "string"
            },
            "ProfileArn": {
                "type": "string"
            },
            "ProfileId": {
                "type": "string",
                "pattern": "[a-f0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}"
            },
            "RequireInstanceProperties": {
                "type": "boolean"
            },
            "RoleArns": {
                "type": "array",
                "items": {
                    "type": "string",
                    "maxLength": 1011,
                    "minLength": 1
                }
            },
            "SessionPolicy": {
                "type": "string"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 200,
                "minItems": 0
            }
        }
    },
    "AWS::Route53RecoveryReadiness::ReadinessCheck": {
        "properties": {
            "ResourceSetName": {
                "description": "The name of the resource set to check.",
                "type": "string",
                "pattern": "[a-zA-Z0-9_]+",
                "minLength": 1,
                "maxLength": 64
            },
            "ReadinessCheckName": {
                "description": "Name of the ReadinessCheck to create.",
                "type": "string",
                "pattern": "[a-zA-Z0-9_]+",
                "minLength": 1,
                "maxLength": 64
            },
            "ReadinessCheckArn": {
                "description": "The Amazon Resource Name (ARN) of the readiness check.",
                "type": "string",
                "maxLength": 256
            },
            "Tags": {
                "description": "A collection of tags associated with a resource.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag",
                    "maxItems": 20
                },
                "insertionOrder": false
            }
        }
    },
    "AWS::SageMaker::Device": {
        "properties": {
            "DeviceFleetName": {
                "description": "The name of the edge device fleet",
                "type": "string",
                "pattern": "^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$",
                "minLength": 1,
                "maxLength": 63
            },
            "Device": {
                "description": "The Edge Device you want to register against a device fleet",
                "$ref": "#/definitions/Device"
            },
            "Tags": {
                "description": "Associate tags with the resource",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Signer::ProfilePermission": {
        "properties": {
            "ProfileName": {
                "type": "string"
            },
            "ProfileVersion": {
                "type": "string",
                "pattern": "^[0-9a-zA-Z]{10}$"
            },
            "Action": {
                "type": "string"
            },
            "Principal": {
                "type": "string"
            },
            "StatementId": {
                "type": "string"
            }
        }
    },
    "AWS::Wisdom::Assistant": {
        "properties": {
            "Type": {
                "$ref": "#/definitions/AssistantType"
            },
            "Description": {
                "type": "string",
                "maxLength": 255,
                "minLength": 1
            },
            "AssistantArn": {
                "type": "string",
                "pattern": "^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$"
            },
            "AssistantId": {
                "type": "string",
                "pattern": "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"
            },
            "ServerSideEncryptionConfiguration": {
                "$ref": "#/definitions/ServerSideEncryptionConfiguration"
            },
            "Tags": {
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "type": "array"
            },
            "Name": {
                "type": "string",
                "maxLength": 255,
                "minLength": 1
            }
        }
    },
    "AWS::Wisdom::AssistantAssociation": {
        "properties": {
            "AssistantAssociationArn": {
                "type": "string",
                "pattern": "^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$"
            },
            "AssistantArn": {
                "type": "string",
                "pattern": "^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$"
            },
            "AssistantAssociationId": {
                "type": "string",
                "pattern": "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"
            },
            "AssistantId": {
                "type": "string",
                "pattern": "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"
            },
            "Association": {
                "$ref": "#/definitions/AssociationData"
            },
            "AssociationType": {
                "$ref": "#/definitions/AssociationType"
            },
            "Tags": {
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "type": "array"
            }
        }
    },
    "AWS::ApplicationInsights::Application": {
        "properties": {
            "ResourceGroupName": {
                "description": "The name of the resource group.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "[a-zA-Z0-9.-_]*"
            },
            "ApplicationARN": {
                "description": "The ARN of the ApplicationInsights application.",
                "type": "string"
            },
            "CWEMonitorEnabled": {
                "description": "Indicates whether Application Insights can listen to CloudWatch events for the application resources.",
                "type": "boolean"
            },
            "OpsCenterEnabled": {
                "description": "When set to true, creates opsItems for any problems detected on an application.",
                "type": "boolean"
            },
            "OpsItemSNSTopicArn": {
                "description": "The SNS topic provided to Application Insights that is associated to the created opsItem.",
                "type": "string",
                "minLength": 20,
                "maxLength": 300,
                "pattern": "^arn:aws(-[\\w]+)*:[\\w\\d-]+:([\\w\\d-]*)?:[\\w\\d_-]*([:/].+)*$"
            },
            "Tags": {
                "description": "The tags of Application Insights application.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 1,
                "insertionOrder": true
            },
            "CustomComponents": {
                "description": "The custom grouped components.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/CustomComponent"
                },
                "minItems": 1,
                "insertionOrder": true
            },
            "LogPatternSets": {
                "description": "The log pattern sets.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/LogPatternSet"
                },
                "minItems": 1,
                "insertionOrder": true
            },
            "AutoConfigurationEnabled": {
                "description": "If set to true, application will be configured with recommended monitoring configuration.",
                "type": "boolean"
            },
            "ComponentMonitoringSettings": {
                "description": "The monitoring settings of the components.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/ComponentMonitoringSetting"
                },
                "minItems": 1,
                "insertionOrder": true
            },
            "GroupingType": {
                "description": "The grouping type of the application",
                "type": "string",
                "enum": [
                    "ACCOUNT_BASED"
                ]
            }
        }
    },
    "AWS::AppRunner::ObservabilityConfiguration": {
        "properties": {
            "ObservabilityConfigurationArn": {
                "description": "The Amazon Resource Name (ARN) of this ObservabilityConfiguration",
                "type": "string",
                "minLength": 1,
                "maxLength": 1011,
                "pattern": "arn:aws(-[\\w]+)*:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[0-9]{12}:(\\w|/|-){1,1011}"
            },
            "ObservabilityConfigurationName": {
                "description": "A name for the observability configuration. When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.",
                "type": "string",
                "minLength": 4,
                "maxLength": 32,
                "pattern": "[A-Za-z0-9][A-Za-z0-9\\-_]{3,31}"
            },
            "ObservabilityConfigurationRevision": {
                "description": "The revision of this observability configuration. It's unique among all the active configurations ('Status': 'ACTIVE') that share the same ObservabilityConfigurationName.",
                "type": "integer"
            },
            "Latest": {
                "description": "It's set to true for the configuration with the highest Revision among all configurations that share the same Name. It's set to false otherwise.",
                "type": "boolean"
            },
            "TraceConfiguration": {
                "description": "The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.",
                "$ref": "#/definitions/TraceConfiguration"
            },
            "Tags": {
                "description": "A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::AppRunner::VpcConnector": {
        "properties": {
            "VpcConnectorName": {
                "description": "A name for the VPC connector. If you don't specify a name, AWS CloudFormation generates a name for your VPC connector.",
                "type": "string",
                "minLength": 4,
                "maxLength": 40,
                "pattern": "^[A-Za-z0-9][A-Za-z0-9-\\\\_]{3,39}$"
            },
            "VpcConnectorArn": {
                "description": "The Amazon Resource Name (ARN) of this VPC connector.",
                "type": "string",
                "minLength": 44,
                "maxLength": 1011,
                "pattern": "arn:aws(-[\\w]+)*:[a-z0-9-\\\\.]{0,63}:[a-z0-9-\\\\.]{0,63}:[0-9]{12}:(\\w|\\/|-){1,1011}"
            },
            "VpcConnectorRevision": {
                "description": "The revision of this VPC connector. It's unique among all the active connectors (\"Status\": \"ACTIVE\") that share the same Name.",
                "type": "integer"
            },
            "Subnets": {
                "description": "A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "minItems": 1,
                "items": {
                    "type": "string"
                }
            },
            "SecurityGroups": {
                "description": "A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "Tags": {
                "description": "A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Backup::Framework": {
        "properties": {
            "FrameworkName": {
                "description": "The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).",
                "type": "string",
                "pattern": "[a-zA-Z][_a-zA-Z0-9]*",
                "minLength": 1,
                "maxLength": 256
            },
            "FrameworkDescription": {
                "description": "An optional description of the framework with a maximum 1,024 characters.",
                "type": "string",
                "minLength": 0,
                "maxLength": 1024
            },
            "FrameworkArn": {
                "description": "An Amazon Resource Name (ARN) that uniquely identifies Framework as a resource",
                "type": "string"
            },
            "DeploymentStatus": {
                "description": "The deployment status of a framework. The statuses are: `CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED | FAILED`",
                "type": "string"
            },
            "CreationTime": {
                "description": "The date and time that a framework is created, in ISO 8601 representation. The value of CreationTime is accurate to milliseconds. For example, 2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind UTC.",
                "type": "string"
            },
            "FrameworkControls": {
                "description": "Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/FrameworkControl"
                }
            },
            "FrameworkStatus": {
                "type": "string",
                "description": "A framework consists of one or more controls. Each control governs a resource, such as backup plans, backup selections, backup vaults, or recovery points. You can also turn AWS Config recording on or off for each resource. The statuses are:\n\n`ACTIVE` when recording is turned on for all resources governed by the framework.\n\n`PARTIALLY_ACTIVE` when recording is turned off for at least one resource governed by the framework.\n\n`INACTIVE` when recording is turned off for all resources governed by the framework.\n\n`UNAVAILABLE` when AWS Backup is unable to validate recording status at this time."
            },
            "FrameworkTags": {
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "description": "Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair."
            }
        }
    },
    "AWS::Backup::ReportPlan": {
        "properties": {
            "ReportPlanName": {
                "type": "string",
                "description": "The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "[a-zA-Z][_a-zA-Z0-9]*"
            },
            "ReportPlanArn": {
                "type": "string",
                "description": "An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type."
            },
            "ReportPlanDescription": {
                "type": "string",
                "description": "An optional description of the report plan with a maximum of 1,024 characters.",
                "minLength": 0,
                "maxLength": 1024,
                "pattern": ".*\\S.*"
            },
            "ReportPlanTags": {
                "description": "Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "ReportDeliveryChannel": {
                "type": "object",
                "description": "A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.",
                "properties": {
                    "Formats": {
                        "type": "array",
                        "description": "A list of the format of your reports: CSV, JSON, or both. If not specified, the default format is CSV.",
                        "uniqueItems": true,
                        "insertionOrder": false,
                        "items": {
                            "type": "string"
                        }
                    },
                    "S3BucketName": {
                        "type": "string",
                        "description": "The unique name of the S3 bucket that receives your reports."
                    },
                    "S3KeyPrefix": {
                        "type": "string",
                        "description": "The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix."
                    }
                },
                "additionalProperties": false,
                "required": [
                    "S3BucketName"
                ]
            },
            "ReportSetting": {
                "type": "object",
                "description": "Identifies the report template for the report. Reports are built using a report template.",
                "properties": {
                    "ReportTemplate": {
                        "type": "string",
                        "description": "Identifies the report template for the report. Reports are built using a report template. The report templates are: `BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`"
                    },
                    "FrameworkArns": {
                        "type": "array",
                        "description": "The Amazon Resource Names (ARNs) of the frameworks a report covers.",
                        "insertionOrder": false,
                        "uniqueItems": true,
                        "items": {
                            "type": "string"
                        }
                    },
                    "Accounts": {
                        "type": "array",
                        "description": "The list of AWS accounts that a report covers.",
                        "insertionOrder": false,
                        "uniqueItems": true,
                        "items": {
                            "type": "string"
                        }
                    },
                    "OrganizationUnits": {
                        "type": "array",
                        "description": "The list of AWS organization units that a report covers.",
                        "insertionOrder": false,
                        "uniqueItems": true,
                        "items": {
                            "type": "string"
                        }
                    },
                    "Regions": {
                        "type": "array",
                        "description": "The list of AWS regions that a report covers.",
                        "insertionOrder": false,
                        "uniqueItems": true,
                        "items": {
                            "type": "string"
                        }
                    }
                },
                "additionalProperties": false,
                "required": [
                    "ReportTemplate"
                ]
            }
        }
    },
    "AWS::CloudTrail::Trail": {
        "properties": {
            "CloudWatchLogsLogGroupArn": {
                "description": "Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn.",
                "type": "string"
            },
            "CloudWatchLogsRoleArn": {
                "description": "Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.",
                "type": "string"
            },
            "EnableLogFileValidation": {
                "description": "Specifies whether log file validation is enabled. The default is false.",
                "type": "boolean"
            },
            "EventSelectors": {
                "description": "Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. You can configure up to five event selectors for a trail.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/EventSelector"
                },
                "maxItems": 5,
                "uniqueItems": true,
                "insertionOrder": false
            },
            "IncludeGlobalServiceEvents": {
                "description": "Specifies whether the trail is publishing events from global services such as IAM to the log files.",
                "type": "boolean"
            },
            "IsLogging": {
                "description": "Whether the CloudTrail is currently logging AWS API calls.",
                "type": "boolean"
            },
            "IsMultiRegionTrail": {
                "description": "Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.",
                "type": "boolean"
            },
            "IsOrganizationTrail": {
                "description": "Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations.",
                "type": "boolean"
            },
            "KMSKeyId": {
                "description": "Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.",
                "type": "string"
            },
            "S3BucketName": {
                "description": "Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements.",
                "type": "string"
            },
            "S3KeyPrefix": {
                "description": "Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters.",
                "type": "string",
                "maxLength": 200
            },
            "SnsTopicName": {
                "description": "Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.",
                "type": "string",
                "maxLength": 256
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "TrailName": {
                "type": "string",
                "pattern": "(^[a-zA-Z0-9]$)|(^[a-zA-Z0-9]([a-zA-Z0-9\\._-])*[a-zA-Z0-9]$)",
                "minLength": 3,
                "maxLength": 128
            },
            "Arn": {
                "type": "string"
            },
            "SnsTopicArn": {
                "type": "string"
            },
            "InsightSelectors": {
                "description": "Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/InsightSelector"
                },
                "uniqueItems": true,
                "insertionOrder": false
            }
        }
    },
    "AWS::Config::AggregationAuthorization": {
        "properties": {
            "AuthorizedAccountId": {
                "description": "The 12-digit account ID of the account authorized to aggregate data.",
                "type": "string",
                "pattern": "^\\d{12}$"
            },
            "AuthorizedAwsRegion": {
                "description": "The region authorized to collect aggregated data.",
                "type": "string",
                "minLength": 1,
                "maxLength": 64
            },
            "AggregationAuthorizationArn": {
                "description": "The ARN of the AggregationAuthorization.",
                "type": "string"
            },
            "Tags": {
                "description": "The tags for the AggregationAuthorization.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Config::ConfigurationAggregator": {
        "properties": {
            "AccountAggregationSources": {
                "type": "array",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/AccountAggregationSource"
                }
            },
            "ConfigurationAggregatorName": {
                "description": "The name of the aggregator.",
                "type": "string",
                "pattern": "[\\w\\-]+",
                "minLength": 1,
                "maxLength": 256
            },
            "ConfigurationAggregatorArn": {
                "description": "The Amazon Resource Name (ARN) of the aggregator.",
                "type": "string"
            },
            "OrganizationAggregationSource": {
                "$ref": "#/definitions/OrganizationAggregationSource"
            },
            "Tags": {
                "description": "The tags for the configuration aggregator.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Config::StoredQuery": {
        "properties": {
            "QueryArn": {
                "type": "string",
                "minLength": 1,
                "maxLength": 500
            },
            "QueryId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 36,
                "pattern": "^\\S+$"
            },
            "QueryName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 64,
                "pattern": "^[a-zA-Z0-9-_]+$"
            },
            "QueryDescription": {
                "type": "string",
                "minLength": 0,
                "maxLength": 256,
                "pattern": "[\\s\\S]*"
            },
            "QueryExpression": {
                "type": "string",
                "minLength": 1,
                "maxLength": 4096,
                "pattern": "[\\s\\S]*"
            },
            "Tags": {
                "description": "The tags for the stored query.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::ControlTower::EnabledControl": {
        "properties": {
            "ControlIdentifier": {
                "description": "Arn of the control.",
                "type": "string",
                "pattern": "^arn:aws[0-9a-zA-Z_\\-:\\/]+$",
                "minLength": 20,
                "maxLength": 2048
            },
            "TargetIdentifier": {
                "description": "Arn for Organizational unit to which the control needs to be applied",
                "type": "string",
                "pattern": "^arn:aws[0-9a-zA-Z_\\-:\\/]+$",
                "minLength": 20,
                "maxLength": 2048
            }
        }
    },
    "AWS::CUR::ReportDefinition": {
        "properties": {
            "ReportName": {
                "description": "The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "[0-9A-Za-z!\\-_.*\\'()]+"
            },
            "TimeUnit": {
                "description": "The granularity of the line items in the report.",
                "type": "string",
                "enum": [
                    "HOURLY",
                    "DAILY",
                    "MONTHLY"
                ]
            },
            "Format": {
                "description": "The format that AWS saves the report in.",
                "type": "string",
                "enum": [
                    "textORcsv",
                    "Parquet"
                ]
            },
            "Compression": {
                "description": "The compression format that AWS uses for the report.",
                "type": "string",
                "enum": [
                    "ZIP",
                    "GZIP",
                    "Parquet"
                ]
            },
            "AdditionalSchemaElements": {
                "description": "A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs.",
                "type": "array",
                "default": [],
                "items": {
                    "description": "Whether or not AWS includes resource IDs in the report.",
                    "type": "string",
                    "enum": [
                        "RESOURCES"
                    ]
                }
            },
            "S3Bucket": {
                "description": "The S3 bucket where AWS delivers the report.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "[A-Za-z0-9_\\.\\-]+"
            },
            "S3Prefix": {
                "description": "The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "[0-9A-Za-z!\\-_.*\\'()/]*"
            },
            "S3Region": {
                "description": "The region of the S3 bucket that AWS delivers the report into.",
                "type": "string"
            },
            "AdditionalArtifacts": {
                "description": "A list of manifests that you want Amazon Web Services to create for this report.",
                "type": "array",
                "default": [],
                "items": {
                    "description": "The types of manifest that you want AWS to create for this report.",
                    "type": "string",
                    "enum": [
                        "REDSHIFT",
                        "QUICKSIGHT",
                        "ATHENA"
                    ]
                }
            },
            "RefreshClosedReports": {
                "description": "Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. These charges can include refunds, credits, or support fees.",
                "type": "boolean"
            },
            "ReportVersioning": {
                "description": "Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions.",
                "type": "string",
                "enum": [
                    "CREATE_NEW_REPORT",
                    "OVERWRITE_REPORT"
                ]
            },
            "BillingViewArn": {
                "description": "The Amazon resource name of the billing view. You can get this value by using the billing view service public APIs.",
                "type": "string",
                "default": null,
                "pattern": "(arn:aws(-cn)?:billing::[0-9]{12}:billingview/)?[a-zA-Z0-9_\\+=\\.\\-@].{1,30}",
                "minLength": 1,
                "maxLength": 128
            }
        }
    },
    "AWS::CodeGuruProfiler::ProfilingGroup": {
        "properties": {
            "ProfilingGroupName": {
                "description": "The name of the profiling group.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255,
                "pattern": "^[\\w-]+$"
            },
            "ComputePlatform": {
                "description": "The compute platform of the profiling group.",
                "type": "string",
                "enum": [
                    "Default",
                    "AWSLambda"
                ]
            },
            "AgentPermissions": {
                "description": "The agent permissions attached to this profiling group.",
                "type": "object",
                "additionalProperties": false,
                "required": [
                    "Principals"
                ],
                "properties": {
                    "Principals": {
                        "description": "The principals for the agent permissions.",
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/IamArn"
                        }
                    }
                }
            },
            "AnomalyDetectionNotificationConfiguration": {
                "description": "Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Channel"
                }
            },
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the specified profiling group.",
                "$ref": "#/definitions/ProfilingGroupArn",
                "examples": [
                    "arn:aws:codeguru-profiler:us-east-1:000000000000:profilingGroup/My-example-profiling-group"
                ]
            },
            "Tags": {
                "description": "The tags associated with a profiling group.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "maxItems": 50,
                "uniqueItems": true
            }
        }
    },
    "AWS::ECR::PullThroughCacheRule": {
        "properties": {
            "EcrRepositoryPrefix": {
                "type": "string",
                "description": "The ECRRepositoryPrefix is a custom alias for upstream registry url.",
                "minLength": 2,
                "maxLength": 20,
                "pattern": "^([a-z0-9]+(?:[._-][a-z0-9]+)*)$"
            },
            "UpstreamRegistryUrl": {
                "type": "string",
                "description": "The upstreamRegistryUrl is the endpoint of upstream registry url of the public repository to be cached"
            }
        }
    },
    "AWS::ElastiCache::User": {
        "properties": {
            "Status": {
                "description": "Indicates the user status. Can be \"active\", \"modifying\" or \"deleting\".",
                "type": "string"
            },
            "UserId": {
                "description": "The ID of the user.",
                "pattern": "[a-z][a-z0-9\\\\-]*",
                "type": "string"
            },
            "UserName": {
                "description": "The username of the user.",
                "type": "string"
            },
            "Engine": {
                "description": "Must be redis.",
                "type": "string",
                "enum": [
                    "redis"
                ]
            },
            "AccessString": {
                "description": "Access permissions string used for this user account.",
                "type": "string"
            },
            "NoPasswordRequired": {
                "description": "Indicates a password is not required for this user account.",
                "type": "boolean"
            },
            "Passwords": {
                "type": "array",
                "$comment": "List of passwords.",
                "uniqueItems": true,
                "insertionOrder": true,
                "items": {
                    "type": "string"
                },
                "description": "Passwords used for this user account. You can create up to two passwords for each user."
            },
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the user account.",
                "type": "string"
            },
            "AuthenticationMode": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "Type": {
                        "description": "Authentication Type",
                        "type": "string",
                        "enum": [
                            "password",
                            "no-password-required",
                            "iam"
                        ]
                    },
                    "Passwords": {
                        "type": "array",
                        "$comment": "List of passwords.",
                        "uniqueItems": true,
                        "insertionOrder": true,
                        "items": {
                            "type": "string"
                        },
                        "description": "Passwords used for this user account. You can create up to two passwords for each user."
                    }
                },
                "required": [
                    "Type"
                ]
            }
        }
    },
    "AWS::ElastiCache::UserGroup": {
        "properties": {
            "Status": {
                "description": "Indicates user group status. Can be \"creating\", \"active\", \"modifying\", \"deleting\".",
                "type": "string"
            },
            "UserGroupId": {
                "description": "The ID of the user group.",
                "pattern": "[a-z][a-z0-9\\\\-]*",
                "type": "string"
            },
            "Engine": {
                "description": "Must be redis.",
                "type": "string",
                "enum": [
                    "redis"
                ]
            },
            "UserIds": {
                "type": "array",
                "$comment": "List of users.",
                "uniqueItems": true,
                "insertionOrder": true,
                "items": {
                    "type": "string"
                },
                "description": "List of users associated to this user group."
            },
            "Arn": {
                "description": "The Amazon Resource Name (ARN) of the user account.",
                "type": "string"
            }
        }
    },
    "AWS::Glue::SchemaVersionMetadata": {
        "properties": {
            "SchemaVersionId": {
                "type": "string",
                "description": "Represents the version ID associated with the schema version.",
                "pattern": "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}"
            },
            "Key": {
                "type": "string",
                "description": "Metadata key",
                "minLength": 1,
                "maxLength": 128
            },
            "Value": {
                "type": "string",
                "description": "Metadata value",
                "minLength": 1,
                "maxLength": 256
            }
        }
    },
    "AWS::IoT::MitigationAction": {
        "properties": {
            "ActionName": {
                "description": "A unique identifier for the mitigation action.",
                "type": "string",
                "pattern": "[a-zA-Z0-9:_-]+",
                "minLength": 1,
                "maxLength": 128
            },
            "RoleArn": {
                "type": "string"
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "description": "An array of key-value pairs to apply to this resource.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "ActionParams": {
                "$ref": "#/definitions/ActionParams"
            },
            "MitigationActionArn": {
                "type": "string"
            },
            "MitigationActionId": {
                "type": "string"
            }
        }
    },
    "AWS::IoT::DomainConfiguration": {
        "properties": {
            "DomainConfigurationName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "^[\\w.-]+$"
            },
            "AuthorizerConfig": {
                "$ref": "#/definitions/AuthorizerConfig"
            },
            "DomainName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 253
            },
            "ServerCertificateArns": {
                "type": "array",
                "minItems": 0,
                "maxItems": 1,
                "insertionOrder": true,
                "items": {
                    "type": "string",
                    "pattern": "^arn:aws(-cn|-us-gov|-iso-b|-iso)?:acm:[a-z]{2}-(gov-|iso-|isob-)?[a-z]{4,9}-\\d{1}:\\d{12}:certificate/[a-zA-Z0-9/-]+$",
                    "minLength": 1,
                    "maxLength": 2048
                }
            },
            "ServiceType": {
                "type": "string",
                "enum": [
                    "DATA",
                    "CREDENTIAL_PROVIDER",
                    "JOBS"
                ]
            },
            "ValidationCertificateArn": {
                "type": "string",
                "pattern": "^arn:aws(-cn|-us-gov|-iso-b|-iso)?:acm:[a-z]{2}-(gov-|iso-|isob-)?[a-z]{4,9}-\\d{1}:\\d{12}:certificate/[a-zA-Z0-9/-]+$"
            },
            "Arn": {
                "type": "string"
            },
            "DomainConfigurationStatus": {
                "type": "string",
                "enum": [
                    "ENABLED",
                    "DISABLED"
                ]
            },
            "DomainType": {
                "type": "string",
                "enum": [
                    "ENDPOINT",
                    "AWS_MANAGED",
                    "CUSTOMER_MANAGED"
                ]
            },
            "ServerCertificates": {
                "type": "array",
                "insertionOrder": true,
                "items": {
                    "$ref": "#/definitions/ServerCertificateSummary"
                }
            },
            "Tags": {
                "type": "array",
                "insertionOrder": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::IoT::ScheduledAudit": {
        "properties": {
            "ScheduledAuditName": {
                "description": "The name you want to give to the scheduled audit.",
                "type": "string",
                "pattern": "[a-zA-Z0-9:_-]+",
                "minLength": 1,
                "maxLength": 128
            },
            "Frequency": {
                "description": "How often the scheduled audit takes place. Can be one of DAILY, WEEKLY, BIWEEKLY, or MONTHLY.",
                "type": "string",
                "enum": [
                    "DAILY",
                    "WEEKLY",
                    "BIWEEKLY",
                    "MONTHLY"
                ]
            },
            "DayOfMonth": {
                "description": "The day of the month on which the scheduled audit takes place. Can be 1 through 31 or LAST. This field is required if the frequency parameter is set to MONTHLY.",
                "type": "string",
                "pattern": "^([1-9]|[12][0-9]|3[01])$|^LAST$|^UNSET_VALUE$"
            },
            "DayOfWeek": {
                "description": "The day of the week on which the scheduled audit takes place. Can be one of SUN, MON, TUE,WED, THU, FRI, or SAT. This field is required if the frequency parameter is set to WEEKLY or BIWEEKLY.",
                "type": "string",
                "enum": [
                    "SUN",
                    "MON",
                    "TUE",
                    "WED",
                    "THU",
                    "FRI",
                    "SAT",
                    "UNSET_VALUE"
                ]
            },
            "TargetCheckNames": {
                "description": "Which checks are performed during the scheduled audit. Checks must be enabled for your account.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "type": "string"
                }
            },
            "ScheduledAuditArn": {
                "description": "The ARN (Amazon resource name) of the scheduled audit.",
                "type": "string",
                "minLength": 20,
                "maxLength": 2048
            },
            "Tags": {
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "description": "An array of key-value pairs to apply to this resource.",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::IoT::SecurityProfile": {
        "properties": {
            "SecurityProfileName": {
                "description": "A unique identifier for the security profile.",
                "type": "string",
                "pattern": "[a-zA-Z0-9:_-]+",
                "minLength": 1,
                "maxLength": 128
            },
            "SecurityProfileDescription": {
                "description": "A description of the security profile.",
                "type": "string",
                "maxLength": 1000
            },
            "Behaviors": {
                "description": "Specifies the behaviors that, when violated by a device (thing), cause an alert.",
                "type": "array",
                "maxLength": 100,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Behavior"
                }
            },
            "AlertTargets": {
                "description": "Specifies the destinations to which alerts are sent.",
                "type": "object",
                "patternProperties": {
                    "[a-zA-Z0-9:_-]+": {
                        "$ref": "#/definitions/AlertTarget"
                    }
                },
                "additionalProperties": false
            },
            "AdditionalMetricsToRetainV2": {
                "description": "A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/MetricToRetain"
                }
            },
            "Tags": {
                "description": "Metadata that can be used to manage the security profile.",
                "type": "array",
                "maxItems": 50,
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "TargetArns": {
                "description": "A set of target ARNs that the security profile is attached to.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "description": "The ARN of the target to which the security profile is attached.",
                    "type": "string",
                    "maxLength": 2048
                }
            },
            "SecurityProfileArn": {
                "description": "The ARN (Amazon resource name) of the created security profile.",
                "type": "string"
            }
        }
    },
    "AWS::IoTEvents::Input": {
        "properties": {
            "InputDefinition": {
                "$ref": "#/definitions/InputDefinition"
            },
            "InputDescription": {
                "description": "A brief description of the input.",
                "minLength": 1,
                "maxLength": 128,
                "type": "string"
            },
            "InputName": {
                "description": "The name of the input.",
                "minLength": 1,
                "maxLength": 128,
                "pattern": "^[a-zA-Z][a-zA-Z0-9_]*$",
                "type": "string"
            },
            "Tags": {
                "type": "array",
                "uniqueItems": false,
                "insertionOrder": false,
                "description": "An array of key-value pairs to apply to this resource.\n\nFor more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::KinesisFirehose::DeliveryStream": {
        "properties": {
            "Arn": {
                "type": "string"
            },
            "DeliveryStreamEncryptionConfigurationInput": {
                "$ref": "#/definitions/DeliveryStreamEncryptionConfigurationInput"
            },
            "DeliveryStreamName": {
                "type": "string",
                "minLength": 1,
                "maxLength": 64,
                "pattern": "[a-zA-Z0-9._-]+"
            },
            "DeliveryStreamType": {
                "type": "string",
                "enum": [
                    "DirectPut",
                    "KinesisStreamAsSource"
                ]
            },
            "ElasticsearchDestinationConfiguration": {
                "$ref": "#/definitions/ElasticsearchDestinationConfiguration"
            },
            "AmazonopensearchserviceDestinationConfiguration": {
                "$ref": "#/definitions/AmazonopensearchserviceDestinationConfiguration"
            },
            "AmazonOpenSearchServerlessDestinationConfiguration": {
                "$ref": "#/definitions/AmazonOpenSearchServerlessDestinationConfiguration"
            },
            "ExtendedS3DestinationConfiguration": {
                "$ref": "#/definitions/ExtendedS3DestinationConfiguration"
            },
            "KinesisStreamSourceConfiguration": {
                "$ref": "#/definitions/KinesisStreamSourceConfiguration"
            },
            "RedshiftDestinationConfiguration": {
                "$ref": "#/definitions/RedshiftDestinationConfiguration"
            },
            "S3DestinationConfiguration": {
                "$ref": "#/definitions/S3DestinationConfiguration"
            },
            "SplunkDestinationConfiguration": {
                "$ref": "#/definitions/SplunkDestinationConfiguration"
            },
            "HttpEndpointDestinationConfiguration": {
                "$ref": "#/definitions/HttpEndpointDestinationConfiguration"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 1,
                "maxItems": 50
            }
        }
    },
    "AWS::KMS::Alias": {
        "properties": {
            "AliasName": {
                "description": "Specifies the alias name. This value must begin with alias/ followed by a name, such as alias/ExampleAlias. The alias name cannot begin with alias/aws/. The alias/aws/ prefix is reserved for AWS managed keys.",
                "type": "string",
                "pattern": "^(alias/)[a-zA-Z0-9:/_-]+$",
                "minLength": 1,
                "maxLength": 256
            },
            "TargetKeyId": {
                "description": "Identifies the AWS KMS key to which the alias refers. Specify the key ID or the Amazon Resource Name (ARN) of the AWS KMS key. You cannot specify another alias. For help finding the key ID and ARN, see Finding the Key ID and ARN in the AWS Key Management Service Developer Guide.",
                "type": "string",
                "minLength": 1,
                "maxLength": 256
            }
        }
    },
    "AWS::IoT::Authorizer": {
        "properties": {
            "AuthorizerFunctionArn": {
                "type": "string"
            },
            "Arn": {
                "type": "string"
            },
            "AuthorizerName": {
                "type": "string",
                "pattern": "[\\w=,@-]+",
                "minLength": 1,
                "maxLength": 128
            },
            "SigningDisabled": {
                "type": "boolean"
            },
            "Status": {
                "type": "string",
                "enum": [
                    "ACTIVE",
                    "INACTIVE"
                ]
            },
            "TokenKeyName": {
                "type": "string"
            },
            "TokenSigningPublicKeys": {
                "type": "object",
                "additionalProperties": false,
                "patternProperties": {
                    "[a-zA-Z0-9:_-]+": {
                        "type": "string",
                        "maxLength": 5120
                    }
                }
            },
            "EnableCachingForHttp": {
                "type": "boolean"
            },
            "Tags": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Lightsail::Distribution": {
        "properties": {
            "DistributionName": {
                "description": "The name for the distribution.",
                "type": "string",
                "pattern": "\\w[\\w\\-]*\\w"
            },
            "DistributionArn": {
                "type": "string"
            },
            "BundleId": {
                "description": "The bundle ID to use for the distribution.",
                "type": "string"
            },
            "IpAddressType": {
                "description": "The IP address type for the distribution.",
                "type": "string"
            },
            "CacheBehaviors": {
                "description": "An array of objects that describe the per-path cache behavior for the distribution.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/CacheBehaviorPerPath"
                }
            },
            "CacheBehaviorSettings": {
                "description": "An object that describes the cache behavior settings for the distribution.",
                "$ref": "#/definitions/CacheSettings"
            },
            "DefaultCacheBehavior": {
                "description": "An object that describes the default cache behavior for the distribution.",
                "$ref": "#/definitions/CacheBehavior"
            },
            "Origin": {
                "description": "An object that describes the origin resource for the distribution, such as a Lightsail instance or load balancer.",
                "$ref": "#/definitions/InputOrigin"
            },
            "Status": {
                "description": "The status of the distribution.",
                "type": "string"
            },
            "AbleToUpdateBundle": {
                "description": "Indicates whether the bundle that is currently applied to your distribution, specified using the distributionName parameter, can be changed to another bundle.",
                "type": "boolean"
            },
            "IsEnabled": {
                "description": "Indicates whether the distribution is enabled.",
                "type": "boolean"
            },
            "CertificateName": {
                "description": "The certificate attached to the Distribution.",
                "type": "string"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::Lightsail::Instance": {
        "properties": {
            "SupportCode": {
                "description": "Support code to help identify any issues",
                "type": "string"
            },
            "ResourceType": {
                "description": "Resource type of Lightsail instance.",
                "type": "string"
            },
            "IsStaticIp": {
                "description": "Is the IP Address of the Instance is the static IP",
                "type": "boolean"
            },
            "PrivateIpAddress": {
                "description": "Private IP Address of the Instance",
                "type": "string"
            },
            "PublicIpAddress": {
                "description": "Public IP Address of the Instance",
                "type": "string"
            },
            "Location": {
                "$ref": "#/definitions/Location"
            },
            "Hardware": {
                "$ref": "#/definitions/Hardware"
            },
            "State": {
                "$ref": "#/definitions/State"
            },
            "Networking": {
                "$ref": "#/definitions/Networking"
            },
            "UserName": {
                "description": "Username of the  Lightsail instance.",
                "type": "string"
            },
            "SshKeyName": {
                "description": "SSH Key Name of the  Lightsail instance.",
                "type": "string"
            },
            "InstanceName": {
                "description": "The names to use for your new Lightsail instance.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9][\\w\\-.]*[a-zA-Z0-9]$",
                "minLength": 1,
                "maxLength": 254
            },
            "AvailabilityZone": {
                "description": "The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "BundleId": {
                "description": "The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ).",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "BlueprintId": {
                "description": "The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ).",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "AddOns": {
                "description": "An array of objects representing the add-ons to enable for the new instance.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/AddOn"
                }
            },
            "UserData": {
                "description": "A launch script you can create that configures a server with additional user data. For example, you might want to run apt-get -y update.",
                "type": "string"
            },
            "KeyPairName": {
                "description": "The name of your key pair.",
                "type": "string"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "InstanceArn": {
                "type": "string"
            }
        }
    },
    "AWS::Lightsail::Database": {
        "properties": {
            "RelationalDatabaseName": {
                "description": "The name to use for your new Lightsail database resource.",
                "type": "string",
                "pattern": "\\w[\\w\\-]*\\w",
                "minLength": 2,
                "maxLength": 255
            },
            "DatabaseArn": {
                "type": "string"
            },
            "AvailabilityZone": {
                "description": "The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "RelationalDatabaseBlueprintId": {
                "description": "The blueprint ID for your new database. A blueprint describes the major engine version of a database.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "RelationalDatabaseBundleId": {
                "description": "The bundle ID for your new database. A bundle describes the performance specifications for your database.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "MasterDatabaseName": {
                "description": "The name of the database to create when the Lightsail database resource is created. For MySQL, if this parameter isn't specified, no database is created in the database resource. For PostgreSQL, if this parameter isn't specified, a database named postgres is created in the database resource.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "MasterUsername": {
                "description": "The name for the master user.",
                "type": "string",
                "minLength": 1,
                "maxLength": 63
            },
            "MasterUserPassword": {
                "description": "The password for the master user. The password can include any printable ASCII character except \"/\", \"\"\", or \"@\". It cannot contain spaces.",
                "type": "string",
                "minLength": 1,
                "maxLength": 63
            },
            "PreferredBackupWindow": {
                "description": "The daily time range during which automated backups are created for your new database if automated backups are enabled.",
                "type": "string"
            },
            "PreferredMaintenanceWindow": {
                "description": "The weekly time range during which system maintenance can occur on your new database.",
                "type": "string"
            },
            "PubliclyAccessible": {
                "description": "Specifies the accessibility options for your new database. A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.",
                "type": "boolean"
            },
            "CaCertificateIdentifier": {
                "description": "Indicates the certificate that needs to be associated with the database.",
                "type": "string"
            },
            "BackupRetention": {
                "description": "When true, enables automated backup retention for your database. Updates are applied during the next maintenance window because this can result in an outage.",
                "type": "boolean"
            },
            "RotateMasterUserPassword": {
                "description": "When true, the master user password is changed to a new strong password generated by Lightsail. Use the get relational database master user password operation to get the new password.",
                "type": "boolean"
            },
            "RelationalDatabaseParameters": {
                "description": "Update one or more parameters of the relational database.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/RelationalDatabaseParameter"
                }
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::LookoutMetrics::Alert": {
        "properties": {
            "AlertName": {
                "description": "The name of the alert. If not provided, a name is generated automatically.",
                "type": "string",
                "minLength": 1,
                "maxLength": 63,
                "pattern": "^[a-zA-Z0-9][a-zA-Z0-9\\-_]*"
            },
            "Arn": {
                "description": "ARN assigned to the alert.",
                "$ref": "#/definitions/Arn"
            },
            "AlertDescription": {
                "description": "A description for the alert.",
                "type": "string",
                "maxLength": 256,
                "pattern": ".*\\S.*"
            },
            "AnomalyDetectorArn": {
                "description": "The Amazon resource name (ARN) of the Anomaly Detector to alert.",
                "type": "string",
                "maxLength": 256,
                "pattern": "arn:([a-z\\d-]+):.*:.*:.*:.+"
            },
            "AlertSensitivityThreshold": {
                "description": "A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert.",
                "type": "integer",
                "minimum": 0,
                "maximum": 100
            },
            "Action": {
                "description": "The action to be taken by the alert when an anomaly is detected.",
                "$ref": "#/definitions/Action"
            }
        }
    },
    "AWS::Lightsail::Disk": {
        "properties": {
            "DiskName": {
                "description": "The names to use for your new Lightsail disk.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9][\\w\\-.]*[a-zA-Z0-9]$",
                "minLength": 1,
                "maxLength": 254
            },
            "DiskArn": {
                "type": "string"
            },
            "SupportCode": {
                "description": "Support code to help identify any issues",
                "type": "string"
            },
            "AvailabilityZone": {
                "description": "The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.",
                "type": "string",
                "minLength": 1,
                "maxLength": 255
            },
            "Location": {
                "$ref": "#/definitions/Location"
            },
            "ResourceType": {
                "description": "Resource type of Lightsail instance.",
                "type": "string"
            },
            "Tags": {
                "description": "An array of key-value pairs to apply to this resource.",
                "type": "array",
                "uniqueItems": true,
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            },
            "AddOns": {
                "description": "An array of objects representing the add-ons to enable for the new instance.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/AddOn"
                }
            },
            "State": {
                "description": "State of the Lightsail disk",
                "type": "string"
            },
            "AttachmentState": {
                "description": "Attachment State of the Lightsail disk",
                "type": "string"
            },
            "SizeInGb": {
                "description": "Size of the Lightsail disk",
                "type": "integer"
            },
            "Iops": {
                "description": "Iops of the Lightsail disk",
                "type": "integer"
            },
            "IsAttached": {
                "description": "Check is Disk is attached state",
                "type": "boolean"
            },
            "Path": {
                "description": "Path of the  attached Disk",
                "type": "string"
            },
            "AttachedTo": {
                "description": "Name of the attached Lightsail Instance",
                "type": "string"
            }
        }
    },
    "AWS::ResourceExplorer2::DefaultViewAssociation": {
        "properties": {
            "ViewArn": {
                "type": "string"
            },
            "AssociatedAwsPrincipal": {
                "description": "The AWS principal that the default view is associated with, used as the unique identifier for this resource.",
                "type": "string",
                "pattern": "^[0-9]{12}$"
            }
        }
    },
    "AWS::ResourceExplorer2::View": {
        "properties": {
            "IncludedProperties": {
                "type": "array",
                "items": {
                    "$ref": "#/definitions/IncludedProperty"
                },
                "insertionOrder": false
            },
            "Filters": {
                "$ref": "#/definitions/Filters"
            },
            "Tags": {
                "$ref": "#/definitions/TagMap"
            },
            "ViewArn": {
                "type": "string"
            },
            "ViewName": {
                "type": "string",
                "pattern": "^[a-zA-Z0-9\\-]{1,64}$"
            }
        }
    },
    "AWS::Route53RecoveryReadiness::Cell": {
        "properties": {
            "CellName": {
                "description": "The name of the cell to create.",
                "type": "string",
                "pattern": "[a-zA-Z0-9_]+",
                "maxLength": 64
            },
            "CellArn": {
                "description": "The Amazon Resource Name (ARN) of the cell.",
                "type": "string",
                "maxLength": 256
            },
            "Cells": {
                "description": "A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells. For example, Availability Zones within specific Regions.",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "maxItems": 5,
                "insertionOrder": false
            },
            "ParentReadinessScopes": {
                "description": "The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "maxItems": 5,
                "insertionOrder": false
            },
            "Tags": {
                "description": "A collection of tags associated with a resource",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag",
                    "maxItems": 20
                },
                "insertionOrder": false
            }
        }
    },
    "AWS::S3::MultiRegionAccessPointPolicy": {
        "properties": {
            "MrapName": {
                "description": "The name of the Multi Region Access Point to apply policy",
                "type": "string",
                "pattern": "^[a-z0-9][-a-z0-9]{1,48}[a-z0-9]$",
                "minLength": 3,
                "maxLength": 50
            },
            "Policy": {
                "description": "Policy document to apply to a Multi Region Access Point",
                "type": "object"
            },
            "PolicyStatus": {
                "description": "The Policy Status associated with this Multi Region Access Point",
                "type": "object",
                "properties": {
                    "IsPublic": {
                        "type": "string",
                        "description": "Specifies whether the policy is public or not.",
                        "enum": [
                            "true",
                            "false"
                        ]
                    }
                },
                "additionalProperties": false,
                "required": [
                    "IsPublic"
                ]
            }
        }
    },
    "AWS::S3ObjectLambda::AccessPointPolicy": {
        "properties": {
            "ObjectLambdaAccessPoint": {
                "description": "The name of the Amazon S3 ObjectLambdaAccessPoint to which the policy applies.",
                "type": "string",
                "pattern": "^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$",
                "minLength": 3,
                "maxLength": 45
            },
            "PolicyDocument": {
                "description": "A policy document containing permissions to add to the specified ObjectLambdaAccessPoint. For more information, see Access Policy Language Overview (https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the Amazon Simple Storage Service Developer Guide. ",
                "type": "object"
            }
        }
    },
    "AWS::SageMaker::AppImageConfig": {
        "properties": {
            "AppImageConfigArn": {
                "type": "string",
                "description": "The Amazon Resource Name (ARN) of the AppImageConfig.",
                "minLength": 1,
                "maxLength": 256,
                "pattern": "arn:aws[a-z\\-]*:sagemaker:[a-z0-9\\-]*:[0-9]{12}:app-image-config/.*"
            },
            "AppImageConfigName": {
                "type": "string",
                "description": "The Name of the AppImageConfig.",
                "minLength": 1,
                "maxLength": 63,
                "pattern": "^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}"
            },
            "KernelGatewayImageConfig": {
                "$ref": "#/definitions/KernelGatewayImageConfig",
                "description": "The KernelGatewayImageConfig."
            },
            "Tags": {
                "type": "array",
                "description": "A list of tags to apply to the AppImageConfig.",
                "uniqueItems": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 0,
                "maxItems": 50
            }
        }
    },
    "AWS::SageMaker::UserProfile": {
        "properties": {
            "UserProfileArn": {
                "type": "string",
                "description": "The user profile Amazon Resource Name (ARN).",
                "maxLength": 256,
                "pattern": "arn:aws[a-z\\-]*:sagemaker:[a-z0-9\\-]*:[0-9]{12}:user-profile/.*"
            },
            "DomainId": {
                "type": "string",
                "description": "The ID of the associated Domain.",
                "minLength": 1,
                "maxLength": 63
            },
            "SingleSignOnUserIdentifier": {
                "type": "string",
                "description": "A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is \"UserName\". If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.",
                "pattern": "UserName"
            },
            "SingleSignOnUserValue": {
                "type": "string",
                "description": "The username of the associated AWS Single Sign-On User for this UserProfile. If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.",
                "minLength": 1,
                "maxLength": 256
            },
            "UserProfileName": {
                "type": "string",
                "description": "A name for the UserProfile.",
                "minLength": 1,
                "maxLength": 63
            },
            "UserSettings": {
                "$ref": "#/definitions/UserSettings",
                "description": "A collection of settings.",
                "uniqueItems": false,
                "minItems": 0,
                "maxItems": 50
            },
            "Tags": {
                "type": "array",
                "description": "A list of tags to apply to the user profile.",
                "uniqueItems": false,
                "minItems": 0,
                "maxItems": 50,
                "items": {
                    "$ref": "#/definitions/Tag"
                }
            }
        }
    },
    "AWS::SES::ContactList": {
        "properties": {
            "ContactListName": {
                "description": "The name of the contact list.",
                "type": "string",
                "pattern": "^[a-zA-Z0-9_-]{1,64}$"
            },
            "Description": {
                "description": "The description of the contact list.",
                "type": "string",
                "maxLength": 500
            },
            "Topics": {
                "description": "The topics associated with the contact list.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Topic"
                },
                "minItems": 0,
                "maxItems": 20
            },
            "Tags": {
                "description": "The tags (keys and values) associated with the contact list.",
                "type": "array",
                "insertionOrder": false,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "minItems": 0,
                "maxItems": 50
            }
        }
    },
    "AWS::SupportApp::AccountAlias": {
        "properties": {
            "AccountAlias": {
                "description": "An account alias associated with a customer's account.",
                "type": "string",
                "pattern": "^[\\w\\- ]+$",
                "minLength": 1,
                "maxLength": 30
            },
            "AccountAliasResourceId": {
                "description": "Unique identifier representing an alias tied to an account",
                "type": "string",
                "pattern": "^[\\w\\- ]+$",
                "minLength": 29,
                "maxLength": 29
            }
        }
    },
    "AWS::Route53RecoveryReadiness::RecoveryGroup": {
        "properties": {
            "RecoveryGroupName": {
                "description": "The name of the recovery group to create.",
                "type": "string",
                "pattern": "[a-zA-Z0-9_]+",
                "minLength": 1,
                "maxLength": 64
            },
            "Cells": {
                "description": "A list of the cell Amazon Resource Names (ARNs) in the recovery group.",
                "type": "array",
                "items": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 256
                },
                "maxItems": 5,
                "insertionOrder": false
            },
            "RecoveryGroupArn": {
                "description": "A collection of tags associated with a resource.",
                "type": "string",
                "maxLength": 256
            },
            "Tags": {
                "description": "A collection of tags associated with a resource.",
                "type": "array",
                "items": {
                    "$ref": "#/definitions/Tag",
                    "maxItems": 20
                },
                "insertionOrder": false
            }
        }
    },
    "AWS::Wisdom::KnowledgeBase": {
        "properties": {
            "Description": {
                "type": "string",
                "maxLength": 255,
                "minLength": 1
            },
            "KnowledgeBaseArn": {
                "type": "string",
                "pattern": "^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$"
            },
            "KnowledgeBaseId": {
                "type": "string",
                "pattern": "^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$"
            },
            "KnowledgeBaseType": {
                "$ref": "#/definitions/KnowledgeBaseType"
            },
            "Name": {
                "type": "string",
                "maxLength": 255,
                "minLength": 1
            },
            "RenderingConfiguration": {
                "$ref": "#/definitions/RenderingConfiguration"
            },
            "ServerSideEncryptionConfiguration": {
                "$ref": "#/definitions/ServerSideEncryptionConfiguration"
            },
            "SourceConfiguration": {
                "$ref": "#/definitions/SourceConfiguration"
            },
            "Tags": {
                "insertionOrder": false,
                "uniqueItems": true,
                "items": {
                    "$ref": "#/definitions/Tag"
                },
                "type": "array"
            }
        }
    },
    "AWS::IAM::User": {
        "properties": {
            "UserName": {
                "m_pattern": "^[a-zA-Z0-9+=,\\.@_-]{1,64}",
                "m_alt_english": "User names can be a combination of up to 64 letters, digits, and these characters: plus (+), equal (=), comma (,), period (.), at sign (@), underscore (_), and hyphen (-). Names must be unique within an account. They are not distinguished by case. For example, you cannot create two users named TESTUSER and testuser."
            }
        }
    },
    "AWS::ECS::Cluster": {
        "properties": {
            "ClusterName": {
                "m_pattern": "^[a-zA-Z0-9_-]{1,255}$",
                "m_alt_english": "There can be a maximum of 255 characters. The valid characters are letters (uppercase and lowercase), numbers, hyphens, and underscores."
            }
        }
    },
    "AWS::ElasticBeanstalk::Application": {
        "properties": {
            "ApplicationName": {
                "m_pattern": "^[^\\/]{1,100}$",
                "m_alt_english": "Up to 100 Unicode characters, not including forward slash (/)"
            }
        }
    },
    "AWS::Batch::JobDefinition": {
        "properties": {
            "JobDefinitionName": {
                "m_pattern": "^[a-zA-Z0-9_-]{1,128}$",
                "m_alt_english": "Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed"
            }
        }
    },
    "AWS::Batch::JobQueue": {
        "properties": {
            "JobQueueName": {
                "m_pattern": "^[a-zA-Z0-9_-]{1,128}$",
                "m_alt_english": "Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed"
            }
        }
    },
    "AWS::Batch::ComputeEnvironment": {
        "properties": {
            "ComputeEnvironmentName": {
                "m_pattern": "^[a-zA-Z0-9_-]{1,128}$",
                "m_alt_english": "Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed"
            }
        }
    },
    "AWS::StepFunctions::StateMachine": {
        "properties": {
            "StateMachineName": {
                "m_pattern": "^[a-zA-Z0-9_-]{1,80}$",
                "m_alt_english": "Must be 1-80 characters. Can use alphanumeric characters, dashes, or underscores."
            }
        }
    },
    "AWS::IAM::Policy": {
        "properties": {
            "PolicyName": {
                "m_pattern": "^[a-zA-Z0-9+=,\\.@_-]{1,64}",
                "m_alt_english": "Use alphanumeric and '+=,.@-_' characters. Maximum 128 characters."
            }
        }
    },
    "AWS::SageMaker::NotebookInstance": {
        "properties": {
            "NotebookInstanceName": {
                "m_pattern": "^[a-zA-Z0-9](-*[a-zA-Z0-9])*"
            }
        }
    }
}