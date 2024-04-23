import {connectMongoDB} from '../../../dataBase/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import workDAO from '../../../dataBase/DAO/works.dao';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
    try {
        await connectMongoDB();
        const works = await workDAO.getAll();
        return NextResponse.json(works);
    } catch (error) {
        console.error(error);
    }
}

export async function POST(req: NextRequest) {

    try {
        const body = await req.json();
        const token = body.token

        if (!token) {
            return NextResponse.json({ message: 'Invalid token' });
        } 

        if (token == process.env.NEXT_PUBLIC_SECRET_TOKEN) {            
            await connectMongoDB();      
            const data = {...body, token: undefined}
            const work = await workDAO.create(data);
            revalidatePath('/works');
            revalidatePath('/en/works/');
            return NextResponse.json(work);
        } else {
            return NextResponse.json({ message: 'Invalid token' });
        }
    } catch (error) {
        console.error(error);
    }
}

