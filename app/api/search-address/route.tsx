import { NextResponse } from "next/server";

const MAP_BOX_BASE_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
const ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

export async function GET(request:any) {
    
    const { searchParams } = new URL(request.url);
    const searchText =  searchParams.get('q');
 
    const endpoint = `${MAP_BOX_BASE_URL}/${encodeURIComponent(searchText || '')}.json?access_token=${ACCESS_TOKEN}&autocomplete=true&limit=5`;
    const res = await fetch(endpoint, { headers: { "Content-Type": 'application/json' }});
    const result = await res.json();
   
    return NextResponse.json(result);
} 