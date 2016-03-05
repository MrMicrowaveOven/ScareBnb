class SessionsController < ApplicationController
  def new
  end

  def create
    debugger
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user
      sign_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid email or password"]
      render :new
    end
  end

  def destroy
    sign_out
    render :new
  end

  private
  def user_params
    params.require(:user).permit(:password, :email)
  end
end
