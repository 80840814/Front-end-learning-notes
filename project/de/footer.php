<?php
/**
 * 页面底部信息
 */
if (!defined('EMLOG_ROOT')) {
    exit('error!');
}
?>
<footer class="footer">
    <section class="container">
        <ul id="menu-bottom" class="menu"><li id="menu-item-3357" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3357"><a href="/about">关于博主</a></li>
            <li id="menu-item-3356" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3356"><a href="/links">友情链接</a></li>
            <li id="menu-item-4787" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4787"><a href="/archives">文章归档</a></li>
        </ul>        <div style="display: flex;justify-content: space-between;">
            <div class='left'>
                <span>&copy; 2021 <a href="<?php echo BLOG_URL; ?>"><?php echo $blogname; ?></a></span>
            </div>
            <div class='right'>
                <span><a href="https://beian.miit.gov.cn/" target="_blank"><?php echo $icp; ?></a> | Theme by <a href="https://riced.cn" target="_blank">Riced</a></span>
            </div>
        </div>
    </section>
</footer>

<div class="setting_tool iconfont">
    <a class="back2top" style="display:none;"><i class="czs-arrow-up-l"></i></a>
    <?php if ($logid){?>
    <a class="home" href="<?php echo BLOG_URL; ?>"><i class="czs-home-l"></i></a>
    <?php }?>
    <a class="sosearch"><i class="czs-search-l"></i></a>
    <a class="socolor"><i class="czs-clothes-l"></i></a>
    <div class="s">
        <form method="get" action="<?php echo BLOG_URL;?>" class="search">
            <input class="search-key" name="keyword" autocomplete="off" placeholder="输入关键词..." type="text" value="" required="required">
        </form>
    </div>
    <div class="c">
        <ul>
            <li class="color undefined">默认</li>
            <li class="color sepia">护眼</li>
            <li class="color night">夜晚</li>
            <li class="hr"></li>
            <li class="font serif">Serif</li>
            <li class="font sans">Sans</li>
        </ul>
    </div>
</div>

<script type='text/javascript' id='ajax-comment-js-extra'>
    /* <![CDATA[ */
    var ajaxcomment = {"ajax_url":"<?php echo BLOG_URL; ?>index.php?action=addcom","order":"desc","formpostion":"after"};
    /* ]]> */
</script>
<script type='text/javascript' src='<?php echo TEMPLATE_URL; ?>js/ajax-comment.js?ver=<?php echo Option::EMLOG_VERSION_TIMESTAMP; ?>' id='ajax-comment-js'></script>
<script type='text/javascript' src='<?php echo TEMPLATE_URL; ?>js/comment-reply.min.js?ver=5.8.2' id='comment-reply-js'></script>
<script data-no-instant>
    (function ($) {
        $.extend({
            adamsOverload: function () {
                $(".post_article a").attr("rel", "external");
                $("a[rel='external']:not([href^='#']),a[rel='external nofollow']:not([href^='#'])").attr("target", "_blank");
                $("a.vi,.gallery a,.attachment a").attr("rel", "");
                $.viewImage({
                    'target': '.gallery a,.gallery img,.attachment a,.post_article img,.post_article a,a.vi',
                    'exclude': '.readerswall img,.gallery a img,.attachment a img'
                });
                Lately({
                    'target': '.commentmetadata a:first-child,.infos time,.post-list time'
                });
                prettyPrint();

                $('ul.links li a').each(function () {
                    if ($(this).parent().find('.bg').length === 0) {
                        $(this).parent().append('<div class="bg" style="background-image:url(https://www.google.com/s2/favicons?domain=' + $(this).attr("href") + ')"></div>')
                    }
                });

                // * Safari
                if (navigator.vendor.indexOf("Apple") > -1) {
                    $("[srcset]").each((index, img) => {
                        img.outerHTML = img.outerHTML;
                    });
                }
                // * 这个是每日一语
                if ($('.placard').length) {
                    $.get("https://v1.hitokoto.cn", (data) => {
                        $('.placard').text(data.hitokoto);
                    });
                }
            }
        });
    })(jQuery);
    InstantClick.on('change', function (isInitialLoad) {
        jQuery.adamsOverload();
        if (isInitialLoad === false) {
            // support MathJax
            if (typeof MathJax !== 'undefined') MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            // support google code prettify
            if (typeof prettyPrint !== 'undefined') prettyPrint();
            // support 百度统计
            if (typeof _hmt !== 'undefined') _hmt.push(['_trackPageview', location.pathname + location.search]);
            // support google analytics
            if (typeof ga !== 'undefined') ga('send', 'pageview', location.pathname + location.search);
        }
    });
    InstantClick.on('wait', function () {
        // pjax href click
    });
    InstantClick.on('fetch', function () {
        // pjax begin
    });
    InstantClick.on('receive', function () {
        // pjax end
    });
    InstantClick.init('mousedown');
</script>
</body>
</html>