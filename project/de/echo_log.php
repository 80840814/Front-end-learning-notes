<?php
/**
 * 阅读文章页面
 */
if (!defined('EMLOG_ROOT')) {
	exit('error!');
}
?>
<!-- Content -->
<section class="container">
    <article class="post_article">
        <?php echo $log_content; ?>
    </article>
    <ul class="tags">
        <?php blog_tag($logid); ?>
    </ul>
    <nav class="nearbypost">
        <?php neighbor_log($neighborLog); ?>
    </nav>
</section>
<!-- Comments -->
<section class="comments" id="comments">
    <div class="container" data-no-instant="">
        <?php blog_comments($comments); ?>
        <nav class="navigation comment-navigation" role="navigation" aria-label="评论">
            <h2 class="screen-reader-text">评论导航</h2>
            <div class="nav-links">
                <div class="nav-previous">
                    <a href="#comment-page-2#comments">Old comments</a>
                </div>
            </div>
        </nav>
        <?php blog_comments_post($logid, $ckname, $ckmail, $ckurl, $verifyCode, $allow_remark); ?>
        <!-- #respond -->
    </div>
</section>
<?php include View::getView('footer'); ?>
