import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {	
    
        revalidatePath('/works');
        return NextResponse.json({ message: 'Revalidated' });

    } catch (error) {
        return NextResponse.json({ error: 'Error revalidating' });
    }
    
}