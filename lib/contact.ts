// Bar's real contact details (from the workshop portfolio data).
const EMAIL = "1barmoshe1@gmail.com";
const PHONE = "+972546561465"; // wa.me wants the international number, no '+'

const WHATSAPP_NUMBER = PHONE.replace(/[^\d]/g, "");

const DEFAULT_WA_TEXT =
  "Hi Bar, reaching out from Centrical. Let's talk about the AI Focused Full Stack role.";
const DEFAULT_MAIL_SUBJECT = "Centrical x Bar Moshe";
const DEFAULT_MAIL_BODY =
  "Hi Bar,\n\nThanks for the page. I'd like to talk about the AI Focused Full Stack Developer role.\n\n";

export const mailRecipient = EMAIL;

export const buildWhatsAppHref = (text: string = DEFAULT_WA_TEXT) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const buildMailtoHref = (
  subject: string = DEFAULT_MAIL_SUBJECT,
  body: string = DEFAULT_MAIL_BODY,
) =>
  `mailto:${mailRecipient}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

export const whatsappHref = buildWhatsAppHref();
export const mailtoHref = buildMailtoHref();
export const cvHref = "/Bar_Moshe_CV_Centrical.pdf";
