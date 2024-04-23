import {connectMongoDB} from '../../../../dataBase/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import workDAO from '../../../../dataBase/DAO/works.dao';

export async function GET(req: Request, { params }: { params: { lang: string } }) { 
    try {
        await connectMongoDB();
        if (params.lang === "en") {
            const works = await workDAO.getEn();
            return NextResponse.json(works);
        }        
        const works = await workDAO.getEs();
        return NextResponse.json(works);        
    } catch (error) {
        console.error(error);
    }
}