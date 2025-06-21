import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const REGION = "ap-south-1"; // change if your bucket is in a different region
const BUCKET_NAME = "your-s3-bucket-name"; // change to your actual bucket name

const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID!,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY!,
  },
});

export const uploadFlashcard = async (flashcard: any) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: `flashcards/${flashcard.id}.json`,
    Body: JSON.stringify(flashcard),
    ContentType: "application/json",
  };

  try {
    const command = new PutObjectCommand(params);
    await s3.send(command);
    console.log("✅ Flashcard uploaded to S3");
  } catch (err) {
    console.error("❌ Error uploading to S3:", err);
  }
};
