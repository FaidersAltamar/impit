import { Actor } from 'apify';
import { Impit } from 'impit';

await Actor.init();

try {
    const input = await Actor.getInput();
    const { access_token, payload } = input;

    if (!access_token || !payload) {
        await Actor.pushData({
            status: 400,
            body: JSON.stringify({ error: 'Missing access_token or payload' }),
        });
        await Actor.exit();
        return;
    }

    console.log('Starting ChatGPT request with impit...');
    console.log('Model:', payload.model || 'auto');

    const impit = new Impit({ browser: 'chrome' });

    const response = await impit.fetch(
        'https://chatgpt.com/backend-api/conversation',
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json',
                'Accept': 'text/event-stream',
                'Origin': 'https://chatgpt.com',
                'Referer': 'https://chatgpt.com/',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            },
            body: JSON.stringify(payload),
        }
    );

    const text = await response.text();
    console.log(`Response status: ${response.status}`);
    console.log(`Response length: ${text.length} chars`);

    await Actor.pushData({
        status: response.status,
        body: text,
    });

} catch (error) {
    console.error('Error:', error.message);
    await Actor.pushData({
        status: 500,
        body: JSON.stringify({ error: error.message }),
    });
}

await Actor.exit();
