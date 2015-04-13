/**
 * scramble.js
 * Given a text string replaces characters in different ways: swap, randomize, reverse, redact
 * Aurthor: Jason McIver
 * Website: jasonmciver.com
 * License: MIT
 */

$.scramble = {
      id: 'scramble',
      version: '0.1',
      aurthor: 'Jason McIver',
      defaults: { // default settings
          redactChar: '*',
          hashmap: 'qazwsxedcrfvtgbyhnujmikolpQWERTYUIOPASDFGHJKLZXCVBNM 0192837465',
          type: 'swap',
          words: [] //if empty apply to entire text, else only apply to words in this array
      },
      options: {

      },
      //hashmap: 'qazwsxedcrfvtgbyhnujmikolp 0192837465',
          alpha: 'abcdefghihklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890',

    selectWord: function($, text, opts){
      newText = '';
      $.each(text.split(' '),function(index, word){
        if($.inArray(word, opts.words) !== -1){
          newText = newText+' ' + $.scramble.mask(opts.words[$.inArray(word, opts.words)], opts);
        }else{
          newText = newText+' ' + word;
        }
      })
      return newText;
      },
      mask: function(text, opts){
        switch(opts.type){
        case 'swap':
          return this.swap(text, opts);
          break;
        case 'reverse':
          return this.reverse(text, opts);
          break;
        case 'shuffle':
          return this.shuffle(text);
          break;
        case 'redact':
          return this.redact(text, opts);
          break;
        default:
          return this.swap(text);
          break;
      }

      },



      //cat = zqj
      swap: function(text, opts){
      var hashmapArray = opts.hashmap.split('');
      var secretArray = text.split('');
        var mask = '';

      for (var i = 0; i < secretArray.length; i++) {
        mask = mask + hashmapArray[this.alpha.indexOf(secretArray[i])];
      }
      return mask;
      },

      //randomize string
      shuffle: function(text){
      var a = text.split(''),
        n = a.length;

        for(var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join('');
      },

      //cat = tac
      reverse: function(text){
      var hashmapArray = this.defaults.hashmap.split('');
      var secretArray = text.split('');
        var mask = '';

      for (var i = secretArray.length-1; i >= 0; i--) {
        mask = mask + secretArray[i];
      }
      return mask;
      },

      //blocks all characters, cat = ???
      redact: function(text, opts){
        var secretArray = text.split('');
        var mask = '';

        for (var i = 0; i < secretArray.length; i++) {
        mask = mask + opts.redactChar;
      }
      return mask;
      }

};

(function($) {
    //Attach this new method to jQuery
    $.fn.extend({

        scramble: function(params) {

            return this.each(function () {

                //create reference to self
                var $t = $(this);
                //combine defaults and defined options
                var opts = $.extend({},$.scramble.defaults, params);
                
                //store real text string before any changes are made, will be used to reveal text on mouseenter
                $t.txt = $(this).text();

                //scramble text on hover
                $(this).hover(function() {
                  if(opts.words.length !== 0) {
                    $(this).text($.scramble.selectWord($, $t.txt, opts));
                  } else {
                    $(this).text($.scramble.mask($t.txt, opts));
                  }
                },
                //normalize text
                function() {
                  $(this).text($t.txt);
                })

            });
        }
      
    })
})
(jQuery);