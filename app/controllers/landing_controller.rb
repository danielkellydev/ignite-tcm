class LandingController < ApplicationController
  def index
  end

  def about
    render layout: false if turbo_frame_request?
  end

  def services
    render layout: false if turbo_frame_request?
  end

  def contact
    render layout: false if turbo_frame_request?
  end

  def send_message
    begin
      mail = ContactMailer.contact_email(contact_params).deliver_now
      flash.now[:notice] = 'Message sent successfully'
    rescue => e
      flash.now[:alert] = "Could not send message: #{e.message}"
    end
    
    if turbo_frame_request?
      render partial: "landing/contact", layout: false
    else
      render :contact
    end
  end

  private

  def contact_params
    params.permit(:authenticity_token, :commit, :name, :email, :message)
  end
end