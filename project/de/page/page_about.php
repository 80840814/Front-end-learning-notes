<?php
/**
 * 关于我们页面
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
</section>
<?php include View::getView('footer'); ?>