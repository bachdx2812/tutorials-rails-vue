# frozen_string_literal: true

class UsersController < ApplicationController
  include Pagy::Backend

  def index
    @pagy, @users = pagy(User.all, items: params[:per_page] || 20)

    respond_to do |format|
      format.html
      format.json do
        render json: @users,
               adapter: :json,
               each_serializer: UserSerializer,
               meta: {
                 total: @pagy.count,
                 page: @pagy.page,
                 from: @pagy.from,
                 to: @pagy.to,
                 series: @pagy.series
               }
      end
    end
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: user, status: :created
    else
      render json: user.errors.to_hash(true), status: :unprocessable_entity
    end
  end

  def update
    user = User.find(params[:id])

    if user.update(user_params)
      render json: user, status: :created
    else
      render json: user.errors.to_hash(true), status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :description, :gender, :school_id)
  end
end
