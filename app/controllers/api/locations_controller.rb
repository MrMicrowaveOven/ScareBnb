class Api::LocationsController < ApplicationController
  def index
    if (params[:bounds])
      # debugger
      @locations = Location.in_bounds(params[:bounds])
    else
      @locations = Location.all
    end
  end

  def show
    if (params[:id])
      @location = Location.where(id: params[:id]).first
    else
      @location = nil
    end
  end

  def create
    @location = Location.new(location_params)
    if @location.save
      render json: @location
    else
      # debugger
      render json: {error: "Invalid parameters"}
    end
  end

  def location_params
    params.require(:location).permit(:title, :description, :lat, :lng, :occupancy, :price, :image, :full_address)
  end
end
