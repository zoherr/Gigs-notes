const config = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID ),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketPdfId : String(import.meta.env.VITE_APPWRITE_BUCKET_PDF_ID),
    appwriteBucketImgId: String(import.meta.env.VITE_APPWRITE_BUCKET_IMG_ID),
    
}
export default config;