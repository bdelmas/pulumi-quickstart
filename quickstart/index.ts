import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

// Create a GCP resource (Storage Bucket)
const bucket = new gcp.storage.Bucket("my-bucket", {
    location: "US"
});

// Export the DNS name of the bucket
export const bucketName = bucket.url;

const bucketObject = new gcp.storage.BucketObject("../index.html", {
    bucket: bucket.name,
    source: new pulumi.asset.FileAsset("../index.html")
});
