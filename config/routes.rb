# == Route Map
#
#           Prefix Verb   URI Pattern                  Controller#Action
#             root GET    /                            static_pages#root
#            users POST   /users(.:format)             users#create
#         new_user GET    /users/new(.:format)         users#new
#             user GET    /users/:id(.:format)         users#show
#          session POST   /session(.:format)           sessions#create
#      new_session GET    /session/new(.:format)       sessions#new
#                  DELETE /session(.:format)           sessions#destroy
#    api_locations GET    /api/locations(.:format)     api/locations#index {:format=>:json}
#                  POST   /api/locations(.:format)     api/locations#create {:format=>:json}
# new_api_location GET    /api/locations/new(.:format) api/locations#new {:format=>:json}
#     api_location GET    /api/locations/:id(.:format) api/locations#show {:format=>:json}
#

Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :locations, only: [:index, :show, :create, :new]
  end
end
