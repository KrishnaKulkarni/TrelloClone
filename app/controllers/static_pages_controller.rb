class StaticPagesController < Api::ApiController
  def root
    @boards = current_user.boards

    # @boards_data =
    # Jbuilder.encode do |json|
    #   json.lists do
    #     json.cards do
    #       json.todo_items
    #       json.user
    #     end
    #   end
    #   json.members
    # end
    #
    # fail
    # @boards = current_user.boards.includes(
   #  {:lists => {:cards => [:todo_items, :user] }}, :members)
   #  .to_json(include: [{:lists => {:cards => [:todo_items, :user] }}, :members])
   #
   #
    # Jbuilder.encode do |json|
   #    json.lists do
   #      json.cards do
   #        json.todo_items
   #        json.user
   #      end
   #    end
   #
   #    json.members
   #
   #  end

  end
end


