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
end
