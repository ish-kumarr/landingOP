
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
    }

    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    const db = client.db(process.env.MONGODB_DB_NAME);

    await db.collection('newsletters').insertOne({ email, createdAt: new Date() });

    await client.close();

    return NextResponse.json({ message: 'Subscribed successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return NextResponse.json({ message: 'Failed to subscribe.' }, { status: 500 });
  }
}
