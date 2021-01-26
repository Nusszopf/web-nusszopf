import aws from 'aws-sdk'

const s3 = new aws.S3({
  endpoint: process.env.SPACES_ENDPOINT,
  accessKeyId: process.env.SPACES_ACCESS_KEY,
  secretAccessKey: process.env.SPACES_SECRET_KEY,
  signatureVersion: 'v4',
})

export default s3
