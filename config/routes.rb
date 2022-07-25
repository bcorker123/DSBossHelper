Rails.application.routes.draw do
  get '/me', to: "users#show"
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  #resources :users
  scope '/api' do 
    resources :bosses, only: [:index]
    resources :characters, only: [:index, :create, :update]
    resources :builds, only: [:index]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "*path", to: "fallback#index", constraints: ->(req) {!req.xhr? && req.format.html? }
end
