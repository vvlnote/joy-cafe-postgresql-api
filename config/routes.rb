Rails.application.routes.draw do
  
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :dish_ingredients
  resources :ingredients
  resources :dishes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.formt.html?
  end
end
