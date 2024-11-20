## Szakitsunk.hu

A szakítólevél küldő szolgáltatás frontend része. Az email küldéshez szükséges egy backend API endpoint létrehozása, amely a `/api/send-email` végponton fogadja a kéréseket.

### Backend követelmények

Az API endpoint a következő formátumú POST kérést várja:

```json
{
  "recipientName": "string",
  "senderName": "string",
  "reason": "string",
  "email": "string",
  "template": {
    "id": number,
    "title": "string",
    "content": "string"
  }
}
```

A válasz formátuma:

```json
{
  "success": boolean
}
```

### Környezeti változók

A frontend nem igényel környezeti változókat, mivel az email küldés a backend szolgáltatáson keresztül történik.