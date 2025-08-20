interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  submitted: string; // timestamp
}

export const saveContactForm = (data: ContactFormData) => {
  const contacts = JSON.parse(localStorage.getItem('contactForms') || '[]');
  contacts.push({
    ...data,
    submitted: new Date().toISOString()
  });
  localStorage.setItem('contactForms', JSON.stringify(contacts));
};