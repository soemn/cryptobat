var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Define collection and schema for Items
var strategySchema = new Schema(
  {
    TradeType: String, // tradebuy or tradesell
    MarketName: String,
    Quantity: Number,
    Rate: Number,
    ConditionType: String, // supported options are 'NONE', 'GREATER_THAN', 'LESS_THAN'
    Target: Number, // used in conjunction with ConditionType

    // Fixed. No input allowed by users
    OrderType: { type: String, default: 'LIMIT' },
    TimeInEffect: { type: String, default: 'GOOD_TIL_CANCELLED' }
  },
  {
    timestamps: true
  }
)

strategySchema.methods.trade = function () {
  console.log(`This is a schema method. The trade type for this strategy is ${this.TradeType}`)
}

const Strategy = mongoose.model('Strategy', strategySchema)
module.exports = Strategy
