# Szakitsunk.hu – Breakup Letter as a Service 💔

**Szakitsunk.hu** was a playful experimental project:  
an online service where users could generate and send **breakup letters** via email.  

The platform demonstrated how to build a **full-stack SaaS-style app** with  
a React/Next.js frontend and a backend API for email delivery.  

---

## ✨ Features

- 📝 **Letter Templates** – predefined breakup letter styles (funny, formal, dramatic)  
- 📩 **Email Sending** – letters delivered via backend API endpoint  
- 🎨 **Customizable Content** – sender, recipient, and reason fields  
- 🔐 **Simple API Contract** – easy to integrate backend service  

---

## 🛠️ Backend Requirements

The backend provides an `/api/send-email` endpoint that accepts `POST` requests.

### Request format

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
````

### Response format

```json
{
  "success": boolean
}
```

---

## 🌐 Frontend

* **Framework:** Next.js (React)
* **UI:** TailwindCSS (planned)
* **Environment Variables:** none required (all email logic handled by backend)

---

## 📅 Project Status

✅ **Prototype built** – functional frontend and API contract.
🚧 Backend email service integration was left for further development.

---

## 📌 Roadmap (Original Vision)

* [x] Letter template selection
* [x] Customization form (sender, recipient, reason)
* [ ] Email sending via backend service
* [ ] Analytics dashboard (most-used breakup reasons 😅)
* [ ] Premium tier (custom template design)

---

## 📜 License

Released under the **MIT License**.

---

**Szakitsunk.hu** was a lighthearted project that showcased
how a humorous idea can be turned into a **real web application**,
combining frontend, backend, and API-driven design.

```
