class ContactMailer < ApplicationMailer
  def contact_email(message_params)
    @message = message_params
    mail(
      to: 'helloignitetcm@gmail.com',
      subject: 'New Contact Form Submission - Ignite TCM'
    )
  end
end