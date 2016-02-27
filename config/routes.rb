# == Route Map
#
#      Prefix Verb URI Pattern            Controller#Action
# api_locations GET  /api/locations(.:format) api/locations#index {:format=>:json}
#             POST /api/locations(.:format) api/locations#create {:format=>:json}
#

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :locations, only: [:index, :create, :new]
  end
end
