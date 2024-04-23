import {connectMongoDB} from '../../../../../dataBase/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import workDAO from '../../../../../dataBase/DAO/works.dao';
import { revalidatePath } from 'next/cache';

export async function GET(req: Request, { params }: { params: { id: string } }) { 
    try {
        await connectMongoDB();
        const work = await workDAO.getById(params.id);
        return NextResponse.json(work);
    } catch (error) {
        console.error(error);
    }
}

//PUT
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectMongoDB();
        const body = await req.json();
        const work = await workDAO.update(params.id, body);
        revalidatePath('/works');
        revalidatePath('/en/works/');
        return NextResponse.json(work);
    } catch (error) {
        console.error(error);
    }
}

//DELETE
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectMongoDB();
        const work = await workDAO.delete(params.id);
        revalidatePath('/works');
        revalidatePath('/en/works/');
        return NextResponse.json(work);
    } catch (error) {
        console.error(error);
    }
}