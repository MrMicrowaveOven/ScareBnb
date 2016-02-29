# == Route Map
#
#           Prefix Verb URI Pattern                  Controller#Action
#             root GET  /                            static_pages#root
#    api_locations GET  /api/locations(.:format)     api/locations#index {:format=>:json}
#                  POST /api/locations(.:format)     api/locations#create {:format=>:json}
# new_api_location GET  /api/locations/new(.:format) api/locations#new {:format=>:json}
#     api_location GET  /api/locations/:id(.:format) api/locations#show {:format=>:json}
#

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :locations, only: [:index, :show, :create, :new]
  end
end
