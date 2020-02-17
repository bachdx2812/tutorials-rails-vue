# frozen_string_literal: true

module ApplicationHelper
  def notifications
    inner_options = {
      ref: 'notifications'
    }

    content_tag('notifications', nil, inner_options, false)
  end
end
