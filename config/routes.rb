Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Handle Google login callback
  post 'auth/request', to:'authorization#get_authorization'

  namespace :api do
    namespace :v1 do
      resources :items
      resources :lists
    end
end
end
