import aws from 'aws-sdk'

const spacesEndpoint = new aws.Endpoint(process.env.SPACES_ENDPOINT)

const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.SPACES_ACCESS_KEY,
  secretAccessKey: process.env.SPACES_SECRET_KEY,
})

export default s3
