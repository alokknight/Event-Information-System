const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true,
        trim: true,
      },
      body: {
        type: String,
        required: true,
      },
      snippet: {
        type: String,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      date: {
        type: String,
        required: true,
      },
    },{ timestamps: true }
);

eventSchema.pre('validate', function (next) {
    if (this.body) {
      this.body = htmlPurify.sanitize(this.body);
      this.snippet = stripHtml(this.body.substring(0, 100)).result;
      // this.body = stripHtml(this.body).result;
    }
    next();
  });

module.exports = mongoose.model('Event', eventSchema);