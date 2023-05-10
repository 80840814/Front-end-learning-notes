<?php
/**
 * 友情链接
 */
if (!defined('EMLOG_ROOT')) {
    exit('error!');
}
?>
<!-- Content -->
<section class="container">
    <article class="post_article">
        <h3>链接：</h3>
        <ul class="links">
            <?php
            global $CACHE;
            $link_cache = $CACHE->readCache('link');
            foreach($link_cache as $value): ?>
            <li>
                <a rel="noopener noreferrer" href="<?php echo $value['url']; ?>" target="_blank"><?php echo $value['link']; ?></a>
            </li>
            <?php endforeach; ?>
        </ul>
        <hr class="wp-block-separator" />
        <?php echo $log_content; ?>
    </article>
</section>
<?php include View::getView('footer'); ?>