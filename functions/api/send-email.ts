interface EmailRequest {
  recipientName: string;
  senderName: string;
  reason: string;
  email: string;
  template: {
    id: number;
    title: string;
    content: string;
  };
}

export const onRequestPost: PagesFunction = async (context) => {
  try {
    const request = context.request;
    const data: EmailRequest = await request.json();
    
    // Email tartalom generálása
    const content = data.template.content
      .replace('{name}', data.recipientName)
      .replace('{reason}', data.reason)
      .replace('{sender}', data.senderName);

    // Email küldése Cloudflare Email Routing segítségével
    const email = {
      to: data.email,
      from: "noreply@szakitsunk.hu",
      subject: "Fontos üzenet számodra",
      text: content,
      html: content.replace(/\n/g, '<br>')
    };

    await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: data.email, name: data.recipientName }],
          },
        ],
        from: {
          email: "noreply@szakitsunk.hu",
          name: "Szakitsunk.hu"
        },
        subject: "Fontos üzenet számodra",
        content: [
          {
            type: 'text/plain',
            value: content,
          },
          {
            type: 'text/html',
            value: content.replace(/\n/g, '<br>'),
          },
        ],
      }),
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send email' }),
      {
        status: 500,
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
};