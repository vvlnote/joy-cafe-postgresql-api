Rails.application.routes.draw do
  
  resources :dish_ingredients
  resources :ingredients
  resources :dishes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
