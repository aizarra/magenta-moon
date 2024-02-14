import type { APIRoute } from 'astro';
import { XataClient } from '../../xata';

export const post: APIRoute = async ({ request, redirect }) => {
  console.log("API route /api/submit has been hit");
  const client = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });
  const formData = await request.formData();
  console.log("Received form data:", Object.fromEntries(formData));
  const Name = formData.get('name') as string;
  const EMail = formData.get('email') as string;
  const Message = formData.get('message') as string;

  if (!Name || !EMail || !Message) {
    return new Response('Missing fields', { status: 400 });
  }

  try {
    await client.db.Contacts.create({
      Name,    
      EMail,
      Message,
    });
    return redirect('/thankyou', 303);
  } catch (error:any) {
    console.error('Error interacting with Xata:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
