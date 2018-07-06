var assert = require('assert');
var module_index = require('./index.js');
var chrome_index = require('./chrome.js');

describe('テストします！', function () {
    describe('足して！', function () {
        it('1 + 2 は 3 ですかね', function () {
            assert.equal(module_index.sum(1, 2), 3);
        });
        it('59813 + 49813 は 109626 ですかね', function () {
            assert.equal(module_index.sum(59813, 49813), 109626);
        })
    });
    describe('挨拶して！', function () {
        it('挨拶しろおおおおおおおおお morita に', function () {
            assert.equal(module_index.say("morita"), "Hello! morita san")
        });
        it('挨拶しろおおおおおおおおお お客さん に', function () {
            assert.equal(module_index.say("お客さん"), "Hello! お客さん san")
        });
    });
    describe('ブラウザテスト', () => {
        it('タイトル取得', function () {
            this.timeout(10000);
            return chrome_index.getUrl(`http://bmj-inc.com/`).then((t) => {
                assert.equal(t, `BMJ株式会社｜ソフトウェアロボット、AIを活用して自動化を支援します`);
            });
        })
    })
});