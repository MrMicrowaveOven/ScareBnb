class Api::LocationsController < ApplicationController
  def index
    @locations = Location.in_bounds(params[:bounds])
    render json: @locations
  end

  def create
    @location = Location.new(location_params)
    if @locaton.save
      redirect_to :index
    else
      render :new
    end
  end

  def location_params
    params.require(:location).permit(:description, :lat, :lng)
  end
end
