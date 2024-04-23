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
        await connectMongoDB();
        const body = await req.json();
        const work = await workDAO.create(body);
        revalidatePath('/works');
        revalidatePath('/en/works/');
        return NextResponse.json(work);
    } catch (error) {
        console.error(error);
    }
}

