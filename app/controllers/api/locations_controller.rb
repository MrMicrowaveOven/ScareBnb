class Api::LocationsController < ApplicationController
  def index
    @locations = Location.in_bounds(params[:bounds])
    render json: @locations
  end

  def location_params
    params.require(:location).permit(:description, :lat, :lng)
  end
end
