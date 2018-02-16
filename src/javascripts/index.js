'use strict';

class Hoge {
  static get HOGE() {
    return 'HOGEHOGE';
  }

  fufufu() {
    consle.log(`show HOGE:${this.HOGE}`);
  }
}

exports.Hoge = Hoge;
