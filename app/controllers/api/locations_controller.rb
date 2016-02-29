class Api::LocationsController < ApplicationController
  def index
    @locations = Location.in_bounds(params[:bounds])
    render json: @locations
  end

  def show
    @location = Location.find(params[:id])
    render json: @location
  end

  def create
    # debugger;
    @location = Location.new(location_params)
    if @location.save
      # debugger;
      render json: @location
    else
      # debugger;
      render json: {error: "Invalid parameters"}
    end
  end

  def location_params
    params.require(:location).permit(:description, :lat, :lng, :occupancy)
  end
end
