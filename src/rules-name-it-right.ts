import { NameItRightDatabase } from "./types";

export const rulesNameItRight = {
  "AWS::S3::Bucket": {
    "properties": {
      "BucketName": {
        "validation": {
          "errors": [
            {
              id: "LENGTH_RULE",
              regex: "^.{3,63}$",
              errorMessage: "Bucket names must be between 3 (min) and 63 (max) characters long."
            },
            {
              id: "CONTENTS_RULE",
              regex: "^[a-z0-9\\.\\-]*$",
              errorMessage: "Bucket names can consist only of lowercase letters, numbers, dots (.), and hyphens (-)."
            },
            {
              id: "BEGINNING_RULE",
              regex: "^[a-z0-9]",
              errorMessage: "Bucket names must begin with a lowercase letter or number."
            },
            {
              id: "ENDING_RULE",
              regex: "[a-z0-9]$",
              errorMessage: "Bucket names must end with a letter or number."
            },
            {
              id: "NO_TWO_ADJACENT_PERIODS_RULE",
              regex: "^(?!.*\\.\\.).*$",
              errorMessage: "Bucket names must not contain two adjacent periods."
            },
            {
              id: "NO_IP_ADDRESS_RULE",
              regex: "^(?!(\\d{1,3}\\.){3}\\d{1,3}$)",
              errorMessage: "Bucket names must not be formatted as an IP address (for example, 192.168.5.4)."
            },
            {
              id: "NO_XN_BEGINNING_RULE",
              regex: "^(?!xn--)",
              errorMessage: "Bucket names must not start with the prefix xn--."
            },
            {
              id: "NO_S3_ALIAS_ENDING_RULE",
              regex: "(?!-s3alias$)",
              errorMessage: "Bucket names must not end with the suffix -s3alias."
            }
          ],
          "warnings": [
            {
              id: "S3_TRANSFER_ACCELERATION_RULE",
              regex: "^(?!.*\\.)",
              errorMessage: "Buckets used with Amazon S3 Transfer Acceleration can't have dots (.) in their names."
            }
          ],

        },
      },
    }
  }
} as NameItRightDatabase;