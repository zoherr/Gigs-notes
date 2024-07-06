import config from "../config/config";
import { Client, Databases, Storage, Query, ID } from "appwrite";
import {Users} from "node-appwrite"
export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
            // .setKey(config.appwriteAdminKey);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
        this.users = new Users(this.client);

    }

    async createPost({ title, slug, semester, status, PDF, UserId, subject ,Name,type}) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    semester,
                    subject,
                    PDF,
                    status,
                    UserId,
                    type,
                    Name
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, { title,PDF,UserId,Name, semester, status, subject,type }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    Name,
                    semester,
                    subject,
                    PDF,
                    status,
                    UserId,
                    type

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug

            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug

            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(subject, type, queries = [Query.equal("status", "active")]) {
        try {
            // Add filters for subject and type
            if (subject) {
                queries.push(Query.equal("subject", subject));
            }
            if (type) {
                queries.push(Query.equal("type", type));
            }
            
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }
    async getUserPosts( user, queries = [Query.equal("UserId", user)]) {
        try {           
            
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }
    

    // file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketPdfId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketPdfId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFileDownload(fileId) {
        return this.bucket.getFileDownload(
            config.appwriteBucketPdfId,
            fileId
        )
    }
    getPDFUrl (fileId) {
        return this.bucket.getFileView(
            config.appwriteBucketPdfId,
            fileId
        )
    }

    // Admin Features
   
}


const service = new Service()
export default service