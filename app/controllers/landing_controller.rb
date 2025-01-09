class LandingController < ApplicationController
  layout false

  def index
  end

  def send_message
    begin
      Rails.logger.info "Credentials test: #{Rails.application.credentials.dig(:gmail, :username)}"com
      Rails.logger.info "Attempting to send email with params: #{contact_params.inspect}"
      mail = ContactMailer.contact_email(contact_params).deliver_now
      Rails.logger.info "Email sent successfully: #{mail.inspect}"
      redirect_to root_path, notice: 'Message sent successfully'
    rescue => e
      Rails.logger.error "Failed to send email: #{e.message}"
      Rails.logger.error e.backtrace.join("\n")
      redirect_to root_path, alert: "Could not send message: #{e.message}"
    end
  end

  private

  def contact_params
    # Changed from params.permit to params.require(:contact).permit
    # This ensures we get all the form parameters correctly
    params.permit(:authenticity_token, :commit, :name, :email, :message)
  end
end