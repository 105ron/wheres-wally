Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    get '/levels', to: 'difficulties#index'
    get '/levels/:id', to: 'difficulties#show'
    resources :games, only: [:show]
  end

  # Let React app handle all other routes
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
