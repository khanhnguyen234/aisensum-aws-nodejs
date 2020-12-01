> ### AWS API Gateway + Lambda codebase containing provide APIs for [Aisensum Angular](https://github.com/khanhnguyen234/aisensum-angular).

# Getting started

## Prerequisite

* Install Node.js, AWS CLI
* In `aisensum-aws-nodejs`, run `npm install`
* Run `cp .env.example .env`, edit `.env`

## Build and deploy

In the root directory of this project:

* `npm run deploy-layer`
* `npm run deploy`

# How it works

## Overview
This repo uses [AWS CloudFormation Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-guide.html) to describe and deploy the [REST API](https://github.com/khanhnguyen234/aisensum-aws-nodejs/blob/main/docs/README.md) to [AWS Lambda](https://aws.amazon.com/lambda/). AWS Lambda provides "serverless" cloud functions as a service. [AWS API Gateway](https://aws.amazon.com/api-gateway/) is used to expose the deployed Lambda functions as a HTTP REST API.

![Architecture Diagram](https://images.ctfassets.net/hqu2g0tau160/1m3ulLQe92MYWAckG8SesS/894f73e24901240fa51b6de75ccaf220/Screen_Shot_2018-11-19_at_17.05.21.png)

## API
The API is described in the [`.yaml/cloudformation.yaml`](.yaml/cloudformation.yaml) file. For example the following snippet instructs AWS Lambda to execute the `create` method in [`src/apis/segment/segment.route.ts`](src/apis/segment/segment.route.ts) whenever a `GET` method is called on `/v1/segment-chart`:
```
  FunctionSegmentChart:
    Type: 'AWS::Serverless::Function'
    Properties:
      Handler: build/index.FunctionSegmentChart
      CodeUri: ../
      Layers:
        - !Ref DependenciesLayer
      Runtime: nodejs12.x
      Timeout: 180
      Events:
        FunctionSegmentChart:
          Type: Api
          Properties:
            Path: /v1/segment-chart
            Method: GET
```

