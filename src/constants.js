export const COLORS = Object.freeze({
  primary: '#1A4731',
  primaryAccent: '#D4AF37',
  backgroundLight: '#F9F6F2',
  backgroundDark: '#1A4731',
  textLight: '#333333',
  textDark: '#F9F6F2',
})

export const SETMORE_BOOKING_URL =
  import.meta.env.VITE_SETMORE_URL ||
  'https://changthongthaimassage.setmore.com'

export const CONTACT_INFO = Object.freeze({
  name: 'Chang Thong Thaimassage',
  phone: '+4915159236289',
  email: 'changthongthaimassage@gmail.com',
  addressLine1: 'Fuggerstraße 6',
  addressLine2: '10777 Berlin',
})

export const OPENING_HOURS = Object.freeze([
  { day: 'Mon - Sat', time: '10am - 8pm' },
  { day: 'Sunday', time: 'Closed' },
])

export const SOCIAL_LINKS = Object.freeze({
  facebook: 'https://facebook.com/changthongthaimassage', // TODO: Update with actual Facebook page
  instagram: 'https://instagram.com/changthongthaimassage', // TODO: Update with actual Instagram handle
  whatsapp: 'https://wa.me/4915159236289', // Updated with actual phone number
})
