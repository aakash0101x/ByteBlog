import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

    async updatePassword(currentPassword, newPassword) {

        try {
            await this.account.updatePassword(newPassword, currentPassword);
            console.log('Password updated successfully');
            return true;
        }
        catch (error) {
            console.error('Failed to update password', error);
            return false;
        }

    }
    async updateEmail(currentPassword, newEmail) {
        try {
            await this.account.updateEmail(newEmail, currentPassword);
            console.log('Email updated successfully');
            return true;

        }
        catch (error) {
            console.error('Failed to update email', error);
            return false;

        }
    }
    async updateName(newName) {
        try {
            await this.account.updateName(newName);
            console.log('Name updated successfully');
            return true;
        } catch (error) {
            console.error('Failed to update name', error);
            return false;
        }
    }
}

const authService = new AuthService();
export default authService