class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    render json: @benches
  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
