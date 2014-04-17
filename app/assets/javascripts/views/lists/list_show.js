Trellino.Views.ListShow = Backbone.View.extend({


  template: JST["lists/show"],
  tagName: "li",
  className: "list",

 // new Trellino.Views.BoardShow({collection: cards})
  // new Trellino.Views.BoardShow({model: board, cards: cards, collection2: boardMembers})
  //this.collection
  events: {
    //add handler on addCard button
  },

  initialize: function(options){
    //lists each have cards; implement later
    this.cards = options.cards;
    this.subviews = [];
  },

  render: function(){
    var renderedContent = this.template({
      list: this.model,
      cards: this.cards
    });

    this.$el.html(renderedContent);

    var that = this;

    // this.cards.each(function(card){
    //   var view = new Trellino.Views.CardShow({ model: card });
    //   that.subviews.push(view);
    //   that.$el.find(".card-list").append(view.render().$el);
    // });

    return this;
  }
});