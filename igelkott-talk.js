http = require("http");

var Talk = function Talk() {
  this.listeners = {'PRIVMSG': this.talk};

  this.name = 'talk';
  this.help = {
    "default": "",
  };
};


Talk.prototype.talk = function talk(message) {
  var response = this._query(message.parameters[1]);
  if (response)
  {
    var obj = {
      command: 'PRIVMSG',
      parameters: [message.parameters[0], message.prefix.nick+': '+response]
    };
    this.igelkott.push(obj);
  }

};


Talk.prototype._query = function _query(message) {
  // Lets start with a _very_ simple hello matching
  if (new RegExp(this.igelkott.config.server.nick).test(message) &&
    (/hi/.test(message) || /hello/.test(message) || /hej/.test(message) || /hejsa/.test(message)))
  {
    return "hello";
  }
  return false;
};

exports.Plugin = Talk;
