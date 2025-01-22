#!/bin/bash

# Build the project
npm run build

# Deploy to S3
aws s3 sync build/ s3://your-frontend-bucket-name --acl public-read

echo "Frontend successfully deployed to S3!"
