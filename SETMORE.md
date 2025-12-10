# Setmore Booking URL Configuration

The Chang Thong Thaimassage website links all booking buttons to the Setmore scheduling portal via the `SETMORE_BOOKING_URL` constant defined in `src/constants.js`. By default it uses `https://changthongthaimassage.setmore.com` as a placeholder.

## How to update before launch

1. Ask the client for their official Setmore booking page URL.
2. Create a `.env` or `.env.production` file in the project root with:

```
VITE_SETMORE_URL=https://your-client-setmore-url.setmore.com
```

3. Restart the Vite dev server (or rebuild production) so the new environment variable is picked up.

> ⚠️ All booking buttons (Navbar CTA, Hero CTA, future sections) read from this constant. Make sure the URL is correct before deploying to avoid broken booking links.
