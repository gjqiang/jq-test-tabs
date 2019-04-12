/**
 * Created by gjqiang on 2019/4/12.
 */
/**
 * Created by gjqiang on 2018/8/22.
 */
(function($) {

    $.tabs = function($el, options) {
        var _this = this
        _this.$el = $el
        _this.init = function () {
            _this.options =  $.extend({},$.tabs.defaultOptions, options);
            _this.$nav = _this.$el.find(_this.options.headingsSelector);
            _this.$content = _this.$el.find(_this.options.contentsSelector);
            _this.$nav.on('click', 'li', function () {
                var $current = $(this)
                if ($current.hasClass('active')) {
                    return false
                } else {
                    var id = $current.attr('data-tab')
                    _this.$el.find('.active').removeClass('active')
                    $current.addClass('active')
                    _this.changeTo(id)
                }
            })
        }
        _this.init()
    };

    /* changeTo - Change the current tab to given tab
     *
     * @param   tabID   (String)  The ID of the tab to change to
     */
    $.tabs.prototype.changeTo = function(tabID) {
        var _this = this;
        _this.$content.find(tabID).siblings().hide()
        _this.$content.find(tabID).fadeIn()
    };

    $.fn.tabs = function (options) {
        var _this = this
        return new $.tabs(_this, options)
    }


    $.tabs.defaultOptions = {
        headingsSelector: ".tab-header",        // jQuery selector string to find headings list(s) inside the target element
        contentsSelector: ".tab-content-container",  // jQuery selector string to find contents container(s) inside the target element
    };

})(jQuery);