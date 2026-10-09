import { phoneNumber } from "../data/social";

/* One place for "a visitor wants to talk to us". The contact form and the
   cost estimator both post here, so a lead lands in the same sheet whichever
   door it came through. */

// Google Apps Script web app behind the contact form. It reads the
// url-encoded fields below by name.
const LEADS_URL =
  "https://script.google.com/macros/s/AKfycbwmUK6mBWpFzkMUgzo3Afb-gswa8sqx_MglFhrcERGdICa3lpIDIPJ_4nVzAr7K3vBM/exec";

export type Lead = {
  name: string;
  email: string;
  company: string;
  subject: string;
  budget: string;
  message: string;
};

/* `no-cors`: Apps Script answers with a redirect the browser will not expose
   to us, so the response is opaque. A network failure still rejects, which is
   the only failure we can actually observe. */
export async function submitLead(lead: Lead): Promise<void> {
  const params = new URLSearchParams(lead);
  await fetch(LEADS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
    mode: "no-cors",
  });
}

/* wa.me wants the number as bare digits with the country code. */
const whatsappNumber = phoneNumber.replace(/\D/g, "");

export function whatsappLink(text: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}
