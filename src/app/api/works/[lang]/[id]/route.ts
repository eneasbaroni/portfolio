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
        const body = await req.json();
        const token = body.token;

        if (!token) {
            return NextResponse.json({ message: 'Invalid token' });
        } 
        
        if (token == process.env.NEXT_PUBLIC_SECRET_TOKEN) {    
            const data = {...body, token: undefined}        
            await connectMongoDB();
            const work = await workDAO.update(params.id, data);
            revalidatePath('/', 'layout')
            return NextResponse.json(work);
        } else {
            return NextResponse.json({ message: 'Invalid token' });
        }
    } catch (error) {
        console.error(error);
    }
}

//DELETE
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const body = await req.json();
        const token = body.token
        if (!token) {
            return NextResponse.json({ message: 'Invalid token' });
        }      

        if (token == process.env.NEXT_PUBLIC_SECRET_TOKEN) {            
            await connectMongoDB();
            const work = await workDAO.delete(params.id);
            revalidatePath('/', 'layout')
            return NextResponse.json(work);
        } else {
            return NextResponse.json({ message: 'Invalid token' });
        }
    } catch (error) {
        console.error(error);
    }
}