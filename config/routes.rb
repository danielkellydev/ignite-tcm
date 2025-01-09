Rails.application.routes.draw do
  root 'landing#index'
  post '/send_message', to: 'landing#send_message'
end