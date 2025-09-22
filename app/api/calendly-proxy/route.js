import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET(request) {
  const calendlyUrl = 'https://calendly.com/ishkumar-dev-cal/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=fffefe&primary_color=4f9276';

  try {
    const response = await fetch(calendlyUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch Calendly page: ${response.statusText}`);
    }
    const html = await response.text();

    const $ = cheerio.load(html);

    // Remove the branding div
    $('[data-id="branding"]').remove();

    // You might also want to remove any script tags that re-insert branding or are not needed
    // For example, if there's a script that specifically adds the branding back, you'd need to target it.
    // This is highly dependent on Calendly's internal structure and might change.

    return new NextResponse($.html(), {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Error in Calendly proxy:', error);
    return NextResponse.json({ message: 'Failed to load Calendly widget.' }, { status: 500 });
  }
}
