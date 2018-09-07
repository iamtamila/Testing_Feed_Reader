/* TESTs against application.
 */

$(function() {

/*defining variables for tests*/
var start
var end

/*First TEST: allFeeds are defined and not empty*/

describe('RSS Feeds', function() {
  it('are defined', function() {
    expect(allFeeds).toBeDefined();
    expect(allFeeds.length).not.toBe(0);
  });
  /* URLs are defined and not empty*/
  it('URLs are defined', function() {
    for (var i=0; i<allFeeds.length; i++) {
      expect(allFeeds[i].url).toBeDefined();
      expect(allFeeds[i].url.length).not.toBe(0);
    };
  });
  /* Name is defined and not empty*/
  it('NAME is defined', function() {
    for (var i=0; i<allFeeds.length; i++) {
      expect(allFeeds[i].name).toBeDefined();
      expect(allFeeds[i].name.length).not.toBe(0);
    };
  });
});

/*Second TEST: "The menu visibility" */

describe ('The menu', function () {
  /*The menu is hidden by default*/
  it('The menu is hidden', function () {
    expect($('body').hasClass('menu-hidden')).toEqual(true);
  });
  /*The menu changes visibility when clicked*/
  it('The menu changes visibility', function () {
    /*visible*/
    $('.menu-icon-link').trigger('click');
    expect($('body').hasClass('menu-hidden')).toBe(false);
    /*hidden*/
    $('.menu-icon-link').trigger('click');
    expect($('body').hasClass('menu-hidden')).toBe(true);
  });
});

/* Third TEST: "Initial Entries" */

describe('Initial Entries', function() {
  beforeEach(function (done) {
    loadFeed(0,function () {
      done();
    });
  });
  /*checking if there's an .entry element within the .feed container*/
  it('Entry element within the feed container', function () {
    expect($('.feed .entry').length).toBeGreaterThan(0);
  });
});

/* Fourth TEST: New Feed Selection */

/*checking that each new feed changing content*/
describe ('New Feed Selection', function () {
  beforeEach (function (done) {
    $('.feed').empty();
    loadFeed (0, function () {
      start = $('.feed').find(allFeeds.url);
      loadFeed (1, function () {
        end = $('.feed').find(allFeeds.url);
        done();
      });
    });
  });
  it('New feed changing content', function () {
    expect(start).not.toBe(end);
  });
});
}());
