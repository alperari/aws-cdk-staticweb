import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkStaticwebStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create bucket named 'static-website-bucket'
    // Make it publicly readable so that when website is hosted, users can open it on their browsers
    // Specify index and error files (Specifying explicitly will enable hosting)
    const bucket = new s3.Bucket(this, "static-website-bucket", {
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "error.html",
    });

    // Upload static content into the bucket
    const deployment = new s3deploy.BucketDeployment(
      this,
      "DeployStaticWebsite",
      {
        sources: [s3deploy.Source.asset("../src/staticweb")],
        destinationBucket: bucket,
      }
    );
  }
}
