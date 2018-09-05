Rails.application.routes.draw do
  get 'items/update_changes', :to => 'items#update_changes'

  resources :items
  resources :bids

  root 'items#index'
end
