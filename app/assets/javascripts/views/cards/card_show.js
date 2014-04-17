Trellino.Views.CardShow = Backbone.View.extend({


  template: JST["cards/show"],
  tagName: "li",
  className: "card",

 // new Trellino.Views.BoardShow({collection: cards})
  // new Trellino.Views.BoardShow({model: board, cards: cards, collection2: boardMembers})
  //this.collection
  events: {
  },

  initialize: function(options){
    //cards each have todo_items; implement later
    this.cards = options.cards;
    this.members = options.members;
    this.subviews = [];
  },

  render: function(){
    var renderedContent = this.template({
      board: this.model
    });

    this.$el.html(renderedContent);

    var that = this;

    this.cards.each(function(card){
      var view = new Trellino.Views.CardShow({ model: card });
      that.subviews.push(view);
      that.$el.children(".card-list").append(view.render().$el);
    });

    this.members.each(function(member){
      var view = new Trellino.Views.MemberShow({ model: member });
      that.subviews.push(view);
      that.$el.children(".member-list").append(view.render().$el);
    });

    return this;
  }
});