"use client"

import { ContactForm } from "@/components/contact/contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
