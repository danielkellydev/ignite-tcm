Rails.application.routes.draw do
  root 'landing#index'
  get '/about', to: 'landing#about'
  get '/services', to: 'landing#services'
  get '/contact', to: 'landing#contact'
  post '/send_message', to: 'landing#send_message'
end