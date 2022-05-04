const mongoose = require('mongoose');
const domPurify = require('dompurify');
const { JSDOM } = require('jsdom')
const htmlPurify = domPurify(new JSDOM().window);
const {stripHtml} = require("string-strip-html");

const eventSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
      eTitle: {
        type: String,
        // required: true,
        trim: true,
      },
      eName: {
        type: String,
        required: true
      },
      eOrganiser: {
        type: String,
        required: true
      },
      eBody: {
        type: String,
        required: true,
      },
      snippet: {
        type: String,
      },
      eDate: {
        type: String,
        required: true,
      },
      eVenue: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true,
      },
      pinCode: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true,
      },
      mobNo: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      userEmail: {
        type: String,
        required: true
      },
    },{ timestamps: true }
);

eventSchema.pre('validate', function (next) {
    if (this.eBody) {
      this.eBody = htmlPurify.sanitize(this.eBody);
      this.snippet = stripHtml(this.eBody.substring(0, 100)).result;
      // this.body = stripHtml(this.body).result;
    }
    next();
  });

module.exports = mongoose.model('Event', eventSchema);