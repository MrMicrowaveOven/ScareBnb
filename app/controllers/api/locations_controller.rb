class Api::LocationsController < ApplicationController
  def index
    if (params[:bounds])
      @locations = Location.includes(:location_images).in_bounds(params[:bounds])
    else
      @locations = Location.includes(:location_images).all
    end
  end

  def show
    if (params[:id])
      @location = Location.includes(:location_images).where(id: params[:id]).first
    else
      @location = nil
    end
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
    params.require(:location).permit(:title, :description, :lat, :lng, :occupancy, :images, :full_address)
  end
end
