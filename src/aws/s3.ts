import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});

const bucket = import.meta.env.VITE_AWS_BUCKET_NAME;

export const uploadToS3 = async (key: string, body: string) => {
  console.log('📦 Uploading to AWS S3...');
  console.log('Bucket:', bucket);
  console.log('Key:', key);

  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: body,
    ContentType: 'application/json',
  });

  try {
    const response = await s3.send(command);
    console.log('✅ Upload successful:', response);
    return response;
  } catch (err) {
    console.error('❌ Upload failed:', err);
    throw err;
  }
};
