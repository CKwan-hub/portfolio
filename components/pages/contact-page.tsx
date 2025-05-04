"use client"

import { PageLayout } from "@/components/layout/page-layout"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export function ContactPage() {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
