import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_CONNECTIONSTRING
        );

        console.log('ket noi thanh cong')
    } catch(e) {
        console.error("loi ket noi",e)
        process.exit(1);
    }
}