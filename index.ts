// pulumi 설정 파일

import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

const instanceId = "i-025fdade0849da781";
const existingInstance = aws.ec2.Instance.get("existingInstance", instanceId);

// 테스트 스크립트
const testScript = `
  #!/bin/bash
  echo "Hello, World!"  
`;


