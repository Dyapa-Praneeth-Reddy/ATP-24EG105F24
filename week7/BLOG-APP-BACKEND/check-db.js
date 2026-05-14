import { connect, disconnect } from 'mongoose';
import { userModel } from './models/userModel.js';
import { config } from 'dotenv';
import bcrypt from 'bcryptjs';

config();

const runTest = async () => {
    try {
        const dbUrl = process.env.DB_URL;
        if (!dbUrl) {
            console.error("DB_URL is missing in .env");
            process.exit(1);
        }

        console.log(`Connecting to MongoDB at: ${dbUrl}`);
        await connect(dbUrl);
        console.log("✅ Successfully connected to MongoDB");

        // Create a unique dummy user
        const uniqueNumber = Math.floor(Math.random() * 100000);
        const dummyUser = {
            firstName: "Test",
            lastName: "User",
            email: `testuser${uniqueNumber}@example.com`,
            password: await bcrypt.hash("password123", 10),
            role: "USER"
        };

        console.log("Attempting to insert dummy user into database...");
        
        const createdUser = await userModel.create(dummyUser);
        console.log("✅ Successfully inserted user! DB Details:");
        console.log(createdUser);

        // Optional: Count documents
        const totalUsers = await userModel.countDocuments();
        console.log(`📊 Total users currently in DB: ${totalUsers}`);

    } catch (err) {
        console.error("❌ Error running test:", err.message);
    } finally {
        console.log("Disconnecting from MongoDB...");
        await disconnect();
    }
};

runTest();
